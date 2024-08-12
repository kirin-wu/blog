---
title: 'VitePress Rules'
sort: 2
---

# vitepress frontmatter

| key                  |        value         |                             desc                              |
| :------------------- | :------------------: | :-----------------------------------------------------------: |
| sort                 |          1           | 排序，来进行主目录或文章的排序，同一个目录下，sort 越小越靠前 |
| needRoute            |     true / false     |   是否需要路由，true 的话可以点过去来介绍这个目录是干什么的   |
| date                 | YYYY-MM-DD hh:mm:ss  |                         文章发布日期                          |
| tags                 | ["Golang", "Python"] |                           文章标签                            |
| showArticleMetadata  |     true / false     |          是否展示文章主标题下面的信息，就是原创那行           |
| showComment          |     true / false     |                         是否展示评论                          |
| showChapterCount     |     true / false     |            是否展示 sidebar 上的主目录的文章篇幅数            |
| showChapterCountName |       默认"篇"       |               sidebar 上的主目录的文章计数名称                |
| isOriginal           |     true / false     |                         文章是否原创                          |
| author               |         xxx          |                   文章作者，仅非原创需要写                    |
| articleLink          |       http:xxx       |              文章链接，仅非原创需要写，原文链接               |
