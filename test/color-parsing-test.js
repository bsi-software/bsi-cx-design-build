#!/usr/bin/env node

const { css } = require('../dist/main.js');

const cases = [
  { name: 'keyword', args: ['red'], expected: { hex: '#ff0000', alpha: 255 } },
  { name: 'hex-3', args: ['#f0f'], expected: { hex: '#ff00ff', alpha: 255 } },
  { name: 'hex-4 (rgba short)', args: ['#f0f8'], expected: { hex: '#ff00ff88', alpha: 136 } },
  { name: 'hex-6', args: ['#ff00ff'], expected: { hex: '#ff00ff', alpha: 255 } },
  { name: 'hex-8 (rgba)', args: ['#ff00ff99'], expected: { hex: '#ff00ff99', alpha: 153 } },
  { name: 'rgb comma', args: ['rgb(255, 0, 255)'], expected: { hex: '#ff00ff', alpha: 255 } },
  {
    name: 'rgba comma alpha fraction',
    args: ['rgba(255, 0, 255, 0.1)'],
    expected: { hex: '#ff00ff1a', alpha: 26 }
  },
  {
    name: 'rgb css4 slash alpha',
    args: ['rgb(255 0 255 / 0.1)'],
    expected: { hex: '#ff00ff1a', alpha: 26 }
  },
  { name: 'numeric rgb', args: [255, 0, 255], expected: { hex: '#ff00ff', alpha: 255 } },
  {
    name: 'numeric rgba alpha fraction',
    args: [255, 0, 255, 0.1],
    expected: { hex: '#ff00ff1a', alpha: 26 }
  }
];

function expectedRgba(expectedHex, expectedAlpha) {
  const normalized = expectedHex.replace('#', '').toLowerCase();
  const red = parseInt(normalized.slice(0, 2), 16);
  const green = parseInt(normalized.slice(2, 4), 16);
  const blue = parseInt(normalized.slice(4, 6), 16);
  return `rgba(${red},${green},${blue},${expectedAlpha / 255})`;
}

function asResult(value) {
  if (value && typeof value === 'object') {
    const sassOutput = typeof value.getSassObject === 'function'
      ? (() => { try { return value.getSassObject().toString(); } catch (e) { return `err: ${e.message}`; } })()
      : '-';

    return {
      outputType: value.constructor?.name ?? 'object',
      output: typeof value.toString === 'function' ? value.toString() : '',
      sassOutput,
      hex: value.hex,
      rgb: value.rgb,
      rgba: value.rgba,
      alpha: value.alpha
    };
  }

  return {
    outputType: typeof value,
    output: String(value),
    sassOutput: '-',
    hex: '-',
    rgb: '-',
    rgba: '-',
    alpha: '-'
  };
}

function bsiPropertyPassThrough(properties, key) {
  return properties[key];
}

function evaluate(actual, expected) {
  if (actual.outputType !== 'CssColor') {
    return {
      pass: false,
      mismatch: `outputType!=CssColor (${actual.outputType})`
    };
  }

  const expRgba = expectedRgba(expected.hex, expected.alpha);
  // SASS serializes opaque colors as keyword/hex, not rgba — only check sassOutput when alpha channel matters
  const sassRelevant = expected.alpha < 255;
  const expRgbaSpaced = expRgba.replace(/,/g, ', '); // SASS uses spaces after commas

  const checks = [
    ['hex', actual.hex === expected.hex],
    ['output(String(value))', actual.output === expected.hex],
    ['alpha', actual.alpha === expected.alpha],
    ['rgba', actual.rgba === expRgba],
    ...(sassRelevant ? [['sassOutput', actual.sassOutput === expRgba || actual.sassOutput === expRgbaSpaced]] : [])
  ];

  const failed = checks.filter(([, ok]) => !ok).map(([label]) => label);

  return {
    pass: failed.length === 0,
    mismatch: failed.length ? failed.join(', ') : ''
  };
}

function truncate(value, width) {
  const stringValue = String(value ?? '');
  if (stringValue.length <= width) {
    return stringValue;
  }

  if (width <= 1) {
    return '…';
  }

  return stringValue.slice(0, width - 1) + '…';
}

function pad(value, width) {
  return truncate(value, width).padEnd(width, ' ');
}

function resolveColumnWidths(rows) {
  // Columns sized to longest actual value so nothing is ever truncated.
  const columns = [
    { key: 'case', title: 'case' },
    { key: 'input', title: 'input' },
    { key: 'expectedOutput', title: 'expOut' },
    { key: 'actualOutput', title: 'actOut' },
    { key: 'actualSassOutput', title: 'sassOut' },
    { key: 'status', title: 'status' }
  ];

  for (const column of columns) {
    const maxDataLen = rows.reduce((max, row) => Math.max(max, String(row[column.key] ?? '').length), 0);
    column.width = Math.max(maxDataLen, column.title.length);
  }

  return columns;
}

