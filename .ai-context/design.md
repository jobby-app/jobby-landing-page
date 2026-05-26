# Design System Document: The Kinetic Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Kinetic Editorial"**
This design system moves away from the "utility-only" feel of traditional marketplaces. Instead, it adopts a high-end editorial aesthetic that blends the authority of a premium magazine with the fluid, immersive energy of modern social media. 

We break the "template" look by utilizing **intentional asymmetry** and **tonal layering**. Rather than rigid grids, we use overlapping elements and exaggerated typography scales to create a sense of motion. This system is designed to feel curated, not automated—positioning every micro-job as a premium opportunity.

---

## 2. Colors: Tonal Depth & High Contrast
Our palette is anchored by a sophisticated grayscale foundation, punctuated by "Electric Accents" that signal action and energy.

### Color Roles
*   **The Foundation:** Use `surface` (#f5f6f7) for the primary canvas. It provides a softer, more premium feel than pure white.
*   **Primary Contrast:** `primary` (#5c5b5b) and `on_surface` (#2c2f30) provide the "Editorial" weight.
*   **Electric Accents:** 
    *   `secondary_container` (#c3f400 - Neon Green) is used for high-energy "Go" actions and success states.
    *   `tertiary` (#6a37d4 - Vibrant Purple) is used for creative categories and "Pro" tier features.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Boundaries must be defined through background color shifts. A `surface_container_low` section sitting on a `surface` background creates a clear, sophisticated boundary without the visual clutter of a line.

### Glass & Gradient Strategy
To move beyond "flat" UI, use Glassmorphism for floating elements (like bottom navigation or price tags). 
*   **Glass Effect:** Apply `surface_container_lowest` at 80% opacity with a 16px backdrop-blur.
*   **Signature Gradients:** For primary CTAs, use a subtle linear gradient from `secondary` (#4e6300) to `secondary_container` (#c3f400) to give the neon green a "lit from within" glow.

---

## 3. Typography: The Bold Statement
We use **Plus Jakarta Sans** for displays to provide a clean, slightly playful geometric vibe, paired with **Inter** for high-legibility body copy.

*   **The "Price Hero" Rule:** Price points are the soul of the marketplace. Use `display-lg` or `display-md` for pricing, ensuring it is the most prominent element on the card.
*   **Headline-LG (2rem):** Used for micro-job titles to command attention.
*   **Body-LG (1rem):** Default for job descriptions, ensuring high readability on mobile devices.
*   **Label-SM (0.6875rem):** Used for metadata (e.g., "Posted 2h ago") in all-caps with 0.05em letter spacing for an architectural feel.

---

## 4. Elevation & Depth: Tonal Layering
We reject the standard "drop shadow" approach in favor of **Ambient Depth**.

*   **The Layering Principle:** Depth is achieved by stacking surface tiers.
    *   *Level 0:* `surface_dim` (The deep background)
    *   *Level 1:* `surface` (The primary page content)
    *   *Level 2:* `surface_container_low` (In-page cards)
    *   *Level 3:* `surface_container_highest` (Active/Hovered states)
*   **Ambient Shadows:** When an element must float (e.g., a "Post Job" FAB), use a shadow with a 32px blur, 4% opacity, tinted with the `on_surface` color.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### High-Contrast Buttons
*   **Primary:** Background `secondary_container` (#c3f400) with text `on_secondary_container` (#455900). Radius: `2xl` (2rem). 
*   **Secondary:** Background `inverse_surface` (#0c0f10) with text `inverse_primary` (#ffffff). These are high-impact and grounded.
*   **Interactive State:** On press, scale the button down to 0.96 for tactile feedback.

### The "TikTok-Style" Overlays
*   For micro-job details, use vertical overlay layouts. These should be `surface_container_lowest` sheets with a `xl` (3rem) top radius, sliding up to cover 90% of the screen. This keeps the "thumb-friendly" philosophy at the forefront.

### Input Fields
*   **Styling:** No borders. Use `surface_container_high` as the background.
*   **Focus State:** Transition the background to `surface_container_highest` and add a 2px "Ghost Border" using the `tertiary` color.

### Cards & Lists
*   **Forbid Dividers:** Use `8px` or `16px` of vertical white space to separate items.
*   **Price Tags:** Use a floating "Glass" chip in the top right of the card, utilizing the `tertiary_container` color with 80% opacity.

### Featured Job Chip
*   A selection chip using the `secondary_fixed` background. It should feel "puffy" and tactile with a `full` (9999px) radius.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme vertical whitespace (32px+) between sections to allow the design to "breathe."
*   **Do** overlap images with text elements slightly to create the "Editorial" feel.
*   **Do** use `2xl` (2rem) corners for all main containers to maintain the "Soft/Playful" promise.
*   **Do** ensure all touch targets are at least 48px in height.

### Don't
*   **Don't** use pure black (#000000) for text; use `on_surface` (#2c2f30) to keep the look sophisticated and premium.
*   **Don't** use "standard" 1px dividers; they break the immersion of the tonal layers.
*   **Don't** cram content. If it feels tight, increase the `surface` spacing.
*   **Don't** use the Neon Green for long-form text; it is strictly for accents and CTAs.