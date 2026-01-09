# FRAMEWORK MAESTRO: Construcción Completa de Experiencias Web Inmersivas
## Marco de Trabajo Integral para Motion Graphics y Escenas Web Award-Winning

**Versión 2.0 - Arquitectura de Producción Profesional**

---

# FASE 0: ESTRATEGIA Y CONCEPTUALIZACIÓN

## 0.1 CREATIVE BRIEF - Documento Fundacional

El creative brief es el documento más crítico del proyecto. Define dirección, objetivos y parámetros antes de que se escriba una sola línea de código.

### Estructura del Creative Brief (Completa)

```markdown
# CREATIVE BRIEF: [Nombre del Proyecto]

## 1. CONTEXTO DEL PROYECTO
**¿Por qué existe este proyecto?**
- Problema a resolver
- Oportunidad que captura
- Contexto del cliente/negocio
- Qué cambiará si el proyecto tiene éxito

**Background del Cliente:**
- Historia de la empresa/marca
- Valores fundamentales
- Posicionamiento en el mercado
- Proyectos previos relevantes

## 2. OBJETIVOS PRIMARIOS

**Objetivos de Negocio:**
- [ ] Aumentar conversión
- [ ] Generar awareness
- [ ] Educar usuarios
- [ ] Diferenciación competitiva
- [ ] Engagement/Retención

**KPIs Medibles:**
- Tiempo en página: [X minutos]
- Tasa de conversión objetivo: [X%]
- Compartidos sociales esperados: [X]
- Bounce rate máximo aceptable: [X%]

**Objetivos Creativos:**
- Qué queremos que el usuario SIENTA
- Qué queremos que el usuario PIENSE
- Qué queremos que el usuario HAGA

## 3. AUDIENCIA TARGET

**Persona Principal:**
- Edad: [rango]
- Profesión/Industria
- Nivel técnico: [principiante/intermedio/experto]
- Dispositivos que usa: [desktop/mobile/tablet]
- Navegadores principales
- Conexión típica: [fibra/4G/3G]
- Pain points específicos
- Aspiraciones y motivaciones

**Contexto de Uso:**
- ¿Dónde está el usuario cuando visita?
- ¿Qué dispositivo usa?
- ¿Cuánto tiempo tiene disponible?
- ¿Qué buscaba antes de llegar?

## 4. MENSAJE CORE Y NARRATIVA

**Single Most Important Message:**
[Una frase que capture la esencia]

**Mensajes Secundarios:**
1. [Mensaje de apoyo #1]
2. [Mensaje de apoyo #2]
3. [Mensaje de apoyo #3]

**Tone of Voice:**
- [ ] Profesional / Casual
- [ ] Técnico / Accesible
- [ ] Formal / Informal
- [ ] Serio / Humorístico
- [ ] Autoritario / Conversacional

**Palabras Clave Emocionales:**
[innovador, confiable, revolucionario, simple, poderoso, etc.]

## 5. ESPECIFICACIONES TÉCNICAS

**Deliverables:**
- [ ] Landing page responsiva
- [ ] Experiencia 3D interactiva
- [ ] Video motion graphics integrado
- [ ] Micro-interacciones animadas
- [ ] Mobile-first design

**Formatos de Salida:**
- Desktop: [resoluciones objetivo]
- Tablet: [resoluciones objetivo]
- Mobile: [resoluciones objetivo]
- Aspect ratios: [16:9, 1:1, 9:16]

**Constraints Técnicos:**
- Peso máximo página: [3MB]
- Tiempo carga inicial: [<2s]
- Time to Interactive: [<3s]
- FPS mínimo: [60fps desktop, 30fps mobile]
- Navegadores soportados: [Chrome 90+, Firefox 88+, Safari 14+, Edge 90+]

## 6. REFERENCIAS VISUALES Y ESTILO

**Moodboard Links:**
[URLs a referencias visuales]

**Sitios Award-Winning Inspiración:**
- [Sitio 1]: Lo que tomamos - [aspecto específico]
- [Sitio 2]: Lo que tomamos - [aspecto específico]
- [Sitio 3]: Lo que tomamos - [aspecto específico]

**Estilo de Animación:**
- [ ] Smooth & Elegant
- [ ] Snappy & Energetic
- [ ] Cinematic & Dramatic
- [ ] Minimal & Subtle
- [ ] Bold & Experimental

**Color Palette:**
- Primary: [#HEX]
- Secondary: [#HEX]
- Accent: [#HEX]
- Background: [#HEX]
- Text: [#HEX]

**Typography:**
- Heading: [Font family, weights]
- Body: [Font family, weights]
- Display/Special: [Font family, weights]

## 7. TIMELINE Y BUDGET

**Fases del Proyecto:**
```
Semana 1-2: Concepto y Diseño
Semana 3-4: Storyboarding y Prototipos
Semana 5-8: Desarrollo y Animación
Semana 9: Testing y Optimización
Semana 10: Launch y Monitoring
```

**Hitos Clave:**
- [Fecha]: Presentación de concepto
- [Fecha]: Aprobación storyboard
- [Fecha]: Alpha build
- [Fecha]: Beta testing
- [Fecha]: Launch

**Budget:**
- Total: $[X]
- Diseño: $[X]
- Desarrollo: $[X]
- Assets 3D: $[X]
- Testing/QA: $[X]
- Contingencia: $[X]

## 8. STAKEHOLDERS Y APROBACIONES

**Decision Makers:**
- [Nombre]: [Rol] - Aprueba [qué]
- [Nombre]: [Rol] - Aprueba [qué]

**Proceso de Feedback:**
- Rounds de revisión permitidos: [2-3]
- Método de feedback: [Milanote/Figma/Emails]
- Tiempo de respuesta esperado: [24-48hrs]

## 9. WHAT TO AVOID

**No hacer:**
- [Estilo/técnica que el cliente rechaza]
- [Competidores que NO queremos emular]
- [Tropes o clichés específicos del sector]

**Restricciones de Marca:**
- [Elementos visuales prohibidos]
- [Tratamientos de logo no permitidos]
```

