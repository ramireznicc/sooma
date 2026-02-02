# Sooma

Landing page para **Sooma**, empresa de soporte técnico y servicios informáticos en Rosario, Argentina.

## Tech Stack

- **React 19** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS v4** - Framework de estilos
- **Lucide React** - Iconos
- **Font Awesome** - Iconos de redes sociales
- **Web3Forms** - Manejo de formulario de contacto

## Características

- Diseño responsive (mobile-first)
- Animaciones de scroll suaves
- Formulario de contacto integrado con Web3Forms
- Botón flotante de WhatsApp con animación
- Sección de FAQ con acordeón interactivo
- Planes de abono mensual con CTAs directos
- Navegación con scroll suave

## Estructura del Proyecto

```
src/
├── assets/
│   └── images/          # Logos e imágenes
├── components/
│   ├── common/          # Componentes reutilizables
│   │   ├── AnimateOnScroll.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── SectionDivider.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Toast.jsx
│   │   └── WhatsAppButton.jsx
│   ├── layout/          # Header, Footer, Layout
│   └── sections/        # Secciones de la landing
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── About.jsx
│       ├── FAQ.jsx
│       ├── Contact.jsx
│       └── Social.jsx
├── hooks/               # Custom hooks
│   └── useScrollAnimation.js
├── pages/               # Páginas
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css            # Estilos globales y tema
```

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ramireznicc/sooma.git

# Entrar al directorio
cd sooma

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Preview del build de producción |
| `npm run lint` | Ejecuta ESLint |

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Primary | `#564d65` | Color principal (púrpura) |
| Accent | `#2cda9d` | Color de acento (verde menta) |
| Secondary | `#1a181b` | Textos y fondos oscuros |

## Fuentes

- **Ubuntu** - Fuente principal
- **Ubuntu Mono** - Subtítulos de secciones
- **Abril Fatface** - Logo

## Deploy

El proyecto está preparado para deploy en cualquier servicio de hosting estático (Vercel, Netlify, GitHub Pages, etc.).

```bash
# Generar build
npm run build

# Los archivos estarán en /dist
```

## Licencia

Proyecto privado - Todos los derechos reservados.

---

Desarrollado con React + Vite
