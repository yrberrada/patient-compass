
## Trim dependency bloat

### Dependencies to remove

The following are not imported anywhere in the app's actual code paths:

**Non-Radix:**
- `@hookform/resolvers` (only in unused ui/form.tsx)
- `cmdk` (only in unused ui/command.tsx)
- `date-fns` (only in unused ui/calendar.tsx)
- `embla-carousel-react` (only in unused ui/carousel.tsx)
- `input-otp` (only in unused ui/input-otp.tsx)
- `next-themes` (only in unused ui/chart.tsx)
- `react-day-picker` (only in unused ui/calendar.tsx)
- `react-hook-form` (only in unused ui/form.tsx)
- `react-resizable-panels` (only in unused ui/resizable.tsx)
- `recharts` (only in unused ui/chart.tsx)
- `vaul` (only in unused ui/drawer.tsx)
- `zod` (only in unused ui/form.tsx)

**Radix packages** — remove all except `react-toast`, `react-tooltip`, and `react-slot`:
- `react-accordion`, `react-alert-dialog`, `react-aspect-ratio`, `react-avatar`, `react-checkbox`, `react-collapsible`, `react-context-menu`, `react-dialog`, `react-dropdown-menu`, `react-hover-card`, `react-label`, `react-menubar`, `react-navigation-menu`, `react-popover`, `react-progress`, `react-radio-group`, `react-scroll-area`, `react-select`, `react-separator`, `react-slider`, `react-switch`, `react-tabs`, `react-toggle`, `react-toggle-group`

### Dependencies to keep
- All explicitly listed (react, react-dom, react-router-dom, @tanstack/react-query, tailwind-merge, clsx, class-variance-authority, lucide-react, tailwindcss-animate, sonner)
- `@radix-ui/react-toast`, `@radix-ui/react-tooltip`, `@radix-ui/react-slot`
- All devDependencies unchanged

### After editing package.json
Run `bun install` to update the lockfile.
