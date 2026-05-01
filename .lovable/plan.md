
# Populate data and build PatientListPage

## Changes

### 1. `src/data/patients.ts` — Add mock data
Insert the two patients (Emma Chen, Michael Patel) with their full benefits and EOB records exactly as specified, into the existing `patients` array export.

### 2. `src/components/StatusBadge.tsx` — Colored pill badge
A small component accepting a `status` string prop. Returns a rounded-full pill with:
- "EOB Available" → blue background/text
- "Claim Denied" → red
- "Eligibility Active" → green
- Also handles EOB-level statuses (Processed=blue, Denied=red, Pending=yellow)
- Fallback to muted colors for unknown statuses

### 3. `src/pages/PatientListPage.tsx` — Full patient table
- "Patients" heading
- Clean bordered table: Name | Date of Birth | Insurance Payer | Status
- DOB formatted as `MMM DD, YYYY` via `toLocaleDateString`
- Status column renders `StatusBadge`
- Rows are clickable → navigate to `/patients/:id`
- Hover shows subtle `bg-muted/40` highlight
- Semantic tokens used throughout (foreground, muted-foreground, border, muted)