---

## 0.2 RESEARCH & COMPETITIVE ANALYSIS

Antes de diseñar, investigar exhaustivamente:

### Framework de Análisis Competitivo

```markdown
# ANÁLISIS DE REFERENTES

## Awwwards Winners Analysis

### [Sitio 1: Igloo Inc - SOTY 2024]
**URL:** igloo.inc

**Stack Técnico Identificado:**
- Three.js + Custom WebGL
- GSAP + ScrollTrigger
- Svelte framework
- Custom shader pipeline
- Houdini/Blender assets

**Deconstructión de Escenas:**

ESCENA 1: Hero Landing
- 3D character central animado (loop idle)
- Partículas flotantes de fondo
- Parallax multi-capa en scroll
- Transición líquida al scrollear
- Tiempo en pantalla: ~3-5 segundos antes de scroll

Técnicas Clave:
- WebGL UI elements renderizados en shaders
- Simulación de fluidos para transiciones
- Hot-reload system para iteración rápida
- Geometry optimization (custom exporters)

ESCENA 2: Product Showcase
- Cámara orbital automatizada
- Productos en 3D con texturas PBR
- Reveal secuencial con stagger
- Interactive drag/rotate opcional

Técnicas Clave:
- Camera path animation con easing custom
- Texture streaming progresivo
- Event-driven interaction layers

ESCENA 3: Information Panels
- Scroll horizontal pinned
- Tarjetas con depth y sombras
- Elementos que emergen según proximidad
- Micro-interactions en hover

Técnicas Clave:
- Horizontal scroll con snap points
- Intersection Observer para triggers
- Transform-based animations (GPU accelerated)

**Performance Metrics:**
- Lighthouse Score: 95+
- Time to Interactive: <2.5s
- FPS: Stable 60fps
- Bundle Size: ~1.2MB (initial), 3MB (total loaded)

**Lecciones Aplicables:**
1. Priorizar performance desde día 1
2. Custom tooling acelera iteración
3. Simplicidad en geometría, complejidad en shaders
4. Progressive enhancement strategy

### [Sitio 2: Apple Vision Pro Site]
**Escenas Identificadas:** 7 secciones principales

ESCENA 1: Cinematic Intro
- Video de alta calidad (optimizado VP9/HEVC)
- Scrubbing sincronizado con scroll
- Text overlay con timing preciso

ESCENA 2: Product 3D Viewer
- Modelo 3D de alta fidelidad
- IBL (Image-Based Lighting) realista
- Annotations interactivas
- Zoom/Pan suave

ESCENA 3: Feature Deep-Dives
- Splitscreen animations
- Canvas vs realidad comparisons
- Morphing transitions

**Tech Stack Detectado:**
- Custom WebGL engine
- Video scrubbing via Canvas API
- DRACO compression para 3D
- Adaptive loading por device capability

**Lecciones:**
1. Video > 3D cuando sea posible (mejor calidad/peso)
2. Narrative pacing es crucial
3. Accesibilidad nunca comprometida
4. Graceful degradation en devices antiguos

## PATTERN LIBRARY EXTRACTION

De todos los sitios analizados, extraer:

**Scroll Patterns:**
- Pin sections: [técnica, timing]
- Horizontal scrollers: [implementación preferida]
- Parallax multi-layer: [offset ratios típicos]
- Scroll-jacking: [cuándo evitar]

**3D Interaction Patterns:**
- Orbit controls: [sensibilidad estándar]
- Drag-to-rotate: [inercia física]
- Zoom behaviors: [limits razonables]
- Camera animations: [duraciones típicas]

**Transition Patterns:**
- Scene transitions: [fade, wipe, morph]
- Element reveals: [slide, scale, fade]
- State changes: [duración óptima 300-500ms]

**Loading Strategies:**
- Progressive enhancement
- Skeleton screens
- Lazy loading thresholds
- Preloading critical assets
```

---

# FASE 1: STORYBOARDING Y DISEÑO DE ESCENAS

## 1.1 NARRATIVE ARC - Arquitectura de Escenas

Una experiencia web award-winning es una HISTORIA contada en escenas. Cada escena tiene propósito narrativo, emocional y funcional.

### Framework: 7-Scene Structure (Estructura Cinematográfica)

