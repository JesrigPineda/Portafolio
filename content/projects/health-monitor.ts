import type { Project } from "./types";

export const healthMonitor = {
  "slug": "health-monitor",
  "order": 2,
  "featuredOrder": 2,
  "status": "public",
  "projectType": "personal-prototype",
  "reviewStatus": "needs-review",
  "title": "Serverless Ops Health Monitor",
  "category": {
    "es": "Observabilidad · Operaciones",
    "en": "Observability · Operations"
  },
  "summary": {
    "es": "Detecta fallos silenciosos en endpoints críticos y los convierte en incidentes con contexto.",
    "en": "Detects silent failures in critical endpoints and turns them into incidents with context."
  },
  "technologies": [
    "TypeScript",
    "Cloud Functions",
    "Firestore",
    "Cloud Scheduler",
    "Zod",
    "Vitest"
  ],
  "links": {
    "repository": "https://github.com/JesrigPineda/serverless-ops-health-monitor"
  },
  "caseStudy": {
    "es": {
      "thesis": "Monitor serverless para explorar detección de fallos y trazabilidad de comprobaciones.",
      "context": "Proyecto personal inspirado en necesidades de monitoreo y trazabilidad conocidas durante mi experiencia profesional; explora funciones HTTP, programadas y orientadas a eventos.",
      "problem": "Detectar una falla no basta: hace falta contexto para clasificarla y seguir lo que ocurrió.",
      "built": [
        "API para comprobaciones manuales y función programada para los targets configurados.",
        "Registro de cada comprobación en Firestore con resultado, motivo de fallo y correlation ID.",
        "Creación de incidentes para fallos relevantes y trigger de seguimiento al crear un incidente.",
        "Validación de entrada, manejo de timeout y logs estructurados."
      ],
      "decisions": [
        { "title": "Dos formas de iniciar un check", "detail": "Una solicitud HTTP permite ejecutarlo manualmente; una función programada recorre los targets configurados." },
        { "title": "Separar check e incidente", "detail": "Se conserva cada ejecución, mientras que los fallos relevantes crean un registro de incidente vinculado." },
        { "title": "Mantener el contexto", "detail": "Los logs estructurados y correlation IDs relacionan ejecución, clasificación e incidente." }
      ],
      "tradeoff": "Un job programado recorre los targets configurados para mantener pequeño el prototipo. Registra incidentes y seguimiento en logs, pero no incluye dashboard ni alertas multicanal.",
      "demonstrates": ["Ejecución manual y programada", "Clasificación de fallos e incidentes", "Trazabilidad con Firestore y correlation IDs"],
      "improvements": ["Evaluar si cada incidente conserva suficiente contexto para actuar sin reconstruir la ejecución.", "Definir una salida de alertas cuando el registro de incidentes y logs ya no sea suficiente."],
      "flow": [
        "HTTP manual",
        "Scheduler",
        "Target configurado",
        "Check",
        "Clasificación",
        "Incidente",
        "Firestore"
      ]
    },
    "en": {
      "thesis": "A serverless monitor exploring failure detection and check traceability.",
      "context": "A personal project inspired by monitoring and traceability needs encountered through my professional experience; it explores HTTP, scheduled and event-driven functions.",
      "problem": "Detection alone is insufficient: failures need context to be classified and traced.",
      "built": [
        "An API for manual checks and a scheduled function for configured targets.",
        "Each check stored in Firestore with its result, failure reason and correlation ID.",
        "Incident records for relevant failures and a follow-up trigger on incident creation.",
        "Input validation, timeout handling and structured logs."
      ],
      "decisions": [
        { "title": "Two ways to start a check", "detail": "An HTTP request runs one manually; a scheduled function iterates over configured targets." },
        { "title": "Separate checks from incidents", "detail": "Every execution is retained, while relevant failures create a linked incident record." },
        { "title": "Keep the context", "detail": "Structured logs and correlation IDs connect execution, classification and incident." }
      ],
      "tradeoff": "One scheduled job iterates over configured targets to keep the prototype small. It records incidents and logs follow-up events, but has no dashboard or multichannel alerting.",
      "demonstrates": ["Manual and scheduled execution", "Failure classification and incidents", "Traceability with Firestore and correlation IDs"],
      "improvements": ["Assess whether each incident retains enough context to act without reconstructing the run.", "Define an alert output when incident records and logs are no longer sufficient."],
      "flow": [
        "Manual HTTP",
        "Scheduler",
        "Configured target",
        "Check",
        "Classification",
        "Incident",
        "Firestore"
      ]
    }
  },
  "visual": {
    "caseStudy": "health",
    "home": {
      "kind": "health",
      "labels": {
        "es": [
          "HTTP",
          "Agenda",
          "Evento",
          "Check",
          "Estado"
        ],
        "en": [
          "HTTP",
          "Schedule",
          "Event",
          "Check",
          "Status"
        ]
      },
      "description": {
        "es": "Fuentes HTTP, programadas y por evento convergen en una comprobación y un estado.",
        "en": "HTTP, scheduled and event sources converge on a check and a status."
      }
    }
  }
} satisfies Project;
