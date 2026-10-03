export type Language = "es" | "en";

export type Experience = {
  role: string;
  company: string;
  period: string;
  homeSummary: string;
  homeHighlights?: string[];
  highlights: string[];
};

export const links = {
  github: "https://github.com/JesrigPineda",
  linkedin: "https://www.linkedin.com/in/jesrigpineda",
};

export const navItems = {
  es: [
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
    { label: "Perfil", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ],
  en: [
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} satisfies Record<Language, { label: string; href: string }[]>;

export const siteContent = {
  es: {
    header: {
      menu: "Menú",
      close: "Cerrar",
      home: "Ir al inicio",
      skip: "Ir al contenido",
      themeLight: "Activar modo claro",
      themeDark: "Activar modo oscuro",
    },
    hero: {
      role: "Jesrig Pineda · Software Engineer",
      headline: "Construyo software que conecta sistemas.",
      subheadline:
        "Desarrollo sistemas backend, integraciones y automatizaciones con servicios cloud para conectar software, datos y operaciones.",
      projects: "Ver proyectos",
      linkedin: "LinkedIn",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Software aplicado a problemas reales.",
      description: "Una selección de proyectos de backend, integraciones y automatización.",
      viewProject: "Ver proyecto",
      solution: "Mi trabajo",
      architecture: "Arquitectura",
      stack: "Stack",
      impact: "Impacto",
      github: "GitHub",
      demo: "Demo",
      status: {
        public: "Código público",
        poc: "PoC pública",
        completed: "Completado",
      },
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Ingeniería cerca de la operación.",
      description: "Una trayectoria en desarrollo, integraciones y operación tecnológica.",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Software Engineer enfocado en integraciones y automatización.",
      copy:
        "Combino desarrollo backend y servicios cloud con conocimiento de procesos operativos en ecommerce. He conectado sistemas mediante APIs y webhooks para hacer los flujos más claros y mantenibles.",
      stack: "Tecnologías",
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Construimos algo que conecte mejor?",
      copy:
        "Estoy abierto a oportunidades de Software Engineering donde backend e integraciones apoyen operaciones reales.",
      linkedin: "Hablemos en LinkedIn",
      github: "Ver GitHub",
    },
    footer: "Software Engineer · Integrations · Automation · Cloud",
  },
  en: {
    header: {
      menu: "Menu",
      close: "Close",
      home: "Go to home",
      skip: "Skip to content",
      themeLight: "Activate light mode",
      themeDark: "Activate dark mode",
    },
    hero: {
      role: "Jesrig Pineda · Software Engineer",
      headline: "I build software that connects systems.",
      subheadline:
        "I build backend systems, integrations and automations with cloud services to connect software, data and operations.",
      projects: "View my work",
      linkedin: "LinkedIn",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Software applied to real problems.",
      description: "Selected projects in backend, integrations and automation.",
      viewProject: "View project",
      solution: "My work",
      architecture: "Architecture",
      stack: "Stack",
      impact: "Impact",
      github: "GitHub",
      demo: "Demo",
      status: {
        public: "Public code",
        poc: "Public PoC",
        completed: "Completed",
      },
    },
    experience: {
      eyebrow: "Experience",
      title: "Engineering close to operations.",
      description: "A trajectory in development, integrations and technology operations.",
    },
    about: {
      eyebrow: "About",
      title: "Software Engineer focused on integrations and automation.",
      copy:
        "I combine backend development and cloud services with an understanding of ecommerce operations. I have connected systems through APIs and webhooks to make workflows clearer and easier to maintain.",
      stack: "Technology",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build something that connects better.",
      copy:
        "I am open to Software Engineering opportunities where backend and integrations support real operations.",
      linkedin: "Let’s talk on LinkedIn",
      github: "View GitHub",
    },
    footer: "Software Engineer · Integrations · Automation · Cloud",
  },
} satisfies Record<Language, unknown>;

export const experience = {
  es: [
    {
      role: "IT Manager",
      company: "Alxedo",
      period: "ene. 2025 — ago. 2026",
      homeSummary: "Integraciones y automatización para ecommerce y operación tecnológica.",
      homeHighlights: [
        "Diseñé e implementé integraciones entre Shopify, CRM, logística y facturación mediante APIs, Cloud Functions y herramientas de automatización.",
        "Apoyé aproximadamente 4–5 flujos críticos de operación; estas automatizaciones redujeron aproximadamente 8–10 horas semanales de trabajo manual.",
      ],
      highlights: [
        "Dirigí integraciones y automatizaciones entre ecommerce, CRM, logística, facturación y reporting.",
        "Automaticé 4–5 flujos críticos, reduciendo aproximadamente 8–10 horas semanales de trabajo manual.",
        "Construí servicios cloud para validar pedidos y clientes antes de que las inconsistencias afectaran la operación.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Alxedo",
      period: "mar. 2022 — ene. 2025",
      homeSummary: "Backend, integraciones y servicios serverless para sistemas internos.",
      homeHighlights: [
        "Desarrollé e integré 10+ endpoints mediante APIs REST y webhooks.",
        "Las mejoras implementadas contribuyeron a una reducción de aproximadamente 18–25% en costos de infraestructura cloud.",
      ],
      highlights: [
        "Diseñé e integré más de 10 endpoints mediante APIs REST y webhooks.",
        "Construí servicios serverless y herramientas internas para conectar Shopify, CRM y procesos operativos.",
        "Contribuí a reducir aproximadamente 18–25% los costos de infraestructura cloud.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Alxedo",
      period: "sept. 2021 — feb. 2022",
      homeSummary: "Apoyé tareas de desarrollo de software y APIs para necesidades internas.",
      highlights: [
        "Colaboré en el desarrollo de software y APIs para necesidades internas del negocio.",
      ],
    },
    {
      role: "Web Developer",
      company: "Freelance",
      period: "ene. 2021 — dic. 2021",
      homeSummary: "Desarrollé proyectos web para clientes independientes e integré APIs.",
      highlights: [
        "Entregué proyectos web para clientes e integré servicios externos sobre sistemas existentes.",
      ],
    },
  ],
  en: [
    {
      role: "IT Manager",
      company: "Alxedo",
      period: "Jan. 2025 — Aug. 2026",
      homeSummary: "Integrations and automation for ecommerce and technology operations.",
      homeHighlights: [
        "Designed and implemented integrations between Shopify, CRM, logistics and billing systems using APIs, Cloud Functions and automation tools.",
        "Supported approximately 4–5 critical operational workflows; these automations reduced approximately 8–10 hours of manual work per week.",
      ],
      highlights: [
        "Led integrations and automations across ecommerce, CRM, logistics, billing and reporting.",
        "Automated 4–5 critical workflows, saving approximately 8–10 hours of manual work per week.",
        "Built cloud services that validated orders and customers before inconsistencies affected operations.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Alxedo",
      period: "Mar. 2022 — Jan. 2025",
      homeSummary: "Backend, integrations and serverless services for internal systems.",
      homeHighlights: [
        "Developed and integrated 10+ endpoints using REST APIs and webhooks.",
        "The implemented improvements contributed to a reduction of approximately 18–25% in cloud infrastructure costs.",
      ],
      highlights: [
        "Designed and integrated more than 10 endpoints through REST APIs and webhooks.",
        "Built serverless services and internal tools connecting Shopify, CRM and operational processes.",
        "Helped reduce cloud infrastructure costs by approximately 18–25%.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Alxedo",
      period: "Sep. 2021 — Feb. 2022",
      homeSummary: "Supported software development and API-related tasks for internal needs.",
      highlights: [
        "Contributed to software and API development for internal business needs.",
      ],
    },
    {
      role: "Web Developer",
      company: "Freelance",
      period: "Jan. 2021 — Dec. 2021",
      homeSummary: "Developed web projects for independent clients and integrated APIs.",
      highlights: [
        "Delivered client web projects and integrated external services into existing systems.",
      ],
    },
  ],
} satisfies Record<Language, Experience[]>;

export const skillGroups = {
  es: [
    { title: "Backend", items: ["Node.js", "JavaScript", "Python"] },
    { title: "Integración", items: ["REST APIs", "Webhooks"] },
    { title: "Cloud", items: ["Google Cloud", "Cloud Functions", "Firebase", "AWS"] },
    { title: "Datos", items: ["PostgreSQL", "SQL", "Firestore"] },
    { title: "Automatización", items: ["Zapier"] },
  ],
  en: [
    { title: "Backend", items: ["Node.js", "JavaScript", "Python"] },
    { title: "Integration", items: ["REST APIs", "Webhooks"] },
    { title: "Cloud", items: ["Google Cloud", "Cloud Functions", "Firebase", "AWS"] },
    { title: "Data", items: ["PostgreSQL", "SQL", "Firestore"] },
    { title: "Automation", items: ["Zapier"] },
  ],
} satisfies Record<Language, { title: string; items: string[] }[]>;
