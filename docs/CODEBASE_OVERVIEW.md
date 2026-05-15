# Codebase Overview

## Purpose

This is a compact portfolio website built with Next.js App Router. The app is currently a section-based one-page portfolio scaffold.

## Stack

- Next.js 16 with App Router
- React 19
- TypeScript with strict mode
- Tailwind CSS v4
- Framer Motion is installed, but not used yet
- ESLint 9 with Next.js config
- Prettier is installed

## Structure

- `app/layout.tsx` defines the root HTML shell, metadata, favicon, and Geist font variables.
- `app/page.tsx` is the main server component that composes portfolio sections.
- `app/components/index.ts` exports shared app components and section components.
- `app/components/hash-observer.tsx` is the client wrapper that tracks visible sections and updates `window.location.hash`.
- `app/components/sections/*.tsx` contains individual page sections.
- `app/globals.css` contains Tailwind v4 setup and global CSS variables.

## Current Architecture

The homepage is intentionally kept as a server component. Browser-only scroll behavior is isolated in `HashObserver`, which is marked with `"use client"`.

Section components are currently simple placeholders:

- `hero`
- `about`
- `experience`
- `skills`
- `reviews`
- `projects`
- `pricing-plans`
- `contact`
- `questions`

Each section has an `id` used by `HashObserver` for hash-based navigation.

## Notes For Future Work

- Keep browser APIs, hooks, and interactive state in small client components.
- Keep `app/page.tsx` as a server component unless the whole page truly needs client behavior.
- Prefer adding shared UI components under `app/components/` once sections become more than placeholders.
- Consider removing the extra `eslint.config.js` if it is not used; it appears to be a leftover Vite/React config.
- `npm` was not available in the current execution environment, so lint/build checks could not be run here.
