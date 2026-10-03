# Design System — Jesrig Portfolio

> Visual and interaction rules for the portfolio.
>
> This document defines how the site should look, feel and behave.
> Codex must use these rules before creating or modifying UI components.

---

# 1. Design Direction

The portfolio should feel:

- minimal
- modern
- technical
- calm
- polished
- spacious
- professional

Primary visual inspirations:

- Apple product pages
- Fora
- Aman Kumar portfolio

The goal is not to reproduce any reference literally.

The final identity should remain personal and appropriate for a Software Engineer portfolio.

---

# 2. Core Principles

## 2.1 Content before decoration

Every visual element must support:

- hierarchy
- comprehension
- navigation
- storytelling

Avoid decorative elements with no functional purpose.

---

## 2.2 Typography is the primary visual system

Use:

- large headings
- strong hierarchy
- short paragraphs
- generous whitespace

Do not depend on gradients, illustrations or effects to create visual interest.

---

## 2.3 Fewer, stronger sections

Prefer:

```text
Large section
↓
Clear message
↓
Relevant visual
```

Instead of:

```text
Many small cards
Many badges
Many icons
Many visual effects
```

---

## 2.4 Motion should guide attention

Animation should explain hierarchy or state changes.

Animation is not decoration.

---

# 3. Layout

## Max content width

Recommended:

```css
--container-max: 1200px;
```

Large visual sections may extend to:

```css
--container-wide: 1440px;
```

Text-heavy sections should use narrower widths:

```css
--content-reading: 720px;
```

---

# 4. Grid

Desktop:

```text
12-column grid
```

Tablet:

```text
8-column grid
```

Mobile:

```text
4-column grid
```

Default horizontal padding:

```text
Mobile: 20–24px
Tablet: 32–48px
Desktop: 48–64px
```

Do not let content touch viewport edges.

---

# 5. Spacing System

Use a consistent spacing scale.

Recommended:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;
--space-11: 160px;
```

Prefer these values instead of arbitrary spacing.

---

# 6. Section Spacing

Desktop:

```text
96–160px vertical separation
```

Mobile:

```text
64–96px
```

Hero may use larger spacing.

Do not compress sections simply to fit more content above the fold.

Whitespace is intentional.

---

# 7. Typography

Use the existing typography stack unless there is a strong reason to change it.

Prefer a modern sans-serif system.

Possible stack:

```css
font-family:
  Inter,
  ui-sans-serif,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

If the current project uses another appropriate font, evaluate it before replacing it.

Do not add multiple display fonts.

---

# 8. Type Scale

## Hero

Desktop:

```text
64–88px
```

Mobile:

```text
42–56px
```

Use fluid sizing when possible:

```css
font-size: clamp(3rem, 7vw, 5.5rem);
```

---

## H1

```text
48–72px desktop
40–48px mobile
```

---

## H2

```text
40–56px desktop
32–40px mobile
```

---

## H3

```text
24–32px
```

---

## Body Large

```text
20–24px
line-height: ~1.5
```

---

## Body

```text
16–18px
line-height: 1.5–1.7
```

---

## Small / metadata

```text
13–15px
```

Do not make important information excessively small.

---

# 9. Font Weight

Prefer:

```text
400
500
600
```

Use 700 sparingly.

Avoid making every heading extremely bold.

Apple-like visual hierarchy should come from:

- size
- whitespace
- contrast

not only font weight.

---

# 10. Colors

The design should remain neutral.

## Light mode

Conceptual palette:

```css
--background: #ffffff;
--surface: #f5f5f7;
--surface-secondary: #fafafa;

--text-primary: #1d1d1f;
--text-secondary: #6e6e73;
--text-muted: #86868b;

--border: rgba(0, 0, 0, 0.08);
```

---

## Dark mode

Conceptual palette:

```css
--background: #000000;
--surface: #111111;
--surface-secondary: #1a1a1a;

--text-primary: #f5f5f7;
--text-secondary: #a1a1a6;
--text-muted: #86868b;

--border: rgba(255, 255, 255, 0.10);
```

These values are guidance, not mandatory literal values.

Codex should first inspect existing tokens before replacing them.

---

# 11. Accent Color

Use accent color sparingly.

Good uses:

- active navigation
- links
- focus states
- subtle interaction states
- very specific project visuals

Avoid:

- large gradients
- multiple accent colors competing
- saturated backgrounds across many sections

The visual identity should work even without accent color.

---

