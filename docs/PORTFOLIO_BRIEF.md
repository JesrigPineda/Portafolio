# Portfolio Brief — Jesrig Pineda

## Objetivo

Rediseñar el portafolio profesional de Jesrig Pineda para comunicar de forma clara su experiencia como Software Engineer especializado en:

- Backend
- Integraciones
- APIs y webhooks
- Automatización
- Cloud / Serverless
- AI aplicada

El portafolio debe estar orientado principalmente a recruiters, hiring managers y equipos técnicos.

El objetivo no es crear una landing page de producto ni un sitio visualmente extravagante.

Debe sentirse como un portafolio tecnológico profesional, moderno, minimalista y cuidadosamente diseñado.

---

## Dirección visual

### Referencias principales

**Fora**
https://fora.so/

Tomar como referencia:

- uso generoso de whitespace
- grandes bloques visuales
- cards
- jerarquía tipográfica
- transiciones suaves
- composición minimalista
- sensación de producto cuidado

No copiar branding, colores ni layout literalmente.

---

**Apple**

Tomar como referencia:

- simplicidad visual
- tipografía protagonista
- animaciones suaves
- scroll storytelling cuando aporte valor
- transiciones naturales
- superficies limpias
- profundidad muy sutil
- excelente responsive
- motion utilizado para dirigir atención

Evitar efectos innecesarios.

---

**Aman Kumar**

https://amankumar.ai/projects

Tomar como referencia principalmente para:

- arquitectura de proyectos
- navegación clara hacia los proyectos
- proyectos como contenido
- exploración sencilla
- case studies individuales

---

## Elementos actuales que deben conservarse

El proyecto actual ya contiene una buena base técnica.

Conservar:

- Next.js
- TypeScript
- App Router
- navbar actual como concepto
- avatar + nombre en navbar
- selector ES / EN
- dark / light mode
- estructura SEO existente
- Open Graph
- robots
- manifest
- sitemap
- accesibilidad existente
- soporte para `prefers-reduced-motion`
- dominio `jesrig.dev`

El navbar puede pulirse visualmente pero no debe reemplazarse por uno completamente diferente.

---

## Problema actual

La página principal intenta mostrar demasiado contenido directamente.

Actualmente existen dos conceptos parcialmente duplicados:

1. Projects dentro de Home.
2. `/work` con índice y case studies individuales.

Esto debe simplificarse.

---

# Arquitectura propuesta

## `/`

Home debe funcionar como introducción y escaparate.

No debe contener toda la información del CV.

### Estructura

Navbar

Hero

Selected Work

Professional Impact

What I Do

Experience

About / Stack

Contact

Footer

---

# Hero

Debe responder rápidamente:

1. Quién es Jesrig.
2. Qué tipo de problemas resuelve.
3. Qué puede explorar el visitante.

Ejemplo conceptual:

Jesrig Pineda

Software Engineer

I build backend systems, integrations and automations that connect software, data and operations.

[Explore my work]
[LinkedIn]

No sobrecargar el hero con tecnologías.

---

# Selected Work

Home sólo debe mostrar aproximadamente 3 proyectos principales.

Prioridad inicial:

1. Commerce Ops Webhook Bridge
2. Serverless Ops Health Monitor
3. Origina Lead Agent

Cada proyecto debe tener más presencia visual que las cards actuales.

La imagen / representación visual del proyecto debe ser protagonista.

Las tecnologías son información secundaria.

Cada proyecto lleva hacia su case study.

---

# Navegación de proyectos

Los tres proyectos se descubren en las cards de Selected Work en Home y llevan directamente a `/projects/[slug]`.

No existe un índice público `/projects`. Una visita a `/projects` o a la antigua ruta `/work` vuelve a `/#projects`. Las antiguas rutas `/work/[slug]` redirigen permanentemente al case study correspondiente.

---

# `/projects/[slug]`

Cada proyecto debe ser tratado como un case study.

Estructura aproximada:

Hero

Overview

Problem

Context

Architecture / Flow

What I built

Technical decisions

Trade-offs

Result / Evidence

Technology

What I would improve

GitHub / Demo

Next project

---

# Diseño

## Principios

Minimalista.

Mucho espacio.

Una idea principal por sección.

Tipografía antes que decoración.

Las cards deben tener propósito.

No introducir gradientes simplemente por decoración.

Evitar glassmorphism excesivo.

Evitar interfaces similares a dashboards SaaS.

Evitar exceso de badges tecnológicos.

Evitar animar todos los elementos.

---

# Motion

Las animaciones forman parte del sistema de diseño.

No deben añadirse al final como decoración.

## Permitido

- fade + translate
- stagger muy ligero
- scale sutil
- reveals
- cambios de navbar durante scroll
- microinteracciones de botones/cards
- transiciones entre estados
- scroll-based motion cuando exista una justificación visual

## Evitar

- parallax excesivo
- elementos flotando permanentemente
- animaciones lentas
- scroll hijacking
- cursores personalizados
- animaciones que afecten legibilidad

Siempre respetar:

`prefers-reduced-motion`

Priorizar propiedades:

- transform
- opacity

---

# Performance

El diseño no debe comprometer rendimiento.

Objetivos:

- minimizar JavaScript client-side
- preferir Server Components
- optimizar imágenes con Next/Image
- lazy loading cuando corresponda
- evitar animation libraries si CSS/Web APIs pueden resolverlo de manera sencilla
- evitar dependencias únicamente por pequeños efectos

---

# SEO

Mantener y mejorar:

- metadata por página
- canonical
- sitemap
- robots
- Open Graph
- Twitter cards
- semantic HTML

Agregar cuando corresponda:

- JSON-LD Person
- JSON-LD WebSite
- JSON-LD CreativeWork / SoftwareSourceCode para proyectos
- metadata específica para cada proyecto
- sitemap con Home, About y los tres case studies públicos

El contenido visible debe ser prioritario frente al SEO basado únicamente en keywords.

---

# Responsive

Diseñar mobile-first.

Validar al menos:

- 320px
- 375px
- 768px
- 1024px
- 1440px+

No asumir hover como interacción necesaria.

---

# Accesibilidad

Mantener:

- navegación mediante teclado
- focus-visible
- skip link
- HTML semántico
- contraste apropiado
- reduced motion
- labels accesibles
- targets táctiles adecuados

---

# Restricciones para IA / Codex

No inventar:

- experiencia profesional
- métricas
- clientes
- resultados
- tecnologías
- responsabilidades
- certificaciones

El contenido profesional debe provenir de `CONTENT_SOURCE.md`.

No reconstruir el proyecto completo si un componente existente puede evolucionarse.

No reemplazar tecnologías sin una razón técnica clara.

No introducir dependencias sin justificar su necesidad.

No modificar el navbar radicalmente.

No sacrificar SEO, accesibilidad o rendimiento para conseguir una animación.

---

# Criterio final

El sitio debe transmitir:

> Este desarrollador entiende sistemas reales y sabe convertir problemas operativos en software claro, confiable y mantenible.

No:

> Este desarrollador sabe hacer muchas animaciones.
