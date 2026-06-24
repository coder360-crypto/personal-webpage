---
version: alpha
name: "Vals.ai Design System"
description: "Vals.ai is an AI benchmarking platform with a distinctive editorial-meets-data-tool aesthetic. The design pairs a warm off-white/greige surface palette (#fafaf9, #dedbd8, #e5e7eb) with dark warm-brown text (#292623) and a teal-green accent (#008566). Instrument Serif is used for display headlines, creating editorial gravitas, while Uncut Sans handles all UI text and JetBrains Mono handles data labels and scores. Corner radii are nearly flat (2px dominant), reinforcing a precise, analytical tone. The layout uses generous horizontal padding (64px) with a structured grid for benchmark charts and comparison tables."
colors:
  border-default: "#e5e7eb"
  surface-base: "#fafaf9"
  surface-secondary: "#dedbd8"
  surface-white: "#ffffff"
  accent-orange: "#c24c0a"
  accent-teal: "#008566"
  surface-inverse: "#000000"
  text-primary: "#292623"
  text-secondary: "#595654"
  text-tertiary: "#8e8985"
  border-subtle: "#a3a3a3"
typography:
  display-headline:
    fontFamily: "Instrument Serif"
    fontSize: "36px"
    fontWeight: "400"
    lineHeight: "1.2"
  body-default:
    fontFamily: "Uncut Sans"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "24px"
  body-small:
    fontFamily: "Uncut Sans"
    fontSize: "13px"
    fontWeight: "400"
    lineHeight: "19.5px"
  label-small:
    fontFamily: "Uncut Sans"
    fontSize: "11px"
    fontWeight: "400"
    lineHeight: "16px"
  label-uppercase:
    fontFamily: "Uncut Sans"
    fontSize: "13px"
    fontWeight: "500"
    lineHeight: "16px"
    letterSpacing: "0.065px"
  mono-data:
    fontFamily: "JetBrains Mono"
    fontSize: "11px"
    fontWeight: "300"
    lineHeight: "16px"
    letterSpacing: "0.055px"
  mono-data-medium:
    fontFamily: "JetBrains Mono"
    fontSize: "11px"
    fontWeight: "500"
    lineHeight: "16px"
    letterSpacing: "0.22px"
  mono-micro:
    fontFamily: "JetBrains Mono"
    fontSize: "9px"
    fontWeight: "300"
    lineHeight: "12px"
  ui-input:
    fontFamily: "Uncut Sans"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "24px"
    letterSpacing: "0.07px"
  section-label:
    fontFamily: "Uncut Sans"
    fontSize: "18px"
    fontWeight: "300"
    lineHeight: "24px"
    letterSpacing: "0.09px"
rounded:
  sharp: "2px"
  medium: "6px"
  card: "8px"
  pill: "9999px"
  hairline: "1px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
  4xl: "64px"
  5xl: "80px"
  6xl: "96px"
---

## Overview

