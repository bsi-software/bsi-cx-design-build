#!/usr/bin/env node

const assert = require('assert');

require('@babel/register')({
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }]
  ],
  extensions: ['.js'],
  ignore: [/node_modules/]
});

const PropertiesToScssConverter = require('../src/bsi-sass-properties-to-scss').default;
const BsiSassPropertyPlugin = require('../src/bsi-sass-property-plugin').default;
const CssPropertyResolver = require('../src/css/css-property-resolver').default;
const css = require('../src/css/helper');

function createConverter(properties = {}) {
  return new PropertiesToScssConverter({
    properties: {
      proxy: properties
    }
  });
}

function run() {
  const results = [];
  const testCase = (name, fn) => {
    fn();
    results.push(name);
    console.log(`✔ ${name}`);
  };

  const converter = createConverter();

  testCase('array-based font-family list is unquoted and comma-separated', () => {
    assert.strictEqual(
      converter._keyValueToStr('fontFamily', ['Inter', 'Arial', 'sans-serif']),
      '$fontFamily: Inter, Arial, sans-serif;'
    );
  });

  testCase('font-family list item with whitespace is quoted per item', () => {
    assert.strictEqual(
      converter._keyValueToStr('fontFamilyWithSpaces', ['Times New Roman', 'Arial', 'sans-serif']),
      '$fontFamilyWithSpaces: "Times New Roman", Arial, sans-serif;'
    );
  });

  testCase('plain text with comma remains quoted', () => {
    assert.strictEqual(
      converter._keyValueToStr('headlineWithComma', 'Hello, world'),
      '$headlineWithComma: "Hello, world";'
    );
  });

  testCase('space-only string is quoted', () => {
    assert.strictEqual(
      converter._keyValueToStr('headline', 'My Nice Font Name'),
      '$headline: "My Nice Font Name";'
    );
  });

  testCase('http value is quoted', () => {
    assert.strictEqual(
      converter._keyValueToStr('assetUrl', 'https://cdn.example.com/font.woff2'),
      '$assetUrl: "https://cdn.example.com/font.woff2";'
    );
  });

  testCase('path-like value is quoted', () => {
    assert.strictEqual(
      converter._keyValueToStr('winPath', 'C:/Windows/Fonts/arial.ttf'),
      '$winPath: "C:/Windows/Fonts/arial.ttf";'
    );
  });

  testCase('empty string becomes null', () => {
    assert.strictEqual(
      converter._keyValueToStr('emptyValue', ''),
      '$emptyValue: null;'
    );
  });

  testCase('getSassObject values are forwarded as-is', () => {
    const sassObjConverter = createConverter();
    const sassObj = { getSassObject: () => '#ffffff' };
    assert.strictEqual(
      sassObjConverter._keyValueToStr('color', sassObj),
      '$color: #ffffff;'
    );
  });

  testCase('nested map includes unquoted list and quoted string values', () => {
    const mapConverter = createConverter({
      typography: {
        family: ['Inter', 'Arial', 'sans-serif'],
        name: 'Primary Font'
      }
    });
    const scssData = mapConverter.scssData;
    assert.ok(scssData.includes('family: Inter, Arial, sans-serif'));
    assert.ok(scssData.includes('name: "Primary Font"'));
  });

  testCase('bsiProperty() returns array-based font list as CSS list', () => {
    const plugin = new BsiSassPropertyPlugin({
      properties: {
        proxy: {
          typography: {
            fontFamily: ['Inter', 'Arial', 'sans-serif']
          }
        }
      },
      cssPropertyResolver: new CssPropertyResolver()
    });

    const value = plugin.getSassProperty(['typography.fontFamily']);

    assert.strictEqual(value.toString(), 'Inter, Arial, sans-serif');
  });

  testCase('bsiProperty() quotes list items with whitespace', () => {
    const plugin = new BsiSassPropertyPlugin({
      properties: {
        proxy: {
          typography: {
            fontFamily: ['Times New Roman', 'Arial', 'sans-serif']
          }
        }
      },
      cssPropertyResolver: new CssPropertyResolver()
    });

    const value = plugin.getSassProperty(['typography.fontFamily']);

    assert.strictEqual(value.toString(), '"Times New Roman", Arial, sans-serif');
  });

  testCase('bsiProperty() resolves dimension strings like 32px to Sass numbers', () => {
    const plugin = new BsiSassPropertyPlugin({
      properties: {
        proxy: {
          breite: '32px'
        }
      },
      cssPropertyResolver: new CssPropertyResolver()
    });

    const value = plugin.getSassProperty(['breite']);

    assert.strictEqual(value.toString(), '32px');
  });

  testCase('bsiProperty() resolves css.color values to Sass colors', () => {
    const plugin = new BsiSassPropertyPlugin({
      properties: {
        proxy: {
          rot: css.color('#942B0C')
        }
      },
      cssPropertyResolver: new CssPropertyResolver()
    });

    const value = plugin.getSassProperty(['rot']);

    assert.strictEqual(value.toString(), '#942b0c');
  });

  console.log(`\nSCSS properties converter tests passed (${results.length} cases)`);
}

run();