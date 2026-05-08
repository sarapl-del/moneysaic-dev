---
name: moneysaic
description: Compliance-ready fintech module stack for founders who build fast
colors:
  brand: "#5533ff"
  brand-tint: "#f2f0ff"
  ink: "#0c1628"
  canvas: "#ffffff"
  surface: "#fbfbfc"
  muted-text: "#9e9e9e"
  border-structure: "#abb0bc"
  border-strong: "#0c1628"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans Variable', sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Plus Jakarta Sans Variable', sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Plus Jakarta Sans Variable', sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "'Plus Jakarta Sans Variable', sans-serif"
    fontSize: "clamp(1rem, 1.5vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  badge: "3px"
  button: "7px"
  default: "10px"
  lg: "14px"
  xl: "18px"
spacing:
  page-x: "36px"
  section-y: "96px"
  component-gap: "24px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.button}"
    padding: "12px 32px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#4a2de6"
  timeline-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.brand}"
    rounded: "{rounded.badge}"
    padding: "8px 16px"
  llm-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.badge}"
    padding: "8px 16px"
---

# Design System: moneysaic

## 1. Overview

**Creative North Star: "The Expert Brief"**

The moneysaic design system reads like a well-structured specification document: spare, precise, every element load-bearing. It is built for a user who reads documentation before making decisions, trusts specific numbers over confident adjectives, and wants a product that signals competence without performing it. Nothing is decorative. Every color, every weight contrast, every border serves a function in the hierarchy.

The system is predominantly light, built on a near-white canvas. Sections layer tonally, shifting from pure white through pale slate to a faint lavender wash (hero, CTA), creating depth through surface shifts rather than shadows. Conviction Violet appears only where it carries meaning: CTA buttons, heading accents, hover states, timeline badge text. Its rarity is precisely the point. The type system runs two typefaces: Plus Jakarta Sans for all narrative content, JetBrains Mono strictly for machine-readable labels and identifiers.

The system explicitly rejects: neon fintech aesthetics (dark-mode-by-default, crypto-adjacent high contrast); AI startup sameness (gradient-filled headings, glowing orbs, particle backgrounds, vague future-tense copy); over-animated SaaS surfaces (scroll-triggered sequences, bounce effects); and legacy banking stiffness (cold blues, stock photography, formal register). References: Stripe's technical discipline applied with Lemon Squeezy's approachability.

**Key Characteristics:**
- Tonal surface layering (white, pale slate, ghost-violet tint) creates depth without shadows
- Conviction Violet as a controlled signal at 15% or less of any surface
- JetBrains Mono gated to machine-readable strings only
- Two-tier border system: featherweight rgba for section breaks, full ink for within-section structure
- Flat at rest; the nav blur is functional, not a style choice
- Specificity earns trust: partner names, week counts, compliance standards in copy

## 2. Colors: The Controlled Signal Palette

A single saturated primary, a near-black ground, and a sequence of near-neutral surfaces that shift tonally to create depth.

### Primary
- **Conviction Violet** (`#5533ff`): The brand signal. Used on CTA buttons, heading accents ("8 weeks.", "the right fit.", "Without building it from scratch."), link and nav hover states, timeline badge text. Never as a gradient fill, never behind body-weight text. Its scarcity is structural.

### Secondary
- **Ghost Violet** (`#f2f0ff`): A lavender-tinted surface wash. Used as the hero and CTA section background via a linear gradient that fades to near-white. Not a color statement -- a tonal suggestion. Also the secondary/accent token for badge backgrounds.

### Neutral
- **Regulatory Ink** (`#0c1628`): The system ground. All headings, body text, icons, nav, and the logo badge. Not pure black -- a cool blue-tinted near-black that reads as authoritative without being harsh.
- **Clean Canvas** (`#ffffff`): Primary surface for all content sections.
- **Pale Slate** (`#fbfbfc`): Near-white secondary surface for the footer. A barely-perceptible tonal shift from canvas that signals a different structural zone without drama.
- **System Gray** (`#9e9e9e`): Muted secondary text for supporting labels and de-emphasized copy.
- **Structure Border** (`#abb0bc`): Input borders, timeline horizontal rule, LLM link borders at rest. Visible but not dominant.
- **Hard Divider** (`#0c1628`): Within-section structural dividers -- FAQ accordion rows, module column separators. Full ink weight, intentional.
- **Featherweight Divider** (`rgba(12, 22, 40, 0.08)`): Section-break borders. Almost invisible; separates sections without interrupting reading flow.

**The One Signal Rule.** Conviction Violet appears on 15% or less of any screen surface. It is a signal, not a fill. If it appears everywhere, it disappears.

