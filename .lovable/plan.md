
## Add data service layer

### New file: `src/services/patientService.ts`

- Import `Patient`, `EOB` types from `@/data/patients`
- Move the `patients` data array here (remove from `patients.ts`)
- Export three functions:
  - `getAllPatients(): Patient[]`
  - `getPatientById(id: number): Patient | undefined`
  - `getEOBById(patientId: number, eobId: string): { patient: Patient; eob: EOB } | undefined`

### Update `src/data/patients.ts`

- Remove the data array (lines 41–112), keep only the interfaces

### Update page imports

All three pages currently do `import { patients } from "@/data/patients"` + inline `.find()`. Replace with service imports:

- **PatientListPage**: `import { getAllPatients } from "@/services/patientService"` → `const patients = getAllPatients()`
- **PatientDetailPage**: `import { getPatientById } from "@/services/patientService"` → `const patient = getPatientById(Number(id))`
- **EOBAnalysisPage**: `import { getEOBById } from "@/services/patientService"` → `const result = getEOBById(Number(id), eobId!)` with destructured `patient`/`eob`

`BenefitsSummary.tsx` only imports the `Benefits` type — no change needed.
