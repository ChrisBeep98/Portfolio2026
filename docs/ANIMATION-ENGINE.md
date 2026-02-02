# Animation Engine: Acts & Phases

## 1. Hero Cinematic (2-Act Experience)

### Acto 1: Kinetic Intro
- **Propósito:** Impacto tipográfico inmediato.
- **Mecánica:** Entrada con `power4.out`. Las palabras "Christian", "Sandoval", "UX-UI", etc., aparecen escalonadamente.
- **Visual:** Mezcla de capas glitch (Rojo/Azul) en el nombre principal. La imagen de identidad aparece pequeña en la esquina inferior izquierda.

### Acto 2: The Transition (Planetary System)
- **Activación:** Scroll manual.
- **Layout Shift (Desktop):** 
  - La imagen se expande a `100vh` y `40vw` a la izquierda.
  - Los textos salen disparados hacia los lados (`xPercent: 150/-150`).
  - El sistema planetario (Orbe + Tags) emerge y se centra en el 60% restante.
- **Layout Shift (Mobile):** 
  - La imagen se oculta hacia abajo.
  - El sistema planetario se centra verticalmente en la pantalla para optimizar el formato portrait.

## 2. Projects Showcase (Alternating Split Scroll)

### La Regla de las 3 Fases (Desktop)
Cada proyecto consume un track de `200vh` dividido en:
1.  **Fase de Entrada:** El panel derecho del siguiente proyecto sube mientras el actual sigue fijo.
2.  **El SWAP (50% Progress):** El panel izquierdo actual sale disparado hacia arriba, el izquierdo siguiente entra. En el punto medio exacto, se intercambian los `zIndex` para evitar que el que sale tape al que entra.
3.  **Fase de Cierre:** El panel derecho anterior termina de salir, dejando la nueva tarjeta perfectamente asentada.

### Stacking System (Mobile)
- **Mecánica:** "Deck of Cards".
- **Interacción:** Cada tarjeta es `sticky top-0`. La nueva tarjeta sube y cubre a la anterior.
- **Optimización:** La tarjeta inferior se escala a `0.95` y se oscurece mediante un `dimmer` negro sólido (sin transparencia para evitar lag) para dar profundidad.

## 3. Optimización de GSAP en React
- **Contexto:** Siempre usamos `gsap.context()` dentro de `useEffect` para asegurar una limpieza total de ScrollTriggers al desmontar componentes.
- **QuickTo:** Para efectos de seguimiento de ratón (como en el Hero), usamos `gsap.quickTo` para máxima eficiencia de memoria.
- Force3D: Todas las transformaciones de escala y posición tienen `force3D: true` para usar la GPU del dispositivo.

## 4. Case Study Special Effects (VANK Pattern)

### The Mask Reveal (Titles)
- **Mecánica:** `clip-path: inset(0% 0% 100% 0%)` -> `inset(0% 0% 0% 0%)`.
- **Sincronización:** Acompañado de un desplazamiento `y: 100% -> 0%`.
- **Impacto:** Efecto de "apertura de ventana" tipográfica, extremadamente optimizado para GPU.

### Individual Scroll Triggers (Narrative Flow)
- **Evolución:** Migración de animaciones por bloque a disparadores por elemento.
- **Lógica:** Cada párrafo e ítem de lista tiene su propio `ScrollTrigger` con `start: "top 92%"`.
- **Beneficio:** Evita el despliegue masivo de contenido no visible y mejora la sensación de "descubrimiento" orgánico.

### Liquid ScrollTo
- **Plugin:** `gsap/ScrollToPlugin`.
- **Easing:** `power4.inOut` con duración de `1.5s`.
- **Propósito:** Eliminar los saltos bruscos nativos del navegador en los índices laterales.
