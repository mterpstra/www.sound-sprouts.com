# Handoff: Sound Sprouts — Brand Refresh

## Overview
This is a **brand identity refresh** for Sound Sprouts (`soundsprouts.org`) — a children's book series by L. Caroline Terpstra, a speech-language pathologist. The current site is functional but visually dated (light-green wash, glossy logo, generic type). This handoff defines a new brand system — colors, typography, logo, components — and shows how it should be applied to the homepage.

The brand direction is **"Sprout & Soil"**: warm, growth-y, parental. Sage greens, cream paper, terracotta accent. Serif display type paired with a clean humanist sans.

---

## About the Design Files
The files in this bundle are **design references created in HTML/JSX prototypes**. They show the intended look and behavior — they are NOT production code to copy directly.

Your job is to **recreate these designs in the Sound Sprouts codebase's existing environment** (presumably static HTML/CSS based on what's currently live), using its established patterns. Use the design tokens (`assets/tokens.css`) and the logo SVGs (`assets/*.svg`) as drop-in assets, and rebuild the markup/styles using the codebase's conventions.

The prototype HTML uses React + inline styles purely for rapid iteration. Don't carry that pattern into the real site unless it already uses React.

---

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, and component styles are final. Match them as closely as you can. Imagery (book covers, author portrait) uses placeholders in the prototype — substitute the real assets in their place (the existing site has them at `images/dedes-petshop-page.png`, `images/carol-professional.jpg`, etc.).

---

## The Logo

**Final mark: "The Sprout · Seed"** — a flat seedling silhouette in deep moss (`#3D5841`), with a terracotta seed (`#C97A56`) at the tip and a brown soil hill (`#7A4F2E`) at the base.

- **`assets/sound-sprouts-logo.svg`** — primary, full color
- **`assets/sound-sprouts-logo-mono.svg`** — single-color (all deep moss) for tight spaces, watermarks, or dark backgrounds

### Logo rules
- The stem **touches** the peak of the soil hill — no visible gap, and the stem must not extend below the hill.
- The seed (terracotta circle) sits at the top of the stem.
- The mark works at small sizes — it should be legible down to **14px**. Do not put it on a busy background. Always pair with at least 12px of clear space around the bounding box.
- Pair the mark with the wordmark "Sound Sprouts" in Fraunces italic, color `#3D5841` for "Sound" and `#C97A56` for "Sprouts". They should sit on the same baseline as the visual center of the mark.

### Replacing the old logo
The existing site uses `images/logo-small.png` (a glossy blue circular badge). Replace with the new `sound-sprouts-logo.svg`. Update the `<img>` tag (or background-image rule) and remove any drop-shadow/filter styles that may have been applied to compensate for the old logo.

---

## Design Tokens

See **`assets/tokens.css`** for the full token set as CSS custom properties. Summary:

### Colors
| Token             | Hex         | Use                                           |
| ----------------- | ----------- | --------------------------------------------- |
| `--ss-paper`      | `#FBF8F1`   | Page background                               |
| `--ss-cream`      | `#F5F1E8`   | Card/section backgrounds (subtle warmth)      |
| `--ss-ink`        | `#2A2E22`   | Primary text                                  |
| `--ss-ink-soft`   | `#5C5F50`   | Secondary text, captions                      |
| `--ss-moss-deep`  | `#3D5841`   | **Primary brand color** — headlines, buttons  |
| `--ss-sage`       | `#6B8A6E`   | Mid-tone fills                                |
| `--ss-sprout`     | `#A8BFA0`   | Tints, chip backgrounds                       |
| `--ss-terracotta` | `#C97A56`   | **Accent** — secondary CTAs, "Sprouts" word   |
| `--ss-butter`     | `#E8C77D`   | Soft accent, hero halo                        |
| `--ss-soil`       | `#7A4F2E`   | Logo only (soil hill)                         |

**Avoid:** the current `#e1f6e1` light-green wash, hard reds, gradients, drop shadows on the logo.

### Typography
- **Display / headlines:** Fraunces (Google Fonts). Use weight 400–500, optical size variable. Italic forms feature prominently — set "Sprouts" in italic, and use italic for emphasized words inside the headline (`words`, `sentences`).
- **Body / UI:** Inter (Google Fonts). Weight 400 body, 500 strong UI labels, 600 buttons.
- **Mono (rare — for eyebrow/spec captions):** system mono stack (ui-monospace, Menlo, monospace).

Embed in `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@300..700&display=swap" rel="stylesheet" />
```