```markdown
# STORYBOARD MASTER

## ACT I: HOOK (Primera Impresión - 0-10s)

### ESCENA 1: HERO / SPLASH
**Duración:** 3-8 segundos en viewport
**Objetivo Narrativo:** Capturar atención, establecer tono
**Objetivo Emocional:** WOW factor, curiosidad
**Objetivo Funcional:** Brand recognition, value proposition

**Elementos Visuales:**
- [ ] Hero element (3D object, typography, video)
- [ ] Background (gradient, particles, 3D environment)
- [ ] CTA primario (scroll indicator, button)
- [ ] Brand logo (position, size)

**Animaciones Entrada:**
```javascript
Timeline Hero:
0.0s -> Logo fade in (opacity 0 to 1, 0.8s, ease-out)
0.3s -> Hero element reveal (y: 100 to 0, 1.2s, power3.out)
0.5s -> Background particles activate
1.0s -> Tagline type-in effect (char by char, 0.05s cada)
2.0s -> CTA pulse animation (loop)
```

**Interactividad:**
- Mouse parallax (hero element sigue cursor)
- Scroll trigger: > 10% scrolled -> transición a Escena 2

**Assets Requeridos:**
- hero_model.glb (3D asset, <500KB)
- hero_bg_texture.ktx2 (compressed texture)
- logo.svg
- particles.json (Lottie animation)

**Código Scaffold:**
```javascript
class HeroScene {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, w/h, 0.1, 100);
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    this.initLighting();
    this.loadModel();
    this.setupAnimations();
    this.setupScrollTrigger();
  }

  initLighting() {
    // IBL environment map
    const envMap = new THREE.CubeTextureLoader().load([/* paths */]);
    this.scene.environment = envMap;
    
    // Key light
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(5, 5, 5);
    this.scene.add(keyLight);
  }

  async loadModel() {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);

    const gltf = await loader.loadAsync('/models/hero_model.glb');
    this.model = gltf.scene;
    this.scene.add(this.model);

    this.playIntroAnimation();
  }

  playIntroAnimation() {
    const tl = gsap.timeline();
    tl.from(this.model.position, {
      y: 5,
      duration: 1.2,
      ease: 'power3.out'
    })
    .from(this.model.rotation, {
      y: Math.PI * 2,
      duration: 1.5,
      ease: 'power2.out'
    }, '<0.2');
  }

  setupScrollTrigger() {
    ScrollTrigger.create({
      trigger: this.container,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        // Parallax effect
        this.model.position.y = self.progress * -2;
        this.model.rotation.y = self.progress * Math.PI * 0.5;
      }
    });
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
```

---

### ESCENA 2: PROBLEM/CONTEXT
**Duración:** 10-20 segundos en viewport
**Objetivo Narrativo:** Establecer el problema/necesidad
**Objetivo Emocional:** Empatía, identificación
**Objetivo Funcional:** Educar, crear tensión narrativa

**Elementos Visuales:**
- [ ] Split-screen comparison (before/after, problem/solution)
- [ ] Data visualization animada
- [ ] Iconografía ilustrativa
- [ ] Text blocks con kinetic typography

**Estructura de Contenido:**
```
├── Header: "The Challenge"
├── Statistic 1: "75% de usuarios abandonan..." (animado)
├── Statistic 2: "Solo 3 segundos de atención..." (animado)
├── Visual Metaphor: (animación conceptual del problema)
└── Transition Hook: "Pero, ¿y si..." (lead-in a Escena 3)
```

**Animaciones:**
```javascript
Timeline Problem:
- Entrada: Fade in de background
- Stagger statistics (0.3s offset entre cada uno)
- Count-up animation en números
- Visual metaphor: loop de frustración (ej: loading infinito)
- Exit: Elementos se disuelven hacia centro para transición
```

**Pattern:** Scroll-Triggered Reveals

```javascript
gsap.utils.toArray('.stat').forEach((stat, i) => {
  gsap.from(stat, {
    scrollTrigger: {
      trigger: stat,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1
    },
    y: 100,
    opacity: 0,
    scale: 0.8
  });

  // Count-up animation
  const number = stat.querySelector('.number');
  const target = parseFloat(number.dataset.target);
  
  ScrollTrigger.create({
    trigger: stat,
    start: 'top 60%',
    onEnter: () => {
      gsap.to(number, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        ease: 'power1.out'
      });
    }
  });
});
```

---

### ESCENA 3: SOLUTION REVEAL
**Duración:** 15-30 segundos
**Objetivo Narrativo:** Presentar producto/solución
**Objetivo Emocional:** Esperanza, excitación
**Objetivo Funcional:** Product showcase, feature highlights

**Concepto Visual:** "Unboxing Experience"

**Elementos:**
- [ ] 3D product model (alta fidelidad)
- [ ] Feature callouts (annotations 3D)
- [ ] Particles/light rays de "revelación"
- [ ] Sound design (opcional pero impactante)

**Interacción:**
- Auto-rotate del producto (lento, elegante)
- Hotspots clicables para features
- Zoom in/out con scroll
- Pausar auto-rotate en mouse over

**Implementación Técnica:**

```javascript
class ProductShowcase {
  constructor() {
    this.setupScene();
    this.loadProduct();
    this.createAnnotations();
    this.setupCameraAnimation();
  }

  setupScene() {
    // PBR rendering setup
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    // Realistic lighting
    const hdrLoader = new RGBELoader();
    hdrLoader.load('/env/studio.hdr', (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      this.scene.environment = texture;
    });
  }

  loadProduct() {
    // Product model con materiales PBR
    const loader = new GLTFLoader();
    loader.load('/models/product.glb', (gltf) => {
      this.product = gltf.scene;
      
      // Encontrar y configurar materiales
      this.product.traverse((child) => {
        if (child.isMesh) {
          child.material.envMapIntensity = 1.5;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      this.scene.add(this.product);
      this.animateReveal();
    });
  }

  animateReveal() {
    // Partículas de revelación
    const particles = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({ 
        color: 0xffffff, 
        size: 0.05,
        transparent: true 
      })
    );

    const positions = [];
    for (let i = 0; i < 1000; i++) {
      positions.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
    }
    particles.geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );

    this.scene.add(particles);

    // Timeline de revelación
    const tl = gsap.timeline();

    tl.from(particles.material, {
      opacity: 0,
      duration: 1.5
    })
    .to(particles.position, {
      y: 5,
      duration: 2,
      ease: 'power2.out'
    }, '<')
    .from(this.product.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1.5,
      ease: 'back.out(1.7)'
    }, '-=1')
    .to(particles.material, {
      opacity: 0,
      duration: 1
    }, '-=0.5');
  }

