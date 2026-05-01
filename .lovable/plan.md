
## Wire up React Query

### New file: `src/hooks/usePatients.ts`

Three custom hooks wrapping the service functions in `useQuery`:

- `usePatients()` — `queryKey: ['patients']`, `queryFn: getAllPatients`
- `usePatient(id: number)` — `queryKey: ['patients', id]`, `queryFn: () => getPatientById(id)` 
- `useEOB(patientId: number, eobId: string)` — `queryKey: ['eob', patientId, eobId]`, `queryFn: () => getEOBById(patientId, eobId)`

Each returns the standard `useQuery` result (`data`, `isLoading`, `isError`).

### Update `src/pages/PatientListPage.tsx`

- Replace `getAllPatients` import with `usePatients` hook
- Add loading state: pulsing grey skeleton div
- Add error state: error message with back link
- Success state unchanged — use `data` from the hook (with `?? []` fallback for the `.map`)

### Update `src/pages/PatientDetailPage.tsx`

- Replace `getPatientById` import with `usePatient` hook
- Add loading/error states before the existing not-found check
- Success state unchanged — `patient` comes from `data`

### Update `src/pages/EOBAnalysisPage.tsx`

- Replace `getEOBById` import with `useEOB` hook
- Add loading/error states before the existing not-found check
- Success state unchanged — destructure `patient`/`eob` from `data`

### Skeleton pattern (reused across all three pages)

Simple inline pulsing placeholder — no component extraction needed:
```tsx
<div className="mx-auto max-w-5xl px-6 py-10 space-y-4">
  <div className="h-8 w-48 animate-pulse rounded bg-muted" />
  <div className="h-64 animate-pulse rounded-lg bg-muted" />
</div>
```
