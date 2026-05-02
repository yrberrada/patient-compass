# Raekis Patient Dashboard

A patient benefits and EOB (Explanation of Benefits) viewer 
built for dental practices.

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** — dev server and build tooling
- **React Query** — async state management
- **React Router** — client-side routing
- **Tailwind CSS** — utility-first styling

## Prerequisites

- Node.js 18 or 20 (download from https://nodejs.org — 
  choose the "LTS" version)
- npm (comes with Node.js)

## Local Setup
```bash
git clone https://github.com/yrberrada/patient-compass
cd patient-compass
npm install
npm run dev
```

Open the URL shown in the terminal — it will look something 
like http://localhost:5173 or http://localhost:8080 depending 
on your machine.

## Troubleshooting

**npm install shows vulnerability warnings**
This is expected and safe to ignore. The warnings come from 
testing-only dependencies and the dev server — they do not 
affect the running app.

**npm run dev shows warnings about "jsx" or 
"optimizeDeps.rollupOptions"**
These are internal Vite notices and do not affect 
functionality. The app will run correctly.

**npm run dev fails entirely**
Check your Node version first:
```bash
node --version
```
If it shows v22 or higher, install Node 20 LTS from 
https://nodejs.org and try again.

## Running Tests

```bash
npm test
```

## Architecture

Patient data is served through a service layer 
(`patientService.ts`) that exposes lookup functions 
(`getAllPatients`, `getPatientById`, `getEOBById`). Custom 
React Query hooks (`usePatients`, `usePatient`, `useEOB`) 
wrap these services, providing loading, error, and success 
states to the UI. Each page component consumes the 
appropriate hook and renders one of three states: a skeleton 
placeholder, an error card, or the full content. Shared 
formatting utilities (`formatDate`, `formatCurrency`) are 
centralized in `src/lib/formatters.ts` and used across all 
pages.

## What I'd improve with more time

- Move patient data behind a secured API endpoint (critical 
  for HIPAA compliance in production)
- Add search and filtering on the patient list
- Expand EOB analysis with trend data across visits
- Add end-to-end tests with Playwright for critical user flows
- Implement dark mode support using the existing Tailwind 
  design token system