  createAnnotations() {
    // Hotspots 3D para features
    const features = [
      { position: [1, 0.5, 0], title: 'Feature 1', desc: '...' },
      { position: [-1, 0, 0], title: 'Feature 2', desc: '...' },
      { position: [0, 1, 0.5], title: 'Feature 3', desc: '...' }
    ];

    features.forEach((feat, i) => {
      const hotspot = this.createHotspot(feat);
      this.product.add(hotspot);
      
      // Animate hotspots con delay
      gsap.from(hotspot.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5,
        delay: 2 + (i * 0.2),
        ease: 'back.out(2)'
      });
    });
  }

  createHotspot(feature) {
    const hotspot = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 16, 16),
      new THREE.MeshBasicMaterial({ 
        color: 0x00ff00,
        transparent: true,
        opacity: 0.8
      })
    );
    
    hotspot.position.set(...feature.position);
    hotspot.userData = { feature };

    // Pulse animation continuo
    gsap.to(hotspot.scale, {
      x: 1.3,
      y: 1.3,
      z: 1.3,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return hotspot;
  }

  setupCameraAnimation() {
    // Orbit camera path
    const cameraPath = new THREE.CatmullRomCurve3([
      new THREE.Vector3(3, 1, 3),
      new THREE.Vector3(3, 1, -3),
      new THREE.Vector3(-3, 1, -3),
      new THREE.Vector3(-3, 1, 3)
    ], true);

    ScrollTrigger.create({
      trigger: '.product-section',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 2,
      onUpdate: (self) => {
        const point = cameraPath.getPoint(self.progress);
        this.camera.position.copy(point);
        this.camera.lookAt(0, 0, 0);
      }
    });
  }
}
```

---

### ESCENA 4: FEATURES DEEP-DIVE
**Duración:** 30-60 segundos (section más larga)
**Objetivo:** Explicar features en detalle
**Pattern:** Horizontal Scroll Gallery

**Estructura:**
```
[Panel 1: Feature A] -> [Panel 2: Feature B] -> [Panel 3: Feature C] -> [Panel 4: Feature D]
```

Cada panel:
- Visual principal (video, 3D, ilustración)
- Headline
- 2-3 bullet points
- Micro-interaction única

**Implementación Horizontal Scroll:**

```javascript
class HorizontalScrollSection {
  constructor(container) {
    this.container = container;
    this.panels = gsap.utils.toArray('.panel');
    this.setup();
  }

  setup() {
    const totalWidth = this.panels.length * window.innerWidth;
    
    gsap.to(this.panels, {
      xPercent: -100 * (this.panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: this.container,
        pin: true,
        scrub: 1,
        snap: 1 / (this.panels.length - 1),
        end: () => `+=${totalWidth}`
      }
    });

    // Animar contenido de cada panel individualmente
    this.panels.forEach((panel, i) => {
      const content = panel.querySelectorAll('.animate-in');
      
      gsap.from(content, {
        scrollTrigger: {
          trigger: panel,
          containerAnimation: gsap.getById('horizontal'),
          start: 'left center',
          end: 'right center',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
      });
    });
  }
}
```

---

### ESCENA 5: SOCIAL PROOF
**Duración:** 10-15 segundos
**Objetivo:** Credibilidad, validación
**Elementos:**
- Testimonials carousel
- Logo wall (partners/clients)
- Statistics con count-up
- Awards badges

**Pattern:** Infinite Marquee

```javascript
class InfiniteMarquee {
  constructor(selector) {
    this.track = document.querySelector(selector);
    this.items = [...this.track.children];
    this.clone();
    this.animate();
  }

  clone() {
    // Duplicar items para loop seamless
    this.items.forEach(item => {
      const clone = item.cloneNode(true);
      this.track.appendChild(clone);
    });
  }

  animate() {
    const totalWidth = this.track.scrollWidth / 2;
    
    gsap.to(this.track, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });

    // Pause on hover
    this.track.addEventListener('mouseenter', () => {
      gsap.to(this.track, { timeScale: 0, duration: 0.5 });
    });

    this.track.addEventListener('mouseleave', () => {
      gsap.to(this.track, { timeScale: 1, duration: 0.5 });
    });
  }
}
```

---

### ESCENA 6: CTA / CONVERSION
**Duración:** 8-12 segundos
**Objetivo:** Conversión, acción
**Elementos:**
- CTA button primario (oversized, animado)
- Benefit recap (3 puntos clave)
- Urgency element (opcional: "Limited time", "Join 10,000+ users")

**Animación CTA Button:**

```javascript
// Magnetic button effect
class MagneticButton {
  constructor(el) {
    this.el = el;
    this.strength = 0.3;
    
    this.el.addEventListener('mousemove', this.onMove.bind(this));
    this.el.addEventListener('mouseleave', this.onLeave.bind(this));
  }

  onMove(e) {
    const rect = this.el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * this.strength;
    const deltaY = (e.clientY - centerY) * this.strength;

    gsap.to(this.el, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out'
    });
  }

  onLeave() {
    gsap.to(this.el, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  }
}
```

---

### ESCENA 7: FOOTER / CLOSURE
**Duración:** N/A (sticky)
**Objetivo:** Navigation, información adicional
**Elementos:**
- Links (About, Contact, Legal)
- Social icons
- Newsletter signup
- Back to top button

---

## 1.2 STORYBOARD VISUAL DOCUMENT

Para cada escena, crear un storyboard visual:

```markdown
# STORYBOARD PANEL TEMPLATE

## [ESCENA X: Nombre]

### Frame 1: Estado Inicial (T=0s)
┌─────────────────────────────────┐
│                                 │
│     [Sketch/Screenshot]         │
│                                 │
│   - Elemento A en posición X    │
│   - Elemento B oculto           │
│   - Background estado inicial   │
│                                 │
└─────────────────────────────────┘

**Descripción:**
Usuario llega/scrollea a la sección.
Todos elementos en estado pre-animación.

**Assets visibles:**
- hero_bg.jpg
- logo.svg

---

