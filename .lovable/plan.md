
## Add real tests

### Delete `src/test/example.test.ts`

### Create `src/test/formatters.test.ts`

Tests for `formatDate`:
- Returns correct locale string (`"2026-03-10"` → `"Mar 10, 2026"`)
- Does not shift date due to timezone (`"2026-01-01"` → `"Jan 1, 2026"`)
- Handles end-of-month dates (`"2026-12-31"` → `"Dec 31, 2026"`)

Tests for `formatCurrency`:
- Formats with two decimal places (`1200` → `"$1,200.00"`)
- Formats zero (`0` → `"$0.00"`)
- Formats cents (`425.5` → `"$425.50"`)

### Create `src/test/patientService.test.ts`

Tests for `getAllPatients`:
- Returns array with length > 0

Tests for `getPatientById`:
- Returns correct patient for valid id (id 1 → "Emma Chen")
- Returns undefined for unknown id (id 999)

Tests for `getEOBById`:
- Returns correct result for valid ids (patient 1, eob "e1" → code "D2740")
- Returns undefined for unknown eobId
- Returns undefined for unknown patientId

All tests use real mock data, no mocking needed.
