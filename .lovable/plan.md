
# Build PatientDetailPage

## Changes

### 1. `src/components/BenefitsSummary.tsx`
Accept `benefits: Benefits` prop. Display:
- Annual Maximum and Remaining Maximum with a progress bar (green >50%, yellow 20–50%, red <20%)
- Deductible and Deductible Remaining
- 2×2 coverage grid (Preventive, Basic, Major, Ortho) in rounded muted boxes

### 2. `src/pages/PatientDetailPage.tsx`
Find patient by matching `params.id` to the patients array. If not found, show "Patient not found" with a back button.

**Section 1** — Two cards side by side (`grid md:grid-cols-2`):
- Left: Patient Info card — name (large), formatted DOB, payer, StatusBadge, back button to `/patients`
- Right: BenefitsSummary card

**Section 2** — EOB table:
- Title: "Explanations of Benefits (EOBs)"
- Columns: Date, Procedure Code, Procedure Name, Billed, Allowed, Insurance Paid, Patient Owes, Status
- Amounts formatted as `$X,XXX.00`, status uses StatusBadge
- Rows clickable → `/patients/:id/eob/:eobId` with hover highlight
