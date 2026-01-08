# PORTFOLIO DESIGN SYSTEM // THE GLASS ENGINE v2.2

> **SINGLE SOURCE OF TRUTH**
> This document defines the visual physics, mathematics, and aesthetics of the "Glass Engine".
> **Core Spacing Principle:** Global margins and vertical rhythm use **`em` units** for proportional scaling.

---

## 📐 1. TYPOGRAPHY SYSTEM (The Voice)

### 1.1 FONT FAMILIES
- **Display:** `Manrope` (Editorial authority).
- **Code:** `JetBrains Mono` (Engineering precision).

### 1.2 TYPE SCALE (Responsive)
*Base font-size: 16px (1rem)*

| Token Class | Font | Size (Desktop/Mobile) | Tracking | Line-Height |
| :--- | :--- | :--- | :--- | :--- |
| `.text-display-xl`| Manrope | `text-8xl` / `text-5xl` | `-0.04em` | `0.9` |
| `.text-display-l` | Manrope | `text-6xl` / `text-4xl` | `-0.03em` | `0.95` |
| `.text-heading` | Manrope | `text-3xl` / `text-2xl` | `-0.02em` | `1.1` |
| `.text-body` | Manrope | `text-lg` / `text-base` | `0` | `1.6` |

---

## 📊 2. LAYOUT MATHEMATICS (The Elastic Spacing)

Global margins and rhythm now use **`em`** to ensure the "Glass Engine" scales with its content.

### 2.1 THE PAGE FRAME (Lateral Margins)
Defined as padding relative to the container's font-size.

| Device | Value (EM) | Pixel Equiv. (at 16px) | Token |
| :--- | :--- | :--- | :--- |
| **Mobile** | **`0.75em`** | **12px** | `.px-frame` |
| **Tablet** | **`2em`** | **32px** | `.px-frame` |
| **Desktop** | **`3em`** | **48px** | `.px-frame` |
| **Max Width** | `87.5em` | `1400px` | `.max-w-forge` |

### 2.2 VERTICAL RHYTHM (Elastic Breathing)

| Token | Class | Size (Desktop/Mobile) | Usage |
| :--- | :--- | :--- | :--- |
| **Section Gap** | `.section-gap` | **`8em` / `5em`** | Major section breaks. |
| **Block Gap** | `.block-gap` | **`2em` / `1.5em`**| Between cards/grids. |
| **Content Gap** | `.content-gap` | **`1em` / `0.75em`** | Title -> Paragraph. |
| **Text Gap** | `.text-gap` | **`0.5em`** | Between paragraphs. |

---

## ⚡ 3. ANIMATION PHYSICS (The Feel)

Use these **Spring Physics** for all motion components.

| Preset Name | Stiffness | Damping | Mass | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **"Gentle"** | `120` | `20` | `1` | Modals, Fade-ins. |
| **"Snappy"** | `400` | `30` | `0.8` | Buttons, Hovers. |
| **"Dramatic"** | `100` | `25` | `1.5` | Hero reveals. |

---

## 🌑 4. THEME & DEPTH

### 4.1 THEME DUALITY
- **Lab (Light):** `--background: #FFFFFF`, `--foreground: #09090B`.
- **Void (Dark):** `--background: #050505`, `--foreground: #EDEDED`.

### 4.2 GLASS & SHADOWS
- **Glass Engine:** `backdrop-filter: blur(12px) saturate(180%)`.
- **Shadows:** Neumorphic Discrete (Level 1-4).

---

## 📊 5. THE BENTO GRID (12-Column System)

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1em; /* Elastic gap */
}
```

| Component | Class | Spans |
| :--- | :--- | :--- |
| **Spotligh
t** | `.bento-spotlight` | `col-span-12 md:col-span-8` |
| **Sidebar** | `.bento-side` | `col-span-12 md:col-span-4` |
| **Card** | `.bento-card` | `col-span-12 md:col-span-6` |

---

> **FINAL RULE:** All global spacing MUST be in **`em`**. This is a proportional engine, not a fixed document.
