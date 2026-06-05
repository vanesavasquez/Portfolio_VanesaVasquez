# HyperFrames - Prototipado de Animaciones

Este directorio contiene las composiciones de HyperFrames para prototipar animaciones del portfolio.

## Estructura

```
hyperframes/
├── compositions/     # Archivos HTML de animaciones (.hf.html)
├── assets/          # Recursos visuales (imágenes, logos, etc.)
├── output/          # Videos MP4 generados (gitignored)
└── README.md        # Este archivo
```

## Workflow

### 1. Crear Composición

Crear un archivo `.hf.html` en `compositions/` siguiendo la convención:

```
[seccion]-[elemento]-[tipo].hf.html

Ejemplos:
- home-hero-entrance.hf.html
- projects-card-hover.hf.html
- experience-timeline-stagger.hf.html
```

### 2. Usar Design Tokens

Siempre usar los tokens del proyecto en las composiciones:

```css
/* Colores Vane-Vas */
--color-bg: #FAF5F0;
--color-surface: #A9C6D9;
--color-primary: #F2B544;
--color-text: #5A3E39;

/* Tipografías */
--font-title: 'Against', sans-serif;
--font-body: 'Spinnaker', sans-serif;

/* Espaciado Fibonacci × 4px */
--sp-2xs: 4px;
--sp-xs: 8px;
--sp-sm: 12px;
--sp-md: 20px;
--sp-lg: 32px;
--sp-xl: 52px;
--sp-2xl: 84px;
```

### 3. Generar Video

```bash
# Renderizar composición a video
npx hyperframes render hyperframes/compositions/[nombre].hf.html

# El video se genera en hyperframes/output/
```

### 4. Revisar y Aprobar

- Ver el video en `hyperframes/output/`
- Validar timing, easing, y estética
- Iterar si es necesario

### 5. Implementar en Código

Una vez aprobada la animación:

1. Traducir la animación a CSS/JS para React
2. Aplicar al componente correspondiente
3. Documentar en `src/animations/README.md`

## Ejemplos de Composiciones

### Home Hero Entrance
- **Archivo**: `home-hero-entrance.hf.html`
- **Descripción**: Animación de entrada del hero (badges, título, subtítulo, foto, sticky notes)
- **Duración**: ~2.5s
- **Easing**: ease-out

### Proyectos Card Hover
- **Archivo**: `projects-card-hover.hf.html`
- **Descripción**: Efecto hover en cards de proyectos
- **Duración**: 0.3s
- **Easing**: ease-in-out

## Reglas

- ✅ Usar design tokens del proyecto
- ✅ Mantener accesibilidad AA (contraste, motion-reduce)
- ✅ No commitear videos generados (ya está en .gitignore)
- ✅ Documentar animaciones implementadas
- ❌ No usar HyperFrames en producción (solo para prototipado)

## Comandos Útiles

```bash
# Renderizar una composición
npx hyperframes render hyperframes/compositions/home-hero-entrance.hf.html

# Renderizar con opciones específicas
npx hyperframes render input.html --output output/video.mp4 --width 1920 --height 1080

# Validar composición
npx hyperframes validate hyperframes/compositions/[nombre].hf.html
```

## Recursos

- [Documentación HyperFrames](https://github.com/heygen-com/hyperframes)
- [CSS Animations Skill](.agents/skills/css-animations/SKILL.md)
- [Design System](../AGENTS.md)
