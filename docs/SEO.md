# SEO Strategy — Jesrig Portfolio

> Technical and content SEO rules for the portfolio.
>
> Codex must use this document when creating or modifying pages, metadata, structured data, routing or indexable content.

---

# 1. SEO Objective

The portfolio is not intended to compete as a high-volume content website.

Its SEO goals are:

1. Make Jesrig Pineda easy to find by name.
2. Clearly communicate his professional specialization.
3. Allow individual projects to be indexed independently.
4. Provide useful metadata when URLs are shared.
5. Help search engines understand the relationship between:
   - person
   - professional experience
   - projects
   - technologies
6. Maintain strong performance, accessibility and semantic HTML.

SEO must not compromise readability or make copy sound artificial.

---

# 2. Primary Positioning

Primary professional positioning:

```text
Software Engineer
Backend
Integrations
Automation
Cloud
```

Secondary concepts:

```text
REST APIs
Webhooks
Node.js
TypeScript
Google Cloud
AWS
Serverless
AI Agents
```

These are contextual topics, not keyword stuffing targets.

---

# 3. Brand / Name Query

Primary personal search entity:

```text
Jesrig Pineda
```

Related professional variations may include:

```text
Jesrig Pineda Software Engineer
Jesrig Pineda Developer
Jesrig Pineda Backend
Jesrig Pineda Integrations
Jesrig Pineda Automation
```

The site should make the relationship between the person's name and professional specialization explicit.

---

# 4. Domain

Canonical domain:

```text
https://jesrig.dev
```

All canonical URLs must use the production domain.

Avoid canonical URLs pointing to:

- localhost
- Vercel preview URLs
- staging environments
- alternate domains

---

# 5. Preferred Site Architecture

Preferred public structure:

```text
/
 /projects/[slug]
```

Optional pages if they provide enough unique value:

```text
/about
```

Avoid creating pages simply to target keywords.

---

# 6. Home Page SEO

## Purpose

Home is the main personal/professional entity page.

It should answer:

- Who is Jesrig Pineda?
- What does he build?
- What areas does he specialize in?
- What work can visitors explore?

---

## Recommended title

English:

```text
Jesrig Pineda — Software Engineer | Backend, Integrations & Automation
```

Spanish:

```text
Jesrig Pineda — Software Engineer | Backend, Integraciones y Automatización
```

Keep final titles within a reasonable length.

Do not add unnecessary keyword lists.

---

# 7. Home Meta Description

Example English direction:

```text
Software Engineer focused on backend systems, integrations, automation and cloud solutions using APIs, Node.js, TypeScript and serverless technologies.
```

Example Spanish direction:

```text
Software Engineer especializado en backend, integraciones, automatización y soluciones cloud con APIs, Node.js, TypeScript y tecnologías serverless.
```

Descriptions should summarize the page naturally.

Do not repeat the same keyword several times.

---

# 8. Project Discovery

Home Selected Work links directly to all three public case studies. There is no indexable `/projects` page; requests to that path permanently redirect to `/#projects`.

---

# 9. Individual Project Pages

Every project must have unique metadata.

Structure:

```text
<Project Name> — Jesrig Pineda
```

Example:

```text
Commerce Ops Webhook Bridge — Jesrig Pineda
```

Do not use generic titles such as:

```text
Project | Portfolio
```

---

# 10. Project Meta Description

The description should explain:

1. what was built
2. what problem it addresses
3. optionally the primary technology/domain

Example pattern:

```text
A backend service designed to process ecommerce webhooks reliably with validation, traceability and idempotent event handling.
```

Avoid lists of technologies without explaining the project.

---

# 11. Canonical URLs

Every indexable page must define its canonical URL.

Examples:

```text
https://jesrig.dev/
https://jesrig.dev/projects/commerce-ops
```

Avoid query parameters in canonical URLs unless intentionally indexable.

---

# 12. Metadata Implementation

Use the Next.js Metadata API.

Prefer static metadata when content is static.

For project pages:

```text
generateMetadata()
```

may derive metadata from canonical project content.

Do not manually duplicate metadata across several files when it can be generated safely.

---

# 13. Open Graph

Every major public page should provide:

- title
- description
- canonical URL
- site name
- locale
- type
- image

Recommended dimensions:

```text
1200 × 630
```

---

# 14. Project Open Graph

Individual projects should ideally have project-specific OG images.

Possible layout:

```text
Project name
Short category
Jesrig Pineda
Project visual / architecture
```

Do not create visually noisy social cards.

---

# 15. Twitter / Social Metadata

Provide equivalent social metadata.

Use:

```text
summary_large_image
```

when an appropriate OG image exists.

