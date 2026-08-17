export type Language = "es" | "en";

export const professionalRoles = {
  es: ["Software Engineer", "Integration Engineer", "Automation Engineer", "Full Stack Developer"],
  en: ["Software Engineer", "Integration Engineer", "Automation Engineer", "Full Stack Developer"],
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
    { label: "Blog", href: "#notes" },
    { label: "Contacto", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Tools", href: "#skills" },
    { label: "Blog", href: "#notes" },
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
      actions: [
        { label: "Ver proyectos", href: "#projects" },
        { label: "Contactar", href: "#contact" },
      ],
      stats: [
        { value: "10+ endpoints", label: "diseñados e integrados" },
        { value: "8-10 h/sem", label: "ahorradas mediante automatización" },
        { value: "18-25%", label: "reducción de costos cloud" },
      ],
    },
    about: {
      eyebrow: "Perfil",
      title: "Sobre mí",
      description: "La forma en que pienso y construyo sistemas.",
      copy:
        "Soy ingeniero de software especializado en integraciones y automatización. Traduzco necesidades operativas en APIs, servicios cloud y herramientas internas claras, medibles y mantenibles.",
      cardCopy: "Sistemas claros para operaciones reales.",
      focusAreas: ["Integraciones API", "Automatización Operativa", "Cloud Workflows"],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Proyectos destacados",
      description: "Trabajo práctico orientado a integraciones, backend y operación.",
      cardLabel: "Caso práctico",
      github: "Ver GitHub",
      status: {
        active: "Activo",
        archived: "Archivado",
      },
    },
    experience: {
      eyebrow: "Trayectoria",
      title: "Experiencia",
      description: "De desarrollo de software a operación tecnológica e integración de sistemas.",
    },
    skills: {
      eyebrow: "Herramientas",
      title: "Stack y enfoque",
      description: "Tecnologías que uso para conectar sistemas y mantener flujos estables.",
    },
    notes: {
      eyebrow: "Blog",
      title: "Ideas sobre integración y automatización",
      description:
        "Próximamente publicaré en Hashnode notas prácticas sobre APIs, webhooks, automatización operativa y cloud workflows.",
      cta: "Próximamente",
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Construimos algo útil?",
      copy:
        "Si tu operación depende de muchas herramientas desconectadas, puedo ayudarte a ordenarlas.",
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
      actions: [
        { label: "View projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      stats: [
        { value: "10+ endpoints", label: "designed and integrated" },
        { value: "8-10 hrs/week", label: "saved through automation" },
        { value: "18-25%", label: "reduction in cloud costs" },
      ],
    },
    about: {
      eyebrow: "Profile",
      title: "About me",
      description: "How I think about and build systems.",
      copy:
        "I am a software engineer specializing in integration and automation. I translate operational needs into clear, measurable and maintainable APIs, cloud services and internal tools.",
      cardCopy: "Clear systems for real operations.",
      focusAreas: ["API Integrations", "Operations Automation", "Cloud Workflows"],
    },
    projects: {
      eyebrow: "Projects",
      title: "Featured projects",
      description: "Practical work across integrations, backend and operations.",
      cardLabel: "Case study",
      github: "View GitHub",
      status: {
        active: "Active",
        archived: "Archived",
      },
    },
    experience: {
      eyebrow: "Background",
      title: "Experience",
      description: "From software development to technology operations and systems integration.",
    },
    skills: {
      eyebrow: "Tools",
      title: "Stack and focus",
      description: "Technologies I use to connect systems and keep workflows stable.",
    },
    notes: {
      eyebrow: "Blog",
      title: "Notes on integration and automation",
      description:
        "Soon I will publish practical Hashnode notes about APIs, webhooks, operations automation and cloud workflows.",
      cta: "Coming soon",
    },
    contact: {
      eyebrow: "Contact",
      title: "Build something useful?",
      copy:
        "If your operation depends on too many disconnected tools, I can help you bring them together.",
    },
    footer: "Integrations, automation and cloud workflows.",
  },
} satisfies Record<Language, unknown>;

