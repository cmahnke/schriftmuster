#!/bin/sh

PREVIEW_WIDTH="800x"

for POST in `ls -1 content/post/**/**/index.md content/post/**/_index.md`
do
    if `grep -q 'class: sheet' "$POST"`; then
        DIR=`dirname "$POST"`
        IMAGE=`ls -1 $DIR/*.jpg | head -1`
        echo "Scaling $IMAGE to $PREVIEW_WIDTH"
        convert $IMAGE -resize "$PREVIEW_WIDTH" $DIR/preview.png
        echo "Creating preview for $IMAGE"
        convert $DIR/preview.png -alpha set -virtual-pixel transparent  -channel A -blur 0x8  -level 50%,100% +channel $DIR/preview.png
    fi
done
