# Cinematic Architecture & Context

## 1. Visión General
El portafolio Christian Sandoval 2026 está construido bajo la filosofía **"Cinematic Architect"**, utilizando el **Glass Engine v2.2**. El objetivo es crear una experiencia narrativa de alto nivel donde el scroll no solo desplaza contenido, sino que dirige una película técnica.

## 2. Stack Tecnológico
- **Framework:** Next.js 15 (App Router).
- **Styling:** Tailwind CSS v4 (Glass Engine Design Tokens).
- **Motion Engine:** GSAP (GreenSock Animation Platform) + ScrollTrigger.
- **Iconografía:** Lucide React.
- **Tipografía:** Manrope (Display) & JetBrains Mono (Technical).

## 3. Estructura de Documentación en /docs
- `ARCHITECTURE.md`: Este archivo (Visión general y flujos).
- `ANIMATION-ENGINE.md`: Lógica detallada de Actos, Timelines y Fases.
- `COMPONENT-SYSTEM.md`: Guía de implementación de componentes UI.
- `RESPONSIVE-STRATEGY.md`: Manual de comportamiento Mobile vs Desktop.

## 4. Flujo Principal del Usuario
1.  **Intro (Acto 1):** Tipografía cinética agresiva + Revelado de identidad.
2.  **Narrative Shift (Acto 2):** Transición fluida a un sistema planetario que representa el stack técnico.
3.  **Showcase (Alternating Split Scroll):** Los proyectos se presentan como casos de estudio técnicos con un sistema de empuje complejo.
4.  **Process (3D Cards):** Revelado tridimensional del flujo de trabajo.

## 5. Decisiones Técnicas Clave
- **Performance:** Uso estricto de `transform: translateZ(0)` y `will-change` para forzar aceleración por hardware en dispositivos móviles.
- **Sticky Strategy:** Evitamos el pinning manual de GSAP en Next.js para prevenir errores de DOM; usamos `sticky top-0` nativo dentro de tracks de scroll calculados (`300vh`, `200vh`, etc).
- **Z-Index Management:** Implementación de "The 50% Swap Trick" en animaciones de superposición para evitar parpadeos visuales.
