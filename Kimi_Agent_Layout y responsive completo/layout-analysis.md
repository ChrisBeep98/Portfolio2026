# Análisis de Layout - Portafolio VANK Fintech

## 📐 ESTRUCTURA GENERAL DE LA PÁGINA

### Contenedor Principal
- **Body**: `.body-3` - Fondo gris claro (#f0f0f0 aproximadamente)
- **Ancho máximo**: Contenedor fluido con padding lateral

---

## 🎯 SECCIONES PRINCIPALES (De arriba hacia abajo)

### 1. NAVBAR / HEADER (`.navbar_component`)

**Estructura:**
```
.navbar_component [data-wf--navbar-header--variant="back-btn"]
├── .div-block-55 (Logo CHRISTIAN - izquierda)
│   └── .div-block-12 (Icono SVG)
│   └── .body-extrasmall (Texto "CHRISTIAN")
├── .back-wrapper (Botón ATRÁS - izquierda)
│   └── .div-block-186
│       └── .div-block-187
│           └── .div-block-188 (Icono flecha + "ATRÁS")
└── .div-block-58 (Menú navegación - derecha)
    └── .navbar-menu_wrapper
        ├── .nav-link-3.hover (PROYECTOS)
        ├── .nav-link-3.hover (SOBRE MÍ)
        └── .nav-link-3.hover (CONTÁCTO)
```

**Comportamiento Desktop:**
- Logo + botón ATRÁS alineados a la izquierda
- Menú de navegación alineado a la derecha
- Altura aproximada: 80-100px
- Padding horizontal: ~40-60px

**Comportamiento Mobile:**
- Se colapsa en menú hamburguesa
- Botón ATRÁS permanece visible

---

### 2. HERO / TITLE SECTION (`.grid-desktop.title-wrapper`)

**Estructura CSS Grid:**
```
section.grid-desktop.title-wrapper
├── .div-block-135.tablet-hide (Columna izquierda - Info proyecto)
│   ├── h5.body-large ("Resumen")
│   ├── .div-block-171 (Icono + texto)
│   │   ├── svg.ikonik-gr39v (Icono de enlace)
│   │   └── .body-large ("Una experiencia financiera...")
│   └── ... (más items de info)
├── .div-block-135.top-border (Columna izquierda - Detalles)
│   ├── h5.body-large ("Detalles")
│   ├── h5.body-large ("Servicios", "Fecha", "Entregables")
│   └── .div-block-171 (Icono)
└── .about-hero-block (Columna derecha - Título principal)
    ├── h4.heading-2 ("VANK")
    ├── h4.heading-5.font-grey-100.font-light ("Una plataforma fintech...")
    └── .body-small.font-grey-100.mobile-l-hide.padding-top ("DESKTOP Y MOBILE WEB APP")
```

**Layout Grid Desktop (2 columnas):**
```
| Columna Izquierda (40%) | Columna Derecha (60%) |
|-------------------------|-----------------------|
| Resumen + Detalles      | VANK                  |
| (con iconos y labels)   | Subtítulo             |
|                         | Tag                   |
```

**Especificaciones:**
- Grid: 2 columnas (aprox 40% / 60%)
- Gap entre columnas: ~40-60px
- Padding superior: ~80-100px desde navbar
- Padding lateral: ~60-80px

**Comportamiento Mobile:**
- Se apila en una sola columna
- Orden: Título → Subtítulo → Resumen → Detalles
- Padding reducido: ~20-24px
- Textos más pequeños

---

### 3. SUBTITLE SECTION (`.grid-1.subtitle-wrapper.desktop-hide`)

**Estructura:**
```
.grid-1.subtitle-wrapper
└── .div-block-87.intro--heading
    └── h5.heading-5 ("Una experiencia financiera construida desde cero...")
```

**Especificaciones:**
- Ancho completo
- Texto centrado o alineado a la izquierda
- Padding vertical: ~40-60px
- Se oculta en desktop (`.desktop-hide`)

---

### 4. SECCIÓN 01: EL PUNTO DE PARTIDA (`.grid-1`)

**Estructura:**
```
.grid-1
├── .div-block-87 (Columna izquierda - Número y título)
│   └── h5.heading-5 ("01 EL PUNTO DE PARTIDA")
└── .intro-wrapper.no-padding-bottom (Columna derecha - Descripción)
    └── p (Texto descriptivo largo)
```

**Layout Desktop (2 columnas):**
```
| Col Izq (30-35%) | Col Der (65-70%) |
|------------------|------------------|
| 01               | Texto largo      |
| EL PUNTO DE      | descriptivo...   |
| PARTIDA          |                  |
```

**Comportamiento Mobile:**
- Una columna apilada
- Número y título arriba
- Descripción abajo

---

### 5. SECCIÓN 02: EL PROBLEMA / EL DESAFÍO (`.grid-1`)

**Estructura:**
```
.grid-1
├── .div-block-87 (Columna izquierda)
│   └── h5.heading-5 ("02 EL PROBLEMA / EL DESAFÍO")
└── .problem-wrappper (Columna derecha)
    ├── h5.body-large ("Contexto Inicial.")
    ├── p (Descripción)
    ├── h5.body-large ("Problemas Identificados.")
    └── ul (Lista de problemas)
```

**Layout:** Igual que sección 01 (2 columnas desktop, 1 columna mobile)

---

### 6. SECCIÓN INSIGHTS (`.grid-1.top-conecting-header`)

**Estructura:**
```
.grid-1.top-conecting-header
├── .div-block-101 (Columna izquierda)
│   └── p (Texto introductorio)
└── .insights (Columna derecha)
    ├── h5.body-large ("Insights clave de la investigación.")
    └── ul (Lista de insights)
```

**Layout Desktop (2 columnas):**
- Columna izquierda: Texto introductorio
- Columna derecha: Lista de insights con bullets

---

### 7. SECCIÓN OBJETIVOS (`.grid-1`)

**Estructura:**
```
.grid-1
├── .div-block-101 (Columna izquierda)
│   └── p (Texto introductorio)
└── .div-block-104 (Columna derecha)
    ├── h5.body-large ("Objetivos del proyecto.")
    └── ul (Lista de objetivos)
```

---

### 8. SECCIÓN PROCESO / METODOLOGÍA (`.grid-1`)

**Estructura:**
```
.grid-1
├── .div-block-87 (Columna izquierda - Vacía o con icono)
└── .process (Columna derecha)
    ├── h5.body-large ("Trabajamos como un equipo...")
    └── p (Descripción del proceso)
```

---

### 9. IMAGEN USER PERSONAS (`.grid-1.images-user-personas`)

**Estructura:**
```
.grid-1.images-user-personas
└── img.wireframe (Imagen de wireframes/personas)
```

**Especificaciones:**
- Imagen a ancho completo del contenedor
- Altura proporcional
- Border-radius posible

---

### 10. SECCIÓN SPRINTS / SCRUM (`.grid-1`)

**Estructura:**
```
.grid-1
├── .div-block-101 (Columna izquierda)
│   └── p (Texto introductorio)
└── .div-block-103 (Columna derecha)
    ├── h5.body-large ("Scrum con sprints semanales...")
    └── p (Descripción)
```

---

### 11. SECCIÓN DESIGN SYSTEM (`.grid-1.top-conecting-header`)

**Estructura:**
```
.grid-1.top-conecting-header
└── .div-block-101
    └── p (Texto sobre el Design System)
```

---

### 12. IMAGEN HERO / MOCKUP (`.img-wrapper-02.img-grid`)

**Estructura:**
```
.img-wrapper-02.img-grid
└── .div-block-137
    └── img (Mockup de la app)
```

**Especificaciones:**
- Contenedor de imagen con padding
- Fondo posiblemente diferente (beige/claro)
- Imagen centrada

---

### 13. SECCIÓN EL RESULTADO (`.grid-1`)

**Estructura:**
```
.grid-1
├── .div-block-87 (Columna izquierda)
│   └── h5.heading-5 ("EL RESULTADO")
└── .div-block-106 (Columna derecha)
    └── p (Descripción del resultado)
```

---

### 14. SECCIÓN CAMBIOS CLAVE (`.grid-1.top-conecting-header`)

**Estructura:**
```
.grid-1.top-conecting-header
├── .div-block-101 (Columna izquierda)
│   └── p (Texto introductorio)
└── .div-block-103 (Columna derecha)
    ├── h5.body-large ("Cambios Clave.")
    └── ul (Lista de cambios)
```

---

### 15. MÁS IMÁGENES (`.img-wrapper-02.img-grid.padding-too`)

**Estructura:**
```
.img-wrapper-02.img-grid.padding-too
└── .div-block-137
    └── img (Screenshots de la app)
```

---

### 16. SECCIÓN 05: IMPACTO Y APRENDIZAJES (`.grid-1`)

**Estructura:**
```
.grid-1
├── .div-block-87 (Columna izquierda)
│   └── h5.heading-5 ("05 IMPACTO Y APRENDIZAJES")
└── .div-block-106 (Columna derecha)
    └── p (Descripción)
```

---

### 17. SECCIÓN APRENDIZAJES FINALES (`.grid-1.top-conecting-header`)

**Estructura:**
```
.grid-1.top-conecting-header
├── .div-block-101 (Columna izquierda)
│   └── p (Texto introductorio)
└── .div-block-103 (Columna derecha)
    └── ul (Lista de aprendizajes)
```

---

### 18. SECCIÓN SIGUIENTE PROYECTO (`.div-block-182.only-1`)

**Estructura:**
```
.div-block-182.only-1
└── (Contenido del siguiente proyecto)
```

---

### 19. FOOTER (`.footer.container-15`)

**Estructura:**
```
footer.w-layout-blockcontainer.footer.container-15
├── .cta-block (Columna izquierda)
│   ├── .div-block-83
│   │   ├── svg (Icono)
│   │   └── h5.body-extrasmall.text-light ("ESTOY DISPONIBLE")
│   ├── .div-block-151
│   │   ├── .div-block-218
│   │   │   ├── h1.heading-2.footer-heading ("CONTÁCTAME")
│   │   │   ├── h1.heading-3.font-white-100 ("SI QUIERES...")
│   │   │   └── svg (Icono)
│   │   └── h1.heading-2.footer-heading ("DISEÑAR UNA IDEA")
│   └── .foter-desktop-email-txt
│       └── .body-medium.font-light (Email)
├── .div-block-4 (Columna central - Links)
│   ├── .body-small.footer-small-txt
│   └── .div-block-80 (Social links)
│       ├── a.div-block-79 (LinkedIn)
│       ├── a.div-block-79 (Behance)
│       └── a.div-block-79 (Dribbble)
└── .div-block-222.fte (Columna derecha - Iconos)
    └── svg (Iconos SVG)
```

**Layout Desktop (3 columnas):**
```
| CTA (50%) | Links (25%) | Iconos (25%) |
|-----------|-------------|--------------|
| ESTOY     | Social      | Iconos       |
| DISPONIBLE| links       | decorativos  |
| CONTÁCTAME|             |              |
```

**Comportamiento Mobile:**
- Se apila en una columna
- CTA arriba
- Links sociales debajo
- Copyright al final

---

## 📊 RESUMEN DE LAYOUTS

### Grid Patterns Usados:

1. **`.grid-desktop`** - Grid de 2 columnas para hero/headers
   - Columna izquierda: ~35-40%
   - Columna derecha: ~60-65%
   - Gap: ~40-60px

2. **`.grid-1`** - Grid de 2 columnas para secciones de contenido
   - Columna izquierda: ~30-35% (títulos/números)
   - Columna derecha: ~65-70% (contenido)
   - Gap: ~40px

3. **`.grid-1.top-conecting-header`** - Variante conectando secciones

4. **`.img-wrapper-02`** - Contenedor de imágenes full-width

### Breakpoints Responsive:

- **Desktop**: > 991px - Layouts de 2-3 columnas
- **Tablet**: 768px - 991px - Ajustes de columnas, padding reducido
- **Mobile**: < 768px - Una columna, elementos apilados

### Espaciado Consistente:

- **Padding lateral desktop**: 60-80px
- **Padding lateral tablet**: 40px
- **Padding lateral mobile**: 20-24px
- **Gap entre columnas**: 40-60px
- **Padding vertical secciones**: 60-100px

### Tipografía:

- **Heading 2** (`.heading-2`): Títulos principales (VANK)
- **Heading 5** (`.heading-5`): Subtítulos y números de sección
- **Body Large** (`.body-large`): Textos destacados
- **Body Small** (`.body-small`): Textos secundarios
- **Body Extra Small** (`.body-extrasmall`): Labels y captions