export const projects = {
  es: [
    {
      title: "Commerce Ops Webhook Bridge",
      description:
        "Puente backend para recibir pedidos de Shopify, validar reglas de negocio y dejar trazabilidad operativa en Firestore.",
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
      href: links.github,
      status: "active",
      image: "commerce",
      imageAlt: "Vista previa del panel Commerce Ops Webhook Bridge.",
    },
    {
      title: "WaterWatch",
      description:
        "Plataforma ciudadana para reportar fugas de agua, con base cloud para capturar incidencias y visualizar reportes.",
      stack: ["Firebase", "Cloud Functions", "Node.js", "JavaScript"],
      href: links.github,
      status: "archived",
      image: "waterwatch",
      imageAlt: "Captura de pantalla de la landing page de WaterWatch.",
    },
    {
      title: "SafePaws",
      description:
        "Experiencia web para conectar dueños de mascotas con cuidadores, apoyada por Firebase y flujos de búsqueda simples.",
      stack: ["Firebase", "Cloud Functions", "Node.js", "React"],
      href: links.github,
      status: "archived",
      image: "safepaws",
      imageAlt: "Captura de pantalla de la landing page de SafePaws.",
    },
    {
      title: "Turi",
      description:
        "Landing turística para descubrir pueblos mágicos de México, combinando búsqueda, mapas y contenido visual.",
      stack: ["React", "JavaScript", "CSS", "Maps"],
      href: links.github,
      status: "archived",
      image: "turi",
      imageAlt: "Captura de pantalla de la landing page de Turi.",
    },
  ],
  en: [
    {
      title: "Commerce Ops Webhook Bridge",
      description:
        "Backend bridge for receiving Shopify orders, validating business rules and keeping operational traceability in Firestore.",
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
      href: links.github,
      status: "active",
      image: "commerce",
      imageAlt: "Preview of the Commerce Ops Webhook Bridge dashboard.",
    },
    {
      title: "WaterWatch",
      description:
        "Citizen platform for reporting water leaks, with cloud foundations for capturing incidents and visualizing reports.",
      stack: ["Firebase", "Cloud Functions", "Node.js", "JavaScript"],
      href: links.github,
      status: "archived",
      image: "waterwatch",
      imageAlt: "Screenshot of the WaterWatch landing page.",
    },
    {
      title: "SafePaws",
      description:
        "Web experience for connecting pet owners with caretakers, supported by Firebase and simple search flows.",
      stack: ["Firebase", "Cloud Functions", "Node.js", "React"],
      href: links.github,
      status: "archived",
      image: "safepaws",
      imageAlt: "Screenshot of the SafePaws landing page.",
    },
    {
      title: "Turi",
      description:
        "Tourism landing page for discovering magical towns in Mexico, combining search, maps and visual content.",
      stack: ["React", "JavaScript", "CSS", "Maps"],
      href: links.github,
      status: "archived",
      image: "turi",
      imageAlt: "Screenshot of the Turi landing page.",
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

export const articles = {
  es: [
    {
      title: "Writing on Hashnode",
      description:
        "Notas prácticas sobre integraciones, automatización y sistemas cloud para operaciones reales.",
      date: "Próximamente",
      tags: ["APIs", "Webhooks", "Cloud"],
      url: null,
    },
  ],
  en: [
    {
      title: "Writing on Hashnode",
      description:
        "Practical notes about integrations, automation and cloud systems for real operations.",
      date: "Coming soon",
      tags: ["APIs", "Webhooks", "Cloud"],
      url: null,
    },
  ],
} satisfies Record<Language, Article[]>;

type Project = {
  title: string;
  description: string;
  stack: string[];
  href: string;
  status: "active" | "archived";
  image: "commerce" | "waterwatch" | "safepaws" | "turi";
  imageAlt: string;
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

type Article = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  url: string | null;
};
