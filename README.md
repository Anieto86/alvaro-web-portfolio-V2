# Alvaro Nieto – Portfolio

Personal portfolio of Alvaro Nieto, Full Stack Developer.

**Live:** https://alvaro-web-portfolio.netlify.app/

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS 3
- pnpm

## Features

- Responsive single-page layout
- Light / dark / system theme with no flash on load
- Experience timeline and project showcase
- Animated tech-stack carousel (respects `prefers-reduced-motion`)

## Getting started

```bash
pnpm install
pnpm dev        # start the dev server
pnpm build      # type-check and build for production
pnpm preview    # preview the production build
pnpm lint       # run ESLint
```

## Project structure

```
src/
  assets/icons/   SVG icon components
  components/     UI components (Hero, Projects, Experience, ...)
  layouts/        Page layout
  utils/          Static content (experience, projects, stack logos)
```

Content for experience, projects and stack logos lives in `src/utils/constants.tsx`.

## Deployment

Deployed on Netlify. Build command: `pnpm build`, publish directory: `dist`.