# 12. Surfaces

Prefer:

```text
background
surface
surface elevated
```

Avoid excessive layering.

Cards should not look like SaaS dashboard widgets.

---

# 13. Border Radius

Use a limited radius system.

Recommended:

```css
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-xl: 32px;
```

Project showcase blocks may use:

```text
24–32px
```

Buttons:

```text
999px
```

only when a pill shape makes visual sense.

---

# 14. Borders

Borders should be subtle.

Preferred:

```css
1px solid var(--border);
```

Do not create strong visible boxes around every section.

---

# 15. Shadows

Use very subtle shadows.

Example philosophy:

```text
large blur
low opacity
minimal offset
```

Avoid:

- floating dashboard cards
- strong dark shadows
- neon effects
- glowing UI

---

# 16. Navbar

Preserve the current navbar concept.

Required elements:

- avatar
- Jesrig name / identity
- primary navigation
- ES / EN
- theme toggle

The navbar may be visually refined.

---

# 17. Navbar Behavior

Preferred behavior:

At top:

```text
clean
transparent or integrated with background
```

After scrolling:

```text
slightly smaller
subtle background
optional backdrop blur
thin border
```

Transition:

```text
200–300ms
```

The navbar should never dominate the page.

---

# 18. Hero

Hero should be visually simple.

Structure:

```text
Eyebrow / Name
Large statement
Short supporting paragraph
Primary actions
Optional visual
```

Avoid:

- large technology lists
- skill badges
- multiple statistics
- several CTAs
- complex animated backgrounds

The headline is the visual protagonist.

---

# 19. Buttons

Primary button:

```text
solid
high contrast
simple
```

Secondary:

```text
subtle surface / border
```

Text links may use arrows.

Example:

```text
View project →
```

Interactions:

```text
translate / scale <= 2%
200ms approximately
```

Avoid exaggerated hover animation.

---

# 20. Links

Links must remain visually identifiable.

Possible interaction:

```text
opacity
underline reveal
arrow translation
```

Avoid animating several properties unnecessarily.

---

# 21. Project Cards

Project cards are one of the most important visual elements.

They should contain:

1. project visual
2. project name
3. short description
4. category
5. optional selected technologies

The visual should occupy more area than technology badges.

---

# 22. Featured Projects

Featured project blocks may use a structure similar to:

```text
┌────────────────────────────────────┐
│                                    │
│                                    │
│        Project visualization       │
│                                    │
│                                    │
└────────────────────────────────────┘

Commerce Ops Webhook Bridge

Reliable webhook processing for ecommerce operations.

Backend · Integrations
```

Avoid putting all information inside the visual card itself.

---

# 23. Project Images

Project visuals should communicate what was built.

Possible formats:

- UI screenshot
- architecture diagram
- workflow
- code-oriented visual
- system flow
- product mockup

Avoid generic stock imagery.

---

# 24. Project Card Hover

Desktop interaction:

```text
image scale: ~1.02
card translate: -2px to -4px
arrow translate
```

Keep the movement subtle.

On touch devices, hover effects must not be required for understanding.

---

# 25. Metrics

Metrics should be visually clear but contextual.

Example:

```text
10+
API endpoints

8–10h
manual work reduced / week

18–25%
approx. infrastructure cost reduction
```

Do not create large metrics without explaining what they represent.

---

# 26. Experience

Experience should not reproduce the full CV.

Preferred format:

```text
2025 — 2026

IT Manager
Alxedo

Short description
```

Then:

```text
2022 — 2025

Software Engineer
Alxedo
```

Keep detailed bullet points for project/case-study context when relevant.

---

# 27. Technology Section

Avoid a large "logo cloud".

Prefer categories.

Example:

```text
Backend
Node.js
TypeScript
REST APIs

Cloud
Google Cloud
Firebase
AWS

Automation
Webhooks
Zapier
```

Do not present every technology as equally important.

---

# 28. Motion System

Motion levels:

## Level 1 — Micro interactions

Use for:

- buttons
- links
- navigation
- cards

Duration:

```text
150–250ms
```

---

## Level 2 — Section reveals

Use for:

- headings
- text groups
- project sections

Duration:

```text
400–700ms
```

Properties:

```text
opacity
transform
```

Example:

```css
transform: translateY(24px);
opacity: 0;
```

to:

```css
transform: translateY(0);
opacity: 1;
```

---

## Level 3 — Storytelling

Use only for important sections.

Examples:

