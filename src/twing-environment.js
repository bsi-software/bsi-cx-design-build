import packageJson from '../package.json';

import {TwingEnvironment, TwingLoaderRelativeFilesystem} from 'twing';
import findCacheDir from 'find-cache-dir';

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

export default function () {
  let opts = {
    cache: cacheFolder
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