Content should match the page rather than using one generic description everywhere.

---

# 16. Structured Data

Use JSON-LD where it improves machine understanding.

---

# 17. Person Schema

Home should include a `Person` entity.

Conceptual fields:

```json
{
  "@type": "Person",
  "name": "Jesrig Pineda",
  "url": "https://jesrig.dev",
  "jobTitle": "Software Engineer",
  "sameAs": [
    "LinkedIn",
    "GitHub"
  ]
}
```

Only include verified public URLs.

Do not add unsupported attributes.

---

# 18. WebSite Schema

Home may include:

```text
WebSite
```

with:

- name
- URL
- creator / author

Avoid excessive schema markup.

---

# 19. Project Structured Data

Project case studies may use:

```text
CreativeWork
```

or, when clearly appropriate:

```text
SoftwareSourceCode
```

Possible fields:

```text
name
description
author
url
dateCreated
programmingLanguage
codeRepository
```

Only use fields supported by verified information.

Do not invent dates, repository URLs or technologies.

---

# 20. Breadcrumb Structured Data

Individual project pages may include:

```text
Home
→ Selected Work
→ Project Name
```

This can also be represented using:

```text
BreadcrumbList
```

when useful.

---

# 21. Semantic HTML

SEO should rely heavily on correct semantic structure.

Use:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

as appropriate.

Avoid unnecessary wrapper `<div>` elements when semantic elements fit better.

---

# 22. Heading Hierarchy

Each page should normally have one primary `h1`.

Example:

```text
h1
  page or project title

h2
  primary sections

h3
  subsections
```

Do not choose heading tags according to visual size.

Typography must be handled by CSS.

---

# 23. Home Heading Strategy

Recommended conceptual structure:

```text
H1
Software Engineer building backend systems, integrations and automation.

H2
Selected Work

H2
Impact

H2
What I Do

H2
Experience

H2
About
```

The exact copy may evolve.

---

# 24. Project Heading Strategy

Example:

```text
H1
Commerce Ops Webhook Bridge

H2
Overview

H2
Problem

H2
Architecture

H2
Implementation

H2
Technical Decisions

H2
Results

H2
Technology
```

Do not create headings simply for SEO keywords.

---

# 25. Content SEO

Project pages should explain:

- the problem
- context
- what was built
- how it works
- technical decisions
- limitations/trade-offs
- results or evidence

This naturally creates stronger indexable content than technology lists.

---

# 26. Avoid Keyword Stuffing

Do not write text like:

```text
Node.js developer specialized in Node.js APIs and Node.js backend development using Node.js...
```

Instead:

```text
Built a webhook processing service with Node.js and TypeScript to validate and route ecommerce events.
```

Human readability has priority.

---

# 27. Internal Linking

Home should link naturally to selected projects.

Example:

```text
Selected Work
→ Commerce Ops
→ Origina Lead Agent
```

Home Selected Work links to every public project.

Individual projects may link to:

```text
Next project
Related project
Home Selected Work
```

Avoid arbitrary internal links purely for SEO.

---

# 28. External Links

External links should be relevant.

Examples:

```text
GitHub repository
LinkedIn
live demo
certification verification
```

Do not add `nofollow` automatically to legitimate profile or project links.

Use security attributes where required for new-window links.

---

# 29. Image SEO

Every meaningful content image requires appropriate `alt`.

Good:

```text
Architecture diagram showing webhook processing and Firestore persistence.
```

Bad:

```text
image
```

Decorative images should use:

```html
alt=""
```

Do not stuff technology names into alt text.

---

# 30. Image Filenames

Prefer descriptive filenames:

```text
commerce-ops-architecture.webp
origina-agent-conversation.webp
```

instead of:

```text
image1.png
Screenshot-123.png
```

---

# 31. Performance as SEO

SEO work must preserve strong Core Web Vitals.

Prioritize:

- Server Components
- optimized images
- font optimization
- limited client JavaScript
- stable layouts
- lazy loading
- efficient CSS

Avoid visual effects that significantly degrade loading or responsiveness.

---

# 32. Largest Contentful Paint

Hero assets must be carefully optimized.

Avoid:

- autoplay video backgrounds
- huge PNGs
- unoptimized screenshots
- blocking animation libraries

If the hero includes a major visual, evaluate priority loading carefully.

---

# 33. Cumulative Layout Shift

Always define image dimensions.

Avoid layout changes caused by:

- late-loading images
- fonts
- dynamically inserted banners
- animation initialization

---

# 34. JavaScript

Do not increase client-side JavaScript solely for SEO.

SEO-relevant text must exist in rendered HTML and must not depend on user interaction to appear.

---

# 35. Sitemap

Maintain:

