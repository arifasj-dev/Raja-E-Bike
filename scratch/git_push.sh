#!/bin/bash
cd scratch/git-temp
dpkg -x git_1%3a2.53.0-1ubuntu1_amd64.deb .
echo "Extraction complete"
ls -la usr/bin/
