import fs from 'fs';

import {createEnvironment, createChainLoader, createFilesystemLoader} from 'twing';

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
  bsiCxLorem,
  bsiTemplatePart,
  templatePartHelper,
} from './twig-functions';
import {findNodeModulesFolder} from './utility';

/**
 * @param {string} templateRoot
 * @param {{}} [globals]
 * @returns {TwingEnvironment}
 */
export default function (templateRoot, globals) {
  let relativeFilesystemLoader = createFilesystemLoader(fs);
  let filesystemLoader = createFilesystemLoader(fs);
  let nodeModulesLoader = createFilesystemLoader(fs);
  let nodeModulesPath = findNodeModulesFolder(__dirname);

  relativeFilesystemLoader.addPath('.');
  filesystemLoader.addPath(templateRoot);
  nodeModulesLoader.addPath(nodeModulesPath);

  let twing = createEnvironment(
    createChainLoader([relativeFilesystemLoader, filesystemLoader, nodeModulesLoader]),
    {globals: globals ?? {}}
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
  twing.addFunction(bsiCxLorem);

  twing.addFunction(bsiTemplatePart);
  templatePartHelper.forEach(helper => twing.addFunction(helper));

  return twing;
}
