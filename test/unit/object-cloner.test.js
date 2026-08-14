import {describe, expect, it} from 'vitest';

import TemplateElement from '../../src/content-element/template-element';
import TemplatePart from '../../src/content-element/template-part/template-part';

function element() {
  return new TemplateElement()
    .withElementId('button')
    .withTemplateParts(new TemplatePart('plain-text', 'Label', 'text').withRawPrefill({value: 'original'}));
}

describe('AbstractBuilder#clone', () => {

  /**
   * A deep clone used to clone the nested builders shallowly, so the prefill object stayed shared
   * between the clone and its source.
   */
  it('Deep clone does not share the state of the nested builders', () => {
    let source = element();
    let clone = source.clone(false);

    clone.templatePart('text').withRawPrefill({value: 'changed'});

    expect(clone.templatePart('text').prefill.value).toBe('changed');
    expect(source.templatePart('text').prefill.value).toBe('original');
  });

  it('Deep clone copies the values of a nested prefill object', () => {
    let source = element();
    let clone = source.clone(false);

    clone.templatePart('text').prefill.value = 'changed';

    expect(source.templatePart('text').prefill.value).toBe('original');
  });

  it('Shallow clone shares the nested builders, as documented', () => {
    let source = element();
    let clone = source.clone();

    expect(clone.templatePart('text')).toBe(source.templatePart('text'));
  });
});
