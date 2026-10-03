import type { Project } from "./types";

export const commerceOps = {
  "slug": "commerce-ops",
  "order": 1,
  "featuredOrder": 1,
  "status": "public",
  "projectType": "personal-prototype",
  "reviewStatus": "needs-review",
  "title": "Commerce Ops Webhook Bridge",
  "category": {
    "es": "Integración · Confiabilidad",
    "en": "Integration · Reliability"
  },
  "summary": {
    "es": "Convierte eventos crudos de Shopify en órdenes internas seguras, consistentes y trazables.",
    "en": "Turns raw Shopify events into safe, consistent and traceable internal orders."
  },
  "technologies": [
    "Node.js",
    "TypeScript",
    "Express",
    "Zod",
    "Firestore",
    "Vitest"
  ],
  "links": {
    "repository": "https://github.com/JesrigPineda/commerce-ops-webhook-bridge"
  },
  "caseStudy": {
    "es": {
      "thesis": "Servicio backend para explorar el procesamiento controlado de eventos de ecommerce.",
      "context": "Proyecto personal inspirado en problemas de integración y procesamiento de eventos de ecommerce conocidos durante mi experiencia profesional.",
      "problem": "Un evento externo necesita verificarse, validarse y traducirse antes de convertirse en una orden interna consistente.",
      "built": [
        "Endpoint para recibir webhooks de órdenes de Shopify y verificar su firma HMAC.",
        "Validación con Zod y mapeo del payload a un contrato SalesOrder.",
        "Reglas de negocio y control de duplicados mediante una clave de idempotencia.",
        "Persistencia intercambiable en archivo o Firestore, con consultas de eventos procesados."
      ],
      "decisions": [
        { "title": "Verificar antes de procesar", "detail": "La firma HMAC se comprueba sobre el cuerpo original antes de aceptar el evento." },
        { "title": "Traducir el contrato externo", "detail": "Zod valida la entrada y el mapper la convierte al modelo interno SalesOrder." },
        { "title": "Controlar duplicados", "detail": "La idempotencia usa el identificador del webhook o una alternativa basada en la orden antes de persistir." }
      ],
      "tradeoff": "El adaptador de archivo facilita probar el flujo localmente; Firestore ofrece otra opción de persistencia. El prototipo no incluye colas, bus de eventos ni soporte para varios proveedores.",
      "demonstrates": ["Verificación de webhooks externos", "Validación y normalización de datos", "Idempotencia y persistencia intercambiable"],
      "improvements": ["Hacer explícito el comportamiento ante reintentos y fallos de persistencia.", "Añadir señales para seguir un evento de extremo a extremo sin depender sólo del registro almacenado."],
      "flow": [
        "Webhook Shopify",
        "HMAC",
        "Zod + SalesOrder",
        "Reglas + idempotencia",
        "Archivo / Firestore"
      ]
    },
    "en": {
      "thesis": "A backend service exploring controlled processing of ecommerce events.",
      "context": "A personal project inspired by ecommerce integration and event-processing problems encountered through my professional experience.",
      "problem": "An external event must be verified, validated and translated before it becomes a consistent internal order.",
      "built": [
        "An endpoint for Shopify order webhooks with HMAC signature verification.",
        "Zod validation and payload mapping to a SalesOrder contract.",
        "Business rules and duplicate control through an idempotency key.",
        "Interchangeable file or Firestore persistence, with processed-event queries."
      ],
      "decisions": [
        { "title": "Verify before processing", "detail": "The HMAC signature is checked against the raw body before accepting the event." },
        { "title": "Translate the external contract", "detail": "Zod validates the input and a mapper converts it to the internal SalesOrder model." },
        { "title": "Control duplicates", "detail": "Idempotency uses the webhook identifier or an order-based fallback before persistence." }
      ],
      "tradeoff": "The file adapter makes local exploration simple; Firestore provides another persistence option. The prototype has no queue, event bus or multi-provider support.",
      "demonstrates": ["External webhook verification", "Data validation and normalization", "Idempotency and interchangeable persistence"],
      "improvements": ["Define retry behavior and persistence-failure handling more explicitly.", "Add signals to trace an event end to end beyond the stored record."],
      "flow": [
        "Shopify webhook",
        "HMAC",
        "Zod + SalesOrder",
        "Rules + idempotency",
        "File / Firestore"
      ]
    }
  },
  "visual": {
    "caseStudy": "commerce",
    "home": {
      "kind": "commerce",
      "labels": {
        "es": [
          "Evento",
          "Webhook",
          "Validar",
          "Procesar"
        ],
        "en": [
          "Event",
          "Webhook",
          "Validate",
          "Process"
        ]
      },
      "description": {
        "es": "Flujo conceptual de un evento recibido por webhook, validado y procesado.",
        "en": "Conceptual flow of an event received by webhook, validated and processed."
      }
    }
  }
} satisfies Project;
