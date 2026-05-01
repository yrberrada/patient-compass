
## Changes

### 1. README.md — Replace Local Setup and add Troubleshooting

- Replace lines 13–26 (Prerequisites + Local Setup) with a combined, beginner-friendly Local Setup section that includes Node version guidance and a download link.
- Add a new Troubleshooting section after Local Setup covering: npm audit warnings, Vite deprecation notices, port differences, and Node version issues.

### 2. package.json — Pin dependency versions

- `vite`: change `"^5.4.19"` to `"5.4.19"` (line 52)
- `jsdom`: change `"^20.0.3"` to `"20.0.3"` (line 46)

No other files or versions are modified.
