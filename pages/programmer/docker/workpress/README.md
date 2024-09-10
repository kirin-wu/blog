---
title: '自建容器'
showArticleMetadata: true
sort: 3
date: 2024-08-15
description: workpress
---

# 编写 dockerfile

## 项目根目录新建.dockerignore

```
.git
node_modules
npm-debug.log
```

## 项目根目录新建 Dockerfile

```
FROM node:8.4
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000
```

# build image 文件

```shell
docker image build -t koa-demo .
# 或者
docker image build -t koa-demo:0.0.1 .
# 查看
docker image ls
```

- -t 后面跟镜像名词
- :x.x.x 是版本
- .是当前目录下

# 生成容器

```shell
$ docker container run -p 8000:3000 -it koa-demo /bin/bash
# 或者
$ docker container run -p 8000:3000 -it koa-demo:0.0.1 /bin/bash
```
