# PORTFOLIO DESIGN SYSTEM // THE SWISS ATELIER v3.0

> **SINGLE SOURCE OF TRUTH**
> Focus: Light, Typography, Architecture.

---

## 🎨 1. COLOR PALETTE (Light & Material)

### 1.1 CANVAS (The Gallery Wall)
*   **Surface:** `#F2F2F0` (Stone-100/Warm Grey). This is the default background.
*   **Paper:** `#FFFFFF` (Pure White). Used for cards or floating panels.

### 1.2 INK (The Contrast)
*   **Ink-Black:** `#1a1a1a` (Primary Text). High contrast, harsh, readable.
*   **Ink-Grey:** `#666666` (Secondary Text).

### 1.3 SOUL (Refraction)
*   Colors are used to simulate light passing through glass/prisms.
*   **Prism-Orange:** `rgba(249, 115, 22, 0.2)`
*   **Prism-Blue:** `rgba(59, 130, 246, 0.2)`
*   **Prism-Purple:** `rgba(168, 85, 247, 0.2)`
*   *Usage:* Always with `backdrop-blur` and `mix-blend-mode: multiply` or `overlay`.

---

## ✒️ 2. TYPOGRAPHY (The Structure)

We use a **Hybrid System** to represent Engineering (Sans) vs. Soul (Serif).

### 2.1 FONT FAMILIES
*   **Structure (Sans):** `Manrope` or `Inter`. Bold, Geometric, Tracking-Tighter. Used for Names, Headlines.
*   **Soul (Serif):** `Playfair Display`, `Instrument Serif`, or `Newsreader`. Italic, Light. Used for the "Manifesto" and emotional words.

### 2.2 SCALE (Editorial)
*   **Massive:** `text-[12vw]` or `text-9xl`. For the Hero Anchor.
*   **Micro:** `text-xs` + `tracking-widest` + `uppercase`. For metadata (Est. 2026, Role, Lat/Long).

---

## 📐 3. LAYOUT & SPACING (The Breath)

*   **Elasticity:** Continue using `em` for global scaling.
*   **Whitespace:** Double the previous gaps. In a gallery, the empty wall is as important as the art.
    *   `--section-gap`: `12em` (was 8em).
*   **Grid:** 12-Column Grid is standard, but we purposefully leave columns 4-8 empty to create visual tension.

---

## ⚡ 4. PHYSICS (The Feel)

*   **Rotation:** Use 3D rotation (`rotateX`, `rotateY`) on scroll to simulate physical objects tumbling.
*   **Grain:** Always apply a subtle `noise.svg` overlay (`opacity: 0.04`) to give the screen texture.
*   **Parallax:** Text and Images move at different speeds AND different directions (Y-axis vs X-axis).
