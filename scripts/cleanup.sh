#!/bin/sh

./themes/projektemacher-base/scripts/cleanup.sh
rm -f static/images/logo.png
find content/post/ -name preview.png | xargs rm
git checkout package.json yarn.lock 
