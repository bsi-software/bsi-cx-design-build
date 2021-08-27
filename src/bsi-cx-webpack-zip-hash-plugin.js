import {createHash} from 'crypto';

import {Asset, Compilation, Compiler} from 'webpack/lib';
import {sync as fgSync} from 'fast-glob';
import {unlinkSync} from 'fs';

import {getZipArchiveName} from './utility';

export default class BsiCxWebpackZipHashPlugin {
  /**
   * @type {string}
   */
  static PLUGIN_NAME = 'BsiCxWebpackZipHashPlugin';

  /**
   * @param {string} name
   * @param {string} version
   * @param {boolean} enabled
   */
  constructor(name, version, enabled) {
    /**
     * @type {string}
     * @private
     */
    this._name = name;
    /**
     * @type {string}
     * @private
     */
    this._version = version;
    /**
     * @type {boolean}
     * @private
     */
    this._enabled = !!enabled;
    /**
     * @type {string}
     * @private
     */
    this._prodZipFileName = getZipArchiveName(name, version);
    /**
     * @type {string}
     * @private
     */
    this._devZipFileName = getZipArchiveName(name, version, 'dev');
  }

  /**
   * @param {Compilation} compilation
   * @param {Asset} asset
   */
  _handleZipAsset(compilation, asset) {
    let oldAssetName = asset.name;
    let source = asset.source;
    /**
     * @type {Buffer}
     */
    let sourceBuffer = source.buffer();
    let hash = createHash('sha256')
      .update(sourceBuffer)
      .digest('hex')
      .substr(0, 5);
    let newAssetName = oldAssetName.replace(/\.zip$/, `-${hash}.zip`);

    compilation.deleteAsset(oldAssetName);
    compilation.emitAsset(newAssetName, source);
  }

  /**
   * @param {Compiler} compiler
   * @private
   */
  _removeOldZipAssets(compiler) {
    let pattern = getZipArchiveName(this._name, this._version, '*');

    let zipFilesToRemove = fgSync(pattern, {
      cwd: compiler.outputPath,
      absolute: true,
      onlyFiles: true
    });

    zipFilesToRemove.forEach(unlinkSync);
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(BsiCxWebpackZipHashPlugin.PLUGIN_NAME, compilation => {
      compilation.hooks.processAssets.tap(
        {
          name: BsiCxWebpackZipHashPlugin.PLUGIN_NAME,
          stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER
        },
        () => {
          if (!this._enabled) {
            return;
          }

          this._removeOldZipAssets(compiler);

          Object.keys(compilation.assets)
            .filter(name => name === this._prodZipFileName || name === this._devZipFileName)
            .map(name => compilation.getAsset(name))
            .forEach(asset => this._handleZipAsset(compilation, asset));
        })
    });
  }
};
