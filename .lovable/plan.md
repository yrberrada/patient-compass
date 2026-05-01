
## Extract shared formatters utility

### New file: `src/lib/formatters.ts`

Create with two named exports:
- `formatDate(isoString: string): string` — appends `T00:00:00`, formats as `"Mar 10, 2026"` (en-US)
- `formatCurrency(amount: number): string` — formats as `"$1,200.00"` (en-US, USD)

### Update `src/pages/PatientListPage.tsx`
- Remove inline `formatDob` function (lines 6–13)
- Add `import { formatDate } from "@/lib/formatters"`
- Replace `formatDob(p.dob)` with `formatDate(p.dob)`

### Update `src/pages/PatientDetailPage.tsx`
- Remove inline `formatDob` and `formatCurrency` functions (lines 7–14)
- Add `import { formatDate, formatCurrency } from "@/lib/formatters"`
- Replace `formatDob(patient.dob)` with `formatDate(patient.dob)`
- **Bug fix**: line 101 renders `eob.date` as raw ISO string — wrap with `formatDate(eob.date)`

### Update `src/pages/EOBAnalysisPage.tsx`
- Remove inline `formatCurrency` function (lines 6–8)
- Add `import { formatDate, formatCurrency } from "@/lib/formatters"`
- Replace raw `eob.date` on line 51 with `formatDate(eob.date)`
