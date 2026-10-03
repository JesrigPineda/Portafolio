# AGENTS.md — Jesrig Portfolio

This repository contains the professional portfolio of Jesrig Pineda.

Before modifying UI, content, routing, SEO or project pages, read the relevant documentation in `/docs`.

---

## 1. Source of truth

Use these files in this order:

1. `docs/PORTFOLIO_BRIEF.md`
   - Product direction
   - Information architecture
   - Scope
   - What should be preserved

2. `docs/CONTENT_SOURCE.md`
   - Verified professional information
   - Experience
   - Metrics
   - Skills
   - Education
   - Certifications
   - Content accuracy rules

3. `docs/DESIGN_SYSTEM.md`
   - Visual system
   - Layout
   - Typography
   - Spacing
   - Components
   - Motion
   - Responsive behavior
   - Accessibility
   - Performance rules

4. `docs/SEO.md`
   - Metadata
   - Canonicals
   - Open Graph
   - structured data
   - sitemap
   - redirects
   - indexing
   - project SEO

If documentation conflicts with existing implementation, prefer the documentation unless the requested task explicitly says otherwise.

---

## 2. General implementation rules

Do not rebuild the project from scratch.

Prefer incremental refactoring.

Preserve the existing stack unless there is a clear technical reason to change it.

Before adding a dependency, check whether the requirement can be solved with:

- existing project utilities
- CSS
- browser APIs
- Next.js APIs

Do not add dependencies only for minor visual effects.

---

## 3. Existing functionality to preserve

Unless explicitly requested otherwise, preserve:

- Next.js
- TypeScript
- App Router
- current navbar concept
- avatar / identity in navbar
- ES / EN support
- dark / light mode
- accessibility behavior
- SEO infrastructure
- sitemap
- robots
- manifest
- Open Graph support
- responsive behavior
- `prefers-reduced-motion`

The navbar may be refined visually but must not be completely replaced without explicit instruction.

---

## 4. Content accuracy

Never invent or infer professional claims.

Do not invent:

- metrics
- employers
- clients
- responsibilities
- team sizes
- technologies
- certifications
- architecture decisions
- user counts
- transaction volumes
- business impact

Use `docs/CONTENT_SOURCE.md`.

Preserve qualifiers such as:

- approximately
- contributed to
- participated
- collaborated

Do not strengthen claims beyond the verified source.

---

## 5. Project content

Project pages must use verified project information.

If a project is missing reliable source information:

- preserve existing factual content if clearly supported by the repository
- otherwise leave a clear TODO
- do not fabricate missing details

Project-specific information should eventually live under:

```text
content/projects/
```

Prefer content-driven project pages over hard-coded duplicated content.

---

## 6. UI direction

The visual direction is:

- minimal
- Apple-inspired restraint
- Fora-inspired spacing and presentation
- project architecture inspired by Aman Kumar
- technical but not visually stereotypical
- professional rather than flashy

Do not copy reference sites literally.

Do not introduce:

- excessive gradients
- neon UI
- particle backgrounds
- floating technology icons
- terminal aesthetics without purpose
- excessive glassmorphism
- custom cursors
- unnecessary parallax
- decorative animation everywhere

---

## 7. Motion

Motion must support hierarchy or interaction.

Prefer:

- `opacity`
- `transform`
- CSS transitions
- `IntersectionObserver`

Always respect:

```css
prefers-reduced-motion
```

Do not add an animation library unless the interaction genuinely requires it.

If a native implementation is simpler and maintainable, prefer it.

---

## 8. Performance

Prefer Server Components.

Use Client Components only when interaction requires them.

Avoid unnecessary:

- client-side state
- JavaScript
- large image assets
- blocking scripts
- animation libraries
- icon libraries

Use `next/image` where appropriate.

Prevent layout shift.

---

## 9. Accessibility

Every UI change must preserve:

- keyboard navigation
- visible focus
- semantic HTML
- accessible labels
- adequate contrast
- touch-friendly targets
- screen-reader compatibility
- reduced-motion behavior

Do not remove accessibility behavior for visual reasons.

---

## 10. SEO

Follow `docs/SEO.md`.

When changing routes, metadata or project pages, verify:

- title
- description
- canonical
- Open Graph
- structured data
- sitemap
- robots
- redirects
- internal links

If migrating:

```text
/work
```

to:

```text
/projects
```

do not leave duplicate indexable routes.

Use permanent redirects when the migration is final.

---

## 11. Preferred architecture

Target public structure:

```text
/
 /projects
 /projects/[slug]
```

Home should show selected work, not the entire project catalog.

Prefer:

```text
Home
├── Hero
├── Selected Work
├── Professional Impact
├── What I Do
├── Experience
├── About
└── Contact
```

---

## 12. Component rules

Prefer reusable components for repeated visual behavior.

Examples:

```text
Container
Section
SectionHeading
Button
ProjectCard
ProjectVisual
Metric
ExperienceItem
Reveal
Navbar
Footer
```

Do not over-abstract components that are only used once.

Follow existing repository conventions where they are reasonable.

---

## 13. CSS

Prefer design tokens defined in the existing global styling system.

Do not scatter arbitrary values across components.

Use the spacing, typography, radius, color and motion rules defined in:

```text
docs/DESIGN_SYSTEM.md
```

Before replacing existing CSS variables, inspect how they are already used.

---

## 14. Responsive implementation

Design mobile-first.

At minimum validate:

```text
320px
375px
768px
1024px
1440px
```

Do not simply shrink desktop layouts.

Recompose sections where necessary.

Do not rely on hover for important functionality.

---

## 15. Code quality

Before completing a task:

- remove dead code introduced by the change
- avoid duplicated logic
- verify imports
- verify TypeScript
- verify responsive behavior
- verify accessibility
- verify reduced motion
- verify links
- verify metadata when relevant

Do not perform unrelated large refactors unless they are necessary for the requested change.

---

## 16. Workflow for significant changes

For significant UI or architecture tasks:

1. Inspect the current implementation.
2. Read the relevant documentation.
3. Identify what can be reused.
4. Make the smallest coherent architectural change.
5. Implement.
6. Validate responsive behavior.
7. Validate accessibility.
8. Validate performance implications.
9. Validate SEO implications when relevant.
10. Remove obsolete code only after confirming it is no longer used.

---

## 17. Decision rule

When uncertain between two implementations, prioritize:

```text
clarity
→ maintainability
→ accessibility
→ performance
→ visual polish
```

Do not prioritize visual novelty over these principles.