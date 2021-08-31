import Design from './design';
import ContentElementGroup from '../content-element/content-element-group';
import ContentElement from '../content-element/content-element';
import Website from '../website/website';
import Include from '../website/include';
import PageInclude from '../website/page-include';
import HtmlEditorConfig from '../html-editor-config/html-editor-config';
import Style from '../style/style';
import CssClass from '../style/css-class';
import NLS from '../nls/nls';
import Translation from '../nls/translation';
import PartFactory from '../content-element/part/part-factory';
import {Locale, WILDCARD} from './locale';

/**
 * Use the design factory to minimize the amount of imports when specifying a design.
 * The design factory is available under the <code>cx</code> constant.
 *
 * @example
 * const {cx} = require('@bsi-cx/design-build');
 *
 * module.exports = cx.design
 *   .withSchemaVersion(SchemaVersion.V_22_0)
 *   .withTitle('My BSI CX Design')
 *   .withAuthor('John Doe')
 *   .withDate('18.8.2021')
 *   .withPreviewImage(require('./preview.png'))
 *   .withRawDefaultLocale('en')
 *   .withHtmlEditorConfigs(
 *     require('./configs/html-editor/full.js'),
 *     require('./configs/html-editor/minimal.js'))
 *   .withContentElementGroups(
 *     cx.contentElementGroup
 *       .withGroupId('content')
 *       .withLabel('Content')
 *       .withContentElements(
 *         require('./content-elements/content/title'),
 *         require('./content-elements/content/text')));
 */
export default class DesignFactory {
  /**
   * Get a new design builder instance.
   *
   * @example
   * cx.design
   *   .withSchemaVersion(SchemaVersion.V_22_0)
   *   .withTitle('My BSI CX Design')
   *   .withAuthor('John Doe')
   *   .withDate('18.8.2021')
   *   .withPreviewImage(require('./preview.png'))
   *   .withRawDefaultLocale('en')
   *   .withHtmlEditorConfigs(
   *     require('./configs/html-editor/full.js'),
   *     require('./configs/html-editor/minimal.js'))
   *   .withContentElementGroups(
   *     cx.contentElementGroup
   *       .withGroupId('content')
   *       .withLabel('Content')
   *       .withContentElements(
   *         require('./content-elements/content/title'),
   *         require('./content-elements/content/text')));
   * @returns {Design}
   */
  get design() {
    return new Design();
  }

  /**
   * Get a new content element group builder instance.
   *
   * @example
   * .withContentElementGroups(
   *   cx.contentElementGroup
   *     .withGroupId('content')
   *     .withLabel('Content')
   *     .withContentElements(
   *       require('./content-elements/content/title'),
   *       require('./content-elements/content/text')));
   * @returns {ContentElementGroup}
   */
  get contentElementGroup() {
    return new ContentElementGroup();
  }

  /**
   * Get a new content element builder instance.
   *
   * @example
   * .withContentElements(
   *   cx.contentElement
   *     .withElementId('image-with-text')
   *     .withLabel('Image with text')
   *     .withDescription('Displays an image with an optional text.')
   *     .withFile(require('./template.twig'))
   *     .withIcon(Icon.IMAGE)
   *     .withParts(
   *       cx.part.image
   *         .withLabel('Image'),
   *       cx.part.plainText
   *         .withLabel('Description')))
   * @returns {ContentElement}
   */
  get contentElement() {
    return new ContentElement();
  }

  /**
   * Get a new website builder instance.
   *
   * @example
   * .withWebsite(
   *   cx.website
   *     .withMaxNavigationLevel(2)
   *     .withIncludes(
   *       cx.include
   *         .withEditable(true)
   *         .withName('Header')
   *         .withFile(require('./includes/header.html')),
   *       cx.include
   *         .withEditable(true)
   *         .withName('Footer')
   *         .withFile(require('./includes/footer.html')))
   * @returns {Website}
   */
  get website() {
    return new Website();
  }

  /**
   * Get a new website include builder instance.
   *
   * @example
   * .withIncludes(
   *   cx.include
   *     .withEditable(true)
   *     .withName('Header')
   *     .withFile(require('./includes/header.html')),
   *   cx.include
   *     .withEditable(true)
   *     .withName('Footer')
   *     .withFile(require('./includes/footer.html')))
   * @returns {Include}
   */
  get include() {
    return new Include();
  }

  /**
   * Get a new website page include builder instance.
   *
   * @example
   * .withIncludes(
   *   cx.pageInclude
   *     .withEditable(true)
   *     .withName('Template for Content')
   *     .withFile(require('./includes/page.html')),
   *   cx.include
   *     .withEditable(true)
   *     .withName('Footer')
   *     .withFile(require('./includes/footer.html')))
   * @returns {PageInclude}
   */
  get pageInclude() {
    return new PageInclude();
  }

