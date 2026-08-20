---
title: Next.js Template
description: A modern Next.js template with pre-configured tools, best practices, and CI/CD setup.
sidebar:
  hidden: true
---

`@theholocron/nextjs-template` is an opinionated starter for Next.js apps. It ships with a full development, testing, and release pipeline ready to go.

## What's Included

| Tool                                                    | Purpose                                       |
| ------------------------------------------------------- | --------------------------------------------- |
| [Next.js 16](https://nextjs.org)                        | React framework with App Router               |
| [React 19](https://react.dev)                           | UI framework                                  |
| [TypeScript](https://www.typescriptlang.org)            | Type safety                                   |
| [Storybook](https://storybook.js.org)                   | Component development and interaction testing |
| [Vitest](https://vitest.dev)                            | Test runner with browser mode                 |
| [Playwright](https://playwright.dev)                    | Browser automation for play tests             |
| [Cypress](https://cypress.io)                           | End-to-end user flow tests                    |
| [Chromatic](https://www.chromatic.com)                  | Visual regression testing                     |
| [MSW](https://mswjs.io)                                 | API mocking                                   |
| [ESLint](https://eslint.org)                            | Linting                                       |
| [Stylelint](https://stylelint.io)                       | CSS linting                                   |
| [Prettier](https://prettier.io)                         | Formatting                                    |
| [semantic-release](https://semantic-release.gitbook.io) | Automated releases                            |

## Getting Started

```bash
npx @theholocron/cli new nextjs my-app \
  --description "My app description" \
  --homepage "https://my-app.example.com" \
  --vault doppler \
  --agent claude
```

See [Getting Started](./getting-started) for the full walkthrough including manual setup and available scripts.

## Quick links

- [Getting started](./getting-started) — scaffold a new project with the Holocron CLI
