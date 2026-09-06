---
name: "Finn Kliewer Portfolio"
description: "A composed, high-conviction portfolio for a platform engineer."
colors:
  canvas-light: "#f4f5f7"
  surface-light: "#ffffff"
  panel-light: "#f8f9fb"
  ink-light: "#0b1220"
  muted-light: "#606a7b"
  faint-light: "#8e96a5"
  rule-light: "#dce1e9"
  rule-strong-light: "#c5ccd8"
  accent-light: "#5548e7"
  accent-soft-light: "#e8e5ff"
  accent-splash-light: "#7c6bff"
  evidence-light: "#d79221"
  canvas-dark: "#0b1220"
  surface-dark: "#0d1524"
  panel-dark: "#111b2d"
  ink-dark: "#f7f8fb"
  muted-dark: "#aab2c1"
  faint-dark: "#737e91"
  rule-dark: "#273244"
  rule-strong-dark: "#38465c"
  accent-dark: "#8177ff"
  accent-soft-dark: "#1f2550"
  accent-splash-dark: "#9d94ff"
  evidence-dark: "#efb64d"
typography:
  display:
    fontFamily: "IBM Plex Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "IBM Plex Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.25rem, 4.8vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  body:
    fontFamily: "IBM Plex Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "IBM Plex Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.2
  measure:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.3
rounded:
  card: "1rem"
  control: "0.75rem"
  pill: "9999px"
spacing:
  gutter: "clamp(1rem, 4vw, 4.5rem)"
  card: "clamp(1.25rem, 3.5vw, 2.5rem)"
  section: "clamp(5rem, 10vw, 9rem)"
  compact: "0.7rem"
elevation:
  card-light: "0 24px 60px rgba(15, 23, 42, 0.10)"
  card-dark: "0 28px 70px rgba(0, 0, 0, 0.34)"
  hover-light: "0 28px 70px rgba(15, 23, 42, 0.14)"
  hover-dark: "0 34px 86px rgba(0, 0, 0, 0.42)"
  accent-glow: "0 0 44px color-mix(in srgb, {colors.accent-splash-dark} 34%, transparent)"
gradients:
  artifact-splash-dark: "radial-gradient(circle at 8% 0%, color-mix(in srgb, {colors.accent-splash-dark} 24%, transparent), transparent 34rem)"
  artifact-rule: "linear-gradient(90deg, transparent, {colors.accent-splash-dark}, transparent)"
components:
  action-primary:
    backgroundColor: "{colors.ink-light}"
    textColor: "{colors.surface-light}"
    rounded: "{rounded.pill}"
    padding: "0.72rem 1.12rem"
    height: "2.875rem"
  action-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.pill}"
    padding: "0.72rem 1.12rem"
    height: "2.875rem"
  showcase-card:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
    boxShadow: "{elevation.card-light}"
    accentGradient: "{gradients.artifact-splash-dark}"
  chronology-panel:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.card}"
    padding: "clamp(1.5rem, 3vw, 2.2rem)"
---

# Design System: Finn Kliewer Portfolio

## Overview

**Status: proposed governing system, pending approval before the remaining site is rebuilt.**

**Creative North Star: "The Quiet Advantage"**

This portfolio should feel like a sharply edited body of work from someone who operates close to consequential systems: modern, financially literate, technically credible, and unusually composed. It earns authority through hierarchy, pacing, and specificity—not through cyberpunk motifs, generic “tech” decoration, or an excess of interface chrome.

The Selected Work carousel is the canonical expression of the system. Its large type, deep surfaces, restrained rules, measured empty space, useful evidence strip, dimensional shadow, and contained gradient accent should set the bar for every other page. The home page keeps the Vanta mesh as a single signature interaction: it creates atmosphere and depth around the opening statement, but it does not become a visual metaphor repeated across the site.

**Key Characteristics:**

- Editorial scale: one dominant idea per viewport, supported by real evidence.
- Matte paper and deep navy surfaces, punctuated by a rare indigo/violet gradient splash.
- Intentional contrast between expansive whitespace and compact, information-dense detail.
- Physical depth through soft shadows, layered surfaces, and hover lift - not glassmorphism or glow-heavy noise.
- Cards are artifact containers, not a default page-layout strategy.
- Motion is cinematic but disciplined: it clarifies hierarchy or transition, then gets out of the way.

**The First-Frame Rule.** Every page must enter with a composed first viewport: a decisive statement plus an owned supporting element, proof point, or action. Never place a detached date, generic label, or empty technical ornament beneath a headline merely to fill space.

## Colors

