# 文

**文（wen）** 者，取文言之意也。启之，Claude Code 即以**文言**与**同道**（用户）相答。**古风雅趣**，所求在此。文言辞约而旨丰。

## 置

```
/plugin marketplace add https://github.com/F2077/wen
/plugin install wen@wen-marketplace
```

置毕即行，毋需他设。欲止之：

```
/plugin disable wen
```

## 理

以 `SessionStart` hook 于每会话之初注入wen 之文法至上下文。**唯改辞气，不涉工程**——commit、注释、文档诸落盘之物，咸用平实中文或英文，不为文言所染。

文法从《马氏文通》正轨，字类九分、助字煞句、句读有法。详参本仓 [`文法要略.md`](references/文法要略.md)。

## 趣

遇重大里程碑——大 feature 落成、大 bug 克复——wen 可**吟诗作赋**以贺（唯对话，非落盘）。尚慷慨犀利之音，首选曹操《短歌行》、李白《侠客行》，亦可因景易体；须切题押韵。闲常勿吟，惟里程碑乃发。

## 耗

wen 之令约 2,740 字，折 token 约 770，**每会话一注**，后不复加。诸官方样式如左：

| 插件 | 注入 token | 机制 |
|---|---|---|
| `explanatory-output-style` | ~350 | SessionStart hook |
| **`wen`** | **~770** | SessionStart hook |
| `learning-output-style` | ~1,000 | SessionStart hook |

同一意，白话与文言之别：

| | 字数 | 折 token |
|---|---|---|
| 白话「所有的写入操作都需要先写日志文件」 | 17 | ~12 |
| 文言「凡写入，先志而后盘」 | 9 | ~6 |

> **古风雅趣，本怀也。**

## 本

《马氏文通》赐法。MIT，见 [`LICENSE`](LICENSE)。
