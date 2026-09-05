/**
 * Jellyfin LCARS
 * License: MIT
 */
(function () {
  "use strict";
  if (window.JellyfinLCARS && window.JellyfinLCARS.__lcarsBooted) return;
  var STYLE_ID = "jf-lcars-theme-css";
  var FRAME_ID = "jf-lcars-frame";
  var RUNNER_ID = "jf-lcars-top-runner";
  var ELBOW_ID = "jf-lcars-elbow";
  var CUT_ID = "jf-lcars-elbow-cut";
  var DASH_ELBOW_ID = "jf-lcars-dash-elbow";
  var DASH_CUT_ID = "jf-lcars-dash-elbow-cut";
  var DASH_BRIDGE_ID = "jf-lcars-dash-bridge";
  var THEME_CSS = `/*
 * Jellyfin LCARS — Picard theme v2.3.0
 * Full styles restored + frame matching thelcars.com/themes/picard.html
 *
 * Frame model (from picard.css markup):
 *   left column (primary-gray) full height
 *   thin horizontal bar-runner under header (--bar-height)
 *   elbow at junction: large radius on content-side corner
 *   content well starts after sidebar with matching inner curve
 * License: MIT
 */
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&display=swap');
:root {
  --blue: #37a6d1;
  --bright-blue: #41c4f7;
  --dark-blue: #1c3c55;
  --dark-gray: #2f3749;
  --ghost-gray: #d2d5df;
  --light-gray: #9ea5ba;
  --light-orange-red: #ff6753;
  --medium-dark-blue: #2a7193;
  --medium-dark-gray: #52596e;
  --orange-red: #e7442a;
  --pale-orange-red: #ff977b;
  --primary-gray: #6d748c;
  --starlight: #f3f4f7;
  --lcars-sidebar: 56px;
  --lcars-bar-h: 25px;
  --lcars-bar-gap: 8px;
  --lcars-elbow-size: 40px;
  --lcars-header-height: 48px;
  --lcars-font: "Antonio", "Segoe UI", system-ui, sans-serif;
  --lcars-sidebar-bar: var(--primary-gray);
  --lcars-header-bar: var(--light-gray);
  --lcars-primary: var(--orange-red);
  --lcars-highlight: var(--pale-orange-red);
  --lcars-accent: var(--blue);
  --lcars-text: var(--light-gray);
  --lcars-text-secondary: var(--ghost-gray);
  --lcars-bg: #000000;
  --lcars-page-bg: #101014;
  --lcars-panel: #0a0a0c;
  --theme-primary-color: var(--orange-red);
  --header-background-color: #000000 !important;
  --drawer-background-color: var(--primary-gray);
  --primary-color: var(--orange-red);
  --accent: var(--orange-red);
  /* Semantic status — Picard palette only (no non-Picard greens/purples) */
  --lcars-alert: var(--orange-red);
  --lcars-alert-soft: var(--light-orange-red);
  --lcars-info: var(--blue);
  --lcars-info-bright: var(--bright-blue);
  --lcars-confirm: var(--medium-dark-blue);
  --lcars-system: var(--primary-gray);
  --lcars-hover-brighten: 1.12;
  --lcars-admin-drawer: 240px;
}
html, body {
  background: #000 !important;
  color: var(--light-gray) !important;
  font-family: var(--lcars-font) !important;
}
/* ========== FRAME ========== */
/* Solid left column full height */
.jf-lcars-frame {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--lcars-sidebar);
  z-index: 1099;
  pointer-events: none;
  background: var(--primary-gray);
}
.jf-lcars-left-frame,
.jf-lcars-left-rail {
  display: none !important;
}
/*
 * Concave L-elbow at 48px (header bottom)
 * Gray plate + page-colored quarter cut = visible concave corner
 */
.jf-lcars-elbow {
  position: fixed !important;
  display: block !important;
  left: 0 !important;
  top: 73px !important;
  width: calc(var(--lcars-sidebar) + var(--lcars-elbow-size)) !important;
  height: var(--lcars-elbow-size) !important;
  background: var(--primary-gray) !important;
  border-radius: 0 !important;
  z-index: 1090 !important;
  pointer-events: none !important;
}
.jf-lcars-elbow::after {
  content: none !important;
  display: none !important;
}
.jf-lcars-elbow-cut {
  position: fixed !important;
  display: block !important;
  left: var(--lcars-sidebar) !important;
  top: 73px !important;
  width: var(--lcars-elbow-size) !important;
  height: var(--lcars-elbow-size) !important;
  background: #101014 !important;
  border-radius: var(--lcars-elbow-size) 0 0 0 !important;
  z-index: 1091 !important;
  pointer-events: none !important;
}
.jf-lcars-top-runner {
  position: fixed;
  left: var(--lcars-sidebar);
  right: 0;
  top: 48px;
  height: var(--lcars-bar-h);
  z-index: 1092;
  pointer-events: none;
}
.jf-lcars-bar-row {
  display: flex;
  height: 100%;
  width: 100%;
}
.jf-lcars-seg {
  height: 100%;
  border-right: var(--lcars-bar-gap) solid #000;
  border-radius: 0 !important;
}
.jf-lcars-seg:last-child {
  border-right: none !important;
}
.jf-lcars-seg-a { flex: 0 0 clamp(48px, 8vw, 100px); background: var(--primary-gray); }
.jf-lcars-seg-b { flex: 0 0 clamp(80px, 12vw, 180px); background: var(--ghost-gray); }
.jf-lcars-seg-c { flex: 0 0 clamp(40px, 6vw, 90px); background: var(--medium-dark-gray); }
.jf-lcars-seg-d { flex: 1 1 auto; background: var(--light-gray); }
.jf-lcars-seg-e {
  flex: 0 0 clamp(40px, 5vw, 64px);
  background: var(--medium-dark-gray);
  border-radius: 0 !important;
}
body.jf-lcars-active::before,
body.jf-lcars-active::after {
  content: none !important;
  display: none !important;
}
/* ========== HEADER — fixed 48px row; tabs centered in same vertical band ========== */
.skinHeader,
.skinHeader-withBackground,
.skinHeader.semiTransparent,
.skinHeader-blurred,
.skinHeader.focuscontainer-x,
.skinHeader.headroom {
  display: block !important;
  position: fixed !important;
  top: 0 !important;
  left: var(--lcars-sidebar) !important;
  right: 0 !important;
  width: auto !important;
  margin: 0 !important;
  padding: 0 8px !important;
  height: 48px !important;
  min-height: 48px !important;
  max-height: 48px !important;
  background: #000 !important;
  background-color: #000 !important;
  background-image: none !important;
  border-bottom: none !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  z-index: 1102 !important;
  overflow: visible !important;
}
.skinHeader::before,
.skinHeader::after {
  content: none !important;
  display: none !important;
}
.headerTop {
  display: flex !important;
  align-items: center !important;
  background: transparent !important;
  height: 48px !important;
  min-height: 48px !important;
  max-height: 48px !important;
  /* let clicks reach centered tabs in the empty middle */
  pointer-events: none !important;
}
.headerLeft,
.headerRight {
  display: flex !important;
  align-items: center !important;
  gap: 2px !important;
  background: transparent !important;
  position: relative !important;
  z-index: 2 !important;
  height: 48px !important;
  bottom: 10px;
  pointer-events: auto !important;
}
.headerRight {
  margin-left: auto !important;
}
/*
 * Bordered tabs: centered on the icon row.
 * pointer-events restored; z-index above headerTop so clicks work.
 */
.headerTabs,
.sectionTabs {
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: auto !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  z-index: 5 !important;
  height: 28px !important;
  pointer-events: auto !important;
}
.headerTabs .emby-tabs,
.headerTabs .tabs-viewmenubar,
.headerTabs .emby-tabs-slider {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  white-space: nowrap !important;
  height: 28px !important;
  pointer-events: auto !important;
}
.headerTabs .emby-tab-button,
.headerTabs .emby-button {
  pointer-events: auto !important;
  cursor: pointer !important;
}
.skinHeader .headerButton,
.skinHeader .paper-icon-button-light {
  background: transparent !important;
  border: none !important;
  border-radius: 4px !important;
  box-shadow: none !important;
  color: var(--starlight) !important;
  opacity: 1 !important;
}
.skinHeader .material-icons {
  color: var(--starlight) !important;
  opacity: 1 !important;
}
.skinHeader .headerButton:hover,
.skinHeader .paper-icon-button-light:hover:not(:disabled) {
  background: rgba(157, 165, 186, 0.2) !important;
}
.skinHeader .pageTitle,
.skinHeader h3.pageTitle {
  background: transparent !important;
  color: var(--pale-orange-red) !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  max-width: 40vw !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  /* do not force display — let Jellyfin hide logo-only / empty titles */
}
.headerTabs.sectionTabs {
  /* background handled in single-row header rules */
}
/* ========== CONTENT ========== */
/* Offset for fixed header (48) + thin bar (16) — keep gap tight */
.backgroundContainer,
.mainAnimatedPages {
  margin-left: var(--lcars-sidebar) !important;
  padding-top: calc(48px + var(--lcars-bar-h) + 4px) !important;
}
.dashboardDocument .content-primary {
    padding-top: 5rem;
}




/* ========== Content well — outer line + 10px gap + LCARS bars ========== */
/*
 * Layers (outside → inside):
 *   1) thin light-gray outline
 *   2) 10px black gap
 *   3) LCARS rails (left 36px, right 72px = 2×, top/bottom 12px)
 *   4) 10px padding to content
 */
.jf-lcars-active.dashboardDocument .content-primary,
.dashboardDocument .content-primary,
.dashboardDocument .content-primary.MuiBox-root,
.content-primary.MuiBox-root {
  --lcars-well-left: 36px;
  --lcars-well-right: 72px;
  --lcars-well-tb: 12px;
  --lcars-well-gap: 10px;
  --lcars-well-inset: 10px;

  position: relative !important;
  box-sizing: border-box !important;
  background: #000 !important;

  /* Inner LCARS rails */
  border-style: solid !important;
  border-color: var(--primary-gray) !important;
  border-left-width: var(--lcars-well-left) !important;
  border-right-width: var(--lcars-well-right) !important;
  border-top-width: var(--lcars-well-tb) !important;
  border-bottom-width: var(--lcars-well-tb) !important;
  border-radius: 1.5rem !important;

  /* Content inset inside rails */
  padding: var(--lcars-well-inset) !important;

  /* Outer: 10px gap then 2px light-gray line */
  box-shadow:
    0 0 0 var(--lcars-well-gap) #000,
    0 0 0 calc(var(--lcars-well-gap) + 2px) var(--light-gray) !important;

  margin-top: 6rem !important;
  margin-right: 4% !important;
  margin-left: 0.75rem !important;
  margin-bottom: 2rem !important;
  overflow: visible !important;
}

/* Segmented right rail (behind action buttons) */
.dashboardDocument .content-primary::before {
  content: "" !important;
  position: absolute !important;
  top: var(--lcars-well-tb) !important;
  right: calc(-1 * var(--lcars-well-right)) !important;
  bottom: var(--lcars-well-tb) !important;
  width: var(--lcars-well-right) !important;
  box-sizing: border-box !important;
  pointer-events: none !important;
  z-index: 0 !important;
  border-radius: 0 0.85rem 0.85rem 0 !important;
  background: linear-gradient(
    to bottom,
    var(--orange-red) 0 10%,
    var(--primary-gray) 10% 14%,
    var(--ghost-gray) 14% 22%,
    var(--primary-gray) 22% 40%,
    var(--medium-dark-gray) 40% 48%,
    var(--primary-gray) 48% 72%,
    var(--light-orange-red) 72% 80%,
    var(--primary-gray) 80% 100%
  ) !important;
}

/* Left rail top orange accent */
.dashboardDocument .content-primary::after {
  content: "" !important;
  position: absolute !important;
  left: calc(-1 * var(--lcars-well-left)) !important;
  top: var(--lcars-well-tb) !important;
  width: var(--lcars-well-left) !important;
  height: 22% !important;
  background: var(--orange-red) !important;
  pointer-events: none !important;
  z-index: 1 !important;
}

/* ========== Dashboard plugin cards (MUI) — LCARS primary-nav style ========== */
/*
 * Reference: thelcars Picard #primary-nav buttons
 * black field, 3px orange-red border, uppercase labels
 */
.MuiCard-root,
.MuiPaper-root.MuiCard-root {
  background: #000 !important;
  background-color: #000 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  overflow: hidden !important;
  transition: border-color 0.15s ease, filter 0.15s ease !important;
}
a.MuiButtonBase-root.MuiCardActionArea-root {
  border: 3px solid var(--ghost-gray) !important;
}
.MuiCard-root:hover,
.MuiPaper-root.MuiCard-root:hover {
  border-color: var(--lcars-alert-soft) !important;
  filter: brightness(var(--lcars-hover-brighten));
  box-shadow: none !important;
}
.MuiCardActionArea-root {
  background: #000 !important;
}
.MuiCardMedia-root {
  background-color: #000 !important;
  filter: none !important;
}
.MuiCardContent-root {
  background: #000 !important;
  padding: 10px 12px !important;
  margin-top: 15px;
  border: 3px solid var(--orange-red) !important;
}
/* Title + version labels — Picard nav text */
.MuiCardContent-root .MuiTypography-root,
.MuiCardContent-root .MuiTypography-body1,
.MuiCardContent-root .MuiTypography-body2 {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  font-weight: 700 !important;
  color: var(--light-orange-red) !important;
  margin: 0 !important;
  text-align: right !important;
}
.MuiCardContent-root .MuiTypography-body1 {
  font-size: 1rem !important;
  color: var(--light-orange-red) !important;
  margin-bottom: 4px !important;
}
.MuiCardContent-root .MuiTypography-body2 {
  font-size: 0.8rem !important;
  color: var(--orange-red) !important;
  opacity: 0.95 !important;
}
.MuiCardContent-root .MuiStack-root {
  width: 100% !important;
}
/* Grid gutters stay clean on black field */
.MuiGrid-item .MuiCard-root {
 
}
/* Cards */
.card,
.cardBox {
  border-radius: 8px !important;
}
.cardContent,
.cardPadder {
  border-radius: 8px !important;
  overflow: hidden;
  background-color: #0e0e12;
}
.card:hover .cardContent,
.card-hoverable:hover .cardContent {
  box-shadow: 0 0 0 2px var(--blue), 0 8px 24px rgba(55, 166, 209, 0.2);
}
.cardText,
.cardTextCentered {
  color: var(--light-gray) !important;
  font-family: var(--lcars-font) !important;
}
/* Buttons */
.raised,
.emby-button.raised,
button.raised {
  background: var(--primary-gray) !important;
  color: #000 !important;
  border-radius: 0px !important;
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  font-weight: 700 !important;
}
.raised:hover,
.emby-button.raised:hover {
  filter: brightness(var(--lcars-hover-brighten));
}
button.button-submit,
.button-submit {
  background: var(--orange-red) !important;
  color: #000 !important;
}
button.button-submit:hover,
.button-submit:hover {
  background: var(--orange-red) !important;
  color: #000 !important;
  filter: brightness(var(--lcars-hover-brighten));
}
/* Drawer — black field; items are outlined keypad-style buttons */
.mainDrawer {
  background: #000 !important;
  border-right: none !important;
  padding: 12px 10px !important;
  box-shadow: none !important;
  left: -265px !important;
  top: 100px !important;
}
.mainDrawer.drawer-open {
  margin-left: 10px;
}
.mainDrawer::before,
.mainDrawer::after {
  content: none !important;
  display: none !important;
}
.tmla-mask {
 background-color: unset !important;
}
/*
 * Nav items — match Picard keypad / primary-nav buttons:
 * black fill, light-gray border, uppercase label
 */
.navMenuOption {
  border-radius: 2px !important;
  margin: 6px 4px !important;
  padding: 10px 12px !important;
  color: var(--ghost-gray) !important;
  background: #000 !important;
  border: 2px solid var(--light-gray) !important;
  box-sizing: border-box !important;
}
.navMenuOption:hover {
  background: #000 !important;
  border-color: var(--lcars-info) !important;
  color: var(--starlight) !important;
  filter: brightness(var(--lcars-hover-brighten));
}
.navMenuOption-selected {
  background: #000 !important;
  border-color: var(--orange-red) !important;
  color: var(--light-orange-red) !important;
  font-weight: 700;
}
.navMenuOptionText {
  text-transform: uppercase !important;
  font-weight: 700 !important;
  font-family: var(--lcars-font) !important;
  letter-spacing: 0.06em !important;
  color: inherit !important;
}
.navMenuOption .material-icons,
.navMenuOptionIcon {
  color: inherit !important;
}
/* Header tabs — compact outlined pills (must not overflow header into bars) */
.emby-tab-button,
.headerTabs .emby-button {
  background: #000 !important;
  border: 2px solid var(--medium-dark-gray) !important;
  border-radius: 2px !important;
  color: var(--light-gray) !important;
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  font-weight: 700 !important;
  font-size: 0.75rem !important;
  margin: 0 4px !important;
  padding: 4px 12px !important;
  min-height: 0 !important;
  height: 28px !important;
  max-height: 28px !important;
  line-height: 1 !important;
  display: inline-flex !important;
  align-items: center !important;
  box-sizing: border-box !important;
}
.emby-tab-button:hover,
.headerTabs .emby-button:hover {
  border-color: var(--lcars-info) !important;
  color: var(--starlight) !important;
  filter: brightness(var(--lcars-hover-brighten));
}
.emby-tab-button-active,
.headerTabs .emby-tab-button-active {
  border-color: var(--orange-red) !important;
  color: var(--pale-orange-red) !important;
}
/* Drawer nav — larger + gap between items */
.navMenuOption {
  margin: 6px 4px 10px 4px !important;
  padding: 12px 14px !important;
  min-height: 44px !important;
}
/* Detail / forms */
@media (min-width: 50em) {
    .readOnlyContent, form {
        max-width: unset;
    }
}

.detailSectionHeader,
.itemName,
.itemFocusable {
  font-family: var(--lcars-font) !important;
}
input,
select,
textarea,
.emby-input,
.emby-select {
  background: #121218 !important;
  border: 1px solid var(--medium-dark-gray) !important;
  color: var(--starlight) !important;
  border-radius: 4px !important;
}
/* Scrollbar */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: #000;
}
::-webkit-scrollbar-thumb {
  background: var(--primary-gray);
  border-radius: 0;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--light-gray);
}
.toast {
  background: var(--dark-gray) !important;
  border-left: 4px solid var(--lcars-alert) !important;
  color: var(--starlight) !important;
  font-family: var(--lcars-font) !important;
}
.toast-info,
.toast.info {
  border-left-color: var(--lcars-info) !important;
}
.toast-success,
.toast.success,
.toast-confirm {
  border-left-color: var(--lcars-info-bright) !important;
}
.toast-error,
.toast.error,
.toast-alert {
  border-left-color: var(--lcars-alert) !important;
}
/* Played / favorite / progress indicators */
.playedIndicator,
.indicator.playedIndicator,
.countIndicator,
.syncIndicator {
  background: var(--lcars-confirm) !important;
  color: var(--starlight) !important;
  border-radius: 0 !important;
}
.favoriteIcon,
.ratingbutton-icon-withrating,
.cardOverlayButtonIcon.favorite {
  color: var(--lcars-alert-soft) !important;
}
.playstatebutton-icon-played,
.cardOverlayButtonIcon.check.playstatebutton-icon-played {
  color: var(--lcars-info-bright) !important;
}

/* ========== Detail / content left accents (lcars-css pattern, Picard colors) ========== */
.detailSection,
.detailPageContentContainer .detailSection,
.itemDetailsGroup,
.overview-text,
.detailSectionContent p,
.detailRibbon + .detailSection,
.padded-left.padded-right.padded-bottom p,
.listItemBody,
.secondaryText {
  border-left: 2px solid var(--primary-gray) !important;
  padding-left: 10px !important;
  box-sizing: border-box !important;
}
.detailSectionHeader,
.sectionTitleTextButton + .sectionTitleContainer {
  border-left: 3px solid var(--orange-red) !important;
  padding-left: 10px !important;
}
.detailSection .detailSectionHeader {
  border-left-color: var(--lcars-info) !important;
}
/* Genres / tags / metadata chips stay clean */
.itemMiscInfo,
.mediaInfoTags {
  border-left: none !important;
  padding-left: 0 !important;
}

/* ========== DASHBOARD — ion-inspired multi-bar panels (Picard colors) ========== */
/*
 * Scoped carefully so the admin left nav (permanent drawer) is not broken.
 * Content panels only: Server / Activity / Paths / Devices cards.
 */
.dashboardDocument,
.dashboardDocument .content-primary {
  color: var(--light-gray) !important;
}


/* ========== DASHBOARD ELBOW (injected element, thelcars 80px) ========== */
/*
 * Border L-curve. Overlaps drawer edge so gray is continuous (no black gap).
 * Arm thickness 20px; radius 80px.
 */
#jf-lcars-dash-elbow,
#jf-lcars-dash-elbow-cut,
#jf-lcars-dash-bridge {
  display: none !important;
  pointer-events: none !important;
  box-sizing: border-box !important;
}

.dashboardDocument #jf-lcars-dash-elbow {
  display: block !important;
  position: fixed !important;
  /* overlap drawer by arm thickness so column gray merges into the curve */
  left: calc(var(--lcars-admin-drawer) - 20px) !important;
  top: 53px !important;
  width: 100px !important;  /* 20px overlap + 80px curve */
  height: 100px !important;
  background: transparent !important;
  border-style: solid !important;
  border-color: var(--primary-gray) !important;
  border-width: 20px 0 0 20px !important;
  border-top-left-radius: 80px !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  z-index: 1094 !important;
}

/* Top arm continues into runner — no gap */
.dashboardDocument #jf-lcars-dash-bridge {
    display: block !important;
    position: fixed !important;
    left: calc(var(--lcars-admin-drawer) - 20px) !important;
    top: 60px !important;
    width: 40px !important;
    height: 20px !important;
    background: var(--primary-gray) !important;
    border-radius: 0 !important;
    z-index: 1095 !important;
}

/* Hide the elbow if the dashboard is at a mobile device width */

@media screen and (width <= 900px) {
  .dashboardDocument #jf-lcars-dash-elbow, .dashboardDocument #jf-lcars-dash-bridge {
    display: none !important;
  }

  .dashboardDocument #jf-lcars-top-runner {
    left: 0px !important;
  }

}

.dashboardDocument #jf-lcars-dash-elbow-cut {
  display: none !important;
}

/* Runner starts where bridge ends */
.dashboardDocument .jf-lcars-top-runner {
  left: calc(var(--lcars-admin-drawer) - 20px + 100px - 20px + 40px) !important;
  top: 48px !important;
  height: 20px !important;
}

.dashboardDocument .jf-lcars-top-runner .jf-lcars-seg {
  /* keep bar height in sync with arm */
}

/* ----- Admin left nav — clean continuous column + flush runner ----- */
/*
 * Previous floating elbow/cut pseudo-elements broke the layout.
 * Approach: drawer is the gray column; top-runner abuts it flush;
 * first runner segment is primary-gray so column → bars read continuous.
 * Optional large curve deferred until junction is stable.
 */
html.dashboardDocument,
body.dashboardDocument,
.dashboardDocument {
  --lcars-admin-drawer: 240px;
}

/* Hide library-mode frame chrome on dashboard */
.dashboardDocument .jf-lcars-frame,
.dashboardDocument .jf-lcars-elbow,
.dashboardDocument .jf-lcars-elbow-cut {
  display: none !important;
}

/* Header + runner flush to drawer right edge */
.dashboardDocument .skinHeader,
.dashboardDocument .skinHeader-withBackground,
.dashboardDocument .skinHeader.focuscontainer-x {
  left: var(--lcars-admin-drawer) !important;
  background: #000 !important;
}

.dashboardDocument .jf-lcars-top-runner {
  left: var(--lcars-admin-drawer) !important;
  top: 48px !important;
  right: 0 !important;
  height: var(--lcars-bar-h) !important;
  z-index: 1093 !important;
}

/* First segment matches column gray → continuous color into the bars */
.dashboardDocument .jf-lcars-top-runner .jf-lcars-seg-a {
  flex: 0 0 clamp(64px, 10vw, 120px) !important;
  background: var(--primary-gray) !important;
  border-radius: 0 !important;
}

.dashboardDocument .backgroundContainer,
.dashboardDocument .mainAnimatedPages {
  margin-left: 0 !important;
}

/* ========== Drawer = solid Picard gray column ========== */
.dashboardDocument .MuiDrawer-root.MuiDrawer-docked,
.dashboardDocument .MuiDrawer-docked {
  width: var(--lcars-admin-drawer) !important;
  background: transparent !important;
  border: none !important;
  overflow: hidden !important;
}

.dashboardDocument .MuiDrawer-paper,
.dashboardDocument .MuiDrawer-paperAnchorLeft,
.dashboardDocument .MuiDrawer-paperAnchorDockedLeft {
  background: var(--primary-gray) !important;
  background-image: none !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  color: #000 !important;
  top: 0 !important;
  left: 0 !important;
  height: 100% !important;
  width: var(--lcars-admin-drawer) !important;
  max-width: var(--lcars-admin-drawer) !important;
  padding: 0 0 40px 0 !important;
  box-sizing: border-box !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  z-index: 1100 !important;
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
  clip-path: none !important;
  transform: none !important;
  /* no black gutter — elbow overlaps for continuous gray */
  border-right: none !important;
}

.dashboardDocument .MuiDrawer-paper::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
  display: none !important;
}

/* NO ::after elbow plate — that caused the floating gray blob */
.dashboardDocument .MuiDrawer-paper::after {
  content: none !important;
  display: none !important;
}

/* Thin light rail on far left only */
.dashboardDocument .MuiDrawer-paper::before {
  content: "" !important;
  position: absolute !important;
  left: 0 !important;
  top: 0 !important;
  bottom: 0 !important;
  width: 6px !important;
  background: var(--ghost-gray) !important;
  pointer-events: none !important;
  z-index: 2 !important;
}

/* NO black cut pseudo on runner */
.dashboardDocument .jf-lcars-top-runner::before,
.dashboardDocument .jf-lcars-top-runner::after {
  content: none !important;
  display: none !important;
}

/* Server identity */
.dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child {
  background: transparent !important;
  margin: 10px 10px 8px 14px !important;
  padding: 0 !important;
  border: none !important;
  position: relative !important;
  z-index: 3 !important;
}

.dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child .MuiListItem-root {
  background: #000 !important;
  border: none !important;
  border-radius: 0 !important;
  margin: 0 !important;
  padding: 10px 12px !important;
  min-height: 52px !important;
  box-shadow: none !important;
  clip-path: none !important;
}

.dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child .MuiTypography-h6,
.dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child .MuiListItemText-primary {
  color: var(--starlight) !important;
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
  font-weight: 700 !important;
  font-size: 0.85rem !important;
}

.dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child .MuiListItemText-secondary {
  color: var(--light-gray) !important;
  font-size: 0.75rem !important;
}

.dashboardDocument .MuiDrawer-paper .MuiList-root {
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  margin: 0 10px 0 14px !important;
  padding: 0 !important;
  position: relative !important;
  z-index: 3 !important;
  overflow: visible !important;
}

.dashboardDocument .MuiDrawer-paper .MuiList-root::before,
.dashboardDocument .MuiDrawer-paper .MuiList-root::after {
  content: none !important;
  display: none !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItem-root {
  padding: 0 !important;
  margin: 0 0 5px 0 !important;
  background: transparent !important;
  border: none !important;
  display: block !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root {
  background: #000 !important;
  color: var(--ghost-gray) !important;
  border: none !important;
  border-radius: 0 !important;
  margin: 0 !important;
  padding: 9px 12px !important;
  min-height: 40px !important;
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  font-weight: 700 !important;
  box-shadow: inset 0 0 0 2px var(--medium-dark-gray) !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root:hover {
  color: var(--starlight) !important;
  box-shadow: inset 0 0 0 2px var(--blue) !important;
  background: #000 !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root.Mui-selected {
  color: var(--light-orange-red) !important;
  box-shadow: inset 0 0 0 2px var(--orange-red) !important;
  background: #000 !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItemIcon-root {
  color: inherit !important;
  min-width: 34px !important;
}

.dashboardDocument .MuiDrawer-paper .MuiSvgIcon-root {
  color: inherit !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItemText-primary,
.dashboardDocument .MuiDrawer-paper .MuiListItemText-root .MuiTypography-body1 {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  font-weight: 700 !important;
  color: inherit !important;
  font-size: 0.8rem !important;
}

.dashboardDocument .MuiDrawer-paper .MuiDivider-root {
  display: none !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListSubheader-root,
.dashboardDocument .MuiDrawer-paper .MuiListSubheader-sticky {
  background: transparent !important;
  color: #000 !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.12em !important;
  margin: 14px 0 6px 0 !important;
  padding: 2px 4px !important;
  font-size: 0.7rem !important;
  position: static !important;
}

/* Content well — no pseudo curves */
.dashboardDocument main,
.dashboardDocument .content-primary {
  position: relative !important;
  background: #000 !important;
  border-radius: 0 !important;
  overflow: visible !important;
}

.dashboardDocument main::before,
.dashboardDocument main::after {
  content: none !important;
  display: none !important;
}

.dashboardDocument main > .MuiBox-root {
  border-radius: 0 !important;
  box-shadow: none !important;
  border: none !important;
  background: transparent !important;
}

.dashboardDocument .MuiAppBar-root {
  background: #000 !important;
  box-shadow: none !important;
}

.dashboardDocument .MuiToolbar-root {
  min-height: 48px !important;
  background: #000 !important;
}

.dashboardDocument .MuiToolbar-root .MuiIconButton-root {
  color: var(--starlight) !important;
}

.dashboardDocument .MuiToolbar-root .MuiTypography-root {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  color: var(--pale-orange-red) !important;
  font-weight: 700 !important;
}

/* ----- Content panels only (main column, not drawer) ----- */
.dashboardDocument main .MuiPaper-root:not(.MuiCard-root),
.dashboardDocument .content-primary .MuiPaper-root:not(.MuiCard-root) {
  background: #000 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  border: none !important;
  position: relative !important;
  overflow: visible !important;
}

/* Segmented top bar on content papers / path lists only */
.dashboardDocument main .MuiPaper-root:not(.MuiCard-root)::before,
.dashboardDocument main .MuiList-root::before,
.dashboardDocument .content-primary .MuiPaper-root:not(.MuiCard-root)::before {
  content: "" !important;
  display: block !important;
  height: 12px !important;
  margin: 0 0 10px 0 !important;
  background: linear-gradient(
    90deg,
    var(--primary-gray) 0 12%,
    #000 12% 13.5%,
    var(--orange-red) 13.5% 28%,
    #000 28% 29.5%,
    var(--light-gray) 29.5% 48%,
    #000 48% 49.5%,
    var(--medium-dark-gray) 49.5% 62%,
    #000 62% 63.5%,
    var(--ghost-gray) 63.5% 82%,
    #000 82% 83.5%,
    var(--orange-red) 83.5% 92%,
    #000 92% 93.5%,
    var(--primary-gray) 93.5% 100%
  ) !important;
}

/* Content lists (Activity, Paths) — left rail + bottom curve, NOT drawer lists */
.dashboardDocument main .MuiList-root,
.dashboardDocument .content-primary .MuiList-root {
  position: relative !important;
  margin: 0 0 1rem 0 !important;
  padding: 10px 10px 10px 18px !important;
  background: #000 !important;
  border-left: 12px solid var(--primary-gray) !important;
  border-bottom: 8px solid var(--primary-gray) !important;
  border-bottom-left-radius: 24px !important;
  box-sizing: border-box !important;
}

.dashboardDocument main .MuiList-root::after {
  content: "" !important;
  position: absolute !important;
  left: 12px !important;
  bottom: 0 !important;
  width: 24px !important;
  height: 24px !important;
  background: #000 !important;
  border-radius: 0 0 0 24px !important;
  pointer-events: none !important;
}

.dashboardDocument main .MuiListItem-root {
  background: transparent !important;
  border-radius: 0 !important;
  margin: 4px 0 !important;
  padding: 8px 10px !important;
  border-left: 3px solid var(--medium-dark-gray) !important;
}

.dashboardDocument main .MuiListItem-root:hover {
  border-left-color: var(--orange-red) !important;
}

.dashboardDocument main .MuiListItemIcon-root .MuiSvgIcon-root {
  color: var(--ghost-gray) !important;
}

.dashboardDocument main .MuiListItemText-primary,
.dashboardDocument main .MuiListItemText-root .MuiTypography-root {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  font-weight: 700 !important;
  color: var(--starlight) !important;
}

.dashboardDocument main .MuiListItemText-secondary,
.dashboardDocument main .MuiListItemText-secondary .MuiTypography-root {
  font-family: var(--lcars-font) !important;
  color: var(--light-gray) !important;
  text-transform: none !important;
  font-weight: 400 !important;
}

/* Paths progress */
.dashboardDocument main .MuiLinearProgress-root {
  height: 8px !important;
  border-radius: 0 !important;
  background-color: var(--medium-dark-gray) !important;
  margin: 6px 0 !important;
}

.dashboardDocument main .MuiLinearProgress-bar,
.dashboardDocument main .MuiLinearProgress-barColorSuccess,
.dashboardDocument main .MuiLinearProgress-barColorPrimary {
  background-color: var(--orange-red) !important;
  border-radius: 0 !important;
}

/* Server info table / dl rows */
.dashboardDocument main .MuiTable-root,
.dashboardDocument main .MuiTableCell-root {
  border-color: var(--medium-dark-gray) !important;
  font-family: var(--lcars-font) !important;
  color: var(--light-gray) !important;
}

.dashboardDocument main .MuiTableCell-head {
  color: var(--pale-orange-red) !important;
  text-transform: uppercase !important;
  font-weight: 700 !important;
}

/* Action buttons */
.dashboardDocument main .MuiButton-root {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  font-weight: 700 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.dashboardDocument main .MuiButton-contained,
.dashboardDocument main .MuiButton-containedPrimary {
  background: var(--orange-red) !important;
  color: #000 !important;
}

.dashboardDocument main .MuiButton-contained:hover {
  background: var(--orange-red) !important;
  filter: brightness(var(--lcars-hover-brighten));
}

.dashboardDocument main .MuiButton-outlined {
  border: 2px solid var(--light-gray) !important;
  color: var(--starlight) !important;
  background: #000 !important;
}

/* Stat tiles (Movies 308, Series, etc.) */
.dashboardDocument main .MuiCard-root,
.dashboardDocument main [class*="stat"] {
  background: #000 !important;
  border: 2px solid var(--medium-dark-gray) !important;
  border-radius: 0 !important;
}

.dashboardDocument main .MuiTypography-h4,
.dashboardDocument main .MuiTypography-h5 {
  font-family: var(--lcars-font) !important;
  color: var(--orange-red) !important;
  font-weight: 700 !important;
}

/* Section labels SERVER > ACTIVITY > */
.dashboardDocument main .MuiTypography-overline,
.dashboardDocument main a[class*="section"] {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  color: var(--pale-orange-red) !important;
  font-weight: 700 !important;
}

/* Device cards */
.dashboardDocument main .MuiCardContent-root {
  border-color: var(--medium-dark-gray) !important;
}

/* Activity icons — map MUI success blue to Picard info blue */
.dashboardDocument main .MuiAvatar-root,
.dashboardDocument main [class*="Avatar"] {
  background: var(--blue) !important;
  color: #000 !important;
}

/* ========== VIDEO PLAYBACK — full-bleed, hide LCARS chrome ========== */
/*
 * #videoOsdPage / [data-type="video-osd"] is the fullscreen player shell.
 * Hide frame, elbow, runner; zero content offsets so video is edge-to-edge.
 */
body:has(#videoOsdPage:not(.hide)) .jf-lcars-frame,
body:has(#videoOsdPage:not(.hide)) .jf-lcars-elbow,
body:has(#videoOsdPage:not(.hide)) .jf-lcars-elbow-cut,
body:has(#videoOsdPage:not(.hide)) .jf-lcars-top-runner,
body:has([data-type="video-osd"]:not(.hide)) .jf-lcars-frame,
body:has([data-type="video-osd"]:not(.hide)) .jf-lcars-elbow,
body:has([data-type="video-osd"]:not(.hide)) .jf-lcars-elbow-cut,
body:has([data-type="video-osd"]:not(.hide)) .jf-lcars-top-runner,
html.jf-lcars-video .jf-lcars-frame,
html.jf-lcars-video .jf-lcars-elbow,
html.jf-lcars-video .jf-lcars-elbow-cut,
html.jf-lcars-video .jf-lcars-top-runner {
  display: none !important;
  visibility: hidden !important;
}
body:has(#videoOsdPage:not(.hide)) .skinHeader,
body:has([data-type="video-osd"]:not(.hide)) .skinHeader,
html.jf-lcars-video .skinHeader {
  left: 0 !important;
  margin-left: 0 !important;
  display: none !important; /* OSD has its own controls */
}
/* Restore drawer left in video mode (override theme left: -265px) */
body:has(#videoOsdPage:not(.hide)) .mainDrawer,
body:has([data-type="video-osd"]:not(.hide)) .mainDrawer,
html.jf-lcars-video .mainDrawer,
body.jf-lcars-video .mainDrawer {
  left: unset !important;
  top: unset !important;
}
body:has(#videoOsdPage:not(.hide)) .backgroundContainer,
body:has(#videoOsdPage:not(.hide)) .mainAnimatedPages,
body:has([data-type="video-osd"]:not(.hide)) .backgroundContainer,
body:has([data-type="video-osd"]:not(.hide)) .mainAnimatedPages,
html.jf-lcars-video .backgroundContainer,
html.jf-lcars-video .mainAnimatedPages {
  margin-left: 0 !important;
  padding-top: 0 !important;
  padding-left: 0 !important;
}
#videoOsdPage,
[data-type="video-osd"] {
  margin-left: 0 !important;
  padding: 0 !important;
  left: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
}
/* ========== OSD CONTROLS — LCARS bar aesthetic ========== */
.videoOsdBottom {
  background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 70%, transparent 100%) !important;
  font-family: var(--lcars-font) !important;
}
.osdTitle,
.osdMainTextContainer h3 {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  color: var(--pale-orange-red) !important;
  font-weight: 700 !important;
}
.osdPositionText,
.osdDurationText,
.osdTimeText,
.endsAtText {
  font-family: var(--lcars-font) !important;
  color: var(--ghost-gray) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
  font-size: 0.85rem !important;
}
/*
 * Progress bar ≈ LCARS horizontal bar (rounded capsule, warm orange)
 * Reference: thelcars.com solid bar with rounded ends
 */
.osdPositionSlider.mdl-slider,
.videoOsdBottom .mdl-slider {
  height: 14px !important;
}
.videoOsdBottom .mdl-slider-background-flex,
.videoOsdBottom .mdl-slider-background-flex-inner {
  height: 10px !important;
  border-radius: 999px !important;
  overflow: hidden !important;
}
.videoOsdBottom .mdl-slider-background-upper {
  background: var(--medium-dark-gray) !important;
  border-radius: 999px !important;
}
.videoOsdBottom .mdl-slider-background-lower {
  background: var(--pale-orange-red) !important;
  border-radius: 999px !important;
}
/* Thumb */
.videoOsdBottom .mdl-slider::-webkit-slider-thumb {
  width: 18px !important;
  height: 18px !important;
  background: var(--orange-red) !important;
  border: 2px solid var(--starlight) !important;
  border-radius: 50% !important;
  box-shadow: none !important;
}
.videoOsdBottom .mdl-slider::-moz-range-thumb {
  width: 18px !important;
  height: 18px !important;
  background: var(--orange-red) !important;
  border: 2px solid var(--starlight) !important;
  border-radius: 50% !important;
}
/* Chapter markers on the bar */
.videoOsdBottom .sliderMarker {
  background: var(--ghost-gray) !important;
  width: 2px !important;
}
.videoOsdBottom .sliderMarker.watched {
  background: var(--orange-red) !important;
}
/* Volume slider — thinner LCARS rail */
.osdVolumeSliderContainer .mdl-slider-background-lower {
  background: var(--blue) !important;
  border-radius: 999px !important;
}
.osdVolumeSliderContainer .mdl-slider-background-upper {
  background: var(--medium-dark-gray) !important;
  border-radius: 999px !important;
}
/* OSD icon buttons */
.videoOsdBottom .paper-icon-button-light,
.videoOsdBottom .emby-button {
  color: var(--starlight) !important;
  background: transparent !important;
  border-radius: 2px !important;
}
.videoOsdBottom .paper-icon-button-light:hover,
.videoOsdBottom .emby-button:hover {
  background: rgba(157, 165, 186, 0.2) !important;
  color: var(--pale-orange-red) !important;
}
.videoOsdBottom .material-icons,
.videoOsdBottom .xlargePaperIconButton {
  color: inherit !important;
}
/* Chapter thumb bubble */
.chapterThumbContainer {
  border: 2px solid var(--orange-red) !important;
  border-radius: 0 !important;
  background: #000 !important;
}
.chapterThumbText {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  color: var(--light-orange-red) !important;
}
/* ========== LIBRARY / HOME CARDS — LCARS panel tiles ========== */
/*
 * [14px bar][5px gap][ image column ]
 *                 [ year + progress under image ]
 * Bar on cardBox so it is never clipped; meta row matches image width.
 */
.card.overflowBackdropCard .cardBox,
.card[data-type="CollectionFolder"] .cardBox,
.card[data-type="UserView"] .cardBox,
.card[data-type="Folder"] .cardBox,
.card[data-collectiontype] .cardBox {
  background: transparent !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  border: none !important;
  position: relative !important;
  overflow: visible !important;
  padding-bottom: 0 !important;
}
.card.overflowBackdropCard .cardBox-bottompadded,
.card[data-type="CollectionFolder"] .cardBox-bottompadded,
.card[data-type="UserView"] .cardBox-bottompadded {
  padding-bottom: 0 !important;
}
/* Left vertical bar — full height of card content */
.card.overflowBackdropCard .cardBox::before,
.card[data-type="CollectionFolder"] .cardBox::before,
.card[data-type="UserView"] .cardBox::before,
.card[data-type="Folder"] .cardBox::before,
.card[data-collectiontype] .cardBox::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  left: 0 !important;
  top: 0 !important;
  bottom: 0 !important;
  width: 14px !important;
  background: var(--starlight) !important;
  z-index: 5 !important;
  pointer-events: none !important;
}
/* Image column: 14px bar + 5px gap */
.card.overflowBackdropCard .cardScalable,
.card[data-type="CollectionFolder"] .cardScalable,
.card[data-type="UserView"] .cardScalable,
.card[data-type="Folder"] .cardScalable,
.card[data-collectiontype] .cardScalable {
  position: relative !important;
  border-radius: 0 !important;
  margin-left: 19px !important;
  width: calc(100% - 22px) !important;
  overflow: hidden !important;
  background: var(--dark-gray) !important;
}
/* No bar on scalable (cardBox owns it) */
.card.overflowBackdropCard .cardScalable::before,
.card[data-type="CollectionFolder"] .cardScalable::before,
.card[data-type="UserView"] .cardScalable::before,
.card[data-type="Folder"] .cardScalable::before,
.card[data-collectiontype] .cardScalable::before {
  content: none !important;
  display: none !important;
}
.card.overflowBackdropCard .cardImageContainer,
.card[data-type="CollectionFolder"] .cardImageContainer,
.card[data-type="UserView"] .cardImageContainer,
.card[data-collectiontype] .cardImageContainer {
  border-radius: 0 !important;
  filter: none !important;
}
.card.overflowBackdropCard .cardPadder,
.card[data-type="CollectionFolder"] .cardPadder {
  border-radius: 0 !important;
}
/* Hide title under tiles */
.card.overflowBackdropCard .cardText-first,
.card[data-type="CollectionFolder"] .cardText-first,
.card[data-type="UserView"] .cardText-first,
.card[data-collectiontype] .cardText-first,
.card.overflowBackdropCard .cardTextCentered.cardText-first,
.card .cardText-first .textActionButton {
  display: none !important;
}
/* Year — under image column only */
.card.overflowBackdropCard .cardText-secondary,
.card[data-type="CollectionFolder"] .cardText-secondary,
.card[data-type="UserView"] .cardText-secondary,
.card[data-collectiontype] .cardText-secondary,
.card .cardText-secondary {
  display: block !important;
  box-sizing: border-box !important;
  margin: 0 0 0 22px !important;
  padding: 4px 8px !important;
  width: calc(100% - 22px) !important;
  max-width: calc(100% - 22px) !important;
  background: var(--dark-gray) !important;
  color: var(--light-gray) !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  font-size: 0.8rem !important;
  text-align: left !important;
}
/*
 * Progress bar — simple track under/on the poster.
 * Prefer overlay-at-bottom-of-image (inside cardScalable) full width of image.
 */
.cardScalable .innerCardFooter,
.cardScalable .cardFooter,
.cardScalable .cardProgressBarContainer {
  position: absolute !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  background: transparent !important;
  z-index: 2 !important;
}
/* Sibling footers under the image column */
.cardBox > .innerCardFooter,
.cardBox > .cardFooter,
.card .cardProgressBarContainer:not(.cardScalable *) {
  box-sizing: border-box !important;
  margin: 0 0 0 22px !important;
  padding: 0 !important;
  width: calc(100% - 22px) !important;
  max-width: calc(100% - 22px) !important;
  left: auto !important;
  right: auto !important;
  background: var(--dark-gray) !important;
}
.card .itemProgressBar,
.cardProgressBar,
.card .primaryProgress,
.cardScalable .itemProgressBar,
.card .innerCardFooter .itemProgressBar {
  display: block !important;
  box-sizing: border-box !important;
  height: 5px !important;
  min-height: 5px !important;
  max-height: 5px !important;
  border-radius: 0 !important;
  background: rgba(82, 89, 110, 0.85) !important;
  overflow: hidden !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  left: 0 !important;
  position: relative !important;
}
.card .itemProgressBarForeground,
.card .primaryProgress > div,
.cardProgressBarForeground,
.card .innerCardFooter .itemProgressBarForeground,
.cardScalable .itemProgressBarForeground {
  display: block !important;
  background: var(--orange-red) !important;
  border-radius: 0 !important;
  height: 100% !important;
  max-height: 5px !important;
  margin: 0 !important;
  padding: 0 !important;
}
/* Year inside a footer row */
.card .innerCardFooter,
.card .cardFooter {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
.card .innerCardFooter .cardText,
.card .cardFooter .cardText,
.card .innerCardFooter .cardText-secondary {
  margin: 0 !important;
  width: auto !important;
  max-width: none !important;
  padding: 2px 6px !important;
  background: transparent !important;
}
/* ========== PORTRAIT / MOVIE CARDS — same layout, orange-red bar ========== */
.card.overflowPortraitCard .cardBox,
.card[data-type="Movie"] .cardBox,
.card[data-type="Episode"] .cardBox,
.card[data-type="Series"] .cardBox,
.card[data-type="Video"] .cardBox {
  background: transparent !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  border: none !important;
  position: relative !important;
  overflow: visible !important;
  padding-bottom: 0 !important;
}
.card.overflowPortraitCard .cardBox-bottompadded,
.card[data-type="Movie"] .cardBox-bottompadded {
  padding-bottom: 0 !important;
}
.card.overflowPortraitCard .cardScalable,
.card[data-type="Movie"] .cardScalable,
.card[data-type="Episode"] .cardScalable,
.card[data-type="Series"] .cardScalable,
.card[data-type="Video"] .cardScalable {
  position: relative !important;
  border-radius: 0 !important;
  margin-left: 22px !important;
  width: calc(100% - 22px) !important;
  overflow: hidden !important;
  background: var(--dark-gray) !important;
}
.card.overflowPortraitCard .cardScalable::before,
.card[data-type="Movie"] .cardScalable::before {
  content: none !important;
  display: none !important;
}
.card.overflowPortraitCard .cardImageContainer,
.card[data-type="Movie"] .cardImageContainer {
  border-radius: 0 !important;
  filter: none !important;
}
.card.overflowPortraitCard .cardPadder,
.card[data-type="Movie"] .cardPadder {
  border-radius: 0 !important;
}
/* Hide title; keep year */
.card.overflowPortraitCard .cardText-first,
.card[data-type="Movie"] .cardText-first,
.card[data-type="Episode"] .cardText-first,
.card[data-type="Series"] .cardText-first,
.card.overflowPortraitCard .cardTextCentered.cardText-first {
  display: none !important;
}
.card.overflowPortraitCard .cardText-secondary,
.card[data-type="Movie"] .cardText-secondary,
.card[data-type="Episode"] .cardText-secondary,
.card[data-type="Series"] .cardText-secondary {
  display: block !important;
  box-sizing: border-box !important;
  margin: 0 0 0 22px !important;
  padding: 4px 8px !important;
  width: calc(100% - 22px) !important;
  max-width: calc(100% - 22px) !important;
  background: var(--primary-gray) !important;
  color: var(--lcars-text-secondary) !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  font-size: 0.8rem !important;
  text-align: left !important;
}
.card.overflowPortraitCard .cardScalable .innerCardFooter,
.card[data-type="Movie"] .cardScalable .innerCardFooter,
.card.overflowPortraitCard .cardScalable .cardFooter {
  position: absolute !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  margin: 0 !important;
  width: 100% !important;
  background: transparent !important;
}
.card.overflowPortraitCard .itemProgressBar,
.card[data-type="Movie"] .itemProgressBar,
.card.overflowPortraitCard .cardProgressBar {
  display: block !important;
  height: 5px !important;
  border-radius: 0 !important;
  background: rgba(82, 89, 110, 0.85) !important;
  overflow: hidden !important;
  width: 100% !important;
  margin: 0 !important;
}
.card.overflowPortraitCard .itemProgressBarForeground,
.card[data-type="Movie"] .itemProgressBarForeground {
  background: #e7442a !important;
  height: 100% !important;
}
/* ========== Centered PLAY only ========== */
/* Portrait FAB play button (cardOverlayFab-primary) */
.card .cardOverlayFab-primary,
.card button.cardOverlayFab-primary {
  background: var(--orange-red) !important;
  color: #000 !important;
  border: none !important;
  border-radius: 0 !important;
  min-width: 4.5em !important;
  height: 2.25em !important;
  width: auto !important;
  padding: 0 1.1em !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  box-shadow: none !important;
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.card .cardOverlayFab-primary:hover {
  background: var(--orange-red) !important;
  color: #000 !important;
  filter: brightness(var(--lcars-hover-brighten));
}
.card .cardOverlayFab-primary .material-icons,
.card .cardOverlayFab-primary .cardOverlayButtonIcon {
  font-size: 0 !important;
  color: #000 !important;
}
.card .cardOverlayFab-primary .material-icons::after,
.card .cardOverlayFab-primary .cardOverlayButtonIcon::after {
  content: "PLAY" !important;
  font-size: 0.85rem !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  letter-spacing: 0.1em !important;
  color: #000 !important;
  text-transform: uppercase !important;
}
.card .cardOverlayContainer {
  background: rgba(0, 0, 0, 0.35) !important;
}
.card .cardOverlayContainer > .cardOverlayButton,
.card .cardOverlayContainer > button.cardOverlayButton.itemAction[data-action="link"],
.card .cardOverlayContainer > button.cardOverlayButton.itemAction[data-action="resume"],
.card .cardOverlayButton.cardOverlayButton-hover[data-action="link"],
.card .cardOverlayButton.cardOverlayButton-hover[data-action="resume"] {
  background: var(--orange-red) !important;
  color: #000 !important;
  border: none !important;
  border-radius: 0 !important;
  min-width: 4.5em !important;
  height: 2.25em !important;
  padding: 0 1.1em !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  box-shadow: none !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  margin: 0 !important;
}
.card .cardOverlayContainer > .cardOverlayButton:hover,
.card .cardOverlayButton.cardOverlayButton-hover[data-action="link"]:hover,
.card .cardOverlayButton.cardOverlayButton-hover[data-action="resume"]:hover {
  background: var(--orange-red) !important;
  color: #000 !important;
  filter: brightness(var(--lcars-hover-brighten));
}
.card .cardOverlayContainer > .cardOverlayButton .material-icons.play_arrow,
.card .cardOverlayContainer > .cardOverlayButton .material-icons.play,
.card .cardOverlayContainer > .cardOverlayButton .material-icons.resume,
.card .cardOverlayButton.cardOverlayButton-hover[data-action="link"] .material-icons.play_arrow,
.card .cardOverlayButton.cardOverlayButton-hover[data-action="resume"] .material-icons,
.card .cardOverlayButton[data-action="link"] .cardOverlayButtonIcon.play_arrow,
.card .cardOverlayButton[data-action="resume"] .cardOverlayButtonIcon {
  font-size: 0 !important;
  line-height: 1 !important;
  color: #000 !important;
}
.card .cardOverlayContainer > .cardOverlayButton .material-icons.play_arrow::after,
.card .cardOverlayContainer > .cardOverlayButton .material-icons.play::after,
.card .cardOverlayContainer > .cardOverlayButton .material-icons.resume::after,
.card .cardOverlayButton.cardOverlayButton-hover[data-action="link"] .material-icons.play_arrow::after,
.card .cardOverlayButton.cardOverlayButton-hover[data-action="resume"] .material-icons::after,
.card .cardOverlayButton[data-action="link"] .cardOverlayButtonIcon.play_arrow::after,
.card .cardOverlayButton[data-action="resume"] .cardOverlayButtonIcon::after {
  content: "PLAY" !important;
  font-size: 0.85rem !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  letter-spacing: 0.1em !important;
  color: #000 !important;
  text-transform: uppercase !important;
}
.card .cardOverlayButton-br {
  position: absolute !important;
  right: 4px !important;
  bottom: 4px !important;
  left: auto !important;
  top: auto !important;
  transform: none !important;
  background: transparent !important;
  display: flex !important;
  gap: 2px !important;
}
.card .cardOverlayButton-br .cardOverlayButton,
.card .cardOverlayButton-br .paper-icon-button-light {
  background: transparent !important;
  border-radius: 50% !important;
  min-width: 0 !important;
  height: auto !important;
  padding: 6px !important;
  position: static !important;
  left: auto !important;
  top: auto !important;
  transform: none !important;
  color: var(--starlight) !important;
}
.card .cardOverlayButton-br .material-icons,
.card .cardOverlayButton-br .cardOverlayButtonIcon {
  font-size: 1.35rem !important;
  color: var(--starlight) !important;
}
.card .cardOverlayButton-br .material-icons::after,
.card .cardOverlayButton-br .cardOverlayButtonIcon::after {
  content: none !important;
}

/* ========== USERS section + local user cards ========== */
.dashboardDocument .content-primary .verticalSection {
  margin: 0.5rem 0.25rem 1rem 0.25rem !important;
}
.dashboardDocument .content-primary .sectionTitleContainer .sectionTitle,
.dashboardDocument .content-primary h2.sectionTitle {
  color: var(--pale-orange-red) !important;
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  font-weight: 700 !important;
}
.dashboardDocument .content-primary #btnAddUser.fab,
.dashboardDocument .content-primary .sectionTitleButton.fab {
  background: var(--orange-red) !important;
  color: #000 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  width: 2.25rem !important;
  height: 2.25rem !important;
  min-width: 2.25rem !important;
  margin-left: 12px !important;
}
.dashboardDocument .content-primary #btnAddUser .material-icons {
  color: #000 !important;
}
.localUsers.itemsContainer {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 16px !important;
  padding: 0.25rem 0.5rem 1rem 0.25rem !important;
}
.localUsers .card.squareCard,
.localUsers .card.squareCard-scalable {
  width: 10.5em !important;
  max-width: 10.5em !important;
  margin: 0 !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
.localUsers .cardBox.visualCardBox {
  background: #000 !important;
  border: 2px solid var(--medium-dark-gray) !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  overflow: hidden !important;
  position: relative !important;
}
.localUsers .cardScalable.visualCardBox-cardScalable {
  background: var(--dark-gray) !important;
  border-radius: 0 !important;
}
.localUsers .cardImage,
.localUsers .defaultCardBackground,
.localUsers .defaultCardBackground2 {
  background: var(--dark-gray) !important;
  background-color: var(--dark-gray) !important;
  background-image: none !important;
  border-radius: 0 !important;
}
.localUsers .cardImageIcon.person {
  color: var(--ghost-gray) !important;
  font-size: 2.5rem !important;
}
.localUsers .cardFooter.visualCardBox-cardFooter {
  background: #000 !important;
  border-top: 2px solid var(--primary-gray) !important;
  padding: 8px 10px 10px 10px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
}
.localUsers .cardFooter .cardText {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  font-weight: 700 !important;
  color: var(--pale-orange-red) !important;
  font-size: 0.85rem !important;
  margin: 0 0 2px 0 !important;
  float: none !important;
  width: 100% !important;
}
.localUsers .cardFooter .cardText-secondary {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  color: var(--light-gray) !important;
  font-size: 0.65rem !important;
  margin: 0 !important;
  float: none !important;
  width: 100% !important;
}
.localUsers .card.jf-lcars-user-selected .cardBox.visualCardBox {
  border-color: var(--orange-red) !important;
}
.localUsers .btnUserMenu,
.localUsers button.btnUserMenu,
.localUsers .cardFooter .btnUserMenu {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
  float: none !important;
  opacity: 0 !important;
}
.localUsers .cardFooter > div[style*="float"],
.localUsers .cardFooter > div[style*="text-align"] {
  display: none !important;
  float: none !important;
}

/* ========== Permanent user action rail ========== */
#jf-lcars-user-rail {
  display: none;
  position: fixed;
  z-index: 12050;
  box-sizing: border-box;
  width: 72px;
  flex-direction: column;
  gap: 5px;
  margin: 0;
  padding: 0;
  pointer-events: auto;
  background: transparent;
  border: none;
}
#jf-lcars-user-rail.jf-lcars-user-rail-on {
  display: flex !important;
  visibility: visible !important;
  opacity: 1 !important;
  flex-direction: column !important;
  flex-wrap: nowrap !important;
  align-items: stretch !important;
  width: 72px !important;
  min-width: 72px !important;
  max-width: 72px !important;
}
#jf-lcars-user-rail .jf-lcars-rail-btn {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  box-sizing: border-box !important;
  width: 72px !important;
  min-height: 56px !important;
  margin: 0 !important;
  padding: 8px 4px !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  cursor: pointer !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  font-size: 0.62rem !important;
  letter-spacing: 0.04em !important;
  text-transform: uppercase !important;
  line-height: 1.15 !important;
  text-align: center !important;
}
#jf-lcars-user-rail .jf-lcars-rail-btn[data-action="open"] {
  background: var(--orange-red) !important;
  color: #000 !important;
}
#jf-lcars-user-rail .jf-lcars-rail-btn[data-action="access"] {
  background: var(--ghost-gray) !important;
  color: #000 !important;
}
#jf-lcars-user-rail .jf-lcars-rail-btn[data-action="parentalcontrol"] {
  background: var(--medium-dark-gray) !important;
  color: var(--starlight) !important;
}
#jf-lcars-user-rail .jf-lcars-rail-btn[data-action="delete"] {
  background: var(--light-orange-red) !important;
  color: #000 !important;
}
#jf-lcars-user-rail .jf-lcars-rail-btn .material-icons {
  font-size: 1.05rem !important;
  color: inherit !important;
}
#jf-lcars-user-rail .jf-lcars-rail-btn:hover {
  filter: brightness(var(--lcars-hover-brighten));
}


/* User card footer — never vertical text / ⋮ */
.localUsers .cardFooter.visualCardBox-cardFooter,
.localUsers .visualCardBox-cardFooter {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  float: none !important;
  writing-mode: horizontal-tb !important;
}
.localUsers .cardFooter .cardText,
.localUsers .cardFooter .cardText-secondary,
.localUsers .cardFooter .cardText span,
.localUsers .cardFooter .cardText-secondary span {
  display: block !important;
  float: none !important;
  writing-mode: horizontal-tb !important;
  text-orientation: mixed !important;
  white-space: normal !important;
  width: 100% !important;
  max-width: 100% !important;
  transform: none !important;
}
.localUsers .btnUserMenu,
.localUsers button.btnUserMenu,
.localUsers .cardFooter .btnUserMenu,
.localUsers .cardFooter button.paper-icon-button-light {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  width: 0 !important;
  height: 0 !important;
  opacity: 0 !important;
  float: none !important;
  pointer-events: none !important;
}
.localUsers .cardFooter > div[style],
.localUsers .cardFooter > div[style*="float"],
.localUsers .cardFooter > div[style*="text-align"] {
  display: none !important;
  float: none !important;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
}

@media (max-width: 600px) {
  :root {
    --lcars-sidebar: 40px;
    --lcars-elbow-size: 32px;
  }
}
`;
  function injectCss() {
    var el = document.getElementById(STYLE_ID);
    if (el) { el.textContent = THEME_CSS; return; }
    el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = THEME_CSS;
    (document.head || document.documentElement).appendChild(el);
  }
  
  
  var __jfRailTimer = null;
  var __jfRailPoll = null;

  function scheduleUserActionRail() {
    if (__jfRailTimer) return;
    __jfRailTimer = setTimeout(function () {
      __jfRailTimer = null;
      ensureUserActionRail();
    }, 100);
  }

  function ensureUserActionRail() {
    try {
      var hash = location.hash || "";
      var onUsers = hash.indexOf("dashboard/users") !== -1;
      var localUsers = document.querySelector(".localUsers");
      var well = document.querySelector(
        ".dashboardDocument .content-primary, .content-primary.MuiBox-root, .content-primary"
      );
      var rail = document.getElementById("jf-lcars-user-rail");

      if (!onUsers) {
        if (rail) {
          rail.classList.remove("jf-lcars-user-rail-on");
          rail.style.cssText = "display:none";
        }
        if (__jfRailPoll) { clearInterval(__jfRailPoll); __jfRailPoll = null; }
        return;
      }

      if (!localUsers || !well) {
        if (!__jfRailPoll) {
          var n = 0;
          __jfRailPoll = setInterval(function () {
            n++;
            scheduleUserActionRail();
            if (n >= 12 || document.querySelector(".localUsers")) {
              clearInterval(__jfRailPoll);
              __jfRailPoll = null;
            }
          }, 500);
        }
        return;
      }
      if (__jfRailPoll) { clearInterval(__jfRailPoll); __jfRailPoll = null; }

      if (!rail) {
        rail = document.createElement("div");
        rail.id = "jf-lcars-user-rail";
        rail.setAttribute("aria-label", "User actions");
        [
          { id: "open", label: "Edit user", icon: "mode_edit" },
          { id: "access", label: "Library access", icon: "lock" },
          { id: "parentalcontrol", label: "Parental control", icon: "person" },
          { id: "delete", label: "Delete", icon: "delete" }
        ].forEach(function (a) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "jf-lcars-rail-btn";
          btn.setAttribute("data-action", a.id);
          btn.innerHTML = '<span class="material-icons" aria-hidden="true">' + a.icon +
            '</span><span class="jf-lcars-rail-label">' + a.label + "</span>";
          btn.addEventListener("click", function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            triggerUserAction(a.id);
          });
          rail.appendChild(btn);
        });
        document.body.appendChild(rail);
      }

            var rect = well.getBoundingClientRect();
      var barW = 72; /* matches --lcars-well-right */
      var tb = 12;
      var top = Math.round(rect.top + tb + 6);
      /* center rail in the right border gutter */
      var rightGap = Math.max(0, Math.round(window.innerWidth - rect.right));
      if (top < 4) top = 4;

      rail.style.cssText = [
        "position:fixed",
        "top:" + top + "px",
        "right:" + rightGap + "px",
        "left:auto",
        "width:" + barW + "px",
        "min-width:" + barW + "px",
        "max-width:" + barW + "px",
        "display:flex",
        "flex-direction:column",
        "flex-wrap:nowrap",
        "align-items:stretch",
        "gap:5px",
        "visibility:visible",
        "opacity:1",
        "z-index:12050",
        "pointer-events:auto",
        "margin:0",
        "padding:0",
        "box-sizing:border-box",
        "background:transparent",
        "border:none"
      ].join(";") + ";";
      rail.classList.add("jf-lcars-user-rail-on");

      if (!localUsers.__jfLcarsSelectBound) {
        localUsers.__jfLcarsSelectBound = true;
        localUsers.addEventListener("click", function (e) {
          var card = e.target.closest(".card[data-userid]");
          if (!card) return;
          var prev = localUsers.querySelector(".card.jf-lcars-user-selected");
          if (prev && prev !== card) prev.classList.remove("jf-lcars-user-selected");
          card.classList.add("jf-lcars-user-selected");
        }, true);
        var first = localUsers.querySelector(".card[data-userid]");
        if (first) first.classList.add("jf-lcars-user-selected");
      }
    } catch (e) {
      console.warn("[JellyfinLCARS] user rail", e);
    }
  }

  function getSelectedUserCard() {
    return document.querySelector(".localUsers .card.jf-lcars-user-selected[data-userid]") ||
      document.querySelector(".localUsers .card[data-userid]");
  }

  function triggerUserAction(actionId) {
    var card = getSelectedUserCard();
    if (!card) return;
    var userId = card.getAttribute("data-userid");
    if (!userId) return;

    if (actionId === "open") {
      location.hash = "#/dashboard/users/profile?userId=" + encodeURIComponent(userId);
      return;
    }

    var menuBtn = card.querySelector(".btnUserMenu, button.btnUserMenu, .cardFooter button.paper-icon-button-light");
    if (!menuBtn) return;
    var prevDisplay = menuBtn.style.display;
    menuBtn.style.setProperty("display", "block", "important");
    menuBtn.style.setProperty("visibility", "hidden", "important");
    menuBtn.style.setProperty("pointer-events", "auto", "important");
    menuBtn.click();
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      var item = document.querySelector(
        '.dialog.actionSheet.opened .actionSheetMenuItem[data-id="' + actionId + '"],' +
        '.dialog.actionsheet-not-fullscreen.opened .actionSheetMenuItem[data-id="' + actionId + '"]'
      );
      if (item) {
        clearInterval(timer);
        var sheet = item.closest(".dialog");
        if (sheet) {
          sheet.style.setProperty("opacity", "0", "important");
          sheet.style.setProperty("pointer-events", "none", "important");
        }
        item.click();
        menuBtn.style.display = prevDisplay || "";
      } else if (tries > 15) {
        clearInterval(timer);
        menuBtn.style.display = prevDisplay || "";
      }
    }, 50);
  }


  function ensureDashElbow() {
    var isDash = !!(document.querySelector(".dashboardDocument") ||
      document.body.classList.contains("dashboardDocument") ||
      (location.hash && location.hash.indexOf("dashboard") !== -1));
    function ensure(id, className) {
      var el = document.getElementById(id);
      if (!isDash) {
        if (el) el.remove();
        return null;
      }
      if (!el) {
        el = document.createElement("div");
        el.id = id;
        if (className) el.className = className;
        el.setAttribute("aria-hidden", "true");
        document.body.appendChild(el);
      }
      return el;
    }
    ensure(DASH_ELBOW_ID, "jf-lcars-dash-elbow");
    ensure(DASH_BRIDGE_ID, "jf-lcars-dash-bridge");
    ensure(DASH_CUT_ID, "jf-lcars-dash-elbow-cut");
  }

  function measureHeader() {
    document.documentElement.style.setProperty("--lcars-header-height", "48px");
  }
  function measureAdminDrawer() {
    try {
      var paper = document.querySelector(".dashboardDocument .MuiDrawer-paper, .dashboardDocument .MuiDrawer-docked .MuiDrawer-paper");
      if (paper) {
        var w = Math.round(paper.getBoundingClientRect().width);
        if (w > 80 && w < 400) {
          document.documentElement.style.setProperty("--lcars-admin-drawer", w + "px");
        }
      }
    } catch (e) {}
  }
  function ensureFrame() {
    if (!document.body) return;
    if (!document.getElementById(FRAME_ID)) {
      var frame = document.createElement("div");
      frame.id = FRAME_ID;
      frame.className = "jf-lcars-frame";
      frame.setAttribute("aria-hidden", "true");
      document.body.appendChild(frame);
    }
    if (!document.getElementById(ELBOW_ID)) {
      var elbow = document.createElement("div");
      elbow.id = ELBOW_ID;
      elbow.className = "jf-lcars-elbow";
      elbow.setAttribute("aria-hidden", "true");
      document.body.appendChild(elbow);
    }
    if (!document.getElementById(CUT_ID)) {
      var cut = document.createElement("div");
      cut.id = CUT_ID;
      cut.className = "jf-lcars-elbow-cut";
      cut.setAttribute("aria-hidden", "true");
      document.body.appendChild(cut);
    }
    if (!document.getElementById(RUNNER_ID)) {
      var runner = document.createElement("div");
      runner.id = RUNNER_ID;
      runner.className = "jf-lcars-top-runner";
      var row = document.createElement("div");
      row.className = "jf-lcars-bar-row";
      ["a", "b", "c", "d", "e"].forEach(function (k) {
        var s = document.createElement("div");
        s.className = "jf-lcars-seg jf-lcars-seg-" + k;
        row.appendChild(s);
      });
      runner.appendChild(row);
      document.body.appendChild(runner);
    }
    measureHeader();
  }
  function syncVideoMode() {
    try {
      var osd = document.getElementById("videoOsdPage");
      var playing = false;
      if (osd) {
        playing = !osd.classList.contains("hide") && osd.offsetParent !== null;
      }
      if (!playing) {
        var alt = document.querySelector('[data-type="video-osd"]');
        if (alt && !alt.classList.contains("hide")) playing = true;
      }
      if (!playing) {
        playing = !!document.querySelector(".htmlvideoplayer, .videoPlayerContainer video, video.htmlvideoplayer");
      }
      document.documentElement.classList.toggle("jf-lcars-video", !!playing);
      if (document.body) document.body.classList.toggle("jf-lcars-video", !!playing);
    } catch (e) {}
  }
  function run() {
    try {
      injectCss();
      document.documentElement.classList.add("jf-lcars-active");
      if (document.body) document.body.classList.add("jf-lcars-active");
      ensureFrame();
      measureHeader();
      measureAdminDrawer();
      ensureDashElbow();
      scheduleUserActionRail();
      syncVideoMode();
    } catch (e) {
      console.warn("[JellyfinLCARS]", e);
    }
  }
  window.JellyfinLCARS = {
    version: "2.11.8-outer-ring",
    init: function () { run(); return this; },
    refresh: run,
    destroy: function () {
      var _rail = document.getElementById("jf-lcars-user-rail");
      if (_rail) _rail.remove();
      [STYLE_ID, FRAME_ID, RUNNER_ID, ELBOW_ID, CUT_ID, DASH_ELBOW_ID, DASH_CUT_ID, DASH_BRIDGE_ID].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.remove();
      });
    },
    __lcarsBooted: true
  };
  injectCss();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
  window.addEventListener("resize", function () { measureHeader(); measureAdminDrawer(); scheduleUserActionRail(); });
  setInterval(syncVideoMode, 500);
  document.addEventListener("viewshow", function () { setTimeout(syncVideoMode, 50); setTimeout(scheduleUserActionRail, 80); }, true);
  document.addEventListener("video-osd-show", function () { setTimeout(syncVideoMode, 30); }, true);
  var n = 0;
  var id = setInterval(function () {
    n++;
    run();
    if (n >= 16) clearInterval(id);
  }, 400);
  try {
    var _p = history.pushState;
    history.pushState = function () {
      var r = _p.apply(this, arguments);
      setTimeout(run, 40);
      return r;
    };
    var _r = history.replaceState;
    history.replaceState = function () {
      var r = _r.apply(this, arguments);
      setTimeout(run, 40);
      return r;
    };
    window.addEventListener("popstate", function () { setTimeout(run, 40); });
  } catch (e) {}
})();
