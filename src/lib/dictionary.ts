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
    tools: {
      title: "TOOLS",
      description: "Throughout my career, I have strived to develop a diverse set of fundamental skills.",
      items: [
        { name: "FIGMA", label: "Interactive Prototyping", desc: "High-fidelity prototypes for complex products." },
        { name: "WEBFLOW", label: "Design Systems", desc: "Scalable implementation based on atomic design." },
        { name: "SPLINE", label: "3D Modeling", desc: "Interactive 3D experiences for the web." },
        { name: "WEBFLOW", label: "UI Development", desc: "Pixel-perfect layouts and responsive architecture." },
        { name: "A.I.", label: "Research & Flows", desc: "Accelerating ideation and user journey mapping." },
        { name: "GSAP", label: "Motion", desc: "Advanced programmatic animations and interactions." }
      ]
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
        ]
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
    tools: {
      title: "HERRAMIENTAS",
      description: "A lo largo de mi carrera, me he esforzado por desarrollar un conjunto diverso de habilidades fundamentales.",
      items: [
        { name: "FIGMA", label: "Prototipado Interactivo", desc: "Prototipos de alta fidelidad para productos complejos." },
        { name: "WEBFLOW", label: "Design Systems", desc: "Implementación escalable basada en diseño atómico." },
        { name: "SPLINE", label: "Modelado 3D", desc: "Experiencias 3D interactivas para la web." },
        { name: "WEBFLOW", label: "Maquetado UI", desc: "Layouts pixel-perfect y arquitectura responsiva." },
        { name: "A.I.", label: "Investigación", desc: "Aceleración de ideación y flujos de usuario." },
        { name: "GSAP", label: "Motion", desc: "Animaciones programáticas avanzadas." }
      ]
    },
    process: {
      title: "Mi proceso",
      subtitle: "Un enfoque metodológico hacia la excelencia digital.",
      items: [
        {
          id: "01",
          title: "Dirección de arte",
          desc: "Definiendo el alma visual del proyecto. Establecemos un lenguaje estético único que resuene con la esencia de la marca y el desired emotional impact."
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
        ]
      }
    }
  }
};