### Frame 2: Animación en Progreso (T=1.5s)
┌─────────────────────────────────┐
│                                 │
│     [Sketch con motion arrows]  │
│                                 │
│   → Elemento A desliza          │
│   ↗ Elemento B escala           │
│   ≈ Background blur aumenta     │
│                                 │
└─────────────────────────────────┘

**Timing Breakdown:**
0.0s - 0.5s: Fade in background
0.3s - 1.2s: Elemento A slide (y: 100 → 0)
0.5s - 1.5s: Elemento B scale (0 → 1)

**Easing:**
- Elemento A: power3.out
- Elemento B: back.out(1.7)

---

### Frame 3: Estado Final (T=3s)
┌─────────────────────────────────┐
│                                 │
│     [Sketch estado completo]    │
│                                 │
│   ✓ Todo visible y positioned   │
│   ∞ Loop animations active      │
│   ⚡ Interactive ready           │
│                                 │
└─────────────────────────────────┘

**Interacciones Activas:**
- Mouse parallax en Elemento A
- Hover effects en CTA buttons
- Scroll trigger configurado para próxima escena

**Performance Target:**
- FPS: 60fps stable
- Paint time: <16ms
- Layout shifts: 0

---

### CODIGO IMPLEMENTATION CHECKLIST
- [ ] HTML structure
- [ ] CSS base styles  
- [ ] GSAP timeline setup
- [ ] ScrollTrigger configuration
- [ ] Event listeners
- [ ] Responsive breakpoints
- [ ] Performance testing
```

---

# FASE 2: DESARROLLO TÉCNICO - ARQUITECTURA DE CÓDIGO

## 2.1 PROJECT STRUCTURE - Organización de Archivos

```
project-root/
│
├── src/
│   ├── scenes/              # Cada escena = módulo independiente
│   │   ├── Scene01_Hero.js
│   │   ├── Scene02_Problem.js
│   │   ├── Scene03_Solution.js
│   │   ├── Scene04_Features.js
│   │   ├── Scene05_Proof.js
│   │   ├── Scene06_CTA.js
│   │   └── Scene07_Footer.js
│   │
│   ├── core/                # Sistema central
│   │   ├── SceneManager.js     # Orquestador de escenas
│   │   ├── AssetLoader.js      # Carga optimizada de assets
│   │   ├── PerformanceMonitor.js
│   │   └── StateManager.js     # Estado global app
│   │
│   ├── components/          # Componentes reutilizables
│   │   ├── 3d/
│   │   │   ├── ThreeScene.js
│   │   │   ├── Model.js
│   │   │   └── ParticleSystem.js
│   │   ├── animations/
│   │   │   ├── ScrollAnimations.js
│   │   │   ├── TransitionEffects.js
│   │   │   └── MicroInteractions.js
│   │   └── ui/
│   │       ├── Button.js
│   │       ├── Card.js
│   │       └── Modal.js
│   │
│   ├── shaders/             # GLSL shaders
│   │   ├── vertex/
│   │   │   ├── basic.vert
│   │   │   ├── displacement.vert
│   │   │   └── morph.vert
│   │   └── fragment/
│   │       ├── pbr.frag
│   │       ├── liquid.frag
│   │       └── distortion.frag
│   │
│   ├── utils/               # Utilidades
│   │   ├── math.js
│   │   ├── easing.js
│   │   ├── deviceDetection.js
│   │   └── webgl-utils.js
│   │
│   ├── assets/              # Assets fuente
│   │   ├── models/
│   │   ├── textures/
│   │   ├── videos/
│   │   └── audio/
│   │
│   └── main.js              # Entry point
│
├── public/                  # Assets compilados
│   ├── models/
│   ├── textures/
│   └── fonts/
│
├── docs/                    # Documentación
│   ├── STORYBOARD.md
│   ├── TECHNICAL_SPEC.md
│   └── PERFORMANCE_GUIDE.md
│
├── tests/
│   ├── unit/
│   └── performance/
│
├── vite.config.js
├── package.json
└── README.md
```

---

## 2.2 CORE SYSTEM ARCHITECTURE

### SceneManager - Orquestador Central

```javascript
/**
 * SceneManager
 * Gestiona el ciclo de vida de todas las escenas,
 * transiciones entre ellas y estado global.
 */

class SceneManager {
  constructor() {
    this.scenes = new Map();
    this.currentScene = null;
    this.isTransitioning = false;
    this.globalTimeline = gsap.timeline();
    
    this.init();
  }

  init() {
    this.registerScenes();
    this.setupScrollObserver();
    this.setupResizeHandler();
    this.startRenderLoop();
  }

  /**
   * Registrar todas las escenas del proyecto
   */
  registerScenes() {
    // Importar escenas dinámicamente
    const sceneModules = import.meta.glob('./scenes/*.js');
    
    Object.entries(sceneModules).forEach(async ([path, importScene]) => {
      const SceneClass = (await importScene()).default;
      const sceneName = path.match(/Scene\d+_(\w+)/)?.[1];
      
      if (sceneName) {
        const scene = new SceneClass({
          container: document.querySelector(`#scene-${sceneName.toLowerCase()}`),
          manager: this
        });
        
        this.scenes.set(sceneName, scene);
      }
    });
  }

