# 文

**文（wen）** 者，取文言之意也。启之，Claude Code 即以**文言**与**同道**（用户）相答。**古风古趣**，所求在此。文言辞约而旨丰。

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

## 耗

wen 之令 2,075 字，折 token 约 585（英 1,914，汉 161），**每会话一注**，后不复加。诸官方样式如左：

| 插件 | 注入 token | 机制 |
|---|---|---|
| `explanatory-output-style` | ~350 | SessionStart hook |
| **`wen`** | **~585** | SessionStart hook |
| `learning-output-style` | ~1,000 | SessionStart hook |

此 585 token，入场之费耳。文言**单音为主、虚词严省、句短意合**，每轮较白话约省 30–50% token。试观：

| | 字数 | 折 token |
|---|---|---|
| 白话「所有的写入操作都需要先写日志文件」 | 17 | ~12 |
| 文言「凡写入，先志而后盘」 | 9 | ~6 |

十轮省 ~60 token，二十轮逾百。入场之 585，谈三十轮即平，其后皆净省。

> **古风古趣，本怀也；省 token，余事耳。** 以程序之常——动辄数十上百轮——三十轮平入场之费，其后净省，不亦善乎？

## 本

《马氏文通》赐法。MIT，见 [`LICENSE`](LICENSE)。
