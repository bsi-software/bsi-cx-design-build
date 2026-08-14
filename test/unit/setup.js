import Constant from '../../src/constant';

/**
 * The webpack build injects the target version and the design type as globals (see BuildContext),
 * AbstractBuilder#isCompatible() reads them for every builder. The unit tests target the newest
 * version and a landing page, so nothing under test is filtered out as incompatible.
 *
 * The globals are set here instead of in the test files, because src/version.js and src/design-type.js
 * read them once, while they are being imported.
 */
global[Constant.BSI_CX_TARGET_VERSION] = {toString: () => '99.0.0'};
global[Constant.BSI_CX_TARGET_TYPE] = {value: 'landingpage'};
