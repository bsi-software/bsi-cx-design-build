import { TwingEnvironment, TwingLoaderRelativeFilesystem } from 'twing';

import { bsiCxAsset, bsiCxCssHref, bsiCxCssInline, bsiCxJsModuleHref, bsiCxJsModuleRuntimeHref, bsiCxJsModuleRuntimeInline } from './twig-functions';

let twing = new TwingEnvironment(
  new TwingLoaderRelativeFilesystem()
);

twing.addFunction(bsiCxAsset);
twing.addFunction(bsiCxCssHref);
twing.addFunction(bsiCxCssInline);
twing.addFunction(bsiCxJsModuleHref);
twing.addFunction(bsiCxJsModuleRuntimeHref);
twing.addFunction(bsiCxJsModuleRuntimeInline);

module.exports = twing;