  /**
   * Get a new HTML editor config builder instance.
   *
   * @example
   * module.exports = cx.htmlEditorConfig
   *   .withIdentifier('minimal')
   *   .withRawEnterMode('p')
   *   .withFeatures(
   *     Feature.BOLD,
   *     Feature.ITALIC,
   *     Feature.UNDERLINE);
   * @returns {HtmlEditorConfig}
   */
  get htmlEditorConfig() {
    return new HtmlEditorConfig();
  }

  /**
   * Get a new style configuration builder instance.
   *
   * @example
   * module.exports = cx.style
   *   .withIdentifier('text-color')
   *   .withLabel('Text Color')
   *   .withCssClasses(
   *     cx.cssClass
   *       .withCssClass('text-blue')
   *       .withLabel('Blue'),
   *     cx.cssClass
   *       .withCssClass('text-red')
   *       .withLabel('Red'));
   * @returns {Style}
   */
  get style() {
    return new Style();
  }

  /**
   * Get a new css class builder instance.
   *
   * @example
   * .withCssClasses(
   *   cx.cssClass
   *     .withCssClass('text-blue')
   *     .withLabel('Blue'),
   *   cx.cssClass
   *     .withCssClass('text-red')
   *     .withLabel('Red'));
   * @returns {CssClass}
   */
  get cssClass() {
    return new CssClass();
  }

  /**
   * Get a new NLS builder instance.
   *
   * @example
   * .withNLS(
   *   cx.nls
   *     .withIdentifier('action')
   *     .withTranslations(
   *       cx.translation
   *         .withLocale(Locale.WILDCARD)
   *         .withTranslation('action'),
   *       cx.translation
   *         .withLocale(Locale.DE)
   *         .withTranslation('Aktion')))
   * @returns {NLS}
   */
  get nls() {
    return new NLS();
  }

  /**
   * Get a new NLS translation builder instance.
   *
   * @example
   * .withTranslations(
   *   cx.translation
   *     .withLocale(Locale.WILDCARD)
   *     .withTranslation('action'),
   *   cx.translation
   *     .withLocale(Locale.DE)
   *     .withTranslation('Aktion'))
   * @returns {Translation}
   */
  get translation() {
    return new Translation();
  }

  /**
   * Get a content element part factory instance to create new content element part builder objects.
   * The content element part factory is also available under the part constant.
   *
   * @example
   * const {cx, part} = require('@bsi-cx/design-build');
   *
   * // ...
   * .withParts(
   *   cx.part.plainText
   *     .withLabel('Text'),
   *   part.image
   *     .withImage('Image'))
   * @returns {PartFactory}
   */
  get part() {
    return new PartFactory();
  }

  /**
   * Shortcut to create a {@link NLS} object. See example for usage.
   *
   * @example
   * module.exports = [
   *   cx.n(
   *     'action',
   *     cx.t('action'),
   *     cx.t('de', 'Aktion'),
   *     cx.t(Locale.DE_CH, 'Aktion')),
   *   cx.n(
   *     'contact',
   *     cx.t('contact'),
   *     cx.t('de', 'Kontakt'),
   *     cx.t(Locale.DE_CH, 'Kontakt'))
   * ];
   * @see {@link t}
   * @param {string} identifier
   * @param {Translation} translations
   * @returns {NLS}
   */
  n(identifier, ...translations) {
    return this.nls
      .withIdentifier(identifier)
      .withTranslations(...translations);
  }

  /**
   * Shortcut to create a {@link Translation} object. See example for usage.
   *
   * @example
   * cx.nls
   *   .withIdentifier('action')
   *   .withTranslations(
   *     cx.t('action'), // wildcard translation
   *     cx.t('de', 'Aktion'), // translation with raw locale
   *     cx.t(Locale.DE_CH, 'Aktion')) // translation with locale as constant
   * @see {@link n}
   * @param {Locale|string} localeOrWildcardTranslation - Locale (as string or constant) or translation string.
   * @param {string|undefined} [optionalTranslation=undefined] - The translation, only required if the first parameter is a locale.
   * @returns {Translation}
   */
  t(localeOrWildcardTranslation, optionalTranslation) {
    let locale = optionalTranslation === undefined ? WILDCARD : localeOrWildcardTranslation;
    let translation = optionalTranslation ?? localeOrWildcardTranslation;
    let translationObj = this.translation.withTranslation(translation);

    return locale instanceof Locale ? translationObj.withLocale(locale) : translationObj.withRawLocale(locale);
  }
}
