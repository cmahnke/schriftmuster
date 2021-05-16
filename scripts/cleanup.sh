#!/bin/sh

./themes/projektemacher-base/scripts/cleanup.sh
rm static/images/logo.png
find content/post/ -name preview.png | xargs rm
