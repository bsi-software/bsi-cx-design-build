#!/bin/bash

# This script creates a fake installation of this package inside the node_modules folder.
# NPM will remove the created symlinks and folders when executing npm install or npm update.
# You only have to run this script when contributing to the project.
# This is required when executing the tests.

# path to the @bsi-cx/design-build package
PACKAGE_PATH=./node_modules/@bsi-cx/design-build

# create the folder in the node node_modules directory
mkdir -p $PACKAGE_PATH

# cd to the created folder
cd $PACKAGE_PATH

# install the symlinks
ln -s ../../../package.json package.json
ln -s ../../../dist dist
