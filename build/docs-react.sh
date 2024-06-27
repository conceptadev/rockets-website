#!/bin/bash

REPO=./.tmp/repos/rockets-react

# clone
git clone --depth=1 https://github.com/conceptadev/rockets-react.git $REPO

# install and build
yarn --cwd $REPO

# typedoc
typedoc --options typedoc.rockets-react.json