import type { Project } from "./types";

export const originaLeadAgent = {
  "slug": "origina-lead-agent",
  "order": 3,
  "featuredOrder": 3,
  "status": "public",
  "projectType": "personal-prototype",
  "reviewStatus": "needs-review",
  "title": "Origina Lead Agent",
  "category": {
    "es": "AI aplicada · Orquestación",
    "en": "Applied AI · Orchestration"
  },
  "summary": {
    "es": "Prototipo para calificar y dar seguimiento a leads financieros mediante chat y voz simulada, con memoria y solicitud de handoff humano.",
    "en": "A prototype for qualifying and following up with financial leads through chat and simulated voice, with memory and human handoff requests."
  },
  "technologies": [
    "Node.js",
    "TypeScript",
    "Fastify",
    "LangChain JS",
    "Ollama",
    "SQLite"
  ],
  "links": {
    "repository": "https://github.com/JesrigPineda/origina-lead-agent"
  },
  "caseStudy": {
    "es": {
      "thesis": "Prototipo conversacional para explorar herramientas, estado y solicitudes de handoff humano.",
      "context": "Prototipo personal inspirado en patrones de automatización conocidos durante mi experiencia profesional; explora chat, voz simulada, herramientas, estado y solicitud de handoff humano.",
      "problem": "Coordinar conversación, herramientas, memoria y solicitudes de handoff humano sin delegar las reglas de negocio al modelo.",
      "built": [
        "API de mensajes y webhook estilo WhatsApp simulado para recibir conversaciones.",
        "Orquestador con LangChain y herramientas internas para actualizar el lead, registrar notas y solicitar handoff.",
        "Memoria y trazas de conversación persistidas en SQLite; CRM local simulado.",
        "Turnos de voz simulados mediante abstracciones STT/TTS."
      ],
      "decisions": [
        { "title": "Separar agente y reglas", "detail": "LangChain coordina el modelo y las herramientas; la aplicación conserva las reglas, el estado y la persistencia." },
        { "title": "Persistir el contexto", "detail": "Los mensajes recientes, el resumen de memoria y los datos del lead se recuperan de SQLite para cada turno." },
        { "title": "Handoff como solicitud", "detail": "Una herramienta registra la solicitud; el prototipo no representa una transferencia humana completada." }
      ],
      "tradeoff": "WhatsApp, CRM y la capa STT/TTS se simulan. Esto permite explorar orquestación y trazabilidad sin afirmar integraciones reales ni operación en un entorno financiero de producción.",
      "demonstrates": ["Orquestación de agente y herramientas", "Memoria y estado conversacional", "Solicitud de handoff y trazabilidad"],
      "improvements": ["Agregar conversaciones reproducibles para evaluar decisiones y uso de herramientas.", "Probar un adaptador de CRM real detrás de la interfaz actual antes de ampliar canales."],
      "flow": [
        "Chat / voz simulada",
        "Fastify",
        "Orquestador + agente",
        "Herramientas",
        "Solicitud de handoff",
        "SQLite"
      ]
    },
    "en": {
      "thesis": "A conversational prototype exploring tools, state and human handoff requests.",
      "context": "A personal prototype inspired by automation patterns encountered through my professional experience; it explores chat, simulated voice, tools, state and human handoff requests.",
      "problem": "Coordinate conversation, tools, memory and human handoff requests without delegating business rules to the model.",
      "built": [
        "A message API and mock WhatsApp-style webhook for inbound conversations.",
        "A LangChain orchestrator with internal tools to update leads, record notes and request handoff.",
        "Conversation memory and traces persisted in SQLite, with a local CRM mock.",
        "Simulated voice turns through STT/TTS abstractions."
      ],
      "decisions": [
        { "title": "Separate agent and rules", "detail": "LangChain coordinates the model and tools; the application retains rules, state and persistence." },
        { "title": "Persist context", "detail": "Recent messages, the memory summary and lead data are loaded from SQLite for each turn." },
        { "title": "Handoff as a request", "detail": "A tool records the request; the prototype does not represent a completed human transfer." }
      ],
      "tradeoff": "WhatsApp, CRM and the STT/TTS layer are simulated. This lets the prototype explore orchestration and traceability without claiming real integrations or operation in a production financial environment.",
      "demonstrates": ["Agent and tool orchestration", "Conversation memory and state", "Handoff requests and traceability"],
      "improvements": ["Add replayable conversations to evaluate decisions and tool use.", "Test a real CRM adapter behind the current interface before expanding channels."],
      "flow": [
        "Chat / simulated voice",
        "Fastify",
        "Orchestrator + agent",
        "Tools",
        "Handoff request",
        "SQLite"
      ]
    }
  },
  "visual": {
    "caseStudy": "agent",
    "home": {
      "kind": "agent",
      "labels": {
        "es": [
          "Usuario",
          "Agente",
          "Herramienta",
          "Solicitud"
        ],
        "en": [
          "User",
          "Agent",
          "Tool",
          "Request"
        ]
      },
      "description": {
        "es": "Interacción conceptual entre usuario, agente, herramienta y solicitud de transferencia humana.",
        "en": "Conceptual interaction between a user, agent, tool and human handoff request."
      }
    }
  }
} satisfies Project;
