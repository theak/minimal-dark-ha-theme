# Minimal Dark Mode Home Assistant Theme

Sleek, minimal, dark mode theme for Home Assistant:
<img width="1130" height="782" alt="Smart Home Dashboard" src="https://github.com/user-attachments/assets/37fce089-21ed-4415-b87e-ecc4f20f15f9" />


## Install with HACS

1. HACS → ⋮ → **Custom repositories** → add `https://github.com/theak/minimal-dark-ha-theme`
   with type **Theme**.
2. Download **Minimal Dark**, then run the `frontend.reload_themes` action (or restart).
3. Pick **Minimal Dark** under your profile → **Theme**, or make it the default for everyone:

   ```yaml
   action: frontend.set_theme
   data:
     name: Minimal Dark
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

## Optional: card-mod

With [card-mod](https://github.com/thomasloven/lovelace-card-mod) installed, the theme also sets
button card labels in 14px medium weight, matching tile names and card headings. Without it,
that rule is ignored.

## Credits

Built on [Catppuccin for Home Assistant](https://github.com/catppuccin/home-assistant) (MIT),
with its palette made neutral and its accent replaced.
