import ContentElement from '../content-element/content-element';
import ContentElementGroup from '../content-element/content-element-group';
import PartFactory from '../content-element/part/part-factory';
import Dropzone from '../dropzone/dropzone';
import HtmlEditorConfig from '../html-editor-config/html-editor-config';
import NLS from '../nls/nls';
import Translation from '../nls/translation';
import CssClass from '../style/css-class';
import DomManipulation from '../style/dom-manipulation';
import Style from '../style/style';
import StyleOption from '../style/style-option';
import Include from '../website/include';
import PageInclude from '../website/page-include';
import Pagination from '../website/pagination';
import Website from '../website/website';
import Design from './design';
import DesignHelper from './design-helper';

/**
 * Use the design factory to minimize the amount of imports when specifying a design.
 * The design factory is available under the <code>cx</code> constant.
 *
 * @example
 * const {cx} = require('@bsi-cx/design-build');
 *
 * module.exports = cx.design
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
   * Get a new dropzone builder instance.
   *
   * @example
   * .withDropzones(
   *   cx.dropzone
   *     .withDropzone('a5142bca-448b-40c5-bdde-942f531fcd12')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1),
   *   cx.dropzone
   *     .withDropzone('3b369b8b-f1f6-4754-bb0f-e49a46c315e1')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1))
   * @returns {Dropzone}
   */
  get dropzone() {
    return new Dropzone();
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
   * Get a new website pagination config builder instance.
   *
   * @example
   * .withPagination(
   *   cx.pagination
   *     .withNumDataRecordsPerPage(20)
   *     .withNumAdjacentPages(3))
   * @returns {Pagination}
   */
  get pagination() {
    return new Pagination();
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
   * Get a new style option builder instance.
   *
   * @example
   * .withStyleOptions(
   *   cx.styleOption
   *     .withStyleId('darkred-background-5vLqPX')
   *     .withLabel('Darkred')
   *     .withCssClass('darkred-background')
   *     .withDomManipulations(
   *       cx.domManipulation
   *         .withSelector('div.darkred-background')
   *         .withAttribute('style')
   *         .withValue('background-color: darkred;'),
   *       cx.domManipulation
   *         .withSelector('div.darkred-background p')
   *         .withAttribute('style')
   *         .withValue('color: white;')),
   *   cx.styleOption
   *     .withStyleId('lightblue-background-9ftMNF')
   *     .withLabel('Lightblue')
   *     .withCssClass('lightblue-background')
   *     .withDomManipulations(
   *       cx.domManipulation
   *         .withSelector('div.lightblue-background')
   *         .withAttribute('style')
   *         .withValue('background-color: lightblue;'),
   *       cx.domManipulation
   *         .withSelector('div.lightblue-background p')
   *         .withAttribute('style')
   *         .withValue('color: black;')))
   * @returns {StyleOption}
   */
  get styleOption() {
    return new StyleOption();
  }

  /**
   * Get a new DOM manipulation builder instance.
   *
   * @example
   * .withDomManipulations(
   *   cx.domManipulation
   *     .withSelector('div.darkred-background')
   *     .withAttribute('style')
   *     .withValue('background-color: darkred;'),
   *   cx.domManipulation
   *     .withSelector('div.darkred-background p')
   *     .withAttribute('style')
   *     .withValue('color: white;'))
   * @returns {DomManipulation}
   */
  get domManipulation() {
    return new DomManipulation();
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
   * Get a collection of various helper methods.
   *
   * @example
   * cx.h.nls(
   *   'action',
   *   cx.h.t('action'),
   *   cx.h.t('de','Aktion'))
   * @returns {DesignHelper}
   */
  get h() {
    return new DesignHelper(this);
  }
}
