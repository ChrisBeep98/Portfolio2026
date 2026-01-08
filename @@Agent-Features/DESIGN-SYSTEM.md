# PORTFOLIO DESIGN SYSTEM // THE GLASS ENGINE v2.0

> **SINGLE SOURCE OF TRUTH**
> This document defines the visual physics, mathematics, and aesthetics of the "Glass Engine".
> **Philosophy:** "Cinematic Precision". A blend of Editorial Design (Manrope) and High-Performance Engineering (JetBrains Mono).

---

## 🛠️ 1. THEME ARCHITECTURE (Light & Dark)

We do not design for one mode. We design for a **System**.
- **Light Mode ("The Laboratory"):** Clinical, precise, high-contrast, paper-like.
- **Dark Mode ("The Void"):** Immersive, infinite, OLED-black, bioluminescent accents.

### 1.1 SEMANTIC COLOR TOKENS (Tailwind v4 / CSS Variables)
We adopt the **Modern Tech Grey Scale** (0-950) mapped to semantic roles.

| Token | CSS Variable | Light Mode Value (Lab) | Dark Mode Value (Void) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **bg-background** | `--background` | `#FFFFFF` | `#050505` | Page background. |
| **bg-surface** | `--surface` | `#FAFAFA` (Gray-50) | `#0A0A0A` (Gray-925) | Cards, Panels. |
| **bg-surface-2** | `--surface-2` | `#F4F4F5` (Gray-100) | `#121212` (Gray-900) | Secondary areas. |
| **text-foreground** | `--foreground` | `#09090B` (Gray-950) | `#EDEDED` (Gray-50) | Main text. |
| **text-muted** | `--muted` | `#71717A` (Gray-500) | `#A1A1AA` (Gray-400) | Secondary text. |
| **border-dim** | `--border-dim` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.08)` | Subtle dividers. |
| **border-highlight**| `--border-high`| `rgba(0,0,0,0.15)` | `rgba(255,255,255,0.15)` | Hover states. |

### 1.2 ACCENT PALETTE (The Energy)
Accents must adapt their intensity via opacity.
- **Neon Mint:** `--accent-mint` (`#00FF94`) -> Primary Actions, Success.
- **Electric Indigo:** `--accent-indigo` (`#6366f1`) -> Focus, Active States.
- **Error Pink:** `--accent-error` (`#FF3366`) -> Errors, "System Failure".

---

## 📐 2. TYPOGRAPHY SYSTEM (The Voice)

We reject generic "Inter". We use a distinctive pairing.

### 2.1 FONT FAMILIES
- **Display:** `Manrope` (Variable, Geometric, Modern). *Rationale: Editorial authority.*
- **Code:** `JetBrains Mono` (Ligatures, Technical). *Rationale: Engineering precision.*

### 2.2 TYPE SCALE (Responsive)
Do not use raw Tailwind sizes. Use these semantic classes.

| Token Class | Font | Size (Desktop/Mobile) | Tracking | Line-Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `.text-display-xl`| Manrope | `text-8xl` / `text-5xl` | `-0.04em` | `0.9` | Hero Titles |
| `.text-display-l` | Manrope | `text-6xl` / `text-4xl` | `-0.03em` | `0.95` | Section Headers |
| `.text-heading` | Manrope | `text-3xl` / `text-2xl` | `-0.02em` | `1.1` | Card Titles |
| `.text-body` | Manrope | `text-lg` / `text-base` | `0` | `1.6` | Narrative |
| `.text-code` | JetBrains | `text-sm` / `text-xs` | `0` | `1.5` | Snippets |
| `.text-meta` | JetBrains | `text-xs` / `text-[10px]`| `0.1em` | `1` | Tags, UI Labels |

---

## ⚡ 3. ANIMATION PHYSICS (The Feel)

We do not use linear animations. We use **Spring Physics**.
*Standard:* Framer Motion presets.

### 3.1 SPRING PRESETS (Framer Motion)
Use these mathematical values for all motion components.

| Preset Name | Stiffness | Damping | Mass | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **"Gentle"** | `120` | `20` | `1` | Modals, Tooltips, Fade-ins. |
| **"Snappy"** | `400` | `30` | `0.8` | Buttons, Hover states, Toggles. |
| **"Dramatic"** | `100` | `25` | `1.5` | Hero reveals, Page transitions. |
| **"Subtle"** | `300` | `25` | `0.5` | Micro-interactions (Icons). |

### 3.2 CSS EASING VARIABLES
For CSS transitions (Tailwind classes).

```css
:root {
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-snappy: cubic-bezier(0.4, 0, 0.1, 1);
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```
**Usage:** `transition-all duration-500 ease-[var(--ease-smooth)]`

---

## 🌑 4. DEPTH & GLASS (The Atmosphere)

The "Void" is not flat. It has layers.

### 4.1 ELEVATION (Shadows)
We use a **Neumorphic Discrete System**.

| Token | Class | Description |
| :--- | :--- | :--- |
| **Level 0** | `shadow-none` | Background / Void. |
| **Level 1** | `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` (Cards). |
| **Level 2** | `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1)` (Hover). |
| **Level 3** | `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1)` (Dropdowns). |
| **Level 4** | `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1)` (Modals). |
| **Inner** | `shadow-inner`| `inset 0 2px 4px 0 rgb(0 0 0 / 0.05)` (Input Fields). |

### 4.2 GLASSMORPHISM (High Legibility)
Do not use simple opacity. Use the **Glass Engine** formula.

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.03); /* Light: rgba(255,255,255,0.7) */
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--border-dim);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
}
```

### 4.3 MESH GRADIENTS (The Magic)
Used for backgrounds to create organic "Space" feel.
- **Technique:** Multiple radial gradients with high blur (`blur-3xl`).
- **Colors:** Deep Indigo + Void Black + Hint of Mint.
- **Animation:** Slowly rotating hue or position.

---

## 📊 5. LAYOUT PATTERNS (The Math)

### 5.1 THE BENTO GRID (12-Column System)
A mathematical grid for showcasing work.

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-4); /* 16px */
}
```

| Component | Class | Spans | Context |
| :--- | :--- | :--- | :--- |
| **Spotlight** | `.bento-spotlight` | `col-span-12 md:col-span-8` | Main Feature. |
| **Sidebar** | `.bento-side` | `col-span-12 md:col-span-4` | Stats / Info. |
| **Card** | `.bento-card` | `col-span-12 md:col-span-6` | Standard Item. |
| **Icon** | `.bento-icon` | `col-span-6 md:col-span-3` | Small Metric. |

### 5.2 THE PAGE FRAME
- **Mobile:** `px-4` (16px)
- **Tablet:** `px-8` (32px)
- **Desktop:** `px-12` (48px)
- **Max Width:** `max-w-[1400px]` (The Forge)

---

## 📝 6. COMPONENT LIBRARY (Atomic)

### **BTN-PRIMARY** (`.btn-forge`)
- **Bg:** `bg-foreground` (Inverse of theme).
- **Text:** `text-background` (Inverse).
- **Font:** `font-mono font-bold uppercase tracking-wider`.
- **Physics:** `active:scale-95 transition-transform duration-100 ease-[var(--ease-snappy)]`.

### **BTN-GHOST** (`.btn-ghost`)
- **Bg:** Transparent.
- **Border:** `border border-dim`.
- **Hover:** `bg-surface-2`.

---

> **FINAL RULE:** If you are unsure, default to **Manrope**, **Void Background**, and **Border-Dim**. Precision is beauty.
