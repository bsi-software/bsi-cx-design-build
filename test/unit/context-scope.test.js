import {describe, expect, it} from 'vitest';

import ContextScope from '../../src/context-scope';

describe('ContextScope#segment', () => {

  it('Builds the segment from the dropzone name and the position', () => {
    expect(ContextScope.segment('dzl', 0)).toBe('dzl_0');
    expect(ContextScope.segment('dzl', 2)).toBe('dzl_2');
  });

  /**
   * A dropzone ID is usually a UUID, which is not a valid path segment of a Handlebars expression.
   */
  it('Sanitizes a dropzone ID which is not a valid Handlebars path segment', () => {
    expect(ContextScope.segment('20816df1-f8c0-47d1-94a1-1cd124c2b348', 0))
      .toBe('dz_20816df1_f8c0_47d1_94a1_1cd124c2b348_0');
    expect(ContextScope.segment('col-two', 1)).toBe('col_two_1');
  });
});

describe('ContextScope#apply', () => {

  it('Replaces the variable prefix with the scope', () => {
    let content = `{{ ${ContextScope.VARIABLE_PREFIX}link.url }}`;

    expect(ContextScope.apply(content, 'dzl_0')).toBe('{{ dzl_0.link.url }}');
  });

  it('Renders no prefix at all without a scope', () => {
    let content = `{{ ${ContextScope.VARIABLE_PREFIX}link.url }}`;

    expect(ContextScope.apply(content, undefined)).toBe('{{ link.url }}');
  });

  it('Replaces every occurrence of a placeholder', () => {
    let content = `${ContextScope.VARIABLE_PREFIX}a ${ContextScope.VARIABLE_PREFIX}b`;

    expect(ContextScope.apply(content, 'x_0')).toBe('x_0.a x_0.b');
  });

  it('Renders the context scope attribute only with a scope', () => {
    let content = `<div${ContextScope.ATTRIBUTE}>`;

    expect(ContextScope.apply(content, 'dzl_0')).toBe('<div data-bsi-context-scope="dzl_0">');
    expect(ContextScope.apply(content, undefined)).toBe('<div>');
  });

  /**
   * Content is inserted verbatim: '$&' and friends must not be interpreted as replacement patterns.
   */
  it('Does not interpret replacement patterns in the content', () => {
    let content = `${ContextScope.VARIABLE_PREFIX}a $& $\` $1`;

    expect(ContextScope.apply(content, 'x_0')).toBe('x_0.a $& $` $1');
  });
});

describe('ContextScope#dropzone', () => {

  it('Round trips the dropzone ID through the placeholder', () => {
    let placeholder = ContextScope.dropzone('20816df1-f8c0-47d1-94a1-1cd124c2b348');
    let matches = [...placeholder.matchAll(ContextScope.DROPZONE)];

    expect(matches).toHaveLength(1);
    expect(matches[0][1]).toBe('20816df1-f8c0-47d1-94a1-1cd124c2b348');
  });
});
