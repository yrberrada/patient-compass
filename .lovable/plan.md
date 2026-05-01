
## Fix edge cases and empty states

### 1. `src/pages/PatientListPage.tsx`
- After the loading/error guards, add an empty-array check: if `patients` is empty, render a centered card with "No patients on file." instead of the table.

### 2. `src/pages/PatientDetailPage.tsx`
- Replace the plain not-found block (lines 40–51) with a centered card containing the `UserX` icon from lucide-react, "Patient not found" text, and a styled back button.

### 3. `src/pages/EOBAnalysisPage.tsx`
- Replace the plain not-found block (lines 42–52) with a centered card containing the `FileX` icon from lucide-react, "EOB not found" text, and a styled back button (preserving the existing conditional back link logic).

### 4. EOB date formatting
Already confirmed: `formatDate(eob.date)` is applied on PatientDetailPage line 93. No fix needed.