```text
/sitemap.xml
```

It should include all indexable pages.

Example:

```text
/
 /about
 /projects/commerce-ops
 /projects/health-monitor
 /projects/origina-lead-agent
```

Do not include:

- preview routes
- test routes
- utility pages
- pages marked `noindex`

---

# 36. Robots

Maintain:

```text
/robots.txt
```

Production should allow normal crawling of public content.

Do not accidentally block case studies under:

```text
/projects
```

or Next.js assets needed for rendering.

---

# 37. Indexing Rules

Use `index, follow` for:

- home
- complete public case studies

Consider `noindex` for:

- incomplete experiments
- test pages
- private drafts
- internal demos
- duplicated routes

---

# 38. Route Migration

Use permanent redirects for the old Work routes and for manual visits to the retired index:

```text
/work → /#projects
/work/<slug> → /projects/<slug>
/projects → /#projects
```

Use permanent redirects where the migration is definitive.

Do not leave both versions indexable.

---

# 39. Internationalization

The portfolio currently supports Spanish and English.

Each language version must:

- contain equivalent factual information
- use natural translations
- have its own metadata
- preserve URLs consistently

Do not machine-translate terminology blindly.

---

# 40. hreflang

If language versions use distinct URLs, provide appropriate alternate language metadata.

Example conceptual relationship:

```text
Spanish ↔ English
```

If the implementation does not currently use unique indexable URLs for each language, do not add invalid `hreflang` tags.

Codex must inspect the actual routing implementation first.

---

# 41. Language Strategy

English should be treated as an important version because much of the target technology market uses English.

Spanish should remain complete and professional.

Neither language should contain substantially more factual claims than the other.

---

# 42. URLs

URLs should be:

- lowercase
- readable
- stable
- descriptive
- short

Good:

```text
/projects/commerce-ops
```

Avoid:

```text
/projects/project-1-final-v2
```

Once public and indexed, avoid changing project slugs unnecessarily.

---

# 43. Project Slugs

Prefer canonical English technical names where they are already the established project identity.

Do not translate repository/project names unnecessarily.

---

# 44. Content Duplication

Avoid repeating the complete project description on Home and the project page.

Use progressive detail.

Example:

Home:

```text
One sentence
```

Case study:

```text
Complete explanation
```

---

# 45. Search Intent

The site should naturally support searches related to:

```text
Jesrig Pineda
Software Engineer Mexico
Backend Engineer
Integration Engineer
Automation Engineer
Node.js integrations
API integrations
Webhook architecture
Cloud automation
```

Do not artificially insert geographic or job-title combinations repeatedly.

---

# 46. Location

Do not make a specific city a major SEO target unless it serves a clear professional purpose.

Remote/global professional positioning is more important than local search optimization for this portfolio.

---

# 47. Contact Information

Search engines do not require exposing a personal phone number.

Prefer public professional contact channels such as:

- email
- LinkedIn
- GitHub

Do not expose additional personal information for perceived SEO benefit.

---

# 48. Projects as Search Assets

Strong project case studies are the most important long-term SEO opportunity.

Each case study should potentially answer technical questions such as:

```text
How was webhook idempotency handled?
How was event validation implemented?
Why was Firestore selected?
How were failures traced?
```

Only answer these when supported by actual project implementation.

This creates useful content rather than keyword-targeted filler.

---

# 49. SEO Content Integrity

All professional claims must follow:

```text
docs/CONTENT_SOURCE.md
```

Project claims must follow their respective project source.

SEO is never justification to:

- inflate experience
- invent metrics
- claim technologies not used
- fabricate responsibilities
- create fictional results

---

# 50. SEO Review Checklist

Before releasing a page verify:

## Content

- unique title
- unique description
- one clear H1
- useful visible content
- natural language
- no unsupported claims

## Technical

- canonical correct
- indexability correct
- sitemap entry
- robots not blocking
- metadata rendered
- OG metadata valid

## Structured Data

- valid JSON-LD
- only verified facts
- correct entity type
- correct URLs

## Images

- correct dimensions
- useful alt
- optimized
- no layout shift

## Performance

- minimal client JS
- no unnecessary libraries
- optimized fonts/images
- stable loading

## Navigation

- internal links work
- Home Selected Work and all case studies reachable
- breadcrumbs when appropriate
- no broken URLs

---

# 51. Final SEO Principle

SEO should make the existing professional value easier for search engines to understand.

It should never determine the portfolio's writing style.

The priority order is:

```text
Useful content
→ Clear information architecture
→ Semantic HTML
→ Performance
→ Metadata
→ Structured data
```

Not:

```text
Keywords
→ more keywords
→ hidden optimization
```
