#!/usr/bin/env python3
"""Generate a wall poster (A3 portrait) for the AI4ALL half-day workshop landing page."""

import os
import qrcode
from reportlab.lib.pagesizes import A3
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from io import BytesIO

# --- Paths ---
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
FONTS_DIR = os.path.expanduser(
    "~/.claude/plugins/cache/anthropic-agent-skills/document-skills/69c0b1a06741/skills/canvas-design/canvas-fonts"
)
OUTPUT_PDF = os.path.join(SCRIPT_DIR, "ai4all-halfday-poster.pdf")

LANDING_URL = "https://www.ai4all.store/course-1"
DISPLAY_URL = "ai4all.store/course-1"

# --- Register fonts ---
pdfmetrics.registerFont(TTFont("Outfit-Bold", os.path.join(FONTS_DIR, "Outfit-Bold.ttf")))
pdfmetrics.registerFont(TTFont("Outfit", os.path.join(FONTS_DIR, "Outfit-Regular.ttf")))
pdfmetrics.registerFont(TTFont("GeistMono", os.path.join(FONTS_DIR, "GeistMono-Regular.ttf")))
pdfmetrics.registerFont(TTFont("GeistMono-Bold", os.path.join(FONTS_DIR, "GeistMono-Bold.ttf")))
pdfmetrics.registerFont(TTFont("InstrumentSans", os.path.join(FONTS_DIR, "InstrumentSans-Regular.ttf")))
pdfmetrics.registerFont(TTFont("InstrumentSans-Bold", os.path.join(FONTS_DIR, "InstrumentSans-Bold.ttf")))

# --- Brand palette (same as flyer) ---
BG_DARK = HexColor("#0f172a")
BG_MID = HexColor("#1e293b")
SLATE_700 = HexColor("#334155")
SKY_400 = HexColor("#38bdf8")
INDIGO_400 = HexColor("#818cf8")
VIOLET_400 = HexColor("#c084fc")
WHITE = HexColor("#ffffff")
SLATE_300 = HexColor("#cbd5e1")
SLATE_400 = HexColor("#94a3b8")
SLATE_500 = HexColor("#64748b")
EMERALD = HexColor("#34d399")

# --- Page setup: A3 portrait ---
W, H = A3  # 842 x 1191 pts
MARGIN = 0.9 * inch


def generate_qr(url, px=900):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=2,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#0f172a", back_color="#ffffff").convert("RGB")
    img = img.resize((px, px))
    buf = BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return buf


def draw_gradient_rect(c, x, y, w, h, color1, color2, steps=120):
    step_w = w / steps
    for i in range(steps):
        t = i / (steps - 1)
        r = color1.red + (color2.red - color1.red) * t
        g = color1.green + (color2.green - color1.green) * t
        b = color1.blue + (color2.blue - color1.blue) * t
        c.setFillColorRGB(r, g, b)
        c.rect(x + i * step_w, y, step_w + 0.5, h, fill=1, stroke=0)


def draw_circle_accent(c, cx, cy, r, color, alpha=0.08):
    c.saveState()
    c.setFillColor(color, alpha)
    c.circle(cx, cy, r, fill=1, stroke=0)
    c.restoreState()


def draw_check(c, x, y, size=12):
    c.saveState()
    c.setStrokeColor(EMERALD)
    c.setLineWidth(2.4)
    c.setLineCap(1)
    p = c.beginPath()
    p.moveTo(x, y + size * 0.4)
    p.lineTo(x + size * 0.35, y)
    p.lineTo(x + size, y + size * 0.85)
    c.drawPath(p, fill=0, stroke=1)
    c.restoreState()