The palette is cool, architectural, and deliberately narrow, but it must not feel dead-flat. The site should read as mostly monochrome with a controlled splash of color: roughly 80-90% neutral field, 5-12% indigo/violet energy, and amber only where real evidence needs emphasis. Light and dark mode are equal expressions of one system; neither is a fallback.

### Primary

- **Decisive Indigo** (`accent-light` / `accent-dark`): active navigation, keyboard focus, active pagination, selected timeline state, and one deliberate rule or line per composition.
- **Violet Splash** (`accent-splash-light` / `accent-splash-dark`): contained artifact gradients, active hover halos, and the rare moment where the interface needs dimensional energy. This is the carousel accent language, not a site-wide wallpaper.
- **Soft Accent Field** (`accent-soft-light` / `accent-soft-dark`): subtle insets and low-contrast accent backgrounds when a component needs chromatic depth without becoming loud.

### Secondary

- **Evidence Amber** (`evidence-light` / `evidence-dark`): an outcome, award, or current-state cue only when it conveys real information. It is not a general decorative highlight.

### Neutral

- **Cool Paper** (`canvas-light`, `surface-light`, `panel-light`): the light-mode field, card, and inset hierarchy.
- **Ink Navy** (`canvas-dark`, `surface-dark`, `panel-dark`): the dark-mode field, card, and inset hierarchy.
- **Structured Ink** (`ink-light` / `ink-dark`): display type, primary actions, and the highest-information layer.
- **Measured Gray** (`muted-*`, `faint-*`): supporting prose and metadata, with enough contrast to remain intentional rather than washed out.
- **Etched Rules** (`rule-*`, `rule-strong-*`): dividers, card outlines, and architectural alignment—not decoration.

**The Accent Rarity Rule.** Indigo and violet together should occupy no more than roughly one-tenth of a view. The accent can be bright and dimensional when used, but it must be rare enough that it feels expensive.

**The Contained Gradient Rule.** Gradients belong inside an artifact, active state, or motion moment. They may spill softly within a card's own surface like the carousel, but they must not become full-page blobs, generic background washes, or unrelated decoration.

**The Evidence-Only Rule.** Amber may mark an actual achievement, live status, or verified outcome. Do not use it to make a neutral component feel more “technical.”

## Typography

**Display Font:** IBM Plex Sans, with the existing system-sans fallbacks.

**Body Font:** IBM Plex Sans, with the existing system-sans fallbacks.

**Measurement Font:** IBM Plex Mono for actual compact measurements only: dates, compact counters, code, or a real technical value.

**Character:** The type system is compact, assured, and legible at speed. Display type carries conviction through scale and weight; body copy stays calm and specific. Monospace is not a costume.

### Hierarchy

- **Display:** the `display` token. Use for a page’s one dominant assertion; keep the surrounding field quiet enough that the sentence lands.
- **Headline:** the `headline` token. Use for project titles, roles, and major sectional shifts.
- **Title:** 600 weight at a smaller responsive scale. Use for cards and structured panels, never for filler labels.
- **Body:** the `body` token. Keep explanatory copy near 55–65 characters per line on wide screens, and avoid stacking more than two paragraphs before a visual change.
- **Label:** the `label` token. Use sentence case by default. Labels should identify real content, never decorate an empty region.
- **Measurement:** the `measure` token. Use sparingly and only when precision or chronology is information the visitor needs.

**The Sentence-Case Rule.** Normal interface language is sentence case. All-caps and tracked mono labels are reserved for genuine measurement, not to simulate systems jargon.

## Layout

The site uses one wide, responsive editorial container with the `gutter` and section rhythm tokens. Desktop compositions may split into a dominant reading column and a narrower proof or control column; mobile collapses to one sequence with no hidden essential content.

The standard page cadence is a substantial opening field, a clear structural divider, then alternating large statements and denser evidence. Each page should feel paced rather than uniformly spaced. Preserve the established responsive attention to intermediate widths, especially the protected Selected Work carousel between tablet and desktop.

The hero does not need to be loud to be strong. Its job is to establish point of view, then hand off to one concrete object: the Vanta portrait module on Home, a featured work card on Selected Work, a carefully designed chronology panel on Experience, or a direct contact path on Contact.

**The One-Anchor Rule.** Give every viewport one visual anchor. A page can pair it with a supporting block, but it should never compete with several equally large cards, diagrams, or metrics.

## Elevation & Depth

The system is matte first, dimensional second. Surface hierarchy starts with color, a precise one-pixel rule, and spacing, then gains physical depth where the object deserves to feel lifted. The Selected Work carousel proves the right balance: a dark card with a real shadow, a quiet border, and a controlled gradient accent that gives the surface life without making it gaudy.

