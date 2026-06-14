#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20
echo "Killing any process on port 5173..."
npx kill-port 5173 || true
sleep 1
echo "Starting Vite dev server..."
nohup npm run dev > dev-server.log 2>&1 &
echo "Server start initiated"
