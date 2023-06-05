#!/bin/sh

echo "Set SKIP_IIIF to something to disable generation of IIIF derivates"
if [ -z "$SKIP_IIIF" ] ; then
    ./scripts/iiif.sh
fi

#NPM dependencies
echo "Calling theme scripts"
for SCRIPT in $PWD/themes/projektemacher-base/scripts/init/*.sh ; do
    echo "Running $SCRIPT"
    bash "$SCRIPT"
    ERR=$?
    if [ $ERR -ne 0 ] ; then
        echo "Execution of '$SCRIPT' failed!"
        exit $ERR
    fi
done

# Logo
convert "Source Files/Favicon/Favicon.psd[1]" static/images/logo.png

./scripts/preview.sh

# Generate Previews
./themes/projektemacher-base/scripts/preview.sh

./scripts/favicon.sh
