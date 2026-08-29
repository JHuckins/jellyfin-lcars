/**
 * Jellyfin LCARS — Picard v2.5.1
 * Concave elbow aligned with bars; tabs on same row as header icons
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
  --lcars-bar-h: 16px;
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
  top: 55px !important;
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
  top: 64px !important;
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
.libraryPage,
.homePage,
.itemDetailPage,
.page {
  padding-top: 0.25rem !important;
  margin-left: 30px;
}
/* Tighten padded view tops under the chrome */
.padded-top,
.libraryPage.padded-top,
.padded-bottom.padded-top {
  padding-top: 0.25rem !important;
}
.sectionTitle,
.sectionTitleTextButton,
h1, h2 {
  color: var(--pale-orange-red) !important;
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
}
.sectionTitleContainer {
  margin-top: 0.75rem !important;
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
  border-color: var(--light-orange-red) !important;
  filter: brightness(1.05);
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
  border-radius: 4px !important;
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  font-weight: 700 !important;
}
.raised:hover,
.emby-button.raised:hover {
  filter: brightness(1.15);
}
button.button-submit,
.button-submit {
  background: var(--orange-red) !important;
  color: #000 !important;
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
  border-color: var(--blue) !important;
  color: var(--starlight) !important;
  filter: brightness(1.1);
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
  border-color: var(--blue) !important;
  color: var(--starlight) !important;
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
  border-left: 4px solid var(--orange-red) !important;
  color: var(--starlight) !important;
  font-family: var(--lcars-font) !important;
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
  margin-left: 22px !important;
  width: calc(100% - 19px) !important;
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
  margin: 0 0 0 19px !important;
  padding: 4px 8px !important;
  width: calc(100% - 19px) !important;
  max-width: calc(100% - 19px) !important;
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
  margin: 0 0 0 19px !important;
  padding: 0 !important;
  width: calc(100% - 19px) !important;
  max-width: calc(100% - 19px) !important;
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

/* ========== Centered PLAY only ========== */
.card .cardOverlayContainer {
  background: rgba(0, 0, 0, 0.35) !important;
}

.card .cardOverlayContainer > .cardOverlayButton,
.card .cardOverlayContainer > button.cardOverlayButton.itemAction[data-action="link"],
.card .cardOverlayContainer > button.cardOverlayButton.itemAction[data-action="resume"],
.card .cardOverlayButton.cardOverlayButton-hover[data-action="link"],
.card .cardOverlayButton.cardOverlayButton-hover[data-action="resume"] {
  background: var(--pale-orange-red) !important;
  color: #000 !important;
  border: none !important;
  border-radius: 1.25em !important;
  min-width: 4.5em !important;
  height: 2.25em !important;
  padding: 0 1.1em !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
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
  function measureHeader() {
    document.documentElement.style.setProperty("--lcars-header-height", "48px");
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
      syncVideoMode();
    } catch (e) {
      console.warn("[JellyfinLCARS]", e);
    }
  }
  window.JellyfinLCARS = {
    version: "2.8.5-bar-progress-fix",
    init: function () { run(); return this; },
    refresh: run,
    destroy: function () {
      [STYLE_ID, FRAME_ID, RUNNER_ID, ELBOW_ID, CUT_ID].forEach(function (id) {
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
  window.addEventListener("resize", measureHeader);
  setInterval(syncVideoMode, 500);
  document.addEventListener("viewshow", function () { setTimeout(syncVideoMode, 50); }, true);
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
