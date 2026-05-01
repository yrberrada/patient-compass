
## Delete unused files

Remove the following files:
- `src/components/EOBCard.tsx`
- `src/components/PatientCard.tsx`
- `src/components/NavLink.tsx`
- `src/pages/Index.tsx`

No imports reference these files anywhere in the codebase, so no import cleanup is needed.

Note: `src/.lovable/` does not exist — only the root `.lovable/` directory exists, which is a Lovable system directory and should not be deleted.
