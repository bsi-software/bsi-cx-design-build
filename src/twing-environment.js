import fs from 'fs';
import path from 'path';
import {TwingCacheFilesystem, TwingEnvironment, TwingLoaderRelativeFilesystem} from 'twing';
import findCacheDir from 'find-cache-dir';

import packageJson from '../package.json';

import {
  bsiCxAsset,
  bsiCxCssHref,
  bsiCxCssInline,
  bsiCxJsModuleHref,
  bsiCxJsModuleInline,
  bsiCxJsModuleMissingChunksImport,
  bsiCxJsModuleMissingChunksInline,
  bsiCxJsModuleRuntimeHref,
  bsiCxJsModuleRuntimeInline
} from './twig-functions';

let cacheFolder = findCacheDir({
  name: packageJson.name,
  create: true,
  thunk: true
})('twing');

class FilesystemCache extends TwingCacheFilesystem {
  /**
   * @param {string} key
   * @return {Promise<*>}
   */
  load(key) {
    let modulePath = path.resolve(key);
    let requireFunc = __non_webpack_require__;

    return new Promise((resolve) => {
      fs.stat(modulePath, (error) => {
        if (error) {
          resolve(() => new Map);
        } else {
          let cache = requireFunc.cache;
          delete cache[requireFunc.resolve(modulePath)];
          resolve(requireFunc(modulePath));
        }
      });
    });
  }
}

let cache = new FilesystemCache(cacheFolder);

export default function () {
  let opts = {
    cache: cache
  };
  let twing = new TwingEnvironment(
    new TwingLoaderRelativeFilesystem(),
    opts
  );

  twing.addFunction(bsiCxAsset);
  twing.addFunction(bsiCxCssHref);
  twing.addFunction(bsiCxCssInline);
  twing.addFunction(bsiCxJsModuleHref);
  twing.addFunction(bsiCxJsModuleInline);
  twing.addFunction(bsiCxJsModuleMissingChunksImport);
  twing.addFunction(bsiCxJsModuleMissingChunksInline);
  twing.addFunction(bsiCxJsModuleRuntimeHref);
  twing.addFunction(bsiCxJsModuleRuntimeInline);

  return twing;
}
