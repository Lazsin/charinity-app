## Quick context

- This is a minimal Vite + React SPA (ESM). Key files:
  - `index.html` — app shell, root element `#root`.
  - `src/main.jsx` — React entry (imports `src/index.css` and `App`).
  - `src/App.jsx` — UI component tree (currently placeholder JSX).
  - `src/index.css`, `src/App.css` — project styles (currently empty/placeholder).
  - `vite.config.js` — Vite + `@vitejs/plugin-react`.
  - `eslint.config.js` — project's ESLint rules.
  - `package.json` — scripts: `dev`, `build`, `preview`, `lint`.

No backend code or API integrations are present in the repo; it's a client-only frontend scaffold.

## How to run / developer workflows

- Start local dev server (hot reload):

```powershell
npm run dev
```

- Build production bundle:

```powershell
npm run build
```

- Preview a production build locally:

```powershell
npm run preview
```

- Lint JS/JSX files (project uses a custom `eslint.config.js`):

```powershell
npm run lint
```

Notes: package.json uses `type: "module"`. Use modern ESM imports; CommonJS require() is not used.

## Patterns & conventions for edits

- Components live in `src/` as .jsx files. Use named files and default exports for simple components. Example new component:

  - `src/components/MyCard.jsx` -> import in `App.jsx` with `import MyCard from './components/MyCard.jsx'`.

- CSS: global entry point is `src/index.css` (imported in `main.jsx`). Prefer adding component-level CSS files (e.g. `src/MyComponent.css`) and importing them in that component.

- React entry uses `createRoot` and `StrictMode` (see `src/main.jsx`). Keep that pattern for mounting.

## Linting specifics (important for automated edits)

- The ESLint config is defined in `eslint.config.js` and does a few project-specific things:
  - Globally ignores `dist` (via `globalIgnores(['dist'])`).
  - Applies to `**/*.{js,jsx}` and extends the recommended JS + react-hooks + vite plugin configs.
  - Custom rule: `'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]` — this allows unused identifiers starting with a capital letter or underscore (commonly used for placeholders or exported types).

When making automated edits, avoid introducing top-level unused lowercase vars (these will error under lint).

## Dependencies & potential caveats

- The repo includes Tailwind-related packages in `package.json` (`tailwindcss`, `@tailwindcss/vite`) but there is no discoverable `tailwind.config.js` or PostCSS config in the repo root. If you add Tailwind usage, also add configuration and import the Tailwind directives into `src/index.css`.

- There are no test scripts or test framework present — don't assume a test runner exists.

## Example tasks and how to do them (concrete examples)

- Add a new route-less page component `src/About.jsx`:
  1. Create `About.jsx` exporting a default React component.
  2. Import and render it from `App.jsx` for manual verification.
 3. Run `npm run dev` and open http://localhost:5173 (default Vite port).

- Fix ESLint unused vars error introduced by a codegen: prefer renaming throwaway bindings to start with `_` or a capital letter (per config) to avoid lint failures.

## What I couldn't infer automatically

- There are no tests, CI manifests, or CONTRIBUTING files to document branch/PR workflows. If you want CI/PR instructions added, provide those pipelines or an example workflow.

## Quick checklist for automated agents

- Always run `npm run lint` locally after edits.
- Prefer ESM imports and .jsx file extensions.
- Mount components with `createRoot`/`StrictMode` as shown in `src/main.jsx`.
- If adding Tailwind, also add `tailwind.config.js` and import the directives into `src/index.css`.

---
If any section is unclear or you want additional examples (component scaffolds, commit message conventions, or CI steps), tell me which area to expand and I will iterate.
