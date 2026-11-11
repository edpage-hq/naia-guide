# naia-guide

## Description

The user guide of [Naia](https://naia.edpage.net), edPage group's management platform. One page per role (client, sales network, partners, project teams, Cash, support, HR, training, administration, Management), in French (root locale) and English. The content describes Naia V3.

Built from the edpage-hq `guide-starter` template: [VitePress](https://vitepress.dev) with local search, multi-version docs and CI.

## Tech stack

- [VitePress](https://vitepress.dev) (Vue-powered static site generator)
- [@viteplus/versions](https://github.com/viteplus/versions) for multi-version documentation
- TypeScript for site config/theme
- pnpm

## Prerequisites

- Node.js 20+ (see `.nvmrc`)
- [pnpm](https://pnpm.io/) 9+

## Installation

```bash
pnpm install
cp .env.example .env
pnpm docs:dev
```

The site is served locally at `http://localhost:5173/docs/` (French root at `/docs/`, English at `/docs/en/`).

## Adding a page

Every page exists in both languages: `src/guide/<slug>.md` and `src/en/guide/<slug>.md`, with the same slug. Add its sidebar entry in `.vitepress/config/locales/fr.ts` and `en.ts`, and, for a new role, its card on both homepages (`src/index.md`, `src/en/index.md`). Use the labels exactly as they appear in Naia's interface.

## Versioning the docs

The current content in `src/` is always served as the "live" version (the one visible without a version prefix). To cut a new version when the documented project releases a breaking change:

1. Copy `src/` into `archive/<version>/` (e.g. `archive/1.0.0/`), keeping the same `en/`/root structure.
2. Bump `versionsConfig.current` in `.vitepress/config/index.ts` to the new version.
3. Keep editing `src/` for the new current version going forward.

Archived versions are served under `/<version>/` (and `/en/<version>/` for the English locale). The version switcher in the nav is generated automatically from the folders under `archive/`.

## Environment variables

| Variable        | Description                                            | Example                   |
| --------------- | ------------------------------------------------------ | ------------------------- |
| `VITE_BASE`     | Public base path the site is served from               | `/docs/`                  |
| `VITE_SITE_URL` | Canonical site URL, used in Open Graph / SEO meta tags | `https://docs.edpage.net` |

## Running tests

There's no separate test suite — the production build itself is the check: it fails on broken internal links or missing referenced assets.

```bash
pnpm lint         # ESLint + Prettier + markdownlint
pnpm docs:build   # fails on broken links/markdown
```

## Environments

| Env        | URL                                                         | Deployment |
| ---------- | ----------------------------------------------------------- | ---------- |
| Staging    | _fill in once this project's staging environment exists_    |            |
| Production | _fill in once this project's production environment exists_ |            |

`pnpm docs:deploy` builds the site and publishes `.vitepress/build` to the `gh-pages` branch via [gh-pages](https://github.com/tschaub/gh-pages). Adjust `VITE_BASE` to match how the site is actually served (root domain vs. GitHub Pages project path) before deploying.

## Contacts

- Tech lead: _fill in per project_
- Product owner: _fill in per project_
