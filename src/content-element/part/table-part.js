import DesignJsonProperty from '../../design-json-property';
import AbstractPart from './abstract-part';
import { TABLE } from './part';

/**
 * @since Studio 1.0
 */
export default class TablePart extends AbstractPart {
  /**
   * @type {Boolean|undefined}
   * @private
   */
  _captionEnabled = undefined;

  constructor() {
    super(TABLE);
  }

  /**
   * @returns {Boolean|undefined}
   */
  get captionEnabled() {
    return this._captionEnabled;
  }

  /**
   * Set a Boolean to indicate if caption is enabled in editor.
   * If true users can add a caption for the table in CX editor.
   *
   * @see {withCaptionEnabled}
   * @param {Boolean} captionEnabled
   * @returns {ImagePart}
   */
  withCaptionEnabled(captionEnabled) {
    this._captionEnabled = captionEnabled
    return this;
  }

  _buildInternal() {
    let config = super._buildInternal();

    this._applyPropertyIfDefined(DesignJsonProperty.CAPTION_ENABLED, config, v => Boolean(v));

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {TablePart}
   */
  clone(shallow) {
    return this._clone(new TablePart(), shallow);
  }
}
