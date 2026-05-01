# Raekis Patient Dashboard

A patient benefits and EOB (Explanation of Benefits) viewer built for dental practices.

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** — dev server and build tooling
- **React Query** — async state management
- **React Router** — client-side routing
- **Tailwind CSS** — utility-first styling

## Local Setup

### Prerequisites
- Node.js 18 or 20 (do **NOT** use Node 22+ — it may cause compatibility issues with this project's dependencies)
- npm (comes with Node.js)

Download Node.js from: [https://nodejs.org](https://nodejs.org) — choose the **"LTS"** version.

### Steps

```bash
git clone <repo-url>
cd patient-compass
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Troubleshooting

**npm install shows vulnerability warnings**
This is expected. The warnings come from testing-only dependencies (jsdom) and the dev server (vite/esbuild). They do not affect the running app or any production build. Do not run `npm audit fix --force` — it will upgrade Vite to a version incompatible with the current React plugin and break the dev server.

**npm run dev shows warnings about "jsx" or "optimizeDeps.rollupOptions"**
These are deprecation notices from Vite internals and do not affect functionality. The app will still run correctly. You can ignore them.

**The app opens on port 8080 instead of 5173**
This can happen if Vite was upgraded. Either port works — use whatever URL is shown in the terminal after `npm run dev`.

**npm run dev fails entirely**
First check your Node version:
```bash
node --version
```
If it shows v22 or higher, install Node 20 LTS from [https://nodejs.org](https://nodejs.org) and try again. If you have multiple Node versions installed, use nvm to switch:
```bash
nvm use 20
```

## Running Tests

```bash
npm test
```

## Architecture

Patient data is served through a service layer (`patientService.ts`) that exposes lookup functions (`getAllPatients`, `getPatientById`, `getEOBById`). Custom React Query hooks (`usePatients`, `usePatient`, `useEOB`) wrap these services, providing loading, error, and success states to the UI. Each page component consumes the appropriate hook and renders one of three states: a skeleton placeholder, an error card, or the full content. Shared formatting utilities (`formatDate`, `formatCurrency`) are centralized in `src/lib/formatters.ts` and used across all pages.

## What I'd improve with more time

- Move patient data behind a secured API endpoint (critical for HIPAA compliance in production)
- Add search and filtering on the patient list
- Expand EOB analysis with trend data across visits
- Add end-to-end tests with Playwright for critical user flows
- Implement dark mode support using the existing Tailwind design token system
