import {describe, expect, it} from 'vitest';

import ContextScope from '../../src/context-scope';
import TemplateElement from '../../src/content-element/template-element';
import Dropzone from '../../src/dropzone/dropzone';
import TemplatePart from '../../src/content-element/template-part/template-part';

const LINK_PART = 'link-1wfD2H';
const TEXT_PART = 'multiline-plain-text-wmiRti';

/**
 * The template of a content element as the Twig pass leaves it: the scope is a placeholder
 * everywhere, the template itself never names one.
 */
function templateSource(elementId, dropzoneIds = []) {
  let dropzones = dropzoneIds.map(id => ContextScope.dropzone(id)).join('');

  return `<div data-bsi-element="${elementId}"${ContextScope.ATTRIBUTE}>`
    + `{{ ${ContextScope.VARIABLE_PREFIX}${TEXT_PART}.value }}${dropzones}</div>`;
}

function templatePart(partContextId, prefill) {
  return new TemplatePart('plain-text', 'Label', partContextId).withRawPrefill(prefill);
}

function element(elementId, dropzoneIds = []) {
  return new TemplateElement()
    .withElementId(elementId)
    .withFile({content: templateSource(elementId, dropzoneIds), path: 'template.hbs.twig'})
    .withTemplateParts(templatePart(TEXT_PART, {value: `${elementId} text`}));
}

function dropzone(dropzoneId, name) {
  let created = new Dropzone(dropzoneId);

  return name ? created.withName(name) : created;
}

describe('TemplateElement#createAbsoluteContextScope', () => {

  it('Has no scope as a plain root element', () => {
    expect(element('button').createAbsoluteContextScope()).toBeUndefined();
  });

  it('Has no scope as a root element with empty dropzones', () => {
    let root = element('column-2', ['dzl']).withDropzones(dropzone('dzl', 'dzl'));

    expect(root.createAbsoluteContextScope()).toBeUndefined();
  });

  /**
   * The own parts of the root element need a scope of their own as soon as nested elements bring
   * their own parts into the same context file.
   */
  it('Uses the artificial root scope with own parts and nested elements', () => {
    let root = element('column-2', ['dzl'])
      .withDropzones(dropzone('dzl', 'dzl').withContentElements(element('button')));

    expect(root.createAbsoluteContextScope()).toBe(ContextScope.ROOT);
  });

  it('Has no scope with nested elements but no own template parts', () => {
    let root = new TemplateElement()
      .withElementId('column-2')
      .withFile({content: templateSource('column-2', ['dzl']), path: 'template.hbs.twig'})
      .withDropzones(dropzone('dzl', 'dzl').withContentElements(element('button')));

    expect(root.createAbsoluteContextScope()).toBeUndefined();
  });
});

describe('TemplateElement#render', () => {

  it('Renders a plain root element without a scope', () => {
    expect(element('button').render(undefined))
      .toBe(`<div data-bsi-element="button">{{ ${TEXT_PART}.value }}</div>`);
  });

  it('Renders the nested content elements into the dropzone placeholder', () => {
    let root = element('column-2', ['dzl'])
      .withDropzones(dropzone('dzl', 'dzl').withContentElements(element('button')));

    expect(root.render(root.createAbsoluteContextScope())).toBe(
      '<div data-bsi-element="column-2" data-bsi-context-scope="root">'
      + `{{ root.${TEXT_PART}.value }}`
      + '<div data-bsi-element="button" data-bsi-context-scope="dzl_0">'
      + `{{ dzl_0.${TEXT_PART}.value }}</div>`
      + '</div>');
  });

  it('Scopes every nested element by its position in the dropzone', () => {
    let root = element('column-2', ['dzl'])
      .withDropzones(dropzone('dzl', 'dzl')
        .withContentElements(element('button'), element('button')));

    expect(root.render(undefined)).toContain('data-bsi-context-scope="dzl_0"');
    expect(root.render(undefined)).toContain('data-bsi-context-scope="dzl_1"');
  });

  it('Keeps the dropzones of one element apart', () => {
    let root = element('column-2', ['dzl', 'dzr'])
      .withDropzones(
        dropzone('dzl', 'dzl').withContentElements(element('button')),
        dropzone('dzr', 'dzr').withContentElements(element('button')));

    expect(root.render(undefined)).toContain('data-bsi-context-scope="dzl_0"');
    expect(root.render(undefined)).toContain('data-bsi-context-scope="dzr_0"');
  });

  /**
   * The scope of the parent plus its element ID plus the own segment - unique within one context file.
   */
  it('Joins the scope of a content element nested two levels deep', () => {
    let nested = element('column-1', ['dzr'])
      .withDropzones(dropzone('dzr', 'dzr').withContentElements(element('button')));
    let root = element('column-2', ['dzl'])
      .withDropzones(dropzone('dzl', 'dzl').withContentElements(nested));

    expect(root.render(root.createAbsoluteContextScope()))
      .toContain('data-bsi-context-scope="dzl_0_column-1_dzr_0"');
  });

  it('Fails for a dropzone which is not defined', () => {
    let root = element('column-2', ['does-not-exist'])
      .withDropzones(dropzone('dzl', 'dzl'));

    expect(() => root.render(undefined)).toThrow(/Unknown dropzone "does-not-exist"/);
  });
});