  /**
   * Observar qué escena está en viewport
   */
  setupScrollObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.25, 0.5, 0.75, 1.0]
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sceneName = entry.target.dataset.scene;
        const scene = this.scenes.get(sceneName);
        
        if (!scene) return;

        if (entry.isIntersecting) {
          // Escena visible
          if (entry.intersectionRatio > 0.5) {
            this.activateScene(sceneName);
          }
          scene.onEnterViewport?.();
        } else {
          // Escena fuera de vista
          scene.onExitViewport?.();
        }

        // Update scene visibility progress
        scene.visibilityProgress = entry.intersectionRatio;
      });
    }, observerOptions);

    // Observar todos los containers de escenas
    this.scenes.forEach((scene, name) => {
      if (scene.container) {
        scene.container.dataset.scene = name;
        this.observer.observe(scene.container);
      }
    });
  }

  /**
   * Activar escena (hacer current, start animations, etc)
   */
  activateScene(sceneName) {
    if (this.currentScene === sceneName || this.isTransitioning) return;

    const previousScene = this.scenes.get(this.currentScene);
    const nextScene = this.scenes.get(sceneName);

    this.isTransitioning = true;

    // Lifecycle hooks
    previousScene?.onDeactivate?.();
    nextScene?.onActivate?.();

    this.currentScene = sceneName;
    this.isTransitioning = false;

    // Emit event para analytics/debugging
    this.emit('sceneChange', { 
      from: this.currentScene, 
      to: sceneName 
    });
  }

  /**
   * Responsive handler
   */
  setupResizeHandler() {
    let resizeTimer;
    
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      
      resizeTimer = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.scenes.forEach(scene => {
          scene.onResize?.(width, height);
        });
      }, 250);
    });
  }

  /**
   * Main render loop
   */
  startRenderLoop() {
    const tick = (time) => {
      // Update todas las escenas activas
      this.scenes.forEach((scene, name) => {
        if (scene.visibilityProgress > 0) {
          scene.update?.(time);
        }
      });

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  /**
   * Event emitter simple
   */
  emit(event, data) {
    window.dispatchEvent(new CustomEvent(event, { detail: data }));
  }

  /**
   * Preload crítico antes de mostrar sitio
   */
  async preloadCritical() {
    const criticalAssets = [
      '/models/hero.glb',
      '/textures/env.hdr',
      '/fonts/primary.woff2'
    ];

    const loader = new AssetLoader();
    await loader.loadMultiple(criticalAssets, (progress) => {
      this.updateLoadingBar(progress);
    });
  }

  updateLoadingBar(progress) {
    const bar = document.querySelector('.loading-bar');
    gsap.to(bar, { 
      scaleX: progress, 
      duration: 0.3,
      ease: 'power2.out'
    });

    if (progress >= 1) {
      this.hideLoader();
    }
  }

  hideLoader() {
    const loader = document.querySelector('.loader');
    gsap.to(loader, {
      opacity: 0,
      duration: 0.8,
      onComplete: () => {
        loader.style.display = 'none';
        this.startExperience();
      }
    });
  }

  startExperience() {
    // Iniciar primera escena
    const firstScene = this.scenes.get('Hero');
    firstScene?.playIntro?.();
  }
}

// Singleton export
export default new SceneManager();
```

---

### AssetLoader - Gestión de Assets Optimizada

```javascript
/**
 * AssetLoader
 * Carga inteligente de assets con:
 * - Priorización
 * - Caching
 * - Progressive loading
 * - Error handling robusto
 */

class AssetLoader {
  constructor() {
    this.cache = new Map();
    this.loading = new Map();
    this.loaders = this.initializeLoaders();
  }

  initializeLoaders() {
    return {
      gltf: new GLTFLoader(),
      texture: new THREE.TextureLoader(),
      cube: new THREE.CubeTextureLoader(),
      hdr: new RGBELoader(),
      audio: new THREE.AudioLoader(),
      json: fetch.bind(window)
    };
  }

  /**
   * Detectar tipo de asset por extensión
   */
  getAssetType(url) {
    const ext = url.split('.').pop().toLowerCase();
    const typeMap = {
      'glb': 'gltf',
      'gltf': 'gltf',
      'jpg': 'texture',
      'jpeg': 'texture',
      'png': 'texture',
      'webp': 'texture',
      'hdr': 'hdr',
      'mp3': 'audio',
      'wav': 'audio',
      'json': 'json'
    };
    return typeMap[ext] || 'unknown';
  }

  /**
   * Cargar asset individual
   */
  async load(url, options = {}) {
    // Check cache
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }

    // Check si ya está cargando
    if (this.loading.has(url)) {
      return this.loading.get(url);
    }

    const type = options.type || this.getAssetType(url);
    const loader = this.loaders[type];

    if (!loader) {
      throw new Error(`No loader for type: ${type}`);
    }

    // Crear promise de carga
    const loadPromise = new Promise((resolve, reject) => {
      if (type === 'json') {
        fetch(url)
          .then(res => res.json())
          .then(resolve)
          .catch(reject);
      } else {
        loader.load(
          url,
          (asset) => {
            this.cache.set(url, asset);
            this.loading.delete(url);
            resolve(asset);
          },
          (progress) => {
            options.onProgress?.(progress);
          },
          (error) => {
            this.loading.delete(url);
            reject(error);
          }
        );
      }
    });

    this.loading.set(url, loadPromise);
    return loadPromise;
  }

  /**
   * Cargar múltiples assets con progreso agregado
   */
  async loadMultiple(urls, onProgress) {
    const total = urls.length;
    let loaded = 0;

    const updateProgress = () => {
      loaded++;
      onProgress?.(loaded / total);
    };

    const promises = urls.map(async (url) => {
      try {
        const asset = await this.load(url);
        updateProgress();
        return { url, asset, success: true };
      } catch (error) {
        updateProgress();
        console.error(`Failed to load: ${url}`, error);
        return { url, error, success: false };
      }
    });

    return Promise.all(promises);
  }

  /**
   * Preload con prioridad
   */
  async loadByPriority(assetMap) {
    // assetMap = { critical: [...], high: [...], low: [...] }
    
    // 1. Critical (bloqueante)
    await this.loadMultiple(assetMap.critical || []);
    
    // 2. High (importante pero no bloqueante)
    setTimeout(() => {
      this.loadMultiple(assetMap.high || []);
    }, 100);
    
    // 3. Low (lazy load)
    setTimeout(() => {
      this.loadMultiple(assetMap.low || []);
    }, 2000);
  }

  /**
   * Liberar memoria
   */
  dispose(url) {
    const asset = this.cache.get(url);
    
    if (asset) {
      // Dispose basado en tipo
      if (asset.dispose) {
        asset.dispose();
      }
      if (asset.geometry) {
        asset.geometry.dispose();
      }
      if (asset.material) {
        if (Array.isArray(asset.material)) {
          asset.material.forEach(m => m.dispose());
        } else {
          asset.material.dispose();
        }
      }
      
      this.cache.delete(url);
    }
  }

  /**
   * Clear entire cache
   */
  clearCache() {
    this.cache.forEach((asset, url) => {
      this.dispose(url);
    });
    this.cache.clear();
  }
}

