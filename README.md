# Minimal Dark Mode Home Assistant Theme

Sleek, minimal, dark mode theme for Home Assistant:
<img width="1239" height="799" alt="image" src="https://github.com/user-attachments/assets/8f714d68-0c71-48e0-b9ff-5a2294a59013" />




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

## Optional: the Google Sans font

The theme asks for Google Sans and falls back to Roboto when it isn't loaded. Themes can choose
fonts but can't load them, so to use Google Sans:

1. Copy [`extras/google-sans.js`](extras/google-sans.js) to `/config/www/google-sans.js`.
2. Add it to `configuration.yaml` and restart:

   ```yaml
   frontend:
     extra_module_url:
       - /local/google-sans.js
   ```

The font loads from Google Fonts, so each browser that opens Home Assistant contacts Google's
servers. Without internet access, the theme falls back to Roboto.

## Optional: card-mod

With [card-mod](https://github.com/thomasloven/lovelace-card-mod) installed, the theme also:

- sets button card labels in 14px medium weight, matching tile names and card headings;
- rounds the to-do list's "Add item" field like the cards and removes its underline.

Without card-mod, these rules are ignored.

## Credits

Built on [Catppuccin for Home Assistant](https://github.com/catppuccin/home-assistant) (MIT),
with its palette made neutral and its accent replaced.
