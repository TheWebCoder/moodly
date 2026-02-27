Moodly

**Elevator pitch:** Moodly is a modern, privacy-first mood-tracking web app built with Next.js and TypeScript. It helps users record daily mood scores, visualize trends on a calendar and dashboard, and manage sessions via a minimal authentication flow. The codebase is written with production patterns that showcase component design, context-driven state, and clean, testable utilities — ideal for technical review in interviews and take-home assessments.

**Why this project:** This repository demonstrates practical front-end engineering skills: product-minded feature design, pragmatic architecture choices, TypeScript + React best practices, and clear developer DX (setup, scripts, and documentation). It’s crafted to make it easy for hiring managers and engineers to evaluate code quality, tradeoffs, and engineering reasoning.

**Highlights**

- **Tech:** Next.js (app router), React + TypeScript, Vercel-ready, CSS via PostCSS, Firebase integration (where applicable).
- **Architecture:** Small, well-scoped components in `components/`, application layout and routes in `app/`, and a lightweight `context/` for auth and global state.
- **Developer experience:** Ready-to-run locally, small dependency surface, and focused files for quick code review.

**What to look for in the codebase**

- `app/layout.tsx` and `app/page.tsx` — app shell and routing.
- `components/` — component design, accessibility, and styling conventions.
- `context/AuthContext.tsx` — auth flow and context usage patterns.
- `lib/` and `utils/` — helper functions and constants showing testable logic.

Features

- Daily mood entry with numeric score
- Visual calendar with mood highlights
- Dashboard summarizing trends and recent entries
- Minimal authentication and session management

Architecture & design decisions

- Single-page application structure using Next.js app router for clear route-based code splitting.
- Context-driven auth to keep UI components framework-agnostic and easy to test.
- Focus on composition: small components with clear props rather than large, stateful pages.
- TypeScript used project-wide to reduce runtime errors and improve maintainability.

Local setup (developer quick start)

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
# open http://localhost:3000
```

3. Build for production

```bash
npm run build
npm run start
```

Testing & linting

- The project uses TypeScript and encourages unit testing of pure functions under `utils/` and `lib/`. Add tests with your preferred runner (Jest/Testing Library).

Deployment

- The app is Vercel-ready (Next.js). Deploy by connecting the repo to Vercel or using the `vercel` CLI.

Security & privacy

- The app is designed with minimal data collection in mind: only mood scores and timestamps are recorded. Any third-party integrations (e.g., Firebase) should be reviewed and configured with least-privilege credentials.

What to evaluate during a code review

- Component design — reusability, props surface, and separation of concerns.
- State management — clarity of `AuthContext` and where local vs. global state lives.
- Type safety — useful TypeScript patterns and handling of optional/nullable state.
- UX & accessibility — keyboard navigation, ARIA attributes, and visible focus states in `components/`.

Ideas for improvements (shows roadmap thinking)

- Add end-to-end tests for critical flows (login, entry creation, dashboard rendering).
- Offline-first mood caching and sync for better resilience.
- Export/import of mood history (CSV/JSON) for portability.

Contributing

- Fork the repo, make changes on a feature branch, and open a PR with a short description of the change and rationale.

License & contact

- Licensed permissively; check `package.json` for details.
- Questions or interview follow-up: open an issue or email the maintainer (contact details in the repo profile).

—

If you’d like, I can also add a short developer walkthrough file that points reviewers to the most important functions and UI flows for a 10–15 minute review. See [app/layout.tsx](app/layout.tsx) and [context/AuthContext.tsx](context/AuthContext.tsx) to start.
