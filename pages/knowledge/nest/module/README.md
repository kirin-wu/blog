---
title: '模块'
sort: 2
date: 2024-08-12
---

# 生成模块

```
nest g module <module-name>
```

# 导入模块

app.module

```TypeScript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
@Module({
  imports: [],
  controllers: [AppController, UploadController],
  providers: [AppService, UploadService],
})
export class AppModule {}

```

# 上传文件功能实现

## 安装模块

```
pnpm install @nestjs/platform-express
```
