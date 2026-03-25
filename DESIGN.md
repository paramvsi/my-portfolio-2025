# Design System Strategy: The Technical Editorial

## 1. Overview & Creative North Star

This design system is built upon the Creative North Star of **"The Precision Architect."** It moves beyond the generic "developer portfolio" template to create a high-end editorial experience that mirrors the complexity and elegance of clean code. The system balances a technical, data-driven aesthetic with premium, glass-like depth.

Rather than relying on rigid grids and standard borders, this system utilizes **intentional asymmetry** and **tonal layering**. By overlapping glassmorphic surfaces and using high-contrast typography scales, we create a sense of architectural depth. Elements are not just placed; they are curated within a 3D environment, where "breathing room" (white space) is treated as a functional component to reduce cognitive load and emphasize premium quality.

---

## 2. Colors

The palette is rooted in a deep, nocturnal foundation with high-energy accents that simulate the glow of a sophisticated IDE.

### Surface Hierarchy & Nesting
To achieve a signature look, we strictly adhere to the **"No-Line" Rule**: Prohibit 1px solid borders for sectioning. Boundaries are defined through background shifts and elevation tiers.

*   **Foundation (`surface` #0e1322):** The base canvas.
*   **Low Nesting (`surface_container_low` #161b2b):** Used for secondary sections or grouping related content.
*   **High Nesting (`surface_container_high` #25293a):** Reserved for interactive cards or primary content blocks.
*   **The Glass & Gradient Rule:** For main CTAs or hero highlights, use a linear gradient (e.g., `primary` #78fbc5 to `primary_container` #59deaa). This adds a "soul" to the UI that flat colors lack.

---

## 3. Typography

The typography strategy focuses on a high-contrast pairing: a high-character Display face and a highly legible Sans for technical data.

*   **The Display Voice (`plusJakartaSans`):** Used for `display` and `headline` scales. It should feel bold and authoritative.
*   **The Technical Voice (`inter`):** Used for `title` and `body` text. It provides the neutral, readable foundation required for long-form project descriptions.
*   **The Mono Accent (`spaceGrotesk`):** Reserved for `label` scales. This provides a subtle "technical" nod to code environments without compromising the editorial elegance.

*Hierarchy Note:* Use `display-lg` for hero statements, but immediately drop to `body-md` for descriptions to create a dramatic typographic "staircase" that feels modern and intentional.

---

## 4. Elevation & Depth

We eschew traditional shadows in favor of **Tonal Layering** and **Atmospheric Perspective**.

*   **Layering Principle:** Depth is achieved by stacking. A `surface_container_lowest` (#090e1d) card sits inside a `surface_container_low` (#161b2b) section, creating a natural inset effect.
*   **Ambient Shadows:** For floating elements (like Tooltips), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow must never be pure black; it should feel like a dark tint of the background.
*   **The "Ghost Border":** If a container requires definition against a similar background, use the `outline_variant` (#3d4a42) at 15% opacity. High-contrast, 100% opaque borders are strictly forbidden.
*   **Glassmorphism:** Apply a `backdrop-blur: 12px` and a semi-transparent `surface_variant` (#2f3445 at 40% alpha) to floating navigation or cards. This allows the vibrant accents behind the cards to bleed through subtly.

---

## 5. Components

### Buttons
*   **Primary:** A gradient fill (`primary` to `primary_container`) with `on_primary` text. No border. On hover, increase the brightness of the gradient.
*   **Secondary:** A "Ghost Border" using `outline` and `on_surface` text. Hover state includes a subtle 5% opacity fill of `primary`.
*   **Tertiary:** Text-only using `primary` color, with a 2px bottom margin that expands into a full underline on hover.

### Glassmorphic Cards
*   **Style:** `surface_container_highest` at 60% opacity with `backdrop-blur`. 
*   **Rules:** No dividers. Separate headers from body text using `spacing-6` (2rem). 
*   **Corner Radius:** Always use `xl` (1.5rem) for main cards to maintain a soft, premium feel.

### Input Fields
*   **Base:** `surface_container_low` background with a `sm` (0.25rem) radius.
*   **Focus State:** Transition the border from "Ghost" to a solid `primary` glow. 
*   **Error State:** Use `error` (#ffb4ab) for text and helper icons, but keep the input background neutral to avoid a "cheap" look.

### Chips (Tech Stack)
*   Small, pill-shaped (`full` roundedness). Use `surface_container_high` for the background and `label-md` typography. On hover, the text color shifts to `secondary`.

---

## 6. Do's and Don'ts

### Do
*   **DO** use asymmetric spacing. If a section has `spacing-24` on top, try `spacing-16` on the bottom to create a sense of movement.
*   **DO** use `tertiary` (#a5efff) for highlights within body text to draw the eye to key metrics.
*   **DO** use "Breathing Room." If a layout feels crowded, increase the spacing scale by two increments.

### Don't
*   **DON'T** use 1px solid white or light grey borders. They break the "Glass" illusion.
*   **DON'T** use standard "Drop Shadows." If an element doesn't have a background shift or a blur, it shouldn't be elevated.
*   **DON'T** use more than three accent colors in a single view. Stick to a "Primary + One" rule (e.g., Cyan for buttons, Purple for highlights).
*   **DON'T** use dividers. If two items need separation, use background tonal shifts or `spacing-8`.