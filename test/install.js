#!/usr/bin/env node

// This script creates a fake installation of the package inside the node_modules folder.

const path = require('path');
const fs = require('fs');

let projectDir = path.resolve(__dirname, '..');
let moduleRoot = path.resolve(projectDir, 'node_modules', '@bsi-cx', 'design-build');

fs.mkdirSync(moduleRoot, {recursive: true});

process.chdir(moduleRoot);

if (!fs.existsSync('package.json') && !fs.existsSync('dist')) {
  fs.linkSync('../../../package.json', 'package.json');
  fs.symlinkSync('../../../dist', 'dist', 'junction');
}
