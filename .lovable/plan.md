
## Add build check scripts

### `package.json` — add two scripts

- `"typecheck": "tsc --noEmit"` — runs the TypeScript compiler without emitting, catching missing/broken imports at the type level
- `"check": "npm run typecheck && npm run lint && npm run test"` — single command for CI that runs type checking, linting, and tests in sequence

These catch issues like the `next-themes` missing dependency before they reach the build step.
