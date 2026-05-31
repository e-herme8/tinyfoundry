# TinyFoundry

Tiny private apps for the way your business actually works.

TinyFoundry is an early landing-page and product-demo prototype for a local-first micro-app foundry. The concept: turn spreadsheets, checklists, documents, and expert workflows into small private apps that can run on a customer's laptop, with optional AI and controlled local automation.

## Current Prototype

This branch contains the first marketing UI/UX direction:

- A premium TinyFoundry landing page.
- A hero narrative around "Your spreadsheet is already the prototype."
- Animated workbench visuals showing files, AI model keys, local automation, and generated desktop-style apps.
- A demo page showing raw workbook → workflow map → private app sketch.
- A lead-capture style "Tiny App Sketch" form.
- The earlier prototype shell remains accessible as internal reference while the new direction is being shaped.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Anime.js
- lucide-react
- ESLint

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Product Direction

TinyFoundry is aimed at law, tax, finance, compliance, consulting, and other specialist teams whose most valuable workflows are currently trapped in spreadsheets, copied formulas, checklists, shared folders, and expert judgment.

The core promise:

> Send one spreadsheet, checklist, or repeated workflow. Get a focused private app your team can reuse.

Key product principles:

- Selected files only: users choose the files or folders the app can access.
- Bring your own AI: customers can use their preferred model/API key where AI reasoning helps.
- Local-first by default: many workflows can run against local files without a full SaaS migration.
- Controlled automation: repeatable scripts can run inside an isolated local workspace.
- Human-reviewed outputs: important actions, exports, and decisions require review before completion.

## Branch

Initial TinyFoundry landing work is being developed on:

```text
feature/tinyfoundry-landing-page
```