describe('TemplateElement#exportDesignContextFile', () => {

  it('Writes the part prefill of a plain root element to the top level', () => {
    expect(element('button').exportDesignContextFile())
      .toEqual({[TEXT_PART]: {value: 'button text'}});
  });

  it('Writes the prefill of the nested elements below their context scope', () => {
    let root = element('column-2', ['dzl'])
      .withDropzones(dropzone('dzl', 'dzl').withContentElements(element('button')));

    expect(root.exportDesignContextFile()).toEqual({
      root: {[TEXT_PART]: {value: 'column-2 text'}},
      dzl_0: {[TEXT_PART]: {value: 'button text'}},
    });
  });

  /**
   * Regression: the prefill of a nested element used to be written to the context file of that
   * element instead of the one being built, so it never reached the rendered template.
   */
  it('Writes the prefill of a content element nested two levels deep to the same context file', () => {
    let nested = element('column-1', ['dzr'])
      .withDropzones(dropzone('dzr', 'dzr').withContentElements(element('button')));
    let root = element('column-2', ['dzl'])
      .withDropzones(dropzone('dzl', 'dzl').withContentElements(nested));

    expect(root.exportDesignContextFile()).toEqual({
      root: {[TEXT_PART]: {value: 'column-2 text'}},
      dzl_0: {[TEXT_PART]: {value: 'column-1 text'}},
      'dzl_0_column-1_dzr_0': {[TEXT_PART]: {value: 'button text'}},
    });
  });

  /**
   * The context scope in the rendered template and the keys of the context file are two halves of
   * one contract - every scope of the template has to be resolvable in the context file.
   */
  it('Uses the same scopes in the rendered template and in the context file', () => {
    let nested = element('column-1', ['dzr'])
      .withDropzones(dropzone('dzr', 'dzr').withContentElements(element('button'), element('button')));
    let root = element('column-2', ['dzl'])
      .withDropzones(dropzone('dzl', 'dzl').withContentElements(nested));
    let scope = root.createAbsoluteContextScope();
    let rendered = root.render(scope);

    for (let contextScope of Object.keys(root.exportDesignContextFile())) {
      expect(rendered).toContain(`{{ ${contextScope}.`);
    }
  });

  it('Merges several parts of one element into the same scope', () => {
    let root = element('button').withTemplateParts(
      templatePart(TEXT_PART, {value: 'text'}),
      templatePart(LINK_PART, {url: 'https://www.example.com', text: 'Learn more'}));

    expect(root.exportDesignContextFile()).toEqual({
      [TEXT_PART]: {value: 'text'},
      [LINK_PART]: {url: 'https://www.example.com', text: 'Learn more'},
    });
  });

  it('Writes no scope for a part without prefill', () => {
    let root = element('button').withTemplateParts(templatePart(TEXT_PART, {}));

    expect(root.exportDesignContextFile()).toEqual({});
  });

  it('Builds a new context file on every export', () => {
    let root = element('column-2', ['dzl'])
      .withDropzones(dropzone('dzl', 'dzl').withContentElements(element('button')));

    expect(root.exportDesignContextFile()).toEqual(root.exportDesignContextFile());
    expect(Object.keys(root.exportDesignContextFile())).toHaveLength(2);
  });

  /**
   * Regression: the context file used to alias the prefill objects of the template parts, so writing
   * to one context file changed the prefill of the element everywhere else.
   */
  it('Does not alias the prefill of the template parts', () => {
    let button = element('button');
    let contexts = button.exportDesignContextFile();

    contexts[TEXT_PART].value = 'changed';

    expect(button.templatePart(TEXT_PART).prefill.value).toBe('button text');
  });
});

