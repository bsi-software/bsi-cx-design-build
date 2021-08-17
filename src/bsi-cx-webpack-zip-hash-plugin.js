import { createHash } from 'crypto';

import { Compilation, Asset } from 'webpack';

import { getZipArchiveName } from './utility';

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
    this._name = name;
    this._version = version;
    this._enabled = !!enabled;
    this._prodZipFileName = getZipArchiveName(name, version);
    this._devZipFileName = getZipArchiveName(name, version, 'dev');
  }

  /**
   * @param {Compilation} compilation
   * @param {Asset} asset 
   */
  _handleZipAsset(compilation, asset) {
    let oldAssetName = asset.name;
    let source = asset.source;
    let hash = createHash('sha256')
      .update(source.source())
      .digest('hex')
      .substr(0, 5);
    let newAssetName = oldAssetName.replace(/\.zip$/, `-${hash}.zip`);

    compilation.deleteAsset(oldAssetName);
    compilation.emitAsset(newAssetName, source);
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

          Object.keys(compilation.assets)
            .filter(name => name === this._prodZipFileName || name === this._devZipFileName)
            .map(name => compilation.getAsset(name))
            .forEach(asset => this._handleZipAsset(compilation, asset));
        })
    });
  }
};