Cards, portrait/media modules, active timeline panels, navigation after scroll, and focused controls may use soft shadows. Shadows should be wide, low-alpha, and physically plausible. Hover lift should feel like a premium interface responding to touch: a small translate, a stronger shadow, and no bounce.

The navigation may use a soft backdrop treatment only after the visitor has scrolled; at rest, it should feel like part of the page rather than an overlay.

**The Earned Depth Rule.** A shadow must explain a relationship: a lifted artifact, an overlaying navigation state, an active chronology item, a focused control, or a media object separated from its field. Never add a shadow merely to make a weak section feel important.

**The 3D Restraint Rule.** Depth should make the interface feel touchable and expensive, not skeuomorphic. Avoid glass panels, blurred blobs, heavy glows, inner bevels, and stacked-card theatrics.

## Shapes

Use gently rounded, disciplined rectangles for primary surfaces (`card`) and slightly tighter corners for controls (`control`). Pills belong to actions, pagination marks, small status chips, and theme controls—not to broad content blocks.

Rules are thin and intentional. A divider either separates reading groups or aligns a component to the wider page system. Do not add ornamental lines, terminal dots, or circuit-like joins without real information to carry.

**The Container Test.** Before adding a rounded rectangle, name the thing it contains. If it does not contain an artifact, action, or bounded interactive state, use spacing and a rule instead.

## Components

### Actions

- **Primary action:** a compact, dark/inverted pill used for the most important next step on a surface. It can rise slightly on hover and switch to indigo; focus is always visible.
- **Quiet action:** a bordered pill for a secondary destination. It should read as deliberate, never disabled.

### Showcase Cards

The carousel’s spotlight card is the canonical artifact surface. It has a quiet border, a measured corner, a dominant title, a short description, a soft dimensional shadow, and an evidence region separated by a rule. Its subtle project-specific gradient field is permitted inside the card because it belongs to the artifact. Future cards should inherit that sense of mass and light, not copy the carousel layout or alter its protected implementation.

### Chronology

Experience should read as an editorial chronology: role, company, duration, and a concrete description. The active role may transition on scroll, but the interface must not use routing maps, diagnostics, “signal” vocabulary, decorative terminal nodes, or dashboard status language. Sequence numbers are allowed only because chronology is meaningful.

### Navigation

Navigation is fixed, quiet, and typographic. The active destination is indicated by one indigo underline; the brand route mark remains a compact signature rather than a repeated page motif. On mobile, navigation becomes a full-screen editorial list with the same order, spacing, and text hierarchy.

### Home Signature

The Vanta mesh belongs exclusively to the Home opening. It is responsive, touch-safe, and reduced-motion aware. Its purpose is to make the first load feel alive and dimensional; content must remain perfectly readable above it, and no other page should imitate its network geometry.

### Contact and Repository Content

Contact, repository, and supporting project content should inherit the spotlight card’s hierarchy: strong title, useful description, a disciplined action, and evidence or metadata separated by a rule. They should not introduce a second visual language through generic dashboard grids or elevated card piles.

**The Artifact Rule.** A card gets one job: present a real piece of work, a controlled interaction, or a bounded contact path. It is never a substitute for page composition.

## Do's and Don'ts

### Do:

- **Do** lead each page with one clear claim and one concrete supporting element.
- **Do** use the Selected Work carousel as the reference for card hierarchy, border treatment, and responsive density.
- **Do** preserve the Vanta mesh as a Home-only signature and keep it subordinate to readable content.
- **Do** use motion to stage a real transition: page entry, active chronology item, carousel movement, menu opening, or a focused action.
- **Do** keep light and dark mode structurally equivalent, changing tokens rather than inventing separate interfaces.
- **Do** make power visible through calm type, exact spacing, and genuine evidence.

### Don't:

- **Don't** use “signal,” “route,” “tracing,” diagnostics language, circuit diagrams, terminal dots, or generic technical iconography as visual personality.
- **Don't** add a date range, metric, or label to a hero unless it changes the visitor’s understanding of the page.
- **Don't** turn every section into a grid of floating cards, metric tiles, or glass panels.
- **Don't** use gradients, glow, or motion as a substitute for hierarchy. The spotlight-card accent treatment is a contained rule, not a site-wide background pattern.
- **Don't** flatten the whole site into pure grayscale. Mostly monochrome is correct; lifeless monochrome is not.
- **Don't** use monospace, uppercase tracking, or indigo merely to imply technical sophistication.
- **Don't** invent market, investing, compensation, or performance claims; sophistication comes from what the work demonstrably shows.
