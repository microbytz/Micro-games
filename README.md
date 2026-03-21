# Micro Arcade

Micro Arcade is a concept prototype for a community-driven game platform that combines a polished, developer-tool-inspired player experience with a powerful creator workspace called **Micro Studio**.

## What is included

- A dark-mode dashboard inspired by the Supabase design language.
- Sidebar navigation for **Home**, **Discover**, **Studio**, **Avatar**, and **Settings**.
- A feature-rich **Micro Studio** concept blending Explorer/Properties workflows with a Blender-like viewport.
- A legacy-forward discovery experience that restores **Tix**, classic genre sorting, and game-specific forums.
- A technical architecture document describing platform services, moderation boundaries, and creator tooling.

## Run locally

Because the repository is intentionally lightweight, this prototype is delivered as a static front-end.

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## NPM scripts

```bash
npm run dev
npm run check:js
npm run supabase:init
```

- `npm run dev` serves the current static prototype through Python.
- `npm run check:js` validates `app.js` syntax with Node.
- `npm run supabase:init` is the intended next-step command once the Supabase CLI package is installed successfully.


## Supabase scaffold

A starter `supabase/` directory is included so the project can move forward even if CLI installation is blocked in the current environment.

- `supabase/config.toml` sets local auth redirect URLs and points seeding at `supabase/seed.sql`.
- `supabase/README.md` explains how to rerun the official CLI initialization later.

## Production planning docs

- `docs/architecture.md` – platform architecture and system design framework.
- `docs/production-stack.md` – recommended production stack, phased build order, and why VS Code is useful for the next implementation stage.

## Files

- `index.html` – main UI/UX prototype.
- `styles.css` – dark visual system and responsive layout.
- `app.js` – lightweight interactions for navigation, genres, and forums.
- `docs/architecture.md` – product architecture and system design framework.
- `docs/production-stack.md` – recommended production implementation stack.
