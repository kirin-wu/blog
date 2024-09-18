---
title: 'MySQL'
showArticleMetadata: true
sort: 3
date: 2024-08-15
description: MySQL
---

# 下载、安装、运行

```shell
# 下载
brew install mysql
# 启动
brew services start mysql
# 停止
brew services stop mysql
# 重启
brew services restart mysql
# 只启动mysql
mysql.server start
# 只停止mysql
mysql.server stop
```

## MacOS

```shell
brew install mysql
mysql.server start
mysql_secure_installation
mysql -u root -p
```

## Windows

[mysql 社区版下载](https://dev.mysql.com/downloads/mysql/)

1. 默认安装 端口 3306
2. 帐号 root 密码自定义
3. 配置环境变量

# SQL 通用语法

## sql 分类

| 分类 | 说明         |
| ---- | ------------ |
| DDL  | 数据定义语言 |
| DML  | 数据操作语言 |
| DQL  | 数据查询语言 |
| DCL  | 数据控制语言 |

## DDL-库

```sql
-- 查看数据库
SHOW DATABASES;
-- 创建数据库
CREATE DATABASE IF NOT EXISTS 数据库名称;
-- 创建数据库，指定字符集
CREATE DATABASE IF NOT EXISTS 数据库名称 CHARACTER SET 字符集名称;
-- 删除数据库
DROP DATABASE IF EXISTS 数据库名称;
-- 使用数据库
USE 数据库名称;
-- 查看当前正在使用的数据库
SELECT DATABASE();
-- 查看数据库的创建信息
SHOW CREATE DATABASE 数据库名称;
-- 修改数据库的字符集
ALTER DATABASE 数据库名称 CHARACTER SET 字符集名称;
```

## DDL-表

```sql
-- 查看当前数据库所有表
SHOW TABLES;
-- 查看表结构
DESC 表名;
-- 查看表创建信息
SHOW CREATE TABLE 表名;
-- 创建表
CREATE TABLE 表名 (
    列名1 数据类型1,
    列名2 数据类型2,
    ...
    列名n 数据类型n
)[表注释];
-- 删除表
DROP TABLE IF EXISTS 表名;
-- 修改表名
ALTER TABLE 表名 RENAME TO 新表名;
-- 添加一列
ALTER TABLE 表名 ADD 列名 数据类型;
-- 修改列名和数据类型
ALTER TABLE 表名 CHANGE 列名 新列名 新数据类型;
-- 修改列名
ALTER TABLE 表名 MODIFY 列名 新数据类型;
-- 删除列
ALTER TABLE 表名 DROP 列名;
```
