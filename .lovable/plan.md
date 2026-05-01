
## Replace emoji icons with Lucide icons in Claim Analysis

### `src/pages/EOBAnalysisPage.tsx`

- Add `ClipboardList`, `AlertTriangle`, `CheckCircle2` to the existing lucide-react import
- Replace the three emoji spans in the Claim Analysis section:
  - `📋` → `<ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-primary" />`
  - `⚠️` → `<AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" />`
  - `✅` → `<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />`

Clean SVG icons that match the app's professional styling.
