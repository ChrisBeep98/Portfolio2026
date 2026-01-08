# PORTFOLIO DESIGN SYSTEM // THE DUALITY ARCHITECT v4.0

> **SINGLE SOURCE OF TRUTH**
> Focus: Bipolar Aesthetic (Swiss Order vs. Cyber Chaos), Massive Scale, Structural Tension.

---

## 🌗 1. THE DUALITY ENGINE (Theme System)

The interface is not just a color change; it is a **Reality Shift**.

### 1.1 STATE A: THE SWISS ATELIER (Light Mode)
*   **Concept:** The Physical Gallery. Order, Paper, Ink.
*   **Surface:** `#F2F2F0` (Stone-100/Warm Grey).
*   **Ink:** `#000000` (Pure Black). Solid, heavy, permanent.
*   **Atmosphere:** Grainy noise (`opacity: 0.04`), grid lines, architectural precision.

### 1.2 STATE B: THE CYBER VOID (Dark Mode)
*   **Concept:** The Digital Subconscious. Chaos, Neon, Data.
*   **Surface:** `#050505` (Deep Void).
*   **Ink:** **Hollow & Glitched**. Text becomes transparent or outlined.
*   **Atmosphere:** Infinite 3D Neon Grids, RGB Splitting (Red/Cyan), `mix-blend-screen` vibration.

---

## ✒️ 2. TYPOGRAPHY (The Super-Structure)

Text is the primary architectural material. Images are secondary.

### 2.1 SCALE & PRESENCE
*   **The Wall:** `text-[12em]` is the standard for Hero elements.
*   **The Zig-Zag:** Typography is never stacked linearly. It follows a scattered pattern:
    *   *Line 1:* Left
    *   *Line 2:* Right
    *   *Line 3:* Center
    *   *Line 4:* Left...

### 2.2 THE SHIFT (Typography Behavior)
*   **In Light:** Text is a **Solid Wall**. Heavy `font-black`.
*   **In Dark:** Text is a **Ghost**.
    *   Fill: `transparent`.
    *   Stroke: `2px` (Cyan/Magenta).
    *   Effect: **RGB Displacement**. Duplicated layers shifted `±2px` horizontally to create a vibrating holographic effect.

---

## 📐 3. LAYOUT & PHYSICS (The Kinetic Space)

### 3.1 SCATTERED GRID
*   **Asymmetry:** We adhere to a "Scattered Layout". Elements are pushed to the extremes (`max-w-[75vw]`) to create tension in the center.
*   **Margins:** desktop `px-[7em]`, mobile `px-[2em]`.

### 3.2 GPU MOTION
*   **Entrance:** "Lateral Slam". Elements do not fade in; they **slide** aggressively from off-screen (`xPercent: ±120`).
*   **Optimization:** All animations must use `force3D: true` and `will-change: transform`.
*   **Scroll:** Parallax is mandatory but must be hardware accelerated.

---

## 🎨 4. COLOR CODES

*   **Swiss-Ink:** `#1a1a1a`
*   **Swiss-Paper:** `#F2F2F0`
*   **Cyber-Red:** `#ef4444` (Glitch Layer A)
*   **Cyber-Blue:** `#3b82f6` (Glitch Layer B)
*   **Cyber-Cyan:** `#06b6d4` (Outlines)
*   **Cyber-Pink:** `#ec4899` (Accents)