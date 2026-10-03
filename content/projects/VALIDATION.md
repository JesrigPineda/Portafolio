# Project content validation

The canonical catalog contains three **personal prototypes**: Commerce Ops Webhook Bridge, Serverless Ops Health Monitor, and Origina Lead Agent. Jesrig confirms that their ideas were primarily inspired by problems, patterns, and needs encountered through professional experience. They were not built as production products for Alxedo, a client, or another employer. AI tools substantially assisted prototyping and implementation; this is a development-process fact, not evidence of an implemented AI capability in Commerce Ops or Health Monitor and not a promotional claim for Home.

All three records keep `reviewStatus: "needs-review"` until their full case-study narratives are approved. `projectType: "personal-prototype"` describes ownership and maturity; `status: "public"` describes publication of the project/repository. Neither is a factual-approval flag.

Code, README files, package manifests, configuration, and tests can verify **implemented technical capabilities**. An existing portfolio sentence alone cannot. The repository evidence for each project supports the following limited claims:

| Project | Technical capabilities supported by project artifacts | Still requires separate evidence or review |
| --- | --- | --- |
| [Commerce Ops](https://github.com/JesrigPineda/commerce-ops-webhook-bridge) | Shopify order-webhook handling, HMAC verification, Zod validation, `SalesOrder` mapping, business rules, idempotency, and file/Firestore persistence. | Production deployment or adoption, real transaction volume, business outcome, and the case-study interpretation of design decisions. |
| [Health Monitor](https://github.com/JesrigPineda/serverless-ops-health-monitor) | Firebase Functions 2nd gen, manual/scheduled checks, Firestore-triggered follow-up, persisted checks/incidents, structured logs, and the listed stack. | Real monitored targets, live alert operations, enterprise use, incident volume, and operational impact. |
| [Origina Lead Agent](https://github.com/JesrigPineda/origina-lead-agent) | Portfolio MVP with a WhatsApp-style webhook mock, simulated voice, SQLite memory, LangChain tools, mock CRM, and handoff requests. | Real WhatsApp/voice/CRM connections, completed human handoffs, real users or leads, and commercial results. |

Do not infer business metrics, production impact, real organizational use, users, transaction volume, or commercial results from the existence of code. Do not present these projects as client or employer deliveries. Before final case studies are written, review project-specific facts and visible copy in both languages. A technical capability may be verified while the overall record remains `needs-review`.
