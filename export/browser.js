import DesignJsonProperty from '../src/design-json-property';
import AbstractBuilder from '../src/abstract-builder';
import AbstractConstant from '../src/abstract-constant';
import BuilderObjectNormalizer from '../src/builder-object-normalizer';
import ObjectCloner from '../src/object-cloner';
import RawValue from '../src/raw-value';
import * as Locale from '../src/design/locale';
import * as WebsiteContentType from '../src/design/websiteContentType';
import * as SchemaVersion from '../src/design/schema-version';
import Design from '../src/design/design';
import ContentElementGroup from '../src/content-element/content-element-group';
import * as Version from '../src/version';
import * as DesignType from '../src/design-type';
import * as Feature from '../src/html-editor-config/feature';
import * as EnterMode from '../src/html-editor-config/enter-mode';
import * as FontSizeUnit from '../src/html-editor-config/font-size-unit';
import * as Format from '../src/html-editor-config/format';
import Dropzone from '../src/dropzone/dropzone';
import HtmlEditorConfig from '../src/html-editor-config/html-editor-config';
import Style from '../src/style/style';
import CssClass from '../src/style/css-class';
import StyleOption from '../src/style/style-option';
import DomManipulation from '../src/style/dom-manipulation';
import * as Icon from '../src/content-element/icon';
import ContentElement from '../src/content-element/content-element';
import TemplateElement from '../src/content-element/template-element';
import Part from '../src/content-element/part/part';
import TemplatePart from '../src/content-element/template-part/template-part';
import Website from '../src/website/website';
import PageInclude from '../src/website/page-include';
import Include from '../src/website/include';
import NLS from '../src/nls/nls';
import Translation from '../src/nls/translation';
import DesignFactory from '../src/design/design-factory';
import bsiProperty from '../src/bsi-property';

/**
 * A collection of various builder factory methods.
 *
 * @type {DesignFactory}
 */
const cx = new DesignFactory();

export {
  DesignJsonProperty,
  AbstractBuilder,
  AbstractConstant,
  BuilderObjectNormalizer,
  ObjectCloner,
  RawValue,
  Locale,
  WebsiteContentType,
  SchemaVersion,
  Design,
  ContentElementGroup,
  Dropzone,
  Version,
  DesignType,
  Feature,
  EnterMode,
  FontSizeUnit,
  Format,
  HtmlEditorConfig,
  Style,
  CssClass,
  StyleOption,
  DomManipulation,
  Icon,
  ContentElement,
  Part,
  TemplateElement,
  TemplatePart,
  Website,
  PageInclude,
  Include,
  NLS,
  Translation,
  cx,
  bsiProperty
};
