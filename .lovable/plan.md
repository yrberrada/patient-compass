
# Raekis Patient Dashboard — Scaffold

Set up the project structure with TypeScript interfaces, empty page/component files, and working React Router routes.

## What gets built

1. **Data layer** (`src/data/patients.ts`) — All TypeScript interfaces (Patient, EOB, Benefits, Analysis) and an empty mock data array.

2. **Components** (placeholder exports):
   - `PatientCard.tsx`
   - `BenefitsSummary.tsx`
   - `EOBCard.tsx`
   - `EOBAnalysis.tsx`
   - `StatusBadge.tsx`

3. **Pages** (placeholder text, no real content):
   - `PatientListPage.tsx` — renders "Patient List"
   - `PatientDetailPage.tsx` — renders "Patient Detail" (reads `:id` param)
   - `EOBAnalysisPage.tsx` — renders "EOB Analysis" (reads `:id` and `:eobId` params)

4. **Router** (`App.tsx`) — React Router v6 with:
   - `/` → redirect to `/patients`
   - `/patients` → PatientListPage
   - `/patients/:id` → PatientDetailPage
   - `/patients/:id/eob/:eobId` → EOBAnalysisPage
   - `*` → NotFound

No UI content, styling, or functionality beyond the scaffold. App will compile and run with no errors.
