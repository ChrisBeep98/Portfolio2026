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
      profile: "About",
      intro: "I am dedicated to designing digital experiences that put people at the center. My approach combines research, structure, and creativity.",
      w1: "I am a", w2: "UX/UI", w3: "Designer", w4: "and", w5: "Frontend",
      w6: "Developer.", w7: "I transform", w8: "complex", w9: "ideas",
      w10: "into", w11: "clean,", w12: "functional,", w13: "and",
      w14: "memorable", w15: "digital", w16: "experiences.", w17: "My",
      w18: "work", w19: "lives", w20: "at the", w21: "intersection", w22: "between",
      w23: "aesthetics", w24: "and", w25: "technology.", w26: ""
    },
    story: {
      title: "MY STORY",
      p1: "I started my journey during the pandemic, exploring web development with tools like HTML, CSS, and React. Although my initial focus was purely technical, I soon discovered a strong inclination towards experience and interface design, which led me to gradually migrate towards a more visual approach.",
      p2: "This evolution encouraged me to experiment with new technologies like Blender and Spline, allowing me to incorporate 3D as an expressive extension in my designs. Since 2021, I have consolidated my profile as a UX/UI designer, focusing on creating functional and coherent digital experiences.",
      disciplinesTitle: "DISCIPLINES",
      disciplinesList: ["UI Design", "No-code Development", "3D Modeling", "UX Research"]
    },
    process: {
      title: "My Process",
      subtitle: "A methodological approach to digital excellence.",
      items: [
        {
          id: "01",
          title: "Art Direction",
          desc: "Defining the visual soul of the project. We establish a unique aesthetic language that resonates with the brand's essence and the desired emotional impact."
        },
        {
          id: "02",
          title: "UX Focus",
          desc: "Empathy-driven design. We analyze user behaviors to build intuitive architectures and seamless flows that solve real problems through research and testing."
        },
        {
          id: "03",
          title: "UI Prototyping",
          desc: "Bringing ideas to life. From high-fidelity wireframes to interactive prototypes that allow us to validate the experience before the first line of code."
        },
        {
          id: "04",
          title: "Micro-interactions",
          desc: "The magic is in the details. We design subtle movements and feedbacks that improve usability and create a deep emotional connection with the user."
        }
      ]
    },
    tools: {
      title: "TOOLS",
      description: "Throughout my career, I have strived to develop a diverse set of fundamental skills.",
      items: [
        { name: "FIGMA", label: "Interactive Prototyping", desc: "High-fidelity prototypes\n for complex products.", img: "/images/logos/figma.png" },
        { name: "WEBFLOW", label: "Visual Development", desc: "Pixel-perfect layouts\n and responsive architecture.", img: "/images/logos/webflow.png" },
        { name: "REACT", label: "Frontend Architecture", desc: "Scalable component\n systems and logic.", img: "/images/logos/react.png" },
        { name: "SPLINE", label: "3D Modeling", desc: "Interactive 3D experiences\n for the web.", img: "/images/logos/spline.png" },
        { name: "A.I.", label: "Research & Flows", desc: "Accelerating ideation\n and user journey mapping.", img: "/images/logos/ai.png" }
      ]
    },
    footer: {
      title: "I AM AVAILABLE",
      subtitle: "ELEVATING YOUR DIGITAL EXPERIENCE",
      email: "christiansandovaldesign@gmail.com",
      copyright: "© 2026 Christian Sandoval.",
      links: {
        email: "Email",
        instagram: "Instagram",
        whatsapp: "Whatsapp",
        phone: "+57 310 713 58 20",
        instagramUrl: "https://www.instagram.com/christiansandovalmona/"
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
        ],
        solutionBridge: "\"A user-centered design approach was implemented, combining agile methodologies to iterate quickly.\"",
        designSystemBridge: "\"The design system became the foundation for visual and functional coherence across the entire platform.\"",
        methodologyDetails: [
          {
            title: "Scrum with weekly sprints to advance in clear and prioritized blocks.",
            desc: "We worked in short one-week cycles, which allowed us to deliver functional prototypes constantly and facilitate integration with the development team. This was fundamental to meeting tight deadlines."
          },
          {
            title: "Continuous feedback with development to ensure technical feasibility.",
            desc: "Regular meetings were held with the development team and other stakeholders to ensure fluid communication, align expectations, and quickly resolve any impediments. Constant feedback was key to continuous improvement."
          }
        ]
      },
      acto04: {
        label: "04",
        title: ["The", "Result"],
        titleMobile: ["The", "Result"],
        description: "The implementation of a comprehensive design system was fundamental to ensuring visual and functional coherence throughout the Vank platform. This system covered everything from the web version to the mobile app, facilitating collaboration between the design and development teams and guaranteeing the future scalability of the product.",
        resultBridge: "\"The final solution was a platform with complete flows, coherent visuals, and ready to scale.\"",
        changesLabel: "Key Changes",
        results: [
          "Flows designed from start to finish for all key operations.",
          "Documented design system.",
          "Commissions visible from the first step.",
          "Simplified processes (e.g., transfers in three steps).",
          "Key screens like Home, Profile, VankPay, Fiat Recharge, and Fiat Send ready for implementation."
        ]
      },
      impact: {
        label: "05",
        title: ["Impact", "& Learnings"],
        titleMobile: ["Impact", "& Learnings"],
        description: "Designing the Vank platform not only addressed the initial problems but also generated a measurable positive impact and provided valuable lessons for future projects.",
        resultsLabel: "Results.",
        resultsList: [
          "Building structures from scratch forces you to decide many small but decisive things.",
          "Prioritizing architecture and systems before visual detail accelerates the whole process.",
          "Teamwork and communication with developers are the key to delivering something truly usable."
        ],
        insightMessage: "\"This project was an enriching experience that left important lessons.\""
      },
      footer: {
        title: "I AM AVAILABLE",
        subtitle: "ELEVATING YOUR DIGITAL EXPERIENCE",
        email: "hello@csandoval.design",
        copyright: "© 2026 Christian Sandoval."
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
      profile: "Perfil",
      intro: "Me dedico a diseñar experiencias digitales que ponen a las personas en el centro. Mi enfoque combina investigación, estructura y creatividad.",
      w1: "Soy", w2: "diseñador", w3: "UX/UI", w4: "y", w5: "desarrollador",
      w6: "frontend.", w7: "Transformo", w8: "ideas", w9: "complejas",
      w10: "en", w11: "experiencias", w12: "digitales", w13: "limpias,",
      w14: "funcionales", w15: "y", w16: "memorables.", w17: "Mi",
      w18: "trabajo", w19: "habita", w20: "en", w21: "la", w22: "intersección",
      w23: "entre", w24: "estética", w25: "y", w26: "tecnología."
    },
    story: {
      title: "MI HISTORIA",
      p1: "Inicié mi camino durante la pandemia, explorando el desarrollo web con herramientas como HTML, CSS y React. Aunque mi enfoque inicial fue puramente técnico, no tardé en descubrir una fuerte inclinación por el diseño de experiencia e interfaz, lo que me llevó a migrar gradualmente hacia un enfoque más visual.",
      p2: "Esta evolución me animó a experimentar con nuevas tecnologías como Blender y Spline, permitiéndome incorporar el 3D como una extensión expresiva en mis diseños. Desde 2021, he consolidado mi perfil como diseñador UX/UI, centrándome en crear experiencias digitales funcionales y coherentes.",
      disciplinesTitle: "DISCIPLINAS",
      disciplinesList: ["Diseño UI", "No code development", "Modelado 3D", "Investigación UX"]
    },
    process: {
      title: "Mi proceso",
      subtitle: "Un enfoque metodológico hacia la excelencia digital.",
      items: [
        {
          id: "01",
          title: "Dirección de arte",
          desc: "Definiendo el alma visual del proyecto. Establecemos un lenguaje estético único que resuene con la esencia de la marca y el impacto emocional deseado."
        },
        {
          id: "02",
          title: "Enfoque UX",
          desc: "Diseño impulsado por la empatía. Analizamos comportamientos de usuario para construir arquitecturas intuitivas y flujos fluidos que resuelvan problemas reales mediante investigación y pruebas."
        },
        {
          id: "03",
          title: "Prototipado UI",
          desc: "Dando vida a las ideas. Desde wireframes de alta fidelidad hasta prototipos interactivos que nos permiten validar la experiencia antes de la primera línea de código."
        },
        {
          id: "04",
          title: "Microinteracciones",
          desc: "La magia está en los detalles. Diseñamos movimientos sutiles y feedbacks que mejoran la usabilidad y crean una conexión emocional profunda con el usuario."
        }
      ]
    },
    tools: {
      title: "HERRAMIENTAS",
      description: "A lo largo de mi carrera, me he esforzado por desarrollar un conjunto diverso de habilidades fundamentales.",
      items: [
        { name: "FIGMA", label: "Prototipado Interactivo", desc: "Prototipos de alta fidelidad\n para productos complejos.", img: "/images/logos/figma.png" },
        { name: "WEBFLOW", label: "Desarrollo Visual", desc: "Layouts pixel-perfect\n y arquitectura responsiva.", img: "/images/logos/webflow.png" },
        { name: "REACT", label: "Arquitectura Frontend", desc: "Sistemas de componentes\n escalables y lógica.", img: "/images/logos/react.png" },
        { name: "SPLINE", label: "Modelado 3D", desc: "Experiencias 3D interactivas\n para la web.", img: "/images/logos/spline.png" },
        { name: "A.I.", label: "Investigación", desc: "Aceleración de ideación\n y flujos de usuario.", img: "/images/logos/ai.png" }
      ]
    },
    footer: {
      title: "ESTOY DISPONIBLE",
      subtitle: "LLEVEMOS TU PROYECTO AL SIGUIENTE NIVEL",
      email: "christiansandovaldesign@gmail.com",
      copyright: "© 2026 Christian Sandoval.",
      links: {
        email: "Email",
        instagram: "Instagram",
        whatsapp: "Whatsapp",
        phone: "+57 310 713 58 20",
        instagramUrl: "https://www.instagram.com/christiansandovalmona/"
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
        ],
        solutionBridge: "\"Se implementó un enfoque de diseño centrado en el usuario, combinando metodologías ágiles para iterar rápidamente.\"",
        designSystemBridge: "\"El sistema de diseño se convirtió en la base para la coherencia visual y funcional en toda la plataforma.\"",
        methodologyDetails: [
          {
            title: "Scrum con sprints semanales para avanzar en bloques claros y priorizados.",
            desc: "Se trabajó en ciclos cortos de una semana, lo que permitió entregar prototipos funcionales de forma constante y facilitar la integración con el equipo de desarrollo. Esto fue fundamental para cumplir con los plazos ajustados."
          },
          {
            title: "Feedback continuo con desarrollo para asegurar factibilidad técnica.",
            desc: "Se mantuvieron reuniones regulares con el equipo de desarrollo y otras partes interesadas para asegurar una comunicación fluida, alinear expectativas y resolver cualquier impedimento rápidamente. El feedback constante fue clave para la mejora continua."
          }
        ]
      },
      acto04: {
        label: "04",
        title: ["El", "Resultado"],
        titleMobile: ["El", "Resultado"],
        description: "La implementación de un sistema de diseño integral fue fundamental para asegurar la coherencia visual y funcional en toda la plataforma Vank. Este sistema abarcó desde la versión web hasta la aplicación móvil, facilitando la colaboración entre el equipo de diseño y desarrollo y garantizando la escalabilidad futura del producto.",
        resultBridge: "\"La solución final, fue una plataforma con flujos completos, visual coherente y preparada para escalar.\"",
        changesLabel: "Cambios Clave",
        results: [
          "Flows diseñados de principio a fin para todas las operaciones clave.",
          "Sistema de diseño documentado.",
          "Comisiones visibles desde el primer paso.",
          "Procesos simplificados (por ejemplo, transferencias en tres pasos).",
          "Pantallas clave como Home, Perfil, VankPay, Recarga Fiat y Envío Fiat listas para implementación."
        ]
      },
      impact: {
        label: "05",
        title: ["Impacto", "y Aprendizajes"],
        titleMobile: ["Impacto", "y Aprendizajes"],
        description: "El Diseño de la plataforma Vank no solo abordó los problemas iniciales, sino que también generó un impacto positivo medible y proporcionó valiosas lecciones para futuros proyectos.",
        resultsLabel: "Resultados.",
        resultsList: [
          "Crear estructuras desde cero obliga a decidir many small but decisive things.",
          "Priorizar arquitectura y sistema antes del detalle visual acelera todo el proceso.",
          "El trabajo en equipo y la comunicación con los developers son la clave para entregar algo realmente usable."
        ],
        insightMessage: "\"Este proyecto fue una experiencia enriquecedora que dejó importantes lecciones.\""
      },
      footer: {
        title: "ESTOY DISPONIBLE",
        subtitle: "LLEVEMOS TU PROYECTO AL SIGUIENTE NIVEL",
        email: "hello@csandoval.design",
        copyright: "© 2026 CHRISTIAN SANDOVAL"
      }
    }
  }
};