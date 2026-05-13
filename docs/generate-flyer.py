#!/usr/bin/env python3
"""Generate a one-page promotional flyer for AI4ALL half-day workshop."""

import os
import qrcode
from reportlab.lib.pagesizes import letter
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
OUTPUT_PDF = os.path.join(SCRIPT_DIR, "ai4all-halfday-flyer.pdf")

# --- Register fonts ---
pdfmetrics.registerFont(TTFont("Outfit-Bold", os.path.join(FONTS_DIR, "Outfit-Bold.ttf")))
pdfmetrics.registerFont(TTFont("Outfit", os.path.join(FONTS_DIR, "Outfit-Regular.ttf")))
pdfmetrics.registerFont(TTFont("GeistMono", os.path.join(FONTS_DIR, "GeistMono-Regular.ttf")))
pdfmetrics.registerFont(TTFont("GeistMono-Bold", os.path.join(FONTS_DIR, "GeistMono-Bold.ttf")))
pdfmetrics.registerFont(TTFont("InstrumentSans", os.path.join(FONTS_DIR, "InstrumentSans-Regular.ttf")))
pdfmetrics.registerFont(TTFont("InstrumentSans-Bold", os.path.join(FONTS_DIR, "InstrumentSans-Bold.ttf")))

# --- Colors (brand palette) ---
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

# --- Page setup ---
W, H = letter  # 612 x 792 pts
MARGIN = 0.6 * inch


def generate_qr(url, size=300):
    qr = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=10, border=2)
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#0f172a", back_color="#ffffff").convert("RGB")
    img = img.resize((size, size))
    buf = BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return buf


def draw_gradient_rect(c, x, y, w, h, color1, color2, steps=80):
    step_w = w / steps
    for i in range(steps):
        t = i / (steps - 1)
        r = color1.red + (color2.red - color1.red) * t
        g = color1.green + (color2.green - color1.green) * t
        b = color1.blue + (color2.blue - color1.blue) * t
        c.setFillColorRGB(r, g, b)
        c.rect(x + i * step_w, y, step_w + 0.5, h, fill=1, stroke=0)


def draw_circle_accent(c, cx, cy, r, color, alpha=0.12):
    c.saveState()
    c.setFillColor(color, alpha)
    c.circle(cx, cy, r, fill=1, stroke=0)
    c.restoreState()


def draw_check(c, x, y, size=8):
    """Draw a checkmark using lines instead of a font glyph."""
    c.saveState()
    c.setStrokeColor(EMERALD)
    c.setLineWidth(2)
    c.setLineCap(1)  # round cap
    p = c.beginPath()
    p.moveTo(x, y + size * 0.4)
    p.lineTo(x + size * 0.35, y)
    p.lineTo(x + size, y + size * 0.85)
    c.drawPath(p, fill=0, stroke=1)
    c.restoreState()