**The Ground Rule.** Regulatory Ink is the text color for all content: headings, body, labels, icons. The system does not use multiple text colors to create hierarchy -- it uses scale and weight contrast instead.

## 3. Typography: The Two-Register Stack

**Display / Body Font:** Plus Jakarta Sans Variable (sans-serif fallback)
**Label / Identifier Font:** JetBrains Mono (monospace, 500 weight)

**Character:** Plus Jakarta Sans is a humanist geometric sans with warm curves and strong numerals -- technical without being cold, confident without being formal. JetBrains Mono is used exclusively for strings that could plausibly appear in a terminal or API response: partner labels, week identifiers, LLM names. The shift between these two typefaces carries a meaning -- from narrative to system output -- that no single typeface can.

### Hierarchy

- **Display** (Bold/700, `clamp(2.25rem, 5vw, 3.75rem)`, lh 1.1, tracking -0.025em): Hero headline and CTA main heading. The only context for Bold at scale. Tight leading is non-negotiable.
- **Headline** (Semibold/600, `clamp(1.875rem, 3vw, 2.5rem)`, lh 1.15, tracking -0.025em): H2 section headings -- the primary structural signal in each section.
- **Title** (Semibold/600, `clamp(1.25rem, 2vw, 1.5rem)`, lh 1.3, tracking -0.025em): H3 feature headings, timeline step labels.
- **Body** (Regular/400, `clamp(1rem, 1.5vw, 1.125rem)`, lh 1.625): All paragraph text. Max line length 65-75ch.
- **Large Body** (Regular/400, `clamp(1.125rem, 2vw, 1.25rem)`, lh 1.625): Section intro paragraphs and prominent supporting copy. A size step up from Body, same weight.
- **Label** (JetBrains Mono/500, 12px, uppercase, tracking 0.1em): Partner logos bar label, timeline week badges, LLM button text. Mono only. Never used for narrative content.

**The Mono Gate Rule.** JetBrains Mono is permitted only for strings that could appear in a terminal or API response -- identifiers, codes, structured labels. Never for headings, body copy, or CTAs.

**The Weight Binary Rule.** The type scale uses two weights: 700 (Display only) and 600 (Headline and Title). Body and Large Body are always 400. No 500 appears in Plus Jakarta Sans. Hierarchy is expressed through size contrast (ratio minimum 1.25x between steps), not intermediate weights.

## 4. Elevation: Tonal Depth, No Shadows

The moneysaic system creates depth through tonal surface layering, not shadows. Surfaces shift in tone through the page: white content sections, pale slate footer, ghost-violet tinted hero and CTA. The shifts are subtle -- none are jarring -- but they create a readable sense of environment. No `box-shadow` values are used anywhere in the system.

The sticky navigation is the only element that uses a backdrop blur (`rgba(255,255,255,0.8)` background + `backdrop-filter: blur(12px)`). This is a functional signal: it marks the nav as a persistent system layer floating above the content scroll. It is not a decorative choice and should not be applied to any other surface.

Structural depth is also expressed through border weight variation. Two tiers:
- **Featherweight** (`rgba(12, 22, 40, 0.08)`): Section separators. Imperceptible at a glance; perceived as a pause rather than a wall.
- **Hard** (`#0c1628`): Within-section dividers (FAQ rows, module columns). Full ink weight. The weight contrast between featherweight and hard dividers is part of the information architecture.

**The Flat-by-Function Rule.** No shadow values. If depth is needed, reach for a surface tonal shift or a border weight change. A shadow means "this element has been lifted above the page" -- in a system built on confident ground presence, nothing floats.

## 5. Components

### Buttons

Calibrated and deliberate. The primary button has physical presence without movement.

- **Shape:** Gently curved (7px radius) -- tighter than the system default (10px). The tighter radius reads as more controlled, less casual.
- **Primary:** Conviction Violet (`#5533ff`) background, white text, 48px height, 12px/32px padding. The CTA arrow (`→`) appended directly to label text as a character, with a single space -- not a separate icon component.
- **Hover:** Background shifts to `rgba(85,51,255,0.9)` -- barely perceptible. No scale transform, no shadow. The button does not reach for the user.
- **Focus visible:** 3px ring at `rgba(85,51,255,0.5)`. No outline replacement.
- **Ghost / icon:** Transparent background, used for nav mobile menu trigger only. Not a primary design pattern.

**The No-Movement Rule.** Primary buttons do not translate, scale, or acquire shadows on hover. The action is certain; certainty does not need to lean forward.

### Navigation

- **Structure:** Sticky, 64px height, `rgba(255,255,255,0.8)` frosted, featherweight bottom border.
- **Logo:** 32x32px badge (Regulatory Ink fill, 7px radius) carrying the logomark. Brand name in Semibold/600.
- **Links:** Regular/400, 16px, Regulatory Ink at rest, Conviction Violet on hover, 150ms ease-in-out transition.
- **CTA:** Primary button, right-aligned.
- **Mobile:** Sheet drawer from the right edge. Same link stack, full-width primary button.

