# 📝 VSCode Vim 插件常用快捷键说明

## 🧠 基础模式操作

| 模式   | 快捷键                | 功能说明                |
| ------ | --------------------- | ----------------------- |
| Normal | `h` / `l`             | 左移 / 右移             |
| Normal | `j` / `k`             | 下移 / 上移             |
| Normal | `x`                   | 删除当前字符            |
| Normal | `dd`                  | 删除整行                |
| Normal | `yy`                  | 复制整行                |
| Normal | `p` / `P`             | 粘贴到后 / 粘贴到前     |
| Normal | `u`                   | 撤销                    |
| Normal | `Ctrl + r`            | 反撤销（重做）          |
| Normal | `/关键字` / `?关键字` | 向下 / 向上搜索         |
| Normal | `n` / `N`             | 搜索下一个 / 上一个匹配 |
| Normal | `:w` / `:q`           | 保存 / 退出             |

---

## 🧭 光标移动命令

| 快捷键    | 说明                           |
| --------- | ------------------------------ |
| `^`       | 移动到当前行首的第一个非空字符 |
| `$`       | 移动到当前行尾                 |
| `0`       | 移动到当前行首（第 0 列）      |
| `gg`      | 移动到文件开头                 |
| `G`       | 移动到文件结尾                 |
| `w` / `b` | 向前 / 向后跳转一个单词        |

---

## 🛠️ 你的自定义快捷键映射（来自 settings.json）

> 说明：你设置了 `"vim.leader": "<space>"`，以下 `Leader` 表示空格键。

| 模式   | 快捷键       | 映射功能                        |
| ------ | ------------ | ------------------------------- |
| Normal | `,`          | 映射为 `:`（进入命令模式）      |
| Normal | `Leader + d` | 跳转到定义（等价于 `F12`）      |
| Normal | `Leader + j` | 切换侧边栏显示                  |
| Normal | `ss`         | 保存文件（等价于 `Ctrl + S`）   |
| Normal | `L` / `H`    | 跳到行尾 / 行首第一个字符       |
| Insert | `jj`         | 快速退出插入模式（变为 Normal） |

---

## 🔧 推荐扩展映射（可按需添加）

以下是可添加到 `settings.json` 的 Vim 快捷键配置示例：

```json
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": ["<leader>", "f"],
    "commands": ["workbench.action.findInFiles"]  // 全局搜索
  },
  {
    "before": ["<leader>", "r"],
    "commands": ["editor.action.rename"]          // 重命名变量
  }
],
"vim.insertModeKeyBindings": [
  {
    "before": ["j", "j"],
    "after": ["<Esc>"]
  }
],
"vim.leader": "<space>"
```
