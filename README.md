# `@theholocron/nextjs-template`

<!-- holocron:description -->

A modern Next.js template with pre-configured tools, best practices, and CI/CD setup for rapid application development.

<!-- /holocron:description -->

<!-- holocron:installation -->

## Installation

```bash
pnpm install @theholocron/nextjs-template
```

## Usage

```typescript
import {} from "@theholocron/nextjs-template";
```

<!-- /holocron:installation -->

<!-- holocron:template-only -->

## Getting Started

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

<!-- /holocron:template-only -->

## Development

<!-- holocron:development -->

| Script                | Command                                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------------------- |
| `pnpm build`          | `next build --webpack`                                                                                         |
| `pnpm dev`            | `next dev --webpack`                                                                                           |
| `pnpm preview`        | `npx serve@latest out`                                                                                         |
| `pnpm start`          | `next start`                                                                                                   |
| `pnpm lint`           | `docker run -e LOG_LEVEL=DEBUG -e RUN_LOCAL=true -v .:/tmp/lint --rm ghcr.io/super-linter/super-linter:latest` |
| `pnpm test`           | `vitest`                                                                                                       |
| `pnpm test:coverage`  | `vitest run --project storybook --coverage`                                                                    |
| `pnpm test:storybook` | `vitest run --project storybook --coverage`                                                                    |
| `pnpm test:cypress`   | `cypress open`                                                                                                 |
| `pnpm typecheck`      | `tsc --noEmit`                                                                                                 |
| `pnpm audit`          | `knip`                                                                                                         |

<!-- /holocron:development -->

## What's Included

| Tool                                                    | Purpose                                       |
| ------------------------------------------------------- | --------------------------------------------- |
| [Next.js 16](https://nextjs.org)                        | React framework with App Router               |
| [React 19](https://react.dev)                           | UI framework                                  |
| [TypeScript](https://www.typescriptlang.org)            | Type safety                                   |
| [Storybook](https://storybook.js.org)                   | Component development and interaction testing |
| [Vitest](https://vitest.dev)                            | Test runner with browser mode                 |
| [Playwright](https://playwright.dev)                    | Browser automation for play tests             |
| [MSW](https://mswjs.io)                                 | API mocking                                   |
| [ESLint](https://eslint.org)                            | Linting                                       |
| [Stylelint](https://stylelint.io)                       | CSS linting                                   |
| [Prettier](https://prettier.io)                         | Formatting                                    |
| [semantic-release](https://semantic-release.gitbook.io) | Automated releases                            |

## Releases

<!-- holocron:releases -->

Automated via [semantic-release](https://semantic-release.gitbook.io/semantic-release/).
See the [releases page](https://docs.theholocron.dev/nextjs-template/releases) and [CHANGELOG.md](./CHANGELOG.md).

<!-- /holocron:releases -->
