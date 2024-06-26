#!/bin/bash
REPO=./.tmp/repos/rockets

# clone
git clone --depth=1 https://github.com/conceptadev/rockets.git --branch feature/new-docs-config $REPO

# install and build
yarn --cwd $REPO
yarn --cwd $REPO build

# typedoc
typedoc --options typedoc.rockets.json