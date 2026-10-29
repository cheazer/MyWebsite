// Vercel's NestJS framework preset looks for a recognized entrypoint file
// named src/app.ts. The real bootstrap lives in main.ts (used for local dev
// via `nest start`/`node dist/main`), so this just pulls it in to keep one
// source of truth.
import './main';
