#!/bin/sh

tsc -b
node ./dist/$1
