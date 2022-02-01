import path from 'path';
import {TwingEnvironment, TwingLoaderChain, TwingLoaderFilesystem, TwingLoaderRelativeFilesystem} from 'twing';

import {
  bsiCxAsset,
  bsiCxCssHref,
  bsiCxCssInline,
  bsiCxJsModuleHref,
  bsiCxJsModuleInline,
  bsiCxJsModuleMissingChunksImport,
  bsiCxJsModuleMissingChunksInline,
  bsiCxJsModuleRuntimeHref,
  bsiCxJsModuleRuntimeInline,
  bsiCxLorem
} from './twig-functions';
import {findNodeModulesFolder} from './utility';

export default function () {
  let relativeFilesystemLoader = new TwingLoaderRelativeFilesystem();
  let filesystemLoader = new TwingLoaderFilesystem();
  let bsiCxScopePath = path.join(findNodeModulesFolder(__dirname), '@bsi-cx');

  filesystemLoader.addPath(bsiCxScopePath, 'bsi-cx');

  let twing = new TwingEnvironment(new TwingLoaderChain([relativeFilesystemLoader, filesystemLoader]));

  twing.addFunction(bsiCxAsset);
  twing.addFunction(bsiCxCssHref);
  twing.addFunction(bsiCxCssInline);
  twing.addFunction(bsiCxJsModuleHref);
  twing.addFunction(bsiCxJsModuleInline);
  twing.addFunction(bsiCxJsModuleMissingChunksImport);
  twing.addFunction(bsiCxJsModuleMissingChunksInline);
  twing.addFunction(bsiCxJsModuleRuntimeHref);
  twing.addFunction(bsiCxJsModuleRuntimeInline);
  twing.addFunction(bsiCxLorem);

  return twing;
}