function printRouteTable(rows, route) {
  const filtered = rows.filter(row => row.route === route);
  const columns = resolveColumnWidths(filtered);

  const header = `| ${columns.map(column => pad(column.title, column.width)).join(' | ')} |`;
  const separator = `|-${columns.map(column => '-'.repeat(column.width)).join('-|-')}-|`;

  console.log(`\nRoute: ${route}`);
  console.log(header);
  console.log(separator);

  for (const row of filtered) {
    const line = `| ${columns.map(column => pad(row[column.key], column.width)).join(' | ')} |`;
    console.log(line);

    if (row.status === 'FAIL' || row.status === 'ERROR') {
      const mismatchWidth = Math.max((process.stdout.columns ?? 120) - 12, 20);
      console.log(`  mismatch: ${truncate(row.mismatch, mismatchWidth)}`);
    }
  }
}

function run() {
  console.log('Color parsing test against dist/main.js');
  console.log('Output = String(value) / toString() => effektiv genutzter Wert in String-Kontexten.');
  console.log('Spaltenbreiten passen sich automatisch an den längsten Wert an.');

  const rows = [];

  for (const testCase of cases) {
    try {
      const directValue = css.color(...testCase.args);
      const directActual = asResult(directValue);
      const directCheck = evaluate(directActual, testCase.expected);

      rows.push({
        route: 'direct css.color',
        case: testCase.name,
        input: testCase.args.map(arg => JSON.stringify(arg)).join(', '),
        expectedHex: testCase.expected.hex,
        actualHex: directActual.hex,
        expectedAlpha: testCase.expected.alpha,
        actualAlpha: directActual.alpha,
        expectedOutput: testCase.expected.hex,
        actualOutput: directActual.output,
        actualSassOutput: directActual.sassOutput,
        expectedRgba: expectedRgba(testCase.expected.hex, testCase.expected.alpha),
        actualRgba: directActual.rgba,
        outputType: directActual.outputType,
        status: directCheck.pass ? 'PASS' : 'FAIL',
        mismatch: directCheck.mismatch
      });

      const properties = { testColor: directValue };
      const bsiPropertyValue = bsiPropertyPassThrough(properties, 'testColor');
      const viaPropertyActual = asResult(bsiPropertyValue);
      const viaPropertyCheck = evaluate(viaPropertyActual, testCase.expected);

      rows.push({
        route: 'via bsiProperty pass-through',
        case: testCase.name,
        input: testCase.args.map(arg => JSON.stringify(arg)).join(', '),
        expectedHex: testCase.expected.hex,
        actualHex: viaPropertyActual.hex,
        expectedAlpha: testCase.expected.alpha,
        actualAlpha: viaPropertyActual.alpha,
        expectedOutput: testCase.expected.hex,
        actualOutput: viaPropertyActual.output,
        actualSassOutput: viaPropertyActual.sassOutput,
        expectedRgba: expectedRgba(testCase.expected.hex, testCase.expected.alpha),
        actualRgba: viaPropertyActual.rgba,
        outputType: viaPropertyActual.outputType,
        sameReferenceAsDirect: directValue === bsiPropertyValue,
        status: viaPropertyCheck.pass ? 'PASS' : 'FAIL',
        mismatch: viaPropertyCheck.mismatch
      });
    } catch (error) {
      rows.push({
        route: 'direct css.color',
        case: testCase.name,
        input: testCase.args.map(arg => JSON.stringify(arg)).join(', '),
        expectedHex: testCase.expected.hex,
        actualHex: '-',
        expectedAlpha: testCase.expected.alpha,
        actualAlpha: '-',
        expectedOutput: testCase.expected.hex,
        actualOutput: error?.message ?? String(error),
        expectedRgba: expectedRgba(testCase.expected.hex, testCase.expected.alpha),
        actualRgba: '-',
        outputType: 'error',
        status: 'ERROR',
        mismatch: 'exception'
      });
    }
  }

  printRouteTable(rows, 'direct css.color');
  printRouteTable(rows, 'via bsiProperty pass-through');

  const failed = rows.filter(row => row.status === 'FAIL' || row.status === 'ERROR').length;
  const passed = rows.filter(row => row.status === 'PASS').length;

  console.log(`\nSummary: PASS=${passed}, FAIL/ERROR=${failed}`);
  console.log('Hinweis: expOut ist String(value), also der reale Ausgabeformat-String im Template/JS-Kontext.');
}

run();
