import {createEnvironment, createFilesystemLoader} from "twing";
import fs from 'fs';

const environment = createEnvironment(createFilesystemLoader(fs));
environment.addFunction(require('./twig-functions2').bsiCxAsset2);
environment.addFunction(require('./twig-functions2').bsiCxLorem);
export const twingEnvironment = environment;