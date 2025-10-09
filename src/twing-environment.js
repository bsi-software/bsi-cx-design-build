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

class NodeModulesLoader extends TwingLoaderFilesystem {
  constructor() {
    super();

    let nodeModulesPath = findNodeModulesFolder(__dirname);

    this.addPath(nodeModulesPath);
  }

  parseName(name, default_ = NodeModulesLoader.MAIN_NAMESPACE) {
    return [default_, name];
  }
}

/**
 * @param {string} templateRoot
 * @param {{}} [globals]
 * @returns {TwingEnvironment}
 */
export default function (templateRoot, globals) {
  let relativeFilesystemLoader = new TwingLoaderRelativeFilesystem();
  let filesystemLoader = new TwingLoaderFilesystem();
  let nodeModulesLoader = new NodeModulesLoader();

  filesystemLoader.addPath(templateRoot);

  let twing = new TwingEnvironment(new TwingLoaderChain([relativeFilesystemLoader, filesystemLoader, nodeModulesLoader]));

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

  for (const [key, value] of Object.entries(globals ?? {})) {
    twing.addGlobal(key, value);
  }

  return twing;
}
