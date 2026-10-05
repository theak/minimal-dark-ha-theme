# Slate Blue

A neutral dark theme for Home Assistant: near-black slate backgrounds, crisp light text, and a
dodger-blue (`#1E90FF`) accent, with
bold orange (`#FF9F4A`) for things that are on.

| | |
|---|---|
| Page background | `#161718` |
| Cards and dialogs | `#191a1c` |
| Sidebar and header | `#121314` |
| Accent | `#1E90FF` |
| On state (lights, switches) | `#FF9F4A` |
| Font | Inter (falls back to Roboto) |

## Install with HACS

1. HACS → ⋮ → **Custom repositories** → add `https://github.com/theak/slate-blue-ha-theme`
   with type **Theme**.
2. Download **Slate Blue**, then run the `frontend.reload_themes` action (or restart).
3. Pick **Slate Blue** under your profile → **Theme**, or make it the default for everyone:

   ```yaml
   action: frontend.set_theme
   data:
     name: Slate Blue
   ```

HACS needs themes enabled in `configuration.yaml`:

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

## Optional: the Inter font

The theme asks for Inter and falls back to Roboto when it isn't loaded. Themes can choose fonts
but can't load them, so to use Inter:

1. Download `inter-latin-wght-normal.woff2` and `inter-latin-ext-wght-normal.woff2` from
   [@fontsource-variable/inter](https://cdn.jsdelivr.net/npm/@fontsource-variable/inter@5/files/)
   into `/config/www/fonts/`.
2. Copy [`extras/inter.js`](extras/inter.js) to `/config/www/fonts/inter.js`.
3. Add it to `configuration.yaml` and restart:

   ```yaml
   frontend:
     extra_module_url:
       - /local/fonts/inter.js
   ```

## Credits

Built on [Catppuccin for Home Assistant](https://github.com/catppuccin/home-assistant) (MIT),
with its palette made neutral and its accent replaced.
