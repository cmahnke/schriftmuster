#!/bin/sh

PREVIEW_WIDTH="800x"
#PREVIEW_WIDTH_MOBILE="320x"

for POST in `ls -1 content/post/**/**/index.md content/post/**/_index.md content/post/**/index.md`
do
#    if `grep -q 'class: sheet' "$POST"`; then
        DIR=`dirname "$POST"`
        if [ -r $DIR/front.jpg ] ; then
            IMAGE="$DIR/front.jpg"
        else
            IMAGE=`ls -1 $DIR/*.jpg | head -1`
        fi
        echo "Scaling $IMAGE to $PREVIEW_WIDTH"
        if [ ! -f $DIR/preview.png ] ; then
            convert $IMAGE -resize "$PREVIEW_WIDTH" $DIR/preview.png
            #echo "Scaling $IMAGE to $PREVIEW_WIDTH_MOBILE for mobile clients"
            #convert $IMAGE -resize "$PREVIEW_WIDTH_MOBILE" $DIR/preview-mobile.png
            if [ -n "$IMAGE" ] ; then
                echo "Creating preview for $IMAGE"
                convert $DIR/preview.png -alpha set -virtual-pixel transparent  -channel A -blur 0x8  -level 50%,100% +channel $DIR/preview.png
            fi
        fi
        #echo "Creating mobile preview for $IMAGE"
        #convert $DIR/preview-mobile.png -alpha set -virtual-pixel transparent  -channel A -blur 0x8  -level 50%,100% +channel $DIR/preview-mobile.png
#    fi
done
