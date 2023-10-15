#!/usr/bin/env bash

source "./config.sh"

if [ ! -d "$TO" ]
  then mkdir "$TO"
fi

cat "$INC/comment-license.css" "$FROM/script.js" > "$TO/$OUTPUT"
