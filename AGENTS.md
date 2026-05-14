# AGENTS — Vanesa Vasquez Portfolio Web

> Este proyecto extiende el [design system de la carpeta madre](../AGENTS.md).  
> **LEE PRIMERO:** `../AGENTS.md` para el design system, paleta, y reglas generales.

## Reglas Específicas de portfolio-web

### Stack
- React 19 + Vite 8 + React Router DOM 7 — JSX puro (sin TypeScript)
- CSS plano con custom properties (design tokens del sistema madre)
- ESLint 10 (flat config) — correr `npm run lint`

### Comandos
| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Servidor de desarrollo Vite |
| `npm run build` | Build a `dist/` |
| `npm run preview` | Preview de producción |
| `npm run lint` | Lintear JS/JSX |

### Arquitectura
- Entry: `index.html` → `src/main.jsx` → `App.jsx` (layout con `<Outlet />`)
- Rutas: `/`, `/proyectos`, `/proyectos/:slug`, `/experiencia`, `/resumen`, `*`
- App shell: `<Navbar />` + `<Outlet />` + `<BottomNav />` — **NO renderizar `<Footer />`**
- BottomNav fijo con 4 items usando `NavLink` para estado activo
- Navbar tiene toggle ENG/ESP — UI only, sin i18n implementado

### Design System (del sistema madre)
Usar tokens de `../AGENTS.md`:
- **Paleta:** Vane-Vas únicamente — warm, light, AA compliant
- **Fuentes:** Against (títulos h1 al h4), Spinnaker (body)
- **Espaciado:** Fibonacci × 4px (2xs=4, xs=8, sm=12, md=20, lg=32, xl=52, 2xl=84, 3xl=136, 4xl=220)
- **Breakpoints:** 1024px, 768px, 480px

### Layout y Containers
- **Container principal**: Todas las páginas deben usar la clase `.container` con `max-width: 1450px`
- **Excepción**: No usar `container--narrow` (800px) ni `container--wide` (1400px) — quedan obsoletos
- El container debe centrarse con `margin: 0 auto` y tener padding lateral `padding: 0 var(--sp-lg)`

### Reglas de Accesibilidad AA
- **Texto principal**: Siempre usar `var(--color-text)` (100% opacidad, #5A3E39)
- **Metadata secundaria**: Puede usar `var(--color-text-muted)` (70% opacidad) solo para fechas, labels, o información de soporte
- **Cards**: Fondo `var(--color-bg)` con texto `var(--color-text)` para máximo contraste
- **Tamaño mínimo**: 0.85rem (13.6px) para texto descriptivo
- **Font-weight mínimo**: 400 (normal) para texto body — evitar 300 (light)
- **Contraste objetivo**: 4.5:1 mínimo (AA), 7:1 ideal (AAA)
- **Skill cards**: Fondo cream `#FAF5F0`, texto marrón `#5A3E39` sin opacidad reducida

### Reglas de Imágenes
- Imágenes servibles van en `public/images/`
- NUNCA en `src/assets/` (esa carpeta debe estar vacía)
- Foto de perfil: `imagen-perfil-vanesa-vasquez-byn.png`
- Imágenes de proyectos alineadas a la izquierda: `object-position: left center`

### Reglas de Navegación
- **NO usar Footer** — usar BottomNav fijo en su lugar
- Usar `NavLink` de react-router-dom para estados activos
- El toggle de idioma es decorativo por ahora (no implementar i18n aún)
- **Navbar brand** (`navbar__brand`) debe usar la tipografía **Against** (`--font-title`)

### Slugs de Proyectos (5 proyectos reales)
| Slug | Proyecto | Categoría |
|------|----------|-----------|
| `fico-crm-mobile` | FiCo CRM - Mobile | Producto |
| `fico-crm-web-eticos` | FiCo CRM Web (Éticos) | Producto |
| `sistema-de-diseno-bago` | Sistema de Diseño Bagó | System design |
| `transfer-laboratorios-bago` | Transfer (Laboratorios Bagó) | Rediseño UX |
| `campus-bago` | Campus Bagó | Contenido Digital |

### Archivos Importantes
- Datos de proyectos: `src/pages/Projects.jsx` (lista) y `src/pages/ProjectDetail.jsx` (detalle)
- Tokens CSS: `src/index.css` (design tokens del sistema)

### Restricciones
- NUNCA usar TypeScript — JSX puro
- Usar `npm` exclusivamente (package-lock.json v3) — NO usar pnpm ni yarn
- Sin estado global — solo `useState`/`useRef` en componentes
- Sin CI/CD, sin archivos .env, sin TypeScript
- docs/ es un symlink a la carpeta docs/ de la raíz

## Cambios Recientes (Recent Changes)

- **Home**: layout columna (foto arriba, texto abajo), badge "PRODUCT DESIGNER (UX)", sticky notes a la izquierda, nueva bio, sin botón CTA
- **Projects**: sin subtítulo, sin chips de categoría, cards transparentes (`rgba(250,245,240,0.45)`), feature card usa Golden Yellow (`--color-primary`), las 5 imágenes de proyectos alineadas a la izquierda (`object-position: left center`)
- **ProjectDetail**: bloques de texto sin `max-width` (ancho completo del contenedor), imágenes hero alineadas a la izquierda
- **Resume**: foto de perfil real (`imagen-perfil-vanesa-vasquez-byn.png`), skill cards con descripciones, nivel de inglés Nivel 7 (CUI, UBA), sección de certificaciones removida, usa `.container` estándar (max-width: 1450px), skill cards con fondo cream y texto de alto contraste para accesibilidad AA, experiencias y educación actualizadas con datos reales del CV, botón de descarga apunta a `/docs/cv/CV_LedesmaVanesa_UXUIdesigner-2.pdf`, link de LinkedIn actualizado a `https://www.linkedin.com/in/vanesa-vasquez/`
- **Global**: fondo dot-grid en todas las páginas (`.page`), fuente Chillax removida, sombras corregidas a valores Vane-Vas, nuevos componentes CSS (`.badge`, `.input`, `.divider`, `.chip--active`), tokens de colores para sticky notes añadidos
- **Navegación**: sección "Sobre Mí" removida del menú y rutas (BottomNav ahora tiene 4 items)

## Notas Importantes

- Placeholders de imágenes (texto) se usan en varias páginas — solo la página de CV tiene foto real
- `src/assets/` debe estar vacía; las imágenes servibles van en `public/images/`
- `docs/` en la raíz del repo tiene PDFs de CV, wireframes y CVs HTML — es un symlink en `portfolio-web/docs/`
- Las imágenes de paletas de colores en `assets/palettes/` están deprecadas y deben ser removidas
- Config de Vite es minimal (sin aliases, sin base path, sin proxy)
- Lockfile es `package-lock.json` v3 — usar `npm` no `pnpm`/`yarn`
- Sin CI/CD, sin archivos .env, sin TypeScript

## Checkpoint
Antes de cualquier cambio, verificar:
- [ ] BottomNav está presente (no Footer)
- [ ] Imágenes en public/images/
- [ ] Paleta Vane-Vas aplicada
- [ ] Espaciado Fibonacci × 4px
- [ ] Sin estado global — solo `useState`/`useRef` en componentes
- [ ] `npm run lint` pasa sin errores
