# 🤖 AGENT PROTOCOL: UI TOKENIZATION & DESIGN SYSTEM GUARDIAN v2.2

## 🎯 OBJECTIVE
Ensure absolute consistency with the **Elastic Glass Engine (v2.2)**.

> **CRITICAL MANDATE:** Global margins and vertical gaps MUST use **`em` units**. Standard Tailwind `rem` spacing (e.g., `px-4`, `py-20`) is strictly forbidden for global layout.

---

## 🚨 ZERO TOLERANCE POLICY (The Blacklist)

| Forbidden (Fixed/Rem) ❌ | Mandatory Replacement (Elastic EM) ✅ | Context |
| :--- | :--- | :--- |
| `px-4`, `px-3` (rem-based) | `.px-frame` (0.75em on mobile) | **Lateral Margins** |
| `py-32`, `py-20` (rem-based) | `.section-gap` (8em / 5em) | **Vertical Rhythm** |
| `gap-4`, `space-y-4` | `.content-gap` (1em / 0.75em) | **Internal Spacing** |
| `max-w-7xl` | `.max-w-forge` (87.5em) | **Container Width** |
| `bg-black`, `bg-white` | `--background`, `--surface` | **Theming** |

---

## 🔍 CORE ANALYSIS RESPONSIBILITIES

### 1. 📐 ELASTIC SPATIAL DIMENSION (The EM Rule)
*   **Proportionality:** Is the layout relative to font-size?
    *   ❌ BAD: `className="px-4 py-20"`
    *   ✅ GOOD: `className="px-frame section-gap"`
*   **Mobile Frame:** Verify that mobile lateral padding is effectively **0.75em** (12px at base).

### 2. ✒️ TYPOGRAPHIC DIMENSION
*   Use `Manrope` for display and `JetBrains Mono` for tech data.
*   Enforce semantic classes like `.text-display-xl`.

### 3. ⚡ KINETIC DIMENSION (Springs)
*   Forbid `ease-linear`.
*   Enforce `springPresets.snappy` for interactive elements.

### 4. 🌗 CHROMATIC DIMENSION
*   Strict use of semantic variables. No hex codes in components.

---

## 🛠️ OPERATIONAL WORKFLOW

1.  **Check Context:** "Am I at the root layout or a section?"
2.  **Apply EM Tokens:** Use `.px-frame` and `.section-gap`.
3.  **Scale Check:** "If I change the parent font-size, does the padding scale?" -> It must.

---

## 📊 OUTPUT REPORT FORMAT

```markdown
# 🛡️ TOKENIZATION REPORT: [File Name]

## 🟢 COMPLIANCE STATUS
[Score: 0-100%]

## 🔍 DETAILED INVENTORY
| Category | Token/Variable | Status | Observation |
| :--- | :--- | :--- | :--- |
| **Elasticity**| `em` usage | ✅ Compliant | Global margins are relative. |
| **Mobile** | `px-3` (rem) | ⚠️ Violation | Fixed 12px found. Replaced with `px-frame` (0.75em). |
| **Type** | `text-display` | ✅ Linked | Manrope respected. |

## 🛠️ ACTIONABLE INSIGHTS
1.  **[Critical]:** Replaced fixed `rem` gaps with elastic `em` tokens.
```