export default AssetLoader;
```

---

### PerformanceMonitor - Monitoreo en Tiempo Real

```javascript
/**
 * PerformanceMonitor
 * Tracking de performance metrics:
 * - FPS
 * - Memory usage
 * - Draw calls
 * - Frame time
 * - Optimization suggestions
 */

class PerformanceMonitor {
  constructor(options = {}) {
    this.enabled = options.enabled ?? true;
    this.showPanel = options.showPanel ?? false;
    
    this.metrics = {
      fps: 0,
      frameTime: 0,
      memory: 0,
      drawCalls: 0
    };

    this.thresholds = {
      fps: { good: 55, warn: 30, bad: 20 },
      frameTime: { good: 16, warn: 33, bad: 50 },
      memory: { good: 50, warn: 100, bad: 200 } // MB
    };

    this.history = {
      fps: [],
      frameTime: [],
      maxHistoryLength: 60
    };

    if (this.enabled) {
      this.init();
    }
  }

  init() {
    // Stats.js integration
    if (this.showPanel && typeof Stats !== 'undefined') {
      this.stats = new Stats();
      this.stats.showPanel(0); // FPS
      document.body.appendChild(this.stats.dom);
    }

    // Custom monitoring
    this.lastTime = performance.now();
    this.frames = 0;
    
    this.startMonitoring();
  }

  startMonitoring() {
    const monitor = () => {
      const now = performance.now();
      const delta = now - this.lastTime;

      // FPS calculation
      this.frames++;
      if (delta >= 1000) {
        this.metrics.fps = Math.round((this.frames * 1000) / delta);
        this.metrics.frameTime = delta / this.frames;
        
        // Add to history
        this.addToHistory('fps', this.metrics.fps);
        this.addToHistory('frameTime', this.metrics.frameTime);

        this.frames = 0;
        this.lastTime = now;

        // Memory (si está disponible)
        if (performance.memory) {
          this.metrics.memory = Math.round(
            performance.memory.usedJSHeapSize / 1048576
          );
        }

        // Check thresholds y warnings
        this.checkPerformance();
      }

      if (this.stats) {
        this.stats.update();
      }

      requestAnimationFrame(monitor);
    };

    requestAnimationFrame(monitor);
  }

  addToHistory(metric, value) {
    this.history[metric].push(value);
    if (this.history[metric].length > this.history.maxHistoryLength) {
      this.history[metric].shift();
    }
  }

  checkPerformance() {
    const issues = [];

    // FPS check
    if (this.metrics.fps < this.thresholds.fps.bad) {
      issues.push({
        type: 'critical',
        metric: 'fps',
        value: this.metrics.fps,
        message: 'FPS crítico (<20). Reducir complejidad visual.',
        suggestions: [
          'Reducir partículas',
          'Simplificar geometrías 3D',
          'Deshabilitar sombras/reflections',
          'Reducir resolución textures'
        ]
      });
    } else if (this.metrics.fps < this.thresholds.fps.warn) {
      issues.push({
        type: 'warning',
        metric: 'fps',
        value: this.metrics.fps,
        message: 'FPS bajo (<30). Performance sub-óptimo.',
        suggestions: [
          'Revisar draw calls',
          'Optimizar shaders',
          'Implement LOD system'
        ]
      });
    }

    // Frame time check
    if (this.metrics.frameTime > this.thresholds.frameTime.bad) {
      issues.push({
        type: 'critical',
        metric: 'frameTime',
        value: this.metrics.frameTime,
        message: 'Frame time muy alto (>50ms)',
        suggestions: [
          'Profiling con Chrome DevTools',
          'Revisar loops costosos',
          'Batch operations'
        ]
      });
    }

    // Memory check
    if (this.metrics.memory > this.thresholds.memory.bad) {
      issues.push({
        type: 'critical',
        metric: 'memory',
        value: this.metrics.memory,
        message: 'Uso de memoria alto (>200MB)',
        suggestions: [
          'Memory leak check',
          'Dispose unused assets',
          'Clear texture cache'
        ]
      });
    }

    if (issues.length > 0) {
      this.reportIssues(issues);
    }
  }

  reportIssues(issues) {
    // Log en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.group('⚠️ Performance Issues Detected');
      issues.forEach(issue => {
        const icon = issue.type === 'critical' ? '🔴' : '🟡';
        console.log(`${icon} ${issue.message}`);
        console.log(`   Current: ${issue.value}`);
        console.log(`   Suggestions:`, issue.suggestions);
      });
      console.groupEnd();
    }

