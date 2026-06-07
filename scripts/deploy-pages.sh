#!/usr/bin/env bash
# 一鍵重新部署 SEN 小孩導航員 到 GitHub Pages（backup901012-stack）
# 用法：bash scripts/deploy-pages.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "==> 靜態匯出 build"
cd web
PAGES_EXPORT=1 \
BASE_PATH=sen-navigator \
NEXT_PUBLIC_SITE_URL=https://backup901012-stack.github.io/sen-navigator \
npm run build
touch out/.nojekyll
cd "$ROOT"

echo "==> 推送 gh-pages 分支"
WT="../sen_ghpages_wt"
git worktree remove "$WT" --force 2>/dev/null || true
git worktree add -B gh-pages "$WT"
find "$WT" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -r web/out/. "$WT"/
( cd "$WT"
  git add -A
  git -c user.name="Claude" -c user.email="noreply@anthropic.com" \
    commit -q -m "deploy: $(date +%F\ %H:%M)" || echo "（無變更）"
  git push -f origin gh-pages )
git worktree remove "$WT" --force

echo "==> 完成：https://backup901012-stack.github.io/sen-navigator/"
