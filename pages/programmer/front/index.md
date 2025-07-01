---
sort: 1
title: '前端'
showArticleMetadata: false
---

<!-- <img class="front" src="./front.png" /> -->

# 字体压缩

```shell
1. 第一步 安装 npm install -g font-spider ttc2ttf @hayes0724/web-font-converter
2. 第二步  源字体文件 otf 格式 font-convert --pathIn='./SourceHanSansCN-Bold.otf'
--pathOut='./SourceHanSansCN-Bold.ttf'
 源字体文件 ttc 格式
  在 msyhsb001.ttc 文件目录下执行 ttc2ttf ./msyhsb001.ttc ./
3. 第三步 3400常用字体转换 font-spider
./font.html
4. 第四步 font-convert --pathIn='./SourceHanSansCN-Bold.ttf' --pathOut='./SourceHanSansCN-Bold.woff2'
```

<style scoped>
button {
	font-size:40px;
	margin:0 20px;
}

img {
	margin:100px auto;
	transform:scale(1.3)
}

</style>
