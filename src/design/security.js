import AbstractBuilder from '../abstract-builder';
import { identity, builderObjectValue } from '../browser-utility';


/**
 * Class to set security features.
 */
export class Security extends AbstractBuilder {
    /**
     * @type {HtmlSanitization|undefined}
     * @private
     */
    _htmlSanitization = undefined;

    /**
     * @returns {HtmlSanitization|undefined}
     */
    get htmlSanitization() {
        return this._htmlSanitization;
    }

    /**
     * Set the value of the htmlSanitization property.
     *
     * @param {HtmlSanitization} htmlSanitization - enable or forbid formFieldRules
     * @returns {Security}
     */
    withHtmlSanitization(htmlSanitization) {
        this._htmlSanitization = htmlSanitization;
        return this;
    }

    /**
     * @inheritDoc
     */
    _buildInternal() {
        let config = {};

        this._applyPropertyIfDefined('htmlSanitization', config, builderObjectValue);

        return config;
    }
}

export class HtmlSanitization extends AbstractBuilder {
    /**
     * @type {Boolean|undefined}
     * @private
     */
    _allowEventAttributes = undefined;
    /**
     * @type {Boolean|undefined}
     * @private
     */
    _allowInlineScripts = undefined;

    /**
     * @returns {Boolean|undefined}
     */
    get allowEventAttributes() {
        return this._allowEventAttributes;
    }
    
    /**
     * @returns {Boolean|undefined}
     */
    get allowInlineScripts() {
        return this._allowInlineScripts;
    }

    /**
     * Set the value of the allowEventAttributes property.
     *
     * @param {Boolean} allowEventAttributes - enable or forbid event attributes
     * @returns {Security}
     */
    withAllowEventAttributes(allowEventAttributes) {
        this._allowEventAttributes = allowEventAttributes;
        return this;
    }

    /**
     * Set the value of the allowInlineScripts property.
     *
     * @param {Boolean} allowInlineScripts - enable or forbid inline scripts
     * @returns {Security}
     */
    withAllowInlineScripts(allowInlineScripts) {
        this._allowInlineScripts = allowInlineScripts;
        return this;
    }

    /**
     * @inheritDoc
     */
    _buildInternal() {
        let config = {};

        this._applyPropertyIfDefined('allowEventAttributes', config, identity);
        this._applyPropertyIfDefined('allowInlineScripts', config, identity);

        return config;
    }
}