describe('Dropzone#withContentElement', () => {

  /**
   * Regression: overriding a value used to write through to the required module, so the same element
   * could not be placed twice with different values.
   */
  it('Places the same element twice with different prefill', () => {
    let button = element('button');
    let root = element('column-2', ['dzl'])
      .withDropzones(dropzone('dzl', 'dzl')
        .withContentElement(button, el => el.withTemplatePartPrefill(TEXT_PART, {value: 'left'}))
        .withContentElement(button, el => el.withTemplatePartPrefill(TEXT_PART, {value: 'right'})));

    expect(root.exportDesignContextFile()).toEqual({
      root: {[TEXT_PART]: {value: 'column-2 text'}},
      dzl_0: {[TEXT_PART]: {value: 'left'}},
      dzl_1: {[TEXT_PART]: {value: 'right'}},
    });
    // ... and the element the design required is untouched
    expect(button.templatePart(TEXT_PART).prefill.value).toBe('button text');
  });

  it('Falls back to the dropzone ID as scope name', () => {
    let root = element('column-2', ['20816df1-f8c0-47d1-94a1-1cd124c2b348'])
      .withDropzones(dropzone('20816df1-f8c0-47d1-94a1-1cd124c2b348')
        .withContentElements(element('button')));

    expect(Object.keys(root.exportDesignContextFile()))
      .toContain('dz_20816df1_f8c0_47d1_94a1_1cd124c2b348_0');
  });

  it('Returns the position of an added content element', () => {
    let created = dropzone('dzl', 'dzl');

    expect(created.addContentElement(element('button'))).toBe(0);
    expect(created.addContentElement(element('button'))).toBe(1);
  });

  it('Fails for a dropzone which is not defined', () => {
    expect(() => element('column-2').addToDropzone('dzl', element('button')))
      .toThrow(/Unknown dropzone "dzl"/);
  });

  it('Fails for a template part which is not defined', () => {
    expect(() => element('button').withTemplatePartPrefill('does-not-exist', {value: 'x'}))
      .toThrow(/Unknown template part "does-not-exist"/);
  });
});

describe('TemplateElement#build', () => {

  it('Writes the rendered template and the generated context file to the design.json', () => {
    let root = element('column-2', ['dzl'])
      .withDropzones(dropzone('dzl', 'dzl').withContentElements(element('button')));
    let config = root.build();

    expect(config.file.content).toBe(root.render(ContextScope.ROOT));
    expect(config.file.path).toBe('template.hbs.twig');
    expect(config.contextFile).toEqual(root.exportDesignContextFile());
    // The nested element is rendered into its parent, the design.json does not mention it
    expect(config.dropzones[0]).not.toHaveProperty('contentElements');
    expect(JSON.stringify(config.dropzones)).not.toContain('button');
  });

  /**
   * A required template file is the source of a webpack module, not the template itself.
   */
  it('Renders a template file which is the source of a webpack module', () => {
    let source = templateSource('button');
    let asModule = element('button')
      .withFile({content: `module.exports = ${JSON.stringify(source)};`, path: 'template.hbs.twig'});

    expect(asModule.render(undefined)).toBe(element('button').render(undefined));
  });

  it('Leaves a module which does not export a template alone', () => {
    let content = 'module.exports = require(\'./somewhere-else\');';
    let asModule = element('button').withFile({content: content, path: 'template.hbs.twig'});

    expect(asModule.render(undefined)).toBe(content);
  });

  it('Does not touch the required template file of the element', () => {
    let root = element('button');
    let source = root.file.content;

    root.build();

    expect(root.file.content).toBe(source);
  });

  it('Keeps a raw context file provided by the design', () => {
    let root = element('button').withRawContextFile({[TEXT_PART]: {value: 'raw'}});

    expect(root.build().contextFile).toEqual({[TEXT_PART]: {value: 'raw'}});
  });
});
