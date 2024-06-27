#!/bin/bash

REPO=./.tmp/repos/rockets

# clone
git clone --depth=1 https://github.com/conceptadev/rockets.git $REPO

# install and build
yarn --cwd $REPO

# typedoc
typedoc --options typedoc.rockets.json