### Spacing
A 4px base scale: 4, 8, 12, 16, 24, 32, 48, 64, 80. See tokens for variable names.

### Border radius
- `4px` for cards, small surfaces.
- `999px` for pill buttons and chips (the brand uses pill buttons everywhere).
- The hero "Buy Now" and "Shop the Series" buttons use the pill radius.

---

## Screens / Views

### Homepage Hero (highest-priority screen)

**Purpose:** Introduces the book series and Carol's credibility, drives "Shop the Series" and "Meet Carol" actions.

**Layout (desktop, ≥1024px):**
- Full-width, with `padding-inline: 80px` and `padding-top: 32px`.
- Background: `--ss-cream` (`#F5F1E8`).
- A faint decorative botanical SVG in the top-left corner at ~18% opacity (optional — can be omitted for v1).
- Top nav row (flex, space-between): logo lock-up on left, nav links centered/right, "Buy Now" pill button far right.
- Hero grid: 2 columns, `1.2fr 1fr`, gap `64px`. Left = copy + CTAs + stats. Right = book stack illustration.

**Nav components:**
- Logo lock-up: mark (40px tall) + wordmark "Sound Sprouts" in Fraunces italic 26–30px. Color: "Sound" `--ss-moss-deep`, "Sprouts" `--ss-terracotta`.
- Nav links: 4 items — "The Books", "About Carol", "Resources", "Contact". Inter 14px, weight 500, color `--ss-ink`. Gap `36px`.
- "Buy Now" button: pill, bg `--ss-moss-deep`, color `--ss-paper`, padding `10px 18px`, font 13px, weight 600.

**Hero left column:**
1. **Eyebrow chip** (top): pill, bg `--ss-sprout` at ~33% alpha (use `rgba(168, 191, 160, 0.33)` or layer `#A8BFA033`), color `--ss-moss-deep`, padding `6px 14px 6px 10px`, font 12px weight 600. Leading dot (10px filled circle in `--ss-moss-deep`). Text: "New series · Written by a speech-language pathologist".
2. **H1 headline** — Fraunces 84px (responsive: clamp(36px, 7vw, 84px)), weight 400, line-height 0.98, letter-spacing -3px. Three lines:
   - "Because sounds"
   - "lead to *words*," (italic, color `--ss-moss-deep`)
   - "and words to *sentences*." (italic, color `--ss-terracotta`)
3. **Lead paragraph** — Inter 17px, line-height 1.55, color `--ss-ink-soft`, max-width `480px`. Copy: *"A children's book series where speech, language, and literacy meet. Each story focuses on a set of sounds, packed with rhyme, playful characters, and the early skills kids need to grow."*
4. **CTA row** (flex, gap 14px):
   - Primary: "Shop the Series" — pill, bg `--ss-moss-deep`, color `--ss-paper`, padding `16px 28px`, font 15px weight 600, inline arrow icon (→) on the right.
   - Secondary: "Meet Carol" — text button, underlined, color `--ss-ink`, font 15px weight 600.
5. **Stats row** (margin-top 56px, flex gap 32px): three stat blocks. Each stat is a big numeral (Fraunces 32px, weight 500) above a caption (Inter 13px, `--ss-ink-soft`):
   - **25+** years in practice
   - **2** books in series
   - **3–7** ages

**Hero right column — book stack:**
- A 520px-tall canvas, centered content.
- A soft circular butter-tone halo behind the books (380px diameter, `#E8C77D` at ~33% alpha).
- Two book covers, overlapping:
  - **Papa's Pool Rules** (coming soon) — rotated `-7deg`, translated left 40px, behind. 220×300.
  - **Dede's Pet Shop** (out now) — rotated `+5deg`, translated right 20px and down 20px, in front. 240×330.
- Book covers should have a subtle drop shadow: `0 12px 28px rgba(28,30,22,0.12), 0 2px 6px rgba(28,30,22,0.08)`, radius `2px`.

### Brand Identity / Style Guide page (optional internal reference)
The Brand Identity prototype artboard documents the system itself (wordmark, palette, type specimens, button styles, eyebrow tags). It does not need to be shipped as a public page, but use it as the reference for component styling everywhere else.

---

## Components

### Buttons
Three variants, all pill-shaped (`border-radius: 999px`):

