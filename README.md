# 雅

**雅（ya）** 者，Claude Code 之**输出样式（output style）**也，与**同道**（用户——并肩共事之伴，非主从）以**文言**相答，**适用于一切工程与日常对话**。名取《诗经》风、雅、颂之“雅”——所求**古风古趣**也。

## 原理

雅乃 Claude Code 之**输出样式**——一 markdown 文件，会话启时注入**系统提示**（system prompt）。

**`keep-coding-instructions: true`（关键）**：完整保留 Claude Code 内置工程指令（工作流、验证、改动范围等），雅**唯改语气为文言，于流程无所增减**——工作流之守护系于此，无需额外“铁则”。

**作雅之初衷，非为省 token，乃求对话之古趣也。** 文言信息密度本高，或可偶省 token，然未经实测——欲知者自测之可也。

> **文白对照**（系统编程场景，示其密度）：
> - 文言：「凡写入，先志而后盘。若崩于刷盘之际，则回放日志以复其态。」（28 字）
> - 白话：「所有的写入操作都需要先写 WAL 日志，然后再把数据刷到磁盘。如果刷盘时发生了崩溃，就通过回放日志来恢复。」（52 字）

## 其道（铁则三）

1. **唯改言，不动其行**：不增流程——不每轮强帖“工状”，不强立铁则之段，不例行崩溃推理。工程之序，一循 Claude Code 默认。
2. **对话文言，落盘平实**：唯与**同道**对话用文言；凡写进仓库之物——提交消息（commit）、代码注释、README／文档、PR／Code Review——**一律平实现代中文（或英文）**，免增队友与后人之难。
3. **古趣为先，事实不虚**：求古风古趣，非死磕文法；然行号、正确性、验证，一字不苟。遇难解之要害，可半文半白。

## 里程碑·吟诗

遇**重大节点**（大 feature 落成、大 bug 克复），可**吟诗作赋**以贺——**须押韵**。尚**慷慨犀利**之音，首选**曹操《短歌行》、李白《侠客行》**，亦可因景易体（杜甫沉郁、苏轼旷达、辛弃疾豪放）。详见 `output-styles/ya.md`。

## 文法之基

文法从《马氏文通》（清·马建忠，1898）正轨：字分实五（名、代、静、动、状）虚四（介、连、助、叹），字无定类、随文生义。**原文见 [ctext.org](https://ctext.org/wiki.pl?if=gb&res=496878&remap=gb)，是为唯一真相。**

**雅以古趣为先，非死磕完美文法；然文法仍尽量求准——不求无疵，但求有据。** 本仓另整理 [`references/文法要略.md`](references/文法要略.md) 一篇（**由 LLM 据《马氏文通》总结而成，非逐字原文；如有出入，以 ctext 原文为准**），备查。

- 样式本体（锚点）：[`output-styles/ya.md`](output-styles/ya.md)

## 安装

**法一·插件（marketplace，最地道）**：

```
/plugin marketplace add /path/to/ya
/plugin install ya@ya-marketplace
```

**法二·跨平台脚本**（Linux／macOS／Windows，需 Python 3）：

```bash
python3 install.py        # Windows 下或作 python install.py
```

**法三·单文件**（手动，Unix）：

```bash
cp output-styles/ya.md ~/.claude/output-styles/ya.md
```

继于 Claude Code 中 `/config` → Output style → 选 **ya**，`/clear` 或新会话生效。

> **提示**：欲为某项目固化 ya，可于该项目 `.claude/settings.local.json` 中加 `"outputStyle": "ya"`（项目级覆盖用户级，新会话生效）。

## 例（对话）

> 凡写入，先志而后盘。志者，顺序追加也，原子提交赖之。若崩于刷盘之际，则回放日志以复其态。

## 致敬

- **《诗经》**·风雅颂——“雅”之名所自。
- **《马氏文通》**——文法参考所本。

## 许可

MIT，详见 [`LICENSE`](LICENSE)。
