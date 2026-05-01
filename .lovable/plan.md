
## Update README and package name

### `package.json`
- Change `"name"` from `"vite_react_shadcn_ts"` to `"patient-compass"`

### `README.md`
Full rewrite with:
- Project name and one-sentence description
- Tech stack list (React, TypeScript, Vite, React Query, React Router, Tailwind CSS)
- Prerequisites (Node 18+)
- Local setup instructions (clone, npm install, npm run dev)
- How to run tests (npm test)
- Architecture overview describing data flow: patientService → React Query hooks → page components, plus shared formatters
- "What I'd improve" section with 5 concrete items (HIPAA API, search/filter, trend analysis, E2E tests, dark mode)
