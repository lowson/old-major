#!/bin/bash

if hash electron 2>/dev/null; then
    electron .
else
    echo "please install electron"
    echo "sudo npm install -g electron-prebuilt"
fi
