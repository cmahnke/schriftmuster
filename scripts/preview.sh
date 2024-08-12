#!/usr/bin/env bash

DOCKER_IMAGE="ghcr.io/cmahnke/jpeg-xl-action/imagemagick:latest"
DOCKER_PREFIX="docker run -w ${PWD} -v ${PWD}:${PWD} ${DOCKER_IMAGE} "

PREVIEW_WIDTH="800x"
#PREVIEW_WIDTH_MOBILE="320x"

for POST in `ls -1 content/post/**/**/index.md content/post/**/_index.md content/post/**/index.md`
do
#    if `grep -q 'class: sheet' "$POST"`; then
        DIR=`dirname "$POST"`
        if [ -r $DIR/front.jpg ] ; then
            IMAGE="$DIR/front.jpg"
        elif [ -r $DIR/front.jxl ] ; then
            IMAGE="$DIR/front.jxl"
        else
            if ls $DIR/*.jpg >/dev/null 2>&1 ; then
                IMAGE=`ls -1 $DIR/*.jpg | grep -v '/ogPreview.*' | head -1`
            else
                IMAGE=`ls -1 $DIR/*.jxl | grep -v '/ogPreview.*' | head -1`
            fi
        fi
        echo "Scaling $IMAGE to $PREVIEW_WIDTH"
        if [ ! -f $DIR/preview.png ] ; then
            if [[ $IMAGE == *jxl ]] ; then
                CMD="$DOCKER_PREFIX magick"
            else
                CMD="convert"
            fi
            $CMD $IMAGE -resize "$PREVIEW_WIDTH" $DIR/preview.png
            #echo "Scaling $IMAGE to $PREVIEW_WIDTH_MOBILE for mobile clients"
            #convert $IMAGE -resize "$PREVIEW_WIDTH_MOBILE" $DIR/preview-mobile.png
            if [ -n "$IMAGE" ] ; then
                echo "Creating preview for $IMAGE (using '$CMD')"
                $CMD $DIR/preview.png -alpha set -virtual-pixel transparent  -channel A -blur 0x8  -level 50%,100% +channel $DIR/preview.png
            fi
        fi
        #echo "Creating mobile preview for $IMAGE"
        #convert $DIR/preview-mobile.png -alpha set -virtual-pixel transparent  -channel A -blur 0x8  -level 50%,100% +channel $DIR/preview-mobile.png
#    fi
done