def build_flyer():
    c = canvas.Canvas(OUTPUT_PDF, pagesize=letter)
    c.setTitle("AI4ALL Half-Day Workshop Flyer")

    # === BACKGROUND ===
    c.setFillColor(BG_DARK)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Subtle gradient panel at top
    draw_gradient_rect(c, 0, H - 3.2 * inch, W, 3.2 * inch, BG_DARK, BG_MID, steps=100)

    # === AMBIENT GLOW ACCENTS ===
    draw_circle_accent(c, W * 0.12, H - 1.2 * inch, 2.5 * inch, SKY_400, 0.06)
    draw_circle_accent(c, W * 0.88, H - 2.0 * inch, 2.0 * inch, VIOLET_400, 0.05)
    draw_circle_accent(c, W * 0.5, 1.8 * inch, 2.5 * inch, INDIGO_400, 0.04)

    # === TOP ACCENT BAR ===
    draw_gradient_rect(c, MARGIN, H - 0.5 * inch, W - 2 * MARGIN, 3, SKY_400, VIOLET_400)

    # === HEADER ===
    y = H - 1.0 * inch

    c.setFont("GeistMono", 9)
    c.setFillColor(SKY_400)
    c.drawCentredString(W / 2, y, "FOR FOUNDERS & PRODUCT LEADERS")

    y -= 0.55 * inch
    c.setFont("Outfit-Bold", 40)
    c.setFillColor(WHITE)
    c.drawCentredString(W / 2, y, "Build & Ship with AI")

    y -= 0.5 * inch
    c.setFont("Outfit-Bold", 27)
    c.setFillColor(INDIGO_400)
    c.drawCentredString(W / 2, y, "Half-Day Intensive Workshop")

    y -= 0.5 * inch
    c.setFont("InstrumentSans", 12)
    c.setFillColor(SLATE_300)
    c.drawCentredString(W / 2, y, "Learn to direct AI coding tools to build real software.")
    y -= 0.26 * inch
    c.drawCentredString(W / 2, y, "No programming experience needed \u2014 just your product vision.")

    # === DIVIDER ===
    y -= 0.4 * inch
    c.setStrokeColor(SLATE_700)
    c.setLineWidth(0.5)
    c.line(MARGIN + 1.5 * inch, y, W - MARGIN - 1.5 * inch, y)

    # === DATE / TIME ===
    y -= 0.5 * inch
    c.setFont("Outfit-Bold", 24)
    c.setFillColor(WHITE)
    c.drawCentredString(W / 2, y, "Saturday, May 2")

    y -= 0.38 * inch
    c.setFont("GeistMono", 15)
    c.setFillColor(SKY_400)
    c.drawCentredString(W / 2, y, "10:00 AM \u2014 2:00 PM")

    # === WHAT YOU'LL BUILD & LEARN ===
    y -= 0.6 * inch
    c.setFont("Outfit-Bold", 15)
    c.setFillColor(VIOLET_400)
    c.drawCentredString(W / 2, y, "WHAT YOU'LL BUILD & LEARN")

    features = [
        ("Ship a working app", "in the first 45 minutes"),
        ("Prompt engineering", "3 core techniques"),
        ("Context engineering", "essentials for AI-first dev"),
        ("Claude Code skills", "AI-powered development workflow"),
        ("Idea brainstorming", "from vision to spec with AI"),
        ("Git/GitHub & Vercel", "version control to production"),
    ]

    y -= 0.4 * inch
    col1_x = MARGIN + 0.5 * inch
    col2_x = W / 2 + 0.3 * inch
    row_height = 0.48 * inch

    for i, (title, desc) in enumerate(features):
        col_x = col1_x if i % 2 == 0 else col2_x
        row_y = y - (i // 2) * row_height

        draw_check(c, col_x, row_y - 2, size=10)

        c.setFont("InstrumentSans-Bold", 12)
        c.setFillColor(WHITE)
        c.drawString(col_x + 20, row_y, title)

        c.setFont("InstrumentSans", 9.5)
        c.setFillColor(SLATE_400)
        c.drawString(col_x + 20, row_y - 15, desc)

    # === BOTTOM SECTION: PRICING (left) + QR (right) ===
    y_bottom = y - 3 * row_height - 0.2 * inch

    # Divider
    c.setStrokeColor(SLATE_700)
    c.setLineWidth(0.5)
    c.line(MARGIN + 0.5 * inch, y_bottom, W - MARGIN - 0.5 * inch, y_bottom)

    # --- PRICING (left side) ---
    price_x = MARGIN + 0.6 * inch
    py_top = y_bottom - 0.3 * inch

    c.setFont("InstrumentSans", 10.5)
    c.setFillColor(SLATE_400)
    c.drawString(price_x, py_top, "Individual registration")

    py = py_top - 0.48 * inch
    c.setFont("Outfit-Bold", 38)
    c.setFillColor(WHITE)
    c.drawString(price_x, py, "$799")

    c.setFont("InstrumentSans", 12)
    c.setFillColor(SLATE_500)
    c.drawString(price_x + 95, py + 0.08 * inch, "per person")

    # Promo code box
    py -= 0.55 * inch
    promo_box_x = price_x - 6
    promo_box_w = 3.0 * inch
    promo_box_h = 0.58 * inch
    c.setFillColor(BG_MID)
    c.roundRect(promo_box_x, py - 0.06 * inch, promo_box_w, promo_box_h, 6, fill=1, stroke=0)
    c.setStrokeColor(SKY_400, 0.3)
    c.setLineWidth(1)
    c.roundRect(promo_box_x, py - 0.06 * inch, promo_box_w, promo_box_h, 6, fill=0, stroke=1)

    c.setFont("GeistMono-Bold", 11)
    c.setFillColor(SKY_400)
    c.drawString(price_x, py + 0.24 * inch, "USE CODE:")

    c.setFont("Outfit-Bold", 19)
    c.setFillColor(WHITE)
    c.drawString(price_x + 88, py + 0.2 * inch, "AI4ALL")

    c.setFont("InstrumentSans-Bold", 11.5)
    c.setFillColor(EMERALD)
    c.drawString(price_x, py + 0.02 * inch, "50% OFF  \u2192  $399.50")

    # --- QR CODE (right side, vertically centered with pricing) ---
    qr_buf = generate_qr("https://buy.stripe.com/6oU4gB3Wi7Fs5Rxa8y0gw08", size=300)
    qr_img = ImageReader(qr_buf)
    qr_size = 1.5 * inch
    qr_x = W - MARGIN - qr_size - 0.4 * inch
    qr_center_y = (py_top + py - 0.06 * inch) / 2
    qr_y = qr_center_y - qr_size / 2

    # White rounded background
    pad = 8
    c.setFillColor(WHITE)
    c.roundRect(qr_x - pad, qr_y - pad, qr_size + 2 * pad, qr_size + 2 * pad, 8, fill=1, stroke=0)
    c.drawImage(qr_img, qr_x, qr_y, qr_size, qr_size)

    # QR label
    c.setFont("GeistMono", 7.5)
    c.setFillColor(SLATE_400)
    c.drawCentredString(qr_x + qr_size / 2, qr_y - 14, "SCAN TO REGISTER")

    # === BOTTOM: accent bar + footer placed relative to lowest content ===
    lowest_y = min(py - 0.06 * inch, qr_y - 14)  # bottom of promo box or QR label
    bar_y = lowest_y - 0.4 * inch
    draw_gradient_rect(c, MARGIN, bar_y, W - 2 * MARGIN, 3, SKY_400, VIOLET_400)

    c.setFont("GeistMono", 8)
    c.setFillColor(SLATE_500)
    c.drawCentredString(W / 2, bar_y + 10, "ai4all.store")

    c.save()
    print(f"Flyer saved to: {OUTPUT_PDF}")


if __name__ == "__main__":
    build_flyer()
