# PORTFOLIO DESIGN SYSTEM // THE GLASS ENGINE

This file is the **Single Source of Truth** for the "Glass Engine" aesthetic. It defines the visual language for a High-End UX/UI & Frontend Developer Portfolio.

---

## 🛠️ TECHNICAL IMPLEMENTATION
- **Location:** `app/globals.css`
- **Methodology:** Tailwind v4 (@theme inline + @utility)
- **Framework:** React / Next.js 15 + Framer Motion / GSAP

---

## 🖼️ 1. PAGE PHYSICS & FRAME (The Container)
The portfolio is not a static page; it is a viewport into a digital workspace.

| Device | Value | Class CSS | Context |
| :--- | :--- | :--- | :--- |
| **Mobile** | **16px** | `px-frame` | Tight, efficient mobile view. |
| **Desktop** | **48px** | `px-frame` | Breathable workspace. |
| **Max Width** | **1400px** | `max-w-forge` | The main content column. |

---

## 📐 2. TYPOGRAPHY SYSTEM (The Voice)
We blend **Editorial Authority** with **Engineering Precision**.

### Font Families
- **Display:** `Manrope` or `Uncut Sans` (Variable, Geometric, Modern).
- **Code:** `JetBrains Mono` or `Space Mono` (Technical, Legible).

### Semantic Tokens

| Token | Class CSS | Base Style | Usage |
| :--- | :--- | :--- | :--- |
| **H-DISPLAY** | `.text-display` | `font-display font-bold text-5xl md:text-7xl lg:text-[5vw] tracking-tighter leading-[0.9]` | Hero Headlines. |
| **H-SECTION** | `.text-section` | `font-display font-semibold text-3xl md:text-4xl tracking-tight` | Section Headers. |
| **H-CODE** | `.text-code-h` | `font-mono text-xl text-accent font-medium` | Technical callouts. |
| **BODY-MAIN** | `.text-body` | `font-sans text-base leading-relaxed text-muted-foreground` | Narrative text. |
| **META-DATA** | `.text-meta` | `font-mono text-[11px] uppercase tracking-[0.1em] text-muted/60` | Tags, dates, specs. |

---

## 🎨 3. COLOR PALETTE (The Atmosphere)

### 3.0 PHILOSOPHY: THE VOID STATE
We do not use "Black". We use **Deep Void** and **Dark Matter**. The interface feels like a high-contrast OLED IDE.

### 3.1 SEMANTIC MAPPING

| Variable | Tailwind Token | Value (Hex/RGBA) | Usage |
| :--- | :--- | :--- | :--- |
| `--bg-void` | `bg-void` | `#050505` | The infinite background. |
| `--bg-panel` | `bg-panel` | `#0A0A0A` | Secondary surfaces (cards). |
| `--fg-primary` | `text-primary` | `#EDEDED` | Main content readability. |
| `--fg-muted` | `text-muted` | `#888888` | Secondary content. |
| `--border-dim` | `border-dim` | `rgba(255,255,255,0.08)` | Subtle structure. |
| `--glass` | `bg-glass` | `rgba(255,255,255,0.02) backdrop-blur-xl` | Frosted overlays. |

### 3.2 ACCENTS (The Energy)
Used sparingly to draw focus.
- **Neon Mint:** `--accent-mint` (`#00FF94`) -> Success, Primary Actions, Cursors.
- **Electric Indigo:** `--accent-indigo` (`#6366f1`) -> Interaction States, Active Links.
- **Error Pink:** `--accent-error` (`#FF3366`) -> Debugging, "System Failure" aesthetics.

---

## 🔘 4. INTERACTIVE COMPONENTS

### **BTN-FORGE-PRIMARY** (`.btn-forge`)
The primary call to action. Technical and tactile.
- **Background:** `bg-white` (High contrast against Void).
- **Text:** `text-black` font-mono font-bold.
- **Border:** `None`.
- **Shape:** `rounded-sm` (Technical, not playful).
- **Hover:** `bg-accent-mint`, `shadow-[0_0_20px_rgba(0,255,148,0.4)]`.
- **Active:** Scale 0.98.

### **BTN-FORGE-GHOST** (`.btn-ghost`)
Secondary actions.
- **Background:** Transparent.
- **Border:** `1px solid border-dim`.
- **Text:** `text-primary` font-mono.
- **Hover:** `border-accent-mint`, Text turns `accent-mint`.

---

## 📊 5. UI PATTERNS

### **THE BENTO CARD**
- **Base:** `bg-panel` or `bg-glass`.
- **Border:** `border border-dim`.
- **Texture:** Subtle noise overlay opacity 0.05.
- **Hover:** Border becomes `white/20`.

### **THE CODE BLOCK**
- **Font:** `JetBrains Mono`.
- **Background:** `bg-[#0F0F0F]`.
- **Syntax Highlighting:** Minimalist (Greys + Mint + Indigo).

---

## 📝 6. INTERNATIONALIZATION STRATEGY
- **Content Expansion:** Design for +30% text length variability.
- **Date Formats:** Use ISO-like formats for tech feel (`2026.01.07`) or standard (`JAN 07, 2026`).

---

> **RULE:** If it looks like a standard Bootstrap/Material component, **DELETE IT**. It must look like a proprietary tool.
