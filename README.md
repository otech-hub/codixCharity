# Codix Charity Foundation — Web Application

A modern, responsive web application for the **Codix Charity Foundation** — the CSR arm of Codix Pharma Ltd. Built with React, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3-teal)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Pages & Routing](#pages--routing)
- [Design System](#design-system)
- [Customization](#customization)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## Overview

This application serves as the digital presence for Codix Charity Foundation, showcasing their work in:

- **Health** — Community healthcare interventions
- **Education** — Codix Academy training programme
- **Scholarships** — Targeted educational funding
- **Mentoring** — Professional development pairing
- **Philanthropy** — Broader charitable initiatives

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [Vite 5](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first CSS |
| [React Router 6](https://reactrouter.com) | Client-side routing |
| [Lucide React](https://lucide.dev) | Icon library |
| [Radix UI](https://radix-ui.com) | Accessible UI primitives (toast, tooltip) |
| [Sonner](https://sonner.emilkowal.dev) | Toast notifications |
| [TanStack React Query](https://tanstack.com/query) | Server state management |
| [Vitest](https://vitest.dev) | Unit testing |

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** — v18 or higher ([download](https://nodejs.org))
- **npm** — v9+ (comes with Node.js) or use **bun**, **yarn**, or **pnpm**

Verify your installation:

```bash
node --version   # Should output v18.x or higher
npm --version    # Should output 9.x or higher
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd codix-charity-foundation
```

### 2. Install dependencies

```bash
npm install
```

Or with other package managers:

```bash
# Using bun (faster)
bun install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at **http://localhost:8080**.

### 4. Open in your browser

Navigate to `http://localhost:8080` — you should see the Codix Charity Foundation homepage with the hero section, pillars, impact stats, and testimonials.

---

## Project Structure

```
codix-charity-foundation/
├── public/                     # Static assets (favicon, robots.txt)
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/                 # Images (hero photos, logo, etc.)
│   │   ├── about-team.jpg
│   │   ├── accomplishments.jpg
│   │   ├── hero-health.jpg
│   │   ├── hero-lab.jpg
│   │   ├── hero-training.jpg
│   │   └── logo.png
│   ├── components/             # Reusable UI components
│   │   ├── Footer.jsx          # Site-wide footer with navigation & newsletter
│   │   ├── Navbar.jsx          # Responsive navbar with mobile hamburger menu
│   │   ├── NavLink.jsx         # Active-state-aware navigation link
│   │   ├── SectionTag.jsx      # Reusable section label/tag component
│   │   └── ui/                 # Low-level UI primitives
│   │       ├── sonner.jsx      # Sonner toast wrapper
│   │       ├── toast.jsx       # Radix toast components
│   │       ├── toaster.jsx     # Toast renderer
│   │       └── tooltip.jsx     # Radix tooltip components
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.jsx      # Mobile breakpoint detection
│   │   └── use-toast.js        # Toast state management
│   ├── lib/
│   │   └── utils.js            # Utility functions (cn class merger)
│   ├── pages/                  # Route-level page components
│   │   ├── Index.jsx           # Home page
│   │   ├── About.jsx           # About CCF page
│   │   ├── OurWork.jsx         # Our Work & Initiatives
│   │   ├── CodixAcademy.jsx    # Codix Academy programme
│   │   ├── Scholarship.jsx     # Scholarship programme
│   │   ├── Mentoring.jsx       # Mentoring programme
│   │   ├── Contact.jsx         # Contact form
│   │   └── NotFound.jsx        # 404 page
│   ├── test/                   # Test files
│   │   ├── setup.js            # Test environment setup
│   │   └── example.test.js     # Example test
│   ├── App.jsx                 # Root application component with routing
│   ├── index.css               # Global styles, CSS variables, Tailwind directives
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── jsconfig.json               # JS path aliases configuration
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite build configuration
├── vitest.config.js            # Vitest test configuration
└── README.md                   # This file
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 8080 |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run unit tests with Vitest |
| `npm run lint` | Lint source files with ESLint |

---

## Pages & Routing

All routes are defined in `src/App.jsx`:

| Path | Page | Description |
|---|---|---|
| `/` | Home | Hero, pillars, impact stats, testimonials, CTA |
| `/about` | About CCF | Foundation story, vision/mission, Board of Trustees |
| `/our-work` | Our Work | Stats grid, pillars, featured initiatives |
| `/codix-academy` | Codix Academy | Programme overview, timeline, alumni voices carousel |
| `/scholarship` | Scholarship | Scholarship programme details |
| `/mentoring` | Mentoring | Mentoring programme details |
| `/contact` | Contact | Contact form with submission state |
| `*` | 404 | Not found page |

---

## Design System

### Color Palette

All colors are defined as CSS custom properties in `src/index.css` and mapped to Tailwind classes in `tailwind.config.js`:

| Token | HSL Value | Usage |
|---|---|---|
| `--primary` | `145 63% 32%` | Brand green — buttons, accents, links |
| `--navy` | `220 40% 13%` | Dark sections, footer background |
| `--accent` | `220 60% 45%` | Blue accent highlights |
| `--secondary` | `210 20% 96%` | Light gray section backgrounds |
| `--background` | `0 0% 100%` | Page background |
| `--foreground` | `220 20% 10%` | Primary text color |
| `--muted-foreground` | `220 10% 46%` | Secondary/body text |

### Typography

| Font | Usage | Tailwind Class |
|---|---|---|
| Playfair Display | Headings (h1–h6) | `font-heading` |
| Inter | Body text, UI elements | `font-body` |

Fonts are loaded via Google Fonts in `src/index.css`.

### Using Design Tokens

Always use semantic Tailwind classes rather than raw colors:

```jsx
// ✅ Correct — uses design tokens
<div className="bg-primary text-primary-foreground">...</div>
<p className="text-muted-foreground">...</p>

// ❌ Avoid — hardcoded colors
<div className="bg-green-700 text-white">...</div>
```

---

## Customization

### Changing Colors

1. Open `src/index.css`
2. Modify the HSL values in the `:root` block
3. Changes apply globally via Tailwind classes

### Adding a New Page

1. Create a new file in `src/pages/` (e.g., `Events.jsx`):

```jsx
const Events = () => (
  <div>
    <section className="container py-16 md:py-24 text-center">
      <h1 className="text-4xl font-heading font-bold">Events</h1>
    </section>
  </div>
);

export default Events;
```

2. Add a route in `src/App.jsx`:

```jsx
import Events from "./pages/Events";

// Inside <Routes>:
<Route path="/events" element={<Events />} />
```

3. Add a navigation link in `src/components/Navbar.jsx`:

```jsx
const navLinks = [
  // ... existing links
  { label: "Events", to: "/events" },
];
```

### Replacing Images

Replace the files in `src/assets/` with your own images, keeping the same filenames, or update the import paths in the respective page components.

---

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder.

### Deploy to Vercel

```bash
npx vercel
```

### Deploy to Netlify

```bash
npx netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install the plugin: `npm install -D vite-plugin-gh-pages`
2. Set `base` in `vite.config.js` to your repo name
3. Run `npm run build` and deploy the `dist/` folder

### Deploy to Any Static Host

Upload the contents of the `dist/` folder to any static file hosting service (AWS S3, Firebase Hosting, Cloudflare Pages, etc.).

**Important for SPA routing:** Configure your hosting to redirect all routes to `index.html` so React Router handles navigation. For example:

- **Netlify:** Create a `public/_redirects` file with `/* /index.html 200`
- **Vercel:** Handled automatically
- **Nginx:** Add `try_files $uri /index.html;`

---

## Troubleshooting

### Common Issues

**Port 8080 is already in use:**
```bash
# Change the port in vite.config.js or use:
npm run dev -- --port 3000
```

**Module not found errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

**Fonts not loading:**
Check your internet connection — fonts are loaded from Google Fonts CDN. For offline usage, download the fonts and serve them locally.

**Images not displaying:**
Ensure image files exist in `src/assets/`. Vite processes these at build time via ES module imports.

---

## License

This project is proprietary to Codix Charity Foundation. All rights reserved.
