"""Generates public/og-image.png (1200x630) and public/apple-touch-icon.png (180x180).

Brand: dark #131316 background, amber (#f59e0b) -> rose (#e11d48) gradient,
"watching eye" motif from the site hero.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter

AMBER = (245, 158, 11)
ROSE = (225, 29, 72)
BG = (19, 19, 22)

FONT_DIR = "C:/Windows/Fonts"
ARIAL_BOLD = f"{FONT_DIR}/arialbd.ttf"
CONSOLAS_BOLD = f"{FONT_DIR}/consolab.ttf"
CONSOLAS = f"{FONT_DIR}/consola.ttf"


def horizontal_gradient(size, start, end):
    w, h = size
    grad = Image.new("RGB", (w, h))
    px = grad.load()
    for x in range(w):
        t = x / max(w - 1, 1)
        r = int(start[0] + (end[0] - start[0]) * t)
        g = int(start[1] + (end[1] - start[1]) * t)
        b = int(start[2] + (end[2] - start[2]) * t)
        for y in range(h):
            px[x, y] = (r, g, b)
    return grad


def quad_bezier(p0, p1, p2, n):
    return [
        (
            (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t**2 * p2[0],
            (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t**2 * p2[1],
        )
        for t in (i / n for i in range(n + 1))
    ]


def eye_polygon(cx, cy, w, h):
    """Almond (eye) shape as a point list. h is the FULL height (apex at cy +/- h/2)."""
    left, right = cx - w / 2, cx + w / 2
    top = quad_bezier((left, cy), (cx, cy - h), (right, cy), 48)
    bottom = quad_bezier((right, cy), (cx, cy + h), (left, cy), 48)
    return top + bottom


def gradient_text(base, xy, text, font, start=AMBER, end=ROSE):
    """Draws text filled with a horizontal gradient, returns text bbox size."""
    tmp = Image.new("L", base.size, 0)
    d = ImageDraw.Draw(tmp)
    d.text(xy, text, font=font, fill=255)
    bbox = tmp.getbbox()
    if not bbox:
        return (0, 0)
    grad = horizontal_gradient((bbox[2] - bbox[0], bbox[3] - bbox[1]), start, end)
    mask = tmp.crop(bbox)
    base.paste(grad, (bbox[0], bbox[1]), mask)
    return d.textbbox(xy, text, font=font)[2:]


def make_og(path):
    W, H = 1200, 630
    S = 2  # supersample
    img = Image.new("RGB", (W * S, H * S), BG)
    d = ImageDraw.Draw(img)

    EYE_CX, EYE_CY, EYE_W, EYE_H = 1050 * S, 320 * S, 280 * S, 210 * S

    # soft glow behind the eye
    glow = Image.new("RGB", img.size, BG)
    gd = ImageDraw.Draw(glow)
    gd.polygon(eye_polygon(EYE_CX, EYE_CY, EYE_W + 60 * S, EYE_H + 60 * S), fill=(60, 28, 18))
    glow = glow.filter(ImageFilter.GaussianBlur(70))
    img = Image.blend(img, glow, 0.55)
    d = ImageDraw.Draw(img)

    # eye outline with gradient stroke
    stroke = 10 * S
    eye_mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(eye_mask).polygon(eye_polygon(EYE_CX, EYE_CY, EYE_W, EYE_H), fill=255)
    inner = Image.new("L", img.size, 0)
    ImageDraw.Draw(inner).polygon(
        eye_polygon(EYE_CX, EYE_CY, EYE_W - 2 * stroke, EYE_H - 2 * stroke), fill=255
    )
    eye_mask = Image.composite(Image.new("L", img.size, 0), eye_mask, inner)
    grad = horizontal_gradient(img.size, AMBER, ROSE)
    img.paste(grad, (0, 0), eye_mask)
    d = ImageDraw.Draw(img)

    # iris + pupil
    iris_mask = Image.new("L", img.size, 0)
    ir = 40 * S
    ImageDraw.Draw(iris_mask).ellipse([EYE_CX - ir, EYE_CY - ir, EYE_CX + ir, EYE_CY + ir], fill=255)
    img.paste(grad, (0, 0), iris_mask)
    d = ImageDraw.Draw(img)
    pr = 18 * S
    d.ellipse([EYE_CX - pr, EYE_CY - pr, EYE_CX + pr, EYE_CY + pr], fill=BG)

    # text block
    x, y = 72 * S, 150 * S
    f_name = ImageFont.truetype(ARIAL_BOLD, 58 * S)
    f_role = ImageFont.truetype(CONSOLAS_BOLD, 44 * S)
    f_stack = ImageFont.truetype(CONSOLAS, 30 * S)
    f_bottom = ImageFont.truetype(CONSOLAS, 27 * S)

    d.text((x, y), "Гаджимурад Султанмагомедов", font=f_name, fill=(222, 222, 225))
    y += 96 * S
    gradient_text(img, (x, y), "Fullstack / Frontend-разработчик", f_role)
    y += 84 * S
    d.text((x, y), "React · TypeScript · Node.js · GraphQL", font=f_stack, fill=(161, 161, 170))

    d.text((x, 540 * S), "5 лет коммерческой разработки · Senior Frontend в X5 (5Post)",
           font=f_bottom, fill=(113, 113, 122))

    img = img.resize((W, H), Image.LANCZOS)
    img.save(path, "PNG", optimize=True)
    print(path, img.size)


def make_touch_icon(path):
    S = 4  # supersample from 64-equivalent design
    size = 180
    img = Image.new("RGB", (64 * S, 64 * S), BG)
    grad = horizontal_gradient(img.size, AMBER, ROSE)

    eye_mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(eye_mask).polygon(eye_polygon(32 * S, 32 * S, 46 * S, 33 * S), fill=255)
    inner = Image.new("L", img.size, 0)
    ImageDraw.Draw(inner).polygon(eye_polygon(32 * S, 32 * S, 46 * S - 5 * S, 33 * S - 5 * S), fill=255)
    eye_mask = Image.composite(Image.new("L", img.size, 0), eye_mask, inner)
    img.paste(grad, (0, 0), eye_mask)

    iris = Image.new("L", img.size, 0)
    ImageDraw.Draw(iris).ellipse([24 * S, 24 * S, 40 * S, 40 * S], fill=255)
    img.paste(grad, (0, 0), iris)
    d = ImageDraw.Draw(img)
    d.ellipse([28 * S, 28 * S, 36 * S, 36 * S], fill=BG)

    img = img.resize((size, size), Image.LANCZOS)
    img.save(path, "PNG", optimize=True)
    print(path, img.size)


if __name__ == "__main__":
    make_og("public/og-image.png")
    make_touch_icon("public/apple-touch-icon.png")