    // Enviar a analytics en producción
    if (process.env.NODE_ENV === 'production') {
      this.sendToAnalytics(issues);
    }
  }

  sendToAnalytics(issues) {
    // Implementar según analytics platform (GA4, Mixpanel, etc)
    window.gtag?.('event', 'performance_issue', {
      issues: issues.map(i => ({
        type: i.type,
        metric: i.metric,
        value: i.value
      }))
    });
  }

  /**
   * Get average metrics
   */
  getAverages() {
    const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
    
    return {
      fps: avg(this.history.fps),
      frameTime: avg(this.history.frameTime)
    };
  }

  /**
   * Get current status
   */
  getStatus() {
    const avgFps = this.getAverages().fps;
    
    if (avgFps >= this.thresholds.fps.good) return 'good';
    if (avgFps >= this.thresholds.fps.warn) return 'warn';
    return 'bad';
  }

  /**
   * Destroy monitor
   */
  destroy() {
    if (this.stats?.dom) {
      document.body.removeChild(this.stats.dom);
    }
  }
}

export default PerformanceMonitor;
```

---

## 2.3 SCENE BASE CLASS - Template para Todas las Escenas

```javascript
/**
 * Scene Base Class
 * Todas las escenas heredan de esta clase base
 */

class SceneBase {
  constructor(options = {}) {
    this.container = options.container;
    this.manager = options.manager;
    this.name = this.constructor.name;
    
    // State
    this.isActive = false;
    this.visibilityProgress = 0;
    this.assets = new Map();
    
    // Timelines
    this.introTimeline = null;
    this.loopTimeline = null;
    this.outroTimeline = null;
    
    // Lifecycle
    this.onInit?.();
  }

  /**
   * Lifecycle: Escena entra en viewport
   */
  onEnterViewport() {
    console.log(`[${this.name}] Entered viewport`);
    
    if (!this.isActive && this.introTimeline) {
      this.introTimeline.play();
    }
  }

  /**
   * Lifecycle: Escena sale de viewport
   */
  onExitViewport() {
    console.log(`[${this.name}] Exited viewport`);
    
    // Pausar animaciones costosas
    this.loopTimeline?.pause();
  }

  /**
   * Lifecycle: Escena se vuelve la activa (>50% visible)
   */
  onActivate() {
    console.log(`[${this.name}] Activated`);
    this.isActive = true;
    
    // Start loop animations
    this.loopTimeline?.play();
  }

  /**
   * Lifecycle: Escena deja de ser activa
   */
  onDeactivate() {
    console.log(`[${this.name}] Deactivated`);
    this.isActive = false;
  }

  /**
   * Update loop (llamado cada frame)
   */
  update(time) {
    // Override en subclases
  }

  /**
   * Resize handler
   */
  onResize(width, height) {
    // Override en subclases
  }

  /**
   * Load assets específicos de la escena
   */
  async loadAssets(urls) {
    const loader = this.manager.assetLoader;
    const results = await loader.loadMultiple(urls);
    
    results.forEach(({ url, asset, success }) => {
      if (success) {
        this.assets.set(url, asset);
      }
    });
  }

  /**
   * Destroy/cleanup
   */
  destroy() {
    // Kill timelines
    this.introTimeline?.kill();
    this.loopTimeline?.kill();
    this.outroTimeline?.kill();
    
    // Dispose assets
    this.assets.forEach((asset, url) => {
      this.manager.assetLoader.dispose(url);
    });
    
    this.assets.clear();
  }
}

export default SceneBase;
```

---

## 2.4 EJEMPLO COMPLETO: Scene Implementation

```javascript
/**
 * Scene03_Solution.js
 * Product showcase con 3D model + annotations
 */

import SceneBase from '../core/SceneBase.js';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default class Scene03_Solution extends SceneBase {
  onInit() {
    this.setupThreeJS();
    this.loadProduct();
    this.createAnnotations();
    this.setupInteractions();
    this.setupScrollAnimations();
  }

  setupThreeJS() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a0a);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(3, 1.5, 3);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.appendChild(this.renderer.domElement);

    // Lights
    this.setupLighting();

    // Controls (opcional - puede ser automático)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enableZoom = false; // Zoom via scroll instead
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 1.0;

    // Render loop
    this.renderLoop();
  }

  setupLighting() {
    // Ambient light
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambient);

    // Key light
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(5, 5, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    this.scene.add(keyLight);

    // Fill light
    const fillLight = new THREE.DirectionalLight(0x4488ff, 0.5);
    fillLight.position.set(-3, 2, -3);
    this.scene.add(fillLight);

    // Rim light
    const rimLight = new THREE.DirectionalLight(0xff8844, 0.3);
    rimLight.position.set(0, 3, -5);
    this.scene.add(rimLight);

    // HDR environment (opcional pero mejora realismo)
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('/textures/studio.hdr', (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      this.scene.environment = texture;
    });
  }

  async loadProduct() {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);

    try {
      const gltf = await loader.loadAsync('/models/product.glb');
      this.product = gltf.scene;

      // Configurar materiales
      this.product.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          // Enhance PBR materials
          if (child.material) {
            child.material.envMapIntensity = 1.5;
            child.material.needsUpdate = true;
          }
        }
      });

      // Ground plane para sombras
      const groundGeo = new THREE.PlaneGeometry(10, 10);
      const groundMat = new THREE.ShadowMaterial({ opacity: 0.3 });
      this.ground = new THREE.Mesh(groundGeo, groundMat);
      this.ground.rotation.x = -Math.PI / 2;
      this.ground.position.y = -0.5;
      this.ground.receiveShadow = true;
      this.scene.add(this.ground);

      // Initial state (hidden para reveal animation)
      this.product.scale.setScalar(0.001);
      this.scene.add(this.product);

      // Play intro when loaded
      this.playIntroAnimation();

    } catch (error) {
      console.error('Failed to load product:', error);
    }
  }

  playIntroAnimation() {
    // Particles para reveal effect
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 5;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMat = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.05,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(particlesGeo, particlesMat);
    this.scene.add(this.particles);

    // Animation timeline
    this.introTimeline = gsap.timeline({
      paused: true,
      onComplete: () => {
        this.scene.remove(this.particles);
        this.controls.autoRotate = true;
      }
    });

    this.introTimeline
      .to(