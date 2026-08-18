export type Language = "es" | "en";

export type Project = {
  title: string;
  summary: string;
  solution: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  impact?: string;
  architecture?: string[];
  status?: "public" | "poc" | "completed";
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export const links = {
  github: "https://github.com/JesrigPineda",
  linkedin: "https://www.linkedin.com/in/jesrigpineda",
  cv: "https://www.linkedin.com/in/jesrigpineda",
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
      role: "Software Engineer",
      specialization: "Integrations · Automation · Cloud",
      headline: "Construyo software que conecta sistemas y simplifica operaciones.",
      subheadline:
        "Diseño APIs, servicios backend, integraciones y automatizaciones cloud que convierten procesos complejos en flujos confiables y mantenibles.",
      projects: "Ver proyectos",
      cv: "CV",
      cvLabel: "Ver experiencia profesional en LinkedIn",
      github: "GitHub",
      linkedin: "LinkedIn",
      scroll: "Selected work",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Software aplicado a problemas reales.",
      description:
        "Una selección de sistemas backend, integraciones y productos técnicos construidos con foco en claridad, confiabilidad y utilidad.",
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
      description:
        "He trabajado desde el código hasta la dirección técnica, conectando software, datos y procesos de negocio.",
    },
    about: {
      eyebrow: "Stack / Sobre mí",
      title: "Backend primero. Producto siempre.",
      copy:
        "Soy Software Engineer con experiencia construyendo integraciones, automatizaciones y servicios cloud para operaciones reales. Me gusta entender el proceso completo, definir límites claros y dejar sistemas que otros equipos puedan operar y mantener.",
      principles: [
        "Contratos claros",
        "Fallos visibles",
        "Trazabilidad útil",
        "Complejidad justificada",
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Construimos algo que conecte mejor?",
      copy:
        "Estoy disponible para conversar sobre oportunidades de Software Engineering, backend, integraciones, automatización y cloud.",
      linkedin: "Hablemos en LinkedIn",
      github: "Explorar GitHub",
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
      role: "Software Engineer",
      specialization: "Integrations · Automation · Cloud",
      headline: "I build software that connects systems and simplifies operations.",
      subheadline:
        "I design APIs, backend services, integrations and cloud automations that turn complex processes into reliable, maintainable workflows.",
      projects: "View projects",
      cv: "Resume",
      cvLabel: "View professional experience on LinkedIn",
      github: "GitHub",
      linkedin: "LinkedIn",
      scroll: "Selected work",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Software applied to real problems.",
      description:
        "A selection of backend systems, integrations and technical products built around clarity, reliability and utility.",
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
      description:
        "I have worked from code to technical leadership, connecting software, data and business processes.",
    },
    about: {
      eyebrow: "Stack / About",
      title: "Backend first. Product always.",
      copy:
        "I am a Software Engineer experienced in building integrations, automations and cloud services for real operations. I like to understand the complete process, define clear boundaries and leave systems that other teams can operate and maintain.",
      principles: [
        "Clear contracts",
        "Visible failures",
        "Useful traceability",
        "Justified complexity",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build something that connects better.",
      copy:
        "I am open to conversations about Software Engineering, backend, integrations, automation and cloud opportunities.",
      linkedin: "Let’s talk on LinkedIn",
      github: "Explore GitHub",
    },
    footer: "Software Engineer · Integrations · Automation · Cloud",
  },
} satisfies Record<Language, unknown>;

export const projects = {
  es: [
    {
      title: "Commerce Ops Webhook Bridge",
      summary:
        "Convierte eventos crudos de Shopify en órdenes internas seguras, consistentes y trazables.",
      solution:
        "Construí el servicio end-to-end: verificación HMAC, validación con Zod, mapeo a SalesOrder, reglas de negocio, idempotencia y persistencia intercambiable en archivo o Firestore.",
      stack: ["Node.js", "TypeScript", "Express", "Zod", "Firestore", "Vitest"],
      githubUrl: "https://github.com/JesrigPineda/commerce-ops-webhook-bridge",
      architecture: ["Shopify Webhook", "HMAC + Zod", "Business Rules", "Firestore"],
      status: "public",
    },
    {
      title: "Serverless Ops Health Monitor",
      summary:
        "Detecta fallos silenciosos en endpoints críticos y los convierte en incidentes con contexto.",
      solution:
        "Diseñé funciones HTTP, programadas y orientadas a eventos; cada ejecución persiste evidencia, clasifica fallos y mantiene logs estructurados con correlation IDs.",
      stack: ["TypeScript", "Cloud Functions", "Firestore", "Cloud Scheduler", "Zod", "Vitest"],
      githubUrl: "https://github.com/JesrigPineda/serverless-ops-health-monitor",
      architecture: ["Scheduler", "Cloud Function", "Check", "Incident", "Firestore"],
      status: "public",
    },
    {
      title: "Origina Lead Agent",
      summary:
        "Califica y da seguimiento a leads financieros desde chat y voz simulada, con memoria y handoff humano.",
      solution:
        "Construí la API, el orquestador conversacional, herramientas internas, persistencia y trazabilidad. LangChain coordina el modelo y las tools; la aplicación conserva las reglas de negocio.",
      stack: ["Node.js", "TypeScript", "Fastify", "LangChain JS", "Ollama", "SQLite"],
      githubUrl: "https://github.com/JesrigPineda/origina-lead-agent",
      architecture: ["WhatsApp / Voice", "Fastify", "LangChain Agent", "CRM + Handoff", "SQLite"],
      status: "public",
    },
    {
      title: "Nerd.IA Developer Docs PoC",
      summary:
        "Transforma fuentes públicas dispersas de una API en una ruta de integración bilingüe, clara y verificable.",
      solution:
        "Diseñé la arquitectura de contenido, quickstart y ejemplos; documenté cuatro operaciones con OpenAPI 3.1 y añadí referencia interactiva sin asumir información ausente.",
      stack: ["Astro", "Starlight", "MDX", "Scalar", "OpenAPI 3.1"],
      githubUrl: "https://github.com/JesrigPineda/Nerd.IA-Docs-PoC",
      demoUrl: "https://nerd-ia-docs-po-c.vercel.app",
      architecture: ["API Sources", "OpenAPI 3.1", "MDX", "Starlight + Scalar", "Static Site"],
      status: "poc",
    },
  ],
  en: [
    {
      title: "Commerce Ops Webhook Bridge",
      summary:
        "Turns raw Shopify events into safe, consistent and traceable internal orders.",
      solution:
        "I built the service end to end: HMAC verification, Zod validation, SalesOrder mapping, business rules, idempotency and interchangeable file or Firestore persistence.",
      stack: ["Node.js", "TypeScript", "Express", "Zod", "Firestore", "Vitest"],
      githubUrl: "https://github.com/JesrigPineda/commerce-ops-webhook-bridge",
      architecture: ["Shopify Webhook", "HMAC + Zod", "Business Rules", "Firestore"],
      status: "public",
    },
    {
      title: "Serverless Ops Health Monitor",
      summary:
        "Detects silent failures in critical endpoints and turns them into incidents with context.",
      solution:
        "I designed HTTP, scheduled and event-driven functions; every run persists evidence, classifies failures and maintains structured logs with correlation IDs.",
      stack: ["TypeScript", "Cloud Functions", "Firestore", "Cloud Scheduler", "Zod", "Vitest"],
      githubUrl: "https://github.com/JesrigPineda/serverless-ops-health-monitor",
      architecture: ["Scheduler", "Cloud Function", "Check", "Incident", "Firestore"],
      status: "public",
    },
    {
      title: "Origina Lead Agent",
      summary:
        "Qualifies and follows up with financial leads through chat and simulated voice, with memory and human handoff.",
      solution:
        "I built the API, conversation orchestrator, internal tools, persistence and traceability. LangChain coordinates the model and tools while the application owns business rules.",
      stack: ["Node.js", "TypeScript", "Fastify", "LangChain JS", "Ollama", "SQLite"],
      githubUrl: "https://github.com/JesrigPineda/origina-lead-agent",
      architecture: ["WhatsApp / Voice", "Fastify", "LangChain Agent", "CRM + Handoff", "SQLite"],
      status: "public",
    },
    {
      title: "Nerd.IA Developer Docs PoC",
      summary:
        "Turns scattered public API sources into a clear, verifiable bilingual integration path.",
      solution:
        "I designed the content architecture, quickstart and examples; documented four operations with OpenAPI 3.1 and added an interactive reference without assuming missing information.",
      stack: ["Astro", "Starlight", "MDX", "Scalar", "OpenAPI 3.1"],
      githubUrl: "https://github.com/JesrigPineda/Nerd.IA-Docs-PoC",
      demoUrl: "https://nerd-ia-docs-po-c.vercel.app",
      architecture: ["API Sources", "OpenAPI 3.1", "MDX", "Starlight + Scalar", "Static Site"],
      status: "poc",
    },
  ],
} satisfies Record<Language, Project[]>;

export const experience = {
  es: [
    {
      role: "IT Manager",
      company: "Alxedo",
      period: "ene. 2025 — ago. 2026",
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
      highlights: [
        "Colaboré en el desarrollo de software y APIs para necesidades internas del negocio.",
      ],
    },
    {
      role: "Web Developer",
      company: "Freelance",
      period: "ene. 2021 — dic. 2021",
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
      highlights: [
        "Contributed to software and API development for internal business needs.",
      ],
    },
    {
      role: "Web Developer",
      company: "Freelance",
      period: "Jan. 2021 — Dec. 2021",
      highlights: [
        "Delivered client web projects and integrated external services into existing systems.",
      ],
    },
  ],
} satisfies Record<Language, Experience[]>;

export const skillGroups = {
  es: [
    { title: "Backend", items: ["Node.js", "TypeScript", "JavaScript", "Python"] },
    { title: "Integrations", items: ["REST APIs", "Webhooks", "Shopify", "Kommo CRM"] },
    { title: "Cloud", items: ["Google Cloud", "Firebase", "Firestore", "Cloud Functions"] },
    { title: "Automation / Delivery", items: ["Zapier", "GitHub Actions"] },
    { title: "AI", items: ["LangChain JS", "Ollama", "Structured outputs", "Tool calling"] },
  ],
  en: [
    { title: "Backend", items: ["Node.js", "TypeScript", "JavaScript", "Python"] },
    { title: "Integrations", items: ["REST APIs", "Webhooks", "Shopify", "Kommo CRM"] },
    { title: "Cloud", items: ["Google Cloud", "Firebase", "Firestore", "Cloud Functions"] },
    { title: "Automation / Delivery", items: ["Zapier", "GitHub Actions"] },
    { title: "AI", items: ["LangChain JS", "Ollama", "Structured outputs", "Tool calling"] },
  ],
} satisfies Record<Language, { title: string; items: string[] }[]>;
