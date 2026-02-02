# LANGUAGE SYSTEM & I18N STRATEGY

## 1. Overview
The portfolio implements a lightweight, type-safe Internationalization (i18n) system designed to support **English (EN)** and **Spanish (ES)**. The system is built natively with React Context and avoids heavy external libraries to maintain high performance and the "Glass Engine" philosophy.

## 2. Architecture

### 2.1 Core Components
- **`LanguageContext`**: Global state manager. Persists user preference in `localStorage` and auto-detects browser language on first visit.
- **`dictionary.ts`**: The single source of truth for all text content. It uses a strict type system to ensure feature parity between languages.
- **`LanguageSwitch`**: A minimalist UI component that mirrors the `ThemeToggle` aesthetic (circular "bubble" design, vertical slide animations).

### 2.2 File Structure
```
src/
├── context/
│   └── LanguageContext.tsx  // Context Provider & Hook
├── lib/
│   └── dictionary.ts        // Text Inventory (EN/ES)
├── components/
│   └── ui/
│       └── LanguageSwitch.tsx // UI Toggle Component
└── app/
    └── layout.tsx           // Global Provider Wrapping
```

## 3. Implementation Details

### State Management (`LanguageContext`)
- **Persistence**: Saves preference to `localStorage` key `'language'`.
- **Auto-Detection**: Checks `navigator.language` on mount if no preference is saved.
- **Default**: Fallback to `'en'` (English).

### Visual Design (`LanguageSwitch`)
- **Style**: Circular "Glass Bubble" (Border `white/20`, Transparent Background).
- **Typography**: `JetBrains Mono` (Code font), 12px, Capitalized (`En`/`Es`).
- **Animation**: Vertical carousel effect.
  - `En` slides out UP, `Es` slides in from DOWN (and vice versa).
  - Synchronized `opacity` and `transform` transitions.
- **Interaction**: Hover scale (`1.1`) and border highlight (`primary/50`).

## 4. Usage Guide

### 4.1 Accessing Text
Use the custom hook `useLanguage` to access the current dictionary.

```tsx
import { useLanguage } from "@/context/LanguageContext";

export default function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <h1>{t.hero.title}</h1>
  );
}
```

### 4.2 Adding New Content
1. Open `src/lib/dictionary.ts`.
2. Add the key to the `en` object.
3. TypeScript will immediately error on the `es` object, forcing you to add the corresponding translation. **This ensures 100% translation coverage.**

```typescript
// src/lib/dictionary.ts
export const dictionary = {
  en: {
    section: {
      newKey: "Hello World"
    }
  },
  es: {
    section: {
      newKey: "Hola Mundo"
    }
  }
};
```

### 4.3 Switching Languages Programmatically
```tsx
const { setLanguage } = useLanguage();
// setLanguage('es') or setLanguage('en')
```

## 5. Future Roadmap
- [ ] Migrate all hardcoded text in `Header.tsx` to `dictionary.ts`.
- [ ] Implement `Hero` section translations.
- [ ] Add accessibility labels for screen readers.
