#!/bin/bash

REPO=./.tmp/repos/rockets-react

# clone
git clone --depth=1 https://github.com/conceptadev/rockets-react.git $REPO

# install
yarn --cwd $REPO --immutable

# build
yarn --cwd $REPO build

# typedoc
typedoc --options typedoc.rockets-react.json