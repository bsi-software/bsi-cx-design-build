import AbstractBuilder from '../abstract-builder';
import { identity } from '../browser-utility';


/**
 * Class to set design features.
 */
export class Features extends AbstractBuilder {
    /**
     * @type {Boolean|undefined}
     * @private
     */
    _formFieldRules = undefined;

    /**
     * @returns {Boolean|undefined}
     */
    get formFieldRules() {
        return this._formFieldRules;
    }

    /**
     * Set the value of the formFieldRules property.
     *
     * @see {@link withFeatures}
     * @param {Boolean} enabled - enable or forbid formFieldRules
     * @returns {Features}
     */
    withFormFieldRules(enabled) {
        this._formFieldRules = enabled;
        return this;
    }

    /**
     * @inheritDoc
     */
    _buildInternal() {
        let config = {};

        this._applyPropertyIfDefined('formFieldRules', config, identity);

        return config;
    }

}
