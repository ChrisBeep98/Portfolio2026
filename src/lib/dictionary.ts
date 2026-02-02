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
      role: "UX-UI.DESIGNER",
      frontend: "& Frontend",
      developer: "Developer",
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
        ]
      },
      acto03: {
        label: "03",
        title: "How we solved it",
        description: "We worked in an environment of constant validation where technical feasibility was the main driver of the design.",
        steps: [
          { t: "Research", d: "Flow auditing and deep benchmarking of fintechs." },
          { t: "Definition", d: "User journey mapping to validate the architecture." },
          { t: "Atomic Design", d: "Building Vank Atoms: A scalable system." },
          { t: "Methodology", d: "Weekly feedback cycles with stakeholders." }
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
      role: "ARQUITECTO.DIGITAL",
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
        ]
      },
      acto03: {
        label: "03",
        title: "Cómo lo resolvimos",
        description: "Trabajamos en un entorno de validación constante donde la factibilidad técnica fue el motor principal del diseño.",
        steps: [
          { t: "Investigación", d: "Auditoría de flujos y benchmark profundo de fintechs." },
          { t: "Definición", d: "Mapeo de user journeys para validar la arquitectura." },
          { t: "Diseño Atómico", d: "Construcción de Vank Atoms: Un sistema escalable." },
          { t: "Metodología", d: "Ciclos de feedback semanales con stakeholders." }
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