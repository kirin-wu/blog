#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   1) Build locally:
#      npm run deploy:aliyun:ecs
#   2) Rsync dist directory to ECS and reload nginx:
#      ECS_HOST=1.2.3.4 ECS_USER=root npm run deploy:aliyun:ecs
#
# Required for remote sync:
#   ECS_HOST
# Optional for remote sync:
#   ECS_USER              default: root
#   ECS_PORT              default: 22
#   REMOTE_APP_DIR        default: /var/www/kirin-blog
#   REMOTE_WEB_ROOT       default: /var/www/kirin-blog/.vitepress/dist

ROOT_DIR="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT_DIR"

echo "==> Build static files..."
npm run docs:build

if [ -z "${ECS_HOST:-}" ]; then
  echo "Build complete: .vitepress/dist"
  echo "ECS_HOST not set, skip remote upload."
  exit 0
fi

ECS_USER="${ECS_USER:-root}"
ECS_PORT="${ECS_PORT:-22}"
REMOTE_APP_DIR="${REMOTE_APP_DIR:-/var/www/kirin-blog}"
REMOTE_WEB_ROOT="${REMOTE_WEB_ROOT:-/var/www/kirin-blog/.vitepress/dist}"

echo "==> Prepare remote directory..."
ssh -p "$ECS_PORT" "${ECS_USER}@${ECS_HOST}" "mkdir -p '$REMOTE_APP_DIR/.vitepress'"

echo "==> Upload dist..."
rsync -az --delete -e "ssh -p $ECS_PORT" ".vitepress/dist/" "${ECS_USER}@${ECS_HOST}:${REMOTE_WEB_ROOT}/"

echo "==> Reload nginx..."
ssh -p "$ECS_PORT" "${ECS_USER}@${ECS_HOST}" "nginx -t && systemctl reload nginx"

echo "==> Done: http://${ECS_HOST}"