def build_poster():
    c = canvas.Canvas(OUTPUT_PDF, pagesize=A3)
    c.setTitle("AI4ALL Half-Day Workshop Poster")

    # === BACKGROUND ===
    c.setFillColor(BG_DARK)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Subtle gradient panel at top
    draw_gradient_rect(c, 0, H - 5.0 * inch, W, 5.0 * inch, BG_DARK, BG_MID, steps=140)

    # Ambient glow accents
    draw_circle_accent(c, W * 0.10, H - 1.6 * inch, 4.0 * inch, SKY_400, 0.06)
    draw_circle_accent(c, W * 0.92, H - 3.0 * inch, 3.4 * inch, VIOLET_400, 0.05)
    draw_circle_accent(c, W * 0.5, 3.2 * inch, 4.0 * inch, INDIGO_400, 0.04)

    # === TOP ACCENT BAR ===
    draw_gradient_rect(c, MARGIN, H - 0.7 * inch, W - 2 * MARGIN, 4, SKY_400, VIOLET_400)

    # === EYEBROW ===
    y = H - 1.35 * inch
    c.setFont("GeistMono", 12)
    c.setFillColor(SKY_400)
    c.drawCentredString(W / 2, y, "AI4ALL  ·  SYDNEY  ·  HALF-DAY WORKSHOP")

    # === MASSIVE HEADLINE ===
    y -= 0.95 * inch
    c.setFont("Outfit-Bold", 78)
    c.setFillColor(WHITE)
    c.drawCentredString(W / 2, y, "Build & Ship")

    y -= 0.95 * inch
    c.setFont("Outfit-Bold", 78)
    c.setFillColor(WHITE)
    c.drawCentredString(W / 2, y, "with AI.")

    # === SUB-HEADLINE ===
    y -= 0.7 * inch
    c.setFont("Outfit-Bold", 32)
    c.setFillColor(INDIGO_400)
    c.drawCentredString(W / 2, y, "Half-Day Intensive Workshop")

    # === LEAD ===
    y -= 0.55 * inch
    c.setFont("InstrumentSans", 16)
    c.setFillColor(SLATE_300)
    c.drawCentredString(W / 2, y, "Learn to direct AI coding tools to build real software.")
    y -= 0.32 * inch
    c.drawCentredString(W / 2, y, "No programming experience needed — just your product vision.")

    # === DIVIDER ===
    y -= 0.55 * inch
    c.setStrokeColor(SLATE_700)
    c.setLineWidth(0.6)
    c.line(MARGIN + 1.8 * inch, y, W - MARGIN - 1.8 * inch, y)

    # === FEATURES (two columns) ===
    features = [
        ("Ship a working app", "in the first 45 minutes"),
        ("Prompt engineering", "3 core techniques"),
        ("Context engineering", "essentials for AI-first dev"),
        ("Claude Code skills", "AI-powered development workflow"),
        ("Idea brainstorming", "from vision to spec with AI"),
        ("Git/GitHub & Vercel", "version control to production"),
    ]

    y -= 0.65 * inch
    c.setFont("Outfit-Bold", 14)
    c.setFillColor(VIOLET_400)
    c.drawCentredString(W / 2, y, "WHAT YOU'LL BUILD & LEARN")

    y -= 0.55 * inch
    col1_x = MARGIN + 0.3 * inch
    col2_x = W / 2 + 0.4 * inch
    row_height = 0.62 * inch

    for i, (title, desc) in enumerate(features):
        col_x = col1_x if i % 2 == 0 else col2_x
        row_y = y - (i // 2) * row_height

        draw_check(c, col_x, row_y - 2, size=14)

        c.setFont("InstrumentSans-Bold", 15)
        c.setFillColor(WHITE)
        c.drawString(col_x + 26, row_y, title)

        c.setFont("InstrumentSans", 12)
        c.setFillColor(SLATE_400)
        c.drawString(col_x + 26, row_y - 18, desc)

    # === BOTTOM SECTION: QR (large, centered) ===
    y_qr_top = y - 3 * row_height - 0.2 * inch

    # Divider
    c.setStrokeColor(SLATE_700)
    c.setLineWidth(0.6)
    c.line(MARGIN + 0.5 * inch, y_qr_top, W - MARGIN - 0.5 * inch, y_qr_top)

    # QR code — large and centered, the poster's primary CTA
    qr_buf = generate_qr(LANDING_URL, px=900)
    qr_img = ImageReader(qr_buf)
    qr_size = 3.2 * inch
    qr_x = (W - qr_size) / 2
    qr_y = y_qr_top - qr_size - 0.7 * inch

    pad = 14
    c.setFillColor(WHITE)
    c.roundRect(qr_x - pad, qr_y - pad, qr_size + 2 * pad, qr_size + 2 * pad, 12, fill=1, stroke=0)
    c.drawImage(qr_img, qr_x, qr_y, qr_size, qr_size)

    # === SCAN PROMPT + URL ===
    label_y = qr_y - pad - 0.45 * inch
    c.setFont("GeistMono-Bold", 13)
    c.setFillColor(SKY_400)
    c.drawCentredString(W / 2, label_y, "SCAN TO LEARN MORE & ENROL")

    c.setFont("Outfit-Bold", 22)
    c.setFillColor(WHITE)
    c.drawCentredString(W / 2, label_y - 0.45 * inch, DISPLAY_URL)

    # === PRICING LINE (compact, single line under URL) ===
    price_y = label_y - 0.95 * inch
    c.setFont("InstrumentSans", 13)
    c.setFillColor(SLATE_400)
    c.drawCentredString(
        W / 2,
        price_y,
        "Individual registration  ·  $799 AUD  ·  Use code AI4ALL for 50% off",
    )

    # === BOTTOM ACCENT BAR + FOOTER ===
    bar_y = MARGIN - 0.1 * inch
    draw_gradient_rect(c, MARGIN, bar_y + 22, W - 2 * MARGIN, 3, SKY_400, VIOLET_400)

    c.setFont("GeistMono", 10)
    c.setFillColor(SLATE_500)
    c.drawCentredString(W / 2, bar_y, "ai4all.store  ·  AI fluency for non-technical founders")

    c.save()
    print(f"Poster saved to: {OUTPUT_PDF}")


if __name__ == "__main__":
    build_poster()
