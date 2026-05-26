#!/usr/bin/env bash
set -euo pipefail

# Usage:
# OSS_BUCKET=your-bucket OSS_REGION=cn-hangzhou npm run deploy:aliyun:oss
#
# Required:
#   OSS_BUCKET            e.g. kirin-blog
#   OSS_REGION            e.g. cn-hangzhou
#
# Optional:
#   OSSUTIL_BIN           default: ossutil
#   OSS_PREFIX            e.g. blog/  (sync to oss://bucket/blog/)
#   PUBLIC_BASE_URL       e.g. https://blog.example.com/
#   BUILD_OUTPUT_DIR      default: .vitepress/dist
#   OSS_ENDPOINT          e.g. oss-cn-hangzhou.aliyuncs.com

ROOT_DIR="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT_DIR"

if [ -z "${OSS_BUCKET:-}" ]; then
  echo "ERROR: OSS_BUCKET is required"
  exit 1
fi

if [ -z "${OSS_REGION:-}" ]; then
  echo "ERROR: OSS_REGION is required"
  exit 1
fi

OSSUTIL_BIN="${OSSUTIL_BIN:-ossutil}"
BUILD_OUTPUT_DIR="${BUILD_OUTPUT_DIR:-.vitepress/dist}"
OSS_PREFIX="${OSS_PREFIX:-}"
OSS_ENDPOINT="${OSS_ENDPOINT:-oss-${OSS_REGION}.aliyuncs.com}"

if ! command -v "$OSSUTIL_BIN" >/dev/null 2>&1; then
  echo "ERROR: ossutil not found: $OSSUTIL_BIN"
  echo "Install guide: https://help.aliyun.com/zh/oss/developer-reference/install-ossutil/"
  echo "Then run with:"
  echo "  OSS_BUCKET=$OSS_BUCKET OSS_REGION=$OSS_REGION npm run deploy:aliyun:oss"
  echo "Or specify full path:"
  echo "  OSSUTIL_BIN=/path/to/ossutil OSS_BUCKET=$OSS_BUCKET OSS_REGION=$OSS_REGION npm run deploy:aliyun:oss"
  exit 1
fi

if [ -n "$OSS_PREFIX" ]; then
  TARGET_URI="oss://${OSS_BUCKET}/${OSS_PREFIX}"
else
  TARGET_URI="oss://${OSS_BUCKET}"
fi

echo "==> Using endpoint: $OSS_ENDPOINT"
echo "==> Validate bucket ownership..."
"$OSSUTIL_BIN" ls "oss://${OSS_BUCKET}" -e "$OSS_ENDPOINT" >/dev/null

echo "==> Build static files..."
npm run docs:build

if [ ! -d "$BUILD_OUTPUT_DIR" ]; then
  echo "ERROR: build output not found: $BUILD_OUTPUT_DIR"
  exit 1
fi

echo "==> Sync to OSS: $TARGET_URI"
"$OSSUTIL_BIN" sync "$BUILD_OUTPUT_DIR/" "$TARGET_URI" -e "$OSS_ENDPOINT" --delete --force

echo "==> Done"
if [ -n "${PUBLIC_BASE_URL:-}" ]; then
  echo "Public URL: ${PUBLIC_BASE_URL}"
else
  echo "Tip: bind a custom domain and enable CDN + HTTPS for production traffic."
fi
