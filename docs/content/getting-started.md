---
title: Getting Started
description: How to use the Next.js template to start a new project.
---

## Use this template

Use the [Holocron CLI](https://github.com/theholocron/holocron) to scaffold a new Next.js project. It clones the template, renames all placeholder references, wires up your vault provider, and runs `holocron setup` in one step:

```bash
npx @theholocron/cli new nextjs my-app \
  --description "My app description" \
  --homepage "https://my-app.example.com" \
  --vault doppler \
  --agent claude
```

This will:

1. Create `theholocron/my-app` from this template on GitHub
2. Replace all `nextjs-template` references with `my-app` throughout the repo
3. Run `pnpm install` (including Playwright browser download)
4. Run `holocron setup` to configure branch protection, labels, workflows, and repo settings

### Manual clone

If you prefer to set things up yourself:

```bash
git clone https://github.com/theholocron/nextjs-template.git my-project
cd my-project
pnpm install
```

## Development

```bash
pnpm dev              # start Next.js dev server
pnpm start:storybook  # start Storybook dev server
```

## Scripts

| Script                 | Description                             |
| ---------------------- | --------------------------------------- |
| `pnpm dev`             | Start Next.js dev server                |
| `pnpm build`           | Production build                        |
| `pnpm start`           | Serve the production build              |
| `pnpm start:storybook` | Start Storybook dev server on port 6006 |
| `pnpm test`            | Run Storybook interaction tests         |
| `pnpm test:coverage`   | Run tests with coverage                 |
| `pnpm typecheck`       | Run TypeScript type-checking            |
| `pnpm lint`            | Run ESLint                              |
