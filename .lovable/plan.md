
# Build EOBAnalysisPage

## File: `src/pages/EOBAnalysisPage.tsx`

Full rewrite of the placeholder page. Looks up patient via `params.id` and EOB via `params.eobId`. If not found, shows error with back button.

### Layout (single-column, max-w-3xl centered)

1. **Breadcrumb** — `Patients / [Patient Name] / EOB [code]`, each segment a clickable `<Link>`
2. **Procedure Header** — `{code} — {procedure}` as h1, date of service + StatusBadge below
3. **Financial Breakdown card** — Billed, Allowed, Insurance Paid rows, then a divider, then Patient Responsibility in bold larger text. If patient responsibility > 40% of billed, show a yellow warning banner below the card.
4. **Claim Analysis card** — Three rows with emoji icons (📋 ⚠️ ✅), label, and value from `eob.analysis`
5. **Back to Patient** button at bottom → `/patients/:id`
