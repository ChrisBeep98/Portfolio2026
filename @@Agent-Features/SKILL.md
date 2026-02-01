# SKILL: FRONTEND ARCHITECT // THE BINARY SOUL

> "The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function." — F. Scott Fitzgerald

This skill instructs the creation of interfaces that exist in **Superposition**. We are builders of two worlds: The Gallery (Light) and The Simulation (Dark).

---

## 1. The Aesthetic: "Architectural Duality"
We no longer choose between Minimalism and Futurism. We implement both as contrast states.

*   **Thesis (Light):** The screen is Paper. It respects gravity, ink, and texture. It is static and timeless.
*   **Antithesis (Dark):** The screen is Light. It respects vector math, luminescence, and distortion. It is fluid and ephemeral.

## 2. Design Thinking Principles

### 2.1 The "Hollow" Mandate
*   In the Dark Realm, mass must be removed. Solids become outlines. Content becomes context.
*   **Technique:**
    *   Use `text-transparent` with `-webkit-text-stroke` and `mix-blend-mode` to create weightless structures.
    *   **CRITICAL:** The stroke color MUST be in `hsl()` or `rgb()` format. NEVER use **named colors** (like `black`, `white`, `cyan`, `pink`), or the `mix-blend-mode` difference will invert them to the **wrong** color in light mode, ruining the intended Hollow effect.

### 2.2 The Kinetic Entry
*   Static loading is forbidden.
*   **The Slam:** Content must enter the viewport with physical force. Use `power4.out` easings.
*   **Directionality:** If one element enters Left, the next must enter Right. Create a crossfire of information.

### 2.3 Hardware Sovereignty
*   We render on the GPU, not the CPU.
*   Properties like `top`, `left`, `margin` are forbidden for animation.
*   **ONLY** `transform (translate3d, scale, rotate)` and `opacity` are allowed in animation loops.

## 3. The "Switch" as a Feature
The Theme Toggle is not a utility; it is a **Portal**.
*   It should be prominent.
*   Triggering it should feel like changing the laws of physics of the page.
*   Sound design (if applicable) should reflect this shift (Paper crumple vs. Power up).

## 4. Operational Workflow
1.  **Build the Skeleton:** Layout must work in monochrome.
2.  **Define the Mass:** Set the massive typography (12em+).
3.  **Split the Reality:**
    *   *Layer 1:* Apply the Swiss styling.
    *   *Layer 2:* Apply the Cyber overrides (Glitch, Stroke, Neon).
    *  **Use `hsl()` for stroke colors** to ensure `mix-blend-mode: difference` works correctly across themes.
4.  **Optimize the Engine:** Ensure 120fps via `will-change` and `force3D`.