#!/bin/sh

./themes/projektemacher-base/scripts/cleanup.sh
rm static/images/logo.png
find content/post/ -name preview.png | xargs rm
find content/post/ -name ogPreview.svg | xargs rm
find content/post/ -name ogPreview.png | xargs rm
