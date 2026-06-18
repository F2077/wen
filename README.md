# 雅

**雅（ya）** 者，名取《诗经》风雅颂也。启用之，Claude Code 即以**文言**与**同道**（用户）相答。**古风古趣**，所求在此。文言辞约而旨丰，token 或连带而省，附益而已。

## 安置

```
/plugin marketplace add https://github.com/F2077/ya
/plugin install ya@ya-marketplace
```

## 启用

继 `/config` → **ya**，`/clear` 或新会话方效。欲固于某项目：于 `.claude/settings.local.json` 加 `"outputStyle": "ya"`。

## 其理

输出样式（output style）也。设 `keep-coding-instructions: true`，其中工程指令**尽留**，唯改语气为文言，**不动流程**。

token 非所求，未之验也，阅者自判：

> 文言：「凡写入，先志而后盘。」（8 字）
> 白话：「所有的写入操作都需要先写日志文件。」（17 字）

## 所本

《诗经》赐名，《马氏文通》赐法。文法参 [ctext 原文](https://ctext.org/wiki.pl?if=gb&res=496878&remap=gb) 及本仓 [`文法要略.md`](references/文法要略.md)（LLM 所纂，非逐字原文）。样式之体：[`ya.md`](output-styles/ya.md)。

MIT，见 [`LICENSE`](LICENSE)。
