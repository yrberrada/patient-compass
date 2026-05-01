
# Final Polish Pass

## 1. Create `src/components/Navbar.tsx`
A shared top navigation bar:
- Left: "Raekis" in bold/semibold tracking-tight text, clickable link to `/patients`
- Right: "Patient Dashboard" in muted smaller text
- Subtle `border-b border-border` separator
- Consistent horizontal padding matching page containers

## 2. Update `src/App.tsx`
- Import and render `<Navbar />` above `<Routes>` so it appears on every page

## 3. Update `src/pages/PatientListPage.tsx`
- Add `useEffect` to set `document.title = "Patients | Raekis"`
- Unify max-width to `max-w-5xl` (match detail page)

## 4. Update `src/pages/PatientDetailPage.tsx`
- Add `useEffect` to set `document.title = "{patient.name} | Raekis"`
- Add empty state: if `patient.eobs.length === 0`, show "No EOBs on file" message instead of the table
- EOB table already has `overflow-x-auto` for responsive — no change needed
- Unify card classes: ensure both cards use identical `rounded-lg border border-border bg-card p-6 shadow-sm`

## 5. Update `src/pages/EOBAnalysisPage.tsx`
- Add `useEffect` to set `document.title = "EOB {eob.code} | Raekis"`
- Unify max-width to `max-w-5xl` for consistency
- Add `shadow-sm` to cards to match detail page styling

## 6. Update `src/components/BenefitsSummary.tsx`
- Add `shadow-sm` to the card wrapper for consistency

No data, routing, or component logic changes — styling and document titles only.
