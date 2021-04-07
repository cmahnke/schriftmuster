#!/bin/sh

find content/post/ -name info.json -exec dirname {} \; | xargs rm -r
find content/post/ -name preview.png | xargs rm 
rm -rf docs/*
