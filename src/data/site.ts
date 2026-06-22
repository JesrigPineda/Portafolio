export type Language = "es" | "en";

export const links = {
  github: "https://github.com/jesrig",
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
      role: "Integration Engineer",
      menu: "Menú",
      close: "Cerrar",
      connect: "Conectar",
    },
    hero: {
      title: "Hola, soy Jesrig",
      role: "Integration Engineer",
      headline: "Conecto sistemas para que las operaciones fluyan mejor.",
      subheadline:
        "Diseño integraciones, automatizaciones y cloud workflows para ecommerce, CRM, reporting y herramientas internas.",
      scrollLabel: "Explorar",
      actions: [
        { label: "Ver proyectos", href: "#projects" },
        { label: "Contactar", href: "#contact" },
      ],
      stats: [
        { value: "4+ años", label: "construyendo software operativo" },
        { value: "APIs + Cloud", label: "integraciones, webhooks y workflows" },
        { value: "Ops first", label: "sistemas claros para equipos reales" },
      ],
    },
    about: {
      eyebrow: "Perfil",
      title: "Sobre mí",
      description: "La forma en que pienso y construyo sistemas.",
      copy:
        "Construyo software para conectar plataformas, ordenar datos y reducir tareas repetitivas. Me interesa que los sistemas sean simples de entender, mantener y operar.",
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
      role: "Integration Engineer",
      menu: "Menu",
      close: "Close",
      connect: "Connect",
    },
    hero: {
      title: "Hey, I'm Jesrig",
      role: "Integration Engineer",
      headline: "I connect systems so operations run smoother.",
      subheadline:
        "I design integrations, automations and cloud workflows for ecommerce, CRM, reporting and internal tools.",
      scrollLabel: "Explore",
      actions: [
        { label: "View projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      stats: [
        { value: "4+ years", label: "building operational software" },
        { value: "APIs + Cloud", label: "integrations, webhooks and workflows" },
        { value: "Ops first", label: "clear systems for real teams" },
      ],
    },
    about: {
      eyebrow: "Profile",
      title: "About me",
      description: "How I think about and build systems.",
      copy:
        "I build software that connects platforms, organizes data and reduces repetitive work. I care about systems that are easy to understand, maintain and operate.",
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
      period: "ene. 2025 - actualidad",
      description:
        "Orquesto integraciones y automatizaciones para que ecommerce, CRM, logística y reporting trabajen con datos consistentes.",
      highlights: [
        "Reduzco captura manual conectando flujos entre venta, seguimiento y reportes.",
        "Mejoro trazabilidad entre equipos al centralizar eventos y estados operativos.",
        "Diseño automatizaciones mantenibles para que los datos no dependan de pasos manuales.",
      ],
      stack: ["APIs", "Webhooks", "Shopify", "CRM", "Reporting", "Automation"],
    },
    {
      role: "Software Engineer",
      company: "Alxedo",
      period: "sept. 2021 - ene. 2025",
      description:
        "Construí APIs, servicios cloud y flujos internos con Node.js, Firebase, GCP y REST APIs para resolver procesos operativos reales.",
      highlights: [
        "Implementé endpoints y servicios backend para conectar herramientas internas.",
        "Trabajé con Firebase, Cloud Functions y bases de datos para apps de operación diaria.",
        "Refactoricé flujos existentes para hacerlos más claros, mantenibles y fáciles de operar.",
      ],
      stack: ["Node.js", "Firebase", "GCP", "REST APIs", "JavaScript", "Firestore"],
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
      period: "ene. 2019 - dic. 2019",
      description:
        "Participé en la mejora de aplicaciones internas, prototipos y herramientas para equipos operativos.",
      highlights: [
        "Di soporte y evolución a herramientas internas usadas por equipos operativos.",
        "Creé prototipos funcionales para validar mejoras antes de llevarlas a producción.",
      ],
      stack: ["Full Stack", "JavaScript", "PHP", "MySQL", "Internal Tools"],
    },
  ],
  en: [
    {
      role: "IT Manager",
      company: "Alxedo",
      period: "Jan. 2025 - Present",
      description:
        "I orchestrate integrations and automations so ecommerce, CRM, logistics and reporting work with consistent data.",
      highlights: [
        "Reduce manual entry by connecting sales, tracking and reporting workflows.",
        "Improve traceability across teams by centralizing operational events and statuses.",
        "Design maintainable automations so data does not depend on manual handoffs.",
      ],
      stack: ["APIs", "Webhooks", "Shopify", "CRM", "Reporting", "Automation"],
    },
    {
      role: "Software Engineer",
      company: "Alxedo",
      period: "Sep. 2021 - Jan. 2025",
      description:
        "Built APIs, cloud services and internal workflows with Node.js, Firebase, GCP and REST APIs for real operational processes.",
      highlights: [
        "Implemented backend services and endpoints that connect internal tools.",
        "Worked with Firebase, Cloud Functions and databases for day-to-day operations apps.",
        "Refactored existing workflows to make them clearer, maintainable and easier to operate.",
      ],
      stack: ["Node.js", "Firebase", "GCP", "REST APIs", "JavaScript", "Firestore"],
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
      period: "Jan. 2019 - Dec. 2019",
      description:
        "Contributed to internal application improvements, prototypes and tools for operations teams.",
      highlights: [
        "Supported and evolved internal tools used by operations teams.",
        "Created functional prototypes to validate process improvements before production.",
      ],
      stack: ["Full Stack", "JavaScript", "PHP", "MySQL", "Internal Tools"],
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
      items: ["Node.js", "TypeScript", "JavaScript", "Express", "Python básico", "PHP"],
    },
    {
      title: "Cloud",
      items: ["Google Cloud Functions", "Firebase", "Firestore", "GitHub Actions", "AWS fundamentals"],
    },
    {
      title: "Operaciones",
      items: [
        "Automatización de procesos",
        "Herramientas internas",
        "Reporting",
        "Ecommerce operations",
        "Process optimization",
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
      items: ["Node.js", "TypeScript", "JavaScript", "Express", "Basic Python", "PHP"],
    },
    {
      title: "Cloud",
      items: ["Google Cloud Functions", "Firebase", "Firestore", "GitHub Actions", "AWS fundamentals"],
    },
    {
      title: "Operations",
      items: [
        "Process automation",
        "Internal tools",
        "Reporting",
        "Ecommerce operations",
        "Process optimization",
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
