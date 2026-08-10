# theholocron/nextjs-template — agent operating contract

`CLAUDE.md` is a symlink to this file, so Claude, Codex, and every other agent
read the same rules. Put durable, repo-wide agent guidance here.

@../github-private/AGENTS.md

## What this repo is

<description>

## Architecture

- Next.js application with TypeScript.
- Pages and components in `src/` and `app/`.
- Developed and documented with Storybook.
- Tested with vitest and Cypress.

## Quality

- `pnpm build` — `next build`
- `pnpm dev` — Next.js dev server
- `pnpm test` — vitest
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm lint` — ESLint + Stylelint
- `pnpm start:storybook` — Storybook dev server
