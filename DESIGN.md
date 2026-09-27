---
name: Poca — Cerâmica de ateliê
description: Site do ateliê de cerâmica Poca: peças feitas à mão e cozidas no fogo.
colors:
  ink: "#150f0c"
  ink-2: "#1c1410"
  ink-3: "#251a14"
  brick: "#5b4b43"
  brick-deep: "#3b2f28"
  ember: "#d8b4a2"
  ember-pale: "#e5c3b3"
  ember-deep: "#c09479"
  clay: "#a98e7d"
  tile: "#f3ece4"
  text-muted: "#c6b5a8"
  line: "rgba(216, 180, 162, 0.16)"
  line-strong: "rgba(216, 180, 162, 0.28)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 7vw, 5.4rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.08
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  md: "14px"
  sm: "8px"
  xs: "10px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  section: "clamp(4.5rem, 10vw, 8.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.4rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.tile}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.4rem"
---

# Design System: Poca — Cerâmica de ateliê

## Overview

**Creative North Star: "A Fornalha — the kiln interior."**

The site is the inside of a kiln: a dark, soot-and-brick chamber where the only warm light is the fire that made every piece. It refuses the category's default arrangement — a warm cream ground with a high-contrast literary serif and a terracotta accent scattered over neutral cards. Pieces are presented as objects pulled from the fire, each one lit from within; the logo's white ground becomes the shelf tile the wordmark sits on.

The energy is warm and grounded, never cozy-cliché. Depth is quiet: neutral elevation shadows carry structure, while the fire-glow is expressed as radial light behind imagery and as ember borders on hover and focus — never as a colored box-shadow halo. Density is calm with a deliberate rhythm; one authored entrance (the scroll reveal) replaces scattered hover effects.

**Key Characteristics:**
- Dark soot-brick ground with a single fire-glow terracotta accent.
- The kiln-mouth arch as the recurring framing gesture (hero, section openers, manifesto).
- Weighty, slightly irregular display face (Bricolage Grotesque) over a quiet grotesque body.
- Rounded-pill buttons; neutral elevation shadows; ember light as the only chromatic glow.

## Colors

The palette is pinned by the Poca logo (clay on white) and extended into a dark, warm material world.

### Primary
- **Fire-glow terracotta** (`#d8b4a2`, `--ember`): the single warm accent — CTAs, active nav, links, and the fire-light behind imagery. On the dark ground it reads at ~8:1 contrast.
- **Fire-glow pale** (`#e5c3b3`, `--ember-pale`): the accent's hover state and its brighter edge.

### Neutral
- **Soot** (`#150f0c`, `--ink`): the page field — a near-black warm brown, the kiln interior.
- **Raised soot** (`#1c1410`, `--ink-2`): cards, panels, and the footer.
- **Higher soot** (`#251a14`, `--ink-3`): image frames and hover surfaces.
- **Kiln brick** (`#5b4b43`, `--brick`): the mid warm-brown used for the arch stroke and structural accents.
- **Brick deep** (`#3b2f28`, `--brick-deep`): scrollbar thumb and quieter structure.
- **Clay** (`#a98e7d`, `--clay`): muted warm secondary text, never gray.
- **Shelf tile** (`#f3ece4`, `--tile`): the warm white that carries the logo tile and the text color.

### Named Rules
**The Single Fire Rule.** One warm accent (`--ember`) carries every call to action and every state. A second accent color has no place in the kiln; richness comes from the warm neutrals, not from extra hues.

## Typography

**Display Font:** Bricolage Grotesque (with `system-ui, sans-serif` fallback)
**Body Font:** Schibsted Grotesk (with `system-ui, sans-serif` fallback)

**Character:** The display face is weighty and slightly irregular — assembled like a hand-built piece, never a high-contrast literary serif. The body is a quiet, warm grotesque that reads long without drawing attention.

