# Supabase local scaffold

This `supabase/` directory was added manually as a fallback because the container could not fetch the Supabase CLI package from npm during `npx supabase init`.

## What is included

- `config.toml` with local auth redirect URLs and seed-file wiring.
- `seed.sql` as the initial seed placeholder.
- empty `migrations/`, `functions/`, and `tests/` directories so the project is ready for the next setup step.

## Finish initialization when CLI access works

Run:

```bash
npm install -D supabase
npx supabase init
```

If the CLI creates additional defaults, review them and keep the settings that match this project.
