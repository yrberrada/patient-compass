
## Data model fixes

### 1. `src/data/patients.ts` — Interface and data changes

- EOB interface: rename `patient: number` to `patientResponsibility: number`
- Benefits interface: change `preventive`, `basic`, `major`, `ortho` from `string` to `number | null`
- Mock data: update field name (`patient` → `patientResponsibility`), convert coverage strings to decimals (`"100%"` → `1.0`, `"80%"` → `0.8`, `"Not covered"` → `null`)

### 2. `src/pages/PatientDetailPage.tsx`

- Line 107: `eob.patient` → `eob.patientResponsibility`

### 3. `src/pages/EOBAnalysisPage.tsx`

- Line 34: `eob.patient` → `eob.patientResponsibility`
- Line 74: `eob.patient` → `eob.patientResponsibility`

### 4. `src/components/BenefitsSummary.tsx`

- Update the coverage grid display: render `benefits[key]` as `val === null ? "Not covered" : \`${Math.round(val * 100)}%\`` to keep visual output identical.
