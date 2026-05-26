# Kirin Blog 阿里云部署指南

这个项目是 VitePress 静态站，构建产物在 `.vitepress/dist`。  
建议优先使用 `OSS + CDN`，成本低、维护少；如果你已经有 ECS，也可以走 `ECS + Nginx`。

## 方案 A：OSS + CDN（推荐）

### 1) 一次性准备

1. 在阿里云创建 OSS Bucket（建议选择和主要访客同区域）。
2. 将 Bucket 访问控制设置为:
   - 公网可读（或者通过 CDN 回源访问控制，视你的安全策略而定）。
3. 在 CDN 添加加速域名，源站指向 OSS。
4. 证书管理中配置 HTTPS（推荐强制 HTTPS）。
5. 如果你用中国内地访问，需要确保域名完成备案。

### 2) 本地配置 ossutil

先安装并配置 `ossutil`（阿里云官方命令行工具），确保可执行:

```bash
ossutil version
```

### 3) 一键发布

在项目根目录执行:

```bash
OSS_BUCKET=你的bucket \
OSS_REGION=cn-hangzhou \
npm run deploy:aliyun:oss
```

可选变量:

- `OSS_PREFIX`: 发布到子目录，例如 `blog/`
- `PUBLIC_BASE_URL`: 发布完成后的提示地址
- `OSSUTIL_BIN`: 指定 `ossutil` 可执行文件路径

脚本会执行:

1. `npm run docs:build`
2. `ossutil sync .vitepress/dist -> oss://bucket`（带 `--delete`，远端会与本地保持一致）

---

## 方案 B：ECS + Nginx

### 1) ECS 安装 Nginx

在 ECS 上安装并启动 Nginx（Ubuntu 示例）:

```bash
sudo apt update
sudo apt install -y nginx
sudo systemctl enable --now nginx
```

### 2) 上传 Nginx 站点配置

仓库中已提供模板:

- `deploy/aliyun/nginx.vitepress.conf`

关键点是:

```nginx
try_files $uri $uri.html $uri/ =404;
```

这行是为了兼容你当前 `cleanUrls: true` 的 VitePress 产物。

将模板放到 ECS:

```bash
sudo cp nginx.vitepress.conf /etc/nginx/conf.d/kirin-blog.conf
sudo nginx -t
sudo systemctl reload nginx
```

### 3) 一键上传构建产物（可选）

本地执行:

```bash
ECS_HOST=你的服务器IP \
ECS_USER=root \
npm run deploy:aliyun:ecs
```

脚本会:

1. 本地构建 `.vitepress/dist`
2. `rsync` 到 `/var/www/kirin-blog/.vitepress/dist`
3. 远程执行 `nginx -t && systemctl reload nginx`

---

## 域名和备案说明（中国内地常见）

- 使用中国内地服务器/CDN加速时，一般需要域名备案后再提供公网访问。
- 如果只是测试，可先使用 ECS 公网 IP 做临时访问，再补域名和备案。

---

## 项目内新增脚本

`package.json` 已新增:

- `npm run deploy:aliyun:oss`
- `npm run deploy:aliyun:ecs`

部署脚本位置:

- `deploy/aliyun/deploy-oss.sh`
- `deploy/aliyun/deploy-ecs.sh`

---

## 常见问题

1. 页面 404（尤其是无 `.html` 的链接）
   - 检查 Nginx 是否包含 `try_files $uri $uri.html $uri/ =404;`

2. 资源加载 403/404
   - 检查 OSS 权限、CDN 回源配置、以及 Bucket 路径是否和发布脚本一致。

3. 直接访问 OSS 返回 `AccessDenied`（`bucket acl`）
   - 这通常是 Bucket 仍为私有或开启了公共访问阻止。
   - 若要直接通过 OSS URL 访问静态页，需确认:
     - `阻止公共访问`: 关闭
     - `读写权限(ACL)`: 公共读
   - 修改后等待几十秒再访问 `http://<bucket>.oss-<region>.aliyuncs.com/index.html`。
   - 如果你不想公开 Bucket，请改为私有桶 + CDN 回源鉴权，不要直接访问 OSS 地址。

4. 更新后旧资源还在
   - 脚本用了 `ossutil sync --delete`，会删除远端多余文件；
   - 如有 CDN，记得做路径刷新/预热。
