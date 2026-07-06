# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # start dev server at localhost:3000
pnpm build    # static export (outputs to /out)
pnpm lint     # ESLint
```

This project uses **pnpm** (pinned via `packageManager` in package.json). Do not add a `yarn.lock` or `package-lock.json`.

No test suite is configured.

## Architecture

This is a **Next.js 13 static-export site** (Pages Router, `output: 'export'`) for Tiny Porch Concerts, a Richmond, VA neighborhood concert series. Content is managed via Netlify CMS at `/admin`.

### Content pipeline

All site content lives in `content/` and is loaded at **build time** via webpack loaders:
- `.yml` files → `yaml-loader` (event dates, FAQ entries)
- `.md` files → `frontmatter-markdown-loader` (page sections)
- `.json` files → native import (merch items, sponsors, press links)

**Event dates** (`content/dates/*.yml`) are the most frequently updated content. Each file represents one concert month. `src/util/importDateFiles.ts` uses `require.context` to dynamically import all YML files in that folder and adds a `slug` field (filename without extension). Past years are archived to `content/_archive/{year}/` — files there are ignored by the importer and CMS.

The `EventInfo` interface in `importDateFiles.ts` is the canonical shape for event data.

### Pages and layouts

`src/pages/_app.tsx` wraps every page in `ChakraProvider` with a custom theme and `BaseLayout` (header nav + footer). Pages that define `getLayout` on the component override the default and get `RootLayout` instead (footer only, no header — the home page uses its own hero nav).

### Sections

`src/sections/` contains one folder per page section (hero, calendar, about, etc.). Each section is independently responsible for importing its own content from `content/pages/`. The Calendar section receives `EventInfo[]` as a prop from `getStaticProps` on `index.tsx`; all other sections import their content directly.

`src/sections/dictionary.ts` defines the nav link list used by the hero nav.

### Styling

The project uses **Chakra UI** as the primary component/styling system, with Tailwind CSS available but rarely used. The custom Chakra theme is in `src/theme/` — add new colors or component variants there. Brand colors like `brand.lightblue` and `brand.yellow` are defined in `src/theme/colors.ts`.

### Path aliases

Defined in `tsconfig.json`:
- `@sections/*` → `src/sections/*`
- `@util/*` → `src/util/*`
- `@content/*` → `content/*`
- `@ui/*` → `src/ui/*`
- `@layouts/*` → `src/layouts/*`

### Adding a new concert month

1. Add a new `.yml` file to `content/dates/` following the shape in `src/util/importDateFiles.ts` (month, date, image, alt, food_vendors, porches).
2. The file is automatically picked up by `importDateFiles` at build time — no code changes needed.

### Archiving a past year

Move the relevant `.yml` files from `content/dates/` into `content/_archive/{year}/`. The CMS and importer both ignore the archive folder.
