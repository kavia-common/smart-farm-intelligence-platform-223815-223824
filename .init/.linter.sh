#!/bin/bash
cd /home/kavia/workspace/code-generation/smart-farm-intelligence-platform-223815-223824/smart_farming_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

