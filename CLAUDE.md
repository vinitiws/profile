# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **Framework**: Next.js 16 (App Router) with React 19
- **Styling**: Tailwind CSS v4 with custom CSS variables in `app/globals.css`
- **Animations**: Framer Motion for scroll-based and hover animations
- **Icons**: Lucide React + inline SVGs for social icons
- **TypeScript**: Strict mode with path alias `@/*` pointing to root

## Project Structure

- `app/page.tsx` — Single-page portfolio with all sections (Hero, About, Skills, Projects, Contact)
- `app/layout.tsx` — Root layout with Geist fonts and metadata
- `app/globals.css` — Tailwind import, CSS variables, scrollbar styling
- `components/` — Reusable UI components
  - `header.tsx` — Sticky navigation with mobile menu and theme toggle
  - `ui.tsx` — Shared components (Section, AnimatedTitle, SkillCard, ProjectCard, SocialIcon)
  - `project-filter.tsx` — Category filter buttons for projects
  - `loading.tsx` — Loading screen and skeleton components
  - `theme-provider.tsx` — Dark/light mode context provider
  - `icons.tsx` — Lucide React icon exports
- `data/profile.ts` — Single source of truth for all portfolio content (personal info, skills, projects)
- `public/` — Static assets (resume PDF)

## Key Patterns

- All components are client components (`"use client"`) with framer-motion
- Responsive design: mobile-first with `md:` breakpoints
- Dark theme: zinc color palette with gradient accents (blue/purple/pink)
- Content separation: all portfolio data lives in `data/profile.ts`, imported by `app/page.tsx`
- External links open in new tabs with `target="_blank" rel="noopener noreferrer"`

## Important Notes

- Next.js 16 has breaking changes — consult `node_modules/next/dist/docs/` for API changes
- ESLint config uses flat config format (`eslint.config.mjs`)
- Path alias `@/*` resolves to project root (not `src/`)
