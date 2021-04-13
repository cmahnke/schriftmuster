#!/bin/sh

echo "Set SKIP_IIIF to something to disable generation of IIIF derivates"
if [[ -z "$SKIP_IIIF" ]] ; then
    ./scripts/iiif.sh
fi

echo "Calling theme scripts"
for SCRIPT in $PWD/themes/projektemacher-base/scripts/init/*.sh ; do
    echo "Running $SCRIPT"
    bash "$SCRIPT"
done

./scripts/preview.sh

# Favicons
# See https://gist.github.com/pfig/1808188
SOURCE="Source Files/Favicon/Favicon.psd[1]" OPTIONS="-background 'rgba(255, 255, 255, .0)' -resize 300x300 -gravity center -extent 300x300" ./themes/projektemacher-base/scripts/favicon.sh