Vals.ai is an AI benchmarking platform with a distinctive editorial-meets-data-tool aesthetic. The design pairs a warm off-white/greige surface palette (#fafaf9, #dedbd8, #e5e7eb) with dark warm-brown text (#292623) and a teal-green accent (#008566). Instrument Serif is used for display headlines, creating editorial gravitas, while Uncut Sans handles all UI text and JetBrains Mono handles data labels and scores. Corner radii are nearly flat (2px dominant), reinforcing a precise, analytical tone. The layout uses generous horizontal padding (64px) with a structured grid for benchmark charts and comparison tables.

**Signature traits:**
- Dual typeface system: Pairs Instrument Serif and Uncut Sans across the type hierarchy.
- Soft, rounded geometry: Generous corner rounding up to 9999px.
- Layered elevation: Depth comes from 3 validated shadow tokens.

## Colors

The palette uses 11 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **surface-background** maps to `surface-base`: Role "background" is grounded by usage context "Primary page background, warm off-white".
- **border-primary** maps to `border-default`: Role "primary" is grounded by usage context "Dividers, input borders, table borders".
- **border-border** maps to `border-subtle`: Role "border" is grounded by usage context "Nav bottom border, subtle outlines".
- **action-text** maps to `text-primary`: Role "text" is grounded by usage context "Headings, primary body text, buttons".

### Primary Brand
- **Border Default** (#e5e7eb): Dividers, input borders, table borders. Role: primary. {authored: rgb(229, 231, 235), space: rgb}

### Text Scale
- **Accent Orange** (#c24c0a): Model type badges, highlight labels. Role: text. {authored: rgb(194, 76, 10), space: rgb}
- **Accent Teal** (#008566): Links, accent text, benchmark reference lines. Role: text. {authored: rgb(0, 133, 102), space: rgb}
- **Surface Inverse** (#000000): High-contrast text, active tab backgrounds. Role: text. {authored: rgb(0, 0, 0), space: rgb}
- **Text Primary** (#292623): Headings, primary body text, buttons. Role: text. {authored: rgb(41, 38, 35), space: rgb}
- **Text Secondary** (#595654): Secondary body text, nav links. Role: text. {authored: rgb(89, 86, 84), space: rgb}
- **Text Tertiary** (#8e8985): Captions, metadata, timestamps. Role: text. {authored: rgb(142, 137, 133), space: rgb}

### Interactive
- **Border Subtle** (#a3a3a3): Nav bottom border, subtle outlines. Role: border. {authored: rgb(163, 163, 163), space: rgb}

### Surface & Shadows
- **Surface Base** (#fafaf9): Primary page background, warm off-white. Role: background. {authored: rgb(250, 250, 249), space: rgb}
- **Surface Secondary** (#dedbd8): Card and section backgrounds, warm greige. Role: background. {authored: rgb(222, 219, 216), space: rgb}
- **Surface White** (#ffffff): Nav bar background, card surfaces. Role: background. {authored: rgb(255, 255, 255), space: rgb}

## Typography

Typography uses Instrument Serif, Uncut Sans, JetBrains Mono across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes Instrument Serif and Uncut Sans and JetBrains Mono for visual contrast. Weight range spans regular, medium, light. Sizes range from 9px to 36px.

### Font Roles
- **Headline Font**: Instrument Serif
- **Body Font**: Instrument Serif

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Hero H1 headline, editorial display text | Instrument Serif | 36px | 400 | 1.2 | normal | Instrument Serif | Extracted token |
| Primary body copy, nav links, paragraph text | Uncut Sans | 16px | 400 | 24px | normal | Uncut Sans, sans-serif; features: "ss02", "tnum", "zero" | Extracted token |
| Secondary body text, descriptions, card content | Uncut Sans | 13px | 400 | 19.5px | normal | Uncut Sans, sans-serif; features: "ss02", "tnum", "zero" | Extracted token |
| UI labels, tags, small metadata | Uncut Sans | 11px | 400 | 16px | normal | Uncut Sans, sans-serif; features: "ss02", "tnum", "zero" | Extracted token |
| Tab labels, button text, uppercase category labels | Uncut Sans | 13px | 500 | 16px | 0.065px | Uncut Sans, sans-serif; features: "ss02", "tnum", "zero" | Extracted token |
| Benchmark scores, data labels, chart annotations | JetBrains Mono | 11px | 300 | 16px | 0.055px | JetBrains Mono, SF Mono, ui-monospace, monospace; features: "ss02", "tnum", "zero" | Extracted token |
| Highlighted scores, key data points | JetBrains Mono | 11px | 500 | 16px | 0.22px | JetBrains Mono, SF Mono, ui-monospace, monospace; features: "ss02", "tnum", "zero" | Extracted token |
| Axis labels, micro annotations in charts | JetBrains Mono | 9px | 300 | 12px | normal | JetBrains Mono, SF Mono, ui-monospace, monospace; features: "ss02", "tnum", "zero" | Extracted token |
| Form inputs, search fields | Uncut Sans | 14px | 400 | 24px | 0.07px | Uncut Sans, sans-serif; features: "ss02", "tnum", "zero" | Extracted token |
| Section subheadings, eyebrow text | Uncut Sans | 18px | 300 | 24px | 0.09px | Uncut Sans, sans-serif; features: "ss02", "tnum", "zero" | Extracted token |

## Layout

Responsive system uses 4 breakpoint tier(s): mobile, tablet, desktop, wide.

This system uses a 4px base grid with scale values 4, 8, 12, 16, 24, 32, 48, 64, 80, 96.

### Responsive Strategy
- **mobile (<= 600px)**: Constrain layout for small viewports and prioritize vertical stacking.
- **tablet (>= 640px)**: Increase spacing and column structure for medium-width viewports.
- **desktop (>= 1024px)**: Expand layout density and horizontal composition for wide viewports.
- **wide (>= 1440px)**: Stretch composition with generous gutters and wider layout spans.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| xs | 4px | 4 | Extracted spacing token |
| sm | 8px | 8 | Extracted spacing token |
| md | 12px | 12 | Extracted spacing token |
| lg | 16px | 16 | Extracted spacing token |
| xl | 24px | 24 | Extracted spacing token |
| 2xl | 32px | 32 | Extracted spacing token |
| 3xl | 48px | 48 | Extracted spacing token |
| 4xl | 64px | 64 | Extracted spacing token |
| 5xl | 80px | 80 | Extracted spacing token |
| 6xl | 96px | 96 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| focus-ring | 4 | 0px 0px 0px 0px rgb(255, 255, 255) |
| ring-subtle | 3 | 0px 0px 0px 0px rgb(255, 255, 255) |
| elevation-xs | 3 | 0px 0px 0px 0px rgba(0, 0, 0, 0) |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | outline-color | rgb(0, 0, 0) ; rgb(41, 38, 35) ; rgb(89, 86, 84) |
| Light | outline-width | 3px |
| Light | outline-offset | 0px |
| Light | transform | matrix(1, 0, 0, 1, 0, 0) ; matrix(1, 0, 0, 1, -5, -5) ; matrix(1, 0, 0, 1, -76, 0) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| hairline | 1px | 1 | Hairline corner |
| sharp | 2px | 2 | Hairline corner |
| medium | 6px | 6 | Subtle corner |
| card | 8px | 8 | Control corner |
| pill | 9999px | 9999 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| sharp | 2px | px |
| medium | 6px | px |
| card | 8px | px |
| pill | 9999px | px |
| hairline | 1px | px |

## Components

(none detected)

## Do's and Don'ts

Guardrails protect Dual typeface system, Soft, rounded geometry, Layered elevation without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <= 600px | (max-width: 600px) |
| Mobile | >= 640px | (min-width: 640px) |
| Tablet | >= 768px | (min-width: 768px) |
| Desktop | >= 1024px | (min-width: 1024px) |
| Desktop | >= 1280px | (min-width: 1280px) |
| Desktop | >= 1440px | (min-width: 1440px) |
| Desktop | >= 1680px | (min-width: 1680px) |
| Breakpoint 8 | Unknown | (hover: none) and (pointer: coarse) |

## Agent Prompt Guide

### Example Component Prompts
- Create button component using validated primary color role and spacing tokens.
- Create card component with mapped radius role and evidence-backed elevation.
- Create form input component using inferred typography hierarchy and border roles.

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.
