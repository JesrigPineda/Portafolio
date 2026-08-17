export type Language = "es" | "en";

export const professionalRoles = {
  es: ["Software Engineer", "Integration Engineer", "Automation Engineer"],
  en: ["Software Engineer", "Integration Engineer", "Automation Engineer"],
} satisfies Record<Language, readonly string[]>;

export const links = {
  github: "https://github.com/JesrigPineda",
  linkedin: "https://www.linkedin.com/in/jesrig",
  x: "https://x.com/JesrigPineda",
};

export const socialLinks = [
  { label: "X", href: links.x },
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
];

export const navItems = {
  es: [
    { label: "Inicio", href: "#home" },
    { label: "Sobre mí", href: "#about" },
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
    { label: "Herramientas", href: "#skills" },
    { label: "Contacto", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Tools", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
} satisfies Record<Language, { label: string; href: string }[]>;

export const siteContent = {
  es: {
    header: {
      menu: "Menú",
      close: "Cerrar",
      connect: "Conectar",
    },
    hero: {
      title: "Hola, soy Jesrig",
      headline: "Conecto sistemas y automatizo procesos para que las operaciones fluyan mejor.",
      subheadline:
        "Diseño integraciones cloud entre ecommerce, CRM, logística, facturación y reporting mediante APIs, webhooks y servicios serverless.",
      scrollLabel: "Explorar",
      actions: [{ label: "Ver caso de estudio", href: "#projects" }],
      stats: [
        { value: "10+ endpoints", label: "entre ecommerce, CRM y servicios internos" },
        { value: "8-10 h/sem", label: "ahorradas en 4-5 flujos críticos" },
        { value: "18-25%", label: "menos costo de infraestructura cloud" },
      ],
      statsNote: "Resultados aproximados obtenidos durante mi experiencia en Alxedo.",
    },
    about: {
      eyebrow: "Perfil",
      title: "De la fricción operativa a un sistema claro",
      description: "Cómo evolucionó mi forma de construir software.",
      copy:
        "Comencé construyendo interfaces y herramientas internas. Al trabajar más cerca de ecommerce y operaciones entendí que el reto rara vez es una sola pantalla: son los datos, reglas y equipos que deben coordinarse detrás. Por eso mi trabajo evolucionó hacia integraciones, automatización y servicios cloud que convierten procesos dispersos en flujos trazables.",
      focusAreas: [
        {
          step: "01",
          title: "Entender la operación",
          description: "Mapeo eventos, reglas, responsables y puntos de falla antes de elegir tecnología.",
        },
        {
          step: "02",
          title: "Diseñar límites confiables",
          description: "Uso contratos, validación e idempotencia para que cada integración falle de forma visible y segura.",
        },
        {
          step: "03",
          title: "Dejar trazabilidad",
          description: "Construyo flujos medibles y mantenibles para que el equipo pueda entenderlos y operarlos.",
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Sistemas construidos alrededor de problemas reales",
      description: "Cuatro proyectos públicos que muestran cómo abordo integración, automatización, confiabilidad e IA aplicada.",
      cardLabel: "Caso de estudio",
      projectLabel: "Proyecto público",
      problemLabel: "El problema",
      solutionLabel: "La solución",
      outcomeLabel: "Lo que demuestra",
      github: "Explorar repositorio",
      status: {
        active: "Público",
        archived: "Completado",
      },
    },
    experience: {
      eyebrow: "Trayectoria",
      title: "Experiencia",
      description: "De prototipos y desarrollo web a integraciones que sostienen operaciones.",
    },
    skills: {
      eyebrow: "Herramientas",
      title: "Stack y enfoque",
      description: "Tecnologías que uso para conectar sistemas y mantener flujos estables.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Hablamos de software, integraciones o automatización?",
      copy:
        "Puedes encontrarme en LinkedIn para conversar sobre oportunidades y seguir mis proyectos técnicos en GitHub.",
      linkedin: "Contactar en LinkedIn",
      github: "Ver GitHub",
    },
    footer: "Integraciones, automatización y cloud workflows.",
  },
  en: {
    header: {
      menu: "Menu",
      close: "Close",
      connect: "Connect",
    },
    hero: {
      title: "Hey, I'm Jesrig",
      headline: "I connect systems and automate workflows so operations run more smoothly.",
      subheadline:
        "I design cloud integrations across ecommerce, CRM, logistics, billing and reporting using APIs, webhooks and serverless services.",
      scrollLabel: "Explore",
      actions: [{ label: "View case study", href: "#projects" }],
      stats: [
        { value: "10+ endpoints", label: "across ecommerce, CRM and internal services" },
        { value: "8-10 hrs/week", label: "saved across 4-5 critical workflows" },
        { value: "18-25%", label: "lower cloud infrastructure costs" },
      ],
      statsNote: "Approximate results achieved during my experience at Alxedo.",
    },
    about: {
      eyebrow: "Profile",
      title: "From operational friction to a clear system",
      description: "How my approach to building software evolved.",
      copy:
        "I started by building interfaces and internal tools. Working closer to ecommerce and operations taught me that the challenge is rarely a single screen: it is the data, rules and teams that must coordinate behind it. That moved my work toward integrations, automation and cloud services that turn fragmented processes into traceable workflows.",
      focusAreas: [
        {
          step: "01",
          title: "Understand the operation",
          description: "I map events, rules, owners and failure points before choosing the technology.",
        },
        {
          step: "02",
          title: "Design reliable boundaries",
          description: "I use contracts, validation and idempotency so each integration fails visibly and safely.",
        },
        {
          step: "03",
          title: "Leave a trace",
          description: "I build measurable, maintainable workflows that teams can understand and operate.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Systems built around real problems",
      description: "Four public projects showing how I approach integration, automation, reliability and applied AI.",
      cardLabel: "Case study",
      projectLabel: "Public project",
      problemLabel: "The problem",
      solutionLabel: "The solution",
      outcomeLabel: "What it demonstrates",
      github: "Explore repository",
      status: {
        active: "Public",
        archived: "Completed",
      },
    },
    experience: {
      eyebrow: "Background",
      title: "Experience",
      description: "From prototypes and web development to integrations that support operations.",
    },
    skills: {
      eyebrow: "Tools",
      title: "Stack and focus",
      description: "Technologies I use to connect systems and keep workflows stable.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about software, integrations or automation",
      copy:
        "Find me on LinkedIn to discuss opportunities and follow my technical projects on GitHub.",
      linkedin: "Contact on LinkedIn",
      github: "View GitHub",
    },
    footer: "Integrations, automation and cloud workflows.",
  },
} satisfies Record<Language, unknown>;

export const projects = {
  es: [
    {
      title: "Commerce Ops Webhook Bridge",
      summary:
        "Un límite confiable entre eventos crudos de Shopify y los flujos internos de fulfillment, facturación, CRM y reporting.",
      problem:
        "Los webhooks de ecommerce no siempre están listos para consumo interno: pueden ser inválidos, duplicados o no representar las reglas que necesita la operación.",
      solution:
        "Construí un servicio que verifica firmas HMAC, valida con Zod, transforma cada pedido a un contrato SalesOrder, aplica reglas de negocio y evita procesamiento duplicado.",
      outcome:
        "Una integración pequeña pero realista donde autenticidad, contratos, idempotencia y persistencia hacen que cada evento sea seguro y trazable.",
      role: "Arquitectura e implementación end-to-end",
      year: "2026",
      stack: [
        "Node.js",
        "TypeScript",
        "Express",
        "Zod",
        "Firebase Admin",
        "Firestore",
        "Vitest",
        "Shopify Webhooks",
      ],
      href: "https://github.com/JesrigPineda/commerce-ops-webhook-bridge",
      status: "active",
      visual: "commerce",
    },
    {
      title: "Ops Request Approval Automation",
      summary:
        "Convierte solicitudes dispersas por correo o chat en un flujo de aprobación gobernado y auditable.",
      problem:
        "La captura incompleta, los aprobadores ambiguos y las solicitudes duplicadas generan seguimiento manual y poca evidencia.",
      solution:
        "Una API con FastAPI y Pydantic que valida solicitudes, calcula rutas de aprobación, detecta duplicados y conserva cada transición en SQLite.",
      outcome:
        "Reglas operativas explícitas, historial auditable, notificaciones y métricas sin depender de seguimiento manual.",
      role: "Diseño del workflow y reglas de negocio",
      year: "2026",
      stack: ["Python", "FastAPI", "Pydantic", "SQLite", "Slack Webhooks", "Pytest"],
      href: "https://github.com/JesrigPineda/ops-request-approval-automation",
      status: "active",
      visual: "approval",
    },
    {
      title: "Serverless Ops Health Monitor",
      summary:
        "Monitorea endpoints críticos y convierte fallos silenciosos en incidentes con contexto y trazabilidad.",
      problem:
        "Un webhook o API interna puede fallar durante horas antes de que el equipo detecte el impacto operativo.",
      solution:
        "Cloud Functions ejecuta verificaciones manuales y programadas, persiste resultados en Firestore y crea incidentes con logs correlacionados.",
      outcome:
        "Combina patrones request-driven, time-driven y event-driven con una arquitectura serverless simple y mantenible.",
      role: "Arquitectura serverless y observabilidad",
      year: "2026",
      stack: ["TypeScript", "Firebase Functions", "Firestore", "Cloud Scheduler", "Zod", "Vitest"],
      href: "https://github.com/JesrigPineda/serverless-ops-health-monitor",
      status: "active",
      visual: "monitor",
    },
    {
      title: "Local Lead Qualification Agent",
      summary:
        "Agente local que transforma conversaciones en datos estructurados y acciones operativas trazables.",
      problem:
        "Una conversación comercial solo es útil para la operación si produce información estable, validada y reutilizable.",
      solution:
        "Un agente con Ollama, Fastify y Zod comparte lógica entre API y CLI, mantiene memoria compacta y registra mensajes, estado y handoffs en SQLite.",
      outcome:
        "Una arquitectura de IA práctica, local-first y sin frameworks pesados, preparada para intercambiar el proveedor del modelo.",
      role: "Orquestación, memoria y tool calling",
      year: "2026",
      stack: ["TypeScript", "Fastify", "Ollama", "Zod", "SQLite", "Vitest"],
      href: "https://github.com/JesrigPineda/lead-qualification-agent-local",
      status: "active",
      visual: "agent",
    },
  ],
  en: [
    {
      title: "Commerce Ops Webhook Bridge",
      summary:
        "A reliable boundary between raw Shopify events and internal fulfillment, billing, CRM and reporting workflows.",
      problem:
        "Ecommerce webhooks are not always ready for internal use: they may be invalid, duplicated or fail to represent the rules the operation needs.",
      solution:
        "I built a service that verifies HMAC signatures, validates with Zod, maps each order to a SalesOrder contract, applies business rules and prevents duplicate processing.",
      outcome:
        "A small but realistic integration where authenticity, contracts, idempotency and persistence make every event safe and traceable.",
      role: "End-to-end architecture and implementation",
      year: "2026",
      stack: [
        "Node.js",
        "TypeScript",
        "Express",
        "Zod",
        "Firebase Admin",
        "Firestore",
        "Vitest",
        "Shopify Webhooks",
      ],
      href: "https://github.com/JesrigPineda/commerce-ops-webhook-bridge",
      status: "active",
      visual: "commerce",
    },
    {
      title: "Ops Request Approval Automation",
      summary:
        "Turns requests scattered across email or chat into a governed, auditable approval workflow.",
      problem:
        "Incomplete intake, unclear approvers and duplicate requests create manual follow-up and weak evidence.",
      solution:
        "A FastAPI and Pydantic API validates requests, calculates approval routes, detects duplicates and preserves every transition in SQLite.",
      outcome:
        "Explicit operational rules, auditable history, notifications and metrics without manual tracking.",
      role: "Workflow and business rule design",
      year: "2026",
      stack: ["Python", "FastAPI", "Pydantic", "SQLite", "Slack Webhooks", "Pytest"],
      href: "https://github.com/JesrigPineda/ops-request-approval-automation",
      status: "active",
      visual: "approval",
    },
    {
      title: "Serverless Ops Health Monitor",
      summary:
        "Monitors critical endpoints and turns silent failures into incidents with context and traceability.",
      problem:
        "A webhook or internal API can fail for hours before the team discovers the operational impact.",
      solution:
        "Cloud Functions runs manual and scheduled checks, persists results in Firestore and creates incidents with correlated logs.",
      outcome:
        "Combines request-driven, time-driven and event-driven patterns in a simple, maintainable serverless architecture.",
      role: "Serverless architecture and observability",
      year: "2026",
      stack: ["TypeScript", "Firebase Functions", "Firestore", "Cloud Scheduler", "Zod", "Vitest"],
      href: "https://github.com/JesrigPineda/serverless-ops-health-monitor",
      status: "active",
      visual: "monitor",
    },
    {
      title: "Local Lead Qualification Agent",
      summary:
        "A local agent that turns conversations into structured data and traceable operational actions.",
      problem:
        "A sales conversation only helps the operation when it produces stable, validated and reusable information.",
      solution:
        "An Ollama, Fastify and Zod agent shares logic across API and CLI, keeps compact memory and records messages, lead state and handoffs in SQLite.",
      outcome:
        "A practical local-first AI architecture without heavyweight frameworks, ready to swap model providers.",
      role: "Orchestration, memory and tool calling",
      year: "2026",
      stack: ["TypeScript", "Fastify", "Ollama", "Zod", "SQLite", "Vitest"],
      href: "https://github.com/JesrigPineda/lead-qualification-agent-local",
      status: "active",
      visual: "agent",
    },
  ],
} satisfies Record<Language, Project[]>;

export const experience = {
  es: [
    {
      role: "IT Manager",
      company: "Alxedo",
      period: "ene. 2025 - ago. 2026",
      description:
        "Dirigí integraciones y automatizaciones entre ecommerce, CRM, logística, facturación y reporting para mantener datos consistentes y procesos trazables.",
      highlights: [
        "Automaticé 4-5 flujos críticos y reduje aproximadamente 8-10 horas semanales de trabajo manual.",
        "Construí reportes y tableros de ventas, envíos y suscripciones para fortalecer el control operativo.",
        "Desarrollé servicios cloud para validar pedidos y clientes antes de que las inconsistencias afectaran la operación.",
      ],
      stack: ["APIs", "Cloud Functions", "Shopify", "Kommo CRM", "Zapier", "Reporting"],
    },
    {
      role: "Software Engineer",
      company: "Alxedo",
      period: "mar. 2022 - ene. 2025",
      description:
        "Construí integraciones, servicios serverless y herramientas internas para conectar Shopify, CRM y procesos operativos.",
      highlights: [
        "Diseñé e integré más de 10 endpoints mediante APIs REST y webhooks.",
        "Implementé automatizaciones para procesar eventos, validar datos y reducir errores operativos.",
        "Contribuí a reducir aproximadamente 18-25% los costos de infraestructura cloud.",
      ],
      stack: ["Node.js", "JavaScript", "Firebase", "Cloud Functions", "REST APIs", "Webhooks"],
    },
    {
      role: "Software Developer Intern",
      company: "Alxedo",
      period: "sept. 2021 - feb. 2022",
      description:
        "Colaboré en el desarrollo de software y APIs para necesidades internas del negocio.",
      highlights: [
        "Apoyé la implementación de soluciones técnicas con acompañamiento del equipo.",
      ],
      stack: ["JavaScript", "APIs", "Backend"],
    },
    {
      role: "Web Developer",
      company: "Freelance",
      period: "ene. 2021 - dic. 2021",
      description:
        "Desarrollé proyectos web para clientes con integraciones API y mejoras funcionales ajustadas a cada operación.",
      highlights: [
        "Entregué sitios y componentes enfocados en necesidades concretas de negocio.",
        "Integré servicios externos y mejoré funcionalidades sobre proyectos ya existentes.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "APIs", "PHP"],
    },
    {
      role: "Full Stack Developer",
      company: "BEMIRA MX",
      period: "jul. 2019 - dic. 2019",
      description:
        "Mantuve y evolucioné la aplicación web interna para mejorar su estabilidad, funcionalidad y experiencia de usuario.",
      highlights: [
        "Depuré el sistema con PHP, JavaScript, HTML y CSS para asegurar la continuidad operativa.",
        "Desarrollé funcionalidades orientadas a la experiencia de usuario y la eficiencia del equipo.",
      ],
      stack: ["PHP", "JavaScript", "HTML", "CSS", "Subversion"],
    },
    {
      role: "Software Developer Intern",
      company: "BEMIRA MX",
      period: "ene. 2019 - jun. 2019",
      description:
        "Desarrollé un prototipo móvil funcional para validar una iniciativa interna de innovación.",
      highlights: [
        "Construí el prototipo en Xamarin y C# con servicios REST y funciones básicas de mapeo.",
        "Diseñé diagramas UML y una base de datos PostgreSQL para comunicar y validar el sistema.",
      ],
      stack: ["Xamarin", "C#", "REST APIs", "PostgreSQL", "UML"],
    },
  ],
  en: [
    {
      role: "IT Manager",
      company: "Alxedo",
      period: "Jan. 2025 - Aug. 2026",
      description:
        "Led integrations and automations across ecommerce, CRM, logistics, billing and reporting to keep data consistent and processes traceable.",
      highlights: [
        "Automated 4-5 critical workflows and saved approximately 8-10 hours of manual work per week.",
        "Built sales, shipping and subscription reports and dashboards to strengthen operational control.",
        "Developed cloud services that validated orders and customers before inconsistencies affected operations.",
      ],
      stack: ["APIs", "Cloud Functions", "Shopify", "Kommo CRM", "Zapier", "Reporting"],
    },
    {
      role: "Software Engineer",
      company: "Alxedo",
      period: "Mar. 2022 - Jan. 2025",
      description:
        "Built integrations, serverless services and internal tools connecting Shopify, CRM and operational processes.",
      highlights: [
        "Designed and integrated more than 10 endpoints using REST APIs and webhooks.",
        "Implemented automations to process events, validate data and reduce operational errors.",
        "Helped reduce cloud infrastructure costs by approximately 18-25%.",
      ],
      stack: ["Node.js", "JavaScript", "Firebase", "Cloud Functions", "REST APIs", "Webhooks"],
    },
    {
      role: "Software Developer Intern",
      company: "Alxedo",
      period: "Sep. 2021 - Feb. 2022",
      description:
        "Contributed to software and API development for internal business needs.",
      highlights: [
        "Supported the implementation of technical solutions with guidance from the team.",
      ],
      stack: ["JavaScript", "APIs", "Backend"],
    },
    {
      role: "Web Developer",
      company: "Freelance",
      period: "Jan. 2021 - Dec. 2021",
      description:
        "Developed web projects for clients with API integrations and feature improvements tailored to each operation.",
      highlights: [
        "Delivered websites and components focused on concrete business needs.",
        "Integrated external services and improved features in existing projects.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "APIs", "PHP"],
    },
    {
      role: "Full Stack Developer",
      company: "BEMIRA MX",
      period: "Jul. 2019 - Dec. 2019",
      description:
        "Maintained and evolved the internal web application to improve stability, functionality and user experience.",
      highlights: [
        "Debugged the system with PHP, JavaScript, HTML and CSS to support operational continuity.",
        "Developed features focused on user experience and team efficiency.",
      ],
      stack: ["PHP", "JavaScript", "HTML", "CSS", "Subversion"],
    },
    {
      role: "Software Developer Intern",
      company: "BEMIRA MX",
      period: "Jan. 2019 - Jun. 2019",
      description:
        "Developed a functional mobile prototype to validate an internal innovation initiative.",
      highlights: [
        "Built the prototype in Xamarin and C# with REST services and basic mapping features.",
        "Designed UML diagrams and a PostgreSQL database to communicate and validate the system.",
      ],
      stack: ["Xamarin", "C#", "REST APIs", "PostgreSQL", "UML"],
    },
  ],
} satisfies Record<Language, Experience[]>;

export const skillGroups = {
  es: [
    {
      title: "Integraciones",
      items: ["REST APIs", "Webhooks", "Shopify", "Kommo CRM", "Zapier", "Postman", "JSON"],
    },
    {
      title: "Backend",
      items: ["Node.js", "TypeScript", "JavaScript", "Express", "Python", "PHP", "SQL", "PostgreSQL"],
    },
    {
      title: "Cloud",
      items: ["Google Cloud", "Cloud Functions", "Firebase", "Firestore", "AWS fundamentals"],
    },
    {
      title: "Operaciones",
      items: [
        "Automatización de procesos",
        "Herramientas internas",
        "Reporting",
        "Ecommerce operations",
        "Process optimization",
        "AI agents",
        "Jira",
        "ClickUp",
      ],
    },
  ],
  en: [
    {
      title: "Integrations",
      items: ["REST APIs", "Webhooks", "Shopify", "Kommo CRM", "Zapier", "Postman", "JSON"],
    },
    {
      title: "Backend",
      items: ["Node.js", "TypeScript", "JavaScript", "Express", "Python", "PHP", "SQL", "PostgreSQL"],
    },
    {
      title: "Cloud",
      items: ["Google Cloud", "Cloud Functions", "Firebase", "Firestore", "AWS fundamentals"],
    },
    {
      title: "Operations",
      items: [
        "Process automation",
        "Internal tools",
        "Reporting",
        "Ecommerce operations",
        "Process optimization",
        "AI agents",
        "Jira",
        "ClickUp",
      ],
    },
  ],
} satisfies Record<Language, SkillGroup[]>;

type Project = {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  role: string;
  year: string;
  stack: string[];
  href: string;
  status: "active" | "archived";
  visual: "commerce" | "approval" | "monitor" | "agent";
};

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
  stack?: string[];
};

type SkillGroup = {
  title: string;
  items: string[];
};
