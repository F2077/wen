#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""雅（ya）安装之脚本——通 Linux、macOS、Windows 三平台。
将 output-styles/ya.md 抄至 ~/.claude/output-styles/ya.md。
用法：python3 install.py   （Windows 下或作 `python install.py`）
"""
import shutil
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
SRC = HERE / "output-styles" / "ya.md"


def main() -> int:
    if not SRC.is_file():
        print(f"❌ 未寻得样式源文件：{SRC}", file=sys.stderr)
        return 1
    dest_dir = Path.home() / ".claude" / "output-styles"
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = dest_dir / "ya.md"
    shutil.copy2(SRC, dest)
    print(f"✓ 雅已安置：{dest}")
    print(f"  平台：{sys.platform}")
    print("  其后：于 Claude Code 行 /config → Output style → 择 ya；/clear 或新会话方生效。")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
