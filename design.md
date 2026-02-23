# Enigma: Design Specification

> **Identity:** Acid Brutalism
> **Soul:** Technical Rebellion & High-Energy Innovation
> **Goal:** Create an unforgettable landing page for a college tech club.

---

## 🎨 Design Commitment: "Acid Brutalism"

We are abandoning "safe" SaaS layouts in favor of a high-energy, raw, and technically aggressive aesthetic.

- **Topological Choice:** **Fragmented Stacking.** We betray the standard grid. Elements (text, code blocks, visuals) will overlap on the Z-axis to create depth.
- **Risk Factor:** 0px border-radius (Sharp edges) for a "Technical/Raw" feel, combined with intense `#D5FF40` glows.
- **Cliché Liquidation:** No "Hero Split" (Left text / Right image). No soft rounded corners. No generic cyan/blue.

---

## 🌈 Color Palette

Access these via CSS variables in `index.css`.

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--color-acid` | `#D5FF40` | **Primary.** Calls to action, focus states, intense glows. |
| `--color-background` | `#080808` | **Deep Black.** The canvas. Should have a subtle grain overlay. |
| `--color-surface` | `#121212` | **Secondary Black.** For elevated layers and cards. |
| `--color-high-contrast` | `#FFFFFF` | **Text.** Pure white for maximum punch on black. |
| `--color-muted` | `#C0C2B8` | **Subtext.** To maintain hierarchy without distracting from Acid Green. |

---

## 🔡 Typography

**Font Family:** [Poppins](https://fonts.google.com/specimen/Poppins) (Sans-Serif)

| Level | Weight | Size | Usage |
| :--- | :--- | :--- | :--- |
| **H1 (Hero)** | 900 (Black) | 12vw | Massive, overlapping, hover-reactive elements. |
| **H2 (Title)** | 700 (Bold) | 4rem | Fragmented section headers. |
| **Body** | 400 (Regular) | 1rem | Content with high leading (1.6) for readability. |
| **Code** | 400 | 0.9rem | JetBrains Mono or similar for technical details. |

---

## 📐 Layout & Spacing

- **Grid System:** 8px base grid.
- **Radius:** **0px**. Sharp edges only to maintain the technical "brutalist" character.
- **Asymmetric Tension:** Force 10/90 or 20/80 layouts. 
  - *Example:* Align a massive H1 to the extreme left, and push the subtext to the extreme bottom right.

---

## ✨ Effects & Interactivity

1. **Grain Overlay:** A static-filled PNG/SVG overlay at 5% opacity across the entire viewport to give a "premium printed" texture.
2. **Acid Glow:** Use `filter: drop-shadow(0 0 20px rgba(213, 255, 64, 0.3))` for active elements.
3. **Staggered Reveal:** All elements must reveal using a "Slide-Up" + "Fade" transition with Spring physics.
4. **Mouse Follower:** A small Acid Green dot that reacts to clickable elements (expands on hover).

---

## 🛠️ Implementation Directives

- **CSS Files:** Use `tailwind.config.ts` for theme tokens and `index.css` for custom animations/grain.
- **Accessibility:** `prefers-reduced-motion` is mandatory for the grain and reveal animations.
- **Performance:** Use GPU-accelerated transforms and opacity only.
