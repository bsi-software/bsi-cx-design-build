#!/usr/bin/env node

// This script removes the fake installation of the package from the node_modules folder.

const path = require('path');
const fs = require('fs');

let projectDir = path.resolve(__dirname, '..');
let moduleRoot = path.resolve(projectDir, 'node_modules', '@bsi-cx', 'design-build', '..');

if (fs.existsSync(moduleRoot)) {
  fs.rmSync(moduleRoot, {force: true, recursive: true});
}