### Timeline Badges

The system's most distinctive typographic pattern: machine-readable metadata rendered as physical identifiers.

- **Shape:** Very tight radius (3px). Near-square corners that read as systematic, not casual.
- **Style:** Canvas background, Structure Border, Conviction Violet text, JetBrains Mono label scale (uppercase, tracking-widest).
- **Context:** Paired with a horizontal rule (Structure Border) that spans all four columns on desktop. The badge + rule combination reads as a timeline axis -- a Gantt chart reference that makes the "8 weeks" claim legible as a real process, not a marketing claim.

### LLM Link Buttons

- **Shape:** 3px radius, matching timeline badges. Same "identifier" vocabulary -- these are links to external verification, not CTAs.
- **Style:** Canvas background, Structure Border at rest, border shifts to Conviction Violet on hover (150ms). Brand icon (20px, 4px radius) + JetBrains Mono label + ArrowUpRight icon right-aligned.
- **Intent:** Signal verifiability through external sources. The design borrows from terminal link patterns deliberately.

### FAQ Accordion

- **Divider:** Hard Divider (full Regulatory Ink). The weight jump from featherweight section borders to these hard borders marks the accordion as high-structure content.
- **Question:** Title scale (Semibold/600, 18px, tracking-tight).
- **Chevron:** Rotates 180deg on open, 300ms ease-in-out. The most prominent motion in the system.
- **Answer reveal:** `max-height` transition (0 to content height), 300ms ease-in-out. No layout property animation.

### Section Anatomy (structural pattern)

Every content section follows: `border-t border-muted-border` / tonal background / `py-16 md:py-24` / `max-w-[1440px] px-9` inner container. The consistency is deliberate. Sections read as pages in a brief -- discrete, structured, no section bleeds into the next.

Section headers follow a split layout: H2 heading left-anchored (max 420-540px wide), large body intro right-anchored (max 448px). This split places narrative and context side by side rather than stacking them, which reduces vertical length and keeps the page moving.

## 6. Do's and Don'ts

### Do:
- **Do** use Conviction Violet (`#5533ff`) as a signal: CTA buttons, heading accent spans, hover states, badge text. Solid, never gradient.
- **Do** use JetBrains Mono exclusively for machine-readable strings -- partner labels, week identifiers, LLM names. The register shift is meaningful; honor it.
- **Do** shift surfaces tonally (white, pale slate, ghost-violet tint) to create depth. Reach for surface tonal changes before any shadow value.
- **Do** apply `tracking-tight` (`-0.025em`) to all heading scales. The tight tracking is structural -- it signals precision and compression.
- **Do** keep body text line length at 65-75ch. On a 1440px canvas, unconstrained body text breaks the reading contract.
- **Do** use two distinct border weights: featherweight rgba for section breaks, full Regulatory Ink for within-section structure (FAQ rows, module column dividers).
- **Do** put specific numbers, named partners, and week counts in copy. Specificity is the trust mechanism. "8 weeks" earns more than "fast delivery."
- **Do** use the section header split layout: H2 left, large body intro right. Avoids the stacked heading-then-paragraph pattern that every SaaS landing page uses.

### Don't:
- **Don't** use neon accents, high-contrast dark-mode defaults, or crypto-adjacent energy. Anti-referenced in PRODUCT.md by name.
- **Don't** use AI startup sameness: no `background-clip: text` gradient headings, no glowing orbs, no particle backgrounds. Heading accents use solid Conviction Violet only.
- **Don't** apply backdrop blur to any surface except the sticky navigation. Decorative glassmorphism is anti-referenced.
- **Don't** place Conviction Violet as a background behind body-weight text blocks. It is a signal at 15% or less surface coverage.
- **Don't** animate CSS layout properties (`height`, `width`, `padding`). Use `max-height` for reveals; use `opacity` and `transform` for entrances.
- **Don't** use bounce, elastic, or spring easing curves. All transitions use `ease-in-out` or `ease-out`. No motion should feel playful.
- **Don't** use `border-left` or `border-right` as a colored stripe accent on cards or callouts. Rewrite with full borders, background tints, or nothing.
- **Don't** build identical card grids (icon + heading + body, repeated n times). The system's structural vocabulary is columns, timelines, accordions, and split layouts.
- **Don't** use legacy banking aesthetics: cold blues, stock photography, stiff formal language, "solutions" copy.
- **Don't** use intermediate font weights (500) in Plus Jakarta Sans. The scale is 400 / 600 / 700 only.
