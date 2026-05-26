---
name: Kinetic Editorial Dark
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#2C2F30'
  surface-container-high: '#272a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#c4c9ad'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#d0bcff'
  on-secondary: '#3b0091'
  secondary-container: '#5516bf'
  on-secondary-container: '#c0a7ff'
  tertiary: '#ffffff'
  on-tertiary: '#003642'
  tertiary-container: '#b3ebff'
  on-tertiary-container: '#336b7d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161f00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516bf'
  tertiary-fixed: '#b3ebff'
  tertiary-fixed-dim: '#97cfe2'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#094d5e'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
  surface-deep: '#0C0F10'
  surface-primary: '#1A1D1E'
  on-surface-muted: '#5C5B5B'
  neon-glow: '#CCFF00'
  electric-purple: '#6A37D4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap: 2.5rem
  element-gap: 1rem
  card-padding: 1.5rem
  margin-mobile: 1.25rem
  margin-desktop: 4rem
---

## Brand & Style

This design system translates the "Kinetic Editorial" philosophy into a high-energy, mobile-first experience. It rejects the utilitarian sterility of traditional job boards in favor of an immersive, social-media-inspired aesthetic. The brand is energetic, premium, and authoritative, positioning micro-jobs as curated opportunities rather than mere tasks.

The visual style is a fusion of **Editorial Minimalism** and **High-Contrast Dark Mode**. It utilizes intentional asymmetry, exaggerated typography, and "TikTok-style" verticality to create a sense of motion. The design system is defined by its "No-Line" rule, relying on depth and tonal shifts rather than borders to organize content.

## Colors

The palette is anchored in a sophisticated deep-dark foundation, moving away from the light "Kinetic Editorial" reference to a high-energy dark mode. 

- **The Foundation:** Use `surface-deep` (#0C0F10) as the primary canvas. Content sits on `surface-primary` (#1A1D1E) to create subtle separation.
- **Electric Accents:** The Neon Lime (#C3F400) is the signature "Go" color, used exclusively for high-energy actions, price points, and success states. The Purple (#6A37D4) is used for "Pro" features and category distinction.
- **The "No-Line" Rule:** Explicitly forbid 1px solid borders. Boundaries must be defined through tonal layering (e.g., a `surface-container` card on a `surface-primary` background).
- **Gradients:** For primary CTAs, apply a subtle linear gradient from a darker olive (#4E6300) to the neon lime (#C3F400) to create a "lit-from-within" effect.

## Typography

Typography is the "soul" of this system. It uses **Plus Jakarta Sans** for high-impact display and headlines, paired with **Inter** for functional body text.

- **The "Price Hero" Rule:** Price points must be the most prominent element. Use `display-lg` or `display-md` in Neon Lime for all pricing.
- **Editorial Metadata:** Use `label-sm` in all-caps with generous letter-spacing for architectural details like "POSTED 2H AGO."
- **Visual Weight:** Headlines should feel heavy and commanding, utilizing tight letter-spacing to maintain the editorial feel.

## Layout & Spacing

The layout philosophy is **Mobile-Immersive**, mimicking the scroll-heavy experience of social media feeds.

- **Vertical Rhythm:** Use extreme vertical whitespace (minimum 40px) between sections to let content "breathe."
- **Fluid Grid:** While the mobile experience is single-column and immersive, desktop layouts follow a 12-column grid with wide margins (64px+) to maintain the premium magazine feel.
- **Asymmetry:** Occasionally overlap images with typography or let elements break the grid slightly to create a curated, non-templated look.
- **Thumb-Friendly Design:** All interactive elements (CTAs, navigation) are concentrated in the lower 40% of the screen.

## Elevation & Depth

This system rejects standard drop shadows in favor of **Ambient Tonal Depth**. 

- **Tonal Layers:** Depth is created by stacking surface tiers. Backgrounds are `surface-deep`, while interactive containers use `surface-primary` or `surface-container`.
- **Glassmorphism:** Use for floating elements such as navigation bars and price chips. Apply a 16px backdrop-blur with 80% opacity on a `surface-primary` base.
- **Ambient Shadows:** Only used for high-level floating elements (e.g., FABs). Shadows should be extra-diffused (32px blur), low opacity (4%), and tinted with the `on-surface` color to avoid a "dirty" look on dark backgrounds.
- **Ghost Borders:** If a boundary is strictly necessary for accessibility, use a 1px outline at 15% opacity.

## Shapes

The shape language is soft and approachable, contrasting with the high-impact typography.

- **Container Radius:** Use `rounded-xl` (1.5rem) or `rounded-2xl` (2rem) for main cards and containers.
- **Puffy Components:** Chips and small buttons should use a `full` (pill) radius to feel tactile and "puffy."
- **Overlays:** Vertical bottom sheets used for job details should have an exaggerated top-only radius of 3rem (`rounded-3xl`).

## Components

- **Primary Button:** Background `neon-lime`, text `dark-olive`. High-impact, `full` pill radius. On-press interaction: Scale down to 0.96 for tactile feedback.
- **Secondary Button:** Background `surface-container`, text `white`. Used for less urgent actions.
- **Glass Price Chips:** Positioned in the top-right of cards, using the backdrop-blur effect to pop against job imagery.
- **TikTok-Style Sheets:** Full-screen or 90% height overlays for job details, sliding from the bottom. These must be entirely "No-Line," utilizing background shifts for hierarchy.
- **Input Fields:** No borders. Use `surface-container` as the base. On focus, shift background to a slightly lighter tone and add a neon-lime "Ghost Border" (15% opacity).
- **Featured Job Chip:** A tactile, "puffy" element using the Purple accent color to denote priority or category.
- **Dividers:** Forbid traditional line dividers. Use 16px of negative space or a tonal background shift to separate list items.