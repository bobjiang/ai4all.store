# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Consistency & Conflict Prevention

**Before coding:**
1. Read related files, imports, and types first. Match existing patterns.
2. Check for duplicate names, conflicting types, circular deps, inconsistent patterns.

**During coding:**
3. One pattern per concern — don't introduce alternatives without approval.
4. Check imports after every edit. Follow sibling file conventions.

**After coding:**
5. Run the full check suite (lint, type-check, build).
6. Log any conflicts in `CONFLICTS.md` with date, files, and resolution.

## Self-Learning

Treat every error/conflict/failure as a learning signal.

1. **Diagnose root cause** — ask "why?" before "how to fix?"
2. **Record in `LEARNINGS.md`** — error, root cause, fix, prevention.
3. **Update this file** if the error reveals a missing rule.
4. After multi-step tasks, self-review for inconsistencies and simplification opportunities.

## Don'ts

- No new deps without justification and checking `package.json` first.
- No shared type changes without checking all consumers.
- No `console.log` in committed code.
- No files outside established directory structure.
- No inline styles — use Tailwind.
- No `@ts-ignore` / `eslint-disable` without an explaining comment.

## Commands

```bash
npm run dev        # localhost:3000
npm run build
npm run lint
```

No test framework is configured.

## Architecture

Single-page Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 3 landing page. All 8 components render sequentially in `app/page.tsx`. Data is static (hardcoded in components). No API routes or database.

Client components (`'use client'`): Hero, FAQ, FinalCTA. All others are server components.

Third-party integrations (Stripe, ConvertKit, GA4) are loaded via `<Script>` in `app/layout.tsx` and `components/FinalCTA.tsx`. Keys are hardcoded (all public/client-safe).

See `tailwind.config.ts` for custom color palette. Path alias: `@/*` → project root.
