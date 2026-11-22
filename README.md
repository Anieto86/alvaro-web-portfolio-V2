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

## Contact form

The form posts to a Google Apps Script web app that emails the message. Until it is configured, the Contact section shows an email button instead.

1. Open https://script.google.com, create a project and paste `apps-script/contact-form.gs`.
2. Deploy -> New deployment -> type **Web app**: Execute as **Me**, Who has access **Anyone**. Authorize when asked.
3. Copy the **Web app URL** into `CONTACT_FORM_ENDPOINT` in `src/utils/contact.ts`.
4. After any change to the script, create a **new version** of the deployment (Deploy -> Manage deployments -> Edit -> New version).

## Deployment

Deployed on Netlify. Build command: `pnpm build`, publish directory: `dist`.
