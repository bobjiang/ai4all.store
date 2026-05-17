#!/usr/bin/env python3
"""Generate a Xiaohongshu (RED) cover image for AI4ALL half-day workshop.

Output: 1242x1656 PNG (3:4 portrait, RED-platform standard).
Aesthetic: "Luminous Direction" — dark command-center calm that stands out
in a feed of pastel noise. Chinese-first typography (PingFang SC) for the
monumental headline; geometric mono (GeistMono) for the small metadata.
"""

import os

import qrcode
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# ---------- Paths ----------
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PNG = os.path.join(SCRIPT_DIR, "ai4all-xiaohongshu-cover.png")

CANVAS_FONTS = os.path.expanduser(
    "~/.claude/plugins/cache/anthropic-agent-skills/document-skills/69c0b1a06741/skills/canvas-design/canvas-fonts"
)
PINGFANG = "/System/Library/AssetsV2/com_apple_MobileAsset_Font8/86ba2c91f017a3749571a82f2c6d890ac7ffb2fb.asset/AssetData/PingFang.ttc"
PF_SC_REGULAR = 3
PF_SC_MEDIUM = 7
PF_SC_SEMIBOLD = 11

# ---------- Canvas ----------
W, H = 1242, 1656

# ---------- Palette ----------
BG_DARK = (15, 23, 42)
BG_MID = (30, 41, 59)
BG_PANEL = (24, 33, 53)
SLATE_700 = (51, 65, 85)
SLATE_500 = (100, 116, 139)
SLATE_400 = (148, 163, 184)
SLATE_300 = (203, 213, 225)
WHITE = (255, 255, 255)
SKY_400 = (56, 189, 248)
INDIGO_400 = (129, 140, 248)
VIOLET_400 = (192, 132, 252)
EMERALD = (52, 211, 153)


# ---------- Fonts ----------
def pf(size, weight=PF_SC_SEMIBOLD):
    return ImageFont.truetype(PINGFANG, size, index=weight)


def latin(name, size):
    return ImageFont.truetype(os.path.join(CANVAS_FONTS, name), size)


# ---------- Drawing helpers ----------
def hgradient(draw, x, y, w, h, c1, c2, steps=180):
    step_w = max(1, w // steps)
    for i in range(steps):
        t = i / (steps - 1)
        r = int(c1[0] + (c2[0] - c1[0]) * t)
        g = int(c1[1] + (c2[1] - c1[1]) * t)
        b = int(c1[2] + (c2[2] - c1[2]) * t)
        draw.rectangle([x + i * step_w, y, x + (i + 1) * step_w + 1, y + h], fill=(r, g, b))


def vgradient(draw, x, y, w, h, c1, c2, steps=180):
    step_h = max(1, h // steps)
    for i in range(steps):
        t = i / (steps - 1)
        r = int(c1[0] + (c2[0] - c1[0]) * t)
        g = int(c1[1] + (c2[1] - c1[1]) * t)
        b = int(c1[2] + (c2[2] - c1[2]) * t)
        draw.rectangle([x, y + i * step_h, x + w, y + (i + 1) * step_h + 1], fill=(r, g, b))


def soft_glow(img, cx, cy, radius, color, alpha=60):
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    ld.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], fill=color + (alpha,))
    layer = layer.filter(ImageFilter.GaussianBlur(radius * 0.55))
    img.alpha_composite(layer)


def round_rect(draw, box, radius, fill=None, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def draw_check(draw, x, y, size, color, weight=5):
    pts1 = [(x, y + size * 0.50), (x + size * 0.38, y + size * 0.90)]
    pts2 = [(x + size * 0.38, y + size * 0.90), (x + size, y + size * 0.10)]
    draw.line(pts1, fill=color, width=weight)
    draw.line(pts2, fill=color, width=weight)


def text_w(draw, s, font):
    l, t, r, b = draw.textbbox((0, 0), s, font=font)
    return r - l


def text_h(draw, s, font):
    l, t, r, b = draw.textbbox((0, 0), s, font=font)
    return b - t


def draw_centered(draw, y, s, font, fill):
    w = text_w(draw, s, font)
    draw.text(((W - w) / 2, y), s, font=font, fill=fill)


# ---------- QR ----------
def make_qr(url, px):
    qr = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=10, border=2)
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color=(15, 23, 42), back_color=(255, 255, 255)).convert("RGB")
    return img.resize((px, px), Image.LANCZOS)


