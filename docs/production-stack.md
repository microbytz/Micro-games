# Micro Arcade Ideal Production Stack

## Why VS Code is useful even if you already have it

VS Code is not required to run the project, but it is valuable for the next phase because it gives the team a shared development environment with:

- TypeScript and ESLint feedback while editing.
- integrated Git workflows for branches, diffs, and reviews.
- task runners for local web, game-server, and Supabase commands.
- debugging support for browser code, Node services, and edge functions.
- extensions for SQL, Tailwind, Docker, and test runners.

In short: you do not need VS Code because the app depends on it; you want VS Code because it reduces friction for a multi-surface product.

## Recommended stack by layer

### 1. Product web app
- **Next.js + React + TypeScript**
  - Best fit for a polished dashboard, creator onboarding, discovery flows, and account surfaces.
- **Tailwind CSS + CSS variables**
  - Lets us encode the Supabase-inspired dark design tokens cleanly.
- **Radix UI primitives**
  - Good accessibility base for dialogs, menus, tabs, and panels.
- **Geist**
  - Matches the intended typography direction.

### 2. Design system
- Keep a small internal component library for cards, data tables, inspector panels, sidebars, dialogs, and command bars.
- Store colors, spacing, border treatments, and typography as reusable design tokens.
- Build the system around dark mode first.

### 3. Platform backend
- **Supabase** for:
  - Postgres database
  - Auth
  - Realtime presence and subscriptions
  - Storage for creator assets, thumbnails, and forum attachments
  - Edge Functions for lightweight trusted logic

This is a strong fit for accounts, friends, forums, Tix ledgers, metadata, moderation tools, and operational dashboards.

### 4. Game and realtime services
- **Node.js + TypeScript** for platform services and orchestration.
- **Colyseus-style authoritative room servers** or an equivalent authoritative realtime layer for multiplayer coordination.
- Dedicated simulation services for physics-heavy sessions rather than trying to force all gameplay through the web app stack.

This split keeps the product app, creator tools, and live gameplay services independent.

### 5. Micro Studio tooling
- **React Three Fiber / Three.js** for the browser-based 3D viewport.
- **Monaco Editor** for TypeScript or Lua editing.
- **React Flow** or a custom node-graph surface for low-code scripting.
- Shared scene graph and ECS-style data model so the inspector, viewport, and scripting layers edit the same project state.

### 6. Data and content model
- Postgres tables for users, friendships, avatars, games, genres, Tix transactions, forum threads, forum posts, and moderation events.
- Object storage buckets for thumbnails, textures, models, audio, and build artifacts.
- Row-level security and service-role boundaries for sensitive operations.

### 7. Infrastructure
- **Web front-end hosting** on Vercel, Netlify, or a similar platform.
- **Realtime/game services** on Fly.io, Kubernetes, or another container platform with regional placement.
- **Background jobs** for moderation pipelines, analytics aggregation, forum indexing, and asset processing.

## Suggested phased build order

### Phase 1: Product shell
- Next.js app shell
- auth
- profiles
- discover
- forums
- Tix ledger UI

### Phase 2: Creator platform
- project dashboard
- asset uploads
- version history
- scene metadata editor
- permissions and collaboration

### Phase 3: Studio client
- 3D viewport
- explorer
- properties panel
- graph scripting
- code editor
- playtest loop

### Phase 4: Multiplayer runtime
- room orchestration
- server-authoritative character controller
- session browser
- persistence hooks
- moderation instrumentation

## Supabase recommendation for this repo

For the next step in this repository, the ideal local toolchain is:

1. Node.js LTS
2. npm
3. Git
4. VS Code
5. Supabase CLI

Once the CLI is available, the intended initialization flow is:

```bash
npm install -D supabase
npx supabase init
```