- project visualization reveal
- architecture flow
- hero transition
- sticky project storytelling

Do not use Level 3 motion throughout the entire site.

---

# 29. Easing

Prefer smooth easing.

Recommended conceptual curve:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

Avoid:

```text
bouncy
elastic
spring-heavy
```

unless interaction specifically requires it.

---

# 30. Scroll Animations

Animations should trigger once when reasonable.

Avoid repeatedly animating sections when scrolling up/down.

Use:

```text
IntersectionObserver
```

when sufficient.

Do not introduce a motion dependency only to implement basic reveals.

---

# 31. Reduced Motion

Mandatory.

When:

```css
@media (prefers-reduced-motion: reduce)
```

disable or significantly reduce:

- reveal translations
- parallax
- scaling
- long transitions
- smooth scrolling

Content must remain immediately accessible.

---

# 32. Apple-inspired Motion Principles

Apple is a reference for restraint, not a requirement to reproduce specific animations.

Focus on:

- continuity
- hierarchy
- smoothness
- visual focus
- natural timing

Avoid copying:

- exact Apple page transitions
- product animations
- proprietary visual treatments

---

# 33. Responsive Behavior

Mobile is not a smaller desktop version.

Recompose layouts where needed.

Example:

Desktop:

```text
Text          Visual
```

Mobile:

```text
Text

Visual
```

---

# 34. Mobile Navigation

Must remain:

- easy to access
- keyboard accessible
- touch friendly
- simple

Touch targets:

```text
minimum approximately 44px
```

---

# 35. Breakpoints

Prefer content-driven breakpoints.

Reference:

```css
sm: 640px;
md: 768px;
lg: 1024px;
xl: 1280px;
2xl: 1536px;
```

Do not add many custom breakpoints without need.

---

# 36. Images

Use `next/image` whenever appropriate.

Provide:

- width
- height
- responsive sizes
- meaningful alt
- modern formats when possible

Avoid shipping unnecessarily large assets.

---

# 37. Icons

Use icons only when they improve recognition.

Preferred use:

- social links
- theme
- language
- external links

Avoid adding icons beside every heading.

---

# 38. Dark Mode

Dark mode must feel designed, not inverted.

Check:

- surface hierarchy
- image contrast
- borders
- muted text
- hover states

Avoid pure white text everywhere.

---

# 39. Accessibility

All interactive components must support:

- keyboard navigation
- focus-visible
- semantic markup
- screen readers
- adequate contrast

Do not remove focus outlines without replacing them.

---

# 40. Performance Rules

Prefer:

```text
CSS
Web APIs
Server Components
```

before adding JavaScript.

Client Components should only be used where interaction requires them.

Avoid:

- unnecessary animation libraries
- heavy icon libraries
- unnecessary client state
- large background videos
- oversized hero assets

---

# 41. Visual Anti-patterns

Do not introduce:

- excessive glassmorphism
- neon gradients
- particle backgrounds
- animated blobs
- floating technology icons
- custom mouse cursors
- excessive parallax
- horizontal scroll sections without strong justification
- dozens of skill pills
- terminal UI simply because this is a developer portfolio
- generic "developer aesthetic"

---

# 42. Component Philosophy

Components should be reusable where visual behavior is shared.

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

Do not create abstractions for components used only once unless they meaningfully improve readability.

---

# 43. CSS Architecture

Prefer existing project conventions.

Use design tokens instead of scattered hard-coded values.

Example:

```css
:root {
  --background: ...;
  --foreground: ...;

  --space-1: ...;
  --space-2: ...;

  --radius-md: ...;

  --duration-fast: 180ms;
  --duration-normal: 300ms;

  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Avoid duplicating the same values across components.

---

# 44. Design Review Checklist

Before considering a component complete, verify:

### Visual

- hierarchy is obvious
- spacing follows the system
- typography follows defined scale
- color usage is restrained
- visual clutter is minimal

### UX

- purpose is obvious
- interaction is predictable
- mobile behavior works
- hover is not mandatory

### Motion

- animation has a reason
- motion is subtle
- reduced motion works

### Accessibility

- semantic HTML
- keyboard
- focus states
- contrast
- alt text

### Performance

- unnecessary JavaScript avoided
- images optimized
- no unnecessary dependency added

---

# 45. Final Design Test

Before accepting any visual change, ask:

> Does this make the portfolio easier to understand or does it only make it more visually impressive?

If the answer is only visual novelty, simplify it.