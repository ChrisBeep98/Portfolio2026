export type Language = 'en' | 'es';

export const dictionary = {
  en: {
    header: {
      work: "Work",
      about: "About",
      contact: "Contact",
      projects: "Projects"
    },
    hero: {
      firstName: "Christian",
      lastName: "Sandoval",
      role: ["DIGITAL", "ARCHITECT"],
      frontend: "& INTERACTIVE",
      developer: "STORYTELLER",
      detail: "Visual Storyteller / 2026",
      satellites: {
        react: "React",
        nextjs: "Next.js",
        design: "Design",
        uiux: "UI/UX",
        motion: "Motion",
        backend: "Backend"
      }
    },
    about: {
      w1: "I am a", w2: "UX/UI", w3: "Designer", w4: "and", w5: "Frontend",
      w6: "Developer.", w7: "I transform", w8: "complex", w9: "ideas",
      w10: "into", w11: "clean,", w12: "functional,", w13: "and",
      w14: "memorable", w15: "digital", w16: "experiences.", w17: "My",
      w18: "work", w19: "lives", w20: "at the", w21: "intersection", w22: "between",
      w23: "aesthetics", w24: "and", w25: "technology.", w26: ""
    },
    vank: {
      intro: {
        back: "Projects",
        title: "VANK",
        tagline: "A fintech platform ready to grow.",
        contextLabel: "Project Context",
        contextDesc: "A financial experience built from scratch, with clear processes and a scalable design system.",
        meta: {
          services: "Services",
          date: "Date",
          deliverables: "Deliverables",
          ecosystem: "Ecosystem"
        }
      },
      acto01: {
        label: "01",
        title: ["The", "Origin", "of the Challenge"],
        titleMobile: ["The Origin", "of the Challenge"],
        description: "When we arrived at the project, there was no defined product. There were a couple of loose Figma files, disconnected screens, no UI kit, and no complete flows. Our mission was to take that chaos and turn it into a functional, coherent experience ready for the development team to build upon —all within very tight deadlines."
      },
      acto02: {
        label: "02",
        title: ["The", "Problem", "The Challenge"],
        titleMobile: ["The Problem", "The Challenge"],
        contextLabel: "Initial Context",
        contextDesc: "Vank's existing business model presented significant challenges that generated frustration among its users. The main issues revolved around efficiency, transparency, and ease of use in a sector as sensitive as finance and cryptocurrencies.",
        problemsLabel: "Identified Problems",
        problemsList: [
          "Loose screens without connection to each other.",
          "Total absence of a design system or UI kit.",
          "Incomplete flows disconnected from the real experience.",
          "Key processes (transfers, recharges) without end-to-end definition."
        ],
        insightMessage: "\"To understand these problems, exhaustive research was conducted that revealed the following insights.\"",
        insightsLabel: "Key Research Insights",
        insightsList: [
          "Users demanded speed, transparency, and total clarity in flows.",
          "The platform required a scalable architecture ready for global growth.",
          "A consistent visual system was imperative to accelerate development cycles."
        ],
        objectivesBridge: "\"Based on the problems and insights, the following objectives were established.\"",
        objectivesLabel: "Project Objectives",
        objectivesList: [
          "Unify and give coherence to the entire design.",
          "Define complete and frictionless flows.",
          "Build a scalable visual system.",
          "Deliver a version ready for development in record time."
        ]
      },
      acto03: {
        label: "03",
        title: ["How we", "solved it"],
        titleMobile: ["How we", "solved it"],
        description: "We worked as a multidisciplinary team with continuous communication between design, product, and development.",
        list: [
          "Research: fintech benchmark, usability heuristics.",
          "Definition: We created full user personas and user journeys, which did not exist before.",
          "Design: wireframes to validate architecture → UI Kit and design system → high-fidelity prototypes in Figma.",
          "Methodology: Scrum with weekly sprints and feedback meetings with stakeholders to validate decisions.",
          "Testing: in-person and remote usability testing to iterate quickly."
        ]
      },
      acto04: {
        label: "04",
        title: "The final result",
        description: "A robust ecosystem that guarantees functional coherence in every pixel.",
        results: [
          "Unified and clear navigation.",
          "Documented design system.",
          "Total visibility of commissions.",
          "Transfers in 3 steps.",
          "Code ready for implementation."
        ]
      },
      impact: {
        label: "05",
        title: "Impact & Learnings",
        description: "Designing the Vank platform not only addressed the initial problems but also generated a measurable positive impact on the user experience and the operational efficiency of the business."
      },
      footer: {
        title: "AVAILABLE",
        subtitle: "TO CREATE",
        email: "hello@csandoval.design",
        copyright: "© 2026 CHRISTIAN SANDOVAL"
      }
    }
  },
  es: {
    header: {
      work: "Proyectos",
      about: "Sobre Mí",
      contact: "Contacto",
      projects: "Proyectos"
    },
    hero: {
      firstName: "Christian",
      lastName: "Sandoval",
      role: ["ARQUITECTO", "DIGITAL"],
      frontend: "& STORYTELLER",
      developer: "INTERACTIVO",
      detail: "Visual Storyteller / 2026",
      satellites: {
        react: "React",
        nextjs: "Next.js",
        design: "Diseño",
        uiux: "UI/UX",
        motion: "Motion",
        backend: "Backend"
      }
    },
    about: {
      w1: "Soy", w2: "diseñador", w3: "UX/UI", w4: "y", w5: "desarrollador",
      w6: "frontend.", w7: "Transformo", w8: "ideas", w9: "complejas",
      w10: "en", w11: "experiencias", w12: "digitales", w13: "limpias,",
      w14: "funcionales", w15: "y", w16: "memorables.", w17: "Mi",
      w18: "trabajo", w19: "habita", w20: "en", w21: "la", w22: "intersección",
      w23: "entre", w24: "estética", w25: "y", w26: "tecnología."
    },
    vank: {
      intro: {
        back: "Proyectos",
        title: "VANK",
        tagline: "Una plataforma fintech lista para crecer.",
        contextLabel: "Contexto del proyecto",
        contextDesc: "Una experiencia financiera construida desde cero, con procesos claros y un sistema de diseño escalable.",
        meta: {
          services: "Servicios",
          date: "Fecha",
          deliverables: "Entregables",
          ecosystem: "Ecosistema"
        }
      },
      acto01: {
        label: "01",
        title: ["El", "Origen", "del Reto"],
        titleMobile: ["El origen", "del reto"],
        description: "Cuando llegamos al proyecto, no había un producto definido. Había un par de archivos de Figma sueltos, pantallas desconectadas, sin UI kit y sin flujos completos. Nuestra misión fue tomar ese caos y convertirlo en una experiencia funcional, coherente y lista para que el equipo de desarrollo pudiera construir sobre ella —y todo en plazos muy ajustados."
      },
      acto02: {
        label: "02",
        title: ["El", "Problema", "El Desafío"],
        titleMobile: ["El Problema", "El Desafío"],
        contextLabel: "Contexto inicial",
        contextDesc: "El modelo de negocio de Vank existente presentaba desafíos significativos que generaban frustración entre sus usuarios. Las problemáticas principales giraban en torno a la eficiencia, la transparencia y la facilidad de uso en un sector tan sensible como el financiero y de criptomonedas.",
        problemsLabel: "Problemas identificados",
        problemsList: [
          "Pantallas sueltas sin conexión entre sí.",
          "Ausencia total de un sistema de diseño o UI kit.",
          "Flujos incompletos desconectados de la experiencia real.",
          "Procesos clave (transferencias, recargas) sin definición de punta a punta."
        ],
        insightMessage: "\"Para comprender estos problemas, se realizó una investigación exhaustiva que reveló los siguientes insights.\"",
        insightsLabel: "Insights clave de la investigación",
        insightsList: [
          "Los usuarios demandaban rapidez, transparencia y claridad total en los flujos.",
          "La plataforma requería una arquitectura escalable lista para el crecimiento global.",
          "Un sistema visual consistente era imperativo para acelerar los ciclos de desarrollo."
        ],
        objectivesBridge: "\"Con base en los problemas e insights, se establecieron los siguientes objetivos.\"",
        objectivesLabel: "Objetivos del proyecto",
        objectivesList: [
          "Unificar y dar coherencia a todo el diseño.",
          "Definir flujos completos y sin fricciones.",
          "Construir un sistema visual escalable.",
          "Entregar una versión lista para pasar a desarrollo en tiempo récord."
        ]
      },
      acto03: {
        label: "03",
        title: ["Cómo lo", "resolvimos"],
        titleMobile: ["Cómo lo", "resolvimos"],
        description: "Trabajamos como un equipo multidisciplinario con comunicación continua entre diseño, producto y desarrollo.",
        list: [
          "Investigación: benchmark de fintechs, heurísticas de usabilidad.",
          "Definición: Creamos user personas y user journeys completos, que antes no existían.",
          "Diseño: wireframes para validar arquitectura → UI Kit y sistema de diseño → prototipos de alta en Figma.",
          "Metodología: Scrum con sprints semanales y reuniones de feedback con stakeholders para validar decisiones.",
          "Pruebas: usabilidad presencial y remota para iterar rápidamente."
        ]
      },
      acto04: {
        label: "04",
        title: "El resultado final",
        description: "Un ecosistema robusto que garantiza la coherencia funcional en cada pixel.",
        results: [
          "Navegación unificada y clara.",
          "Sistema de diseño documentado.",
          "Visibilidad total de comisiones.",
          "Transferencias en 3 pasos.",
          "Código listo para implementación."
        ]
      },
      impact: {
        label: "05",
        title: "Impacto y Aprendizajes",
        description: "El Diseño de la plataforma Vank no solo abordó los problemas iniciales, sino que también generó un impacto positivo medible en la experiencia del usuario y en la eficiencia operativa del negocio."
      },
      footer: {
        title: "DISPONIBLE",
        subtitle: "PARA CREAR",
        email: "hello@csandoval.design",
        copyright: "© 2026 CHRISTIAN SANDOVAL"
      }
    }
  }
};