### Hierarchy
- **Display** (800, `clamp(2.6rem, 7vw, 5.4rem)`, 1.04): the hero title only.
- **Page title** (800, `clamp(2.4rem, 6vw, 4rem)`, 1.04): the `h1` on interior pages.
- **Headline** (700, `clamp(2rem, 4.6vw, 3.5rem)`, 1.08): section headings.
- **Title** (600–700, `1.1–1.9rem`): card and class names.
- **Body** (400, `1.0625rem`, 1.65): prose, 65–75ch where it runs long.
- **Label** (600, `0.85rem`, 0.12em, uppercase): footer column labels.

### Named Rules
**The Fired Face Rule.** Display is Bricolage Grotesque — weighty, slightly irregular, fired not carved. Never swap it for a high-contrast serif (Playfair, Cormorant) or a system display face.

## Layout

A single centered column capped at `76rem` with a `clamp(1.25rem, 4vw, 3rem)` gutter. Sections breathe on a `clamp(4.5rem, 10vw, 8.5rem)` rhythm; headings carry more space above than below. The piece grid is `auto-fill, minmax(16.5rem, 1fr)`; class and contact layouts split into two columns above `880px` and stack below. At `720px` the nav collapses into a full-width sheet behind a hamburger toggle, and the shop rows collapse to a two-column card with the buy action full-width.

## Elevation & Depth

Hybrid: neutral elevation shadows carry structure, tonal layers carry surface. No colored glow shadows.

### Shadow Vocabulary
- **Elevated** (`0 24px 60px -24px rgba(0,0,0,0.55)`): image frames and hovering cards.

### Named Rules
**The Light-Not-Glow Rule.** Depth is neutral shadow; the fire-glow is radial light behind an image and an ember border on hover/focus — never a colored box-shadow halo.

## Shapes

Soft, warm geometry: `14px` radius for cards and frames, `8px` for the logo tile, and full pills (`999px`) for buttons and filter chips. The one sharp silhouette is the kiln-mouth arch — a rounded-top outline used as the recurring framing gesture and section divider.

## Components

### Buttons
- **Shape:** full pill (`999px`).
- **Primary:** fire-glow background, soot text, `0.85rem 1.4rem` padding, neutral lift shadow on hover.
- **Ghost:** transparent, tile text, `1px` ember-tinted border; border and text turn ember on hover.
- **Focus:** 2px ember outline with 3px offset.

### Chips
- **Style:** pill, transparent background, `1px` ember-tinted border, muted text.
- **State:** the selected filter fills with ember and flips text to soot (`aria-pressed`).

### Cards / Containers
- **Corner Style:** `14px` radius.
- **Background:** `--ink-2` (or `--ink-3` for image frames).
- **Shadow Strategy:** neutral `--shadow` on hover lift.
- **Border:** `1px` ember-tinted line, brightens to `--ember` on hover.

### Navigation
- **Style:** sticky header over a blurred soot wash; active page in ember with a 2px ember underline.
- **Mobile:** a full-width sheet below the header, toggled by a hamburger; links stack at `1.05rem`.

### Piece (signature)
The product card is a dark image frame whose piece is dimmed by default and lit warm on hover/focus — like drawing it to the kiln mouth. The frame lifts `4px` with a neutral shadow, its border turning ember while a radial fire-glow rises behind the image.

## Do's and Don'ts

### Do:
- **Do** keep `--ember` as the only warm accent; it carries CTAs, links, and active states.
- **Do** use the dark soot ground (`--ink`) as the page field — never default to a cream surface.
- **Do** place the Poca logo on the warm white shelf tile (`--tile`).
- **Do** reuse the kiln-mouth arch as the framing/section gesture.
- **Do** express the fire-glow as radial light and ember borders, not colored shadows.

### Don't:
- **Don't** introduce a second accent color.
- **Don't** fall back to a warm cream ground with a serif headline — that is the category default this world exists to refuse.
- **Don't** use colored glow/neon box-shadows; elevation stays neutral.
- **Don't** scatter terracotta as decoration over neutral surfaces; its rarity is the point.
- **Don't** replace Bricolage Grotesque with a system or literary-serif display face.
