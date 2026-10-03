# Pase técnico final — 3 de octubre de 2026

## Alcance

Se conservan Home, los tres case studies, ES/EN, tema y arquitectura aprobados. No existe índice público `/projects`. Los tres registros mantienen `reviewStatus: "needs-review"`; ninguna medición de negocio ni atribución empresarial fue añadida.

## Correcciones

- Metadata coherente en español; títulos de proyectos concisos y únicos; retirada de un identificador de Twitter sin fuente verificada.
- Canonical definido por página, evitando heredar el de Home en páginas inexistentes. Next normaliza la raíz a `https://jesrig.dev`, equivalente a `https://jesrig.dev/`.
- JSON-LD renderizado en servidor: Person + WebSite en Home y SoftwareSourceCode en cada prototipo. Datos del registro canónico, repositorios y perfiles existentes; sin ratings ni resultados comerciales.
- OG principal y tres OG de proyecto con una plantilla compartida: 1200 × 630, aproximadamente 44–60 kB. About reutiliza la imagen principal. Imágenes generadas estáticamente en build; un slug de imagen desconocido devuelve 404.
- Skip link con destino enfocable en los tres componentes de página; secciones visibles al recibir foco.
- Eliminado el ancho mínimo del body que provocaba overflow a 320 px con scrollbar.
- Enlaces finales de About separados, flexibles y con altura mínima de 44 px, tras detectar el fallo de target-size en Lighthouse.
- Dos descripciones accesibles de diagramas recuperan sus acentos.
- Scroll limitado mediante requestAnimationFrame; reduced motion evita calcular el progreso y responde a cambios de preferencia. Listeners, observer y frame tienen limpieza.
- Reduced motion también desactiva transformaciones de hover de cards, diagramas y flechas.

## SEO y rutas

200: `/`, `/about`, `/projects/commerce-ops`, `/projects/health-monitor`, `/projects/origina-lead-agent`.

308 directos: `/work` y `/projects` → `/#projects`; `/work/:slug` → `/projects/:slug`.

404: `/projects/nerd-ia` y su imagen OG. La página no tiene canonical y recibe noindex.

Sitemap: únicamente las cinco páginas públicas, sin lastModified inventado. Robots permite crawling y declara el sitemap. Sin enlaces internos ni canonicals antiguos hacia `/work` ni hacia un índice `/projects`.

## Navegador y accesibilidad

Edge mediante CDP sobre build de producción local. Cinco páginas × cinco anchos (320, 375, 768, 1024, 1440) × dos temas: 50 combinaciones sin overflow, recorte de texto detectado ni saltos de headings. Un H1 y un main por página. Capturas revisadas de las cinco páginas en ambos temas.

Axe WCAG 2.0/2.1 A/AA: diez revisiones, cinco páginas en ambos temas, sin infracciones detectadas. Lighthouse detectó adicionalmente target-size (WCAG 2.2) en About; corregido y medido nuevamente. Estas comprobaciones no equivalen a certificación completa ni a una prueba con lector de pantalla.

Teclado real: Tab y Enter, skip link, controles de idioma/tema, navegación, CTAs, enlaces de proyectos, GitHub, Contact y paginación. Menú cerrado inert; aria-expanded correcto; Escape cierra y devuelve foco; selección y cambio de ruta cierran el menú. Foco visible en los recorridos. Reduced motion comprobado también al cambiar la preferencia en vivo: contenido visible y scroll auto.

## Lighthouse

Lighthouse 13.5.0, producción local, perfil móvil y throttling simulado por defecto. Una medición por página; About repetido tras corregir sus enlaces. No son datos de usuarios reales ni garantías para el despliegue.

| Página | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Home | 100 | 100 | 96 | 100 | 1.72 s | 0 | 39 ms |
| About | 99 | 100 | 96 | 100 | 1.83 s | 0 | 79 ms |
| Commerce | 98 | 100 | 96 | 100 | 2.33 s | 0 | 44 ms |
| Health Monitor | 100 | 100 | 96 | 100 | 1.81 s | 0 | 48 ms |
| Origina | 97 | 100 | 96 | 100 | 2.32 s | 0 | 111 ms |

Best Practices 96 corresponde al 404 local de `/_vercel/insights/script.js`. Analytics se conserva; su funcionamiento y coste real requieren el despliegue Vercel. INP de campo no medido; TBT no lo sustituye. No se afirma cumplimiento de Core Web Vitals de campo.

## JavaScript y assets

Los Client Components restantes consumen idioma/preferencias o interacción. Quitar sus directivas sin cambiar el contexto rompería funcionalidades. El registro bilingüe completo entra en subárboles cliente de Home/cases: posible mejora futura pasando datos acotados desde servidor, fuera del alcance de este pase.

Lighthouse Home estima unos 48 KiB de JS sin utilizar, principalmente chunks del framework, y unos 13 KiB de compatibilidad heredada. CSS bloqueante aproximado: 8.4 kB. No se añaden dependencias, fuentes externas ni optimizaciones especulativas. Avatar con next/image, dimensiones y sizes; diagramas en HTML/CSS.

Retirados RotatingRole, bloques editoriales sin consumidores y seis imágenes obsoletas tras buscar referencias. Se conservan tokens/utilidades de foundations y selectores dinámicos. Datos de proyectos siguen centralizados en content/projects.

## Validación y límites

Build, TypeScript y ESLint comprobados al cierre; pruebas HTTP sobre el build final. El aviso de Next sobre Edge corresponde al icono dinámico existente y no impide generar las cinco páginas.

Pendiente de despliegue: verificar Analytics, crawlers/previews sociales y métricas reales LCP/CLS/INP. La comprobación factual externa de los prototipos continúa pendiente según VALIDATION.md. No se ha publicado ni cambiado ese estado editorial.

Referencias técnicas: [Next.js Open Graph](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image), [Schema.org SoftwareSourceCode](https://schema.org/SoftwareSourceCode).
