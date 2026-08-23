# Jellyfin LCARS Theme

Star Trek **LCARS** theme for **Jellyfin Web**.

- **theme.css** — base theme (Custom CSS)
- **jellyfin-lcars-injector.js** — **one pasteable script** for [JavaScript Injector](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector) (panel CSS + structure + auto-init)

Colors / design from [thelcars.com](https://www.thelcars.com) and [ha-lcars](https://github.com/th3jesta/ha-lcars).

---

## Setup

### 1. Base theme (Custom CSS)

**Dashboard → Branding → Custom CSS:**

```css
@import url("https://cdn.jsdelivr.net/gh/YOUR_USER/jellyfin-lcars@main/theme.css");
```

Optional add-ons after that line:

```css
@import url("https://cdn.jsdelivr.net/gh/YOUR_USER/jellyfin-lcars@main/options/classic-strong-borders.css");
@import url("https://cdn.jsdelivr.net/gh/YOUR_USER/jellyfin-lcars@main/options/picard-palette.css");
```

### 2. Full panels (JavaScript Injector)

1. Install [Jellyfin-JavaScript-Injector](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector).
2. **Dashboard → Plugins → JavaScript Injector → Add Script**.
3. Name it e.g. `LCARS Panels`.
4. Paste the **entire** contents of `jellyfin-lcars-injector.js`.
5. Enable → Save → hard-refresh the browser.

That single script:

- Injects panel/frame CSS (`<style>`)
- Builds header rail, drawer rail, section frames, detail bars
- Auto-inits and re-runs on SPA navigation

You do **not** need a separate `panels.css` import when using this script.

---

## Script API (optional)

After load:

```js
JellyfinLCARS.refresh();
JellyfinLCARS.setAlert('red');   // or 'blue' / 'none'
JellyfinLCARS.destroy();
```

---

## Optional CSS add-ons

| File | Effect |
|------|--------|
| `options/classic-strong-borders.css` | Thicker H/V bars |
| `options/next-gen-palette.css` | Warmer TNG oranges |
| `options/picard-palette.css` | Picard blue + coral |
| `options/lower-decks-palette.css` | Lower Decks golds |
| `options/hide-jellyfin-logo.css` | Hide default logo |
| `options/section-frames.css` | CSS-only section bars (not needed with injector) |

---

## Project layout

```
jellyfin-lcars/
├── theme.css                      # Base theme → Custom CSS
├── jellyfin-lcars-injector.js     # ONE script → JS Injector plugin
├── lcars-inject.js                # Modular source (same logic, no embedded CSS)
├── options/
│   ├── panels.css                 # Source styles embedded in injector
│   └── …
├── LICENSE
└── README.md
```

---

## Compatibility

- Jellyfin Web + JavaScript Injector plugin
- CSS-only mode still works without the script
- Native TV apps: limited / no JS

## License

MIT
