# Raekis Patient Dashboard

Patient benefits and EOB viewer for dental practices.

## Run Locally

```bash
git clone <repo-url>
cd <project-name>
npm install
npm run dev
```

Open http://localhost:5173

## What I'd improve with more time

- Move patient data behind a secured API endpoint (critical for HIPAA compliance in production)
- Add search and filter on the patient list
- Expand EOB analysis with trend data across visits
- Add loading and error states for async data fetching
