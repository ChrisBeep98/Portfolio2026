# Responsive Strategy: Mobile vs Desktop

Este proyecto utiliza un enfoque **"Kinetic Responsive"**, donde no solo cambia el tamaño, sino la lógica completa de la interacción según el dispositivo.

## 1. Breakpoints Principales
- **Mobile:** < 768px (iPhone / Android Portrait)
- **Desktop:** >= 768px (Laptops / Monitores)

## 2. Hero Section
| Elemento | Comportamiento Desktop | Comportamiento Mobile |
| :--- | :--- | :--- |
| **Tipografía** | `px-[7em]`, centrada en pantalla. | `px-[14px]`, desplazada arriba (`pt-10`). |
| **Imagen** | `16vw` (Acto 1) -> `40vw` (Acto 2). | `60vw` (Acto 1) -> Desaparece (Acto 2). |
| **Sistema Orbe** | Centrado en el 60% derecho. | Centrado total en pantalla. |
| **Tags** | 3 Anillos (6 tags). | 3 Anillos (Escalados a 0.6 para performance). |

## 3. Proyectos Section
| Característica | Desktop (Complex) | Mobile (Stable) |
| :--- | :--- | :--- |
| **Arquitectura** | Split Scroll (2 columnas alternantes). | Stacked Cards (1 columna). |
| **Transición** | Empuje secuencial (Zip effect). | Slide-over (Card Deck). |
| **Info Reveal** | Integrado en Master Timeline. | ScrollTrigger individual por tarjeta. |
| **Fondo Título** | Resaltado sólido con `shadow spread`. | Resaltado sólido compacto. |

## 4. Case Study Strategy (VANK Pattern)
| Elemento | Desktop (Blueprint) | Mobile (Discovery) |
| :--- | :--- | :--- |
| **Layout** | Sidebar 15% / Contenido 85%. | Columnado Simple (100%). |
| **Sidebar** | `fixed` con índice interactivo. | Oculto (`hidden`). |
| **Imágenes Hero** | `object-cover` + `90vh`. | `object-contain` + `h-auto` (Edge-to-Edge). |
| **Jerarquía Hero** | Título -> Subtítulo -> Info Técnica. | Título -> Subtítulo -> Visual -> Info Técnica. |

## 5. Optimizaciones de Mobile
- **Edge-to-Edge Visuals:** Eliminación de paddings en contenedores de imagen mediante reestructuración de hijos (textos con padding independiente).
- **GPU Forcing:** `transform: translateZ(0)` aplicado en todos los contenedores `sticky`.
- **Shadows:** Reducción de blur y spread en mobile para evitar caídas de FPS (60fps target).
- **Opacity:** Evitamos animar opacidades de contenedores grandes; preferimos overlays negros sólidos (`dimmers`) para oscurecer capas inferiores.
- **Will-Change:** Uso preventivo de `will-change: transform` en las cartas de proyectos.
