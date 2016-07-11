#!/bin/bash
virtualenv ve
. ./ve/bin/activate
pip install -r requirements.pip
nvm install
npm install