# ---------- Build ----------
def build():
    img = Image.new("RGBA", (W, H), BG_DARK + (255,))

    # Top atmospheric gradient
    atmo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ad = ImageDraw.Draw(atmo)
    vgradient(ad, 0, 0, W, int(H * 0.42), BG_MID, BG_DARK)
    img.alpha_composite(atmo)

    # Distant glows
    soft_glow(img, int(W * 0.18), 220, 380, SKY_400, alpha=42)
    soft_glow(img, int(W * 0.88), 460, 320, VIOLET_400, alpha=36)
    soft_glow(img, int(W * 0.50), int(H * 0.80), 460, INDIGO_400, alpha=28)

    draw = ImageDraw.Draw(img)
    MARGIN = 78

    # ===== TOP STRIPE =====
    hgradient(draw, MARGIN, 60, W - 2 * MARGIN, 4, SKY_400, VIOLET_400)

    # ===== EYEBROW + TAG =====
    eyebrow_font = latin("GeistMono-Regular.ttf", 22)
    eyebrow = "FOR NON-TECH FOUNDERS  ·  PRODUCT LEADERS"
    draw_centered(draw, 92, eyebrow, eyebrow_font, SKY_400)

    cn_tag_font = pf(28, PF_SC_REGULAR)
    draw_centered(draw, 132, "非技术创始人 · 产品负责人 · 6 小时实战工作坊", cn_tag_font, SLATE_300)

    # ===== HEADLINE =====
    # Founder-facing rhythm: pain, outcome, asset.
    h_top = pf(102, PF_SC_SEMIBOLD)
    h_big = pf(138, PF_SC_SEMIBOLD)
    you_font = pf(82, PF_SC_SEMIBOLD)
    mvp_font = latin("Outfit-Bold.ttf", 112)

    # Line 1: "不会写代码"
    line1_y = 214
    draw_centered(draw, line1_y, "不会写代码", h_top, WHITE)

    # Line 2: "当天" (indigo accent) + gap + "上线" (white)
    line2_y = line1_y + 116
    t1a, t1b = "当天", "上线"
    w_1a = text_w(draw, t1a, h_big)
    w_1b = text_w(draw, t1b, h_big)
    gap = 44
    block_w = w_1a + gap + w_1b
    x1 = (W - block_w) / 2
    draw.text((x1, line2_y), t1a, font=h_big, fill=INDIGO_400)
    draw.text((x1 + w_1a + gap, line2_y), t1b, font=h_big, fill=WHITE)

    # Line 3: "你的 AI MVP"
    line3_y = line2_y + 138
    you_text = "你的"
    mvp_text = "AI MVP"
    you_w = text_w(draw, you_text, you_font)
    mvp_w = text_w(draw, mvp_text, mvp_font)
    gap3 = 26
    block3_w = you_w + gap3 + mvp_w
    x3 = (W - block3_w) / 2
    draw.text((x3, line3_y + 8), you_text, font=you_font, fill=WHITE)
    draw.text((x3 + you_w + gap3, line3_y - 2), mvp_text, font=mvp_font, fill=VIOLET_400)

    # ===== SUBTITLE =====
    sub_y = line3_y + 150
    sub_font = pf(32, PF_SC_REGULAR)
    draw_centered(draw, sub_y, "0 基础  ·  全程动手  ·  结束前拿到可分享链接", sub_font, SLATE_300)

    # ===== DIVIDER 1 =====
    div1_y = sub_y + 64
    draw.line([(MARGIN + 110, div1_y), (W - MARGIN - 110, div1_y)], fill=SLATE_700, width=1)

    # ===== DATE / TIME =====
    dt_y = div1_y + 30
    draw_centered(draw, dt_y, "SATURDAY  ·  JUNE  6", latin("GeistMono-Regular.ttf", 22), SKY_400)
    draw_centered(draw, dt_y + 38, "2026 年 6 月 6 日 · 周六", pf(38, PF_SC_MEDIUM), WHITE)
    draw_centered(draw, dt_y + 92, "10:00 AM  —  4:00 PM", latin("GeistMono-Bold.ttf", 34), SKY_400)

    # ===== DIVIDER 2 =====
    div2_y = dt_y + 152
    draw.line([(MARGIN + 110, div2_y), (W - MARGIN - 110, div2_y)], fill=SLATE_700, width=1)

    # ===== SECTION HEADING =====
    sect_y = div2_y + 26
    draw_centered(draw, sect_y, "WHAT  YOU'LL  SHIP", latin("GeistMono-Regular.ttf", 22), VIOLET_400)
    draw_centered(draw, sect_y + 34, "非技术创始人带走的结果", pf(30, PF_SC_MEDIUM), SLATE_300)

    # ===== FEATURES GRID =====
    features = [
        ("把想法整理成清晰 PRD", "先定用户、场景、功能边界"),
        ("写出 AI 听得懂的需求", "3 个 prompt 让结果不跑偏"),
        ("亲手做出可点击 MVP", "不是截图，是能跑的应用"),
        ("像管理开发一样管理 AI", "你定方向、约束和验收"),
        ("现场上线成可分享链接", "结束前可扫码打开演示"),
        ("复用你的 AI 产品工作流", "下个想法不用从零摸索"),
    ]
    grid_y = sect_y + 96
    row_h = 96
    col1_x = MARGIN + 26
    col2_x = W / 2 + 14
    title_font = pf(26, PF_SC_SEMIBOLD)
    desc_font = pf(20, PF_SC_REGULAR)

    for i, (title, desc) in enumerate(features):
        col_x = col1_x if i % 2 == 0 else col2_x
        row_y = grid_y + (i // 2) * row_h
        draw_check(draw, col_x, row_y + 4, 22, EMERALD, weight=4)
        draw.text((col_x + 40, row_y - 2), title, font=title_font, fill=WHITE)
        draw.text((col_x + 40, row_y + 36), desc, font=desc_font, fill=SLATE_400)

    # ===== BOTTOM DIVIDER =====
    bottom_div_y = grid_y + 3 * row_h + 18
    draw.line([(MARGIN + 110, bottom_div_y), (W - MARGIN - 110, bottom_div_y)], fill=SLATE_700, width=1)

    # ===== PRICING + QR =====
    panel_top = bottom_div_y + 26
    panel_h = 200

    # Price panel (left)
    price_w = int((W - 2 * MARGIN) * 0.58) - 14
    price_box = (MARGIN, panel_top, MARGIN + price_w, panel_top + panel_h)
    # Subtle inner luminance — a second hairline just inside
    round_rect(draw, price_box, 18, fill=BG_PANEL, outline=(56, 189, 248, 110), width=1)
    inner = (MARGIN + 2, panel_top + 2, MARGIN + price_w - 2, panel_top + panel_h - 2)
    round_rect(draw, inner, 16, outline=(56, 189, 248, 28), width=1)

    px = MARGIN + 28

    # Eyebrow — the offer's reason for existing (scarcity), stated up front
    draw.text((px, panel_top + 20), "创始人早鸟 · 前 20 席 5 折",
              font=pf(22, PF_SC_MEDIUM), fill=SLATE_300)

    # The drop — discounted price as the monumental gesture
    price_font = latin("Outfit-Bold.ttf", 82)
    price_y = panel_top + 56
    draw.text((px, price_y), "$399", font=price_font, fill=WHITE)
    price_w_val = text_w(draw, "$399", price_font)
    rx = px + price_w_val + 20

    # Anchor — original price, struck, small + muted, riding the price's shoulder
    strike_font = latin("Outfit-Bold.ttf", 30)
    strike_y0 = price_y + 4
    draw.text((rx, strike_y0), "$799", font=strike_font, fill=SLATE_500)
    sb_l, sb_t, sb_r, sb_b = draw.textbbox((rx, strike_y0), "$799", font=strike_font)
    strike_mid = (sb_t + sb_b) // 2
    draw.line([(sb_l - 3, strike_mid), (sb_r + 3, strike_mid)], fill=SLATE_400, width=3)
    draw.text((rx, price_y + 48), "原价 / 人",
              font=pf(20, PF_SC_REGULAR), fill=SLATE_500)

    # Scarcity line — emerald is the value moment, spent once, here.
    scar_y = panel_top + 150
    draw.ellipse([px, scar_y + 8, px + 11, scar_y + 19], fill=EMERALD)
    draw.text((px + 24, scar_y), "6 小时 → 带走一个能演示的产品",
              font=pf(23, PF_SC_SEMIBOLD), fill=EMERALD)

    # QR panel (right) — larger QR, less padding
    qr_box_x = MARGIN + price_w + 24
    qr_box_w = (W - MARGIN) - qr_box_x
    qr_box = (qr_box_x, panel_top, qr_box_x + qr_box_w, panel_top + panel_h)
    round_rect(draw, qr_box, 18, fill=WHITE)
    qr_inner = min(qr_box_w - 28, panel_h - 56)
    qr_img = make_qr("https://buy.stripe.com/6oU4gB3Wi7Fs5Rxa8y0gw08", qr_inner)
    qr_x = qr_box_x + (qr_box_w - qr_inner) // 2
    qr_y = panel_top + 16
    img.paste(qr_img, (qr_x, qr_y))
    qr_label = "扫码立即报名"
    qr_label_font = pf(20, PF_SC_MEDIUM)
    lw = text_w(draw, qr_label, qr_label_font)
    draw.text((qr_box_x + (qr_box_w - lw) // 2, qr_y + qr_inner + 6),
              qr_label, font=qr_label_font, fill=(15, 23, 42))

    # ===== HASHTAGS =====
    tag_y = panel_top + panel_h + 28
    tags_font = pf(22, PF_SC_MEDIUM)
    draw_centered(draw, tag_y, "#非技术创始人  #AI产品  #MVP  #Claude Code", tags_font, SLATE_400)

    # ===== BOTTOM STRIPE =====
    bar_y = H - 60
    hgradient(draw, MARGIN, bar_y, W - 2 * MARGIN, 4, VIOLET_400, SKY_400)
    foot_font = latin("GeistMono-Regular.ttf", 20)
    draw_centered(draw, bar_y + 16, "ai4all.store", foot_font, SLATE_500)

    img.convert("RGB").save(OUTPUT_PNG, "PNG", optimize=True)
    print(f"Cover saved to: {OUTPUT_PNG}")
    print(f"Canvas: {W}x{H}  (3:4)")


if __name__ == "__main__":
    build()
