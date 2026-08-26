# Jellyfin LCARS Theme

Star Trek **LCARS** theme for **Jellyfin**.

- **jellyfin-lcars-injector.js** — **one pasteable script** via the [JavaScript Injector Plugin](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector) (panel CSS + structure + auto-init)

Colors / design from [thelcars.com](https://www.thelcars.com) and [ha-lcars](https://github.com/th3jesta/ha-lcars).

---

## Setup

I have not had consistent results in applying theme.css via the *Branding* section of the Jellyfin dashboard.
Due to this, the theme styles are contained in a single JavaScript file.
A plugin is required to load and execute the theme script, see below. 
(A stretch goal is to make this self contained and not need a separate plugin.)

### 1. Install [Jellyfin-JavaScript-Injector](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector#%EF%B8%8F-installation) Plugin.
You only need to complete this step once.

### 2. Install the LCARs theme

1. Go to **Dashboard → JS Injector**.
2. On the JavaScript Injector Plugin settings page, click  **Add Script**.
3. In the *Script Name* field use **jellyfin-lcars-injector.js**. 
4. Copy the [script contents](https://raw.githubusercontent.com/JHuckins/jellyfin-lcars/refs/heads/main/jellyfin-lcars-injector.js) into the text area below the *Script Name* field.
5. Click/Tap **Save**.

That single script:
- Injects panel/frame CSS (`<style>`)
- Builds header rail, drawer rail, section frames, detail bars
- Styles buttons
- Auto-inits and re-runs on SPA navigation

---

## Project layout

```
jellyfin-lcars/
├── jellyfin-lcars-injector.js     # Single script containing the theme
├── LICENSE
└── README.md
```

---

## Compatibility

- Web: Supported
- Mobile App: Coming soon
- Native TV apps: not supported / no JS

## License

MIT
