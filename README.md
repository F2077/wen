# 雅

**雅（ya）** 者，名取《诗经》风雅颂也。启用之，Claude Code 即以**文言**与**同道**（用户——并肩共事之伴，非主从）相答。**古风古趣**，所求在此。文言密度大，token 或连带而省——附益而已，非初衷。

## 原理

输出样式（output style）也。设 `keep-coding-instructions: true`，内置工程指令**尽留**，唯改语气为文言，**不动流程**。

token 非初衷，未实测，读者自判：

> 文言：「凡写入，先志而后盘。」（8 字）
> 白话：「所有的写入操作都需要先写日志文件。」（17 字）

## 文法

从《马氏文通》（[ctext 原文](https://ctext.org/wiki.pl?if=gb&res=496878&remap=gb)）。本仓整理 [`文法要略.md`](references/文法要略.md)（LLM 总结，非逐字原文，出入以 ctext 为准）。样式本体：[`ya.md`](output-styles/ya.md)。

## 安装

```
/plugin marketplace add /path/to/ya
/plugin install ya@ya-marketplace
```

或 `python3 install.py`，或 `cp output-styles/ya.md ~/.claude/output-styles/ya.md`。

继 `/config` → **ya**，`/clear` 生效。项目固化：于 `.claude/settings.local.json` 加 `"outputStyle": "ya"`。

## 致敬

《诗经》赐名，《马氏文通》赐法。

MIT，见 [`LICENSE`](LICENSE)。
