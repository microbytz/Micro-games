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

## Files

- `index.html` – main UI/UX prototype.
- `styles.css` – dark visual system and responsive layout.
- `app.js` – lightweight interactions for navigation, genres, and forums.
- `docs/architecture.md` – product architecture and system design framework.
