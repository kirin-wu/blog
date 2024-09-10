---
title: 'Dockerfile'
showArticleMetadata: true
sort: 3
date: 2024-09-02
description: Dockerfile
---

# 文件内容

```
FROM node:8.4
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000
```

# 解释

- FROM node:8.4：该 image 文件继承官方的 node image，冒号表示标签，这里标签是 8.4，即 8.4 版本的 node。
- COPY . /app：将当前目录下的所有文件（除了.dockerignore 排除的路径），都拷贝进入 image 文件的/app 目录。
- WORKDIR /app：指定接下来的工作路径为/app。
- RUN npm install：在/app 目录下，运行 npm install 命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件。
- EXPOSE 3000：将容器 3000 端口暴露出来， 允许外部连接这个端口。

## 创建镜像

有了 Dockerfile 文件以后，就可以使用 `docker image build` 命令创建 image 文件了。

```bash
 docker image build -t koa-demo .
# 或者
 docker image build -t koa-demo:0.0.1 .
```

-t 参数用来指定 image 文件的名字，后面还可以用冒号指定标签

## 生成容器

```shell
 docker container run -p 8000:3000 -it koa-demo /bin/bash
# 或者
 docker container run -p 8000:3000 -it koa-demo:0.0.1 /bin/bash
```

- p 参数：容器的 3000 端口映射到本机的 8000 端口。
- it 参数：容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。
- koa-demo:0.0.1：image 文件的名字（如果有标签，还需要提供标签，默认是 latest 标签）。
- /bin/bash：容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell。
