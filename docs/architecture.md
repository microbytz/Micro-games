# Micro Arcade Architecture Framework

## 1. Product Pillars

### Professional-but-approachable UX
- Use a **dark mode**, high-contrast, monochrome interface with green accent states inspired by the Supabase ecosystem.
- Replace playful toy metaphors with a **builder workstation** metaphor.
- Preserve accessibility for kids and teens through plain language, guided empty states, and contextual onboarding.

### Manual creativity first
- Micro Arcade explicitly avoids generative AI for code, textures, meshes, and gameplay logic.
- Creation centers on handcrafted assets, low-code graphs, and script authoring.

### Legacy community features with modern governance
- Restore **Tix**, classic genre browsing, and personal forums.
- Keep moderation, reporting, and audit tooling.
- Exclude age-verification via ID scanning while still enforcing account safety controls.

## 2. Experience Architecture

### Player surfaces
1. **Home**
   - Personalized activity feed.
   - Continue-playing rail.
   - Tix progression widgets.
   - Community and moderation notices.
2. **Discover**
   - Genre-first browsing with classic categories such as Horror, Town and City, Comedy, Obby, RPG, and Sci-Fi.
   - Sorts for trending, newest, legacy favorites, and friend activity.
3. **Experience page**
   - Hero media, active player count, genre tags, monetization summary, forum thread previews, and update notes.
4. **Avatar**
   - Physics-aware loadout preview, layered cosmetics, and creator marketplace compatibility.
5. **Settings**
   - Privacy, chat safety, account controls, creator permissions, and parental guidance settings.

### Creator surfaces: Micro Studio
1. **Viewport**
   - Real-time 3D scene preview.
   - Gizmos for translate, rotate, scale.
   - Mesh editing mode with vertex, edge, and face selection.
   - Texture and UV tools.
2. **Explorer panel**
   - Scene hierarchy, prefabs, scripts, UI layers, physics bodies, audio emitters.
3. **Properties panel**
   - Component-driven inspector with transform, material, collision, replication, and monetization metadata.
4. **Asset browser**
   - Imported meshes, materials, decals, sounds, animations, and package templates.
5. **Dual scripting workflow**
   - Visual scripting graph for low-code logic.
   - Text editor for Lua or TypeScript runtime scripting.
6. **Playtest console**
   - Error logs, network stats, physics debug overlays, and device previews.

## 3. Front-end Design System

### Theme rules
- Base palette: charcoal, slate, zinc, and elevated near-black surfaces.
- Accent palette: restrained green for active states and system-positive feedback.
- Borders: always visible, 1px high-contrast separators.
- Typography: Geist or a similar neutral sans-serif.
- Radius: medium cards and panels to echo Supabase's calm technical style.

### Layout rules
- App shell = persistent sidebar + top utility bar + scrollable content canvas.
- Use cards for every logical module: economy, chat, genres, studio panes, moderation, and forums.
- Constrain content width for readability while allowing the studio area to expand edge to edge on large screens.

### Accessibility rules
- Minimum AA contrast for all text.
- Keyboard focus rings on all controls.
- Icon-only controls require labels/tooltips.
- Safety actions use explicit confirmation copy.

## 4. Platform Service Architecture

### Core services
1. **Identity & Profiles**
   - Accounts, sessions, friend graph, avatar inventory, parental settings.
2. **Experience Catalog**
   - Game metadata, genre taxonomy, rankings, feature flags, legacy sort presets.
3. **Social Systems**
   - Global chat, party chat, game-specific channels, direct friends messaging.
4. **Community Forums**
   - Game-scoped discussion boards, moderation queues, sticky posts, archive snapshots.
5. **Economy**
   - Tix earning ledger, sink/source balancing, shop pricing, anti-abuse policies.
6. **Studio Collaboration**
   - Project storage, version history, permissions, package publishing.
7. **Runtime & Match Services**
   - Session orchestration, authoritative physics, persistence hooks, server browser.
8. **Moderation & Trust**
   - Report intake, chat filtering, behavioral rate limits, audit trails.

### Suggested deployment model
- **Web client**: static app shell + edge caching.
- **Studio client**: browser-first with optional desktop wrapper for power users.
- **API gateway**: authenticated REST/GraphQL edge.
- **Realtime transport**: WebSockets for chat, collaboration, and playtest state.
- **Game runtime**: containerized simulation workers with regional scaling.
- **Storage**: object storage for assets, relational storage for metadata, document/thread storage for forums/chat logs.

## 5. Micro Studio Engine Architecture

### Authoring pipeline
- Scene data represented as a versioned entity-component model.
- Assets imported into a content pipeline that validates geometry, materials, and licensing metadata.
- Published builds compiled into runtime bundles with dependency manifests.

### Scripting model
- **Visual graph runtime** for approachable interaction logic.
- **Lua or TypeScript layer** for advanced systems, reusable libraries, and debugging.
- Shared API surface so graph nodes and code scripts manipulate the same objects and events.

### Physics and character controller
- Authoritative server simulation for movement, collisions, and anti-cheat resilience.
- Tunable controller presets for platformer, shooter, vehicle, and social-hangout experiences.
- Debug overlays for collision volumes, navmesh, and performance budgets.

## 6. Safety Model

### Included safety capabilities
- Text filtering and rate limits in chat and forums.
- User reports for profiles, games, chat messages, and forum posts.
- Moderator dashboards with evidence timelines and escalation notes.
- Friend/privacy controls for invites, whispers, and join permissions.

### Explicit exclusions
- No ID-based age verification scanning.
- No generative AI tooling for asset or code creation.

## 7. Recommended Build Phases

### Phase 1: Foundation
- Identity, home shell, discover browsing, Tix ledger, and simple game publishing.

### Phase 2: Creation
- Micro Studio viewport, explorer/properties panels, visual scripting MVP, and playtest sessions.

### Phase 3: Community
- Forums, richer chat, collaborative editing, and genre/community spotlights.

### Phase 4: Scale
- Asset marketplace, creator analytics, monetization balancing, and region-aware runtime scaling.
