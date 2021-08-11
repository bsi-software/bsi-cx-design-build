import { TwingEnvironment, TwingLoaderRelativeFilesystem } from 'twing';

import { bsiCxAsset, bsiCxCssHref, bsiCxCssInline, bsiCxJsModule } from './twig-functions';

let twing = new TwingEnvironment(
  new TwingLoaderRelativeFilesystem()
);

twing.addFunction(bsiCxAsset);
twing.addFunction(bsiCxCssHref);
twing.addFunction(bsiCxCssInline);
twing.addFunction(bsiCxJsModule);

module.exports = twing;