1. **Primary** — bg `--ss-moss-deep`, color `--ss-paper`, padding `14–16px × 24–28px`, font Inter 14–15px, weight 600. Hover: lighten background ~6%. Use for: "Buy", "Shop the Series".
2. **Secondary outline** — transparent bg, color `--ss-moss-deep`, border `1.5px solid --ss-moss-deep`, padding accounts for the 1.5px border so size matches primary. Hover: bg `--ss-moss-deep` @ 8%. Use for: "Resources", tertiary links.
3. **Accent** — bg `--ss-terracotta`, color `--ss-paper`, same dimensions as primary. Use sparingly for moments that need warmth — "Read Sample".

### Eyebrow chip (used above hero H1, on book detail badges)
Pill, bg `--ss-sprout` @ 33% alpha or `--ss-cream`, color `--ss-moss-deep`, padding `6px 14px`, font Inter 12px weight 600, letter-spacing `0.4px`. Optional leading dot (small filled circle).

### Eyebrow caption (small label above sections)
Inter or mono, 11px, uppercase, letter-spacing `3px`, color `--ss-moss-deep` (or `--ss-ink-soft` for muted). Use to tag sections like "DIRECTION 01" or "THE BOOKS".

### Section / card surface
Bg `--ss-cream`, radius `4px`, no border. For elevated cards (book covers, modals), use the shadow from the book stack.

### Tag list (under hero or below stats)
Inline row of items separated by small terracotta dots. Each item: Inter 11px, color `--ss-ink-soft`, with a 6×6 terracotta dot before the label. Use for credibility tags like "Engaging Stories · Speech Development · Rhyming Words · Phonemic Awareness".

### Author chip (in hero footer / about preview)
Horizontal: portrait (70×70, radius `--ss-radius-md`) + name (Fraunces italic 15px, color `--ss-ink`) + subtitle (Inter 13px, `--ss-ink-soft`).

---

## Interactions & Behavior

The prototypes are static — interaction behavior is minimal and mostly carried over from the existing site:

- **Nav links** scroll to or navigate to existing pages (`/`, `/resources.html`, etc.). Keep current URLs.
- **"Buy Now" / "Shop the Series"** → existing Amazon links (e.g. `https://a.co/d/e0UVRkX` for Dede's Pet Shop).
- **"Meet Carol"** → in-page anchor to the author section, or a future `/about` page.
- **Hover states:** all buttons should lighten/darken their background by 5–8% on hover. Underline links: thicken the underline on hover. Cards: no hover effect needed for now.
- **No animations are specified** beyond standard browser transitions. Keep it calm.

---

## Responsive Behavior

The prototypes are sized at 1440px wide. For the real site:
- **Mobile (<640px):** stack hero columns vertically (copy first, book stack second), reduce H1 to `clamp(36px, 9vw, 56px)` with line-height 1.05, drop padding-inline to 20px, hide the decorative botanical SVG.
- **Tablet (640–1024px):** keep 2-column hero but tighten the gap to 32px; scale H1 to ~64px.
- **Buttons** stack vertically on mobile, full-width.
- **Nav** collapses to a hamburger on mobile (use whatever pattern the existing site already has).

---

## Assets

- **`assets/sound-sprouts-logo.svg`** — primary logo, 64×64 viewBox, scalable.
- **`assets/sound-sprouts-logo-mono.svg`** — single-color version.
- **`assets/tokens.css`** — design tokens as CSS custom properties.
- **Book covers, author portrait** — use the existing files on the live site (`images/dedes-petshop-page.png`, `images/carol-professional.jpg`, etc.). The current PNG quality is acceptable; if updated photography is available, prefer that.

---

## Files in this Handoff

- `README.md` — this file
- `assets/sound-sprouts-logo.svg` — primary logo
- `assets/sound-sprouts-logo-mono.svg` — monochrome variant
- `assets/tokens.css` — colors, type, spacing as CSS custom properties
- `reference/Sound Sprouts Brand Directions.html` — the original design prototype (open in a browser to see all three explored directions, the logo iterations, the brand identity card, and the homepage hero applied)
- `reference/direction-sprout.jsx`, `logos.jsx`, `shared.jsx` — JSX source for the Sprout & Soil direction. These are reference only — do not ship them.

To open the prototype: open `reference/Sound Sprouts Brand Directions.html` in a browser. It uses pan/zoom — drag to pan, scroll to zoom, click any artboard to focus it fullscreen.

---

## Out of Scope (for this pass)

These were not designed and should be left as-is for now, or scheduled for a follow-up:
- The Resources page (`/resources.html`)
- The book detail / inside-spread sections of the homepage (below the hero)
- Author bio section ("I'm L. Caroline Terpstra…")
- Footer
- Any email / store / blog templates

The brand tokens and components above are sufficient to style any of these consistently once the team decides to tackle them.
