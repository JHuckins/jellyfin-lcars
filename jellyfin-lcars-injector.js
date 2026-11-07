

(function () {
  "use strict";
  if (window.JellyfinLCARS && window.JellyfinLCARS.__lcarsBooted) return;
  var STYLE_ID = "jf-lcars-theme-css";
  var FRAME_ID = "jf-lcars-frame";
  var RUNNER_ID = "jf-lcars-top-runner";
  var HEADER_MASK_ID = "jf-lcars-header-mask";
  var ELBOW_CHROME_ID = "jf-lcars-elbow-chrome";
  var DASH_PANEL_ID = "jf-lcars-dash-panel";
  var ELBOW_ID = "jf-lcars-elbow";
  var CUT_ID = "jf-lcars-elbow-cut";
  var DASH_ELBOW_ID = "jf-lcars-dash-elbow";
  var DASH_CUT_ID = "jf-lcars-dash-elbow-cut";
  var DASH_BRIDGE_ID = "jf-lcars-dash-bridge";
  var __lcarsLibNavCache = null;
  var THEME_CSS = `

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
  
  --lcars-alert: var(--orange-red);
  --lcars-alert-soft: var(--light-orange-red);
  --lcars-info: var(--blue);
  --lcars-info-bright: var(--bright-blue);
  --lcars-sublabels: var(--medium-dark-blue);
  --lcars-confirm: var(--medium-dark-blue);
  --lcars-system: var(--primary-gray);
  --lcars-hover-brighten: 1.12;
  --lcars-admin-drawer: 240px;
}

html.jf-lcars-narrow #jf-lcars-elbow-chrome,
html.jf-lcars-narrow #jf-lcars-dash-panel,
html.jf-lcars-narrow #jf-lcars-dash-elbow,
html.jf-lcars-narrow #jf-lcars-dash-bridge,
html.jf-lcars-narrow #jf-lcars-dash-elbow-cut,
html.jf-lcars-narrow .jf-lcars-dash-arm-hit,
html.jf-lcars-narrow .jf-lcars-dash-curve-hit,
html.jf-lcars-narrow:not(.jf-lcars-library) #jf-lcars-elbow,
html.jf-lcars-narrow:not(.jf-lcars-library) #jf-lcars-elbow-cut,
html.jf-lcars-narrow:not(.jf-lcars-library) #jf-lcars-top-runner,
html.jf-lcars-narrow:not(.jf-lcars-library) #jf-lcars-frame,
html.jf-lcars-narrow:not(.jf-lcars-library) .jf-lcars-elbow,
html.jf-lcars-narrow:not(.jf-lcars-library) .jf-lcars-elbow-cut,
html.jf-lcars-narrow:not(.jf-lcars-library) .jf-lcars-top-runner,
html.jf-lcars-narrow:not(.jf-lcars-library) .jf-lcars-frame {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

html.jf-lcars-narrow.jf-lcars-library #jf-lcars-elbow,
html.jf-lcars-narrow.jf-lcars-library #jf-lcars-elbow-cut,
html.jf-lcars-narrow.jf-lcars-library #jf-lcars-frame,
html.jf-lcars-narrow.jf-lcars-library .jf-lcars-elbow,
html.jf-lcars-narrow.jf-lcars-library .jf-lcars-elbow-cut,
html.jf-lcars-narrow.jf-lcars-library .jf-lcars-frame {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

html.jf-lcars-narrow.jf-lcars-library #jf-lcars-top-runner,
html.jf-lcars-narrow.jf-lcars-library .jf-lcars-top-runner {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
#jf-lcars-mobile-top-bar {
  display: none;
  pointer-events: none !important;
}
html.jf-lcars-narrow.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-mobile-top-bar {
  display: flex !important;
  visibility: visible !important;
  opacity: 1 !important;
  position: fixed !important;
  
  left: 117px !important;
  right: 0 !important;
  top: calc(var(--lcars-lib-row-top, 48px) - 1px) !important;
  height: 36px !important;
  z-index: 1092 !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  box-sizing: border-box !important;
  background: transparent !important;
}
#jf-lcars-mobile-top-bar .jf-lcars-bar-row {
  display: flex !important;
  width: 100% !important;
  height: 36px !important;
}
#jf-lcars-mobile-top-bar .jf-lcars-seg {
  height: 36px !important;
  border-right: 8px solid #000 !important;
  border-radius: 0 !important;
}
#jf-lcars-mobile-top-bar .jf-lcars-seg:last-child {
  border-right: none !important;
}
#jf-lcars-mobile-top-bar .jf-lcars-seg-a { flex: 0 0 72px !important; background: var(--ghost-gray, #d2d5df) !important; }
#jf-lcars-mobile-top-bar .jf-lcars-seg-b { flex: 0 0 48px !important; background: var(--medium-dark-gray, #52596e) !important; }
#jf-lcars-mobile-top-bar .jf-lcars-seg-c { flex: 1 1 auto !important; background: var(--light-gray, #9ea5ba) !important; }
#jf-lcars-mobile-top-bar .jf-lcars-seg-d { flex: 0 0 40px !important; background: var(--medium-dark-gray, #52596e) !important; }
#jf-lcars-mobile-top-bar .jf-lcars-seg-e { display: none !important; }
#jf-lcars-mobile-elbow {
  display: none;
  pointer-events: none !important;
}
html.jf-lcars-narrow.jf-lcars-library #jf-lcars-mobile-elbow {
  display: block !important;
}

html.jf-lcars-narrow.jf-lcars-library #jf-lcars-mobile-elbow {
  display: block !important;
}
html.jf-lcars-narrow.jf-lcars-library .page,
html.jf-lcars-narrow.jf-lcars-library .mainAnimatedPage,
html.jf-lcars-narrow.jf-lcars-library .skinBody > .page,
html.jf-lcars-narrow.jf-lcars-library #mainContent,
html.jf-lcars-narrow.jf-lcars-library .mainAnimatedPages {
  border-top-left-radius: var(--lcars-mobile-curve-r, 48px) !important;
  border-top-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  background: #000 !important;
  position: relative !important;
  z-index: 1100 !important;
  
  margin-left: 56px !important;
  margin-top: -5px !important;
  padding-top: calc(var(--lcars-mobile-bar-h, 22px) + 3px) !important;
  width: auto !important;
  max-width: none !important;
  box-sizing: border-box !important;
}

html.jf-lcars-narrow.jf-lcars-library body {
  padding-left: 0 !important;
}
html.jf-lcars-narrow.jf-lcars-library {
  --lcars-lib-content-inset: 56px;
}

html.jf-lcars-narrow.jf-lcars-library .MuiToolbar-root.padded-left,
html.jf-lcars-narrow.jf-lcars-library .MuiToolbar-root {
  border-radius: 0 !important;
  background: transparent !important;
  margin-left: 0 !important;
}

html, body {
  background: #000 !important;
  color: var(--light-gray) !important;
  font-family: var(--lcars-font) !important;
}

.material-icons,
.material-icons:not([class*="outlined"]),
span.material-icons,
.material-icons.cardOverlayButtonIcon,
.sectionTitleButton .material-icons,
.emby-button .material-icons,
.paper-icon-button-light .material-icons,
button .material-icons,
.listItemIcon.material-icons,
[class*="material-icons"] {
  font-family: "Material Icons" !important;
  font-weight: normal !important;
  font-style: normal !important;
  letter-spacing: normal !important;
  text-transform: none !important;
  speak: never;
  font-feature-settings: "liga" !important;
  -webkit-font-feature-settings: "liga" !important;
}
.MuiSvgIcon-root {
  font-family: inherit !important;
}

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
  right: 0 !important;
  width: auto !important;
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
.jf-lcars-seg-a { flex: 0 0 96px !important; background: var(--primary-gray) !important; }
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
  
}
.headerTabs.sectionTabs {
  
}

.backgroundContainer,
.mainAnimatedPages {
  margin-left: var(--lcars-sidebar) !important;
  padding-top: calc(48px + var(--lcars-bar-h) + 4px) !important;
}
.dashboardDocument .content-primary {
    padding-top: 5rem;
}

.dashboardDocument .mainAnimatedPage,
.dashboardDocument .mainAnimatedPages {
  opacity: 1 !important;
  visibility: visible !important;
  color: var(--starlight) !important;
}

.dashboardDocument .MuiDrawer-docked + *,
.dashboardDocument main,
.dashboardDocument main.MuiBox-root {
  opacity: 1 !important;
  visibility: visible !important;
  color: var(--starlight) !important;
  min-width: 0 !important;
  flex-grow: 1 !important;
}

.dashboardDocument .content-primary,
.dashboardDocument .content-primary.MuiBox-root {
  opacity: 1 !important;
  visibility: visible !important;
  color: var(--starlight) !important;
  display: block !important;
}

.dashboardDocument main .MuiTypography-root,
.dashboardDocument .content-primary .MuiTypography-root {
  color: var(--starlight) !important;
}
.dashboardDocument main .MuiTypography-body2,
.dashboardDocument main .MuiTypography-caption,
.dashboardDocument .content-primary .MuiTypography-body2 {
  color: var(--ghost-gray) !important;
}
.dashboardDocument main .MuiTypography-h4,
.dashboardDocument main .MuiTypography-h5,
.dashboardDocument main .MuiTypography-h6 {
  color: var(--orange-red) !important;
}

.dashboardDocument .jf-lcars-frame,
.dashboardDocument #jf-lcars-frame {
  display: none !important;
  width: 0 !important;
}

.dashboardDocument .lcars-container {
  --frame-h: 28px;
  --frame-rail: 36px;
  --spacers: 0.65rem;
  --curve-outer: 50px;
  --curve-inner: 28px;
  --seg-a: var(--primary-gray);
  --seg-b: var(--ghost-gray);
  --seg-c: var(--medium-dark-gray);
  --seg-d: var(--light-gray);
  --seg-accent: var(--orange-red);

  position: relative !important;
  box-sizing: border-box !important;
  max-width: 100% !important;
  min-width: 0 !important;
  overflow: visible !important;

  border: none !important;
  border-radius: var(--curve-outer) 0 0 var(--curve-outer) !important;

  margin-top: 8rem !important;
  margin-right: max(4%, 28px) !important;
  margin-left: 40px !important;
  margin-bottom: 2rem !important;

  
  padding: var(--frame-h) 0 var(--frame-h) var(--frame-rail) !important;

  
  background-color: var(--seg-accent) !important;
  

  background-image:
    radial-gradient(circle at center, var(--ghost-gray) 0 70%, transparent 71%),
    linear-gradient(
      to right,
      transparent 0 50%,
      #000 50% calc(50% + 10px),
      var(--ghost-gray) calc(50% + 10px) 100%
    ),
    linear-gradient(#000, #000),
    linear-gradient(
      to right,
      transparent 0 16%,
      #000 16% calc(16% + 6px),
      var(--primary-gray) calc(16% + 6px) 30%,
      #000 30% calc(30% + 6px),
      var(--ghost-gray) calc(30% + 6px) 42%,
      #000 42% calc(42% + 10px),
      var(--medium-dark-gray) calc(42% + 10px) 58%,
      #000 58% calc(58% + 6px),
      var(--light-gray) calc(58% + 6px) 78%,
      #000 78% 100%
    ) !important;
  background-size:
    var(--frame-h) var(--frame-h),
    calc(100% - (var(--frame-h) / 2)) var(--frame-h),
    var(--frame-h) var(--frame-h),
    100% var(--frame-h) !important;
  background-position:
    top right,
    top left,
    top right,
    bottom left !important;
  background-repeat: no-repeat !important;
  display: flex !important;
  flex-direction: column !important;
}

.dashboardDocument .lcars-container::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  top: var(--frame-h) !important;
  right: 0 !important;
  bottom: var(--frame-h) !important;
  left: var(--frame-rail) !important;
  background: #000 !important;
  border-radius: var(--curve-inner, 28px) 0 0 var(--curve-inner, 28px) !important;
  pointer-events: none !important;
  z-index: 0 !important;
}
.dashboardDocument .lcars-container::after {
  content: none !important;
  display: none !important;
}

.dashboardDocument .lcars-container > .content-primary,
.dashboardDocument .lcars-container > .content-primary.MuiBox-root {
  position: relative !important;
  z-index: 2 !important;
  box-sizing: border-box !important;
  flex: 1 1 auto !important;
  align-self: stretch !important;
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  min-width: 100% !important;
  margin: 0 !important;
  padding: 16px !important;
  background: transparent !important;
  background-image: none !important;
  border: none !important;
  border-radius: 0 !important;
  overflow: visible !important;
}
.dashboardDocument .lcars-container > .content-primary::before,
.dashboardDocument .lcars-container > .content-primary::after {
  content: none !important;
  display: none !important;
}

.dashboardDocument .content-primary:not(.lcars-container *) {
  margin-top: 8rem !important;
  margin-right: max(4%, 28px) !important;
  margin-left: 40px !important;
  margin-bottom: 2rem !important;
  padding: 1rem !important;
  max-width: 100% !important;
  min-width: 0 !important;
  box-sizing: border-box !important;
}

@media screen and (max-width: 899.98px) {
  .dashboardDocument .lcars-container {
    margin-left: 0 !important;
  }
}

@media screen and (max-width: 750px) {
  .dashboardDocument .lcars-container {
    border: none !important;
    border-radius: 0 !important;
    margin-top: 50px !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-bottom: 1rem !important;
    padding: 0.5rem 17px !important;
    width: 100% !important;
    max-width: 100% !important;
    background: transparent !important;
    background-image: none !important;
  }
  .jf-lcars-active.dashboardDocument .content-primary,
  .dashboardDocument .content-primary,
  .dashboardDocument .content-primary.MuiBox-root,
  .content-primary.MuiBox-root,
  .dashboardDocument .skinBody .content-primary,
  .dashboardDocument main .content-primary {
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    background: transparent !important;
  }
  .dashboardDocument .content-primary::before,
  .dashboardDocument .content-primary::after,
  .dashboardDocument .lcars-container::before,
  .dashboardDocument .lcars-container::after {
    content: none !important;
    display: none !important;
    background: none !important;
  }
}

.MuiCard-root,
.MuiPaper-root.MuiCard-root {
  background: #000 !important;
  background-color: #000 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  overflow: hidden !important;
  border: 3px solid var(--orange-red) !important;
  transition: border-color 0.15s ease, filter 0.15s ease !important;
}

.MuiCard-root:hover,
.MuiPaper-root.MuiCard-root:hover {
  border-color: var(--lcars-alert-soft, var(--orange-red)) !important;
  filter: brightness(var(--lcars-hover-brighten, 1.08));
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
  margin-top: 0 !important;
  border: none !important;
}

.dashboardDocument .content-primary .MuiCard-root,
.dashboardDocument .lcars-container .MuiCard-root,
.dashboardDocument .MuiGrid-item .MuiCard-root {
  border: 3px solid var(--orange-red, #e7442a) !important;
  border-radius: 0 !important;
  overflow: hidden !important;
  background: #000 !important;
  display: flex !important;
  flex-direction: column !important;
}
.dashboardDocument .content-primary .MuiCard-root .MuiCardMedia-root,
.dashboardDocument .content-primary .MuiCard-root .MuiCardActionArea-root,
.dashboardDocument .content-primary .MuiCard-root .MuiCardContent-root {
  border: none !important;
  margin: 0 !important;
}

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

.MuiGrid-item .MuiCard-root {
 
}

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

#jf-lcars-library-nav {
  display: none;
  position: fixed !important;
  left: 0 !important;
  top: 0 !important;
  width: var(--lcars-admin-drawer, 240px) !important;
  height: 100vh !important;
  
  z-index: 12070 !important;
  box-sizing: border-box !important;
  
  padding: var(--lcars-lib-row-top, 48px) 0 0 0 !important;
  margin: 0 !important;
  background: #000 !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  scrollbar-width: none !important;
  border-right: none !important;
}
#jf-lcars-library-nav::-webkit-scrollbar { display: none !important; width: 0 !important; }
html.jf-lcars-library #jf-lcars-library-nav {
  display: flex !important;
  flex-direction: column !important;
  
  gap: 0 !important;
  align-items: stretch !important;
}
#jf-lcars-library-nav .jf-lcars-lib-nav-fill {
  flex: 1 1 auto !important;
  min-height: 0 !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  background: var(--primary-gray, #6d748c) !important;
  background-color: var(--primary-gray, #6d748c) !important;
  pointer-events: none !important;
  align-self: stretch !important;
}
html.jf-lcars-library #jf-lcars-library-nav {
  padding-bottom: 0 !important;
}
html.jf-lcars-library.jf-lcars-video #jf-lcars-library-nav {
  display: none !important;
}
#jf-lcars-library-nav .jf-lcars-lib-btn {
  display: flex !important;
  flex-direction: row !important;
  align-items: flex-end !important;
  justify-content: flex-end !important;
  gap: 0.45rem !important;
  width: 100% !important;
  min-height: 2.4rem !important;
  height: auto !important;
  padding: 0.45rem 0.65rem !important;
  margin: 0 0 3px 0 !important;
  border: none !important;
  border-radius: 0 !important;
  text-decoration: none !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  font-size: 0.9rem !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  text-align: right !important;
  color: #000 !important;
  background: var(--primary-gray, #6d748c) !important;
  box-sizing: border-box !important;
  cursor: pointer !important;
  overflow: hidden !important;
  position: relative !important;
}
#jf-lcars-library-nav .jf-lcars-lib-btn:nth-child(4n+2) { background: var(--medium-dark-gray, #52596e) !important; color: var(--starlight, #f3f4f7) !important; }
#jf-lcars-library-nav .jf-lcars-lib-btn:nth-child(4n+3) { background: var(--light-gray, #9ea5ba) !important; color: #000 !important; }
#jf-lcars-library-nav .jf-lcars-lib-btn:nth-child(4n+4) { background: var(--orange-red, #e7442a) !important; color: #000 !important; }
#jf-lcars-library-nav .jf-lcars-lib-btn:nth-child(4n+5) { background: var(--primary-gray, #6d748c) !important; color: #000 !important; }

#jf-lcars-library-nav .jf-lcars-lib-btn:first-child,
#jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home {
  --lcars-dash-fill: var(--primary-gray, #6d748c);
  --lcars-dash-arm: 30px;
  
  --lcars-dash-arm-len: 36px;
  --lcars-dash-curve: 60px;
  min-height: 10.8rem !important;
  height: 10.8rem !important;
  max-height: none !important;
  padding: 0.75rem 0.65rem !important;
  font-size: 0.95rem !important;
  background: var(--primary-gray, #6d748c) !important;
  color: #000 !important;
  margin: 0 0 3px 0 !important;
  align-items: flex-end !important;
  justify-content: flex-end !important;
  position: relative !important;
  z-index: 20 !important;
  overflow: visible !important;
  isolation: isolate !important;
}
#jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home > * {
  position: relative !important;
  z-index: 2 !important;
}

#jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home::before,
#jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home::after {
  content: none !important;
  display: none !important;
}

#jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home:hover,
#jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home.jf-lcars-lib-home-hot,
html.jf-lcars-lib-home-hot #jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home {
  background: var(--ghost-gray) !important;
  background-color: var(--ghost-gray) !important;
  filter: none !important;
}
html.jf-lcars-lib-home-hot #jf-lcars-lib-elbow-chrome .jf-lcars-lib-elbow-arm,
html.jf-lcars-lib-home-hot #jf-lcars-lib-elbow-chrome .jf-lcars-lib-elbow-curve,
html.jf-lcars-lib-home-hot #jf-lcars-lib-elbow-chrome .jf-lcars-lib-elbow-vfill,
html.jf-lcars-lib-home-hot #jf-lcars-lib-elbow-chrome .jf-lcars-lib-elbow-gap,
html.jf-lcars-lib-home-hot #jf-lcars-lib-elbow-chrome .jf-lcars-lib-elbow-tlcap,
html.jf-lcars-lib-home-hot #jf-lcars-lib-elbow-chrome,
html.jf-lcars-lib-home-hot #jf-lcars-lib-elbow-chrome > div {
  background: var(--ghost-gray) !important;
  background-color: var(--ghost-gray) !important;
}

html.jf-lcars-library #jf-lcars-top-runner .jf-lcars-seg-a,
html.jf-lcars-library .jf-lcars-top-runner .jf-lcars-seg-a {
  background: var(--primary-gray) !important;
  background-color: var(--primary-gray) !important;
}
html.jf-lcars-lib-home-hot.jf-lcars-library #jf-lcars-top-runner .jf-lcars-seg-a,
html.jf-lcars-lib-home-hot.jf-lcars-library .jf-lcars-top-runner .jf-lcars-seg-a {
  background: var(--ghost-gray) !important;
  background-color: var(--ghost-gray) !important;
}
#jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home:hover {
  filter: none !important;
}
#jf-lcars-lib-elbow-chrome {
  pointer-events: none !important;
}

#jf-lcars-lib-unified-hit {
  position: fixed !important;
  z-index: 12055 !important;
  pointer-events: auto !important;
  cursor: pointer !important;
  background: transparent !important;
  border: none !important;
}
body > a#jf-lcars-lib-arm-hit { display: none !important; }
#jf-lcars-library-nav .jf-lcars-lib-arm-hit,
#jf-lcars-library-nav .jf-lcars-lib-curve-hit {
  display: none !important;
}

html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root,
html.jf-lcars-library:not(.jf-lcars-video) .skinHeader {
  display: flex !important;
  visibility: visible !important;
  opacity: 1 !important;
  min-height: 48px !important;
  background: #000 !important;
  background-color: #000 !important;
  background-image: none !important;
}
html.jf-lcars-library:not(.jf-lcars-video) .MuiToolbar-root,
html.jf-lcars-library:not(.jf-lcars-video) .headerTop {
  background: transparent !important;
  background-color: transparent !important;
}
#jf-lcars-library-nav .jf-lcars-lib-btn:hover {
  filter: brightness(1.12) !important;
}
#jf-lcars-library-nav .jf-lcars-lib-btn.is-active {
  outline-offset: -2px !important;
}
#jf-lcars-library-nav .jf-lcars-lib-icon-fallback {
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  font-size: 1.1rem !important;
  line-height: 1 !important;
  color: inherit !important;
}
#jf-lcars-library-nav .jf-lcars-lib-btn svg,
#jf-lcars-library-nav .jf-lcars-lib-btn img {
  width: 1.15rem !important;
  height: 1.15rem !important;
  flex-shrink: 0 !important;
}

html.jf-lcars-library:not(.jf-lcars-video) {
  --lcars-sidebar: 0px;
  --lcars-lib-content-inset: calc(var(--lcars-admin-drawer, 240px) + 20px);
}

html.jf-lcars-library:not(.jf-lcars-video):not(.dashboardDocument) body,
html.jf-lcars-library:not(.jf-lcars-video) body:not(.dashboardDocument) {
  padding-left: var(--lcars-lib-content-inset) !important;
  box-sizing: border-box !important;
}
html.dashboardDocument body,
body.dashboardDocument,
html.jf-lcars-library.dashboardDocument body {
  padding-left: 0 !important;
}

html.jf-lcars-library:not(.jf-lcars-video):not(.dashboardDocument) .mainAnimatedPages,
html.jf-lcars-library:not(.jf-lcars-video):not(.dashboardDocument) .mainAnimatedPage,
html.jf-lcars-library:not(.jf-lcars-video):not(.dashboardDocument) .page,
html.jf-lcars-library:not(.jf-lcars-video) body:not(.dashboardDocument) .mainAnimatedPages {
  margin-top: 60px !important;
  padding-top: 0 !important;
  box-sizing: border-box !important;
}
html.jf-lcars-library:not(.jf-lcars-video) .backgroundContainer,
html.jf-lcars-library:not(.jf-lcars-video) .mainAnimatedPages,
html.jf-lcars-library:not(.jf-lcars-video) .skinBody,
html.jf-lcars-library:not(.jf-lcars-video) #mainContent,
html.jf-lcars-library:not(.jf-lcars-video) main,
html.jf-lcars-library:not(.jf-lcars-video) main.MuiBox-root,
html.jf-lcars-library:not(.jf-lcars-video) .mainAnimatedPage,
html.jf-lcars-library:not(.jf-lcars-video) .page {
  margin-left: 0 !important;
  left: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav {
  left: 0 !important;
  margin-left: 0 !important;
  padding-left: 0 !important;
}

@media screen and (min-width: 900px) {
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav {
    display: flex !important;
    width: var(--lcars-admin-drawer, 240px) !important;
  }
}

@media screen and (max-width: 899px) {
  html.jf-lcars-library:not(.jf-lcars-video) {
    --lcars-sidebar: 56px;
    --lcars-admin-drawer: 56px;
    --lcars-lib-content-inset: 72px;
  }
  html.jf-lcars-library:not(.jf-lcars-video) body {
    padding-left: var(--lcars-lib-content-inset) !important;
  }
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav {
    display: flex !important;
    flex-direction: column !important;
    width: 56px !important;
    max-width: 56px !important;
    min-width: 56px !important;
    height: 100vh !important;
    max-height: 100vh !important;
    padding: 107px 0 0 0 !important;
    left: 0 !important;
    top: 0 !important;
    background: #000 !important;
    z-index: 12070 !important;
    gap: 3px !important;
    overflow-x: hidden !important;
    overflow-y: auto !important;
  }
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav .jf-lcars-lib-nav-fill {
    flex: 1 1 auto !important;
    min-height: 0 !important;
    background: var(--primary-gray, #6d748c) !important;
    background-color: var(--primary-gray, #6d748c) !important;
  }
  
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root button.MuiIconButton-root[aria-label="Open navigation"],
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root button.MuiIconButton-root[aria-label="Open drawer"],
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root button.MuiIconButton-root[aria-label="Menu"],
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root button.MuiIconButton-root[aria-label="menu"],
  html.jf-lcars-library:not(.jf-lcars-video) .MuiToolbar-root button.MuiIconButton-edgeStart:not([aria-label="Back"]):not([aria-label="back"]),
  html.jf-lcars-library:not(.jf-lcars-video) .headerMainDrawerButton,
  html.jf-lcars-library:not(.jf-lcars-video) .mainDrawerButton,
  html.jf-lcars-library:not(.jf-lcars-video) button.barsMenuButton,
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root button.MuiIconButton-root:has([data-testid="MenuIcon"]),
  html.jf-lcars-library:not(.jf-lcars-video) .MuiToolbar-root button.MuiIconButton-root:has([data-testid="MenuIcon"]) {
    display: none !important;
    visibility: hidden !important;
    width: 0 !important;
    min-width: 0 !important;
    height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden !important;
    pointer-events: none !important;
  }
  
  html.jf-lcars-active.dashboardDocument .MuiAppBar-root button.MuiIconButton-root[aria-label="Open navigation"],
  html.jf-lcars-active.dashboardDocument .MuiAppBar-root button.MuiIconButton-root:has([data-testid="MenuIcon"]),
  html.jf-lcars-active.dashboardDocument .MuiToolbar-root button.MuiIconButton-edgeStart:not([aria-label="Back"]),
  .dashboardDocument .MuiIconButton-edgeStart {
    display: inline-flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    width: auto !important;
    min-width: auto !important;
    height: auto !important;
    pointer-events: auto !important;
  }
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav .jf-lcars-lib-btn {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 56px !important;
    min-width: 56px !important;
    max-width: 56px !important;
    height: 56px !important;
    min-height: 56px !important;
    max-height: 56px !important;
    margin: 0 0 3px 0 !important;
    padding: 0 !important;
    border-radius: 0 !important;
    box-sizing: border-box !important;
    position: relative !important;
    z-index: 5 !important;
  }
  
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home,
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav a.jf-lcars-lib-btn:first-child {
    margin-bottom: 2px !important;
  }
  
  
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home,
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav a.jf-lcars-lib-btn:first-child {
    overflow: visible !important;
    z-index: 12080 !important;
    height: 116px !important;
    min-height: 116px !important;
    max-height: 116px !important;
    margin-top: -60px !important;
    padding-top: 60px !important;
    padding-bottom: 0 !important;
    box-sizing: border-box !important;
    align-items: center !important;
    justify-content: center !important;
  }
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home > *,
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav a.jf-lcars-lib-btn:first-child > * {
    position: relative !important;
    z-index: 2 !important;
    margin: 0 !important;
    line-height: 1 !important;
  }
  
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav .jf-lcars-lib-label {
    display: none !important;
  }
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav .jf-lcars-lib-btn svg,
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav .jf-lcars-lib-btn img {
    width: 1.5rem !important;
    height: 1.5rem !important;
    max-width: 1.5rem !important;
    max-height: 1.5rem !important;
    display: block !important;
    margin: 0 !important;
  }
  
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home,
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav .jf-lcars-lib-btn:first-child {
    height: 56px !important;
    min-height: 56px !important;
    max-height: 56px !important;
  }
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home::before,
  html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-library-nav .jf-lcars-lib-btn.jf-lcars-lib-home::after {
    display: none !important;
    content: none !important;
  }
  
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root .MuiToolbar-root .MuiStack-root.jf-lcars-lib-source,
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root .MuiToolbar-root .MuiStack-root:has(> a.MuiButton-root[href*="collectionType"]),
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root .MuiToolbar-root .MuiStack-root:has(> a.MuiButton-root[href*="/movies"]),
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root .MuiToolbar-root .MuiStack-root:has(> a.MuiButton-root[href*="/tv"]),
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root .MuiToolbar-root .MuiStack-root:has(> a.MuiButton-root[href*="home?tab"]),
  html.jf-lcars-library:not(.jf-lcars-video) header .MuiToolbar-root .MuiStack-root.jf-lcars-lib-source {
    display: none !important;
  }
  
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root,
  html.jf-lcars-library:not(.jf-lcars-video) .skinHeader {
    left: 56px !important;
  }
}

html.jf-lcars-library #jf-lcars-dash-panel,
html.jf-lcars-library #jf-lcars-dash-elbow,
html.jf-lcars-library #jf-lcars-dash-bridge,
html.jf-lcars-library #jf-lcars-elbow-chrome {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

@media (min-width: 1100px) {
  html.jf-lcars-library .dashboardDocument .MuiDrawer-root,
  html.jf-lcars-library .dashboardDocument .MuiDrawer-docked {
    display: none !important;
    width: 0 !important;
    visibility: hidden !important;
  }
}

@media (min-width: 900px) {
  html.jf-lcars-library .jf-lcars-frame,
  html.jf-lcars-library #jf-lcars-frame,
  html.jf-lcars-library .jf-lcars-elbow,
  html.jf-lcars-library #jf-lcars-elbow,
  html.jf-lcars-library .jf-lcars-elbow-cut,
  html.jf-lcars-library #jf-lcars-elbow-cut {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    visibility: hidden !important;
  }
}

html.jf-lcars-library:not(.jf-lcars-video) #jf-lcars-top-runner,
html.jf-lcars-library:not(.jf-lcars-video) .jf-lcars-top-runner {
  left: calc(var(--lcars-admin-drawer, 240px) + 6px) !important;
  top: var(--lcars-lib-row-top, 48px) !important;
  height: var(--lcars-dash-arm, 30px) !important;
}
html.jf-lcars-library:not(.jf-lcars-video) .skinHeader,
html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root {
  left: var(--lcars-admin-drawer, 240px) !important;
  right: 0 !important;
  width: auto !important;
  margin-left: 0 !important;
  padding-left: 0.5rem !important;
  box-sizing: border-box !important;
  position: fixed !important;
  top: 0 !important;
  z-index: 1105 !important;
}

@media screen and (min-width: 900px) {
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root .MuiToolbar-root .MuiStack-root:has(> a.MuiButton-root[href*="collectionType"]),
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root .MuiToolbar-root .MuiStack-root:has(> a.MuiButton-root[href*="/boxsets"]),
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root .MuiToolbar-root .MuiStack-root:has(> a.MuiButton-root[href*="/movies"]),
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root .MuiToolbar-root .MuiStack-root:has(> a.MuiButton-root[href*="/tv"]),
  html.jf-lcars-library:not(.jf-lcars-video) .MuiAppBar-root .MuiToolbar-root .MuiStack-root.jf-lcars-lib-source,
  html.jf-lcars-library:not(.jf-lcars-video) header .MuiToolbar-root .MuiStack-root.jf-lcars-lib-source {
    display: none !important;
    visibility: hidden !important;
    width: 0 !important;
    height: 0 !important;
    overflow: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
  }
}

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

.navMenuOption {
  margin: 6px 4px 10px 4px !important;
  padding: 12px 14px !important;
  min-height: 44px !important;
}

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

.itemMiscInfo,
.mediaInfoTags {
  border-left: none !important;
  padding-left: 0 !important;
}

.dashboardDocument,
.dashboardDocument .content-primary {
  color: var(--light-gray) !important;
}

#jf-lcars-dash-elbow,
#jf-lcars-dash-elbow-cut,
#jf-lcars-dash-bridge {
  display: none !important;
  pointer-events: none !important;
  box-sizing: border-box !important;
  visibility: hidden !important;
}

.dashboardDocument #jf-lcars-dash-elbow {
  display: none !important;
  position: fixed !important;
  
  left: calc(var(--lcars-admin-drawer) - var(--lcars-dash-arm, 30px)) !important;
  top: var(--lcars-dash-row-top, 48px) !important;
  width: calc(var(--lcars-dash-arm, 30px) + var(--lcars-dash-curve-r, 80px)) !important;
  height: calc(var(--lcars-dash-arm, 30px) + var(--lcars-dash-curve-r, 80px)) !important;
  background: transparent !important;
  border-style: solid !important;
  border-color: var(--primary-gray) !important;
  border-width: var(--lcars-dash-arm, 30px) 0 0 var(--lcars-dash-arm, 30px) !important;
  border-top-left-radius: var(--lcars-dash-curve-r, 80px) !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  z-index: 1094 !important;
  pointer-events: none !important;
}

.dashboardDocument #jf-lcars-dash-bridge {
  display: none !important;
  position: fixed !important;
  left: calc(var(--lcars-admin-drawer) - var(--lcars-dash-arm, 30px)) !important;
  top: var(--lcars-dash-row-top, 48px) !important;
  width: calc(var(--lcars-dash-arm, 30px) + 24px) !important;
  height: var(--lcars-dash-arm, 30px) !important;
  background: var(--primary-gray) !important;
  border-radius: 0 !important;
  z-index: 1095 !important;
  pointer-events: none !important;
}

@media screen and (width <= 900px) {
  .dashboardDocument #jf-lcars-dash-elbow, .dashboardDocument #jf-lcars-dash-bridge {
    display: none !important;
  }

  .dashboardDocument #jf-lcars-top-runner {
    left: 0px !important;
  }

  .jf-lcars-active.dashboardDocument .content-primary,
  .dashboardDocument .content-primary,
  .dashboardDocument .content-primary.MuiBox-root,
  .content-primary.MuiBox-root {
    margin-left: 0.75rem !important; 
  }
}

@media screen and (max-width: 750px) {
  html.jf-lcars-active,
  html.jf-lcars-active body,
  .jf-lcars-active.dashboardDocument,
  html.dashboardDocument,
  body.dashboardDocument {
    overflow-x: hidden !important;
    
    max-width: 100% !important;
  }
  

  .dashboardDocument main,
  .dashboardDocument main.MuiBox-root,
  .dashboardDocument .mainAnimatedPage,
  .dashboardDocument .mainAnimatedPages,
  .dashboardDocument .MuiBox-root.mainAnimatedPage,
  .dashboardDocument .page.mainAnimatedPage,
  .dashboardDocument #pluginsPage {
    width: auto !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
  }
  .jf-lcars-active.dashboardDocument .content-primary,
  .dashboardDocument .content-primary,
  .dashboardDocument .content-primary.MuiBox-root,
  .content-primary.MuiBox-root,
  .dashboardDocument .skinBody .content-primary,
  .dashboardDocument main .content-primary,
  .dashboardDocument #pluginsPage .content-primary {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    
    padding-left: 17px !important;
    padding-right: 17px !important;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
  }
  
  .dashboardDocument .content-primary .MuiStack-root:has(> .MuiChip-root) {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
  
  .dashboardDocument .content-primary .MuiGrid-container,
  .dashboardDocument #pluginsPage .MuiGrid-container {
    width: 100% !important;
    max-width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    box-sizing: border-box !important;
  }
  .dashboardDocument .content-primary .MuiGrid-item,
  .dashboardDocument #pluginsPage .MuiGrid-item {
    box-sizing: border-box !important;
    max-width: 100% !important;
  }
  
  .dashboardDocument .content-primary .MuiStack-root:has(> .MuiButton-outlined),
  .dashboardDocument .content-primary .MuiStack-root:has(input[placeholder*="Search" i]),
  .dashboardDocument .content-primary .MuiStack-root:has(> .MuiTypography-h1),
  .dashboardDocument #pluginsPage .MuiStack-root:has(> .MuiButton-outlined) {
    flex-wrap: wrap !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    margin-right: 0 !important;
    padding-right: 0 !important;
    row-gap: 0.5rem !important;
    column-gap: 0.5rem !important;
  }
  .dashboardDocument .content-primary .MuiStack-root > .MuiButton-outlined,
  .dashboardDocument #pluginsPage .MuiStack-root > .MuiButton-outlined {
    margin-left: 0 !important;
    max-width: 100% !important;
    flex: 0 1 auto !important;
  }
  
  .dashboardDocument .content-primary .MuiPaper-root,
  .dashboardDocument .content-primary .MuiCard-root,
  .dashboardDocument .content-primary .MuiBox-root {
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
  }
  
  .dashboardDocument .content-primary .MuiTypography-root,
  .dashboardDocument .content-primary h1,
  .dashboardDocument .content-primary h2,
  .dashboardDocument .content-primary h3,
  .dashboardDocument .content-primary p {
    max-width: 100% !important;
    overflow-wrap: anywhere !important;
    word-break: normal !important;
    white-space: normal !important;
  }
  
  .dashboardDocument .content-primary a.MuiListItemButton-root,
  .dashboardDocument .content-primary .MuiListItem-root,
  .dashboardDocument .content-primary .MuiListItemButton-root {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    align-items: flex-start !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
  .dashboardDocument .content-primary .MuiListItemText-root,
  .dashboardDocument .content-primary .MuiListItemText-root .MuiTypography-root,
  .dashboardDocument .content-primary .MuiListItemText-secondary,
  .dashboardDocument .content-primary .MuiListItemText-secondary .MuiTypography-root {
    white-space: normal !important;
    overflow-wrap: break-word !important;
    word-break: break-word !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }
  .dashboardDocument .content-primary .MuiListItemText-root {
    flex: 1 1 auto !important;
    min-width: 0 !important;
  }
  .dashboardDocument .content-primary .MuiListItemAvatar-root,
  .dashboardDocument .content-primary .MuiListItemIcon-root {
    flex-shrink: 0 !important;
  }
  
  .dashboardDocument .content-primary .MuiStack-root,
  .dashboardDocument .content-primary .MuiGrid-container,
  .dashboardDocument .content-primary .MuiGrid-item {
    min-width: 0 !important;
    max-width: 100% !important;
  }
  .dashboardDocument .content-primary > .MuiGrid-container > .MuiGrid-item {
    flex: 1 1 100% !important;
    max-width: 100% !important;
    width: 100% !important;
  }
  
  .dashboardDocument .MuiStack-root:has(> .MuiTypography-h2):has(.MuiButton-root) {
    flex-wrap: wrap !important;
    column-gap: 0.5rem !important;
    row-gap: 0.5rem !important;
    max-width: 100% !important;
  }
  
  .dashboardDocument .content-primary .MuiButton-root {
    max-width: 100% !important;
  }
  
  .dashboardDocument .content-primary::before,
  .dashboardDocument .content-primary::after {
    display: none !important;
  }
  
  .dashboardDocument .content-primary .MuiPaper-root:not(.MuiCard-root)::before {
    max-width: 100% !important;
  }
}

.dashboardDocument .content-primary {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}
.dashboardDocument .content-primary > .MuiGrid-container {
  display: flex !important;
  flex-wrap: wrap !important;
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}
.dashboardDocument .content-primary > .MuiGrid-container > .MuiGrid-item {
  box-sizing: border-box !important;
  min-width: 0 !important;
}

@media (max-width: 1300px) {
  .dashboardDocument .content-primary > .MuiGrid-container > .MuiGrid-item {
    flex: 1 1 100% !important;
    max-width: 100% !important;
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

@media (min-width: 1536px) {
  .dashboardDocument .content-primary > .MuiGrid-container > .MuiGrid-item.MuiGrid-grid-xl-6 {
    flex: 2 1 0 !important;
    max-width: none !important;
    width: auto !important;
  }
  .dashboardDocument .content-primary > .MuiGrid-container > .MuiGrid-item.MuiGrid-grid-xl-3 {
    flex: 1 1 0 !important;
    max-width: none !important;
    width: auto !important;
  }
}

@media (min-width: 1301px) and (max-width: 1535.98px) {
  .dashboardDocument .content-primary > .MuiGrid-container > .MuiGrid-item.MuiGrid-grid-lg-7 {
    flex: 7 1 0 !important;
    max-width: none !important;
    width: auto !important;
  }
  .dashboardDocument .content-primary > .MuiGrid-container > .MuiGrid-item.MuiGrid-grid-lg-5 {
    flex: 5 1 0 !important;
    max-width: none !important;
    width: auto !important;
  }
  .dashboardDocument .content-primary > .MuiGrid-container > .MuiGrid-item.MuiGrid-grid-lg-12 {
    flex: 1 1 100% !important;
    max-width: 100% !important;
    width: 100% !important;
  }
}

.dashboardDocument .MuiDrawer-paper .MuiListItemText-root,
.dashboardDocument .MuiDrawer-paper .MuiListItemText-multiline {
  margin-left: 10px !important;
}

.dashboardDocument #jf-lcars-dash-elbow-cut {
  display: none !important;
}

html.dashboardDocument,
body.dashboardDocument,
.dashboardDocument {
  --lcars-admin-drawer: 240px;
}

.dashboardDocument .jf-lcars-frame,
.dashboardDocument .jf-lcars-elbow,
.dashboardDocument .jf-lcars-elbow-cut {
  display: none !important;
}

.dashboardDocument .skinHeader,
.dashboardDocument .skinHeader-withBackground,
.dashboardDocument .skinHeader.focuscontainer-x {
  left: var(--lcars-admin-drawer) !important;
  background: #000 !important;
}

.dashboardDocument .jf-lcars-top-runner {
  left: calc(var(--lcars-admin-drawer) + 96px) !important;
  top: var(--lcars-dash-row-top, 48px) !important;
  right: 0 !important;
  height: var(--lcars-dash-arm, 30px) !important;
  z-index: 1093 !important;
}

.dashboardDocument .backgroundContainer,
.dashboardDocument .mainAnimatedPages {
  margin-left: 0 !important;
}

.jf-lcars-active {
  --jf-palette-primary-main: var(--orange-red);
  --jf-palette-primary-mainChannel: 231 68 42;
  --jf-palette-primary-contrastText: #000000;
  --jf-palette-secondary-main: var(--blue);
  --jf-palette-secondary-mainChannel: 55 166 209;
  --jf-palette-secondary-contrastText: #000000;
  --jf-palette-error-main: var(--orange-red);
  --jf-palette-info-main: var(--bright-blue);
}

.jf-lcars-active.dashboardDocument,
.jf-lcars-active.dashboardDocument,
body.dashboardDocument {
  --jf-palette-primary-main: var(--orange-red) !important;
  --jf-palette-primary-mainChannel: 231 68 42 !important;
  --jf-palette-primary-contrastText: #000000 !important;
  --jf-palette-secondary-main: var(--blue) !important;
  --jf-palette-secondary-mainChannel: 55 166 209 !important;
  --jf-card-borderRadius: 0px !important;
}

.dashboardDocument .MuiDrawer-docked + .MuiBox-root,
.dashboardDocument main.MuiBox-root {
  box-sizing: border-box !important;
}

.dashboardDocument .MuiDrawer-root.MuiDrawer-docked,
.dashboardDocument .MuiDrawer-docked {
  width: var(--lcars-admin-drawer) !important;
  flex-shrink: 0 !important;
  background: transparent !important;
  border: none !important;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  height: 100vh !important;
  max-height: 100vh !important;
  bottom: 0 !important;
  overflow: hidden !important;
  z-index: 1200 !important;
}

.dashboardDocument .MuiDrawer-paper,
.dashboardDocument .MuiDrawer-paperAnchorLeft,
.dashboardDocument .MuiDrawer-paperAnchorDockedLeft {
  background: #000 !important;
  background-color: #000 !important;
  background-image: none !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  color: #000 !important;
  box-sizing: border-box !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}

@media (min-width: 900px) {
  .dashboardDocument .MuiDrawer-paper,
  .dashboardDocument .MuiDrawer-paperAnchorLeft,
  .dashboardDocument .MuiDrawer-paperAnchorDockedLeft {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    height: 100vh !important;
    max-height: 100vh !important;
    min-height: 0 !important;
    width: var(--lcars-admin-drawer) !important;
    max-width: var(--lcars-admin-drawer) !important;
    padding: 0 !important;
    display: flex !important;
    flex-direction: column !important;
  }
  .dashboardDocument .MuiDrawer-paper .jf-lcars-dash-nav-fill,
  .dashboardDocument .MuiDrawer-paper .MuiList-root > .jf-lcars-dash-nav-fill {
    flex: 1 1 auto !important;
    min-height: 48px !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
    background: var(--primary-gray, #6d748c) !important;
    background-color: var(--primary-gray, #6d748c) !important;
    pointer-events: none !important;
    align-self: stretch !important;
    display: block !important;
  }
}
@media (max-width: 899px) {
  .dashboardDocument .MuiDrawer-paper .jf-lcars-dash-nav-fill {
    display: none !important;
    height: 0 !important;
    min-height: 0 !important;
    flex: none !important;
  }
}

@media (max-width: 899px) {
  .dashboardDocument .MuiDrawer-paper,
  .MuiDrawer-paperAnchorTemporary,
  .MuiDrawer-root .MuiDrawer-paper,
  .MuiModal-root .MuiDrawer-paper {
    background: #000 !important;
    background-color: #000 !important;
    
    width: min(294px, 88vw) !important;
    max-width: min(294px, 88vw) !important;
    
  }
}

@media (max-width: 899px) {
  .MuiDrawer-paperAnchorTemporary,
  .MuiDrawer-root .MuiDrawer-paper,
  .MuiModal-root .MuiDrawer-paper {
    background: #000 !important;
    background-color: #000 !important;
    color: #000 !important;
    padding: 0.35rem 0.5rem 2rem 0.5rem !important;
    box-sizing: border-box !important;
  }
  .MuiDrawer-paperAnchorTemporary .MuiList-root,
  .MuiModal-root .MuiDrawer-paper .MuiList-root {
    padding: 0 !important;
    margin: 0 !important;
    background: transparent !important;
  }
  .MuiDrawer-paperAnchorTemporary .MuiListSubheader-root,
  .MuiModal-root .MuiDrawer-paper .MuiListSubheader-root {
    font-family: var(--lcars-font) !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.08em !important;
    color: var(--ghost-gray) !important;
    background: transparent !important;
    line-height: 1.2 !important;
    margin: 0.5rem 0 0.25rem 0 !important;
    padding: 0.25rem 0.5rem !important;
  }
  .MuiDrawer-paperAnchorTemporary .MuiListItem-root,
  .MuiModal-root .MuiDrawer-paper .MuiListItem-root {
    padding: 0 !important;
    margin: 0 0 3px 0 !important;
    background: transparent !important;
  }
  .MuiDrawer-paperAnchorTemporary .MuiListItemButton-root,
  .MuiDrawer-paperAnchorTemporary a.MuiListItemButton-root,
  .MuiModal-root .MuiDrawer-paper .MuiListItemButton-root,
  .MuiModal-root .MuiDrawer-paper a.MuiListItemButton-root {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: flex-end !important;
    width: 100% !important;
    box-sizing: border-box !important;
    margin: 0 !important;
    padding: 0.55rem 0.75rem !important;
    min-height: 2.6rem !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: var(--primary-gray) !important;
    background-color: var(--primary-gray) !important;
    color: #000 !important;
    font-family: var(--lcars-font) !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.06em !important;
    text-align: right !important;
  }
  
  .MuiDrawer-paperAnchorTemporary .MuiListItem-root:nth-child(6n+1) > .MuiListItemButton-root,
  .MuiModal-root .MuiDrawer-paper .MuiListItem-root:nth-child(6n+1) > .MuiListItemButton-root {
    background: var(--primary-gray) !important;
  }
  .MuiDrawer-paperAnchorTemporary .MuiListItem-root:nth-child(6n+2) > .MuiListItemButton-root,
  .MuiModal-root .MuiDrawer-paper .MuiListItem-root:nth-child(6n+2) > .MuiListItemButton-root {
    background: var(--ghost-gray) !important;
  }
  .MuiDrawer-paperAnchorTemporary .MuiListItem-root:nth-child(6n+3) > .MuiListItemButton-root,
  .MuiModal-root .MuiDrawer-paper .MuiListItem-root:nth-child(6n+3) > .MuiListItemButton-root {
    background: var(--medium-dark-gray) !important;
    color: var(--starlight) !important;
  }
  .MuiDrawer-paperAnchorTemporary .MuiListItem-root:nth-child(6n+4) > .MuiListItemButton-root,
  .MuiModal-root .MuiDrawer-paper .MuiListItem-root:nth-child(6n+4) > .MuiListItemButton-root {
    background: var(--blue) !important;
  }
  .MuiDrawer-paperAnchorTemporary .MuiListItem-root:nth-child(6n+5) > .MuiListItemButton-root,
  .MuiModal-root .MuiDrawer-paper .MuiListItem-root:nth-child(6n+5) > .MuiListItemButton-root {
    background: var(--pale-orange-red) !important;
  }
  .MuiDrawer-paperAnchorTemporary .MuiListItem-root:nth-child(6n+6) > .MuiListItemButton-root,
  .MuiModal-root .MuiDrawer-paper .MuiListItem-root:nth-child(6n+6) > .MuiListItemButton-root {
    background: var(--light-gray) !important;
  }
  .MuiDrawer-paperAnchorTemporary .MuiListItemButton-root.Mui-selected,
  .MuiModal-root .MuiDrawer-paper .MuiListItemButton-root.Mui-selected {
    background: var(--orange-red) !important;
    background-color: var(--orange-red) !important;
    color: #000 !important;
  }
  .MuiDrawer-paperAnchorTemporary .MuiListItemButton-root:hover,
  .MuiModal-root .MuiDrawer-paper .MuiListItemButton-root:hover {
    filter: brightness(1.12);
  }
  .MuiDrawer-paperAnchorTemporary .MuiListItemButton-root .MuiTypography-root,
  .MuiDrawer-paperAnchorTemporary .MuiListItemButton-root .MuiListItemText-primary,
  .MuiDrawer-paperAnchorTemporary .MuiListItemButton-root .MuiListItemIcon-root,
  .MuiDrawer-paperAnchorTemporary .MuiListItemButton-root .MuiSvgIcon-root,
  .MuiModal-root .MuiDrawer-paper .MuiListItemButton-root .MuiTypography-root,
  .MuiModal-root .MuiDrawer-paper .MuiListItemButton-root .MuiListItemText-primary,
  .MuiModal-root .MuiDrawer-paper .MuiListItemButton-root .MuiSvgIcon-root {
    color: inherit !important;
    fill: currentColor !important;
    font-family: var(--lcars-font) !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
  }
  .MuiDrawer-paperAnchorTemporary .MuiListItemButton-root .MuiListItemText-secondary,
  .MuiModal-root .MuiDrawer-paper .MuiListItemButton-root .MuiListItemText-secondary {
    color: var(--dark-gray) !important;
    text-transform: none !important;
    font-weight: 400 !important;
  }
  
  .MuiDrawer-paperAnchorTemporary .MuiList-root:first-child > .MuiListItem-root:first-child,
  .MuiDrawer-paperAnchorTemporary .MuiList-root:first-of-type > .MuiListItem-root:first-child,
  .MuiModal-root .MuiDrawer-paper .MuiList-root:first-child > .MuiListItem-root:first-child,
  .MuiDrawer-paperAnchorTemporary li.MuiListItem-root:has(.MuiListItemText-multiline),
  .MuiDrawer-paperAnchorTemporary li.MuiListItem-root:has(img),
  .MuiDrawer-paperAnchorTemporary a.MuiListItemButton-root:has(img),
  .MuiDrawer-paperAnchorTemporary a.MuiListItemButton-root:has(.MuiListItemText-secondary),
  .MuiModal-root .MuiDrawer-paper li.MuiListItem-root:has(.MuiListItemText-multiline),
  .MuiModal-root .MuiDrawer-paper a.MuiListItemButton-root:has(img),
  .dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child {
    display: none !important;
    height: 0 !important;
    max-height: 0 !important;
    min-height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
    border: none !important;
  }
  
  .MuiDrawer-paperAnchorTemporary a.MuiListItemButton-root[href="#/"],
  .MuiDrawer-paperAnchorTemporary a.MuiListItemButton-root[href="#/home"],
  .MuiDrawer-paperAnchorTemporary a.MuiListItemButton-root[href^="#/home?"],
  .MuiModal-root .MuiDrawer-paper a.MuiListItemButton-root[href="#/"],
  .MuiModal-root .MuiDrawer-paper a.MuiListItemButton-root[href="#/home"],
  .MuiModal-root .MuiDrawer-paper a.MuiListItemButton-root[href^="#/home?"] {
    min-height: 5.2rem !important;
    height: 5.2rem !important;
    align-items: flex-end !important;
    padding-bottom: 0.65rem !important;
  }
  
  .MuiDrawer-paperAnchorTemporary .MuiListItem-root:nth-last-child(2) > .MuiListItemButton-root,
  .MuiModal-root .MuiDrawer-paper .MuiListItem-root:nth-last-child(2) > .MuiListItemButton-root {
    min-height: 3.9rem !important;
    height: auto !important;
    padding-top: 0.7rem !important;
    padding-bottom: 0.7rem !important;
  }
  
}

.dashboardDocument .MuiDrawer-paper::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}

@media (min-width: 900px) {
  .dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child {
    position: sticky !important;
    top: 0 !important;
    z-index: 20 !important;
    background: #000 !important;
    margin: 0 !important;
  }
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] {
    position: sticky !important;
    top: var(--lcars-nav-sticky-top, 52px) !important;
    z-index: 19 !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard"]),
  .dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard/"]) {
    position: sticky !important;
    top: var(--lcars-nav-sticky-top, 52px) !important;
    z-index: 19 !important;
    background: #000 !important;
  }
}

.dashboardDocument .MuiDrawer-paper > .MuiList-root {
  background: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItem-root {
  padding: 0 !important;
  margin: 0 !important;
  display: block !important;
  background: #000 !important;
  background-color: #000 !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
  position: relative !important;
  z-index: 0 !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard"]),
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard/"]) {
  overflow: visible !important;
  z-index: 19 !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListSubheader-root,
.dashboardDocument .MuiDrawer-paper .MuiListSubheader-sticky,
.dashboardDocument .MuiDrawer-paper .MuiListSubheader-gutters,
.dashboardDocument .MuiDrawer-paper [id$="-subheader"] {
  display: none !important;
  height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  border: none !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-gutters {
  display: flex !important;
  flex-direction: row !important;
  align-items: flex-end !important;
  justify-content: flex-end !important;
  width: 100% !important;
  box-sizing: border-box !important;
  margin: 0 !important;
  padding: 0.45rem 0.65rem !important;
  min-height: 2.4rem !important;
  height: auto !important;
  border: none !important;
  border-bottom: 3px solid #000 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  background: var(--primary-gray) !important;
  background-color: var(--primary-gray) !important;
  color: #000 !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  text-align: right !important;
  overflow: hidden !important;
  position: relative !important;
}

.dashboardDocument .MuiDrawer-paper > .MuiList-root > .MuiListItem-root > .MuiListItemButton-root {
  margin-bottom: 0 !important;
  z-index: 0 !important;
}

.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(7n+1) > .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(7n+1) {
  min-height: 2.4rem !important;
  padding-top: 0.45rem !important;
  padding-bottom: 0.45rem !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(7n+2) > .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(7n+2) {
  min-height: 4.2rem !important;
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(7n+3) > .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(7n+3) {
  min-height: 2.4rem !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(7n+4) > .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(7n+4) {
  min-height: 7.2rem !important; 
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  align-items: flex-end !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(7n+5) > .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(7n+5) {
  min-height: 2.4rem !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(7n+6) > .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(7n+6) {
  min-height: 3.6rem !important;
  padding-top: 0.65rem !important;
  padding-bottom: 0.65rem !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(7n+7) > .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(7n+7) {
  min-height: 2.4rem !important;
}

.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(6n+1) > .MuiListItemButton-root:not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]),
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(6n+1):not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]) {
  background: var(--primary-gray) !important;
  background-color: var(--primary-gray) !important;
  color: #000 !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(6n+2) > .MuiListItemButton-root:not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]),
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(6n+2):not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]) {
  background: var(--light-gray) !important;
  background-color: var(--light-gray) !important;
  color: #000 !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(6n+3) > .MuiListItemButton-root:not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]),
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(6n+3):not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]) {
  background: var(--medium-dark-gray) !important;
  background-color: var(--medium-dark-gray) !important;
  color: var(--starlight) !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(6n+4) > .MuiListItemButton-root:not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]),
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(6n+4):not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]) {
  background: var(--ghost-gray) !important;
  background-color: var(--ghost-gray) !important;
  color: #000 !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(6n+5) > .MuiListItemButton-root:not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]),
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(6n+5):not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]) {
  background: var(--blue) !important;
  background-color: var(--blue) !important;
  color: #000 !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(6n+6) > .MuiListItemButton-root:not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]),
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:nth-child(6n+6):not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]) {
  background: var(--orange-red) !important;
  background-color: var(--orange-red) !important;
  color: #000 !important;
}

.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root > .MuiListItemButton-root:hover:not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]),
.dashboardDocument .MuiDrawer-paper > .MuiList-root > a.MuiListItemButton-root:hover:not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]),
.dashboardDocument .MuiDrawer-paper > .MuiList-root .MuiListItem-root:nth-child(n) > .MuiListItemButton-root:hover:not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]),
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root:hover:not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]),
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root:hover:not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]) {
  background: var(--pale-orange-red) !important;
  background-color: var(--pale-orange-red) !important;
  color: #000 !important;
  filter: none !important;
  border-bottom: 3px solid #000 !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root:hover,
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root.Mui-focusVisible {
  filter: none !important;
  margin: 0 !important;
  transform: none !important;
  box-shadow: none !important;
  outline: none !important;
  border: none !important;
  border-bottom: 3px solid #000 !important;
  z-index: 0 !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root:hover:not(.Mui-selected):not([href="#/dashboard"]):not([href="#/dashboard/"]) {
  filter: none !important;
  background: var(--pale-orange-red) !important;
  background-color: var(--pale-orange-red) !important;
  color: #000 !important;
  border-bottom: 3px solid #000 !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root.Mui-selected:not([href="#/dashboard"]):not([href="#/dashboard/"]),
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root.Mui-selected:not([href="#/dashboard"]):not([href="#/dashboard/"]) {
  margin: 0 !important;
  transform: none !important;
  box-shadow: none !important;
  border-bottom: 3px solid #000 !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root .MuiTouchRipple-root {
  display: none !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]:hover,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]:hover {
  margin: 0 !important;
  padding: 0.75rem 0.65rem !important;
  height: var(--lcars-dash-row-height, 10.8rem) !important;
  min-height: var(--lcars-dash-row-height, 10.8rem) !important;
  max-height: var(--lcars-dash-row-height, 10.8rem) !important;
  border: none !important;
  box-sizing: border-box !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root .MuiListItemIcon-root {
  order: 2 !important;
  min-width: 0 !important;
  margin: 0 0 0 0.45rem !important;
  color: inherit !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root .MuiListItemText-root {
  order: 1 !important;
  margin: 0 !important;
  flex: 1 1 auto !important;
  text-align: right !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root .MuiListItemText-primary,
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root .MuiTypography-body1,
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root .MuiTypography-root {
  color: inherit !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  font-size: 0.8rem !important;
  text-align: right !important;
  line-height: 1.1 !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root .MuiSvgIcon-root,
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root .MuiIcon-root {
  color: inherit !important;
  fill: currentColor !important;
  font-size: 1.15rem !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root > .MuiSvgIcon-root {
  order: 3 !important;
  margin-left: 0.2rem !important;
  color: inherit !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root.Mui-selected:not([href="#/dashboard"]):not([href="#/dashboard/"]),
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root.Mui-selected:not([href="#/dashboard"]):not([href="#/dashboard/"]) {
  background: var(--orange-red) !important;
  background-color: var(--orange-red) !important;
  color: #000 !important;
  border: none !important;
  border-bottom: 3px solid #000 !important;
  filter: none !important;
  margin-bottom: 0 !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root.Mui-selected:not([href="#/dashboard"]):not([href="#/dashboard/"]):hover {
  background: var(--light-orange-red) !important;
  border-bottom: 3px solid #000 !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href*="configurationpage"].Mui-selected,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href*="configurationpage"] {
  border-bottom: 3px solid #000 !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root.Mui-selected .MuiSvgIcon-root,
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root.Mui-selected .MuiTypography-root,
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root.Mui-selected .MuiListItemIcon-root {
  color: #000 !important;
  fill: #000 !important;
}

html.jf-lcars-active.dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child,
.dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: var(--lcars-nav-sticky-top, 54px) !important;
  height: calc(var(--lcars-nav-sticky-top, 54px) + 3px) !important;
  margin: 0 !important;
  padding: 0 !important;
  opacity: 0 !important;
  pointer-events: none !important;
  z-index: 0 !important;
  overflow: hidden !important;
}

#jf-lcars-home-square:not([data-jf-show="1"]) {
  display: none !important;
  visibility: hidden !important;
  pointer-events: none !important;
}
#jf-lcars-home-square {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: var(--lcars-nav-sticky-top, 54px) !important;
  height: var(--lcars-nav-sticky-top, 54px) !important;
  box-sizing: border-box !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  border-bottom: 3px solid #000 !important;
  border-radius: 0 !important;
  z-index: 12095 !important;
  cursor: pointer !important;
  pointer-events: auto !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background-color: var(--orange-red) !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: 28px 28px !important;
}
#jf-lcars-home-square:hover,
#jf-lcars-home-square.jf-lcars-home-hot {
  background-color: var(--ghost-gray) !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: 28px 28px !important;
}

@media (max-width: 899px) {
  #jf-lcars-home-square {
    width: 45px !important;
    height: 45px !important;
    min-width: 45px !important;
    min-height: 45px !important;
    max-width: 45px !important;
    max-height: 45px !important;
    border-bottom: none !important;
    background-size: 24px 24px !important;
  }
  #jf-lcars-home-square:hover,
  #jf-lcars-home-square.jf-lcars-home-hot {
    background-size: 24px 24px !important;
  }
}

.dashboardDocument .MuiDrawer-paper .MuiCollapse-root {
  position: relative !important;
  
  background-color: #000 !important;
  background-image:
    linear-gradient(var(--primary-gray), var(--primary-gray)),
    linear-gradient(var(--ghost-gray), var(--ghost-gray)) !important;
  background-size: 8px calc(100% - 12px), 8px calc(100% - 12px) !important;
  background-position: 4px 6px, 16px 6px !important;
  background-repeat: no-repeat, no-repeat !important;
  display: block !important;
  padding: 4px 6px 8px 34px !important;
  margin: 0 0 6px 0 !important;
  box-sizing: border-box !important;
  overflow: visible !important;
}

.dashboardDocument .MuiDrawer-paper .MuiCollapse-root > .jf-lcars-sub-bar {
  
  display: none !important;
}
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root > .jf-lcars-sub-bar-a {
  margin: 0 2px 0 0 !important; 
  background: var(--primary-gray) !important;
  background-color: var(--primary-gray) !important;
}
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root > .jf-lcars-sub-bar-b {
  margin: 0 6px 0 2px !important; 
  background: var(--ghost-gray) !important;
  background-color: var(--ghost-gray) !important;
}
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root > .MuiCollapse-wrapper {
  width: 100% !important;
}
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root::before,
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root::after {
  content: none !important;
  display: none !important;
}
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiList-root {
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
}
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItem-root {
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
}

.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root a.MuiListItemButton-root {
  background: #000 !important;
  background-color: #000 !important;
  color: var(--ghost-gray) !important;
  border: 2px solid var(--ghost-gray) !important;
  border-radius: 0 !important;
  margin: 15px 0 15px 5px !important;
  width: 100% !important;
  min-height: 2.15rem !important;
  height: auto !important;
  padding: 0.35rem 0.55rem !important;
  justify-content: flex-end !important;
  align-items: center !important;
  filter: none !important;
  box-sizing: border-box !important;
  text-transform: uppercase !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  letter-spacing: 0.04em !important;
}
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root:hover,
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root a.MuiListItemButton-root:hover {
  background: #000 !important;
  background-color: #000 !important;
  color: var(--starlight) !important;
  border-color: var(--starlight) !important;
  filter: none !important;
}
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root.Mui-selected,
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root a.MuiListItemButton-root.Mui-selected {
  background: #000 !important;
  background-color: #000 !important;
  color: var(--pale-orange-red) !important;
  border: 2px solid var(--orange-red) !important;
  filter: none !important;
}
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root .MuiTypography-root,
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root .MuiSvgIcon-root,
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root .MuiListItemText-root,
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root .MuiListItemIcon-root,
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root a.MuiListItemButton-root * {
  color: var(--ghost-gray, #d2d5df) !important;
  fill: var(--ghost-gray, #d2d5df) !important;
  -webkit-text-fill-color: var(--ghost-gray, #d2d5df) !important;
  opacity: 1 !important;
  visibility: visible !important;
  text-align: right !important;
  font-size: 0.85rem !important;
}
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root.Mui-selected .MuiTypography-root,
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root.Mui-selected *,
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root a.MuiListItemButton-root.Mui-selected * {
  color: var(--pale-orange-red, #ff977b) !important;
  fill: var(--pale-orange-red, #ff977b) !important;
  -webkit-text-fill-color: var(--pale-orange-red, #ff977b) !important;
}
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root:hover .MuiTypography-root,
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root:hover * {
  color: var(--starlight, #f3f4f7) !important;
  fill: var(--starlight, #f3f4f7) !important;
  -webkit-text-fill-color: var(--starlight, #f3f4f7) !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"],
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].Mui-selected,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"].Mui-selected {
  --lcars-dash-fill: var(--primary-gray);
  
  --lcars-dash-arm: 30px;
  
  --lcars-dash-arm-len: 192px;
  --lcars-dash-curve: 60px;
  background: var(--primary-gray) !important;
  background-color: var(--primary-gray) !important;
  color: #000 !important;
  min-height: 10.8rem !important;
  height: 10.8rem !important;
  max-height: none !important;
  margin: 0 0 3px 0 !important;
  align-items: flex-end !important;
  justify-content: flex-end !important;
  padding: 0.75rem 0.65rem !important;
  box-shadow: none !important;
  position: relative !important;
  z-index: 20 !important;
  overflow: visible !important;
  isolation: isolate !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"] > *,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] > * {
  position: relative !important;
  z-index: 2 !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]::after,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]::after {
  content: "" !important;
  display: block !important;
  
  position: fixed !important;
  left: var(--lcars-dash-curve-left, auto) !important;
  top: var(--lcars-dash-row-top, 48px) !important;
  width: var(--lcars-dash-curve) !important;
  height: var(--lcars-dash-curve) !important;
  box-sizing: border-box !important;
  background: var(--lcars-dash-fill) !important;
  z-index: 12042 !important;
  background-color: var(--lcars-dash-fill) !important;
  border: none !important;
  border-radius: 0 !important;
  pointer-events: auto !important;
  
  z-index: 29 !important;
  -webkit-mask-image: radial-gradient(
    circle at 100% 100%,
    transparent 0,
    transparent calc(var(--lcars-dash-curve) - var(--lcars-dash-arm)),
    #000 calc(var(--lcars-dash-curve) - var(--lcars-dash-arm) + 1px)
  ) !important;
  mask-image: radial-gradient(
    circle at 100% 100%,
    transparent 0,
    transparent calc(var(--lcars-dash-curve) - var(--lcars-dash-arm)),
    #000 calc(var(--lcars-dash-curve) - var(--lcars-dash-arm) + 1px)
  ) !important;
  -webkit-mask-repeat: no-repeat !important;
  mask-repeat: no-repeat !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]::before,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]::before {
  content: "" !important;
  display: block !important;
  position: fixed !important;
  left: var(--lcars-dash-arm-left, 0) !important;
  top: var(--lcars-dash-row-top, 48px) !important;
  
  width: var(--lcars-dash-arm-len) !important;
  height: var(--lcars-dash-arm) !important;
  background: var(--lcars-dash-fill) !important;
  background-color: var(--lcars-dash-fill) !important;
  border: none !important;
  border-radius: 0 !important;
  pointer-events: auto !important;
  
  z-index: 30 !important;
  box-sizing: border-box !important;
  cursor: pointer !important;
}

.dashboardDocument .jf-lcars-top-runner .jf-lcars-seg-a {
  flex: 0 0 96px !important;
  background: var(--primary-gray) !important;
  background-color: var(--primary-gray) !important;
  opacity: 1 !important;
  pointer-events: none !important; 
  border-right: var(--lcars-bar-gap, 8px) solid #000 !important;
  min-height: 100% !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"] .jf-lcars-dash-arm-hit,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] .jf-lcars-dash-arm-hit {
  position: fixed !important;
  left: var(--lcars-dash-arm-left, 0) !important;
  top: var(--lcars-dash-row-top, 48px) !important;
  width: var(--lcars-dash-arm-len, 192px) !important;
  height: var(--lcars-dash-arm, 30px) !important;
  background: var(--lcars-dash-fill, var(--primary-gray)) !important;
  display: block !important;
  z-index: 12061 !important;
  pointer-events: auto !important;
  cursor: pointer !important;
}
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"] .jf-lcars-dash-curve-hit,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] .jf-lcars-dash-curve-hit {
  position: fixed !important;
  left: var(--lcars-dash-curve-left, 0) !important;
  top: var(--lcars-dash-row-top, 48px) !important;
  width: var(--lcars-dash-curve, 80px) !important;
  height: var(--lcars-dash-curve, 80px) !important;
  background: var(--lcars-dash-fill, var(--primary-gray)) !important;
  display: block !important;
  z-index: 12060 !important;
  pointer-events: auto !important;
  cursor: pointer !important;
  -webkit-mask-image: radial-gradient(
    circle at 100% 100%,
    transparent 0,
    transparent calc(var(--lcars-dash-curve, 80px) - var(--lcars-dash-arm, 30px)),
    #000 calc(var(--lcars-dash-curve, 80px) - var(--lcars-dash-arm, 30px) + 1px)
  ) !important;
  mask-image: radial-gradient(
    circle at 100% 100%,
    transparent 0,
    transparent calc(var(--lcars-dash-curve, 80px) - var(--lcars-dash-arm, 30px)),
    #000 calc(var(--lcars-dash-curve, 80px) - var(--lcars-dash-arm, 30px) + 1px)
  ) !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].jf-lcars-has-arm::before,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"].jf-lcars-has-arm::before,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].jf-lcars-has-arm::after,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"].jf-lcars-has-arm::after {
  opacity: 0 !important;
  pointer-events: none !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]:hover,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]:hover {
  --lcars-dash-fill: var(--ghost-gray);
  filter: none !important;
  background: var(--ghost-gray) !important;
  background-color: var(--ghost-gray) !important;
}
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].Mui-selected,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"].Mui-selected,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]:active,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]:active {
  --lcars-dash-fill: var(--primary-gray);
  background: var(--medium-dark-gray) !important;
  background-color: var(--medium-dark-gray) !important;
  color: #000 !important;
  filter: none !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root:not([href="#/dashboard"]):not([href="#/dashboard/"])::before,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root:not([href="#/dashboard"]):not([href="#/dashboard/"])::after,
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root:not([href="#/dashboard"]):not([href="#/dashboard/"])::before,
.dashboardDocument .MuiDrawer-paper .MuiListItemButton-root:not([href="#/dashboard"]):not([href="#/dashboard/"])::after {
  content: none !important;
  display: none !important;
  border: none !important;
  background: none !important;
  width: 0 !important;
  height: 0 !important;
  -webkit-mask-image: none !important;
  mask-image: none !important;
}

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
  background-color: #000 !important;
  background-image: none !important;
  box-shadow: none !important;
  min-height: 48px !important;
  padding-bottom: 9px;
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

.dashboardDocument main .MuiPaper-root:not(.MuiCard-root),
.dashboardDocument .content-primary .MuiPaper-root:not(.MuiCard-root) {
  background: #000 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  border: none !important;
  position: relative !important;
  overflow: visible !important;
}

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

.dashboardDocument .serverLogs,
.dashboardDocument .readOnlyContent,
.dashboardDocument .serverLogs.readOnlyContent,
.dashboardDocument .content-primary .serverLogs,
.dashboardDocument .content-primary .readOnlyContent {
  margin-right: 1.5rem !important;
  padding-right: 1rem !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}
.dashboardDocument .serverLogs .MuiList-root,
.dashboardDocument .readOnlyContent .MuiList-root {
  margin-right: 0 !important;
  padding-right: 1rem !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.dashboardDocument main .MuiList-root,
.dashboardDocument .content-primary .MuiList-root {
  position: relative !important;
  margin: 0 1.25rem 1rem 0 !important;
  padding: 10px 1rem 10px 18px !important;
  background: #000 !important;
  border-left: 12px solid var(--primary-gray) !important;
  border-bottom: 8px solid var(--primary-gray) !important;
  border-bottom-left-radius: 24px !important;
  box-sizing: border-box !important;
  max-width: 100% !important;
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

.dashboardDocument main .MuiCard-root,
.dashboardDocument main [class*="stat"] {
  background: #000 !important;
}

.dashboardDocument main .MuiTypography-h4,
.dashboardDocument main .MuiTypography-h5 {
  font-family: var(--lcars-font) !important;
  color: var(--orange-red) !important;
  font-weight: 700 !important;
}

.dashboardDocument main .MuiTypography-overline,
.dashboardDocument main a[class*="section"] {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  color: var(--pale-orange-red) !important;
  font-weight: 700 !important;
}

.dashboardDocument main .MuiCardContent-root {
  border-color: var(--medium-dark-gray) !important;
}

.dashboardDocument main .MuiAvatar-root,
.dashboardDocument main [class*="Avatar"] {
  background: var(--blue) !important;
  color: #000 !important;
}

.dashboardDocument .content-primary a.MuiListItemButton-root,
.dashboardDocument .content-primary .MuiListItemButton-root {
  display: flex !important;
  align-items: flex-start !important;
  gap: 0.75rem !important;
  column-gap: 0.75rem !important;
}
.dashboardDocument .content-primary .MuiListItemAvatar-root {
  margin-right: 0 !important; 
  margin-top: 0.15rem !important;
  min-width: 0 !important;
  flex-shrink: 0 !important;
}
.dashboardDocument .content-primary .MuiListItemText-root {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  flex: 1 1 auto !important;
  min-width: 0 !important;
}
.dashboardDocument .content-primary .MuiListItemText-root .MuiStack-root {
  margin-top: 0.2rem !important;
  gap: 0.1rem !important;
}

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
  display: none !important; 
}

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

.videoOsdBottom .sliderMarker {
  background: var(--ghost-gray) !important;
  width: 2px !important;
}
.videoOsdBottom .sliderMarker.watched {
  background: var(--orange-red) !important;
}

.osdVolumeSliderContainer .mdl-slider-background-lower {
  background: var(--blue) !important;
  border-radius: 999px !important;
}
.osdVolumeSliderContainer .mdl-slider-background-upper {
  background: var(--medium-dark-gray) !important;
  border-radius: 999px !important;
}

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

.card.overflowBackdropCard .cardScalable,
.card[data-type="CollectionFolder"] .cardScalable,
.card[data-type="UserView"] .cardScalable,
.card[data-type="Folder"] .cardScalable,
.card[data-collectiontype] .cardScalable {
  position: relative !important;
  border-radius: 0 !important;
  margin-left: 22px !important;
  width: calc(100% - 22px) !important;
  overflow: hidden !important;
  background: var(--dark-gray) !important;
}

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

.card.overflowBackdropCard .cardText-first,
.card[data-type="CollectionFolder"] .cardText-first,
.card[data-type="UserView"] .cardText-first,
.card[data-collectiontype] .cardText-first,
.card.overflowBackdropCard .cardTextCentered.cardText-first,
.card .cardText-first .textActionButton {
  display: none !important;
}

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
  background: var(--lcars-sublabels) !important;
  color: var(--lcars-text-secondary) !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  font-size: 0.8rem !important;
  text-align: left !important;
}

@media (max-width: 549.98px) {
  .itemsContainer .card.portraitCard,
  .itemsContainer .card.overflowPortraitCard,
  .itemsContainer .card[data-type="Movie"],
  .itemsContainer .card[data-type="Episode"],
  .itemsContainer .card[data-type="Series"],
  .itemsContainer .card[data-type="Video"],
  .vertical-wrap .card.portraitCard,
  .vertical-wrap .card.overflowPortraitCard,
  .vertical-wrap .card[data-type="Movie"] {
    width: 50% !important;
    max-width: 50% !important;
    min-width: 50% !important;
    flex: 0 0 50% !important;
    flex-basis: 50% !important;
    box-sizing: border-box !important;
  }
  .itemsContainer .card.portraitCard .cardBox,
  .itemsContainer .card.overflowPortraitCard .cardBox,
  .itemsContainer .card[data-type="Movie"] .cardBox,
  .vertical-wrap .card.portraitCard .cardBox,
  .vertical-wrap .card.overflowPortraitCard .cardBox {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
}

@media (max-width: 399.98px) {
  .itemsContainer .card.portraitCard,
  .itemsContainer .card.overflowPortraitCard,
  .itemsContainer .card[data-type="Movie"],
  .itemsContainer .card[data-type="Episode"],
  .itemsContainer .card[data-type="Series"],
  .itemsContainer .card[data-type="Video"],
  .itemsContainer .card.card-hoverable,
  .vertical-wrap .card.portraitCard,
  .vertical-wrap .card.overflowPortraitCard,
  .vertical-wrap .card[data-type="Movie"],
  .vertical-wrap .card.card-hoverable {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    flex: 0 0 100% !important;
    flex-basis: 100% !important;
    box-sizing: border-box !important;
  }
  .itemsContainer .card.portraitCard .cardBox,
  .itemsContainer .card.overflowPortraitCard .cardBox,
  .itemsContainer .card[data-type="Movie"] .cardBox,
  .itemsContainer .card.card-hoverable .cardBox,
  .vertical-wrap .card.portraitCard .cardBox,
  .vertical-wrap .card.overflowPortraitCard .cardBox,
  .vertical-wrap .card.card-hoverable .cardBox {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
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
  background: var(--orange-red) !important;
  height: 100% !important;
}

.jf-lcars-active .card .cardBox,
.jf-lcars-active .card .cardScalable,
.jf-lcars-active .card .cardContent,
.jf-lcars-active .card .cardImageContainer,
.jf-lcars-active .card .cardPadder,
.jf-lcars-active .card .coveredImage,
.jf-lcars-active .card .cardOverlayContainer,
.jf-lcars-active .card img {
  border-radius: 0 !important;
}
.jf-lcars-active .card .cardScalable {
  margin-left: 22px !important;
  width: calc(100% - 22px) !important;
  max-width: calc(100% - 22px) !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
}
.jf-lcars-active .card .cardImageContainer,
.jf-lcars-active .card .cardImageContainer img,
.jf-lcars-active .card .cardContent img {
  width: 100% !important;
  max-width: 100% !important;
  border-radius: 0 !important;
  object-fit: cover !important;
}
.jf-lcars-active .card .cardText-secondary {
  margin-left: 22px !important;
  margin-right: 0 !important;
  width: calc(100% - 22px) !important;
  max-width: calc(100% - 22px) !important;
  box-sizing: border-box !important;
  border-radius: 0 !important;
}

.card[data-type="BoxSet"] .cardBox,
.card[data-type="BoxSet"] .cardScalable,
.card .cardPadder-portrait {
  border-radius: 0 !important;
}
.card[data-type="BoxSet"] .cardScalable {
  margin-left: 22px !important;
  width: calc(100% - 22px) !important;
}
.card[data-type="BoxSet"] .cardText-secondary {
  margin-left: 22px !important;
  width: calc(100% - 22px) !important;
  max-width: calc(100% - 22px) !important;
}

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

@media (max-width: 749.98px) {
  .card button[data-action="menu"],
  .card .cardOverlayButton[data-action="menu"],
  .card .cardOverlayButton-br button[data-action="menu"],
  .card .cardOverlayButton-br .cardOverlayButton:last-child,
  .card .MuiIconButton-root:has([data-testid="MoreVertIcon"]),
  .cardBox .MuiIconButton-root:has([data-testid="MoreVertIcon"]),
  .cardBox button[data-action="menu"],
  .MuiCard-root .MuiIconButton-root:has([data-testid="MoreVertIcon"]),
  .itemsContainer .MuiIconButton-root:has([data-testid="MoreVertIcon"]),
  .vertical-wrap .MuiIconButton-root:has([data-testid="MoreVertIcon"]) {
    margin-right: 10px !important;
  }
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

.localUsers .card.squareCard,
.localUsers .card.squareCard-scalable {
  width: 10.5em !important;
  max-width: 10.5em !important;
  margin: 0 !important;
}
.localUsers .cardBox.visualCardBox {
  background: #000 !important;
  border: 3px solid var(--lcars-info-bright, var(--bright-blue)) !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  overflow: hidden !important;
  position: relative !important;
}
.localUsers .cardBox.visualCardBox {
  display: flex !important;
  flex-direction: column !important;
}
.localUsers .cardScalable.visualCardBox-cardScalable {
  background: var(--dark-gray) !important;
  border-radius: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  position: relative !important;
  flex: 0 0 auto !important;
}
.localUsers .cardPadder,
.localUsers .cardPadder-square {
  margin: 0 !important;
}

.localUsers .cardContent,
.localUsers a.cardContent.emby-button,
.localUsers a.cardContent {
  position: absolute !important;
  left: 0 !important;
  right: 0 !important;
  top: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}
.localUsers .cardImage,
.localUsers .defaultCardBackground,
.localUsers .defaultCardBackground2 {
  background: var(--dark-gray) !important;
  background-color: var(--dark-gray) !important;
  background-image: none !important;
  border-radius: 0 !important;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  left: 0 !important;
  right: 0 !important;
  top: 0 !important;
  bottom: 0 !important;
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
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

.cardOverlayButton-br {
  display: flex !important;
  flex-direction: row !important;
  align-items: stretch !important;
  gap: 4px !important;
  padding: 0 !important;
  margin: 0 !important;
}

.cardOverlayButton-br .cardOverlayButton,
.cardOverlayButton-br button.cardOverlayButton,
.cardOverlayContainer .cardOverlayButton.cardOverlayButton-hover {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-sizing: border-box !important;
  width: 2.25rem !important;
  height: 2.25rem !important;
  min-width: 2.25rem !important;
  min-height: 2.25rem !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  background: var(--primary-gray) !important;
  color: #000 !important;
  opacity: 1 !important;
}

.cardOverlayButton-br .cardOverlayButton:nth-child(1),
.cardOverlayButton-br button.emby-playstatebutton {
  background: var(--ghost-gray) !important;
  color: #000 !important;
}

.cardOverlayButton-br .cardOverlayButton:nth-child(2),
.cardOverlayButton-br button.emby-ratingbutton {
  background: var(--primary-gray) !important;
  color: #000 !important;
}

.cardOverlayButton-br .cardOverlayButton:nth-child(3),
.cardOverlayButton-br button[data-action="menu"] {
  background: var(--medium-dark-gray) !important;
  color: var(--starlight) !important;
}

.cardOverlayButton-br .cardOverlayButton:hover,
.cardOverlayButton-br .cardOverlayButton.cardOverlayButton-hover:hover {
  filter: brightness(var(--lcars-hover-brighten));
  opacity: 1 !important;
}

.cardOverlayButton-br .cardOverlayButtonIcon,
.cardOverlayButton-br .material-icons.cardOverlayButtonIcon {
  font-size: 1.15rem !important;
  opacity: 1 !important;
}

.cardOverlayButton-br .cardOverlayButton:not([data-isfavorite="true"]) .cardOverlayButtonIcon,
.cardOverlayButton-br .cardOverlayButton:not([data-isfavorite="true"]) .material-icons {
  color: inherit !important;
}

.cardOverlayButton-br button.emby-playstatebutton[data-played="true"],
.cardOverlayButton-br .playstatebutton-icon-played {
  background: var(--orange-red) !important;
  color: #000 !important;
}

.cardOverlayButton-br button.emby-ratingbutton[data-isfavorite="true"],
.cardOverlayButton-br button.emby-ratingbutton[dataisfavorite="true"],
.cardOverlayContainer button.emby-ratingbutton[data-isfavorite="true"],
button.cardOverlayButton.emby-ratingbutton[data-isfavorite="true"] {
  background: var(--primary-gray) !important;
  color: var(--lcars-alert-soft) !important;
}

.cardOverlayButton-br button.emby-ratingbutton[data-isfavorite="true"] .cardOverlayButtonIcon,
.cardOverlayButton-br button.emby-ratingbutton[data-isfavorite="true"] .cardOverlayButtonIcon-hover,
.cardOverlayButton-br button.emby-ratingbutton[data-isfavorite="true"] .material-icons,
.cardOverlayButton-br button.emby-ratingbutton[data-isfavorite="true"] .material-icons.favorite,
.cardOverlayButton-br button.emby-ratingbutton[data-isfavorite="true"] span,
.cardOverlayButton-br button.emby-ratingbutton[dataisfavorite="true"] .material-icons,
.cardOverlayButton-br button.emby-ratingbutton[dataisfavorite="true"] span,
.cardOverlayContainer button.emby-ratingbutton[data-isfavorite="true"] .material-icons,
.cardOverlayContainer button.emby-ratingbutton[data-isfavorite="true"] span,
button.emby-ratingbutton[data-isfavorite="true"] .material-icons.favorite,
button.emby-ratingbutton[data-isfavorite="true"] .cardOverlayButtonIcon {
  color: var(--lcars-alert-soft) !important;
  fill: var(--lcars-alert-soft) !important;
  -webkit-text-fill-color: var(--lcars-alert-soft) !important;
}

.listPaging,
.paging .listPaging {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  color: var(--ghost-gray) !important;
}
.listPaging span {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  color: var(--ghost-gray) !important;
  font-size: 0.85rem !important;
  vertical-align: middle !important;
}

.btnPreviousPage,
.btnNextPage,
.btnPlayAll,
.btnShuffle,
.btnSelectView,
.btnSort,
.btnFilter,
.btnFilter-wrapper .btnFilter,
button.btnPreviousPage.paper-icon-button-light,
button.btnNextPage.paper-icon-button-light,
button.btnPlayAll.paper-icon-button-light,
button.btnShuffle.paper-icon-button-light,
button.btnSelectView.paper-icon-button-light,
button.btnSort.paper-icon-button-light,
button.btnFilter.paper-icon-button-light {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-sizing: border-box !important;
  width: 2.75rem !important;
  height: 2.75rem !important;
  min-width: 2.75rem !important;
  min-height: 2.75rem !important;
  margin: 0 4px !important;
  padding: 0 !important;
  border-radius: 0rem !important;
  border: 2px solid var(--light-gray) !important;
  box-shadow: none !important;
  background: #000 !important;
  background-color: #000 !important;
  color: var(--ghost-gray) !important;
  opacity: 1 !important;
  overflow: visible !important;
}

.btnPreviousPage .material-icons,
.btnNextPage .material-icons,
.btnPlayAll .material-icons,
.btnShuffle .material-icons,
.btnSelectView .material-icons,
.btnSort .material-icons,
.btnFilter .material-icons,
button.btnPreviousPage .material-icons,
button.btnNextPage .material-icons,
button.btnPlayAll .material-icons,
button.btnShuffle .material-icons,
button.btnSelectView .material-icons,
button.btnSort .material-icons,
button.btnFilter .material-icons {
  font-family: "Material Icons", "MaterialIcons", sans-serif !important;
  font-weight: normal !important;
  font-style: normal !important;
  font-size: 1.35rem !important;
  line-height: 1 !important;
  letter-spacing: normal !important;
  text-transform: none !important;
  display: inline-block !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  direction: ltr !important;
  color: var(--ghost-gray) !important;
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
  opacity: 1 !important;
  visibility: visible !important;
  width: auto !important;
  height: auto !important;
  speak: none !important;
}

.btnPreviousPage:hover,
.btnNextPage:hover,
.btnPlayAll:hover,
.btnShuffle:hover,
.btnSelectView:hover,
.btnSort:hover,
.btnFilter:hover {
  border-color: var(--ghost-gray) !important;
  color: var(--starlight) !important;
  background: #000 !important;
  filter: none !important;
  opacity: 1 !important;
}
.btnPreviousPage:hover .material-icons,
.btnNextPage:hover .material-icons,
.btnPlayAll:hover .material-icons,
.btnShuffle:hover .material-icons,
.btnSelectView:hover .material-icons,
.btnSort:hover .material-icons,
.btnFilter:hover .material-icons {
  color: var(--starlight) !important;
}

.btnPreviousPage[disabled],
.btnNextPage[disabled],
.btnPreviousPage:disabled,
.btnNextPage:disabled {
  opacity: 0.4 !important;
  border-color: var(--medium-dark-gray) !important;
  cursor: default !important;
}
.btnPreviousPage[disabled] .material-icons,
.btnNextPage[disabled] .material-icons,
.btnPreviousPage:disabled .material-icons,
.btnNextPage:disabled .material-icons {
  color: var(--medium-dark-gray) !important;
  opacity: 1 !important;
}

.flex.align-items-center.justify-content-center.flex-wrap-wrap.padded-top.padded-left.padded-right.padded-bottom.focuscontainer-x {
  gap: 4px !important;
}

.MuiTableContainer-root,
.tableContainer,
.detailTableContainer {
  background: #000 !important;
  border: none !important;
  box-shadow: none !important;
  padding: 6px !important;
  overflow-x: auto !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.MuiTable-root,
table.MuiTable-root,
.MuiTableContainer-root > table,
table {
  border-collapse: separate !important;
  border-spacing: 4px 4px !important;
  background: #000 !important;
  width: 100% !important;
  max-width: 100% !important;
  table-layout: auto !important;
  box-sizing: border-box !important;
}

.MuiTableHead-root .MuiTableCell-head.MuiTableCell-stickyHeader {
     margin: 2px;
}

.MuiTableBody-root .MuiTableCell-body, table tbody td {
     margin: 2px;
}

.MuiTable-root .MuiTableCell-root,
.MuiTable-root td,
.MuiTable-root th {
  border-width: 0 !important;
  border-style: none !important;
  border-color: transparent !important;
  border-bottom: none !important;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
}

.MuiTable-root .MuiDivider-root,
.MuiTable-root .Mui-TableHeadCell-ResizeHandle-Divider {
  display: none !important;
}

.MuiTableHead-root .MuiTableCell-head,
.MuiTable-root thead th,
table thead th {
  background: var(--blue) !important;
  color: #000 !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  font-size: 0.85rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  padding: 10px 12px !important;
  vertical-align: middle !important;
  white-space: nowrap !important;
  height: auto !important;
  line-height: 1.2 !important;
}

.MuiTableHead-root .MuiTableCell-head:nth-child(6n+1),
table thead th:nth-child(6n+1) { background: var(--blue) !important; color: #000 !important; }
.MuiTableHead-root .MuiTableCell-head:nth-child(6n+2),
table thead th:nth-child(6n+2) { background: var(--bright-blue) !important; color: #000 !important; }
.MuiTableHead-root .MuiTableCell-head:nth-child(6n+3),
table thead th:nth-child(6n+3) { background: var(--medium-dark-blue) !important; color: var(--starlight) !important; }
.MuiTableHead-root .MuiTableCell-head:nth-child(6n+4),
table thead th:nth-child(6n+4) { background: var(--ghost-gray) !important; color: #000 !important; }
.MuiTableHead-root .MuiTableCell-head:nth-child(6n+5),
table thead th:nth-child(6n+5) { background: var(--dark-blue) !important; color: var(--starlight) !important; }
.MuiTableHead-root .MuiTableCell-head:nth-child(6n+6),
table thead th:nth-child(6n+6) { background: var(--starlight) !important; color: #000 !important; }

.MuiTableHead-root .MuiTableCell-head .MuiTypography-root,
.MuiTableHead-root .MuiTableCell-head .Mui-TableHeadCell-Content-Wrapper,
.MuiTableHead-root .MuiTableCell-head .MuiBox-root {
  color: inherit !important;
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  font-weight: 700 !important;
}

.MuiTableHead-root .MuiTableCell-head .MuiSvgIcon-root,
.MuiTableHead-root .MuiTableCell-head .MuiIconButton-root,
.MuiTableHead-root .MuiTableCell-head .MuiIconButton-root .MuiSvgIcon-root,
.MuiTableHead-root .MuiTableSortLabel-root,
.MuiTableHead-root .MuiTableSortLabel-icon,
.MuiTableHead-root .MuiTableSortLabel-iconDirectionAsc,
.MuiTableHead-root .MuiTableSortLabel-iconDirectionDesc,
.MuiTableHead-root .MuiTableSortLabel-root:not(.Mui-active) .MuiTableSortLabel-icon,
.MuiTableHead-root .MuiTableSortLabel-root.Mui-active .MuiTableSortLabel-icon,
.MuiTableHead-root .MuiIconButton-root[aria-label="Column Actions"],
.MuiTableHead-root .MuiIconButton-root[aria-label="Column Actions"] .MuiSvgIcon-root,
.MuiTableHead-root .MuiBadge-root,
.MuiTableHead-root .Mui-TableHeadCell-Content-Actions {
  color: var(--ghost-gray, #d2d5df) !important;
  fill: var(--ghost-gray, #d2d5df) !important;
  opacity: 1 !important;
  visibility: visible !important;
}
.MuiTableHead-root .MuiTableCell-head .MuiIconButton-root:hover,
.MuiTableHead-root .MuiTableCell-head .MuiIconButton-root:hover .MuiSvgIcon-root,
.MuiTableHead-root .MuiTableSortLabel-root:hover,
.MuiTableHead-root .MuiTableSortLabel-root:hover .MuiTableSortLabel-icon,
.MuiTableHead-root .MuiIconButton-root[aria-label="Column Actions"]:hover,
.MuiTableHead-root .MuiIconButton-root[aria-label="Column Actions"]:hover .MuiSvgIcon-root {
  color: var(--ghost-gray, #d2d5df) !important;
  fill: var(--ghost-gray, #d2d5df) !important;
  opacity: 1 !important;
}

.MuiTableHead-root .MuiTableRow-head,
.MuiTable-root thead tr {
  background: transparent !important;
}

.MuiTableCell-stickyHeader {
  background-clip: padding-box !important;
  opacity: 1 !important;
}
.MuiTableHead-root .MuiTableCell-head.MuiTableCell-stickyHeader:nth-child(6n+1) { background: var(--blue) !important; }
.MuiTableHead-root .MuiTableCell-head.MuiTableCell-stickyHeader:nth-child(6n+2) { background: var(--bright-blue) !important; }
.MuiTableHead-root .MuiTableCell-head.MuiTableCell-stickyHeader:nth-child(6n+3) { background: var(--medium-dark-blue) !important; }
.MuiTableHead-root .MuiTableCell-head.MuiTableCell-stickyHeader:nth-child(6n+4) { background: var(--ghost-gray) !important; }
.MuiTableHead-root .MuiTableCell-head.MuiTableCell-stickyHeader:nth-child(6n+5) { background: var(--dark-blue) !important; }
.MuiTableHead-root .MuiTableCell-head.MuiTableCell-stickyHeader:nth-child(6n+6) { background: var(--starlight) !important; }

.MuiTableBody-root .MuiTableCell-body,
.MuiTable-root tbody td,
table tbody td {
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  padding: 10px 12px !important;
  font-family: var(--lcars-font) !important;
  font-size: 0.8rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
  vertical-align: middle !important;
  color: #000 !important;
  height: auto !important;
  line-height: 1.25 !important;
  background-clip: padding-box !important;
}

.MuiTableBody-root .MuiTableCell-body:nth-child(6n+1),
table tbody td:nth-child(6n+1) {
  background: var(--medium-dark-blue) !important;
  color: var(--starlight) !important;
}
.MuiTableBody-root .MuiTableCell-body:nth-child(6n+2),
table tbody td:nth-child(6n+2) {
  background: var(--blue) !important;
  color: #000 !important;
}
.MuiTableBody-root .MuiTableCell-body:nth-child(6n+3),
table tbody td:nth-child(6n+3) {
  background: var(--bright-blue) !important;
  color: #000 !important;
}
.MuiTableBody-root .MuiTableCell-body:nth-child(6n+4),
table tbody td:nth-child(6n+4) {
  background: var(--ghost-gray) !important;
  color: #000 !important;
}
.MuiTableBody-root .MuiTableCell-body:nth-child(6n+5),
table tbody td:nth-child(6n+5) {
  background: var(--dark-blue) !important;
  color: var(--starlight) !important;
}
.MuiTableBody-root .MuiTableCell-body:nth-child(6n+6),
table tbody td:nth-child(6n+6) {
  background: var(--starlight) !important;
  color: #000 !important;
}

.MuiTableBody-root .MuiTableRow-root:hover .MuiTableCell-body {
  filter: brightness(1.06);
}

.MuiTableBody-root .MuiTableRow-root,
.MuiTable-root tbody tr {
  background: transparent !important;
}

.MuiTableBody-root .MuiTableCell-body a,
.MuiTableBody-root .MuiTableCell-body .MuiTypography-root {
  color: inherit !important;
}
.MuiTableBody-root .MuiTableCell-body .MuiSvgIcon-root,
.MuiTableBody-root .MuiTableCell-body .MuiIconButton-root {
  color: inherit !important;
}

.MuiTableBody-root .MuiTableCell-body .MuiAvatar-root {
  width: 28px !important;
  height: 28px !important;
  margin-right: 8px !important;
}
.MuiTableBody-root .MuiTableCell-body .MuiBox-root {
  display: inline-flex !important;
  align-items: center !important;
  gap: 4px !important;
  vertical-align: middle !important;
}

.dashboardDocument .MuiTable-root,
.dashboardDocument table.MuiTable-root {
  --col-Severity-size: 130 !important;
  --header-Severity-size: 130 !important;
  --col-User-size: 110 !important;
  --header-User-size: 110 !important;
}
.dashboardDocument .MuiTable-root th[data-index="1"],
.dashboardDocument .MuiTable-root td[data-index="1"] {
  width: calc(var(--col-Severity-size, 130) * 1px) !important;
  min-width: calc(var(--col-Severity-size, 130) * 1px) !important;
  max-width: none !important;
}
.dashboardDocument .MuiTable-root td[data-index="1"] .MuiChip-root,
.dashboardDocument .MuiTable-root td[data-index="1"] .MuiChip-label {
  max-width: none !important;
  overflow: visible !important;
  text-overflow: clip !important;
  white-space: nowrap !important;
}

.dashboardDocument .MuiTable-root th[data-index="2"],
.dashboardDocument .MuiTable-root td[data-index="2"] {
  width: calc(var(--col-User-size, 110) * 1px) !important;
  min-width: calc(var(--col-User-size, 110) * 1px) !important;
  max-width: none !important;
  text-align: center !important;
}
.dashboardDocument .MuiTable-root th[data-index="2"] .Mui-TableHeadCell-Content-Wrapper {
  overflow: visible !important;
  text-overflow: clip !important;
  white-space: nowrap !important;
}
.dashboardDocument .MuiTable-root td[data-index="2"] {
  vertical-align: middle !important;
}
.dashboardDocument .MuiTable-root td[data-index="2"] .MuiIconButton-root,
.dashboardDocument .MuiTable-root td[data-index="2"] .MuiAvatar-root {
  margin: 0 auto !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.dashboardDocument .MuiTable-root td[data-index="2"] .MuiIconButton-root {
  width: 100% !important;
}

.MuiTablePagination-root,
.MuiTableContainer-root + .MuiBox-root {
  color: var(--ghost-gray) !important;
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  background: #000 !important;
  position: relative !important;
  bottom: 7px !important;
  margin-top: 0.5rem !important;
}

.MuiTablePagination-root .MuiInputBase-root,
.MuiTablePagination-root .MuiInput-root,
.MuiTablePagination-root .MuiInput-underline,
.MuiTablePagination-root .MuiSelect-root,
.MuiTablePagination-root .MuiInputBase-root.MuiSelect-root {
  margin-top: 0 !important;
}

.MuiBox-root:has(> .MuiIconButton-root[aria-label="Show/Hide filters"]),
.MuiBox-root:has(> .MuiIconButton-root[aria-label="Show/Hide columns"]),
.MuiBox-root:has(> .MuiIconButton-root[aria-label="Toggle density"]),
.MuiBox-root:has(> .MuiIconButton-root[aria-label="Toggle full screen"]) {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
}
.MuiIconButton-root[aria-label="Show/Hide filters"],
.MuiIconButton-root[aria-label="Show/Hide columns"],
.MuiIconButton-root[aria-label="Toggle density"],
.MuiIconButton-root[aria-label="Toggle full screen"] {
  margin: 0 !important;
}

.MuiTablePagination-root {
  overflow: visible !important;
  padding-bottom: 4px !important;
}
.MuiTablePagination-root .MuiIconButton-root,
.MuiTablePagination-root button.MuiIconButton-root,
.MuiTablePagination-root button[aria-label="Go to first page"],
.MuiTablePagination-root button[aria-label="Go to previous page"],
.MuiTablePagination-root button[aria-label="Go to next page"],
.MuiTablePagination-root button[aria-label="Go to last page"] {
  box-sizing: border-box !important;
  border-style: solid !important;
  border-width: 1px !important;
  border-color: var(--ghost-gray, #d2d5df) !important;
  border-top-color: var(--ghost-gray, #d2d5df) !important;
  border-right-color: var(--ghost-gray, #d2d5df) !important;
  border-bottom-color: var(--ghost-gray, #d2d5df) !important;
  border-left-color: var(--ghost-gray, #d2d5df) !important;
  border-radius: 0 !important;
  
  box-shadow: 0 0 0 1px var(--ghost-gray, #d2d5df) !important;
  outline: none !important;
  overflow: visible !important;
  margin: 0 !important;
  background: #000 !important;
  color: var(--ghost-gray, #d2d5df) !important;
}
.MuiTablePagination-root .MuiBox-root:has(> span > .MuiIconButton-root),
.MuiTablePagination-root .MuiBox-root:has(> .MuiIconButton-root) {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  overflow: visible !important;
}
.MuiTablePagination-root .MuiBox-root:has(> span > .MuiIconButton-root) > span {
  margin: 0 !important;
  display: inline-flex !important;
  overflow: visible !important;
}
.MuiTablePagination-root .MuiBox-root:has(> span > .MuiIconButton-root) > span .MuiIconButton-root {
  margin: 0 !important;
}

button.MuiIconButton-root[aria-label="Back"],
button.MuiIconButton-root[aria-label="back"],
button.MuiIconButton-root[aria-label="Forward"],
button.MuiIconButton-root[aria-label="forward"],
button.MuiIconButton-root[aria-label="Go back"],
button.MuiIconButton-root[aria-label="Go forward"],
button.MuiIconButton-root.MuiIconButton-edgeStart[aria-label="Back"],
button.MuiButtonBase-root.MuiIconButton-root[aria-label="Back"],
button.MuiButtonBase-root.MuiIconButton-root[aria-label="Forward"],
button.MuiIconButton-root:has([data-testid="ArrowBackIcon"]),
button.MuiIconButton-root:has([data-testid="ArrowForwardIcon"]),
button.MuiIconButton-root:has([data-testid="ArrowBackIosIcon"]),
button.MuiIconButton-root:has([data-testid="ArrowForwardIosIcon"]) {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-sizing: border-box !important;
  width: 2.5rem !important;
  height: 2.5rem !important;
  min-width: 2.5rem !important;
  min-height: 2.5rem !important;
  margin: 0 4px !important;
  padding: 0 !important;
  border-radius: 0 !important;
  border: 2px solid var(--light-gray) !important;
  box-shadow: none !important;
  background: #000 !important;
  background-color: #000 !important;
  color: var(--ghost-gray) !important;
  opacity: 1 !important;
}

button.MuiIconButton-root[aria-label="Back"] .MuiSvgIcon-root,
button.MuiIconButton-root[aria-label="Back"] svg,
button.MuiIconButton-root[aria-label="Forward"] .MuiSvgIcon-root,
button.MuiIconButton-root[aria-label="Forward"] svg,
button.MuiIconButton-root[aria-label="back"] svg,
button.MuiIconButton-root[aria-label="forward"] svg,
button.MuiIconButton-root[aria-label="Go back"] svg,
button.MuiIconButton-root[aria-label="Go forward"] svg,
button.MuiIconButton-root:has([data-testid="ArrowBackIcon"]) svg,
button.MuiIconButton-root:has([data-testid="ArrowForwardIcon"]) svg {
  color: var(--ghost-gray) !important;
  fill: var(--ghost-gray) !important;
  font-size: 1.35rem !important;
  width: 1.35rem !important;
  height: 1.35rem !important;
}

button.MuiIconButton-root[aria-label="Back"]:hover,
button.MuiIconButton-root[aria-label="Forward"]:hover,
button.MuiIconButton-root[aria-label="back"]:hover,
button.MuiIconButton-root[aria-label="forward"]:hover,
button.MuiIconButton-root[aria-label="Go back"]:hover,
button.MuiIconButton-root[aria-label="Go forward"]:hover,
button.MuiIconButton-root:has([data-testid="ArrowBackIcon"]):hover,
button.MuiIconButton-root:has([data-testid="ArrowForwardIcon"]):hover {
  border-color: var(--ghost-gray) !important;
  background: #000 !important;
  color: var(--starlight) !important;
  border-radius: 0 !important;
}
button.MuiIconButton-root[aria-label="Back"]:hover svg,
button.MuiIconButton-root[aria-label="Forward"]:hover svg,
button.MuiIconButton-root[aria-label="Go back"]:hover svg,
button.MuiIconButton-root[aria-label="Go forward"]:hover svg,
button.MuiIconButton-root:has([data-testid="ArrowBackIcon"]):hover svg,
button.MuiIconButton-root:has([data-testid="ArrowForwardIcon"]):hover svg {
  color: var(--starlight) !important;
  fill: var(--starlight) !important;
}

.jf-lcars-active .MuiToolbar-root,
.jf-lcars-active .MuiToolbar-root.MuiToolbar-dense {
  gap: 0.30rem !important;
  min-height: 3rem !important;
  align-items: center !important;
}

.jf-lcars-active .MuiToolbar-root .MuiStack-root {
  gap: 0.30rem !important;
  align-items: center !important;
  flex-wrap: wrap !important;
}

.jf-lcars-active .MuiToolbar-root {
  --lcars-tb-h: 2.6rem;
  --lcars-tb-cap: 10px;
  --lcars-tb-gap: 8px;
}

.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar,
.jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]),
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]),
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root:nth-child(2) {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  justify-content: flex-end !important;
  align-items: center !important;
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 0.5rem !important;
  padding-right: 1.25rem !important;
  margin-right: 0.5rem !important;
  gap: 0.35rem !important;
}
.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar > *,
.jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) > *,
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) > *,
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root:nth-child(2) > * {
  margin-left: 0 !important;
  margin-right: 0 !important;
  flex-shrink: 0 !important;
  order: 0 !important;
}
.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiStack-root,
.jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiStack-root,
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiStack-root {
  display: flex !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-inline-start: 0 !important;
  justify-content: flex-end !important;
  align-items: center !important;
  gap: 0.30rem !important;
  flex: 0 0 auto !important;
}
.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiBox-root,
.jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiBox-root {
  margin-left: 0 !important;
  margin-right: 0 !important;
  flex: 0 0 auto !important;
}

@media (max-width: 1199.98px) {
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]),
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) {
    display: grid !important;
    grid-template-rows: auto auto !important;
    grid-auto-flow: column !important;
    grid-auto-columns: max-content !important;
    width: 60% !important;
    max-width: 60% !important;
    margin-left: auto !important;
    margin-right: 0.5rem !important;
    justify-content: end !important;
    align-items: start !important;
    gap: 0.35rem 0.4rem !important;
    box-sizing: border-box !important;
  }
  
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiStack-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiStack-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiStack-root,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiBox-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiBox-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiBox-root,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButtonGroup-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButtonGroup-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButtonGroup-root {
    display: contents !important;
  }
  
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButton-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiChip-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiChip-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiChip-root {
    width: auto !important;
    max-width: none !important;
    min-width: 0 !important;
    margin: 0 !important;
    box-sizing: border-box !important;
  }
  
  .jf-lcars-active .jf-lcars-sec-spacer {
    display: block !important;
    border: none !important;
    border-left: none !important;
    border-right: none !important;
    background: transparent !important;
    background-image: none !important;
    box-shadow: none !important;
    width: 0 !important;
    min-width: 0 !important;
    max-width: 0 !important;
    height: 0 !important;
    min-height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden !important;
    font-size: 0 !important;
    line-height: 0 !important;
    pointer-events: none !important;
  }
  .jf-lcars-active .jf-lcars-sec-spacer::before,
  .jf-lcars-active .jf-lcars-sec-spacer::after {
    content: none !important;
    display: none !important;
  }
  
}
.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiChip-root,
.jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiChip-root,
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiChip-root {
  margin: 0 0.25rem !important;
  background: var(--bright-blue, #41c4f7) !important;
  background-color: var(--bright-blue, #41c4f7) !important;
  color: #000 !important;
  border-radius: 100vmax !important;
  border: none !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  letter-spacing: 0.04em !important;
  text-transform: uppercase !important;
}
.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiChip-label,
.jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiChip-label,
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiChip-label {
  color: #000 !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  padding: 0 0.65rem !important;
}

.jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"],
.jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"] .MuiTypography-root,
.jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"] .MuiTypography-h2 {
  font-size: 0.8rem !important;
  font-weight: 800 !important;
  font-family: var(--lcars-font) !important;
  letter-spacing: 0.06em !important;
  text-transform: uppercase !important;
}

.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButtonGroup-text .MuiButton-root:is([title="Filter"],[title="Sort"],[title="View settings"],[title="Previous"],[title="Next"]) {
  --lcars-tb-cap: 6px;
  --lcars-tb-gap: 8px;
  box-sizing: border-box !important;
  height: var(--lcars-tb-h, 2.6rem) !important;
  min-height: var(--lcars-tb-h, 2.6rem) !important;
  max-height: var(--lcars-tb-h, 2.6rem) !important;
  width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h, 2.6rem)) !important;
  min-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h, 2.6rem)) !important;
  max-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h, 2.6rem)) !important;
  padding: 0 !important;
  padding-left: var(--lcars-tb-gap) !important;
  margin: 0 !important;
  border-radius: 0 !important;
  border: none !important;
  border-left: var(--lcars-tb-cap) solid var(--orange-red) !important;
  position: relative !important;
  overflow: hidden !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButtonGroup-text .MuiButton-root:is([title="Filter"],[title="Sort"],[title="View settings"],[title="Previous"],[title="Next"])::before {
  content: "" !important;
  position: absolute !important;
  left: 0 !important;
  top: 0 !important;
  width: var(--lcars-tb-gap) !important;
  height: 100% !important;
  background: #000 !important;
  pointer-events: none !important;
  z-index: 0 !important;
}

@media (min-width: 1200px) {
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Next"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Next"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButtonGroup-text .MuiButton-root[title="Next"] {
    margin-left: 0.5rem !important;
  }
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Sort"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Sort"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButtonGroup-text .MuiButton-root[title="Sort"],
  .jf-lcars-active .MuiToolbar-root .MuiButtonGroup-middleButton[title="Sort"] {
    margin-left: 8px !important;
    margin-right: 8px !important;
  }
}

.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Shuffle"],
.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Shuffle"] {
  --lcars-tb-cap: 6px;
  --lcars-tb-gap: 8px;
  --lcars-tb-h: 2.6rem;
  box-sizing: border-box !important;
  height: var(--lcars-tb-h) !important;
  min-height: var(--lcars-tb-h) !important;
  max-height: var(--lcars-tb-h) !important;
  
  width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
  min-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
  max-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
  padding: 0 !important;
  padding-left: var(--lcars-tb-gap) !important;
  margin: 0 !important;
  border-radius: 0 !important;
  border: none !important;
  border-left: var(--lcars-tb-cap) solid var(--orange-red, #e7442a) !important;
  position: relative !important;
  overflow: hidden !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: var(--primary-gray, #6d748c) !important;
  background-color: var(--primary-gray, #6d748c) !important;
  background-image: none !important;
  color: #000 !important;
  box-shadow: none !important;
}
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Shuffle"]::after,
.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Shuffle"]::after {
  content: none !important;
  display: none !important;
}
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Shuffle"]::before,
.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Shuffle"]::before {
  content: "" !important;
  position: absolute !important;
  left: 0 !important;
  top: 0 !important;
  width: var(--lcars-tb-gap) !important;
  height: 100% !important;
  background: #000 !important;
  pointer-events: none !important;
  z-index: 0 !important;
}
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Shuffle"] .MuiSvgIcon-root,
.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Shuffle"] .MuiSvgIcon-root {
  position: relative !important;
  z-index: 1 !important;
  margin: 0 !important;
}

.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Play All"],
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Play All"] {
  background-image:
    linear-gradient(var(--orange-red, #e7442a), var(--orange-red, #e7442a)),
    linear-gradient(var(--primary-gray, #6d748c), var(--primary-gray, #6d748c)) !important;
  background-size: 6px 100%, calc(100% - 14px) 100% !important;
  background-position: left center, right center !important;
  background-repeat: no-repeat !important;
  border-left: none !important;
  box-shadow: none !important;
  align-self: start !important;
  height: 2.6rem !important;
  max-height: 2.6rem !important;
  min-height: 2.6rem !important;
  grid-row: 1 !important;
}

.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root,
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root {
  --lcars-tb-h: 2.6rem;
  box-sizing: border-box !important;
  height: var(--lcars-tb-h) !important;
  min-height: var(--lcars-tb-h) !important;
  max-height: var(--lcars-tb-h) !important;
  align-self: center !important;
  display: inline-flex !important;
  align-items: center !important;
}

html.jf-lcars-active .alphaPicker,
html.jf-lcars-active .alphaPicker-fixed,
html.jf-lcars-active .alphaPicker-fixed-right,
html.jf-lcars-active .alphaPicker-vertical,
html.jf-lcars-active .alphaPickerRow,
html.jf-lcars-active .alphaPickerRow-vertical,
html.jf-lcars-active div.alphaPicker,
body.jf-lcars-active .alphaPicker,
body.jf-lcars-active .alphaPicker-fixed,
body.jf-lcars-active .alphaPicker-fixed-right {
  font-family: var(--lcars-font, "Antonio", sans-serif) !important;
  position: fixed !important;
  
  top: calc(48px + var(--lcars-bar-h, 25px) + 28px + 6rem) !important;
  bottom: 0.75rem !important;
  right: 0.2rem !important;
  left: auto !important;
  z-index: 1200 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
  align-items: center !important;
  gap: 0.02rem !important;
  padding: 0.15rem 0.1rem !important;
  margin: 0 !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  width: auto !important;
  max-width: none !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  pointer-events: auto !important;
  box-sizing: border-box !important;
}

html.jf-lcars-active:has(.alphaPicker, .alphaPicker-fixed, .alphaPicker-fixed-right, .alphaPicker-vertical) .itemsContainer,
html.jf-lcars-active:has(.alphaPicker, .alphaPicker-fixed, .alphaPicker-fixed-right, .alphaPicker-vertical) .padded-right,
html.jf-lcars-active:has(.alphaPicker, .alphaPicker-fixed, .alphaPicker-fixed-right, .alphaPicker-vertical) .MuiContainer-root,
html.jf-lcars-active:has(.alphaPicker, .alphaPicker-fixed, .alphaPicker-fixed-right, .alphaPicker-vertical) main {
  padding-right: calc(1.6rem + 5px + 0.25rem) !important;
  box-sizing: border-box !important;
}
html.jf-lcars-active .alphaPickerButton,
html.jf-lcars-active .alphaPickerButton-vertical,
html.jf-lcars-active button.alphaPickerButton,
html.jf-lcars-active button.alphaPickerButton-vertical,
html.jf-lcars-active .alphaPicker-button,
html.jf-lcars-active .alphaPicker button,
html.jf-lcars-active .alphaPicker-fixed button,
html.jf-lcars-active .alphaPicker-fixed-right button,
html.jf-lcars-active .alphaPickerRow-vertical button,
html.jf-lcars-active .alphaPicker a,
html.jf-lcars-active .alphaPicker .MuiToggleButton-root,
html.jf-lcars-active .alphaPicker-fixed .MuiToggleButton-root,
html.jf-lcars-active .alphaPicker-fixed-right .MuiToggleButton-root,
html.jf-lcars-active .alphaPicker-vertical .MuiToggleButton-root {
  font-family: var(--lcars-font, "Antonio", sans-serif) !important;
  font-weight: 700 !important;
  font-size: 1.15rem !important;
  line-height: 1.15 !important;
  letter-spacing: 0.04em !important;
  text-transform: uppercase !important;
  color: var(--starlight, #f3f4f7) !important;
  background: transparent !important;
  background-color: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  min-width: 1.1rem !important;
  width: auto !important;
  min-height: 0 !important;
  height: auto !important;
  padding: 0.06rem 0.1rem !important;
  margin: 0 !important;
  opacity: 0.9 !important;
  box-shadow: none !important;
  text-shadow: none !important;
}
html.jf-lcars-active .alphaPickerButton:hover,
html.jf-lcars-active .alphaPickerButton-vertical:hover,
html.jf-lcars-active button.alphaPickerButton:hover,
html.jf-lcars-active .alphaPicker-fixed-right button:hover,
html.jf-lcars-active .alphaPicker button:hover {
  color: var(--bright-blue, #41c4f7) !important;
  opacity: 1 !important;
  background: transparent !important;
}
html.jf-lcars-active .alphaPickerButton-selected,
html.jf-lcars-active .alphaPickerButton-vertical-selected,
html.jf-lcars-active button.alphaPickerButton-selected,
html.jf-lcars-active .alphaPickerButton.selected {
  color: var(--orange-red, #e7442a) !important;
  opacity: 1 !important;
}
@media (max-width: 599.98px) {
  html.jf-lcars-active .alphaPicker,
  html.jf-lcars-active .alphaPicker-fixed,
  html.jf-lcars-active .alphaPicker-fixed-right,
  html.jf-lcars-active .alphaPicker-vertical {
    
    top: calc(48px + var(--lcars-bar-h, 25px) + 28px + 6.5rem + 2.4rem) !important;
  }
  html.jf-lcars-active .alphaPickerButton,
  html.jf-lcars-active .alphaPickerButton-vertical,
  html.jf-lcars-active .alphaPicker-fixed-right button,
  html.jf-lcars-active .alphaPicker-fixed-right .MuiToggleButton-root,
  html.jf-lcars-active .alphaPicker .MuiToggleButton-root {
    font-size: 1.1rem !important;
  }

  

  .jf-lcars-active .MuiToolbar-root .MuiChip-root + .MuiButton-root,
  .jf-lcars-active .MuiToolbar-root .MuiBox-root:has(> .MuiChip-root) > .MuiButton-root,
  .jf-lcars-active .MuiToolbar-root .MuiButton-root:has([data-testid="FilterAltOffIcon"]),
  .jf-lcars-active .MuiToolbar-root .MuiButton-root:has(.MuiButton-startIcon svg[data-testid="FilterAltOffIcon"]),
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root.jf-lcars-reset-filters,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root.jf-lcars-reset-filters {
    position: fixed !important;
    top: calc(48px + var(--lcars-bar-h, 25px) + 28px + 5.6rem) !important;
    right: 0.15rem !important;
    left: auto !important;
    z-index: 1210 !important;
    box-sizing: border-box !important;
    width: 1.85rem !important;
    height: 1.85rem !important;
    min-width: 1.85rem !important;
    max-width: 1.85rem !important;
    min-height: 1.85rem !important;
    max-height: 1.85rem !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 2px solid var(--orange-red, #e7442a) !important;
    border-radius: 0 !important;
    background: #000 !important;
    background-color: #000 !important;
    color: var(--orange-red, #e7442a) !important;
    font-size: 0 !important;
    line-height: 0 !important;
    letter-spacing: 0 !important;
    text-indent: -9999px !important;
    overflow: hidden !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-shadow: none !important;
    grid-column: unset !important;
    grid-row: unset !important;
    flex: 0 0 auto !important;
    align-self: auto !important;
    justify-self: auto !important;
  }
  .jf-lcars-active .MuiToolbar-root .MuiChip-root + .MuiButton-root .MuiButton-startIcon,
  .jf-lcars-active .MuiToolbar-root .MuiBox-root:has(> .MuiChip-root) > .MuiButton-root .MuiButton-startIcon,
  .jf-lcars-active .MuiToolbar-root .MuiButton-root:has([data-testid="FilterAltOffIcon"]) .MuiButton-startIcon,
  .jf-lcars-active .MuiToolbar-root .MuiButton-root.jf-lcars-reset-filters .MuiButton-startIcon {
    margin: 0 !important;
    padding: 0 !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    text-indent: 0 !important;
  }
  .jf-lcars-active .MuiToolbar-root .MuiChip-root + .MuiButton-root .MuiButton-startIcon .MuiSvgIcon-root,
  .jf-lcars-active .MuiToolbar-root .MuiBox-root:has(> .MuiChip-root) > .MuiButton-root .MuiButton-startIcon .MuiSvgIcon-root,
  .jf-lcars-active .MuiToolbar-root .MuiButton-root:has([data-testid="FilterAltOffIcon"]) .MuiSvgIcon-root,
  .jf-lcars-active .MuiToolbar-root .MuiButton-root.jf-lcars-reset-filters .MuiSvgIcon-root {
    color: var(--orange-red, #e7442a) !important;
    fill: var(--orange-red, #e7442a) !important;
    font-size: 1.15rem !important;
    width: 1.15rem !important;
    height: 1.15rem !important;
    margin: 0 !important;
  }
  
  .jf-lcars-active .MuiToolbar-root .MuiChip-root + .MuiButton-root > span:not(.MuiButton-startIcon):not(.MuiTouchRipple-root),
  .jf-lcars-active .MuiToolbar-root .MuiBox-root:has(> .MuiChip-root) > .MuiButton-root > span:not(.MuiButton-startIcon):not(.MuiTouchRipple-root),
  .jf-lcars-active .MuiToolbar-root .MuiButton-root.jf-lcars-reset-filters > span:not(.MuiButton-startIcon):not(.MuiTouchRipple-root) {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    overflow: hidden !important;
    font-size: 0 !important;
  }
}

.jf-lcars-active .dialogContainer {
  background: rgba(0, 0, 0, 0.88) !important;
}

.jf-lcars-active .formDialog,
.jf-lcars-active .dialog.formDialog {
  --tb-h: 44px;
  --tb-end: 40px;
  --tb-gap: 12px;
  --tb-mid: var(--primary-gray, #6d748c);
  --tb-end-color: var(--orange-red, #e7442a);
  --tb-text: var(--starlight, #f3f4f7);
  --btn-h: 44px;

  position: relative !important;
  box-sizing: border-box !important;
  display: flex !important;
  flex-direction: column !important;
  
  width: min(860px, 92vw) !important;
  max-width: min(860px, 92vw) !important;
  min-width: min(640px, 92vw) !important;
  height: auto !important;
  min-height: min(520px, 80vh) !important;
  max-height: 90vh !important;
  margin: 0 auto !important;
  padding: 0 !important;
  background: #000 !important;
  color: var(--starlight, #f3f4f7) !important;
  font-family: var(--lcars-font) !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  outline: none !important;
  overflow: hidden !important;
}
.jf-lcars-active .dialog.formDialog::before,
.jf-lcars-active .dialog.formDialog::after,
.jf-lcars-active .formDialog::before,
.jf-lcars-active .formDialog::after {
  content: none !important;
  display: none !important;
}

.jf-lcars-active .formDialogHeader {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  flex-shrink: 0 !important;
  box-sizing: border-box !important;
  position: relative !important;
  width: auto !important;
  max-width: none !important;
  height: var(--tb-h) !important;
  min-height: var(--tb-h) !important;
  margin: 0 !important;
  padding: 0 !important;
  gap: 0 !important;
  background-color: var(--tb-mid) !important;
  border-left: var(--tb-end) solid var(--tb-end-color) !important;
  border-right: var(--tb-end) solid var(--tb-end-color) !important;
  border-top: none !important;
  border-bottom: none !important;
  border-radius: 0 !important;
  overflow: visible !important;
  z-index: 2 !important;
}
.jf-lcars-active .formDialogHeader::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: var(--tb-gap) !important;
  height: 100% !important;
  background: #000 !important;
  z-index: 1 !important;
  pointer-events: none !important;
}
.jf-lcars-active .formDialogHeader::after {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  width: var(--tb-gap) !important;
  height: 100% !important;
  background: #000 !important;
  z-index: 1 !important;
  pointer-events: none !important;
}

.jf-lcars-active .formDialogHeader .btnCancel,
.jf-lcars-active .formDialogHeader .paper-icon-button-light {
  order: -1 !important;
  flex-shrink: 0 !important;
  width: var(--tb-h) !important;
  height: var(--tb-h) !important;
  min-width: var(--tb-h) !important;
  min-height: var(--tb-h) !important;
  margin: 0 0 0 var(--tb-gap) !important;
  padding: 0 !important;
  border: none !important;
  border-radius: 0 !important;
  background: var(--ghost-gray, #d2d5df) !important;
  color: #000 !important;
  box-shadow: none !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  position: relative !important;
  z-index: 2 !important;
}
.jf-lcars-active .formDialogHeader .btnCancel::before,
.jf-lcars-active .formDialogHeader .btnCancel::after,
.jf-lcars-active .formDialogHeader .paper-icon-button-light::before,
.jf-lcars-active .formDialogHeader .paper-icon-button-light::after {
  content: none !important;
  display: none !important;
}
.jf-lcars-active .formDialogHeader .btnCancel .material-icons {
  color: #000 !important;
  font-size: 1.3rem !important;
  margin: 0 !important;
}

.jf-lcars-active .formDialogHeaderTitle {
  flex: 0 1 auto !important;
  margin: 0 !important;
  padding: 0 16px !important;
  background: #000 !important;
  color: var(--tb-text) !important;
  -webkit-text-fill-color: var(--tb-text) !important;
  font-family: var(--lcars-font) !important;
  font-size: 1.55rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  line-height: var(--tb-h) !important;
  height: var(--tb-h) !important;
  white-space: nowrap !important;
  border: none !important;
  border-radius: 0 !important;
  position: relative !important;
  z-index: 2 !important;
}

.jf-lcars-active .formDialogContent {
  position: relative !important;
  z-index: 1 !important;
  flex: 1 1 auto !important;
  box-sizing: border-box !important;
  margin: 0 !important;
  padding: 1rem 1.5rem 0 !important;
  background: #000 !important;
  color: var(--ghost-gray, #d2d5df) !important;
  font-family: var(--lcars-font) !important;
  border: none !important;
  overflow: auto !important;
  min-height: 0 !important;
}
.jf-lcars-active .formDialogContent::before,
.jf-lcars-active .formDialogContent::after {
  content: none !important;
  display: none !important;
}
.jf-lcars-active .dialogContentInner {
  background: transparent !important;
  padding: 0 !important;
  max-width: 36rem !important;
  margin: 0 auto !important;
}
.jf-lcars-active .formDialogContent .dialog-content-centered > div:first-child {
  color: var(--light-gray, #9ea5ba) !important;
  font-size: 0.95rem !important;
  margin-bottom: 1.1rem !important;
  border: none !important;
  padding: 0 !important;
}
.jf-lcars-active .formDialog .inputLabel,
.jf-lcars-active .formDialog .selectLabel,
.jf-lcars-active .formDialog .checkboxLabel {
  color: var(--orange-red, #e7442a) !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  font-size: 0.75rem !important;
}
.jf-lcars-active .formDialog .emby-input,
.jf-lcars-active .formDialog .emby-select,
.jf-lcars-active .formDialog input.emby-input,
.jf-lcars-active .formDialog select.emby-select {
  background: #000 !important;
  color: var(--starlight, #f3f4f7) !important;
  border: 2px solid var(--primary-gray, #6d748c) !important;
  border-left: 8px solid var(--orange-red, #e7442a) !important;
  border-radius: 0 !important;
  font-family: var(--lcars-font) !important;
  padding: 0.65rem 0.75rem !important;
  max-width: 100% !important;
  width: 100% !important;
  box-sizing: border-box !important;
}
.jf-lcars-active .formDialog .emby-input:focus,
.jf-lcars-active .formDialog .emby-select:focus {
  border-color: var(--bright-blue, #41c4f7) !important;
  border-left-color: var(--orange-red, #e7442a) !important;
  outline: none !important;
}
.jf-lcars-active .formDialog .fieldDescription {
  color: var(--starlight, #f3f4f7) !important;
  font-size: 0.7rem !important;
  text-transform: uppercase !important;
}
.jf-lcars-active .formDialog .checkboxOutline {
  border-radius: 0 !important;
  border-color: var(--primary-gray, #6d748c) !important;
  background: #000 !important;
}

.jf-lcars-active .formDialogFooter,
.jf-lcars-active .dialog.formDialog .formDialogFooter {
  display: flex !important;
  flex-direction: row !important;
  align-items: stretch !important;
  gap: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
  background: #000 !important;
  border: none !important;
  position: relative !important;
  z-index: 20 !important;
  height: var(--btn-h) !important;
  min-height: var(--btn-h) !important;
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  flex: 0 0 auto !important;
  align-self: stretch !important;
}
.jf-lcars-active .dialog.formDialog > .formDialogFooter,
.jf-lcars-active .formDialog > .formDialogFooter {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  left: auto !important;
  right: auto !important;
  position: relative !important;
}
.jf-lcars-active .formDialog .formDialogContent {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.jf-lcars-active .formDialogContent .dialogContentInner,
.jf-lcars-active .formDialogContent .dialog-content-centered,
.jf-lcars-active .formDialogContent form.dialogContentInner {
  max-width: none !important;
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  box-sizing: border-box !important;
}
.jf-lcars-active .formDialogContent .metadataFormFields,
.jf-lcars-active .formDialogContent .dialog-content-centered > :not(.formDialogFooter) {
  max-width: 36rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
  box-sizing: border-box !important;
  width: 100% !important;
}
.jf-lcars-active .formDialogContent .formDialogFooter,
.jf-lcars-active .formDialogContent form > .formDialogFooter {
  max-width: none !important;
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  align-self: stretch !important;
}
.jf-lcars-active .formDialogContent {
  display: flex !important;
  flex-direction: column !important;
}
.jf-lcars-active .formDialogContent > form,
.jf-lcars-active .formDialogContent .editItemMetadataForm {
  display: flex !important;
  flex-direction: column !important;
  flex: 1 1 auto !important;
  min-height: 100% !important;
  width: 100% !important;
  max-width: none !important;
  box-sizing: border-box !important;
}
.jf-lcars-active .formDialogContent .dialogContentInner {
  display: flex !important;
  flex-direction: column !important;
  flex: 1 1 auto !important;
  min-height: 100% !important;
  box-sizing: border-box !important;
}
.jf-lcars-active .formDialogContent .metadataFormFields {
  flex: 1 1 auto !important;
}

.jf-lcars-active .formDialogFooter::before {
  content: "" !important;
  flex: 1 1 auto !important;
  height: var(--btn-h) !important;
  min-height: var(--btn-h) !important;
  box-sizing: border-box !important;
  background: var(--tb-mid) !important;
  border-left: var(--btn-h) solid var(--tb-end-color) !important;
  border-right: 12px solid #000 !important;
  border-radius: 0 !important;
  min-width: 0 !important;
  width: auto !important;
}
.jf-lcars-active .formDialogFooter::after {
  content: none !important;
  display: none !important;
}

.jf-lcars-active .formDialogFooter .button-submit,
.jf-lcars-active .formDialogFooter .btnSubmit,
.jf-lcars-active .formDialogFooter .raised.emby-button,
.jf-lcars-active .formDialogFooter .formDialogFooterItem {
  flex: 0 0 auto !important;
  flex-grow: 0 !important;
  flex-shrink: 0 !important;
  width: auto !important;
  min-width: 5.5rem !important;
  max-width: 9rem !important;
  height: var(--btn-h) !important;
  min-height: var(--btn-h) !important;
  padding-left: 1.25rem !important;
  padding-right: 1.25rem !important;
  position: relative !important;
  z-index: 2 !important;
  box-sizing: border-box !important;
  border-radius: 0 !important;
}
.jf-lcars-active .formDialogFooter .formDialogFooterItem:not(.button-reset):not(.btnReset) {
  margin: 0 !important;
}
.jf-lcars-active .formDialogFooter .button-reset,
.jf-lcars-active .formDialogFooter .btnReset,
.jf-lcars-active .formDialogFooter button.button-reset,
.jf-lcars-active .formDialogFooter .formDialogFooterItem.button-reset,
.jf-lcars-active .formDialogFooter .formDialogFooterItem.btnReset,
.jf-lcars-active .formDialogFooter button.raised.button-reset.formDialogFooterItem {
  margin: 0 !important;
  border-left: 8px solid #000 !important;
  border-right: 8px solid #000 !important;
  border-top: none !important;
  border-bottom: none !important;
  height: 100% !important;
  min-height: var(--btn-h, 44px) !important;
  max-height: none !important;
  align-self: stretch !important;
  box-sizing: border-box !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.jf-lcars-active .formDialogFooter {
  align-items: stretch !important;
}
.jf-lcars-active .formDialogFooter .formDialogFooterItem,
.jf-lcars-active .formDialogFooter .raised.emby-button {
  height: 100% !important;
  min-height: var(--btn-h, 44px) !important;
  align-self: stretch !important;
}

.jf-lcars-active .MuiPopover-paper:has([id*="filters"]),
.jf-lcars-active .MuiPopover-paper:has([aria-controls*="filters"]),
.jf-lcars-active .MuiPopover-paper:has(.MuiAccordion-root) {
  background: #000 !important;
  background-color: #000 !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  padding: 8px !important;
  gap: 0 !important;
}
.jf-lcars-active .MuiPopover-paper .MuiAccordion-root,
.jf-lcars-active .MuiPopover-paper .MuiAccordion-root.MuiPaper-root {
  background: #000 !important;
  background-color: #000 !important;
  border: 2px solid var(--orange-red, #e7442a) !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  margin: 0 0 10px 0 !important;
  overflow: hidden !important;
}
.jf-lcars-active .MuiPopover-paper .MuiAccordion-root:last-of-type {
  margin-bottom: 10px !important;
}
.jf-lcars-active .MuiPopover-paper .MuiAccordionSummary-root,
.jf-lcars-active .MuiPopover-paper button.MuiAccordionSummary-root {
  background: #000 !important;
  background-color: #000 !important;
  color: var(--orange-red, #e7442a) !important;
  min-height: 2.75rem !important;
  padding: 0.5rem 0.85rem !important;
  border-radius: 0 !important;
  flex-direction: row !important;
}
.jf-lcars-active .MuiPopover-paper .MuiAccordionSummary-root:hover {
  background: #0a0a0a !important;
  filter: brightness(1.08);
}
.jf-lcars-active .MuiPopover-paper .MuiAccordionSummary-content,
.jf-lcars-active .MuiPopover-paper .MuiAccordionSummary-content .MuiTypography-root {
  color: var(--orange-red, #e7442a) !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  font-size: 0.95rem !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  margin: 0 !important;
  width: 100% !important;
  text-align: right !important;
  justify-content: flex-end !important;
}
.jf-lcars-active .MuiPopover-paper .MuiAccordionSummary-expandIconWrapper,
.jf-lcars-active .MuiPopover-paper .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root {
  color: var(--orange-red, #e7442a) !important;
  fill: var(--orange-red, #e7442a) !important;
}
.jf-lcars-active .MuiPopover-paper .MuiAccordion-region,
.jf-lcars-active .MuiPopover-paper .MuiAccordionDetails-root {
  background: #000 !important;
  color: var(--ghost-gray, #d2d5df) !important;
  border-top: 1px solid var(--orange-red, #e7442a) !important;
  border-radius: 0 !important;
}

.jf-lcars-active .MuiPopover-paper button[title="Reset filters"] {
  border: 2px solid var(--orange-red, #e7442a) !important;
  border-radius: 0 !important;
  background: #000 !important;
  color: var(--orange-red, #e7442a) !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  margin-top: 4px !important;
}
.jf-lcars-active .MuiPopover-paper button[title="Reset filters"] .MuiSvgIcon-root {
  color: var(--orange-red, #e7442a) !important;
  fill: var(--orange-red, #e7442a) !important;
}

.dashboardDocument .MuiStack-root:has(> .MuiTypography-h2):has(.MuiButton-root),
.dashboardDocument .MuiStack-root:has(> h2.MuiTypography-root):has(.MuiButton-root) {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: flex-start !important;
  column-gap: 0.75rem !important;
  row-gap: 0.85rem !important;
  width: 100% !important;
  max-width: 100% !important;
}
.dashboardDocument .MuiStack-root:has(> .MuiTypography-h2) > .MuiTypography-h2,
.dashboardDocument .MuiStack-root:has(> h2.MuiTypography-root) > h2 {
  align-self: center !important;
  text-align: left !important;
  margin: 0 !important;
  width: auto !important;
  flex: 0 0 auto !important;
}

.dashboardDocument .MuiStack-root:has(> .MuiTypography-h2) > .MuiBox-root,
.dashboardDocument .MuiStack-root:has(> .MuiTypography-h2) > .MuiGrid-root {
  flex: 1 0 100% !important;
  width: 100% !important;
  max-width: 100% !important;
}
.dashboardDocument .MuiStack-root:has(> .MuiTypography-h2) > .MuiButton-root,
.dashboardDocument .MuiStack-root:has(> .MuiTypography-h2) > a.MuiButton-root {
  flex: 0 0 auto !important;
  align-self: center !important;
  margin-left: 0 !important;
}
.dashboardDocument .MuiStack-root:has(> .MuiTypography-h2) > .MuiStack-root {
  flex: 0 0 auto !important;
  align-self: center !important;
  margin-left: 0 !important;
}

.dashboardDocument .MuiStack-root:has(> .MuiButton-root:has([data-testid="AddIcon"])):has(> .MuiButton-outlined),
.dashboardDocument .MuiStack-root:has(> button.MuiButton-containedPrimary:has([data-testid="AddIcon"])):has(> .MuiButton-outlined) {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: flex-start !important;
  gap: 0.55rem !important;
  width: auto !important;
}

.jf-lcars-active .MuiButton-root:has([data-testid="AddIcon"]),
.jf-lcars-active a.MuiButton-root:has([data-testid="AddIcon"]),
.jf-lcars-active button.MuiButton-root:has([data-testid="AddIcon"]),
.jf-lcars-active .MuiButton-containedPrimary:has([data-testid="AddIcon"]),
.jf-lcars-active a.MuiButton-containedPrimary:has([data-testid="AddIcon"]),
.jf-lcars-active button.MuiButton-containedPrimary:has([data-testid="AddIcon"]),
.dashboardDocument .MuiButton-root:has([data-testid="AddIcon"]),
.dashboardDocument a.MuiButton-root:has([data-testid="AddIcon"]),
.dashboardDocument button.MuiButton-containedPrimary:has([data-testid="AddIcon"]),
.jf-lcars-active .MuiButtonGroup-root button.MuiButton-root:has([data-testid="AddIcon"]) {
  --lcars-tb-cap: 6px;
  --lcars-tb-gap: 6px;
  --lcars-tb-side: 2.6rem;
  box-sizing: border-box !important;
  
  width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-side)) !important;
  min-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-side)) !important;
  max-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-side)) !important;
  height: var(--lcars-tb-side) !important;
  min-height: var(--lcars-tb-side) !important;
  max-height: var(--lcars-tb-side) !important;
  padding: 0 0 0 calc(var(--lcars-tb-cap) + var(--lcars-tb-gap)) !important;
  margin: 0 0.35rem 0 0 !important;
  border: none !important;
  border-radius: 0 !important;
  outline: none !important;
  box-shadow: none !important;
  overflow: hidden !important;
  position: relative !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  align-self: flex-start !important;
  flex-grow: 0 !important;
  flex-shrink: 0 !important;
  font-size: 0 !important;
  line-height: 0 !important;
  letter-spacing: 0 !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  background-color: #000 !important;
  background-image:
    linear-gradient(var(--orange-red, #e7442a), var(--orange-red, #e7442a)),
    linear-gradient(#000, #000),
    linear-gradient(var(--primary-gray, #6d748c), var(--primary-gray, #6d748c)) !important;
  background-size:
    var(--lcars-tb-cap) 100%,
    var(--lcars-tb-gap) 100%,
    var(--lcars-tb-side) 100% !important;
  background-position:
    left center,
    var(--lcars-tb-cap) center,
    right center !important;
  background-repeat: no-repeat !important;
}
.jf-lcars-active .MuiButton-root:has([data-testid="AddIcon"])::before,
.jf-lcars-active .MuiButton-root:has([data-testid="AddIcon"])::after,
.jf-lcars-active a.MuiButton-root:has([data-testid="AddIcon"])::before,
.jf-lcars-active a.MuiButton-root:has([data-testid="AddIcon"])::after,
.jf-lcars-active button.MuiButton-containedPrimary:has([data-testid="AddIcon"])::before,
.jf-lcars-active button.MuiButton-containedPrimary:has([data-testid="AddIcon"])::after,
.dashboardDocument .MuiButton-root:has([data-testid="AddIcon"])::before,
.dashboardDocument .MuiButton-root:has([data-testid="AddIcon"])::after {
  content: none !important;
  display: none !important;
}
.jf-lcars-active .MuiButton-root:has([data-testid="AddIcon"]) .MuiButton-startIcon,
.jf-lcars-active a.MuiButton-root:has([data-testid="AddIcon"]) .MuiButton-startIcon,
.jf-lcars-active button.MuiButton-containedPrimary:has([data-testid="AddIcon"]) .MuiButton-startIcon,
.dashboardDocument .MuiButton-root:has([data-testid="AddIcon"]) .MuiButton-startIcon {
  
  position: absolute !important;
  top: 0 !important;
  bottom: 0 !important;
  left: calc(var(--lcars-tb-cap, 6px) + var(--lcars-tb-gap, 6px)) !important;
  width: var(--lcars-tb-side, 2.6rem) !important;
  margin: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: #000 !important;
  -webkit-text-fill-color: #000 !important;
  z-index: 1 !important;
  pointer-events: none !important;
}
.jf-lcars-active .MuiButton-root:has([data-testid="AddIcon"]) .MuiSvgIcon-root,
.jf-lcars-active a.MuiButton-root:has([data-testid="AddIcon"]) .MuiSvgIcon-root,
.jf-lcars-active button.MuiButton-containedPrimary:has([data-testid="AddIcon"]) .MuiSvgIcon-root,
.dashboardDocument .MuiButton-root:has([data-testid="AddIcon"]) .MuiSvgIcon-root {
  font-size: 1.35rem !important;
  width: 1.35rem !important;
  height: 1.35rem !important;
  color: #000 !important;
  fill: #000 !important;
}

.jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"] {
  --lcars-tb-cap: 6px;
  --lcars-tb-gap: 6px;
  --lcars-tb-h: 2.6rem;
  border-left: var(--lcars-tb-cap) solid var(--orange-red) !important;
  padding-left: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + 0.55rem) !important;
  position: relative !important;
  height: var(--lcars-tb-h) !important;
  min-height: var(--lcars-tb-h) !important;
  max-height: var(--lcars-tb-h) !important;
  box-sizing: border-box !important;
  display: inline-flex !important;
  align-items: center !important;
  align-self: center !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  vertical-align: middle !important;
}
.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiChip-root,
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiChip-root {
  height: 2.6rem !important;
  min-height: 2.6rem !important;
  max-height: 2.6rem !important;
  box-sizing: border-box !important;
  display: inline-flex !important;
  align-items: center !important;
  align-self: center !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  vertical-align: middle !important;
}
.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root,
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root {
  align-self: center !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  vertical-align: middle !important;
}
.jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"]::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: var(--lcars-tb-gap) !important;
  height: 100% !important;
  background-color: #000 !important;
  pointer-events: none !important;
  z-index: 1 !important;
}

@media (max-width: 599.98px) {
  .jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[aria-controls="library-view-menu"] {
    --lcars-tb-cap: 6px;
    --lcars-tb-gap: 8px;
    --lcars-tb-h: 2.6rem;
    
    box-sizing: border-box !important;
    width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
    min-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
    max-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
    height: var(--lcars-tb-h) !important;
    min-height: var(--lcars-tb-h) !important;
    max-height: var(--lcars-tb-h) !important;
    padding: 0 !important;
    padding-left: var(--lcars-tb-gap) !important;
    margin: 0 !important;
    border: none !important;
    border-left: var(--lcars-tb-cap) solid var(--orange-red, #e7442a) !important;
    border-radius: 0 !important;
    justify-content: center !important;
    align-items: center !important;
    overflow: hidden !important;
    display: inline-flex !important;
    position: relative !important;
    flex: 0 0 auto !important;
    align-self: center !important;
    grid-row: 1 !important;
  }
  
  .jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"]::before {
    content: "" !important;
    display: block !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: var(--lcars-tb-gap) !important;
    height: 100% !important;
    background-color: #000 !important;
    pointer-events: none !important;
    z-index: 1 !important;
  }
  
  .jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"] .MuiTypography-root,
  .jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"] .MuiTypography-h2 {
    display: none !important;
    font-size: 0 !important;
    width: 0 !important;
    height: 0 !important;
    max-width: 0 !important;
    overflow: hidden !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"]::after {
    content: none !important;
    display: none !important;
  }
  
  .jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"] .MuiButton-endIcon {
    display: inline-flex !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
    z-index: 2 !important;
  }
  .jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"] .MuiButton-endIcon > *,
  .jf-lcars-active .MuiButton-root[aria-controls="library-view-menu"] .MuiButton-endIcon .MuiSvgIcon-root {
    margin: 0 !important;
    font-size: 1.5rem !important;
    width: 1.5rem !important;
    height: 1.5rem !important;
  }
  
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Filter"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Sort"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="View settings"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Previous"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Next"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Shuffle"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Filter"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Sort"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="View settings"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Previous"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Next"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Shuffle"] {
    --lcars-tb-cap: 6px;
    --lcars-tb-gap: 8px;
    --lcars-tb-h: 2.6rem;
    box-sizing: border-box !important;
    width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
    min-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
    max-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
    height: var(--lcars-tb-h) !important;
    min-height: var(--lcars-tb-h) !important;
    max-height: var(--lcars-tb-h) !important;
    padding: 0 0 0 var(--lcars-tb-gap) !important;
    border: none !important;
    border-left: var(--lcars-tb-cap) solid var(--orange-red, #e7442a) !important;
    border-radius: 0 !important;
    flex: 0 0 auto !important;
    align-self: center !important;
  }

  
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Play All"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Play All"] {
    --lcars-tb-cap: 6px;
    --lcars-tb-gap: 8px;
    --lcars-tb-h: 2.6rem;
    box-sizing: border-box !important;
    width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
    min-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
    max-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
    height: var(--lcars-tb-h) !important;
    min-height: var(--lcars-tb-h) !important;
    max-height: var(--lcars-tb-h) !important;
    padding: 0 0 0 var(--lcars-tb-gap) !important;
    margin: 0 !important;
    border: none !important;
    border-left: var(--lcars-tb-cap) solid var(--orange-red, #e7442a) !important;
    border-radius: 0 !important;
    background: var(--primary-gray, #6d748c) !important;
    background-color: var(--primary-gray, #6d748c) !important;
    background-image: none !important;
    box-shadow: none !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    align-self: center !important;
    justify-self: center !important;
    overflow: hidden !important;
    flex: 0 0 auto !important;
    position: relative !important;
    font-size: 0 !important;
    line-height: 0 !important;
    color: transparent !important;
    letter-spacing: 0 !important;
    text-indent: -9999px !important;
    grid-row: 1 !important;
  }
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Play All"]::before,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Play All"]::before {
    content: "" !important;
    display: block !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: var(--lcars-tb-gap) !important;
    height: 100% !important;
    background: #000 !important;
    pointer-events: none !important;
    z-index: 1 !important;
  }
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Play All"]::after,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Play All"]::after {
    content: none !important;
    display: none !important;
  }
  
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Play All"] .MuiButton-startIcon,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Play All"] .MuiButton-startIcon {
    display: inline-flex !important;
    margin: 0 !important;
    padding: 0 !important;
    position: relative !important;
    z-index: 2 !important;
    text-indent: 0 !important;
    color: #000 !important;
  }
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Play All"] .MuiButton-startIcon .MuiSvgIcon-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Play All"] .MuiButton-startIcon .MuiSvgIcon-root,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Play All"] .MuiSvgIcon-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Play All"] .MuiSvgIcon-root {
    display: block !important;
    margin: 0 !important;
    width: 1.5rem !important;
    height: 1.5rem !important;
    font-size: 1.5rem !important;
    color: #000 !important;
    fill: #000 !important;
    text-indent: 0 !important;
    position: relative !important;
    z-index: 2 !important;
  }

  
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[aria-controls="library-view-menu"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Filter"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="View settings"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Next"] {
    align-self: start !important;
    grid-row: 1 !important;
  }
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Shuffle"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Sort"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Previous"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiChip-root {
    align-self: start !important;
    grid-row: 2 !important;
  }
  
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]),
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) {
    display: grid !important;
    grid-template-columns: repeat(5, calc(2.6rem + 14px)) !important; 
    grid-template-rows: auto auto !important;
    grid-auto-flow: row !important;
    width: max-content !important;
    max-width: calc(100vw - 1rem) !important;
    margin-left: auto !important;
    margin-right: 0.25rem !important;
    justify-content: start !important;
    justify-items: center !important;
    align-items: start !important;
    gap: 0.35rem 0.4rem !important;
    column-gap: 0.4rem !important;
    row-gap: 0.35rem !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root {
    margin: 0 !important;
  }
  
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiChip-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiChip-root {
    grid-column: 1 / 3 !important;
    grid-row: 2 !important;
    justify-self: stretch !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    margin: 0 !important;
    box-sizing: border-box !important;
  }
}

@media (max-width: 399.98px) {
  
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButton-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiToggleButton-root,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiToggleButton-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButtonGroup-text .MuiButton-root {
    --lcars-tb-cap: 0px !important;
    --lcars-tb-gap: 0px !important;
    --lcars-tb-h: 2.6rem !important;
    box-sizing: border-box !important;
    width: 2.6rem !important;
    min-width: 2.6rem !important;
    max-width: 2.6rem !important;
    height: 2.6rem !important;
    min-height: 2.6rem !important;
    max-height: 2.6rem !important;
    padding: 0 !important;
    padding-left: 0 !important;
    margin: 0 !important;
    border: none !important;
    border-left: none !important;
    border-radius: 0 !important;
    background-image: none !important;
  }
  
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButton-root::before,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButton-root::after,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root::before,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root::after,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root::before,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root::after,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButtonGroup-text .MuiButton-root::before {
    content: none !important;
    display: none !important;
    width: 0 !important;
    background: transparent !important;
  }
  
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButton-root[title="Previous"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButton-root[title="Next"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Previous"],
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Next"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Previous"],
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Next"] {
    --lcars-tb-cap: 6px !important;
    --lcars-tb-gap: 8px !important;
    --lcars-tb-h: 2.6rem !important;
    width: calc(6px + 8px + 2.6rem) !important;
    min-width: calc(6px + 8px + 2.6rem) !important;
    max-width: calc(6px + 8px + 2.6rem) !important;
    height: 2.6rem !important;
    min-height: 2.6rem !important;
    max-height: 2.6rem !important;
    padding: 0 0 0 8px !important;
    border: none !important;
    border-left: 6px solid var(--orange-red, #e7442a) !important;
    border-radius: 0 !important;
    position: relative !important;
    overflow: hidden !important;
  }
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButton-root[title="Previous"]::before,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButton-root[title="Next"]::before,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Previous"]::before,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButton-root[title="Next"]::before,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Previous"]::before,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButton-root[title="Next"]::before {
    content: "" !important;
    display: block !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 8px !important;
    height: 100% !important;
    background: #000 !important;
    pointer-events: none !important;
    z-index: 1 !important;
  }
  
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]),
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]),
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar {
    grid-template-columns: repeat(5, 2.6rem) !important;
    column-gap: 5px !important;
    row-gap: 5px !important;
    gap: 5px !important;
  }
  
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButtonGroup-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButtonGroup-root,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButtonGroup-root {
    gap: 5px !important;
    column-gap: 5px !important;
  }
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButtonGroup-root .MuiButton-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButtonGroup-root .MuiButton-root,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButtonGroup-root .MuiButton-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiButtonGroup-root .MuiButtonGroup-grouped,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiButtonGroup-root .MuiButtonGroup-grouped,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiButtonGroup-root .MuiButtonGroup-grouped {
    margin: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiChip-root,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiChip-root {
    margin: 0 !important;
  }
  
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiChip-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiChip-root,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiChip-root,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]) .MuiChip-label,
  .jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) .MuiChip-label,
  .jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar .MuiChip-label {
    font-size: calc(0.8125rem - 3px) !important;
  }
}

.jf-lcars-active .MuiToolbar-root:has([aria-controls="library-view-menu"]),
.jf-lcars-active .MuiToolbar-root.jf-lcars-sec-toolbar,
.jf-lcars-active .MuiToolbar-root:has([aria-controls*="view-menu"]) {
  position: relative !important;
  z-index: 2 !important;
  
  margin-top: calc(48px + var(--lcars-bar-h, 25px) + 28px) !important;
  flex-wrap: wrap !important;
}

.jf-lcars-active .MuiAppBar-root .MuiToolbar-root,
.jf-lcars-active header.MuiAppBar-root .MuiToolbar-root,
.jf-lcars-active header .MuiToolbar-root,
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root.MuiToolbar-dense {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

.jf-lcars-active .MuiAppBar-root,
.jf-lcars-active header.MuiPaper-root.MuiAppBar-root,
.jf-lcars-active .MuiToolbar-root {
  padding-left: 0 !important;
}
.jf-lcars-active .MuiAppBar-root,
.jf-lcars-active header.MuiPaper-root.MuiAppBar-root {
  display: flex !important;
  flex-direction: column !important;
  gap: 52px !important;
  left: var(--lcars-sidebar, 56px) !important;
  width: auto !important;
  right: 0 !important;
  margin-left: 0 !important;
}

.jf-lcars-active .MuiAppBar-root,
.jf-lcars-active header.MuiPaper-root.MuiAppBar-root,
.jf-lcars-active header.MuiAppBar-root {
  display: flex !important;
  flex-direction: column !important;
  gap: 52px !important;
  align-items: stretch !important;
}

.jf-lcars-active .MuiAppBar-root.MuiAppBar-positionFixed,
.jf-lcars-active .MuiAppBar-positionSticky {
  left: var(--lcars-sidebar, 56px) !important;
  width: calc(100% - var(--lcars-sidebar, 56px)) !important;
  max-width: calc(100% - var(--lcars-sidebar, 56px)) !important;
  box-sizing: border-box !important;
}
.jf-lcars-active .MuiToolbar-root {
  margin-left: 0 !important;
  padding-left: 8px !important;
  box-sizing: border-box !important;
  max-width: 100% !important;
}
.jf-lcars-active .MuiToolbar-root .MuiStack-root {
  margin-left: 0 !important;
}

.jf-lcars-active .skinHeader {
  left: var(--lcars-sidebar, 56px) !important;
  width: auto !important;
  right: 0 !important;
  box-sizing: border-box !important;
}

.jf-lcars-active .MuiToolbar-root a.MuiButton-root,
.jf-lcars-active .MuiToolbar-root a.MuiButton-text,
.jf-lcars-active .MuiToolbar-root .MuiButton-textInherit {
  position: relative !important;
  display: inline-flex !important;
  justify-content: center !important;
  align-items: center !important;
  box-sizing: border-box !important;
  height: var(--lcars-tb-h) !important;
  min-height: var(--lcars-tb-h) !important;
  
  min-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  padding-right: 0.85rem !important;
  padding-left: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + 0.55rem) !important;
  margin: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  text-transform: uppercase !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  font-size: 0.8rem !important;
  letter-spacing: 0.08em !important;
  line-height: 1 !important;
  text-align: center !important;
  color: #000 !important;
  background-color: var(--light-gray) !important;
  background-image: none !important;
  border: none !important;
  border-left: var(--lcars-tb-cap) solid var(--orange-red) !important;
  overflow: hidden !important;
}

.jf-lcars-active .MuiToolbar-root a.MuiButton-root::before,
.jf-lcars-active .MuiToolbar-root a.MuiButton-text::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: var(--lcars-tb-gap) !important;
  height: 100% !important;
  background-color: #000 !important;
  pointer-events: none !important;
  z-index: 1 !important;
}

.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:nth-child(2) {
  border-left-color: var(--primary-gray) !important;
  background-color: var(--ghost-gray) !important;
}
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:nth-child(3) {
  border-left-color: var(--orange-red) !important;
  background-color: var(--light-gray) !important;
}
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:nth-child(4) {
  border-left-color: var(--medium-dark-gray) !important;
  background-color: var(--ghost-gray) !important;
}
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:nth-child(5) {
  border-left-color: var(--orange-red) !important;
  background-color: var(--primary-gray) !important;
}

.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:first-child,
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:first-of-type {
  width: var(--lcars-tb-h) !important;
  min-width: var(--lcars-tb-h) !important;
  max-width: var(--lcars-tb-h) !important;
  height: var(--lcars-tb-h) !important;
  min-height: var(--lcars-tb-h) !important;
  max-height: var(--lcars-tb-h) !important;
  padding: 0 !important;
  font-size: 0 !important;
  line-height: 0 !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  justify-content: center !important;
  align-items: center !important;
  
  border-left: none !important;
  background-color: var(--light-gray) !important;
  overflow: hidden !important;
  aspect-ratio: 1 / 1 !important;
}
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:first-child::before,
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:first-of-type::before {
  display: none !important;
  content: none !important;
  width: 0 !important;
}
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:first-child .MuiButton-startIcon,
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:first-of-type .MuiButton-startIcon {
  margin: 0 !important;
  font-size: 1.25rem !important;
  line-height: 1 !important;
  color: #000 !important;
  -webkit-text-fill-color: #000 !important;
}
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:first-child .MuiButton-startIcon img,
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:first-of-type .MuiButton-startIcon img,
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:first-child .MuiButton-startIcon svg,
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:first-of-type .MuiButton-startIcon svg {
  display: none !important;
}
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:first-child .MuiButton-startIcon::before,
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:first-of-type .MuiButton-startIcon::before {
  content: "home" !important;
  font-family: "Material Icons", "Material Icons Outlined", "material-icons" !important;
  font-size: 1.35rem !important;
  line-height: 1 !important;
  color: #000 !important;
  -webkit-text-fill-color: #000 !important;
  font-style: normal !important;
  font-weight: normal !important;
  letter-spacing: normal !important;
  text-transform: none !important;
  display: inline-block !important;
}

.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:nth-child(2) {
  width: var(--lcars-tb-h) !important;
  min-width: var(--lcars-tb-h) !important;
  max-width: var(--lcars-tb-h) !important;
  height: var(--lcars-tb-h) !important;
  min-height: var(--lcars-tb-h) !important;
  max-height: var(--lcars-tb-h) !important;
  padding: 0 !important;
  font-size: 0 !important;
  line-height: 0 !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  justify-content: center !important;
  align-items: center !important;
  border-left: none !important;
  background-color: var(--ghost-gray) !important;
  overflow: hidden !important;
  aspect-ratio: 1 / 1 !important;
}
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:nth-child(2)::before {
  display: none !important;
  content: none !important;
  width: 0 !important;
}
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:nth-child(2) .MuiButton-startIcon {
  margin: 0 !important;
  color: #000 !important;
  -webkit-text-fill-color: #000 !important;
}
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:nth-child(2) .MuiSvgIcon-root,
.jf-lcars-active .MuiToolbar-root .MuiStack-root > a.MuiButton-root:nth-child(2) .MuiButton-startIcon svg {
  display: inline-flex !important;
  width: 1.35rem !important;
  height: 1.35rem !important;
  color: #000 !important;
  fill: #000 !important;
  font-size: 1.35rem !important;
}

.jf-lcars-active .MuiToolbar-root a.MuiButton-root:hover {
  filter: brightness(1.15) !important;
  color: #000 !important;
}

.jf-lcars-active .MuiToolbar-root a.MuiButton-root .MuiButton-startIcon {
  margin: 0 0.35rem 0 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: #000 !important;
}
.jf-lcars-active .MuiToolbar-root a.MuiButton-root .MuiSvgIcon-root {
  color: #000 !important;
  fill: #000 !important;
  font-size: 1.15rem !important;
}
.jf-lcars-active .MuiToolbar-root a.MuiButton-root img {
  filter: brightness(0) !important;
  max-height: 1.15em !important;
}

.jf-lcars-active .MuiAppBar-root .MuiToolbar-root > .MuiIconButton-root,
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root > a.MuiIconButton-root,
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root .MuiBox-root > .MuiIconButton-root,
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root .MuiStack-root > .MuiIconButton-root,
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root .MuiStack-root > a.MuiIconButton-root,
.jf-lcars-active .MuiAppBar-root button.MuiIconButton-root[aria-label="User Menu"],
.jf-lcars-active .MuiAppBar-root a.MuiIconButton-root[aria-label="Search"] {
  --lcars-tb-cap: 6px;
  --lcars-tb-gap: 6px;
  box-sizing: border-box !important;
  
  height: var(--lcars-tb-h) !important;
  min-height: var(--lcars-tb-h) !important;
  max-height: var(--lcars-tb-h) !important;
  width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
  min-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
  max-width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
  padding: 0 !important;
  padding-left: var(--lcars-tb-gap) !important;
  margin: 0 0.30rem !important;
  border-radius: 0 !important;
  border: none !important;
  border-left: var(--lcars-tb-cap) solid var(--orange-red) !important;
  background-color: var(--primary-gray) !important;
  color: #000 !important;
  position: relative !important;
  overflow: hidden !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.jf-lcars-active .MuiAppBar-root .MuiToolbar-root > .MuiIconButton-root::before,
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root > a.MuiIconButton-root::before,
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root .MuiBox-root > .MuiIconButton-root::before,
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root .MuiStack-root > .MuiIconButton-root::before,
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root .MuiStack-root > a.MuiIconButton-root::before,
.jf-lcars-active .MuiAppBar-root button.MuiIconButton-root[aria-label="User Menu"]::before,
.jf-lcars-active .MuiAppBar-root a.MuiIconButton-root[aria-label="Search"]::before {
  content: "" !important;
  position: absolute !important;
  left: 0 !important;
  top: 0 !important;
  width: var(--lcars-tb-gap) !important;
  height: 100% !important;
  background: #000 !important;
  pointer-events: none !important;
  z-index: 0 !important;
}
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root > .MuiIconButton-root > *,
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root .MuiBox-root > .MuiIconButton-root > *,
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root .MuiStack-root > .MuiIconButton-root > *,
.jf-lcars-active .MuiAppBar-root button.MuiIconButton-root[aria-label="User Menu"] > * {
  position: relative !important;
  z-index: 1 !important;
  margin-left: 0 !important;
}
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root .MuiIconButton-root:nth-of-type(2) {
  border-left-color: var(--medium-dark-gray) !important;
  background-color: var(--light-gray) !important;
}
.jf-lcars-active .MuiAppBar-root .MuiToolbar-root .MuiIconButton-root:nth-of-type(3),
.jf-lcars-active .MuiToolbar-root a.MuiIconButton-root[aria-label="Search"] {
  border-left-color: var(--orange-red) !important;
  background-color: var(--ghost-gray) !important;
}
.jf-lcars-active .MuiToolbar-root .MuiIconButton-root:hover {
  filter: brightness(1.15) !important;
}
.jf-lcars-active .MuiToolbar-root .MuiIconButton-root .MuiSvgIcon-root,
.jf-lcars-active .MuiToolbar-root .MuiIconButton-root .MuiBadge-root {
  position: relative !important;
  z-index: 1 !important;
  color: #000 !important;
  fill: #000 !important;
}
.jf-lcars-active .MuiToolbar-root .MuiIconButton-root .MuiSvgIcon-root {
  font-size: 1.3rem !important;
  margin: 0 !important;
}

.jf-lcars-active .MuiToolbar-root .MuiIconButton-root[aria-label="User Menu"] {
  border-left-color: var(--pale-orange-red) !important;
  background-color: var(--orange-red) !important;
  width: calc(var(--lcars-tb-cap) + var(--lcars-tb-gap) + var(--lcars-tb-h)) !important;
  height: var(--lcars-tb-h) !important;
}
.jf-lcars-active .MuiToolbar-root .MuiIconButton-root[aria-label="User Menu"] .MuiAvatar-root {
  background: transparent !important;
  width: 1.5rem !important;
  height: 1.5rem !important;
  margin: 0 !important;
}
.jf-lcars-active .MuiToolbar-root .MuiIconButton-root[aria-label="User Menu"] .MuiSvgIcon-root {
  color: #000 !important;
  fill: #000 !important;
}

.dashboardDocument .MuiButton-root,
.dashboardDocument button.MuiButton-root,
.dashboardDocument .MuiButtonBase-root.MuiButton-root,
.dashboardDocument .MuiLoadingButton-root,
.dashboardDocument .MuiToggleButton-root,
.dashboardDocument .MuiFab-root,
.jf-lcars-active .MuiButton-root {
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  min-height: 2.6rem !important;
  font-size: 0.95rem !important;
  line-height: 1.15 !important;
  position: relative !important;
  display: inline-flex !important;
  align-items: center !important;
  box-sizing: border-box !important;
}

.dashboardDocument .MuiButton-contained,
.dashboardDocument .MuiButton-containedPrimary,
.dashboardDocument .MuiButton-containedSecondary,
.dashboardDocument .MuiButton-containedInherit,
.dashboardDocument .MuiButton-containedSizeSmall,
.dashboardDocument .MuiButton-containedSizeMedium,
.dashboardDocument .MuiButton-containedSizeLarge,
.dashboardDocument .MuiButton-containedError,
.dashboardDocument .MuiButton-colorError.MuiButton-contained,
.dashboardDocument main .MuiButton-contained,
.dashboardDocument main .MuiButton-containedPrimary,
.jf-lcars-active .MuiButton-contained {
  --lcars-btn-cap: 6px;
  --lcars-btn-gap: 8px;
  color: #000 !important;
  border: none !important;
  box-shadow: none !important;
  background-color: #000 !important;
  background-image:
    linear-gradient(var(--orange-red), var(--orange-red)),
    linear-gradient(var(--light-gray), var(--light-gray)) !important;
  background-size:
    var(--lcars-btn-cap) 100%,
    calc(100% - var(--lcars-btn-cap) - var(--lcars-btn-gap)) 100% !important;
  background-position: left center, right center !important;
  background-repeat: no-repeat !important;
  padding: 0.45rem 1.15rem 0.45rem calc(var(--lcars-btn-cap) + var(--lcars-btn-gap) + 0.75rem) !important;
  font-size: 0.95rem !important;
  line-height: 1.15 !important;
  letter-spacing: 0.1em !important;
  text-align: right !important;
  justify-content: flex-end !important;
  align-items: center !important;
  
  min-height: 2.5rem !important;
  height: 2.5rem !important;
  max-height: 2.5rem !important;
  min-width: 7.5rem !important;
  align-self: flex-start !important;
  flex-grow: 0 !important;
  flex-shrink: 0 !important;
  box-sizing: border-box !important;
}

.dashboardDocument button.MuiButton-containedPrimary,
.dashboardDocument button[type="submit"].MuiButton-contained,
.jf-lcars-active button.MuiButton-containedPrimary {
  height: 2.5rem !important;
  max-height: 2.5rem !important;
  align-self: flex-start !important;
}
.dashboardDocument .MuiButton-contained:hover,
.dashboardDocument main .MuiButton-contained:hover,
.jf-lcars-active .MuiButton-contained:hover {
  background-color: #000 !important;
  background-image:
    linear-gradient(var(--orange-red), var(--orange-red)),
    linear-gradient(var(--ghost-gray), var(--ghost-gray)) !important;
  background-size:
    var(--lcars-btn-cap) 100%,
    calc(100% - var(--lcars-btn-cap) - var(--lcars-btn-gap)) 100% !important;
  background-position: left center, right center !important;
  background-repeat: no-repeat !important;
  color: #000 !important;
  border: none !important;
  filter: none !important;
}

.dashboardDocument .MuiButton-containedError,
.dashboardDocument .MuiButton-colorError.MuiButton-contained {
  background-image:
    linear-gradient(var(--pale-orange-red), var(--pale-orange-red)),
    linear-gradient(var(--orange-red), var(--orange-red)) !important;
  color: #000 !important;
}
.dashboardDocument .MuiButton-containedError:hover {
  background-image:
    linear-gradient(var(--pale-orange-red), var(--pale-orange-red)),
    linear-gradient(var(--light-orange-red), var(--light-orange-red)) !important;
}

.dashboardDocument .content-primary .MuiStack-root:has(> .MuiButton-contained) {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  align-items: stretch !important;
  gap: 0.55rem !important;
  row-gap: 0.55rem !important;
  column-gap: 0.55rem !important;
  margin-top: 0.35rem !important;
  margin-bottom: 0.35rem !important;
}
.dashboardDocument .content-primary .MuiStack-root:has(> .MuiButton-contained) > .MuiButton-root {
  margin: 0 !important;
  flex: 0 1 auto !important;
  align-self: stretch !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  
  padding-left: calc(var(--lcars-btn-cap, 6px) + var(--lcars-btn-gap, 8px) + 0.65rem) !important;
  padding-right: 0.85rem !important;
  min-width: 0 !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}
.dashboardDocument .content-primary .MuiStack-root:has(> .MuiButton-contained) > .MuiButton-root .MuiButton-startIcon {
  margin-right: 0.35rem !important;
  margin-left: 0 !important;
  flex-shrink: 0 !important;
}
.dashboardDocument .content-primary .MuiStack-root:has(> .MuiButton-contained) > .MuiButton-root .MuiSvgIcon-root {
  font-size: 1.15rem !important;
}

.dashboardDocument .MuiButton-containedSecondary {
  background-image:
    linear-gradient(var(--bright-blue), var(--bright-blue)),
    linear-gradient(var(--blue), var(--blue)) !important;
  color: #000 !important;
}

.dashboardDocument .MuiButton-outlined,
.dashboardDocument .MuiButton-outlinedPrimary,
.dashboardDocument .MuiButton-outlinedSecondary,
.dashboardDocument main .MuiButton-outlined,
.jf-lcars-active .MuiButton-outlined {
  background: #000 !important;
  color: var(--ghost-gray) !important;
  border: 2px solid var(--light-gray) !important;
  border-left: 2px solid var(--light-gray) !important;
}
.dashboardDocument .MuiButton-outlined:hover {
  border-color: var(--ghost-gray) !important;
  color: var(--starlight) !important;
  background: #000 !important;
}

.dashboardDocument .MuiButton-text,
.dashboardDocument .MuiButton-textPrimary {
  background: transparent !important;
  color: var(--ghost-gray) !important;
  border: none !important;
}
.dashboardDocument .MuiButton-text:hover {
  color: var(--starlight) !important;
  background: rgba(109, 116, 140, 0.2) !important;
}

.dashboardDocument .MuiButton-root.Mui-disabled {
  opacity: 0.4 !important;
}

.dashboardDocument .MuiIconButton-root {
  border-radius: 0 !important;
  color: var(--ghost-gray) !important;
  border: 2px solid var(--light-gray) !important;
  background: #000 !important;
  width: 2.5rem !important;
  height: 2.5rem !important;
  padding: 0 !important;
}
.dashboardDocument .MuiIconButton-root:hover {
  color: var(--starlight) !important;
  border-color: var(--ghost-gray) !important;
  background: #000 !important;
}
.dashboardDocument .MuiIconButton-root .MuiSvgIcon-root {
  color: inherit !important;
  fill: currentColor !important;
  font-size: 1.35rem !important;
}

.dashboardDocument .MuiButtonGroup-root {
  border-radius: 0 !important;
  box-shadow: none !important;
}
.dashboardDocument .MuiButtonGroup-root .MuiButton-root {
  border-radius: 0 !important;
}

.dashboardDocument .MuiToggleButton-root {
  border-radius: 0 !important;
  border: 2px solid var(--light-gray) !important;
  color: var(--ghost-gray) !important;
  background: #000 !important;
  text-transform: uppercase !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
}
.dashboardDocument .MuiToggleButton-root.Mui-selected {
  background: var(--light-gray) !important;
  color: #000 !important;
  border: none !important;
  border-left: 6px solid var(--orange-red) !important;
}

.dashboardDocument .content-primary:has(.newUserProfileForm),
.dashboardDocument .content-primary:has(form.newUserProfileForm) {
  min-width: 90% !important;
  max-width: 90% !important;
  box-sizing: border-box !important;
}
.dashboardDocument form.newUserProfileForm {
  min-width: 90% !important;
  max-width: 90% !important;
  box-sizing: border-box !important;
}

.dashboardDocument .content-primary .MuiCard-root .MuiStack-root > .MuiBox-root,
.dashboardDocument .content-primary .MuiCard-root .MuiStack-root > .MuiBox-root .MuiTypography-root {
  padding-left: 5px !important;
  box-sizing: border-box !important;
}
.dashboardDocument .content-primary .MuiGrid-container .MuiCard-root .MuiStack-root > .MuiBox-root:first-child {
  padding-left: 5px !important;
}
.dashboardDocument .content-primary .MuiCard-root .MuiStack-root > .MuiSvgIcon-root,
.dashboardDocument .content-primary .MuiGrid-container .MuiCard-root .MuiSvgIcon-root {
  padding-right: 5px !important;
  box-sizing: content-box !important;
}

#jf-lcars-user-rail,
#jf-lcars-user-rail.jf-lcars-user-rail-on,
.jf-lcars-rail-btn {
  display: none !important;
  visibility: hidden !important;
  pointer-events: none !important;
}

.dashboardDocument .content-primary .verticalSection {
  margin: 0 0 0.75rem 0 !important;
  padding: 0 !important;
}
.dashboardDocument .content-primary .sectionTitleContainer {
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  margin: 0 0 0.75rem 0 !important;
  padding: 0 !important;
}
.dashboardDocument .content-primary .sectionTitleContainer .sectionTitle,
.dashboardDocument .content-primary h2.sectionTitle {
  margin: 0 !important;
  padding: 0 !important;
}

.dashboardDocument #btnAddUser,
.dashboardDocument .sectionTitleButton.fab,
.dashboardDocument button.fab.sectionTitleButton.emby-button {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-sizing: border-box !important;
  width: 2rem !important;
  height: 2rem !important;
  min-width: 2rem !important;
  min-height: 2rem !important;
  max-width: 2rem !important;
  max-height: 2rem !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  border-radius: 0 !important;
  background: var(--orange-red, #e7442a) !important;
  background-image: none !important;
  box-shadow: none !important;
  color: #000 !important;
  line-height: 0 !important;
  vertical-align: middle !important;
  overflow: hidden !important;
}
.dashboardDocument #btnAddUser .material-icons,
.dashboardDocument .sectionTitleButton.fab .material-icons,
.dashboardDocument button.fab.sectionTitleButton .material-icons.add {
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 1.15rem !important;
  height: 1.15rem !important;
  font-size: 1.15rem !important;
  line-height: 1.15rem !important;
  color: #000 !important;
  position: static !important;
  transform: none !important;
}

.dashboardDocument .content-primary .localUsers.itemsContainer,
.dashboardDocument .content-primary .itemsContainer.vertical-wrap.localUsers,
.dashboardDocument .content-primary .itemsContainer.vertical-wrap {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: flex-start !important;
  align-items: flex-start !important;
  gap: 0.75rem !important;
  margin: 0 !important;
  padding: 0 !important;
}

.dashboardDocument .content-primary .localUsers .card.squareCard,
.dashboardDocument .content-primary .localUsers .card.scalableCard,
.dashboardDocument .content-primary .card.jf-lcars-user-selected,
.dashboardDocument .content-primary .localUsers .cardBox.visualCardBox {
  border: 3px solid var(--lcars-info-bright, var(--bright-blue)) !important;
  border-radius: 0 !important;
  background: #000 !important;
  box-shadow: none !important;
  margin: 0 !important;
  overflow: hidden !important;
}
.dashboardDocument .content-primary .localUsers .card .cardScalable {
  width: 100% !important;
  margin: 0 !important;
}
.dashboardDocument .content-primary .localUsers .card .cardContent,
.dashboardDocument .content-primary .localUsers .card .cardImage {
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  margin: 0 !important;
}
.dashboardDocument .content-primary .localUsers .card .cardImage {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.dashboardDocument .content-primary .localUsers .card .cardPadder-square {
  
  padding-bottom: 100% !important;
}
.dashboardDocument .content-primary .localUsers .card .cardBox,
.dashboardDocument .content-primary .localUsers .card .cardScalable,
.dashboardDocument .content-primary .localUsers .card .cardContent,
.dashboardDocument .content-primary .localUsers .card .cardFooter {
  border: none !important;
  box-shadow: none !important;
}
.dashboardDocument .content-primary .localUsers .card .cardFooter {
  padding: 0.5rem 0.65rem !important;
  background: #000 !important;
}
.dashboardDocument .content-primary .localUsers .card .cardText {
  text-align: left !important;
  color: var(--light-orange-red, #f2a69a) !important;
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
}
.dashboardDocument .content-primary .localUsers .card .cardText-secondary {
  color: var(--ghost-gray, #d2d5df) !important;
  text-transform: uppercase !important;
  font-size: 0.75rem !important;
}

.dashboardDocument .MuiFab-root {
  border-radius: 0 !important;
  background: var(--orange-red, #e7442a) !important;
  color: #000 !important;
  box-shadow: none !important;
  border: none !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 0 !important;
}

.dashboardDocument .MuiTab-root {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  border-radius: 0 !important;
  font-weight: 700 !important;
  letter-spacing: 0.05em !important;
}
.dashboardDocument .MuiTab-root.Mui-selected {
  background: var(--orange-red) !important;
  color: #000 !important;
}

.dashboardDocument .MuiChip-root,
.jf-lcars-active .MuiChip-root {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  font-weight: 700 !important;
  letter-spacing: 0.08em !important;
  border-radius: 100vmax !important;
  border: none !important;
  box-shadow: none !important;
  height: 2.35rem !important;
  min-height: 2.35rem !important;
  padding: 0 1.1rem !important;
  margin: 0.2rem 0.35rem 0.2rem 0 !important;
  box-sizing: border-box !important;
  color: #000 !important;
  background: var(--light-gray, #9ea5ba) !important;
  background-color: var(--light-gray, #9ea5ba) !important;
}
.dashboardDocument .MuiChip-label,
.jf-lcars-active .MuiChip-label {
  padding: 0 0.35rem !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  overflow: visible !important;
}

.dashboardDocument .MuiChip-root:nth-child(4n+1),
.jf-lcars-active .MuiChip-root:nth-child(4n+1) {
  background: var(--light-gray, #9ea5ba) !important;
  background-color: var(--light-gray, #9ea5ba) !important;
  color: #000 !important;
}
.dashboardDocument .MuiChip-root:nth-child(4n+2),
.jf-lcars-active .MuiChip-root:nth-child(4n+2) {
  background: var(--light-orange-red, #ff6753) !important;
  background-color: var(--light-orange-red, #ff6753) !important;
  color: #000 !important;
}
.dashboardDocument .MuiChip-root:nth-child(4n+3),
.jf-lcars-active .MuiChip-root:nth-child(4n+3) {
  background: var(--medium-dark-gray, #52596e) !important;
  background-color: var(--medium-dark-gray, #52596e) !important;
  color: var(--starlight, #f3f4f7) !important;
}
.dashboardDocument .MuiChip-root:nth-child(4n),
.jf-lcars-active .MuiChip-root:nth-child(4n) {
  background: var(--medium-dark-blue, #2a7193) !important;
  background-color: var(--medium-dark-blue, #2a7193) !important;
  color: var(--starlight, #f3f4f7) !important;
}
.dashboardDocument .MuiChip-root:hover,
.jf-lcars-active .MuiChip-root:hover {
  filter: brightness(1.12) !important;
}
.dashboardDocument .MuiChip-root.Mui-focusVisible,
.jf-lcars-active .MuiChip-root.Mui-focusVisible {
  outline: 2px solid var(--blue, #37a6d1) !important;
  outline-offset: 2px !important;
}

.dashboardDocument .MuiStack-root:has(> .MuiChip-root),
.dashboardDocument .MuiBox-root:has(> .MuiChip-root),
.dashboardDocument [class*="Chip"]:has(.MuiChip-root),
.jf-lcars-active .MuiStack-root:has(> .MuiChip-root),
.jf-lcars-active .MuiBox-root:has(> .MuiChip-root) {
  display: flex !important;
  flex-wrap: wrap !important;
  overflow-x: visible !important;
  overflow-y: visible !important;
  max-width: 100% !important;
  row-gap: 0.35rem !important;
  column-gap: 0.15rem !important;
  align-items: center !important;
}

.dashboardDocument .MuiInputBase-root,
.dashboardDocument .MuiOutlinedInput-root,
.dashboardDocument .MuiFilledInput-root {
  border-radius: 0 !important;
  font-family: var(--lcars-font) !important;
  color: var(--starlight) !important;
  background: #000 !important;
  box-sizing: border-box !important;
}

.dashboardDocument .MuiFilledInput-root {
  min-height: 4.1rem !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.dashboardDocument .MuiFilledInput-input {
  padding-top: calc(1.85rem + 7px) !important; 
  padding-bottom: 0.9rem !important; 
  padding-left: 1rem !important;
  padding-right: 0.85rem !important;
  line-height: 1.3 !important;
  font-size: 1rem !important;
  box-sizing: border-box !important;
}

.dashboardDocument .MuiFilledInput-root.MuiInputBase-multiline,
.dashboardDocument .MuiInputBase-root.MuiInputBase-multiline {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.dashboardDocument .MuiFilledInput-inputMultiline,
.dashboardDocument textarea.MuiFilledInput-input,
.dashboardDocument textarea.MuiInputBase-input {
  padding-top: 1.75rem !important;
  padding-bottom: 0.85rem !important;
  padding-left: 1.15rem !important;
  padding-right: 1rem !important;
  box-sizing: border-box !important;
  line-height: 1.45 !important;
}

.dashboardDocument .MuiOutlinedInput-input,
.dashboardDocument .MuiInputBase-input:not(.MuiFilledInput-input) {
  padding-top: 0.65rem !important;
  padding-bottom: 0.65rem !important;
  line-height: 1.3 !important;
  font-size: 1rem !important;
  box-sizing: border-box !important;
}
.dashboardDocument .MuiOutlinedInput-notchedOutline {
  border-color: var(--medium-dark-gray) !important;
  border-radius: 0 !important;
  border-width: 2px !important;
}
.dashboardDocument .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
  border-color: var(--light-gray) !important;
}
.dashboardDocument .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: var(--blue) !important;
}
.dashboardDocument .MuiInputLabel-root {
  font-family: var(--lcars-font) !important;
  color: var(--ghost-gray) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
}

.dashboardDocument .MuiInputLabel-root.MuiInputLabel-shrink,
.dashboardDocument .MuiInputLabel-filled.MuiInputLabel-shrink {
  transform: translate(12px, 14px) scale(0.75) !important;
  transform-origin: top left !important;
  max-width: calc(100% - 48px) !important;
}
.dashboardDocument .MuiFormControl-root,
.dashboardDocument .MuiTextField-root {
  margin-top: 0.75rem !important;
  margin-bottom: 0.5rem !important;
}

.dashboardDocument .MuiOutlinedInput-root:has(input[placeholder*="Search" i]),
.dashboardDocument .MuiOutlinedInput-root:has(input[type="search"]),
.dashboardDocument .MuiInputBase-root:has(input[placeholder*="Search" i]),
.dashboardDocument .MuiInputBase-root:has(input[type="search"]),
.dashboardDocument .MuiTextField-root:has(input[placeholder*="Search" i]) .MuiOutlinedInput-root,
.dashboardDocument .MuiTextField-root:has(input[type="search"]) .MuiOutlinedInput-root {
  min-height: 2.6rem !important;
  height: 2.6rem !important;
  max-height: 2.6rem !important;
  border-radius: 0 !important;
  background: #000 !important;
  box-sizing: border-box !important;
  align-items: center !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.dashboardDocument .MuiOutlinedInput-root:has(input[placeholder*="Search" i]) .MuiOutlinedInput-notchedOutline,
.dashboardDocument .MuiOutlinedInput-root:has(input[type="search"]) .MuiOutlinedInput-notchedOutline,
.dashboardDocument .MuiTextField-root:has(input[placeholder*="Search" i]) .MuiOutlinedInput-notchedOutline,
.dashboardDocument .MuiTextField-root:has(input[type="search"]) .MuiOutlinedInput-notchedOutline {
  border: 2px solid var(--light-gray) !important;
  border-radius: 0 !important;
}
.dashboardDocument .MuiOutlinedInput-root:has(input[placeholder*="Search" i]):hover .MuiOutlinedInput-notchedOutline,
.dashboardDocument .MuiOutlinedInput-root:has(input[type="search"]):hover .MuiOutlinedInput-notchedOutline {
  border-color: var(--ghost-gray) !important;
}
.dashboardDocument input[placeholder*="Search" i],
.dashboardDocument input[type="search"],
.dashboardDocument .MuiOutlinedInput-root:has(input[placeholder*="Search" i]) input,
.dashboardDocument .MuiOutlinedInput-root:has(input[type="search"]) input,
.dashboardDocument .MuiInputBase-input[placeholder*="Search" i] {
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  font-size: 0.95rem !important;
  line-height: 1.15 !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  color: var(--ghost-gray) !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  height: 100% !important;
  box-sizing: border-box !important;
}
.dashboardDocument input[placeholder*="Search" i]::placeholder,
.dashboardDocument input[type="search"]::placeholder,
.dashboardDocument .MuiInputBase-input[placeholder*="Search" i]::placeholder {
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  font-size: 0.95rem !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  color: var(--ghost-gray) !important;
  opacity: 1 !important;
}

.dashboardDocument .MuiStack-root:has(> .MuiTypography-h1) .MuiTextField-root:has(input[placeholder*="Search" i]),
.dashboardDocument .MuiStack-root:has(> .MuiTypography-h2) .MuiTextField-root:has(input[placeholder*="Search" i]),
.dashboardDocument .MuiStack-root:has(> .MuiButton-outlined) .MuiTextField-root:has(input[placeholder*="Search" i]),
.dashboardDocument .MuiStack-root:has(> .MuiButton-outlined) .MuiTextField-root:has(input[type="search"]),
.dashboardDocument .MuiBox-root:has(> .MuiButton-outlined) .MuiTextField-root:has(input[placeholder*="Search" i]) {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  align-self: center !important;
}

@media (max-width: 749.98px) {
  
  .dashboardDocument .MuiStack-root:has(> .MuiButton-outlined):has(input[placeholder*="Search" i]),
  .dashboardDocument .MuiStack-root:has(> .MuiTypography-h1):has(input[placeholder*="Search" i]),
  .dashboardDocument .MuiStack-root:has(> .MuiTypography-root):has(input[placeholder*="Search" i]) {
    flex-wrap: wrap !important;
    flex-direction: row !important;
    row-gap: 0.5rem !important;
  }
  
  .dashboardDocument .MuiStack-root:has(> .MuiButton-outlined) > .MuiBox-root:has(input[placeholder*="Search" i]),
  .dashboardDocument .MuiStack-root:has(> .MuiTypography-h1) > .MuiBox-root:has(input[placeholder*="Search" i]),
  .dashboardDocument .MuiStack-root:has(> .MuiTypography-root) > .MuiBox-root:has(input[placeholder*="Search" i]),
  .dashboardDocument .MuiStack-root > .MuiBox-root:has(.MuiInputBase-root input[placeholder*="Search" i]) {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    flex: 1 1 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-top: 0.5rem !important;
    justify-content: stretch !important;
    display: flex !important;
    box-sizing: border-box !important;
  }
  
  .dashboardDocument .MuiStack-root > .MuiBox-root:has(input[placeholder*="Search" i]) > div,
  .dashboardDocument .MuiBox-root:has(input[placeholder*="Search" i]) > div:has(> .MuiInputBase-root) {
    width: 100% !important;
    max-width: 100% !important;
    flex: 1 1 100% !important;
    box-sizing: border-box !important;
  }
  .dashboardDocument .MuiStack-root > .MuiBox-root:has(input[placeholder*="Search" i]) .MuiInputBase-root,
  .dashboardDocument .MuiStack-root > .MuiBox-root:has(input[placeholder*="Search" i]) .MuiInputBase-input {
    width: 100% !important;
    max-width: 100% !important;
  }
}
.dashboardDocument .MuiFormHelperText-root {
  margin-top: 0.4rem !important;
  margin-bottom: 0.25rem !important;
  line-height: 1.4 !important;
}

.dashboardDocument form,
.dashboardDocument form .MuiStack-root {
  width: 100% !important;
  max-width: 100% !important;
  min-width: 0 !important;
  box-sizing: border-box !important;
  overflow-x: hidden !important;
  padding-right: 1.25rem !important;
}
.dashboardDocument form .MuiFormControl-root,
.dashboardDocument form .MuiTextField-root {
  width: 100% !important;
  max-width: 100% !important;
  min-width: 0 !important;
  box-sizing: border-box !important;
  overflow-x: hidden !important;
  padding-right: 0.25rem !important;
}
.dashboardDocument form .MuiFormHelperText-root,
.dashboardDocument form .MuiFormHelperText-root a,
.dashboardDocument form .MuiFormControl-root > p {
  display: block !important;
  width: auto !important;
  max-width: 100% !important;
  min-width: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-right: 1rem !important;
  box-sizing: border-box !important;
  white-space: normal !important;
  overflow-wrap: anywhere !important;
  word-break: break-word !important;
}

.dashboardDocument .content-primary:has(form),
.dashboardDocument .content-primary:has(.MuiFormControl-root) {
  padding-right: 1.5rem !important;
  box-sizing: border-box !important;
}

.dashboardDocument form .MuiSelect-select,
.dashboardDocument form .MuiSelect-filled,
.dashboardDocument form .MuiInputBase-input.MuiSelect-select,
.dashboardDocument .MuiSelect-select,
.dashboardDocument .MuiSelect-filled {
  padding-right: 2.5rem !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}
.dashboardDocument form .MuiSelect-icon,
.dashboardDocument .MuiSelect-icon,
.dashboardDocument form .MuiSelect-iconFilled,
.dashboardDocument .MuiSelect-iconFilled {
  position: absolute !important;
  right: 0.65rem !important;
  left: auto !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  pointer-events: none !important;
  z-index: 1 !important;
}
.dashboardDocument form .MuiInputBase-root.MuiSelect-root,
.dashboardDocument form .MuiFilledInput-root.MuiSelect-root,
.dashboardDocument .MuiInputBase-root.MuiSelect-root {
  position: relative !important;
  padding-right: 0 !important;
}
.dashboardDocument .MuiFormControlLabel-root {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.dashboardDocument .MuiInput-root,
.dashboardDocument .MuiInput-underline {
  margin-top: 0.5rem !important;
  min-height: 2.5rem !important;
}
.dashboardDocument .MuiInput-input {
  padding-top: 0.5rem !important;
  padding-bottom: 0.35rem !important;
}

.dashboardDocument .MuiAlert-root {
  border-radius: 0 !important;
  font-family: var(--lcars-font) !important;
  border: 2px solid var(--medium-dark-gray) !important;
  background: #000 !important;
  color: var(--ghost-gray) !important;
}

.jf-lcars-active .detailPageWrapperContainer .itemTags a.button-link,
.jf-lcars-active .detailPageWrapperContainer .itemTags a.emby-button,
.jf-lcars-active .detailPageWrapperContainer .itemExternalLinks a.button-link,
.jf-lcars-active .detailPageWrapperContainer .itemExternalLinks a.emby-button,
.jf-lcars-active .detailPageWrapperContainer .itemDetailsGroup a.button-link,
.jf-lcars-active .detailPageWrapperContainer .itemDetailsGroup a.emby-button,
.jf-lcars-active .detailPageWrapperContainer a.overview-expand,
.jf-lcars-active .detailPageWrapperContainer .overview-controls a.emby-button {
  background: none !important;
  background-image: none !important;
  background-color: transparent !important;
  border: none !important;
  border-left: none !important;
  box-shadow: none !important;
  min-width: 0 !important;
  min-height: 0 !important;
  padding: 0.1rem 0.25rem !important;
  margin: 0 0.2rem 0 0 !important;
  color: var(--ghost-gray, #d2d5df) !important;
  -webkit-text-fill-color: var(--ghost-gray, #d2d5df) !important;
  text-transform: none !important;
  letter-spacing: normal !important;
  font-weight: 500 !important;
  font-size: inherit !important;
  display: inline !important;
  line-height: inherit !important;
}
.jf-lcars-active .detailPageWrapperContainer .itemTags a.button-link:hover,
.jf-lcars-active .detailPageWrapperContainer .itemExternalLinks a.button-link:hover,
.jf-lcars-active .detailPageWrapperContainer .itemDetailsGroup a.button-link:hover,
.jf-lcars-active .detailPageWrapperContainer a.overview-expand:hover {
  color: var(--starlight, #f3f4f7) !important;
  -webkit-text-fill-color: var(--starlight, #f3f4f7) !important;
  text-decoration: underline !important;
  filter: none !important;
  background: none !important;
  background-image: none !important;
}
.jf-lcars-active .detailPageWrapperContainer .itemDetailsGroup .label,
.jf-lcars-active .detailPageWrapperContainer .detailsGroupItem .label,
.jf-lcars-active .detailPageWrapperContainer .detailsGroupItem p.label {
  background: none !important;
  background-image: none !important;
  border: none !important;
  border-left: none !important;
  color: var(--light-gray, #9ea5ba) !important;
  padding: 0 !important;
  margin: 0 0.5rem 0 0 !important;
  min-width: 0 !important;
  display: inline !important;
}
.jf-lcars-active .detailPageWrapperContainer .itemDetailsGroup,
.jf-lcars-active .detailPageWrapperContainer .detailsGroupItem,
.jf-lcars-active .detailPageWrapperContainer .detailSectionContent,
.jf-lcars-active .detailPageWrapperContainer .overview,
.jf-lcars-active .detailPageWrapperContainer .tagline {
  border-left: none !important;
  padding-left: 0 !important;
}

.jf-lcars-active .detailPageWrapperContainer .detailPagePrimaryContainer {
  display: grid !important;
  grid-template-columns: auto 1fr !important;
  grid-template-rows: auto auto !important;
  grid-template-areas:
    "poster ribbon"
    "poster content" !important;
  align-items: start !important;
  column-gap: 1.25rem !important;
  row-gap: 30px !important;
  overflow: visible !important;
}
.jf-lcars-active .detailPageWrapperContainer .detailImageContainer {
  grid-area: poster !important;
  margin: 0 !important;
  padding: 0 !important;
  align-self: start !important;
}
.jf-lcars-active .detailPageWrapperContainer .detailRibbon {
  grid-area: ribbon !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: stretch !important;
  flex-wrap: nowrap !important;
  gap: 0.35rem !important;
  box-sizing: border-box !important;
  position: relative !important;
  height: auto !important;
  min-height: 0 !important;
  max-height: none !important;
  padding: 0.5rem 1rem !important;
  margin: 0 !important;
  overflow: visible !important;
  width: 100% !important;
}
.jf-lcars-active .detailPageWrapperContainer .detailRibbon .infoWrapper {
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  order: 1 !important;
  flex: 0 0 auto !important;
  margin: 0 !important;
  padding: 0 !important;
}
.jf-lcars-active .detailPageWrapperContainer .detailRibbon .mainDetailButtons {
  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  width: 100% !important;
  max-width: 100% !important;
  order: 2 !important;
  flex: 0 0 auto !important;
  gap: 8px !important;
  margin: 0 !important;
  padding: 0 !important;
  position: relative !important;
  z-index: 2 !important;
}
.jf-lcars-active .detailPageWrapperContainer .detailPagePrimaryContent {
  grid-area: content !important;
  margin: 30px 0 0 0 !important;
  padding-top: 0 !important;
  padding-left: 1rem !important;
  padding-right: 15px !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  clear: none !important;
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}
.jf-lcars-active .detailPageWrapperContainer .detailPagePrimaryContent.padded-right,
.jf-lcars-active .detailPageWrapperContainer .detailPagePrimaryContent.padded-left,
.jf-lcars-active .detailPageWrapperContainer .detailPagePrimaryContent.padded-left.padded-right {
  padding-left: 1rem !important;
  padding-right: 15px !important;
  margin-left: 0 !important;
}
.jf-lcars-active .detailPageWrapperContainer .detailRibbon {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}
.jf-lcars-active .detailPageWrapperContainer .detailSection {
  margin-left: 0 !important;
  padding-left: 0 !important;
  border-left: 2px solid var(--orange-red, #e7442a) !important;
  padding-left: 10px !important;
  box-sizing: border-box !important;
}
.jf-lcars-active .detailPageWrapperContainer .detailSectionContent,
.jf-lcars-active .detailPageWrapperContainer .itemDetailsGroup,
.jf-lcars-active .detailPageWrapperContainer .overview,
.jf-lcars-active .detailPageWrapperContainer .tagline,
.jf-lcars-active .detailPageWrapperContainer .detailSectionContent p {
  margin-left: 0 !important;
  padding-left: 0 !important;
  border-left: none !important;
}
.jf-lcars-active .detailPageWrapperContainer .overview-controls,
.jf-lcars-active .detailPageWrapperContainer a.overview-expand {
  margin-right: 15px !important;
}
@media (max-width: 999px) {
  .jf-lcars-active .layout-desktop .itemBackdrop,
  .layout-desktop:has(.detailPageWrapperContainer) .itemBackdrop,
  .jf-lcars-active:has(.detailPageWrapperContainer) .layout-desktop .itemBackdrop,
  .jf-lcars-active .itemBackdrop {
    height: 8vh !important;
    min-height: 8vh !important;
    max-height: 8vh !important;
  }
  .jf-lcars-active .detailPageWrapperContainer .detailPagePrimaryContainer {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    grid-template-columns: none !important;
    grid-template-areas: none !important;
  }
  .jf-lcars-active .detailPageWrapperContainer .detailImageContainer,
  .jf-lcars-active .detailPageWrapperContainer .detailImageContainer.hide-mobile,
  .jf-lcars-active .detailPageWrapperContainer .detailImageContainer.hide-desktop {
    display: block !important;
    position: relative !important;
    order: 1 !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 auto 0.75rem auto !important;
    padding: 0 !important;
    float: none !important;
    left: auto !important;
    top: auto !important;
    right: auto !important;
    z-index: 1 !important;
  }
  .jf-lcars-active .detailPageWrapperContainer .detailImageContainer .card,
  .jf-lcars-active .detailPageWrapperContainer .detailImageContainer .portraitCard,
  .jf-lcars-active .detailPageWrapperContainer .detailImageContainer .cardBox {
    position: relative !important;
    width: min(280px, 70vw) !important;
    max-width: min(280px, 70vw) !important;
    margin: 0 auto !important;
    float: none !important;
  }
  .jf-lcars-active .detailPageWrapperContainer .detailRibbon {
    order: 2 !important;
    position: relative !important;
    width: 100% !important;
    margin: 0 !important;
    z-index: 2 !important;
  }
  .jf-lcars-active .detailPageWrapperContainer .detailPagePrimaryContent {
    order: 3 !important;
    position: relative !important;
    width: 100% !important;
    margin-top: 20px !important;
    z-index: 2 !important;
  }
  .jf-lcars-active .detailPageWrapperContainer .detailRibbon .infoWrapper .detailImageContainer {
    display: none !important;
  }
}

.jf-lcars-active .detailPageWrapperContainer .mainDetailButtons {
  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  gap: 8px !important;
}
.jf-lcars-active .detailPageWrapperContainer .mainDetailButtons .detailButton,
.jf-lcars-active .detailPageWrapperContainer .mainDetailButtons button.button-flat.detailButton,
.jf-lcars-active .detailPageWrapperContainer .mainDetailButtons button.emby-button.detailButton {
  --lcars-db-cap: 6px;
  --lcars-db-gap: 8px;
  --lcars-db-size: 2.6rem;
  box-sizing: border-box !important;
  width: calc(var(--lcars-db-cap) + var(--lcars-db-gap) + var(--lcars-db-size)) !important;
  min-width: calc(var(--lcars-db-cap) + var(--lcars-db-gap) + var(--lcars-db-size)) !important;
  max-width: calc(var(--lcars-db-cap) + var(--lcars-db-gap) + var(--lcars-db-size)) !important;
  height: var(--lcars-db-size) !important;
  min-height: var(--lcars-db-size) !important;
  max-height: var(--lcars-db-size) !important;
  margin: 0 !important;
  padding: 0 0 0 var(--lcars-db-gap) !important;
  border: none !important;
  border-left: var(--lcars-db-cap) solid var(--orange-red, #e7442a) !important;
  border-radius: 0 !important;
  background: var(--light-gray, #9ea5ba) !important;
  background-color: var(--light-gray, #9ea5ba) !important;
  background-image: none !important;
  color: #000 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  position: relative !important;
  overflow: hidden !important;
  box-shadow: none !important;
}
.jf-lcars-active .detailPageWrapperContainer .mainDetailButtons .detailButton::before {
  content: "" !important;
  position: absolute !important;
  left: 0 !important;
  top: 0 !important;
  width: var(--lcars-db-gap) !important;
  height: 100% !important;
  background: #000 !important;
  pointer-events: none !important;
  z-index: 0 !important;
}
.jf-lcars-active .detailPageWrapperContainer .mainDetailButtons .detailButton .detailButton-content,
.jf-lcars-active .detailPageWrapperContainer .mainDetailButtons .detailButton .material-icons,
.jf-lcars-active .detailPageWrapperContainer .mainDetailButtons .detailButton .detailButton-icon {
  position: relative !important;
  z-index: 1 !important;
  margin: 0 !important;
  color: #000 !important;
  font-size: 1.35rem !important;
  line-height: 1 !important;
}
.jf-lcars-active .detailPageWrapperContainer .mainDetailButtons .detailButton:hover {
  background: var(--ghost-gray, #d2d5df) !important;
  background-color: var(--ghost-gray, #d2d5df) !important;
  background-image: none !important;
  filter: none !important;
}

.jf-lcars-active .emby-button:not(.headerButton):not(.cardOverlayButton):not(.emby-button-outline):not(.button-link):not(.button-flat):not(.detailButton):not(.overview-expand),
.jf-lcars-active button.raised:not(.button-flat):not(.detailButton),
.jf-lcars-active .raised.emby-button:not(.button-flat):not(.detailButton),
.jf-lcars-active .fab.emby-button,
.jf-lcars-active .btnSubmit,
.jf-lcars-active .button-submit {
  --lcars-btn-cap: 6px;
  --lcars-btn-gap: 8px;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  font-size: 0.95rem !important;
  line-height: 1.15 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  min-height: 2.6rem !important;
  min-width: 7.5rem !important;
  text-align: right !important;
  justify-content: flex-end !important;
  display: inline-flex !important;
  align-items: center !important;
  color: #000 !important;
  border: none !important;
  background-color: #000 !important;
  background-image:
    linear-gradient(var(--orange-red), var(--orange-red)),
    linear-gradient(var(--light-gray), var(--light-gray)) !important;
  background-size:
    var(--lcars-btn-cap) 100%,
    calc(100% - var(--lcars-btn-cap) - var(--lcars-btn-gap)) 100% !important;
  background-position: left center, right center !important;
  background-repeat: no-repeat !important;
  padding: 0.5rem 1.15rem 0.5rem calc(var(--lcars-btn-cap) + var(--lcars-btn-gap) + 0.75rem) !important;
}
.jf-lcars-active .emby-button:not(.headerButton):not(.cardOverlayButton):not(.button-link):not(.button-flat):not(.detailButton):hover,
.jf-lcars-active button.raised:not(.button-flat):not(.detailButton):hover {
  background-image:
    linear-gradient(var(--orange-red), var(--orange-red)),
    linear-gradient(var(--ghost-gray), var(--ghost-gray)) !important;
  color: #000 !important;
}

.jf-lcars-active .emby-button-outline,
.jf-lcars-active button.emby-button.emby-button-outline {
  background: #000 !important;
  color: var(--ghost-gray) !important;
  border: 2px solid var(--light-gray) !important;
  border-radius: 0 !important;
}

.jf-lcars-active .actionSheetMenuItem,
.jf-lcars-active .listItem-button {
  font-family: var(--lcars-font) !important;
  text-transform: uppercase !important;
  border-radius: 0 !important;
}

@media (max-width: 600px) {
  :root {
    --lcars-sidebar: 42px;
    --lcars-elbow-size: 32px;
  }
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] {
  position: sticky !important;
  top: var(--lcars-nav-sticky-top, 52px) !important;
  z-index: 19 !important;
}

#jf-lcars-header-mask {
  display: none;
  position: fixed !important;
  left: 0 !important;
  right: 0 !important;
  top: 0 !important;
  height: calc(var(--lcars-dash-row-top, 48px) + var(--lcars-dash-arm, 30px)) !important;
  background: #000 !important;
  background-color: #000 !important;
  z-index: 12020 !important;
  pointer-events: none !important;
  border: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
.dashboardDocument #jf-lcars-header-mask {
  display: block !important;
}
.dashboardDocument .MuiAppBar-root,
.dashboardDocument header.MuiAppBar-root {
  background: #000 !important;
  background-color: #000 !important;
  background-image: none !important;
  box-shadow: none !important;
  opacity: 1 !important;
  z-index: 12035 !important;
}

.dashboardDocument .jf-lcars-top-runner,
#jf-lcars-top-runner {
  position: fixed !important;
  z-index: 12045 !important;
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: none !important;
}
.dashboardDocument .jf-lcars-top-runner {
  left: calc(var(--lcars-admin-drawer, 240px) + 96px) !important;
  top: var(--lcars-dash-row-top, 52px) !important;
  right: 0 !important;
  height: var(--lcars-dash-arm, 30px) !important;
}
#jf-lcars-elbow-chrome {
  display: none;
  position: fixed !important;
  z-index: 12046 !important;
  pointer-events: none !important;
  overflow: visible !important;
  background: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
}
.dashboardDocument #jf-lcars-elbow-chrome {
  display: block !important;
}
#jf-lcars-elbow-chrome .jf-lcars-elbow-arm {
  position: absolute !important;
  left: 0 !important;
  top: 0 !important;
  width: var(--lcars-dash-arm-len, 192px) !important;
  height: var(--lcars-dash-arm, 30px) !important;
  background: var(--lcars-dash-fill, var(--primary-gray)) !important;
  background-color: var(--lcars-dash-fill, var(--primary-gray)) !important;
}
#jf-lcars-elbow-chrome .jf-lcars-elbow-curve {
  position: absolute !important;
  left: calc(0px - (var(--lcars-dash-curve, 60px) - var(--lcars-dash-arm, 30px))) !important;
  top: 0 !important;
  width: var(--lcars-dash-curve, 60px) !important;
  height: var(--lcars-dash-curve, 60px) !important;
  background: var(--lcars-dash-fill, var(--primary-gray)) !important;
  background-color: var(--lcars-dash-fill, var(--primary-gray)) !important;
  -webkit-mask-image: radial-gradient(
    circle at 100% 100%,
    transparent 0,
    transparent calc(var(--lcars-dash-curve, 60px) - var(--lcars-dash-arm, 30px)),
    #000 calc(var(--lcars-dash-curve, 60px) - var(--lcars-dash-arm, 30px) + 1px)
  ) !important;
  mask-image: radial-gradient(
    circle at 100% 100%,
    transparent 0,
    transparent calc(var(--lcars-dash-curve, 60px) - var(--lcars-dash-arm, 30px)),
    #000 calc(var(--lcars-dash-curve, 60px) - var(--lcars-dash-arm, 30px) + 1px)
  ) !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]::before,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]::before,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]::after,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]::after,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"] .jf-lcars-dash-arm-hit,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] .jf-lcars-dash-arm-hit,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"] .jf-lcars-dash-curve-hit,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] .jf-lcars-dash-curve-hit {
  content: none !important;
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] {
  position: fixed !important;
  top: var(--lcars-nav-sticky-top, 52px) !important;
  left: 0 !important;
  width: var(--lcars-admin-drawer, 240px) !important;
  z-index: 12050 !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: var(--lcars-admin-drawer, 240px) !important;
  z-index: 12051 !important;
  background: #000 !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard"]),
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard/"]) {
  min-height: calc(var(--lcars-dash-row-height, 10.8rem) + 3px) !important;
  height: calc(var(--lcars-dash-row-height, 10.8rem) + 3px) !important;
  max-height: calc(var(--lcars-dash-row-height, 10.8rem) + 3px) !important;
  padding-bottom: 3px !important;
  box-sizing: border-box !important;
}

html.jf-lcars-active,
html.jf-lcars-active.dashboardDocument {
  --lcars-nav-sticky-top: 54px;
  --lcars-dash-row-height: 10.8rem;
  --lcars-admin-drawer: 240px;
}

#jf-lcars-nav-header-spacer {
  display: none !important;
  height: 0 !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  pointer-events: none !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root[aria-labelledby="server-subheader"] {
  
  margin-top: var(--lcars-nav-sticky-top, 54px) !important;
  padding-top: 0 !important;
}

.dashboardDocument main .MuiTableContainer-root,
.dashboardDocument main .MuiPaper-root:has(.MuiTable-root),
.dashboardDocument main .MuiPaper-root:has(table),
.dashboardDocument .content-primary .MuiTableContainer-root,
.dashboardDocument .content-primary .MuiPaper-root:has(.MuiTable-root) {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}
.dashboardDocument main .MuiTable-root,
.dashboardDocument main table,
.dashboardDocument .content-primary .MuiTable-root,
.dashboardDocument .content-primary table {
  width: 100% !important;
  max-width: 100% !important;
  table-layout: auto !important;
}
.dashboardDocument main .MuiTable-root .MuiTableCell-root,
.dashboardDocument .content-primary .MuiTableCell-root {
  white-space: nowrap !important;
}
.dashboardDocument main .MuiBox-root:has(> .MuiTableContainer-root),
.dashboardDocument main .MuiBox-root:has(.MuiTable-root) {
  width: 100% !important;
  max-width: 100% !important;
}
.dashboardDocument .content-primary > .MuiPaper-root,
.dashboardDocument main > .MuiPaper-root {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.MuiPopover-paper.MuiMenu-paper,
.MuiMenu-paper,
.MuiPopover-paper {
  background: #000 !important;
  background-color: #000 !important;
  background-image: none !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  padding: 6px 8px !important;
  overflow: visible !important;
}

.MuiPopover-paper.MuiMenu-paper.jf-lcars-user-menu,
.MuiMenu-paper.jf-lcars-user-menu,
.jf-lcars-user-menu.MuiPaper-root {
  top: var(--lcars-user-menu-top, 78px) !important;
  position: fixed !important;
  max-height: calc(100vh - var(--lcars-user-menu-top, 78px) - 12px) !important;
  overflow-y: auto !important;
}
.MuiMenu-list,
.MuiMenu-paper .MuiList-root {
  background: #000 !important;
  padding: 0 !important;
  margin: 0 !important;
}
.MuiMenuItem-root,
.MuiMenu-paper .MuiMenuItem-root,
.MuiPopover-paper .MuiMenuItem-root {
  display: flex !important;
  align-items: center !important;
  justify-content: flex-end !important;
  gap: 0 !important;
  min-height: 2.25rem !important;
  height: auto !important;
  margin: 0 0 6px 0 !important;
  padding: 0.4rem 0.75rem 0.4rem 0.5rem !important;
  background: #000 !important;
  background-color: #000 !important;
  color: var(--starlight) !important;
  border: 2px solid var(--orange-red) !important;
  border-radius: 0 !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
  text-align: right !important;
  box-sizing: border-box !important;
}
.MuiMenuItem-root:last-child {
  margin-bottom: 0 !important;
}

.MuiMenuItem-root::before {
  content: "" !important;
  display: block !important;
  flex: 0 0 14px !important;
  width: 14px !important;
  height: 14px !important;
  min-width: 14px !important;
  margin: 0 12px 0 0 !important; 
  background: var(--primary-gray) !important;
  background-color: var(--primary-gray) !important;
  border-radius: 0 !important;
  order: -1 !important;
}
.MuiMenuItem-root:nth-child(3n+1)::before {
  background: var(--primary-gray) !important;
}
.MuiMenuItem-root:nth-child(3n+2)::before {
  background: var(--medium-dark-gray) !important;
}
.MuiMenuItem-root:nth-child(3n+3)::before {
  background: var(--ghost-gray) !important;
}
.MuiMenuItem-root:hover {
  background: #000 !important;
  background-color: #000 !important;
  border-color: var(--pale-orange-red) !important;
  color: var(--starlight) !important;
}
.MuiMenuItem-root.Mui-disabled {
  opacity: 0.45 !important;
  border-color: var(--medium-dark-gray) !important;
  color: var(--light-gray) !important;
}
.MuiMenuItem-root.Mui-disabled::before {
  background: var(--medium-dark-gray) !important;
  opacity: 0.7 !important;
}
.MuiMenuItem-root .MuiListItemIcon-root {
  min-width: 28px !important;
  margin-right: 8px !important;
  color: var(--orange-red) !important;
}
.MuiMenuItem-root .MuiSvgIcon-root {
  color: var(--orange-red) !important;
  fill: currentColor !important;
  font-size: 1.15rem !important;
}
.MuiMenuItem-root .MuiBox-root {
  display: flex !important;
  align-items: center !important;
  justify-content: flex-end !important;
  flex: 1 1 auto !important;
  text-align: right !important;
  color: inherit !important;
  font-family: inherit !important;
  text-transform: uppercase !important;
}
.MuiMenuItem-divider {
  border-bottom: none !important;
  margin-bottom: 6px !important;
}

html.jf-lcars-dash-hot .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
html.jf-lcars-dash-hot .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"],
html.jf-lcars-dash-hot #jf-lcars-elbow-chrome .jf-lcars-elbow-arm,
html.jf-lcars-dash-hot #jf-lcars-elbow-chrome .jf-lcars-elbow-curve,
html.jf-lcars-dash-hot .jf-lcars-top-runner .jf-lcars-seg-a,
.dashboardDocument:has(.MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]:hover) #jf-lcars-elbow-chrome .jf-lcars-elbow-arm,
.dashboardDocument:has(.MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]:hover) #jf-lcars-elbow-chrome .jf-lcars-elbow-arm,
.dashboardDocument:has(.MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]:hover) #jf-lcars-elbow-chrome .jf-lcars-elbow-curve,
.dashboardDocument:has(.MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]:hover) #jf-lcars-elbow-chrome .jf-lcars-elbow-curve,
.dashboardDocument:has(.MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]:hover) .jf-lcars-top-runner .jf-lcars-seg-a,
.dashboardDocument:has(.MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]:hover) .jf-lcars-top-runner .jf-lcars-seg-a {
  --lcars-dash-fill: var(--ghost-gray) !important;
  background: var(--ghost-gray) !important;
  background-color: var(--ghost-gray) !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard"]),
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard/"]) {
  background: #000 !important;
  background-color: #000 !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  
  min-height: var(--lcars-dash-row-height, 10.8rem) !important;
  height: auto !important;
  max-height: none !important;
  overflow: visible !important;
  box-sizing: border-box !important;
  position: relative !important;
}
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] {
  height: var(--lcars-dash-row-height, 10.8rem) !important;
  min-height: var(--lcars-dash-row-height, 10.8rem) !important;
  max-height: var(--lcars-dash-row-height, 10.8rem) !important;
  margin: 0 !important;
  padding-bottom: 0.75rem !important;
  border-bottom: none !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
}
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]:hover,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]:hover,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].Mui-selected,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"].Mui-selected {
  border-bottom: none !important;
  max-height: var(--lcars-dash-row-height, 10.8rem) !important;
  height: var(--lcars-dash-row-height, 10.8rem) !important;
}
#jf-lcars-nav-header-spacer {
  background: #000 !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].Mui-selected,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"].Mui-selected,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].Mui-selected:hover,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"].Mui-selected:hover {
  --lcars-dash-fill: var(--primary-gray) !important;
  background: var(--primary-gray) !important;
  background-color: var(--primary-gray) !important;
  color: #000 !important;
  opacity: 1 !important;
  filter: none !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  top: var(--lcars-nav-sticky-top, 52px) !important;
  height: var(--lcars-dash-row-height, 10.8rem) !important;
  min-height: var(--lcars-dash-row-height, 10.8rem) !important;
}
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].Mui-selected.jf-lcars-dash-hot,
html.jf-lcars-dash-hot .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].Mui-selected,
html.jf-lcars-dash-hot .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"].Mui-selected {
  --lcars-dash-fill: var(--ghost-gray) !important;
  background: var(--ghost-gray) !important;
  background-color: var(--ghost-gray) !important;
}

.dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child {
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  box-shadow: none !important;
}
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] {
  top: var(--lcars-nav-sticky-top, 52px) !important;
  margin-top: 0 !important;
  border-top: none !important;
}

.dashboardDocument .jf-lcars-top-runner .jf-lcars-seg-a,
#jf-lcars-top-runner .jf-lcars-seg-a {
  background: var(--lcars-dash-fill, var(--primary-gray)) !important;
  background-color: var(--lcars-dash-fill, var(--primary-gray)) !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard"]) + .MuiListItem-root,
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard/"]) + .MuiListItem-root {
  position: relative !important;
  z-index: 1 !important;
  opacity: 1 !important;
  visibility: visible !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  overflow: visible !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard"]) + .MuiListItem-root > .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard/"]) + .MuiListItem-root > .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard"]) + .MuiListItem-root > a.MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard/"]) + .MuiListItem-root > a.MuiListItemButton-root {
  position: relative !important;
  z-index: 1 !important;
  opacity: 1 !important;
  visibility: visible !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard"]),
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard/"]) {
  overflow: hidden !important;
  min-height: calc(var(--lcars-dash-row-height, 10.8rem) + 3px) !important;
  height: calc(var(--lcars-dash-row-height, 10.8rem) + 3px) !important;
  max-height: calc(var(--lcars-dash-row-height, 10.8rem) + 3px) !important;
  margin: 0 !important;
  padding: 0 0 3px 0 !important;
  box-sizing: border-box !important;
  flex-shrink: 0 !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/settings"],
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard/settings"]) > .MuiListItemButton-root {
  position: relative !important;
  z-index: 1 !important;
  min-height: 2.4rem !important;
  height: auto !important;
  margin-top: 0 !important;
}

.dashboardDocument .MuiDrawer-paper .MuiListItem-root:not(:has(> a[href="#/dashboard"])):not(:has(> a[href="#/dashboard/"])) {
  position: relative !important;
  z-index: 1 !important;
}
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] {
  z-index: 12050 !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child {
  z-index: 12051 !important;
}

.dashboardDocument .MuiDrawer-paper {
  isolation: auto !important;
}
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] {
  position: fixed !important;
  z-index: 12050 !important;
  
  background: var(--lcars-dash-fill, #6d748c) !important;
  background-color: var(--lcars-dash-fill, #6d748c) !important;
}
.dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child {
  z-index: 12051 !important;
  background: #000 !important;
}

.dashboardDocument .MuiDrawer-paper .MuiList-root:not(:first-child),
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:not(:has(> a[href="#/dashboard"])):not(:has(> a[href="#/dashboard/"])),
.dashboardDocument .MuiDrawer-paper .MuiCollapse-root {
  position: relative !important;
  z-index: 1 !important;
}
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:not(:has(> a[href="#/dashboard"])):not(:has(> a[href="#/dashboard/"])) > .MuiListItemButton-root,
.dashboardDocument .MuiDrawer-paper .MuiListItem-root:not(:has(> a[href="#/dashboard"])):not(:has(> a[href="#/dashboard/"])) > a.MuiListItemButton-root {
  position: relative !important;
  z-index: 1 !important;
}

#jf-lcars-dash-panel {
  display: none;
  position: fixed !important;
  left: 0 !important;
  z-index: 12055 !important;
  box-sizing: border-box !important;
  margin: 0 !important;
  padding: 0.75rem 0.65rem !important;
  border: none !important;
  border-radius: 0 !important;
  background: #6d748c !important;
  color: #000 !important;
  font-family: var(--lcars-font, "Antonio", sans-serif) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  pointer-events: none !important;
  align-items: flex-end !important;
  justify-content: flex-end !important;
}
.dashboardDocument #jf-lcars-dash-panel {
  display: flex !important;
}
html.jf-lcars-dash-hot #jf-lcars-dash-panel {
  background: var(--ghost-gray) !important;
  background-color: var(--ghost-gray) !important;
}

html.jf-lcars-dash-hot .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
html.jf-lcars-dash-hot .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"],
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]:hover,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]:hover {
  background: transparent !important;
  background-color: transparent !important;
  max-height: var(--lcars-dash-row-height, 10.8rem) !important;
  height: var(--lcars-dash-row-height, 10.8rem) !important;
}
#jf-lcars-dash-panel {
  height: var(--lcars-dash-row-height, 10.8rem) !important;
  max-height: var(--lcars-dash-row-height, 10.8rem) !important;
  overflow: hidden !important;
}
.jf-lcars-dash-gap {
  display: block !important;
  height: 3px !important;
  width: 100% !important;
  background: #000 !important;
  background-color: #000 !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  pointer-events: none !important;
  position: relative !important;
  z-index: 12060 !important;
}

.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] {
  background: transparent !important;
  background-color: transparent !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  box-shadow: none !important;
}
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"] *,
.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] * {
  color: transparent !important;
  fill: transparent !important;
  opacity: 0 !important;
}
#jf-lcars-dash-panel {
  font-size: 1rem !important;
  line-height: 1.2 !important;
}

#jf-lcars-dash-label {
  font-size: 0.8rem !important;
  line-height: 1.1 !important;
  font-family: var(--lcars-font, "Antonio", sans-serif) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
  color: #000 !important;
  display: block !important;
  transform: none !important;
  zoom: 1 !important;
}

.jf-lcars-active:not(.dashboardDocument) .mainAnimatedPage,
.jf-lcars-active:not(.dashboardDocument) .page,
.jf-lcars-active:not(.dashboardDocument) #mainContent,
.jf-lcars-active:not(.dashboardDocument) .mainAnimatedPages,
.jf-lcars-active:not(.dashboardDocument) .mainAnimatedPage,
.jf-lcars-active:not(.dashboardDocument) .page {
  padding-bottom: 50px !important;
  box-sizing: border-box !important;
}

.jf-lcars-active:not(.dashboardDocument) .padded-bottom-page,
.jf-lcars-active:not(.dashboardDocument) .sections,
.jf-lcars-active:not(.dashboardDocument) .homeSectionsContainer,
.jf-lcars-active:not(.dashboardDocument) .itemsContainer {
  padding-bottom: 50px !important;
  box-sizing: border-box !important;
}
.jf-lcars-active:not(.dashboardDocument) .mainAnimatedPages {
  padding-bottom: 50px !important;
}

.jf-lcars-active:not(.dashboardDocument) .skinHeader + .mainAnimatedPages,
.jf-lcars-active:not(.dashboardDocument) .mainDrawer-scrollContainer {
  padding-top: 0 !important;
}
.jf-lcars-active:not(.dashboardDocument) .sections.homeSections,
.jf-lcars-active:not(.dashboardDocument) .homeSectionsContainer,
.jf-lcars-active:not(.dashboardDocument) .padded-top-page,
.jf-lcars-active:not(.dashboardDocument) .pageWithAbsoluteTabs .pageTabContent {
  scroll-margin-top: var(--lcars-content-top, 72px) !important;
}

.MuiBox-root:has(> .MuiIconButton-root svg[data-testid="MoreVertIcon"]),
.MuiBox-root:has(> button.MuiIconButton-root svg[data-testid="MoreVertIcon"]) {
  margin-left: 12px !important;
}
button.MuiIconButton-root:has(svg[data-testid="MoreVertIcon"]),
.MuiIconButton-root:has(svg[data-testid="MoreVertIcon"]) {
  margin-left: 12px !important;
}

.dashboardDocument .content-primary:has(.localUsers),
.dashboardDocument .content-primary:has(.itemsContainer.vertical-wrap),
.dashboardDocument .content-primary:has(.MuiGrid-container),
.dashboardDocument .page .content-primary:has(.localUsers),
.dashboardDocument .page .content-primary:has(.itemsContainer.vertical-wrap),
.dashboardDocument .page .content-primary:has(.MuiGrid-container) {
  width: fit-content !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}
.dashboardDocument .content-primary:has(.localUsers) .localUsers,
.dashboardDocument .content-primary:has(.itemsContainer.vertical-wrap) .itemsContainer {
  width: fit-content !important;
  max-width: 100% !important;
}

.dashboardDocument .MuiGrid-container > .MuiGrid-item:has(.MuiCard-root) {
    max-width: max-content !important;
}

.dashboardDocument .MuiGrid-container > .MuiGrid-item:has(.MuiCard-root .MuiCardMedia-root) {
  box-sizing: border-box !important;
}
.dashboardDocument .MuiGrid-item:has(.MuiCardMedia-root) .MuiCard-root {
  min-width: 220px !important;
  width: 100% !important;
  box-sizing: border-box !important;
}
.dashboardDocument .MuiGrid-item .MuiCardMedia-root {
  min-height: 140px !important;
  background-size: cover !important;
  background-position: center !important;
}
.dashboardDocument .MuiGrid-item .MuiCardActionArea-root {
  min-height: 140px !important;
}
.dashboardDocument .MuiGrid-item .MuiCardContent-root {
  padding: 10px 12px !important;
  box-sizing: border-box !important;
}
.dashboardDocument .MuiGrid-item .MuiCardContent-root .MuiTypography-root {
  white-space: normal !important;
  overflow-wrap: break-word !important;
  padding-right: 4px !important;
}

@media (max-width: 899px) {
  
  #jf-lcars-dash-panel,
  #jf-lcars-elbow-chrome,
  #jf-lcars-dash-elbow,
  #jf-lcars-dash-elbow-cut,
  #jf-lcars-dash-bridge,
  .jf-lcars-dash-arm-hit,
  .jf-lcars-dash-curve-hit,
  #jf-lcars-lib-elbow-chrome,
  #jf-lcars-lib-unified-hit {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
  
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    max-width: 100% !important;
    height: 5.5rem !important;
    min-height: 5.5rem !important;
    max-height: 5.5rem !important;
    margin: 0 0 3px 0 !important;
    padding: 0.55rem 0.75rem !important;
    background: var(--primary-gray) !important;
    background-color: var(--primary-gray) !important;
    color: #000 !important;
    -webkit-text-fill-color: #000 !important;
    opacity: 1 !important;
    filter: none !important;
    transform: none !important;
    z-index: auto !important;
    overflow: hidden !important;
    display: flex !important;
    align-items: flex-end !important;
    justify-content: flex-end !important;
    box-sizing: border-box !important;
    border-radius: 0 !important;
  }
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"] *,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] * {
    color: #000 !important;
    fill: #000 !important;
    opacity: 1 !important;
    visibility: visible !important;
    -webkit-text-fill-color: #000 !important;
  }
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"] .MuiListItemText-root,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] .MuiListItemText-root,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"] .MuiTypography-root,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] .MuiTypography-root {
    text-align: right !important;
    font-family: var(--lcars-font) !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.06em !important;
  }
  
  .dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard"]),
  .dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard/"]) {
    position: relative !important;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    margin: 0 0 3px 0 !important;
    padding: 0 !important;
    overflow: visible !important;
    background: transparent !important;
    background-color: transparent !important;
  }
  
  .dashboardDocument .MuiDrawer-paper .MuiListItem-root {
    margin: 0 0 3px 0 !important;
    padding: 0 !important;
  }
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root {
    width: 100% !important;
    box-sizing: border-box !important;
    margin: 0 !important;
    border-radius: 0 !important;
  }
  
  #jf-lcars-elbow {
    top: 48px !important;
    left: 0 !important;
    width: 96px !important;
    height: 40px !important;
    background: var(--primary-gray) !important;
  }
  #jf-lcars-elbow-cut {
    top: 48px !important;
    left: 56px !important;
    width: 40px !important;
    height: 40px !important;
  }
  
  #jf-lcars-nav-header-spacer {
    display: none !important;
    height: 0 !important;
    min-height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child {
    margin-bottom: 3px !important;
  }
  .dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child + *,
  .dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child + .MuiList-root {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
  
  .dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root,
  .dashboardDocument .MuiDrawer-paper .MuiCollapse-root a.MuiListItemButton-root {
    color: var(--ghost-gray) !important;
    -webkit-text-fill-color: var(--ghost-gray) !important;
    background: #000 !important;
    border: 2px solid var(--ghost-gray) !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root *,
  .dashboardDocument .MuiDrawer-paper .MuiCollapse-root a.MuiListItemButton-root * {
    color: var(--ghost-gray) !important;
    fill: var(--ghost-gray) !important;
    -webkit-text-fill-color: var(--ghost-gray) !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root.Mui-selected,
  .dashboardDocument .MuiDrawer-paper .MuiCollapse-root .MuiListItemButton-root.Mui-selected * {
    color: var(--pale-orange-red) !important;
    fill: var(--pale-orange-red) !important;
    -webkit-text-fill-color: var(--pale-orange-red) !important;
  }
  
  .dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child,
  .dashboardDocument .MuiDrawer-paper > .MuiList-root {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    z-index: auto !important;
    background: transparent !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiListItem-root,
  .dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard"]),
  .dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard/"]) {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    margin: 0 0 3px 0 !important;
    padding: 0 !important;
    z-index: auto !important;
    background: transparent !important;
    overflow: visible !important;
    display: block !important;
  }
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root,
  .dashboardDocument .MuiDrawer-paper .MuiListItemButton-root {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    width: 100% !important;
    max-width: 100% !important;
    min-height: 2.6rem !important;
    height: auto !important;
    max-height: none !important;
    margin: 0 !important;
    z-index: auto !important;
    transform: none !important;
    float: none !important;
  }
  
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"],
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].Mui-selected,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"].Mui-selected,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].jf-lcars-has-arm,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"].jf-lcars-has-arm {
    height: 5.5rem !important;
    min-height: 5.5rem !important;
    max-height: 5.5rem !important;
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    margin: 0 0 3px 0 !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard"]),
  .dashboardDocument .MuiDrawer-paper .MuiListItem-root:has(> a[href="#/dashboard/"]),
  .dashboardDocument .MuiDrawer-paper li:has(> a[href="#/dashboard"]) {
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    margin: 0 0 3px 0 !important;
    padding: 0 !important;
    background: transparent !important;
  }
  
  #jf-lcars-nav-header-spacer,
  .dashboardDocument .MuiDrawer-paper > #jf-lcars-nav-header-spacer {
    display: none !important;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    border: none !important;
  }
  
  .dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child {
    margin: 0 0 3px 0 !important;
    padding: 0 !important;
    min-height: 0 !important;
  }
  .dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child .MuiListItem-root {
    margin: 0 !important;
    min-height: 0 !important;
  }
  
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]::before,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]::before,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]::after,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]::after {
    content: none !important;
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    opacity: 0 !important;
  }
  
  .dashboardDocument .MuiDrawer-paper,
  .MuiDrawer-paperAnchorLeft,
  .MuiDrawer-paperAnchorTemporary,
  .MuiDrawer-root .MuiDrawer-paper {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    overflow-x: hidden !important;
    overflow-y: auto !important;
    margin: 0 !important;
    margin-left: 0 !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
    border-radius: 0 !important;
    
  }
  .dashboardDocument .MuiDrawer-root,
  .MuiDrawer-root.MuiDrawer-modal,
  .MuiModal-root .MuiDrawer-root {
    left: 0 !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiList-root {
    display: block !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]:hover,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]:hover,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].Mui-selected:hover,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"].Mui-selected:hover {
    background: var(--ghost-gray, #d2d5df) !important;
    background-color: var(--ghost-gray, #d2d5df) !important;
    filter: none !important;
    transform: none !important;
    top: auto !important;
    left: auto !important;
    margin: 0 0 3px 0 !important;
    position: relative !important;
  }
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]:hover *,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]:hover * {
    color: #000 !important;
    fill: #000 !important;
    -webkit-text-fill-color: #000 !important;
  }
  
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"],
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"].Mui-selected,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"].Mui-selected {
    background: var(--primary-gray, #6d748c) !important;
    background-color: var(--primary-gray, #6d748c) !important;
    transform: none !important;
  }

  
  .dashboardDocument .jf-lcars-frame,
  #jf-lcars-frame,
  .jf-lcars-frame {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    position: fixed !important;
    left: 0 !important;
    top: 0 !important;
    bottom: 0 !important;
    width: var(--lcars-sidebar, 56px) !important;
    background: var(--primary-gray) !important;
    z-index: 1099 !important;
    pointer-events: none !important;
  }
  
  #jf-lcars-elbow,
  .jf-lcars-elbow {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    position: fixed !important;
    left: 0 !important;
    top: 48px !important;
    width: calc(var(--lcars-sidebar, 56px) + 40px) !important;
    height: 40px !important;
    background: var(--primary-gray) !important;
    border-radius: 0 !important;
    z-index: 1090 !important;
    pointer-events: none !important;
  }
  #jf-lcars-elbow-cut,
  .jf-lcars-elbow-cut {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    position: fixed !important;
    left: var(--lcars-sidebar, 56px) !important;
    top: 48px !important;
    width: 40px !important;
    height: 40px !important;
    background: #000 !important;
    border-radius: 40px 0 0 0 !important;
    z-index: 1091 !important;
    pointer-events: none !important;
  }
  
  .dashboardDocument .jf-lcars-top-runner,
  #jf-lcars-top-runner,
  .jf-lcars-top-runner {
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    position: fixed !important;
    top: 48px !important;
    left: calc(var(--lcars-sidebar, 56px) + 40px) !important;
    right: 0 !important;
    width: auto !important;
    height: 30px !important;
    min-height: 30px !important;
    max-height: 30px !important;
    z-index: 12040 !important;
    margin: 0 !important;
    border-radius: 0 !important;
    transform: none !important;
    pointer-events: none !important;
  }
  .jf-lcars-top-runner .jf-lcars-bar-row {
    width: 100% !important;
    height: 100% !important;
  }
  .dashboardDocument .MuiAppBar-root,
  .dashboardDocument header.MuiPaper-root,
  .skinHeader {
    position: fixed !important;
    top: 0 !important;
    left: var(--lcars-sidebar, 56px) !important;
    right: 0 !important;
    width: auto !important;
    border-radius: 0 !important;
    transform: none !important;
    z-index: 12050 !important;
  }
  #jf-lcars-header-mask {
    display: none !important;
  }
  
  .dashboardDocument .MuiDrawer-root + .MuiBox-root,
  .dashboardDocument main.MuiBox-root,
  .dashboardDocument main,
  .dashboardDocument .mainAnimatedPage,
  .dashboardDocument .mainAnimatedPages {
    margin-left: 16px !important;
    max-width: calc(100vw - 16px) !important;
    box-sizing: border-box !important;
  }
  .backgroundContainer {
    margin-left: var(--lcars-sidebar, 56px) !important;
  }
  

  .dashboardDocument .MuiDrawer-paper,
  .MuiDrawer-paperAnchorLeft,
  .MuiDrawer-paperAnchorTemporary,
  .MuiDrawer-root .MuiDrawer-paper,
  .MuiModal-root .MuiDrawer-paper {
    --lcars-drawer-bar: 70px;
    --lcars-drawer-curve: 120px;
    --lcars-drawer-inner-curve: calc(var(--lcars-drawer-curve) - var(--lcars-drawer-bar));
    --seg-a: var(--primary-gray, #6d748c);
    --seg-b: var(--ghost-gray, #d2d5df);
    --seg-c: var(--medium-dark-gray, #52596e);
    --seg-d: var(--light-gray, #9ea5ba);
    --seg-corner: var(--primary-gray, #6d748c);
    --seg-gap: 8px;
    --seg-curve-gap: 10px;
    top: 56px !important;
    height: auto !important;
    max-height: calc(100vh - 56px) !important;
    background: #000 !important;
    background-color: #000 !important;
    padding: calc(var(--lcars-drawer-bar) + 6px) calc(var(--lcars-drawer-bar) + 8px) calc(var(--lcars-drawer-bar) + 8px) 0 !important;
    box-sizing: border-box !important;
    border: none !important;
    border-radius: 0 var(--lcars-drawer-curve) var(--lcars-drawer-curve) 0 !important;
    overflow-x: hidden !important;
    overflow-y: auto !important;
    z-index: 13000 !important;
    position: fixed !important;
    left: 0 !important;
  }
  
  .dashboardDocument .MuiDrawer-paper::before,
  .MuiDrawer-paperAnchorLeft::before,
  .MuiDrawer-paperAnchorTemporary::before,
  .MuiDrawer-root .MuiDrawer-paper::before,
  .MuiModal-root .MuiDrawer-paper::before {
    content: "" !important;
    display: block !important;
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    box-sizing: border-box !important;
    border: none !important;
    border-radius: 0 var(--lcars-drawer-curve) var(--lcars-drawer-curve) 0 !important;
    pointer-events: none !important;
    z-index: 50 !important;
    background:
      linear-gradient(
        to right,
        var(--seg-a) 0 22%,
        transparent 22% calc(22% + var(--seg-gap)),
        var(--seg-b) calc(22% + var(--seg-gap)) 48%,
        transparent 48% calc(48% + var(--seg-gap)),
        var(--seg-c) calc(48% + var(--seg-gap)) 72%,
        transparent 72% calc(72% + var(--seg-gap)),
        var(--seg-corner) calc(72% + var(--seg-gap)) 100%
      ) no-repeat top left / calc(100% - var(--lcars-drawer-curve)) var(--lcars-drawer-bar),
      radial-gradient(
        circle at left bottom,
        transparent 0,
        transparent calc(var(--lcars-drawer-curve) - var(--lcars-drawer-bar) - 0.5px),
        var(--seg-corner) calc(var(--lcars-drawer-curve) - var(--lcars-drawer-bar))
      ) no-repeat top right / var(--lcars-drawer-curve) var(--lcars-drawer-curve),
      linear-gradient(
        to bottom,
        var(--seg-corner) 0 20%,
        transparent 20% calc(20% + var(--seg-gap)),
        var(--seg-c) calc(20% + var(--seg-gap)) 40%,
        transparent 40% calc(40% + var(--seg-gap)),
        var(--seg-b) calc(40% + var(--seg-gap)) 60%,
        transparent 60% calc(60% + var(--seg-gap)),
        var(--seg-d) calc(60% + var(--seg-gap)) 80%,
        transparent 80% calc(80% + var(--seg-gap)),
        var(--seg-a) calc(80% + var(--seg-gap)) 100%
      ) no-repeat right var(--lcars-drawer-curve) / var(--lcars-drawer-bar) calc(100% - 2 * var(--lcars-drawer-curve) - var(--seg-curve-gap)),
      radial-gradient(
        circle at left top,
        transparent 0,
        transparent calc(var(--lcars-drawer-curve) - var(--lcars-drawer-bar) - 0.5px),
        var(--seg-a) calc(var(--lcars-drawer-curve) - var(--lcars-drawer-bar))
      ) no-repeat bottom right / var(--lcars-drawer-curve) var(--lcars-drawer-curve),
      linear-gradient(
        to right,
        var(--seg-c) 0 18%,
        transparent 18% calc(18% + var(--seg-gap)),
        var(--seg-a) calc(18% + var(--seg-gap)) 36%,
        transparent 36% calc(36% + var(--seg-gap)),
        var(--seg-b) calc(36% + var(--seg-gap)) 54%,
        transparent 54% calc(54% + var(--seg-gap)),
        var(--seg-d) calc(54% + var(--seg-gap)) 72%,
        transparent 72% calc(72% + var(--seg-gap)),
        var(--seg-c) calc(72% + var(--seg-gap)) 100%
      ) no-repeat bottom left / calc(100% - var(--lcars-drawer-curve) - var(--seg-curve-gap)) var(--lcars-drawer-bar);
  }
  .dashboardDocument .MuiDrawer-paper::after,
  .MuiDrawer-paperAnchorLeft::after,
  .MuiDrawer-paperAnchorTemporary::after,
  .MuiDrawer-root .MuiDrawer-paper::after,
  .MuiModal-root .MuiDrawer-paper::after {
    content: "" !important;
    display: block !important;
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    width: var(--lcars-drawer-curve) !important;
    height: var(--lcars-drawer-curve) !important;
    background: radial-gradient(
      circle at left bottom,
      transparent 0,
      transparent calc(var(--lcars-drawer-curve) - var(--lcars-drawer-bar) - 0.5px),
      var(--seg-corner, #6d748c) calc(var(--lcars-drawer-curve) - var(--lcars-drawer-bar))
    ) !important;
    pointer-events: none !important;
    z-index: 51 !important;
  }

  .dashboardDocument .MuiDrawer-paper .MuiListSubheader-root {
    display: none !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiListItem-root {
    padding: 0 !important;
    margin: 0 0 5px 0 !important;
    display: block !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiListItemButton-root,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    min-height: 2.5rem !important;
    height: auto !important;
    max-height: none !important;
    margin: 0 !important;
    padding: 0.65rem 0.85rem !important;
    border-radius: 0 !important;
    background: var(--primary-gray) !important;
    background-color: var(--primary-gray) !important;
    color: #000 !important;
    -webkit-text-fill-color: #000 !important;
    text-transform: uppercase !important;
    font-family: var(--lcars-font) !important;
    font-weight: 700 !important;
    letter-spacing: 0.06em !important;
    justify-content: flex-end !important;
    text-align: right !important;
    box-sizing: border-box !important;
  }
  

  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"],
  .dashboardDocument .MuiDrawer-paper .MuiList-root:not(:has(img)):first-of-type .MuiListItem-root:first-child > .MuiListItemButton-root {
    border-top-right-radius: var(--lcars-drawer-inner-curve, 50px) !important;
  }
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/tasks"],
  .dashboardDocument .MuiDrawer-paper .MuiList-root:last-of-type .MuiListItem-root:last-child > .MuiListItemButton-root,
  .dashboardDocument .MuiDrawer-paper .MuiList-root:last-of-type > a.MuiListItemButton-root:last-of-type {
    border-bottom-right-radius: var(--lcars-drawer-inner-curve, 50px) !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiList-root > .MuiListItem-root:nth-child(3n+1) > .MuiListItemButton-root {
    min-height: 3.4rem !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiList-root > .MuiListItem-root:nth-child(4n+2) > .MuiListItemButton-root {
    min-height: 3rem !important;
    background: var(--medium-dark-gray) !important;
    background-color: var(--medium-dark-gray) !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiList-root > .MuiListItem-root:nth-child(5n+3) > .MuiListItemButton-root {
    background: var(--ghost-gray) !important;
    background-color: var(--ghost-gray) !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiListItemButton-root *,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root * {
    color: #000 !important;
    fill: #000 !important;
    opacity: 1 !important;
    -webkit-text-fill-color: #000 !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiListItemButton-root .MuiListItemText-root {
    text-align: right !important;
  }
  .dashboardDocument .MuiDrawer-paper .MuiListItemButton-root.Mui-selected,
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root.Mui-selected {
    background: var(--orange-red) !important;
    background-color: var(--orange-red) !important;
  }
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"],
  .dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"] {
    min-height: 3.6rem !important;
    background: var(--primary-gray) !important;
  }
  .dashboardDocument .MuiDrawer-paper > .MuiList-root:first-child {
    position: relative !important;
    top: auto !important;
    background: #000 !important;
  }
  .dashboardDocument .MuiIconButton-edgeStart {
    display: inline-flex !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
}

.dashboardDocument input[type="number"]::-webkit-outer-spin-button,
.dashboardDocument input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: inner-spin-button !important;
  appearance: auto !important;
  opacity: 1 !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 2rem !important;
  height: 100% !important;
  min-height: 100% !important;
  max-height: none !important;
  border: none !important;
  border-radius: 0 !important;
  cursor: pointer !important;
  background-color: var(--lcars-alert-soft, #ff6753) !important;
  background: var(--lcars-alert-soft, #ff6753) !important;
  box-shadow: inset 0 0 0 100vw var(--lcars-alert-soft, #ff6753) !important;
  filter: none !important;
}
.dashboardDocument input[type="number"]:hover::-webkit-inner-spin-button,
.dashboardDocument input[type="number"]:focus::-webkit-inner-spin-button,
.dashboardDocument input[type="number"]:active::-webkit-inner-spin-button {
  opacity: 1 !important;
  background-color: var(--lcars-alert-soft, #ff6753) !important;
  background: var(--lcars-alert-soft, #ff6753) !important;
}

.dashboardDocument input[type="number"]::-webkit-outer-spin-button,
.dashboardDocument input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  appearance: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
.dashboardDocument input[type="number"] {
  -moz-appearance: textfield !important;
  appearance: textfield !important;
}

.dashboardDocument .MuiFormControl-root:has(input[type="number"]),
.dashboardDocument .MuiTextField-root:has(input[type="number"]) {
  width: 100% !important;
  max-width: 100% !important;
  display: block !important;
}
.dashboardDocument .MuiInputBase-root:has(> input[type="number"]),
.dashboardDocument .MuiFilledInput-root:has(> input[type="number"]) {
  position: relative !important;
  width: 100% !important;
  max-width: 100% !important;
  min-height: 3.75rem !important;
  height: 3.75rem !important;
  padding-right: 0 !important;
  display: flex !important;
  align-items: stretch !important;
  box-sizing: border-box !important;
}
.dashboardDocument .MuiInputBase-root > input[type="number"],
.dashboardDocument .MuiFilledInput-root > input[type="number"] {
  flex: 1 1 auto !important;
  width: 100% !important;
  height: 100% !important;
  padding-right: 2.25rem !important;
  box-sizing: border-box !important;
}
.jf-lcars-spin {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 2rem !important;
  height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  z-index: 3 !important;
  border-radius: 0 !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
  background: var(--lcars-alert-soft, #ff6753) !important;
  background-color: var(--lcars-alert-soft, #ff6753) !important;
  pointer-events: auto !important;
}
.jf-lcars-spin-btn {
  flex: 1 1 50% !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  border-radius: 0 !important;
  background: transparent !important;
  background-color: transparent !important;
  color: var(--lcars-bg, #000) !important;
  cursor: pointer !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 0.65rem !important;
  line-height: 1 !important;
  min-height: 0 !important;
  height: 50% !important;
  box-shadow: none !important;
}
.jf-lcars-spin-btn:hover {
  background: var(--starlight) !important;
  color: var(--primary-gray, #6d748c) !important;
}

.jf-lcars-active .infoBanner,
.dashboardDocument .infoBanner {
  background: #000 !important;
  background-color: #000 !important;
  color: var(--light-gray, #9ea5ba) !important;
  text-align: center !important;
  font-family: var(--lcars-font) !important;
  font-size: 1.05rem !important;
  font-weight: 400 !important;
  line-height: 1.55 !important;
  letter-spacing: 0.02em !important;
  padding: 1.1rem 1.5rem !important;
  margin-bottom: 1.5em !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}
.jf-lcars-active .infoBanner a,
.dashboardDocument .infoBanner a {
  color: var(--blue, #37a6d1) !important;
  text-decoration: underline !important;
  text-decoration-thickness: 2px !important;
  text-underline-offset: 0.2rem !important;
}

.jf-lcars-active .directoryPicker .listItem,
.jf-lcars-active .directoryEditor .listItem,
.jf-lcars-active .pathEditor .listItem,
.dashboardDocument .directoryPicker .listItem,
.dashboardDocument .directoryEditor .listItem,

.jf-lcars-active .verticalSection:has(> a.lnkUserProfile),
.jf-lcars-active .verticalSection:has(> a.lnkDisplayPreferences),
.dashboardDocument .verticalSection:has(> a.lnkUserProfile),
.dashboardDocument .verticalSection:has(> a.lnkDisplayPreferences) {
  display: grid !important;
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  gap: 8px !important;
  align-items: stretch !important;
}
.jf-lcars-active .verticalSection:has(> a.lnkUserProfile) > .sectionTitle,
.jf-lcars-active .verticalSection:has(> a.lnkUserProfile) > h2.headerUsername,
.dashboardDocument .verticalSection:has(> a.lnkUserProfile) > .sectionTitle,
.dashboardDocument .verticalSection:has(> a.lnkUserProfile) > h2.headerUsername {
  grid-column: 1 / -1 !important;
  margin: 0 0 0.5rem 0 !important;
}
.jf-lcars-active .verticalSection:has(> a.lnkUserProfile) > a.emby-button,
.jf-lcars-active .verticalSection:has(> a.lnkDisplayPreferences) > a.emby-button,
.dashboardDocument .verticalSection:has(> a.lnkUserProfile) > a.emby-button,
.dashboardDocument .verticalSection:has(> a.lnkDisplayPreferences) > a.emby-button {
  display: flex !important;
  width: 100% !important;
  min-width: 0 !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}
.jf-lcars-active .verticalSection:has(> a.lnkUserProfile) > a.emby-button .listItem,
.jf-lcars-active .verticalSection:has(> a.lnkDisplayPreferences) > a.emby-button .listItem,
.dashboardDocument .verticalSection:has(> a.lnkUserProfile) > a.emby-button .listItem,
.dashboardDocument .verticalSection:has(> a.lnkDisplayPreferences) > a.emby-button .listItem {
  width: 100% !important;
  min-width: 0 !important;
  box-sizing: border-box !important;
  height: 100% !important;
}
@media (max-width: 750px) {
  .jf-lcars-active .verticalSection:has(> a.lnkUserProfile),
  .jf-lcars-active .verticalSection:has(> a.lnkDisplayPreferences),
  .dashboardDocument .verticalSection:has(> a.lnkUserProfile),
  .dashboardDocument .verticalSection:has(> a.lnkDisplayPreferences) {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}
@media (max-width: 550px) {
  .jf-lcars-active .verticalSection:has(> a.lnkUserProfile),
  .jf-lcars-active .verticalSection:has(> a.lnkDisplayPreferences),
  .dashboardDocument .verticalSection:has(> a.lnkUserProfile),
  .dashboardDocument .verticalSection:has(> a.lnkDisplayPreferences) {
    grid-template-columns: 1fr !important;
  }
}

.jf-lcars-active button.listItem.listItem-border,
.dashboardDocument button.listItem.listItem-border,
.jf-lcars-active .listItem.listItem-border.lnkPath,
.jf-lcars-active a.listItem.listItem-border {
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start !important;
  position: relative !important;
  width: 100% !important;
  min-height: 3.25rem !important;
  height: auto !important;
  margin: 0 0 0.55rem 0 !important;
  padding: 0.55rem 1rem 0.55rem 1.35rem !important;
  box-sizing: border-box !important;
  border: none !important;
  border-left: 12px solid var(--orange-red, #e7442a) !important;
  border-radius: 0 100vmax 100vmax 0 !important;
  box-shadow: none !important;
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  font-size: 0.95rem !important;
  text-transform: none !important;
  letter-spacing: 0.04em !important;
  text-align: left !important;
  overflow: hidden !important;
  color: #000 !important;
  
  background: var(--light-gray, #9ea5ba) !important;
  background-color: var(--light-gray, #9ea5ba) !important;
}

.jf-lcars-active .directoryPicker .listItem::before,
.jf-lcars-active .directoryEditor .listItem::before,
.dashboardDocument .directoryPicker .listItem::before,
.dashboardDocument .directoryEditor .listItem::before,
.jf-lcars-active button.listItem.listItem-border::before,
.dashboardDocument button.listItem.listItem-border::before,
.jf-lcars-active .listItem.listItem-border.lnkPath::before,
.jf-lcars-active a.listItem.listItem-border::before {
  content: "" !important;
  display: block !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 8px !important;
  height: 100% !important;
  background: #000 !important;
  z-index: 1 !important;
  pointer-events: none !important;
}

.jf-lcars-active .directoryPicker .listItem:nth-child(3n+1),
.jf-lcars-active .directoryEditor .listItem:nth-child(3n+1),
.dashboardDocument .directoryPicker .listItem:nth-child(3n+1),
.dashboardDocument .directoryEditor .listItem:nth-child(3n+1),
.jf-lcars-active button.listItem.listItem-border:nth-child(3n+1),
.dashboardDocument button.listItem.listItem-border:nth-child(3n+1),
.jf-lcars-active .listItem.listItem-border.lnkPath:nth-child(3n+1),
.jf-lcars-active a.listItem.listItem-border:nth-child(3n+1) {
  border-left-color: var(--blue, #37a6d1) !important;
  background: var(--light-gray, #9ea5ba) !important;
  background-color: var(--light-gray, #9ea5ba) !important;
}

.jf-lcars-active .directoryPicker .listItem:nth-child(3n+2),
.jf-lcars-active .directoryEditor .listItem:nth-child(3n+2),
.dashboardDocument .directoryPicker .listItem:nth-child(3n+2),
.dashboardDocument .directoryEditor .listItem:nth-child(3n+2),
.jf-lcars-active button.listItem.listItem-border:nth-child(3n+2),
.dashboardDocument button.listItem.listItem-border:nth-child(3n+2),
.jf-lcars-active .listItem.listItem-border.lnkPath:nth-child(3n+2),
.jf-lcars-active a.listItem.listItem-border:nth-child(3n+2) {
  border-left-color: var(--orange-red, #e7442a) !important;
  background: var(--light-gray, #9ea5ba) !important;
  background-color: var(--light-gray, #9ea5ba) !important;
}

.jf-lcars-active .directoryPicker .listItem:nth-child(3n),
.jf-lcars-active .directoryEditor .listItem:nth-child(3n),
.dashboardDocument .directoryPicker .listItem:nth-child(3n),
.dashboardDocument .directoryEditor .listItem:nth-child(3n),
.jf-lcars-active button.listItem.listItem-border:nth-child(3n),
.dashboardDocument button.listItem.listItem-border:nth-child(3n),
.jf-lcars-active .listItem.listItem-border.lnkPath:nth-child(3n),
.jf-lcars-active a.listItem.listItem-border:nth-child(3n) {
  border-left-color: var(--orange-red, #e7442a) !important;
  background: var(--medium-dark-gray, #52596e) !important;
  background-color: var(--medium-dark-gray, #52596e) !important;
  color: var(--starlight, #f3f4f7) !important;
}
.jf-lcars-active .directoryPicker .listItem:nth-child(3n) .listItemBody,
.jf-lcars-active .directoryEditor .listItem:nth-child(3n) .listItemBody,
.jf-lcars-active button.listItem.listItem-border:nth-child(3n) .listItemBody,
.dashboardDocument button.listItem.listItem-border:nth-child(3n) .listItemBody,
.jf-lcars-active .directoryPicker .listItem:nth-child(3n) .material-icons,
.jf-lcars-active .directoryEditor .listItem:nth-child(3n) .material-icons,
.jf-lcars-active button.listItem.listItem-border:nth-child(3n) .material-icons {
  color: var(--starlight, #f3f4f7) !important;
}
.jf-lcars-active .directoryPicker .listItem:hover,
.jf-lcars-active .directoryEditor .listItem:hover,
.dashboardDocument .directoryPicker .listItem:hover,
.jf-lcars-active button.listItem.listItem-border:hover,
.dashboardDocument button.listItem.listItem-border:hover {
  filter: brightness(1.12) !important;
}
.jf-lcars-active .directoryPicker .listItem .listItemBody,
.jf-lcars-active .directoryEditor .listItem .listItemBody,
.jf-lcars-active button.listItem.listItem-border .listItemBody,
.dashboardDocument button.listItem.listItem-border .listItemBody {
  font-family: var(--lcars-font) !important;
  font-weight: 700 !important;
  margin: 0 !important;
  padding: 0 !important;
  flex: 1 1 auto !important;
  min-width: 0 !important;
  text-align: left !important;
}
.jf-lcars-active .directoryPicker .listItem .material-icons,
.jf-lcars-active .directoryEditor .listItem .material-icons,
.jf-lcars-active button.listItem.listItem-border .material-icons,
.dashboardDocument button.listItem.listItem-border .material-icons {
  margin-left: auto !important;
  flex-shrink: 0 !important;
}
.jf-lcars-active .directoryPicker .listItem:not(:nth-child(3n)) .listItemBody,
.jf-lcars-active .directoryEditor .listItem:not(:nth-child(3n)) .listItemBody,
.jf-lcars-active button.listItem.listItem-border:not(:nth-child(3n)) .listItemBody,
.jf-lcars-active .directoryPicker .listItem:not(:nth-child(3n)) .material-icons,
.jf-lcars-active .directoryEditor .listItem:not(:nth-child(3n)) .material-icons,
.jf-lcars-active button.listItem.listItem-border:not(:nth-child(3n)) .material-icons {
  color: #000 !important;
}

.jf-lcars-active .directoryPicker,
.jf-lcars-active .directoryEditor,
.dashboardDocument .directoryPicker,
.dashboardDocument .directoryEditor {
  display: flex !important;
  flex-direction: column !important;
  row-gap: 0.55rem !important;
  background: #000 !important;
  padding: 0.35rem 0 !important;
}

.jf-lcars-spin-btn:active {
  background: var(--starlight) !important;
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
      var rail = document.getElementById("jf-lcars-user-rail");
      if (rail) {
        rail.classList.remove("jf-lcars-user-rail-on");
        rail.style.cssText = "display:none !important";
        if (rail.parentNode) rail.parentNode.removeChild(rail);
      }
      if (typeof __jfRailPoll !== "undefined" && __jfRailPoll) {
        clearInterval(__jfRailPoll);
        __jfRailPoll = null;
      }
    } catch (e) {}
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
    if (typeof isNarrowViewport === "function" && isNarrowViewport()) {
      ["jf-lcars-dash-elbow","jf-lcars-dash-bridge","jf-lcars-dash-elbow-cut"].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.style.setProperty("display", "none", "important");
      });
      return;
    }
    var isDash = !!(document.querySelector(".dashboardDocument") ||
      (document.body && document.body.classList.contains("dashboardDocument")) ||
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
    try {
      var narrow = window.matchMedia && window.matchMedia("(max-width: 899px)").matches;
      var h = 48;
      var header =
        document.querySelector(".skinHeader") ||
        document.querySelector(".headerTop") ||
        document.querySelector(".MuiAppBar-root");
      if (header) {
        var r = header.getBoundingClientRect();
        if (r.height > 8) h = Math.ceil(r.height);
        
        if (!narrow && r.bottom > h) h = Math.ceil(r.bottom);
      }
      if (!narrow) {
        var hdrRunner = document.getElementById(RUNNER_ID);
        if (hdrRunner && hdrRunner.style.display !== "none" && getComputedStyle(hdrRunner).display !== "none") {
          var rr = hdrRunner.getBoundingClientRect();
          if (rr.height > 0 && rr.bottom > h) h = Math.ceil(rr.bottom);
        }
        var tabs =
          document.querySelector(".headerTabs") ||
          document.querySelector(".sectionTabs") ||
          document.querySelector(".emby-tabs");
        if (tabs) {
          var tr = tabs.getBoundingClientRect();
          if (tr.bottom > h) h = Math.ceil(tr.bottom);
        }
      }
      var offset = h + 8;
      document.documentElement.style.setProperty("--lcars-header-height", h + "px");
      document.documentElement.style.setProperty("--lcars-content-top", offset + "px");
      

      if (narrow) {
        document.documentElement.style.setProperty("--lcars-dash-row-top", h + "px");
      }
    } catch (e) {
      document.documentElement.style.setProperty("--lcars-header-height", "48px");
      document.documentElement.style.setProperty("--lcars-content-top", "72px");
    }
  }
  
  
  
  function bindCollapseObserver() {
    if (window.__lcarsCollapseObs) return;
    var paper = document.querySelector(".dashboardDocument .MuiDrawer-paper");
    if (!paper) return;
    window.__lcarsCollapseObs = new MutationObserver(function () {
      ensureSubmenuBars();
      bindCollapseObserver();
    });
    window.__lcarsCollapseObs.observe(paper, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "style"] });
  }

  function ensureSubmenuBars() {
    try {
      var collapses = document.querySelectorAll(
        ".dashboardDocument .MuiDrawer-paper .MuiCollapse-root, .dashboardDocument .MuiDrawer-paper .MuiCollapse-vertical"
      );
      collapses.forEach(function (col) {
        
        var a = col.querySelector(".jf-lcars-sub-bar-a");
        var b = col.querySelector(".jf-lcars-sub-bar-b");
        if (!a) {
          a = document.createElement("div");
          a.className = "jf-lcars-sub-bar jf-lcars-sub-bar-a";
          a.setAttribute("aria-hidden", "true");
        } else {
          a.parentNode && a.parentNode.removeChild(a);
        }
        if (!b) {
          b = document.createElement("div");
          b.className = "jf-lcars-sub-bar jf-lcars-sub-bar-b";
          b.setAttribute("aria-hidden", "true");
        } else {
          b.parentNode && b.parentNode.removeChild(b);
        }
        
        col.insertBefore(b, col.firstChild);
        col.insertBefore(a, col.firstChild);
      });
    } catch (e) {}
  }

  function ensureHeaderMask() {
    if (!document.body) return null;
    var el = document.getElementById(HEADER_MASK_ID);
    if (!el) {
      el = document.createElement("div");
      el.id = HEADER_MASK_ID;
      el.setAttribute("aria-hidden", "true");
      document.body.appendChild(el);
    }
    var isDash = !!(document.querySelector(".dashboardDocument") ||
      (document.body && document.body.classList.contains("dashboardDocument")));
    el.style.display = isDash ? "block" : "none";
    return el;
  }

  
  
  function ensureDashPanel(stickyTop, drawerW, fill, label) {
    try {
      if (window.matchMedia && window.matchMedia("(max-width: 899px)").matches) {
        var p = document.getElementById(DASH_PANEL_ID);
        if (p) p.style.display = "none";
        return;
      }
      var isDash = (typeof isDashboardView === "function") ? isDashboardView() : !!(
        document.querySelector(".dashboardDocument") ||
        (document.body && document.body.classList.contains("dashboardDocument"))
      );
      var panel = document.getElementById(DASH_PANEL_ID);
      if (!isDash) {
        if (panel) panel.style.display = "none";
        return;
      }
      if (!panel && document.body) {
        panel = document.createElement("div");
        panel.id = DASH_PANEL_ID;
        panel.setAttribute("aria-hidden", "true");
        document.body.appendChild(panel);
      }
      if (!panel) return;
      var lab = (label || "DASHBOARD").replace(/\s+/g, " ").trim();
      
      var m = lab.match(/dashboard/i);
      var title = m ? "DASHBOARD" : lab;
      var textEl = panel.querySelector("#jf-lcars-dash-label");
      if (!textEl) {
        textEl = document.createElement("span");
        textEl.id = "jf-lcars-dash-label";
        panel.textContent = "";
        panel.appendChild(textEl);
      }
      textEl.textContent = title;
      
      panel.style.cssText =
        "display:flex!important;position:fixed!important;left:0!important;top:" + stickyTop +
        "px!important;width:" + drawerW + "px!important;height:10.8rem!important;min-height:10.8rem!important;" +
        "max-height:10.8rem!important;z-index:12055!important;" +
        "box-sizing:border-box!important;margin:0!important;padding:0.75rem 0.65rem!important;" +
        "background:" + fill + "!important;background-color:" + fill + "!important;color:#000!important;" +
        "font-family:Antonio,Segoe UI,system-ui,sans-serif!important;font-weight:700!important;" +
        "font-size:0.8rem!important;line-height:1.1!important;" +
        "text-transform:uppercase!important;letter-spacing:0.06em!important;" +
        "align-items:flex-end!important;justify-content:flex-end!important;" +
        "pointer-events:none!important;border:none!important;border-radius:0!important;";
    } catch (e) {}
  }

  function ensureElbowChrome() {
    try {
      if (window.matchMedia && window.matchMedia("(max-width: 899px)").matches) {
        var c = document.getElementById(ELBOW_CHROME_ID);
        if (c) c.style.display = "none";
        return;
      }
      var isDash = !!(document.querySelector(".dashboardDocument") ||
        (document.body && document.body.classList.contains("dashboardDocument")));
      var el = document.getElementById(ELBOW_CHROME_ID);
      if (!isDash) {
        if (el) el.style.display = "none";
        return;
      }
      if (!el && document.body) {
        el = document.createElement("div");
        el.id = ELBOW_CHROME_ID;
        el.setAttribute("aria-hidden", "true");
        var curve = document.createElement("div");
        curve.className = "jf-lcars-elbow-curve";
        var arm = document.createElement("div");
        arm.className = "jf-lcars-elbow-arm";
        el.appendChild(curve);
        el.appendChild(arm);
        document.body.appendChild(el);
      }
      if (!el) return;
      var rootStyle = getComputedStyle(document.documentElement);
      var drawerW = parseInt(rootStyle.getPropertyValue("--lcars-admin-drawer"), 10) || 240;
      var topPx = parseInt(rootStyle.getPropertyValue("--lcars-dash-row-top"), 10);
      if (isNaN(topPx)) topPx = parseInt(rootStyle.getPropertyValue("--lcars-nav-sticky-top"), 10) || 52;
      var hot = document.documentElement.classList.contains("jf-lcars-dash-hot");
      var fill = hot ? lcarsGhostGray() : lcarsPrimaryGray(); 
      el.style.display = "block";
      el.style.cssText =
        "position:fixed!important;top:" + topPx + "px!important;left:" + drawerW +
        "px!important;z-index:12046!important;opacity:1!important;visibility:visible!important;" +
        "pointer-events:none!important;margin:0!important;padding:0!important;border:none!important;" +
        "background:transparent!important;display:block!important;";
      var curveEl = el.querySelector(".jf-lcars-elbow-curve");
      var armEl = el.querySelector(".jf-lcars-elbow-arm");
      if (armEl) {
        armEl.style.cssText =
          "position:absolute!important;left:0!important;top:0!important;width:192px!important;height:30px!important;" +
          "background:" + fill + "!important;background-color:" + fill + "!important;margin:0!important;padding:0!important;border:none!important;";
      }
      if (curveEl) {
        curveEl.style.cssText =
          "position:absolute!important;left:-30px!important;top:0!important;width:60px!important;height:60px!important;" +
          "background:" + fill + "!important;background-color:" + fill + "!important;margin:0!important;padding:0!important;border:none!important;" +
          "-webkit-mask-image:radial-gradient(circle at 100% 100%,transparent 0,transparent 30px,#000 31px)!important;" +
          "mask-image:radial-gradient(circle at 100% 100%,transparent 0,transparent 30px,#000 31px)!important;";
      }
    } catch (e) {}
  }

  
  function queryDashLink() {
    return (
      document.querySelector('.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard"]') ||
      document.querySelector('.dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root[href="#/dashboard/"]') ||
      null
    );
  }

  function setDashHot(on) {
    try {
      document.documentElement.classList.toggle("jf-lcars-dash-hot", !!on);
      if (document.body) document.body.classList.toggle("jf-lcars-dash-hot", !!on);
      var fill = on ? lcarsGhostGray() : lcarsPrimaryGray();
      document.documentElement.style.setProperty("--lcars-dash-fill", fill);
      
      var link = queryDashLink();
      if (link) {
        
        link.style.setProperty("background", "transparent", "important");
        link.style.setProperty("background-color", "transparent", "important");
      }
      var panel = document.getElementById("jf-lcars-dash-panel");
      if (panel) {
        panel.style.setProperty("background", fill, "important");
        panel.style.setProperty("background-color", fill, "important");
        panel.style.setProperty("height", "10.8rem", "important");
        panel.style.setProperty("max-height", "10.8rem", "important");
      }
      var gap = document.querySelector(".jf-lcars-dash-gap");
      if (gap) {
        gap.style.setProperty("background", "#000", "important");
        gap.style.setProperty("background-color", "#000", "important");
        gap.style.setProperty("height", "3px", "important");
      }
      var segA = document.querySelectorAll("#jf-lcars-top-runner .jf-lcars-seg-a, .jf-lcars-top-runner .jf-lcars-seg-a");
      for (var si = 0; si < segA.length; si++) {
        segA[si].style.setProperty("background", fill, "important");
        segA[si].style.setProperty("background-color", fill, "important");
      }
      var chrome = document.getElementById("jf-lcars-elbow-chrome");
      if (chrome) {
        var kids = chrome.querySelectorAll("div, span");
        for (var i = 0; i < kids.length; i++) {
          kids[i].style.setProperty("background", fill, "important");
          kids[i].style.setProperty("background-color", fill, "important");
        }
      }
      ["jf-lcars-dash-elbow", "jf-lcars-dash-bridge", "jf-lcars-dash-elbow-cut"].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.style.setProperty("background", fill, "important");
        el.style.setProperty("background-color", fill, "important");
      });
    } catch (e) {}
  }

  function ensureHomeSquare() {
    try {
      
      var h = "";
      try { h = (location.hash || "").toLowerCase(); } catch (eH) {}
      var onDash = h.indexOf("/dashboard") !== -1;
      if (!onDash) {
        
        try {
          if (document.body && document.body.classList.contains("dashboardDocument") &&
              !(typeof isLibraryView === "function" && isLibraryView())) {
            onDash = true;
          }
        } catch (eF) {}
      }
      var old = document.getElementById("jf-lcars-home-square");
      if (!onDash) {
        if (old) {
          old.removeAttribute("data-jf-show");
          old.style.setProperty("display", "none", "important");
          old.style.setProperty("visibility", "hidden", "important");
          old.style.setProperty("pointer-events", "none", "important");
        }
        return;
      }
      var size = 54;
      try {
        if (window.matchMedia && window.matchMedia("(max-width: 899px)").matches) {
          size = 45;
        } else {
          var st = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--lcars-nav-sticky-top"), 10);
          if (st > 30 && st < 120) size = st;
        }
      } catch (eS) {}
      var icon = 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%23000000%27%3E%3Cpath d=%27M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z%27/%3E%3C/svg%3E")';
      var sq = document.getElementById("jf-lcars-home-square");
      if (!sq && document.body) {
        sq = document.createElement("a");
        sq.id = "jf-lcars-home-square";
        sq.href = "#/";
        sq.setAttribute("aria-label", "Home");
        document.body.appendChild(sq);
      }
      if (!sq) return;
      sq.setAttribute("data-jf-show", "1");
      var idle = "var(--orange-red)";
      var hot = "var(--ghost-gray)";
      var iconSize = size <= 48 ? "24px" : "28px";
      sq.style.setProperty("display", "flex", "important");
      sq.style.setProperty("visibility", "visible", "important");
      sq.style.setProperty("position", "fixed", "important");
      sq.style.setProperty("top", "0", "important");
      sq.style.setProperty("left", "0", "important");
      sq.style.setProperty("width", size + "px", "important");
      sq.style.setProperty("height", size + "px", "important");
      sq.style.setProperty("z-index", "12095", "important");
      sq.style.setProperty("cursor", "pointer", "important");
      sq.style.setProperty("pointer-events", "auto", "important");
      sq.style.setProperty("box-sizing", "border-box", "important");
      sq.style.setProperty("border-bottom", size <= 48 ? "none" : "3px solid #000", "important");
      sq.style.setProperty("align-items", "center", "important");
      sq.style.setProperty("justify-content", "center", "important");
      sq.style.setProperty("background-color", sq.classList.contains("jf-lcars-home-hot") ? hot : idle, "important");
      sq.style.setProperty("background-image", icon, "important");
      sq.style.setProperty("background-repeat", "no-repeat", "important");
      sq.style.setProperty("background-position", "center", "important");
      sq.style.setProperty("background-size", iconSize + " " + iconSize, "important");
      if (!sq.__lcarsHomeBound) {
        sq.__lcarsHomeBound = true;
        sq.addEventListener("pointerenter", function () {
          sq.classList.add("jf-lcars-home-hot");
          sq.style.setProperty("background-color", "var(--ghost-gray)", "important");
          sq.style.setProperty("background-image", icon, "important");
          sq.style.setProperty("background-repeat", "no-repeat", "important");
          sq.style.setProperty("background-position", "center", "important");
        });
        sq.addEventListener("pointerleave", function () {
          sq.classList.remove("jf-lcars-home-hot");
          sq.style.setProperty("background-color", "var(--orange-red)", "important");
          sq.style.setProperty("background-image", icon, "important");
          sq.style.setProperty("background-repeat", "no-repeat", "important");
          sq.style.setProperty("background-position", "center", "important");
        });
      }
      
      var oldHit = document.getElementById("jf-lcars-home-square-hit");
      if (oldHit) oldHit.remove();
    } catch (e) {}
  }

  function bindDashHover() {
    try {
      var link = queryDashLink();
      if (!link) return;
      if (!link.__lcarsHotBound) {
        link.__lcarsHotBound = true;
        link.addEventListener("pointerenter", function () { setDashHot(true); });
        link.addEventListener("pointerleave", function (e) {
          var rt = e.relatedTarget;
          if (rt && rt.closest && (rt.closest(".jf-lcars-dash-arm-hit") || rt.closest(".jf-lcars-dash-curve-hit") || rt.closest("#jf-lcars-dash-unified-hit"))) return;
          setDashHot(false);
        });
        link.addEventListener("focusin", function () { setDashHot(true); });
        link.addEventListener("focusout", function () {
          if (!link.matches(":hover")) setDashHot(false);
        });
      }
    } catch (e) {}
  }

  function pinLcarsTopChrome() {
    try {
      
      if (isNarrowViewport()) {
        syncChromeForViewport();
        try {
          var mDash = queryDashLink();
          if (mDash) {
            mDash.classList.remove("jf-lcars-has-arm");
            ["position","top","left","width","max-width","z-index","transform",
             "-webkit-text-fill-color"].forEach(function (p) { mDash.style.removeProperty(p); });
            mDash.style.setProperty("position", "relative", "important");
            mDash.style.setProperty("height", "5.5rem", "important");
            mDash.style.setProperty("min-height", "5.5rem", "important");
            mDash.style.setProperty("width", "100%", "important");
            mDash.style.setProperty("background", lcarsPrimaryGray(), "important");
            mDash.style.setProperty("color", "#000", "important");
          }
        } catch (eM) {}
        fixMobileDrawerLayout();
        return;
      }
      var paper = document.querySelector(".dashboardDocument .MuiDrawer-paper");
      if (!paper) return;
      var drawerW = Math.round(paper.getBoundingClientRect().width) || 240;
      if (drawerW > 80 && drawerW < 400) {
        document.documentElement.style.setProperty("--lcars-admin-drawer", drawerW + "px");
      }
      paper.style.setProperty("overflow-x", "hidden", "important");
      paper.style.setProperty("overflow-y", "auto", "important");

      var fl = paper.querySelector(":scope > .MuiList-root");
      if (fl) {
        fl.style.setProperty("position", "fixed", "important");
        fl.style.setProperty("top", "0", "important");
        fl.style.setProperty("left", "0", "important");
        fl.style.setProperty("width", drawerW + "px", "important");
        fl.style.setProperty("max-width", drawerW + "px", "important");
        fl.style.setProperty("margin", "0", "important");
        fl.style.setProperty("padding", "0", "important");
        fl.style.setProperty("z-index", "12051", "important");
        fl.style.setProperty("background", "#000", "important");
        fl.style.setProperty("box-sizing", "border-box", "important");
      }
      
      var stickyTop = window.__jfLcarsStickyTopLocked || 54;
      if (!window.__jfLcarsStickyTopLocked && fl) {
        var fr = fl.getBoundingClientRect();
        var fh = Math.round(fr.height);
        if (fh > 8 && fh < 220) stickyTop = Math.round(fr.bottom);
        window.__jfLcarsStickyTopLocked = stickyTop;
      }
      stickyTop = window.__jfLcarsStickyTopLocked || stickyTop;
      document.documentElement.style.setProperty("--lcars-nav-sticky-top", stickyTop + "px");
      document.documentElement.style.setProperty("--lcars-dash-row-top", stickyTop + "px");
      document.documentElement.style.setProperty("--lcars-dash-arm", "30px");
      document.documentElement.style.setProperty("--lcars-dash-row-height", "10.8rem");
      
      document.documentElement.style.setProperty("--lcars-dash-arm-left", drawerW + "px");
      document.documentElement.style.setProperty("--lcars-dash-curve-left", (drawerW - 30) + "px");
      document.documentElement.style.setProperty("--lcars-dash-arm-len", "192px");
      document.documentElement.style.setProperty("--lcars-dash-curve", "60px");

      var hot = document.documentElement.classList.contains("jf-lcars-dash-hot");
      var fill = hot ? lcarsGhostGray() : lcarsPrimaryGray();
      document.documentElement.style.setProperty("--lcars-dash-fill", fill);

      var dashBtn = queryDashLink();
      if (!dashBtn) {
        var nodes = document.querySelectorAll(".dashboardDocument .MuiDrawer-paper a.MuiListItemButton-root");
        for (var i = 0; i < nodes.length; i++) {
          if (/dashboard/i.test(nodes[i].textContent || "")) {
            dashBtn = nodes[i];
            break;
          }
        }
      }
      if (isNarrowViewport()) {
        syncChromeForViewport();
        pinLcarsTopChrome();
        return;
      }
      if (dashBtn) {
        dashBtn.style.setProperty("position", "fixed", "important");
        dashBtn.style.setProperty("top", stickyTop + "px", "important");
        dashBtn.style.setProperty("left", "0", "important");
        dashBtn.style.setProperty("width", drawerW + "px", "important");
        dashBtn.style.setProperty("max-width", drawerW + "px", "important");
        dashBtn.style.setProperty("height", "10.8rem", "important");
        dashBtn.style.setProperty("min-height", "10.8rem", "important");
        dashBtn.style.setProperty("max-height", "10.8rem", "important");
        dashBtn.style.setProperty("margin", "0", "important");
        dashBtn.style.setProperty("padding", "0.75rem 0.65rem", "important");
        
        dashBtn.style.setProperty("background", "transparent", "important");
        dashBtn.style.setProperty("background-color", "transparent", "important");
        dashBtn.style.setProperty("color", "transparent", "important");
        dashBtn.style.setProperty("z-index", "12056", "important");
        dashBtn.style.setProperty("opacity", "1", "important");
        dashBtn.style.setProperty("filter", "none", "important");
        dashBtn.style.setProperty("border", "none", "important");
        dashBtn.style.setProperty("border-radius", "0", "important");
        dashBtn.style.setProperty("box-shadow", "none", "important");
        dashBtn.style.setProperty("box-sizing", "border-box", "important");
        dashBtn.style.setProperty("-webkit-text-fill-color", "transparent", "important");
        var hideKids = dashBtn.querySelectorAll("*");
        for (var hi = 0; hi < hideKids.length; hi++) {
          hideKids[hi].style.setProperty("color", "transparent", "important");
          hideKids[hi].style.setProperty("fill", "transparent", "important");
          hideKids[hi].style.setProperty("opacity", "0", "important");
        }
        var parent = dashBtn.closest(".MuiListItem-root");
        

        if (parent && !parent.__jfLcarsPlaceLocked) {
          parent.__jfLcarsPlaceLocked = true;
          parent.style.setProperty("min-height", "10.8rem", "important");
          parent.style.setProperty("height", "auto", "important");
          parent.style.setProperty("max-height", "none", "important");
          parent.style.setProperty("margin", "0", "important");
          parent.style.setProperty("padding", "0", "important");
          parent.style.setProperty("background", "#000", "important");
          parent.style.setProperty("overflow", "visible", "important");
          parent.style.setProperty("position", "relative", "important");
          parent.style.setProperty("z-index", "0", "important");
          parent.style.setProperty("box-sizing", "border-box", "important");
          if (!parent.querySelector(".jf-lcars-dash-gap")) {
            var gap = document.createElement("div");
            gap.className = "jf-lcars-dash-gap";
            gap.setAttribute("aria-hidden", "true");
            gap.style.cssText = "display:block!important;height:3px!important;width:100%!important;background:#000!important;margin:0!important;padding:0!important;border:none!important;pointer-events:none!important;";
            parent.appendChild(gap);
          }
          try {
            var next = parent.nextElementSibling;
            if (next && next.style) {
              next.style.setProperty("position", "relative", "important");
              next.style.setProperty("z-index", "1", "important");
              next.style.setProperty("margin-top", "0", "important");
              next.style.setProperty("opacity", "1", "important");
              next.style.setProperty("visibility", "visible", "important");
              var nextBtn = next.querySelector
                ? next.querySelector(".MuiListItemButton-root, a.MuiListItemButton-root")
                : null;
              if (nextBtn && nextBtn.style) {
                nextBtn.style.setProperty("margin-top", "0", "important");
                nextBtn.style.setProperty("opacity", "1", "important");
                nextBtn.style.setProperty("visibility", "visible", "important");
                nextBtn.style.setProperty("position", "relative", "important");
                nextBtn.style.setProperty("z-index", "1", "important");
              }
            }
          } catch (eNext) {}
        }
      }

      var deskRunner = document.getElementById(RUNNER_ID);
      if (deskRunner) {
        deskRunner.style.setProperty("position", "fixed", "important");
        deskRunner.style.setProperty("top", stickyTop + "px", "important");
        deskRunner.style.setProperty("left", drawerW + 96 + "px", "important");
        deskRunner.style.setProperty("right", "0", "important");
        deskRunner.style.setProperty("height", "30px", "important");
        deskRunner.style.setProperty("z-index", "12045", "important");
        deskRunner.style.setProperty("opacity", "1", "important");
        deskRunner.style.setProperty("visibility", "visible", "important");
        deskRunner.style.setProperty("display", "flex", "important");
        var sega = deskRunner.querySelector(".jf-lcars-seg-a");
        if (sega) {
          sega.style.setProperty("background", fill, "important");
          sega.style.setProperty("background-color", fill, "important");
          sega.style.setProperty("opacity", "1", "important");
        }
      }
      var dashLabel = "DASHBOARD";
      if (typeof dashBtn !== "undefined" && dashBtn) {
        var t = (dashBtn.textContent || "").replace(/\s+/g, " ").trim();
        if (t) dashLabel = t;
      }
      ensureDashPanel(stickyTop, drawerW, fill, dashLabel);
      ensureElbowChrome();
      bindDashHover();
      ensureHomeSquare();
    } catch (e) {}
  }

  function ensureNavHeaderSpacer() {
    try {
      
      var sp = document.getElementById("jf-lcars-nav-header-spacer");
      if (sp) {
        sp.style.cssText = "display:none!important;height:0!important;min-height:0!important;margin:0!important;padding:0!important;";
      }
      
      if (!window.__jfLcarsStickyTopLocked) {
        var paper = document.querySelector(".dashboardDocument .MuiDrawer-paper");
        var first = paper && paper.querySelector(":scope > .MuiList-root");
        var h = 54;
        if (first) {
          var fh = Math.round(first.getBoundingClientRect().height);
          if (fh > 8 && fh < 220) h = fh;
        }
        window.__jfLcarsStickyTopLocked = h;
        document.documentElement.style.setProperty("--lcars-nav-sticky-top", h + "px");
      }
    } catch (e) {}
  }

  function wrapContentPrimary() {
    try {
      if (!document.body || !document.body.classList.contains("dashboardDocument") &&
          !document.documentElement.classList.contains("dashboardDocument") &&
          !document.querySelector(".dashboardDocument")) {
        
      }
      var nodes = document.querySelectorAll(".dashboardDocument .content-primary, .content-primary.MuiBox-root, .content-primary");
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        if (!el || !el.parentNode) continue;
        if (el.parentNode.classList && el.parentNode.classList.contains("lcars-container")) continue;
        
        if (!el.closest(".dashboardDocument") && !document.querySelector(".dashboardDocument")) continue;
        var wrap = document.createElement("div");
        wrap.className = "lcars-container";
        el.parentNode.insertBefore(wrap, el);
        wrap.appendChild(el);
      }
    } catch (e) {}
  }

  function measureAdminDrawer() {
    try {
      var paper = document.querySelector(".dashboardDocument .MuiDrawer-paper, .dashboardDocument .MuiDrawer-docked .MuiDrawer-paper");
      if (paper) {
        var w = Math.round(paper.getBoundingClientRect().width);
        if (w > 80 && w < 400) {
          document.documentElement.style.setProperty("--lcars-admin-drawer", w + "px");
        }
        
        paper.style.setProperty("overflow-x", "hidden", "important");
        paper.style.setProperty("overflow-y", "auto", "important");
        paper.style.setProperty("position", "fixed", "important");
        paper.style.setProperty("left", "0", "important");
        if (window.matchMedia && window.matchMedia("(max-width: 899px)").matches) {
          paper.style.setProperty("top", "56px", "important");
          
          paper.style.setProperty("height", "auto", "important");
          paper.style.setProperty("max-height", "calc(100vh - 56px)", "important");
        } else {
          paper.style.setProperty("top", "0", "important");
          paper.style.setProperty("height", "100vh", "important");
          paper.style.setProperty("max-height", "100vh", "important");
        }
      }
      var dock = document.querySelector(".dashboardDocument .MuiDrawer-docked, .dashboardDocument .MuiDrawer-root.MuiDrawer-docked");
      if (dock) {
        dock.style.setProperty("height", "100vh", "important");
        dock.style.setProperty("overflow", "hidden", "important");
        dock.style.setProperty("position", "fixed", "important");
        dock.style.setProperty("top", "0", "important");
        dock.style.setProperty("left", "0", "important");
      }
      pinLcarsTopChrome();
      ensureNavHeaderSpacer();
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
      styleAlphaPicker();
      styleResetFiltersBtn();
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

  
  function pruneEmptyTableColumns() {
    try {
      var tables = document.querySelectorAll(
        ".MuiTable-root, table.MuiTable-root, .MuiTableContainer-root table, table"
      );
      for (var t = 0; t < tables.length; t++) {
        var table = tables[t];
        var body = table.tBodies && table.tBodies[0];
        if (!body || !body.rows || body.rows.length === 0) continue;
        var headRow =
          (table.tHead && table.tHead.rows[0]) ||
          table.querySelector("thead tr");
        var colCount = 0;
        for (var r = 0; r < body.rows.length; r++) {
          if (body.rows[r].cells.length > colCount) {
            colCount = body.rows[r].cells.length;
          }
        }
        if (headRow && headRow.cells.length > colCount) {
          colCount = headRow.cells.length;
        }
        for (var c = 0; c < colCount; c++) {
          var hasText = false;
          for (var r2 = 0; r2 < body.rows.length; r2++) {
            var cell = body.rows[r2].cells[c];
            if (!cell) continue;
            
            var text = (cell.innerText || cell.textContent || "").replace(/\s+/g, " ").trim();
            
            
            var hasControl = !!cell.querySelector(
              "button, a, input, select, textarea, img, svg, .MuiAvatar-root"
            );
            if (text.length > 0 || hasControl) {
              hasText = true;
              break;
            }
          }
          var display = hasText ? "" : "none";
          for (var r3 = 0; r3 < body.rows.length; r3++) {
            var bc = body.rows[r3].cells[c];
            if (bc) bc.style.display = display;
          }
          if (headRow && headRow.cells[c]) {
            headRow.cells[c].style.display = display;
          }
          
          var allHeadRows = table.querySelectorAll("thead tr");
          for (var h = 0; h < allHeadRows.length; h++) {
            var hc = allHeadRows[h].cells[c];
            if (hc) hc.style.display = display;
          }
        }
      }
    } catch (e) {
      console.warn("[JellyfinLCARS] pruneEmptyTableColumns", e);
    }
  }

  
  var TOP_BTN_ID = "jf-lcars-topBtn";
  

  function queryLibHomeLink() {
    return (
      document.querySelector("#jf-lcars-library-nav a.jf-lcars-lib-home") ||
      document.querySelector("#jf-lcars-library-nav a.jf-lcars-lib-btn:first-child") ||
      null
    );
  }

  function paintLibHomeChrome(hot) {
    try {
      var fill = hot ? lcarsGhostGray() : lcarsPrimaryGray();
      document.documentElement.style.setProperty("--lcars-dash-fill", fill);
      var home = queryLibHomeLink();
      if (home) {
        home.style.setProperty("background", fill, "important");
        home.style.setProperty("background-color", fill, "important");
      }
      var lib = document.documentElement.classList.contains("jf-lcars-library") &&
        !document.documentElement.classList.contains("jf-lcars-video");
      var chrome = document.getElementById("jf-lcars-lib-elbow-chrome");
      if (!lib) {
        if (chrome) chrome.style.display = "none";
        var uh = document.getElementById("jf-lcars-lib-unified-hit");
        if (uh) uh.style.display = "none";
        return;
      }
      if (!chrome && document.body) {
        chrome = document.createElement("div");
        chrome.id = "jf-lcars-lib-elbow-chrome";
        chrome.setAttribute("aria-hidden", "true");
        var curve = document.createElement("div");
        curve.className = "jf-lcars-lib-elbow-curve";
        var arm = document.createElement("div");
        arm.className = "jf-lcars-lib-elbow-arm";
        chrome.appendChild(curve);
        chrome.appendChild(arm);
        document.body.appendChild(chrome);
      }
      if (!chrome) return;
      var narrow = window.innerWidth < 900;
      var drawerW = 240;
      try {
        var navEl = document.getElementById("jf-lcars-library-nav");
        if (navEl) {
          var nr = navEl.getBoundingClientRect();
          if (nr.width > 40) drawerW = Math.round(nr.width);
        } else {
          var dw = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--lcars-admin-drawer"), 10);
          if (dw > 80) drawerW = dw;
        }
      } catch (e) {}
      var rowTop = 48;
      try {
        var rt = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--lcars-lib-row-top"), 10);
        if (rt > 20) rowTop = rt;
      } catch (e2) {}
      
      var left;
      var topY = Math.max(0, narrow ? (rowTop - 1) : (rowTop - 5)); 
      if (narrow) {
        left = 21; 
      } else {
        left = Math.max(0, drawerW - 36 - 5);
      }
      chrome.style.cssText =
        "position:fixed!important;top:" + topY + "px!important;left:" + left +
        "px!important;z-index:12060!important;opacity:1!important;visibility:visible!important;" +
        "pointer-events:none!important;margin:0!important;padding:0!important;border:none!important;" +
        "background:transparent!important;display:block!important;";
      
      var meOld = document.getElementById("jf-lcars-mobile-elbow");
      if (meOld) {
        meOld.style.setProperty("display", "none", "important");
        meOld.style.setProperty("visibility", "hidden", "important");
      }
      var armEl = chrome.querySelector(".jf-lcars-lib-elbow-arm");
      var curveEl = chrome.querySelector(".jf-lcars-lib-elbow-curve");
      if (armEl) {
        if (narrow) {
          
          var barHMob = 36;
          var armLeft = -left;
          var armW = left + 88;
          armEl.style.cssText =
            "position:absolute!important;left:" + armLeft + "px!important;top:0!important;" +
            "width:" + armW + "px!important;height:" + barHMob + "px!important;" +
            "background:" + fill + "!important;background-color:" + fill + "!important;" +
            "border:none!important;border-radius:0!important;" +
            "z-index:3!important;display:block!important;opacity:1!important;visibility:visible!important;" +
            "pointer-events:none!important;";
          
          var gapStrip = chrome.querySelector(".jf-lcars-lib-elbow-gap");
          if (!gapStrip) {
            gapStrip = document.createElement("div");
            gapStrip.className = "jf-lcars-lib-elbow-gap";
            chrome.appendChild(gapStrip);
          }
          gapStrip.style.cssText =
            "position:absolute!important;left:" + armLeft + "px!important;top:0!important;" +
            "width:" + armW + "px!important;height:" + barHMob + "px!important;" +
            "background:" + fill + "!important;background-color:" + fill + "!important;" +
            "border:none!important;z-index:5!important;display:block!important;opacity:1!important;" +
            "pointer-events:none!important;";
          var tlCap = chrome.querySelector(".jf-lcars-lib-elbow-tlcap");
          if (tlCap) tlCap.style.setProperty("display", "none", "important");
          var vfill = chrome.querySelector(".jf-lcars-lib-elbow-vfill");
          if (!vfill) {
            vfill = document.createElement("div");
            vfill.className = "jf-lcars-lib-elbow-vfill";
            chrome.appendChild(vfill);
          }
          var vH = Math.max(56, 130 - topY);
          vfill.style.cssText =
            "position:absolute!important;left:" + armLeft + "px!important;top:0!important;" +
            "width:56px!important;height:" + vH + "px!important;" +
            "background:" + fill + "!important;background-color:" + fill + "!important;" +
            "border:none!important;z-index:1!important;display:block!important;opacity:1!important;" +
            "pointer-events:none!important;";
        } else {
          var barHDesk = 18;
          var bridgeW = 56;
          armEl.style.cssText =
            "position:absolute!important;left:0!important;top:5px!important;" +
            "width:" + bridgeW + "px!important;height:" + barHDesk + "px!important;" +
            "background:" + fill + "!important;background-color:" + fill + "!important;" +
            "border:none!important;border-radius:0!important;" +
            "z-index:3!important;display:block!important;opacity:1!important;visibility:visible!important;" +
            "pointer-events:none!important;";
          var vfillOff = chrome.querySelector(".jf-lcars-lib-elbow-vfill");
          if (vfillOff) vfillOff.style.display = "none";
          var gapOff = chrome.querySelector(".jf-lcars-lib-elbow-gap");
          if (gapOff) gapOff.style.display = "none";
          var tlOff = chrome.querySelector(".jf-lcars-lib-elbow-tlcap");
          if (tlOff) tlOff.style.display = "none";
        }
      }
      if (curveEl) {
        if (narrow) {
          
          curveEl.style.cssText =
            "position:absolute!important;left:0!important;top:0!important;width:72px!important;height:73px!important;" +
            "background:" + fill + "!important;background-color:" + fill + "!important;border:none!important;" +
            "z-index:2!important;display:block!important;opacity:1!important;pointer-events:none!important;" +
            "-webkit-mask-image:radial-gradient(circle at 100% 100%,transparent 0,transparent 36px,#000 37px)!important;" +
            "mask-image:radial-gradient(circle at 100% 100%,transparent 0,transparent 36px,#000 37px)!important;" +
            "-webkit-mask-repeat:no-repeat!important;mask-repeat:no-repeat!important;" +
            "-webkit-mask-size:100% 100%!important;mask-size:100% 100%!important;";
        } else {
          curveEl.style.cssText =
            "position:absolute!important;left:6px!important;top:0!important;width:72px!important;height:72px!important;" +
            "background:" + fill + "!important;background-color:" + fill + "!important;border:none!important;" +
            "z-index:2!important;display:block!important;opacity:1!important;pointer-events:none!important;" +
            "-webkit-mask-image:radial-gradient(circle at 100% 100%,transparent 0,transparent 36px,#000 37px)!important;" +
            "mask-image:radial-gradient(circle at 100% 100%,transparent 0,transparent 36px,#000 37px)!important;" +
            "-webkit-mask-repeat:no-repeat!important;mask-repeat:no-repeat!important;" +
            "-webkit-mask-size:100% 100%!important;mask-size:100% 100%!important;" +
            "clip-path:inset(8px 0 0 0)!important;";
        }
      }

      
      var cHit = chrome.querySelector(".jf-lcars-lib-chrome-hit");
      if (!cHit) {
        cHit = document.createElement("a");
        cHit.className = "jf-lcars-lib-chrome-hit";
        cHit.setAttribute("aria-label", "Home");
        cHit.addEventListener("pointerenter", function () { setLibHomeHot(true); });
        cHit.addEventListener("pointerleave", function () { setLibHomeHot(false); });
        cHit.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          var h = queryLibHomeLink();
          location.hash = (h && h.getAttribute("href")) || "#/";
        });
        chrome.appendChild(cHit);
      }
      var href = (home && home.getAttribute("href")) || "#/";
      cHit.href = href;
      if (narrow) {
        chrome.style.setProperty("pointer-events", "auto", "important");
        cHit.style.cssText =
          "position:absolute!important;left:" + (-left) + "px!important;top:0!important;" +
          "width:" + (left + 100) + "px!important;height:80px!important;" +
          "background:transparent!important;cursor:pointer!important;" +
          "pointer-events:auto!important;z-index:20!important;display:block!important;" +
          "margin:0!important;padding:0!important;border:none!important;";
      } else {
        chrome.style.setProperty("pointer-events", "none", "important");
        cHit.style.cssText =
          "position:absolute!important;left:0!important;top:0!important;" +
          "width:100px!important;height:80px!important;" +
          "background:transparent!important;cursor:pointer!important;" +
          "pointer-events:auto!important;z-index:20!important;display:block!important;";
      }
      
      var hit = document.getElementById("jf-lcars-lib-unified-hit");
      if (!hit && document.body) {
        hit = document.createElement("a");
        hit.id = "jf-lcars-lib-unified-hit";
        hit.setAttribute("aria-label", "Home");
        hit.addEventListener("pointerenter", function () { setLibHomeHot(true); });
        hit.addEventListener("pointerleave", function () { setLibHomeHot(false); });
        hit.addEventListener("click", function (e) {
          e.preventDefault();
          var h = queryLibHomeLink();
          location.hash = (h && h.getAttribute("href")) || "#/";
        });
        document.body.appendChild(hit);
      }
      if (hit) {
        hit.href = href;
        var homeTop = topY;
        var homeBottom = topY + 120;
        if (home) {
          var br = home.getBoundingClientRect();
          if (br.top > 0) homeTop = Math.min(topY, Math.round(br.top));
          if (br.bottom > 0) homeBottom = Math.round(br.bottom);
        }
        var hitTop = Math.max(0, homeTop - 2);
        var hitH = Math.max(homeBottom - hitTop + 4, 90);
        var hitW = narrow ? Math.max(120, left + 100) : (drawerW + 48);
        hit.style.cssText =
          "position:fixed!important;left:0!important;top:" + hitTop +
          "px!important;width:" + hitW + "px!important;height:" + Math.round(hitH) +
          "px!important;z-index:12070!important;display:block!important;" +
          "background:transparent!important;cursor:pointer!important;pointer-events:auto!important;" +
          "margin:0!important;padding:0!important;border:none!important;";
        if (home) {
          home.style.setProperty("position", "relative", "important");
          home.style.setProperty("z-index", "12080", "important");
        }
      }
    } catch (e) {}
  }

  function setLibHomeHot(on) {
    try {
      var home = queryLibHomeLink();
      var want = !!on;
      document.documentElement.classList.toggle("jf-lcars-lib-home-hot", want);
      if (document.body) document.body.classList.toggle("jf-lcars-lib-home-hot", want);
      var fill = want ? lcarsGhostGray() : lcarsPrimaryGray();
      if (home) {
        home.classList.toggle("jf-lcars-lib-home-hot", want);
        home.style.setProperty("background", fill, "important");
        home.style.setProperty("background-color", fill, "important");
      }
      paintLibHomeChrome(want);
      
      try {
        var chrome = document.getElementById("jf-lcars-lib-elbow-chrome");
        if (chrome) {
          chrome.style.setProperty("background", "transparent", "important");
          var kids = chrome.querySelectorAll("div");
          for (var i = 0; i < kids.length; i++) {
            if (kids[i].classList.contains("jf-lcars-lib-chrome-hit")) continue;
            kids[i].style.setProperty("background", fill, "important");
            kids[i].style.setProperty("background-color", fill, "important");
          }
        }
        var segs = document.querySelectorAll("#jf-lcars-top-runner .jf-lcars-seg-a, .jf-lcars-top-runner .jf-lcars-seg-a");
        for (var s = 0; s < segs.length; s++) {
          segs[s].style.setProperty("background", fill, "important");
          segs[s].style.setProperty("background-color", fill, "important");
        }
      } catch (eForce) {}
    } catch (e) {}
  }

  function bindLibHomeHover() {
    try {
      var link = queryLibHomeLink();
      if (!link) {
        document.documentElement.classList.remove("jf-lcars-lib-home-hot");
        paintLibHomeChrome(false);
        return;
      }
      if (!link.__lcarsLibHotBound) {
        link.__lcarsLibHotBound = true;
        link.addEventListener("pointerenter", function () { setLibHomeHot(true); });
        link.addEventListener("pointerleave", function (e) {
          
          var rt = e.relatedTarget;
          if (rt && rt.closest && rt.closest("#jf-lcars-lib-unified-hit")) return;
          setLibHomeHot(false);
        });
      }
      paintLibHomeChrome(!!link.matches(":hover") || document.documentElement.classList.contains("jf-lcars-lib-home-hot"));
    } catch (e) {}
  }

  function ensureLibArmHit() {
    bindLibHomeHover();
    try {
      if (typeof paintLibHomeChrome === "function") {
        var hot = document.documentElement.classList.contains("jf-lcars-lib-home-hot");
        paintLibHomeChrome(!!hot);
      }
    } catch (ePaint) {}
  }

  function isNarrowViewport() {
    try {
      return window.innerWidth < 900;
    } catch (e) {
      return false;
    }
  }

  function setNarrowClass() {
    var narrow = isNarrowViewport();
    document.documentElement.classList.toggle("jf-lcars-narrow", narrow);
    if (document.body) document.body.classList.toggle("jf-lcars-narrow", narrow);
    return narrow;
  }

  
  function syncChromeForViewport() {
    try {
      var narrow = setNarrowClass();
      var isLib = false;
      try {
        isLib = typeof isLibraryView === "function" && isLibraryView() &&
          !document.documentElement.classList.contains("jf-lcars-video");
      } catch (eLib) {
        isLib = document.documentElement.classList.contains("jf-lcars-library") &&
          !document.documentElement.classList.contains("jf-lcars-video");
      }
      var adminIds = [
        "jf-lcars-elbow-chrome", "jf-lcars-dash-panel",
        "jf-lcars-dash-elbow", "jf-lcars-dash-elbow-cut", "jf-lcars-dash-bridge",
        "jf-lcars-lib-elbow-chrome", "jf-lcars-lib-unified-hit", "jf-lcars-lib-arm-hit"
      ];
      adminIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        if (narrow) {
          el.style.setProperty("display", "none", "important");
          el.style.setProperty("visibility", "hidden", "important");
          el.style.setProperty("opacity", "0", "important");
        } else {
          el.style.removeProperty("display");
          el.style.removeProperty("visibility");
          el.style.removeProperty("opacity");
        }
      });
      document.querySelectorAll(".jf-lcars-dash-arm-hit, .jf-lcars-dash-curve-hit").forEach(function (el) {
        if (narrow) el.style.setProperty("display", "none", "important");
        else el.style.removeProperty("display");
      });

      var elbow = document.getElementById("jf-lcars-elbow");
      var cut = document.getElementById("jf-lcars-elbow-cut");
      var runner = document.getElementById("jf-lcars-top-runner");
      var frame = document.getElementById("jf-lcars-frame");
      var headerH = 48;
      try {
        var hdr = document.querySelector(".MuiAppBar-root, .skinHeader, header");
        if (hdr) {
          var hr = hdr.getBoundingClientRect();
          if (hr.height > 20 && hr.height < 120) headerH = Math.round(hr.height);
        }
      } catch (eH) {}

      if (narrow && isLib) {
        
        [elbow, cut, runner, frame].forEach(function (el) {
          if (!el) return;
          el.style.setProperty("display", "none", "important");
          el.style.setProperty("visibility", "hidden", "important");
          el.style.setProperty("opacity", "0", "important");
        });
        var barH = 36;
        var railW = 56;
        var curveR = 48;
        var elbowTop = Math.max(0, headerH - 5);
        document.documentElement.style.setProperty("--lcars-mobile-bar-h", barH + "px");
        document.documentElement.style.setProperty("--lcars-mobile-curve-r", curveR + "px");
        document.documentElement.style.setProperty("--lcars-mobile-elbow-top", elbowTop + "px");
        document.documentElement.style.setProperty("--lcars-lib-row-top", headerH + "px");
        document.documentElement.classList.add("jf-lcars-library", "jf-lcars-narrow");
        if (document.body) document.body.classList.add("jf-lcars-library", "jf-lcars-narrow");
        
        var mtb = document.getElementById("jf-lcars-mobile-top-bar");
        if (!mtb && document.body) {
          mtb = document.createElement("div");
          mtb.id = "jf-lcars-mobile-top-bar";
          mtb.setAttribute("aria-hidden", "true");
          var mrow = document.createElement("div");
          mrow.className = "jf-lcars-bar-row";
          ["a", "b", "c", "d", "e"].forEach(function (k) {
            var s = document.createElement("div");
            s.className = "jf-lcars-seg jf-lcars-seg-" + k;
            mrow.appendChild(s);
          });
          mtb.appendChild(mrow);
          document.body.appendChild(mtb);
        }
        if (mtb) {
          mtb.style.cssText =
            "display:flex!important;visibility:visible!important;opacity:1!important;" +
            "position:fixed!important;left:117px!important;right:0!important;" +
            "top:" + Math.max(0, headerH - 1) + "px!important;height:" + barH + "px!important;" +
            "z-index:12050!important;pointer-events:none!important;margin:0!important;padding:0!important;" +
            "border:none!important;background:transparent!important;box-sizing:border-box!important;";
          var mrowEl = mtb.querySelector(".jf-lcars-bar-row");
          if (mrowEl) {
            mrowEl.style.cssText = "display:flex!important;width:100%!important;height:" + barH + "px!important;";
          }
          mtb.querySelectorAll(".jf-lcars-seg").forEach(function (seg) {
            seg.style.setProperty("height", barH + "px", "important");
            seg.style.setProperty("display", "block", "important");
          });
        }

        var me = document.getElementById("jf-lcars-mobile-elbow");
        if (!me && document.body) {
          me = document.createElement("div");
          me.id = "jf-lcars-mobile-elbow";
          me.setAttribute("aria-hidden", "true");
          var vert = document.createElement("div");
          vert.className = "jf-lcars-me-vert";
          var bar = document.createElement("div");
          bar.className = "jf-lcars-me-bar";
          me.appendChild(vert);
          me.appendChild(bar);
          document.body.appendChild(me);
        }
        if (me) {
          me.querySelectorAll(".jf-lcars-me-plate, .jf-lcars-me-scoop, .jf-lcars-me-mask").forEach(function (n) {
            if (n.parentNode) n.parentNode.removeChild(n);
          });
          me.style.cssText =
            "display:block!important;position:fixed!important;left:0!important;top:" + elbowTop +
            "px!important;width:100%!important;height:" + (barH + curveR) + "px!important;" +
            "z-index:1090!important;pointer-events:none!important;overflow:visible!important;";
          var vertEl = me.querySelector(".jf-lcars-me-vert");
          var barEl = me.querySelector(".jf-lcars-me-bar");
          if (vertEl) {
            vertEl.style.cssText =
              "position:absolute!important;left:0!important;top:0!important;" +
              "width:" + railW + "px!important;height:" + (barH + curveR) + "px!important;" +
              "background:#6d748c!important;";
          }
          if (barEl) {
            barEl.style.cssText =
              "position:absolute!important;left:" + railW + "px!important;right:0!important;" +
              "top:0!important;height:" + barH + "px!important;background:#6d748c!important;" +
              "border-radius:0!important;";
          }
        }
        
        var contentNodes = document.querySelectorAll(
          ".mainAnimatedPage, .page, .mainAnimatedPages, #mainContent, " +
          ".skinBody, main.MuiBox-root, main, .content-primary"
        );
        for (var ci = 0; ci < contentNodes.length; ci++) {
          var cn = contentNodes[ci];
          if (!cn || !cn.style) continue;
          cn.style.setProperty("border-top-left-radius", curveR + "px", "important");
          cn.style.setProperty("border-top-right-radius", "0", "important");
          cn.style.setProperty("background-color", "#000", "important");
          cn.style.setProperty("margin-left", railW + "px", "important");
          cn.style.setProperty("margin-top", "-5px", "important");
          cn.style.setProperty("position", "relative", "important");
          cn.style.setProperty("z-index", "1100", "important");
          cn.style.setProperty("box-sizing", "border-box", "important");
        }
        
        document.querySelectorAll(".MuiToolbar-root, .headerTabs, .sectionTabs").forEach(function (tb) {
          if (!tb || !tb.style) return;
          tb.style.setProperty("border-radius", "0", "important");
          tb.style.setProperty("background", "transparent", "important");
        });
            } else if (narrow) {
        [elbow, cut, runner, frame].forEach(function (el) {
          if (!el) return;
          el.style.setProperty("display", "none", "important");
          el.style.setProperty("visibility", "hidden", "important");
          el.style.setProperty("opacity", "0", "important");
        });
        var meHide1 = document.getElementById("jf-lcars-mobile-elbow");
        if (meHide1) meHide1.style.setProperty("display", "none", "important");
        var mtbHide1 = document.getElementById("jf-lcars-mobile-top-bar");
        if (mtbHide1) mtbHide1.style.setProperty("display", "none", "important");
      } else {
        var mtbHide2 = document.getElementById("jf-lcars-mobile-top-bar");
        if (mtbHide2) mtbHide2.style.setProperty("display", "none", "important");
        [elbow, cut, runner, frame].forEach(function (el) {
          if (!el) return;
          el.style.removeProperty("display");
          el.style.removeProperty("visibility");
          el.style.removeProperty("opacity");
          el.style.removeProperty("left");
          el.style.removeProperty("top");
          el.style.removeProperty("width");
          el.style.removeProperty("height");
        });
        var meHide2 = document.getElementById("jf-lcars-mobile-elbow");
        if (meHide2) meHide2.style.setProperty("display", "none", "important");
      }

      if (!narrow) {
        document.querySelectorAll(
          ".MuiDrawer-paper .MuiListItem-root, .MuiDrawer-paper a.MuiListItemButton-root"
        ).forEach(function (el) {
          if (!el.style) return;
          ["display","height","min-height","max-height","opacity","visibility"].forEach(function (p) {
            el.style.removeProperty(p);
          });
        });
        var dash = document.querySelector(
          'a.MuiListItemButton-root[href="#/dashboard"], a.MuiListItemButton-root[href="#/dashboard/"]'
        );
        if (dash) {
          ["position","top","left","width","height","min-height","max-height",
           "transform","background","background-color","-webkit-text-fill-color"].forEach(function (p) {
            dash.style.removeProperty(p);
          });
          dash.classList.remove("jf-lcars-has-arm");
          dash.querySelectorAll("*").forEach(function (kid) {
            ["color","fill","opacity","visibility","-webkit-text-fill-color"].forEach(function (p) {
              kid.style.removeProperty(p);
            });
          });
        }
      }
    } catch (e) {}
  }

  function fixMobileDrawerLayout() {
    try {
      if (!isNarrowViewport()) return;
      var papers = document.querySelectorAll(".MuiDrawer-paperAnchorTemporary, .MuiModal-root .MuiDrawer-paper");
      papers.forEach(function (paper) {
        var root = paper.closest(".MuiDrawer-root");
        var open = root && root.classList.contains("MuiDrawer-open");
        if (!open) return;
        
        paper.querySelectorAll(".MuiListItem-root").forEach(function (li) {
          if (li.querySelector("img") || li.querySelector(".MuiListItemText-secondary")) {
            var a = li.querySelector("a[href]");
            var href = a ? (a.getAttribute("href") || "") : "";
            if (!href || href === "#" || href === "#/" || href.indexOf("#/home") === 0) {
              if (li.querySelector("img")) {
                li.style.setProperty("display", "none", "important");
              }
            }
          }
        });
      });
    } catch (e) {}
  }

  function ensureMobileDrawerObserver() {
    
  }

  function ensureDashArmHit() {
    try {
      var link = queryDashLink();
      if (!link) return;
      bindDashHover();
      link.classList.add("jf-lcars-has-arm");
      var arm = link.querySelector(".jf-lcars-dash-arm-hit");
      if (!arm) {
        arm = document.createElement("span");
        arm.className = "jf-lcars-dash-arm-hit";
        arm.setAttribute("aria-hidden", "true");
        link.appendChild(arm);
      }
      var curve = link.querySelector(".jf-lcars-dash-curve-hit");
      if (!curve) {
        curve = document.createElement("span");
        curve.className = "jf-lcars-dash-curve-hit";
        curve.setAttribute("aria-hidden", "true");
        link.appendChild(curve);
      }
      var drawerW = 240;
      try {
        var dw = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--lcars-admin-drawer"), 10);
        if (dw > 80) drawerW = dw;
      } catch (e) {}
      var topPx = 48;
      try {
        var rt = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--lcars-dash-row-top"), 10);
        if (rt > 20) topPx = rt;
      } catch (e2) {}
      
      arm.style.cssText =
        "position:fixed!important;left:" + drawerW + "px!important;top:" + topPx +
        "px!important;width:220px!important;height:36px!important;z-index:12061!important;" +
        "pointer-events:auto!important;cursor:pointer!important;display:block!important;" +
        "background:transparent!important;margin:0!important;padding:0!important;border:none!important;";
      curve.style.cssText =
        "position:fixed!important;left:" + (drawerW - 40) + "px!important;top:" + topPx +
        "px!important;width:90px!important;height:90px!important;z-index:12060!important;" +
        "pointer-events:auto!important;cursor:pointer!important;display:block!important;" +
        "background:transparent!important;margin:0!important;padding:0!important;border:none!important;";
      if (!arm.__lcarsHotBound) {
        arm.__lcarsHotBound = true;
        arm.addEventListener("pointerenter", function () { setDashHot(true); });
        arm.addEventListener("pointerleave", function (e) {
          var rt = e.relatedTarget;
          if (rt && (rt === link || (rt.closest && (rt.closest("a[href=\"#/dashboard\"]") || rt.closest("a[href=\"#/dashboard/\"]") || rt.closest(".jf-lcars-dash-curve-hit"))))) return;
          setDashHot(false);
        });
        arm.addEventListener("click", function (e) {
          e.preventDefault();
          try { link.click(); } catch (eC) { location.hash = "#/dashboard"; }
        });
      }
      if (!curve.__lcarsHotBound) {
        curve.__lcarsHotBound = true;
        curve.addEventListener("pointerenter", function () { setDashHot(true); });
        curve.addEventListener("pointerleave", function (e) {
          var rt = e.relatedTarget;
          if (rt && (rt === link || (rt.closest && (rt.closest("a[href=\"#/dashboard\"]") || rt.closest("a[href=\"#/dashboard/\"]") || rt.closest(".jf-lcars-dash-arm-hit"))))) return;
          setDashHot(false);
        });
        curve.addEventListener("click", function (e) {
          e.preventDefault();
          try { link.click(); } catch (eC) { location.hash = "#/dashboard"; }
        });
      }
      
      var u = document.getElementById("jf-lcars-dash-unified-hit");
      if (!u && document.body) {
        u = document.createElement("a");
        u.id = "jf-lcars-dash-unified-hit";
        u.href = "#/dashboard";
        u.setAttribute("aria-label", "Dashboard");
        document.body.appendChild(u);
      }
      if (u) {
        var homeBottom = topPx + 180;
        try {
          var lr = link.getBoundingClientRect();
          if (lr.bottom > topPx) homeBottom = Math.round(lr.bottom);
        } catch (e3) {}
        u.style.cssText =
          "position:fixed!important;left:0!important;top:" + topPx +
          "px!important;width:" + (drawerW + 220) + "px!important;height:" +
          Math.max(90, homeBottom - topPx + 8) + "px!important;" +
          "z-index:12055!important;display:block!important;background:transparent!important;" +
          "cursor:pointer!important;pointer-events:auto!important;margin:0!important;padding:0!important;border:none!important;";
        if (!u.__lcarsHotBound) {
          u.__lcarsHotBound = true;
          u.addEventListener("pointerenter", function () { setDashHot(true); });
          u.addEventListener("pointerleave", function () { setDashHot(false); });
        }
        
        link.style.setProperty("position", "relative", "important");
        link.style.setProperty("z-index", "12080", "important");
      }
    } catch (e) {}
  }

  function ensureTopBtn() {
    if (!document.body) return null;
    var btn = document.getElementById(TOP_BTN_ID);
    if (!btn) {
      btn = document.createElement("button");
      btn.id = TOP_BTN_ID;
      btn.type = "button";
      btn.textContent = "Screen Top";
      btn.setAttribute("aria-label", "Scroll to top");
      btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
        var main = document.querySelector(
          ".dashboardDocument main, .dashboardDocument .content-primary, .mainAnimatedPage, .MuiBox-root"
        );
        if (main && typeof main.scrollTo === "function") {
          try { main.scrollTo({ top: 0, behavior: "smooth" }); } catch (e) {}
        }
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
      document.body.appendChild(btn);
    }
    return btn;
  }
  function syncTopBtn() {
    try {
      if (!document.querySelector(".dashboardDocument")) {
        var b = document.getElementById(TOP_BTN_ID);
        if (b) b.style.display = "none";
        return;
      }
      var btn = ensureTopBtn();
      if (!btn) return;
      var doc = document.documentElement;
      var scrollTop = window.pageYOffset || doc.scrollTop || document.body.scrollTop || 0;
      var overflow = doc.scrollHeight > window.innerHeight + 40;
      var nearBottom = scrollTop + window.innerHeight >= doc.scrollHeight - 80;
      btn.style.display = overflow && (nearBottom || scrollTop > 120) ? "block" : "none";
    } catch (e) {}
  }
  function bindDrawerScroll() {
    var paper = document.querySelector(
      ".dashboardDocument .MuiDrawer-paper, .MuiDrawer-paperAnchorDockedLeft"
    );
    if (!paper || paper.__lcarsScrollBound) return;
    paper.__lcarsScrollBound = true;
    paper.addEventListener("scroll", function () {
        if (paper.__lcarsScrollRAF) return;
        paper.__lcarsScrollRAF = requestAnimationFrame(function () {
          paper.__lcarsScrollRAF = 0;
          pinLcarsTopChrome();
          measureAdminDrawer();
          wrapContentPrimary();
                    syncTopBtn();
        });
      }, { passive: true });
  }

  
  function ensureNumberSpinners() {
    try {
      if (!document.querySelector(".dashboardDocument")) return;
      var inputs = document.querySelectorAll(
        '.dashboardDocument input[type="number"]:not([data-jf-lcars-spin])'
      );
      inputs.forEach(function (input) {
        var root = input.closest(".MuiInputBase-root, .MuiFilledInput-root, .MuiOutlinedInput-root");
        if (!root) return;
        if (root.querySelector(".jf-lcars-spin")) {
          input.setAttribute("data-jf-lcars-spin", "1");
          return;
        }
        root.style.position = "relative";
        var col = document.createElement("div");
        col.className = "jf-lcars-spin";
        col.setAttribute("aria-hidden", "true");
        function step(dir) {
          try {
            var stepVal = parseFloat(input.step);
            if (!stepVal || isNaN(stepVal)) stepVal = 1;
            var min = input.min !== "" ? parseFloat(input.min) : null;
            var max = input.max !== "" ? parseFloat(input.max) : null;
            var cur = parseFloat(input.value);
            if (isNaN(cur)) cur = 0;
            var next = cur + dir * stepVal;
            if (min !== null && !isNaN(min) && next < min) next = min;
            if (max !== null && !isNaN(max) && next > max) next = max;
            
            var dec = (String(stepVal).split(".")[1] || "").length;
            input.value = dec ? next.toFixed(dec) : String(next);
            input.dispatchEvent(new Event("input", { bubbles: true }));
            input.dispatchEvent(new Event("change", { bubbles: true }));
          } catch (e) {}
        }
        var up = document.createElement("button");
        up.type = "button";
        up.className = "jf-lcars-spin-btn jf-lcars-spin-up";
        up.tabIndex = -1;
        up.textContent = "▲";
        up.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          step(1);
        });
        var down = document.createElement("button");
        down.type = "button";
        down.className = "jf-lcars-spin-btn jf-lcars-spin-down";
        down.tabIndex = -1;
        down.textContent = "▼";
        down.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          step(-1);
        });
        col.appendChild(up);
        col.appendChild(down);
        root.appendChild(col);
        input.setAttribute("data-jf-lcars-spin", "1");
      });
    } catch (e) {}
  }

  function isDashboardView() {
    try {
      if (document.body && document.body.classList.contains("dashboardDocument")) return true;
      if (document.querySelector(".dashboardDocument")) return true;
      var h = (location.hash || "").toLowerCase();
      return h.indexOf("/dashboard") !== -1;
    } catch (e) {
      return false;
    }
  }

  function isLibraryView() {
    try {
      if (isDashboardView()) return false;
      if (document.documentElement.classList.contains("jf-lcars-video")) return false;
      var h = (location.hash || "").toLowerCase();
      if (!h || h === "#" || h === "#/") return true;
      if (h.indexOf("/home") !== -1) return true;
      if (h.indexOf("/details") !== -1) return true;
      if (h.indexOf("/list") !== -1) return true;
      if (h.indexOf("/search") !== -1) return true;
      if (h.indexOf("/metadata") !== -1) return true;
      
      if (h.indexOf("/dashboard") === -1 && h.indexOf("/login") === -1) return true;
      return false;
    } catch (e) {
      return false;
    }
  }

  function defaultLibIcon(label, href) {
    var l = (label || "").toLowerCase();
    var h = (href || "").toLowerCase();
    
    if (l.indexOf("fav") !== -1 || h.indexOf("tab=1") !== -1) {
      return '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"/></svg>';
    }
    if (l.indexOf("collection") !== -1 || h.indexOf("tab=2") !== -1 || h.indexOf("boxset") !== -1) {
      return '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/></svg>';
    }
    if (l === "home" || (l.indexOf("home") !== -1 && l.indexOf("fav") === -1) || h === "#/" || h === "#/home") {
      return '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
    }
    if (l.indexOf("movie") !== -1 || h.indexOf("/movies") !== -1 || h.indexOf("collectiontype=movies") !== -1) {
      return '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"/></svg>';
    }
    if (l.indexOf("show") !== -1 || l.indexOf("tv") !== -1 || h.indexOf("/tv") !== -1 || h.indexOf("collectiontype=tv") !== -1) {
      return '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>';
    }
    if (l.indexOf("collection") !== -1 || h.indexOf("boxset") !== -1) {
      return '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/></svg>';
    }
    return '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>';
  }

  function collectLibraryNavItems() {
    var items = [];
    var seen = {};
    function normKey(href) {
      var h = String(href || "").toLowerCase();
      
      if (h === "#/" || h === "#/home") return "#/home";
      if (h.indexOf("tab=1") !== -1) return "#/home?tab=1";
      if (h.indexOf("tab=2") !== -1) return "#/home?tab=2";
      return h.split("&")[0].split("?")[0];
    }
    function looksLikeServerId(label) {
      var t = String(label || "").replace(/\s+/g, "");
      
      if (t.length >= 8 && /^[a-f0-9]+$/i.test(t)) return true;
      if (/^\d+\.\d+/.test(t)) return true; 
      return false;
    }
    function add(href, label, iconHtml) {
      if (!href) return;
      var key = normKey(href);
      if (seen[key]) return;
      seen[key] = true;
      var lab = (label || "").replace(/\s+/g, " ").trim() || "ITEM";
      if (looksLikeServerId(lab)) return;
      
      var ic = defaultLibIcon(lab, href);
      items.push({ href: href, label: lab, iconHtml: ic });
    }
    function seedDefaults() {
      add("#/", "Home", "");
      add("#/home?tab=1", "Favorites", "");
      add("#/home?tab=2", "Collections", "");
      
      add("#/movies", "Movies", "");
      add("#/tv", "Shows", "");
    }
    var stacks = document.querySelectorAll(
      ".MuiAppBar-root .MuiToolbar-root .MuiStack-root, header .MuiToolbar-root .MuiStack-root, .MuiStack-root.jf-lcars-lib-source"
    );
    for (var s = 0; s < stacks.length; s++) {
      var cand = stacks[s];
      var anchors = cand.querySelectorAll(
        ":scope > a.MuiButton-root[href^='#/'], :scope > a.MuiIconButton-root[href^='#/'], :scope > a[href^='#/']"
      );
      if (anchors.length < 2) continue;
      var hrefs = [];
      for (var ai = 0; ai < anchors.length; ai++) {
        hrefs.push((anchors[ai].getAttribute("href") || "").toLowerCase());
      }
      var joined = hrefs.join(" ");
      if (
        joined.indexOf("home?tab=") === -1 &&
        joined.indexOf("collectiontype=") === -1 &&
        joined.indexOf("/movies") === -1 &&
        joined.indexOf("/tv") === -1 &&
        joined.indexOf("/boxsets") === -1
      ) {
        continue;
      }
      try {
        document.querySelectorAll(".jf-lcars-lib-source").forEach(function (el) {
          el.classList.remove("jf-lcars-lib-source");
        });
        cand.classList.add("jf-lcars-lib-source");
      } catch (e) {}
      for (var i = 0; i < anchors.length; i++) {
        var a = anchors[i];
        var href = a.getAttribute("href") || "";
        if (!href || href.toLowerCase().indexOf("/dashboard") !== -1) continue;
        var label = (a.textContent || a.getAttribute("aria-label") || a.getAttribute("title") || "")
          .replace(/\s+/g, " ")
          .trim();
        if (looksLikeServerId(label)) continue;
        if (i === 0 && (href === "#/" || href === "#/home" || href.indexOf("#/home?") === 0)) {
          if (!label || !/home|favorite|movie|show|collection/i.test(label)) label = "Home";
        }
        if (!label) {
          if (href.indexOf("tab=1") !== -1) label = "Favorites";
          else if (href.indexOf("/movies") !== -1) label = "Movies";
          else if (href.indexOf("/tv") !== -1) label = "Shows";
          else if (href.indexOf("boxset") !== -1 || href.indexOf("collection") !== -1) label = "Collections";
          else if (href === "#/" || href.indexOf("#/home") === 0) label = "Home";
          else continue;
        }
        add(href, label, "");
      }
      if (items.length >= 2) break;
    }
    
    function cacheHasHomeAndFav(list) {
      var hasH = false, hasF = false;
      for (var i = 0; i < list.length; i++) {
        var L = (list[i].label || "").toLowerCase();
        var H = (list[i].href || "").toLowerCase();
        if (L.indexOf("fav") !== -1 || H.indexOf("tab=1") !== -1) hasF = true;
        else if (L.indexOf("home") !== -1 || H === "#/" || H === "#/home") hasH = true;
      }
      return hasH && hasF;
    }
    if (items.length >= 3 && cacheHasHomeAndFav(items)) {
      __lcarsLibNavCache = items.slice();
    } else if (__lcarsLibNavCache && __lcarsLibNavCache.length >= 3 && cacheHasHomeAndFav(__lcarsLibNavCache)) {
      items = __lcarsLibNavCache.slice();
      seen = {};
      for (var c = 0; c < items.length; c++) seen[normKey(items[c].href)] = true;
    } else {
      __lcarsLibNavCache = null;
    }
    
    if (items.length < 3) {
      var prior = items.slice();
      items = [];
      seen = {};
      seedDefaults();
      
      for (var p = 0; p < prior.length; p++) {
        var pk = normKey(prior[p].href);
        for (var q = 0; q < items.length; q++) {
          if (normKey(items[q].href) === pk || items[q].label === prior[p].label) {
            items[q].href = prior[p].href;
            items[q].iconHtml = defaultLibIcon(items[q].label, items[q].href);
            break;
          }
        }
      }
    }
    
    for (var j = 0; j < items.length; j++) {
      items[j].iconHtml = defaultLibIcon(items[j].label, items[j].href);
    }
    
    function rank(it) {
      var l = (it.label || "").toLowerCase();
      var h = (it.href || "").toLowerCase();
      if (l.indexOf("fav") !== -1 || h.indexOf("tab=1") !== -1) return 1;
      if (l.indexOf("collection") !== -1 || h.indexOf("boxset") !== -1 || h.indexOf("tab=2") !== -1) return 2;
      if (l.indexOf("movie") !== -1 || h.indexOf("/movies") !== -1) return 3;
      if (l.indexOf("show") !== -1 || l.indexOf("tv") !== -1 || h.indexOf("/tv") !== -1) return 4;
      if (l === "home" || l.indexOf("home") !== -1 || h === "#/" || h === "#/home") return 0;
      return 50;
    }
    items.sort(function (a, b) { return rank(a) - rank(b); });
    
    var hasHome = false;
    for (var hi = 0; hi < items.length; hi++) {
      var hl = (items[hi].label || "").toLowerCase();
      var hh = (items[hi].href || "").toLowerCase();
      if (
        (hl === "home" || (hl.indexOf("home") !== -1 && hl.indexOf("fav") === -1)) &&
        hh.indexOf("tab=") === -1
      ) {
        hasHome = true;
        break;
      }
    }
    if (!hasHome) {
      items.unshift({
        href: "#/",
        label: "Home",
        iconHtml: defaultLibIcon("Home", "#/")
      });
    }
    return items;
  }

  function applyLibraryContentInset() {
    try {
      var isDash = !!(document.querySelector(".dashboardDocument") ||
        (document.body && document.body.classList.contains("dashboardDocument")) ||
        (location.hash || "").toLowerCase().indexOf("/dashboard") !== -1);
      var lib = document.documentElement.classList.contains("jf-lcars-library") &&
        !document.documentElement.classList.contains("jf-lcars-video") &&
        !isDash;
      var narrow = window.innerWidth < 900;
      var nav = document.getElementById("jf-lcars-library-nav");
      if (!lib) {
        if (document.body) {
          document.body.style.removeProperty("padding-left");
        }
        document.documentElement.style.removeProperty("--lcars-lib-content-inset");
        
        if (isDash) {
          document.documentElement.style.removeProperty("--lcars-sidebar");
        }
        return;
      }
      var navW = 240;
      if (!narrow && nav) {
        var rw = nav.offsetWidth || 0;
        if (rw > 80) navW = Math.round(rw);
      }
      if (narrow) navW = 56;
      var inset = navW + 20;
      document.documentElement.style.setProperty("--lcars-admin-drawer", navW + "px");
      document.documentElement.style.setProperty("--lcars-lib-content-inset", inset + "px");
      document.documentElement.style.setProperty("--lcars-sidebar", "0px");
      if (document.body) {
        document.body.style.setProperty("padding-left", inset + "px", "important");
        document.body.style.setProperty("box-sizing", "border-box", "important");
      }
      
      var shells = document.querySelectorAll(
        ".mainAnimatedPages, .backgroundContainer, .skinBody, #mainContent, main, main.MuiBox-root, .page, .mainAnimatedPage"
      );
      for (var i = 0; i < shells.length; i++) {
        shells[i].style.setProperty("margin-left", "0px", "important");
        shells[i].style.removeProperty("width");
        shells[i].style.removeProperty("max-width");
      }
    } catch (e) {}
  }

  function styleAlphaPicker() {
    try {
      var pickers = document.querySelectorAll(
        ".alphaPicker, .alphaPicker-fixed, .alphaPicker-fixed-right, .alphaPicker-vertical, .alphaPickerRow-vertical"
      );
      if (!pickers.length) return;
      var under600 = window.innerWidth < 600;
      var top =
        "calc(48px + var(--lcars-bar-h, 25px) + 28px + 6rem)";
      if (under600) {
        
        top = "calc(48px + var(--lcars-bar-h, 25px) + 28px + 6.5rem + 2.4rem)";
      }
      var letterSize = under600 ? "1.1rem" : "1.15rem";
      for (var i = 0; i < pickers.length; i++) {
        var p = pickers[i];
        p.style.setProperty("font-family", '"Antonio", "Segoe UI", system-ui, sans-serif', "important");
        p.style.setProperty("position", "fixed", "important");
        p.style.setProperty("top", top, "important");
        p.style.setProperty("bottom", "0.75rem", "important");
        p.style.setProperty("right", "0.2rem", "important");
        p.style.setProperty("left", "auto", "important");
        p.style.setProperty("z-index", "1200", "important");
        p.style.setProperty("display", "flex", "important");
        p.style.setProperty("flex-direction", "column", "important");
        p.style.setProperty("align-items", "center", "important");
        p.style.setProperty("background", "transparent", "important");
        p.style.setProperty("border", "none", "important");
        p.style.setProperty("padding", "0.15rem 0.1rem", "important");
        p.style.setProperty("margin", "0", "important");
        p.style.setProperty("max-width", "none", "important");
        p.style.setProperty("box-sizing", "border-box", "important");
        
        var clearPad = "calc(1.6rem + 5px + 0.25rem)";
        var content = document.querySelectorAll(
          ".itemsContainer, .padded-right, .MuiContainer-root, main"
        );
        for (var ci = 0; ci < content.length; ci++) {
          content[ci].style.setProperty("padding-right", clearPad, "important");
          content[ci].style.setProperty("box-sizing", "border-box", "important");
        }
        var btns = p.querySelectorAll(
          "button, a, .alphaPickerButton, .alphaPickerButton-vertical, .MuiToggleButton-root"
        );
        for (var b = 0; b < btns.length; b++) {
          var btn = btns[b];
          btn.style.setProperty("font-family", '"Antonio", "Segoe UI", system-ui, sans-serif', "important");
          btn.style.setProperty("font-weight", "700", "important");
          btn.style.setProperty("font-size", letterSize, "important");
          btn.style.setProperty("line-height", "1.15", "important");
          btn.style.setProperty("letter-spacing", "0.04em", "important");
          btn.style.setProperty("text-transform", "uppercase", "important");
          btn.style.setProperty("color", lcarsStarlight(), "important");
          btn.style.setProperty("background", "transparent", "important");
          btn.style.setProperty("border", "none", "important");
          btn.style.setProperty("padding", "0.06rem 0.1rem", "important");
          btn.style.setProperty("min-height", "0", "important");
          btn.style.setProperty("opacity", "0.9", "important");
        }
      }
    } catch (e) {}
  }

  function styleResetFiltersBtn() {
    try {
      var under600 = window.innerWidth < 600;
      var candidates = document.querySelectorAll(
        ".MuiToolbar-root .MuiChip-root + .MuiButton-root, " +
        ".MuiToolbar-root .MuiBox-root:has(> .MuiChip-root) > .MuiButton-root, " +
        ".MuiToolbar-root .MuiButton-root:has([data-testid='FilterAltOffIcon']), " +
        ".MuiToolbar-root .MuiButton-root:has(.MuiButton-startIcon svg[data-testid='FilterAltOffIcon'])"
      );
      
      if (!candidates.length) {
        var allBtns = document.querySelectorAll(".MuiToolbar-root .MuiButton-root");
        var found = [];
        for (var i = 0; i < allBtns.length; i++) {
          var t = (allBtns[i].textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
          if (t.indexOf("reset filter") !== -1 || t.indexOf("clear filter") !== -1) {
            found.push(allBtns[i]);
          }
        }
        candidates = found;
      }
      for (var c = 0; c < candidates.length; c++) {
        var el = candidates[c];
        el.classList.add("jf-lcars-reset-filters");
        if (!under600) {
          
          el.style.removeProperty("position");
          el.style.removeProperty("top");
          el.style.removeProperty("right");
          el.style.removeProperty("left");
          el.style.removeProperty("width");
          el.style.removeProperty("height");
          el.style.removeProperty("min-width");
          el.style.removeProperty("max-width");
          el.style.removeProperty("min-height");
          el.style.removeProperty("max-height");
          el.style.removeProperty("font-size");
          el.style.removeProperty("text-indent");
          el.style.removeProperty("border");
          el.style.removeProperty("background");
          el.style.removeProperty("background-color");
          continue;
        }
        el.style.setProperty("position", "fixed", "important");
        el.style.setProperty("top", "calc(48px + var(--lcars-bar-h, 25px) + 28px + 5.6rem)", "important");
        el.style.setProperty("right", "0.15rem", "important");
        el.style.setProperty("left", "auto", "important");
        el.style.setProperty("z-index", "1210", "important");
        el.style.setProperty("box-sizing", "border-box", "important");
        el.style.setProperty("width", "1.85rem", "important");
        el.style.setProperty("height", "1.85rem", "important");
        el.style.setProperty("min-width", "1.85rem", "important");
        el.style.setProperty("max-width", "1.85rem", "important");
        el.style.setProperty("min-height", "1.85rem", "important");
        el.style.setProperty("max-height", "1.85rem", "important");
        el.style.setProperty("padding", "0", "important");
        el.style.setProperty("margin", "0", "important");
        el.style.setProperty("border", "2px solid " + lcarsOrangeRed(), "important");
        el.style.setProperty("border-radius", "0", "important");
        el.style.setProperty("background", "#000", "important");
        el.style.setProperty("background-color", "#000", "important");
        el.style.setProperty("color", lcarsOrangeRed(), "important");
        el.style.setProperty("font-size", "0", "important");
        el.style.setProperty("line-height", "0", "important");
        el.style.setProperty("text-indent", "-9999px", "important");
        el.style.setProperty("overflow", "hidden", "important");
        el.style.setProperty("display", "inline-flex", "important");
        el.style.setProperty("align-items", "center", "important");
        el.style.setProperty("justify-content", "center", "important");
        el.style.setProperty("box-shadow", "none", "important");
        var iconWrap = el.querySelector(".MuiButton-startIcon");
        if (iconWrap) {
          iconWrap.style.setProperty("margin", "0", "important");
          iconWrap.style.setProperty("padding", "0", "important");
          iconWrap.style.setProperty("position", "absolute", "important");
          iconWrap.style.setProperty("inset", "0", "important");
          iconWrap.style.setProperty("width", "100%", "important");
          iconWrap.style.setProperty("height", "100%", "important");
          iconWrap.style.setProperty("display", "inline-flex", "important");
          iconWrap.style.setProperty("align-items", "center", "important");
          iconWrap.style.setProperty("justify-content", "center", "important");
          iconWrap.style.setProperty("text-indent", "0", "important");
        }
        var svgs = el.querySelectorAll(".MuiSvgIcon-root, svg");
        for (var s = 0; s < svgs.length; s++) {
          svgs[s].style.setProperty("color", lcarsOrangeRed(), "important");
          svgs[s].style.setProperty("fill", lcarsOrangeRed(), "important");
          svgs[s].style.setProperty("font-size", "1.15rem", "important");
          svgs[s].style.setProperty("width", "1.15rem", "important");
          svgs[s].style.setProperty("height", "1.15rem", "important");
          svgs[s].style.setProperty("margin", "0", "important");
        }
      }
    } catch (e) {}
  }

  
  function fixDashboardSideInset() {
    try {
      var under750 = window.innerWidth < 750;
      var nodes = document.querySelectorAll(
        ".dashboardDocument .content-primary, .dashboardDocument #pluginsPage .content-primary, .content-primary.MuiBox-root, #pluginsPage .content-primary"
      );
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        if (under750) {
          el.style.setProperty("padding-left", "17px", "important");
          el.style.setProperty("padding-right", "17px", "important");
          el.style.setProperty("box-sizing", "border-box", "important");
          el.style.setProperty("width", "100%", "important");
          el.style.setProperty("max-width", "100%", "important");
          el.style.setProperty("margin-left", "0", "important");
          el.style.setProperty("margin-right", "0", "important");
          el.style.setProperty("overflow-x", "hidden", "important");
        } else {
          el.style.removeProperty("padding-left");
          el.style.removeProperty("padding-right");
          el.style.removeProperty("box-sizing");
          el.style.removeProperty("width");
          el.style.removeProperty("max-width");
          el.style.removeProperty("margin-left");
          el.style.removeProperty("margin-right");
          el.style.removeProperty("overflow-x");
        }
      }
      if (under750) {
        document.querySelectorAll(".dashboardDocument .content-primary .MuiGrid-container, #pluginsPage .MuiGrid-container").forEach(function (g) {
          g.style.setProperty("width", "100%", "important");
          g.style.setProperty("max-width", "100%", "important");
          g.style.setProperty("margin-left", "0", "important");
          g.style.setProperty("margin-right", "0", "important");
        });
      }
    } catch (e) {
      console.warn("[JellyfinLCARS] fixDashboardSideInset", e);
    }
  }

  function alignSecondaryToolbar() {
    try {
      var narrowBar = window.innerWidth < 1200;
      var bars = document.querySelectorAll(".MuiToolbar-root");
      for (var i = 0; i < bars.length; i++) {
        var bar = bars[i];
        var hasViewMenu = !!bar.querySelector(
          '[aria-controls="library-view-menu"], [aria-controls*="view-menu"]'
        );
        if (!hasViewMenu) continue;
        bar.classList.add("jf-lcars-sec-toolbar");
        bar.style.setProperty("gap", "0.35rem", "important");
        bar.style.setProperty("padding-right", "1.25rem", "important");
        bar.style.setProperty("margin-right", "0.5rem", "important");
        
        bar.style.setProperty("align-items", narrowBar ? "start" : "center", "important");
        if (narrowBar) {
          
          var under600 = window.innerWidth < 600;
          bar.style.setProperty("display", "grid", "important");
          bar.style.setProperty("grid-template-rows", "auto auto", "important");
          bar.style.setProperty("grid-auto-flow", "column", "important");
          bar.style.setProperty("grid-auto-columns", "max-content", "important");
          if (under600) {
            bar.style.setProperty("width", "max-content", "important");
            bar.style.setProperty("max-width", "calc(100vw - 1rem)", "important");
          } else {
            bar.style.setProperty("width", "60%", "important");
            bar.style.setProperty("max-width", "60%", "important");
          }
          bar.style.setProperty("margin-left", "auto", "important");
          bar.style.setProperty("justify-content", under600 ? "start" : "end", "important");
          bar.style.removeProperty("flex-direction");
          
          var flat = bar.querySelectorAll(".MuiStack-root, .MuiBox-root, .MuiButtonGroup-root");
          for (var f = 0; f < flat.length; f++) {
            flat[f].style.setProperty("display", "contents", "important");
          }
          

          

          var orderMap = {
            "Play All": 3,
            "Filter": 5,
            "Shuffle": 6,
            "View settings": 7,
            "Sort": 8,
            "Next": 9,
            "Previous": 10
          };
          var allBtns = bar.querySelectorAll(".MuiButton-root, .MuiChip-root");
          var movieBtn = bar.querySelector('.MuiButton-root[aria-controls*="view-menu"]');
          if (movieBtn) movieBtn.style.setProperty("order", "1", "important");
          var chipEl = bar.querySelector(".MuiChip-root");
          if (chipEl) chipEl.style.setProperty("order", "4", "important"); 
          for (var oi = 0; oi < allBtns.length; oi++) {
            var el = allBtns[oi];
            var t = el.getAttribute("title") || "";
            if (orderMap[t] != null) {
              el.style.setProperty("order", String(orderMap[t]), "important");
              el.style.removeProperty("grid-column");
              el.style.removeProperty("grid-row");
            }
            
            el.style.removeProperty("transform");
          }
          if (movieBtn) movieBtn.style.removeProperty("transform");
          if (chipEl) {
            chipEl.style.removeProperty("transform");
            chipEl.style.setProperty("justify-self", "center", "important");
            chipEl.style.setProperty("align-self", "center", "important");
          }
          
          var spacer = bar.querySelector(".jf-lcars-sec-spacer");
          if (!spacer) {
            spacer = document.createElement("span");
            spacer.className = "jf-lcars-sec-spacer";
            spacer.setAttribute("aria-hidden", "true");
            bar.appendChild(spacer);
          }
          spacer.style.cssText =
            "display:block!important;width:0!important;min-width:0!important;height:0!important;" +
            "overflow:hidden!important;order:2!important;pointer-events:none!important;margin:0!important;padding:0!important;";
          
          bar.style.setProperty("gap", "0.35rem 0.55rem", "important");
          bar.style.setProperty("column-gap", "0.55rem", "important");
          bar.style.setProperty("row-gap", "0.35rem", "important");
          bar.style.removeProperty("transform");
          if (window.innerWidth < 600) {
            

            var under400 = window.innerWidth < 400;
            var colW = under400 ? "2.6rem" : "calc(2.6rem + 14px)";
            var gapXY = under400 ? "5px" : "0.35rem 0.4rem";
            var gapCol = under400 ? "5px" : "0.4rem";
            var gapRow = under400 ? "5px" : "0.35rem";
            bar.style.setProperty("display", "grid", "important");
            bar.style.setProperty("grid-template-columns", "repeat(5, " + colW + ")", "important");
            bar.style.setProperty("grid-template-rows", "auto auto", "important");
            bar.style.removeProperty("grid-auto-flow");
            bar.style.removeProperty("grid-auto-columns");
            bar.style.setProperty("width", "max-content", "important");
            bar.style.setProperty("max-width", "calc(100vw - 1rem)", "important");
            bar.style.setProperty("min-width", "0", "important");
            bar.style.setProperty("margin-left", "auto", "important");
            bar.style.setProperty("margin-right", "0.25rem", "important");
            bar.style.setProperty("justify-content", "start", "important");
            bar.style.setProperty("justify-items", under400 ? "start" : "center", "important");
            bar.style.setProperty("align-items", "start", "important");
            bar.style.setProperty("gap", gapXY, "important");
            bar.style.setProperty("column-gap", gapCol, "important");
            bar.style.setProperty("row-gap", gapRow, "important");
            bar.style.setProperty("padding-left", "0", "important");
            bar.style.setProperty("padding-right", "0", "important");
            bar.style.setProperty("position", "relative", "important");
            var movie600 = bar.querySelector('.MuiButton-root[aria-controls*="view-menu"]');
            var play600 = bar.querySelector('.MuiButton-root[title="Play All"]');
            var filter600 = bar.querySelector('.MuiButton-root[title="Filter"]');
            var shuffle600 = bar.querySelector('.MuiButton-root[title="Shuffle"]');
            var view600 = bar.querySelector('.MuiButton-root[title="View settings"]');
            var sort600 = bar.querySelector('.MuiButton-root[title="Sort"]');
            var next600 = bar.querySelector('.MuiButton-root[title="Next"]');
            var prev600 = bar.querySelector('.MuiButton-root[title="Previous"]');
            var chip600 = bar.querySelector(".MuiChip-root");
            var placeList = [
              [movie600, 1, 1],
              [play600, 2, 1],
              [filter600, 3, 1],
              [view600, 4, 1],
              [next600, 5, 1],
              [shuffle600, 3, 2],
              [sort600, 4, 2],
              [prev600, 5, 2]
            ];
            for (var pi = 0; pi < placeList.length; pi++) {
              var pe = placeList[pi][0];
              if (!pe) continue;
              pe.style.setProperty("grid-column", String(placeList[pi][1]), "important");
              pe.style.setProperty("grid-row", String(placeList[pi][2]), "important");
              pe.style.setProperty("margin", "0", "important");
              pe.style.removeProperty("order");
            }
            if (chip600) {
              
              chip600.style.setProperty("grid-column", "1 / 3", "important");
              chip600.style.setProperty("grid-row", "2", "important");
              chip600.style.setProperty("justify-self", "stretch", "important");
              chip600.style.setProperty("width", "100%", "important");
              chip600.style.setProperty("max-width", "100%", "important");
              chip600.style.setProperty("min-width", "0", "important");
              chip600.style.setProperty("margin", "0", "important");
              chip600.style.setProperty("box-sizing", "border-box", "important");
              chip600.style.removeProperty("order");
            }
            var sp600 = bar.querySelector(".jf-lcars-sec-spacer");
            if (sp600) {
              sp600.style.cssText =
                "display:none!important;width:0!important;height:0!important;order:0!important;";
            }
          } else {
            
            bar.style.removeProperty("grid-template-columns");
            bar.style.setProperty("grid-auto-flow", "column", "important");
            bar.style.setProperty("grid-auto-columns", "max-content", "important");
            var clearEls = bar.querySelectorAll(".MuiButton-root, .MuiChip-root, .jf-lcars-sec-spacer");
            for (var ce = 0; ce < clearEls.length; ce++) {
              clearEls[ce].style.removeProperty("grid-column");
              clearEls[ce].style.removeProperty("grid-row");
            }
          }
        } else {
          bar.style.setProperty("display", "flex", "important");
          bar.style.setProperty("flex-direction", "row", "important");
          bar.style.setProperty("justify-content", "flex-end", "important");
          bar.style.setProperty("align-items", "center", "important");
          bar.style.setProperty("width", "100%", "important");
          bar.style.removeProperty("max-width");
          bar.style.removeProperty("margin-left");
          bar.style.removeProperty("grid-template-rows");
          bar.style.removeProperty("grid-auto-flow");
          bar.style.removeProperty("grid-auto-columns");
          var flat2 = bar.querySelectorAll(".MuiStack-root, .MuiBox-root, .MuiButtonGroup-root");
          for (var f2 = 0; f2 < flat2.length; f2++) {
            flat2[f2].style.removeProperty("display");
          }
          var nextBtn2 = bar.querySelector('.MuiButton-root[title="Next"]');
          var prevBtn2 = bar.querySelector('.MuiButton-root[title="Previous"]');
          if (nextBtn2) {
            nextBtn2.style.removeProperty("grid-column");
            nextBtn2.style.removeProperty("grid-row");
            nextBtn2.style.removeProperty("order");
          }
          if (prevBtn2) {
            prevBtn2.style.removeProperty("grid-column");
            prevBtn2.style.removeProperty("grid-row");
            prevBtn2.style.removeProperty("order");
          }
          var sp3 = bar.querySelector(".jf-lcars-sec-spacer");
          if (sp3) sp3.remove();
          var allB = bar.querySelectorAll(".MuiButton-root, .MuiChip-root");
          for (var ab = 0; ab < allB.length; ab++) {
            allB[ab].style.removeProperty("order");
            allB[ab].style.removeProperty("transform");
          }
        }
        var kids = bar.children;
        for (var k = 0; k < kids.length; k++) {
          kids[k].style.setProperty("margin-left", "0", "important");
          kids[k].style.setProperty("margin-right", "0", "important");
          if (!narrowBar) kids[k].style.setProperty("flex-shrink", "0", "important");
        }
      }
      styleAlphaPicker();
      styleResetFiltersBtn();
    } catch (e) {}
  }

  function syncLibraryNav() {
    try {
      var lib = isLibraryView();
      document.documentElement.classList.toggle("jf-lcars-library", !!lib);
      if (document.body) document.body.classList.toggle("jf-lcars-library", !!lib);

      var nav = document.getElementById("jf-lcars-library-nav");
      if (!lib) {
        if (nav) nav.style.display = "none";
        var orphanHit = document.getElementById("jf-lcars-lib-arm-hit");
        if (orphanHit && orphanHit.parentElement === document.body) orphanHit.remove();
        var chrome = document.getElementById("jf-lcars-lib-elbow-chrome");
        if (chrome) chrome.style.display = "none";
        setLibHomeHot(false);
        
        applyLibraryContentInset();
        return;
      }
      
      if (false) {
        if (nav) nav.style.display = "none";
        applyLibraryContentInset();
        return;
      }

      if (!nav && document.body) {
        nav = document.createElement("nav");
        nav.id = "jf-lcars-library-nav";
        nav.setAttribute("aria-label", "Library");
        document.body.appendChild(nav);
      }
      if (!nav) return;

      var items = collectLibraryNavItems();
      var hash = location.hash || "#/home";
      var sig = items.map(function (it) { return (it.href || "") + "|" + (it.label || ""); }).join(";");
      sig += "@@" + hash.split("?")[0];
      if (nav.getAttribute("data-lcars-sig") === sig && nav.querySelector(".jf-lcars-lib-btn")) {
        
        var existing = nav.querySelectorAll(".jf-lcars-lib-btn");
        for (var ei = 0; ei < existing.length; ei++) {
          var eh = existing[ei].getAttribute("href");
          if (eh == null) eh = "";
          eh = "" + eh;
          var qPos = eh.indexOf("?");
          var pathOnly = qPos === -1 ? eh : eh.substring(0, qPos);
          var on = hash === eh || (pathOnly && hash.indexOf(pathOnly) === 0) ||
            (pathOnly === "#/" && (hash === "#" || hash === "#/" || hash.indexOf("#/home") === 0));
          existing[ei].classList.toggle("is-active", on);
        }
      try {
        var fill = nav.querySelector(".jf-lcars-lib-nav-fill");
        if (!fill) {
          fill = document.createElement("div");
          fill.className = "jf-lcars-lib-nav-fill";
          fill.setAttribute("aria-hidden", "true");
        }
        if (fill.parentElement !== nav) nav.appendChild(fill);
        else if (fill !== nav.lastElementChild) nav.appendChild(fill);
      } catch (eFill) {}
        applyLibraryContentInset();
        ensureLibArmHit();
        return;
      }
      nav.setAttribute("data-lcars-sig", sig);
      nav.innerHTML = "";
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        if (!it || typeof it !== "object") continue;
        var hrefStr = "";
        try { hrefStr = it.href == null ? "" : ("" + it.href); } catch (eH) { hrefStr = ""; }
        var a = document.createElement("a");
        a.className = "jf-lcars-lib-btn" + (i === 0 ? " jf-lcars-lib-home" : "");
        a.setAttribute("href", hrefStr || "#/");
        var qPos2 = hrefStr.indexOf("?");
        var pathOnly2 = qPos2 === -1 ? hrefStr : hrefStr.substring(0, qPos2);
        if (hash === hrefStr || (pathOnly2 && hash.indexOf(pathOnly2) === 0) || (pathOnly2 === "#/" && (hash === "#" || hash === "#/" || hash.indexOf("#/home") === 0))) {
          a.classList.add("is-active");
        }
        if (it.iconHtml) {
          var wrap = document.createElement("span");
          wrap.className = "jf-lcars-lib-icon";
          try { wrap.innerHTML = String(it.iconHtml); } catch (eIcon) {}
          while (wrap.firstChild) a.appendChild(wrap.firstChild);
        } else {
          var fallback = document.createElement("span");
          fallback.className = "jf-lcars-lib-icon-fallback";
          fallback.textContent = (it.label || "?").charAt(0).toUpperCase();
          fallback.setAttribute("aria-hidden", "true");
          a.appendChild(fallback);
        }
        var t = document.createElement("span");
        t.className = "jf-lcars-lib-label";
        t.textContent = it.label != null ? String(it.label) : "";
        a.appendChild(t);
        nav.appendChild(a);
      }
      try {
        var fill2 = nav.querySelector(".jf-lcars-lib-nav-fill");
        if (!fill2) {
          fill2 = document.createElement("div");
          fill2.className = "jf-lcars-lib-nav-fill";
          fill2.setAttribute("aria-hidden", "true");
        }
        nav.appendChild(fill2);
      } catch (eFill2) {}
      nav.style.display = "flex";
      applyLibraryContentInset();
      ensureLibArmHit();

      
      ["jf-lcars-dash-panel", "jf-lcars-dash-elbow", "jf-lcars-dash-bridge", "jf-lcars-elbow-chrome",
       "jf-lcars-frame", "jf-lcars-elbow", "jf-lcars-elbow-cut"].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
          el.style.setProperty("display", "none", "important");
          el.style.setProperty("visibility", "hidden", "important");
        }
      });
      
      var drawerW = 240;
      try {
        var dw = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--lcars-admin-drawer"), 10);
        if (dw > 80) drawerW = dw;
      } catch (e) {}
      var rowTop = 48;
      try {
        var hdr = document.querySelector(".MuiAppBar-root, .skinHeader");
        if (hdr) {
          var hr = hdr.getBoundingClientRect();
          if (hr.bottom > 20) rowTop = Math.round(hr.bottom);
        }
      } catch (e2) {}
      document.documentElement.style.setProperty("--lcars-lib-row-top", rowTop + "px");
      var narrowV = window.innerWidth < 900;
      var curveLeftV = narrowV ? 21 : Math.max(0, drawerW - 41);
      document.documentElement.style.setProperty("--lcars-lib-arm-left", curveLeftV + "px");
      document.documentElement.style.setProperty("--lcars-lib-curve-left", curveLeftV + "px");
      document.documentElement.style.setProperty("--lcars-admin-drawer", drawerW + "px");
      var runner = document.getElementById("jf-lcars-top-runner");
      if (runner) {
        runner.style.setProperty("left", (drawerW + 6) + "px", "important");
        runner.style.setProperty("top", rowTop + "px", "important");
        runner.style.setProperty("height", "30px", "important");
      }
    } catch (e) {
      console.warn("[JellyfinLCARS] syncLibraryNav", e);
    }
  }

  
  var LCARS_THEME_PALETTES = {
    "LCARS 25C": {
      primaryGray: "#6d748c", mediumDarkGray: "#52596e", lightGray: "#9ea5ba", ghostGray: "#d2d5df",
      orangeRed: "#e7442a", lightOrange: "#ff6753", paleOrange: "#ff977b",
      blue: "#37a6d1", brightBlue: "#67caf0", darkBlue: "#1c3c55"
    },
    "LCARS 25C (Blue Alert)": {
      primaryGray: "#6d748c", mediumDarkGray: "#52596e", lightGray: "#9ea5ba", ghostGray: "#d2d5df",
      orangeRed: "#5588ee", lightOrange: "#88ccff", paleOrange: "#99ccff",
      blue: "#2266ff", brightBlue: "#5588ff", darkBlue: "#1111ee"
    },
    "LCARS 25C (Red Alert)": {
      primaryGray: "#6d748c", mediumDarkGray: "#52596e", lightGray: "#9ea5ba", ghostGray: "#d2d5df",
      orangeRed: "#8b0000", lightOrange: "#bf1b1b", paleOrange: "#d66a60",
      blue: "#37a6d1", brightBlue: "#67caf0", darkBlue: "#1c3c55"
    },
    "LCARS 25C (Yellow Alert)": {
      primaryGray: "#6d748c", mediumDarkGray: "#52596e", lightGray: "#9ea5ba", ghostGray: "#d2d5df",
      orangeRed: "#ffcc33", lightOrange: "#ffaa00", paleOrange: "#ffcc66",
      blue: "#37a6d1", brightBlue: "#67caf0", darkBlue: "#1c3c55"
    },
    "LCARS Breen": {
      primaryGray: "#288855", mediumDarkGray: "#0f5616", lightGray: "#88de90", ghostGray: "#ddffdd",
      orangeRed: "#88de90", lightOrange: "#99dd66", paleOrange: "#33ff33",
      blue: "#229a6c", brightBlue: "#37bd76", darkBlue: "#0f5616"
    },
    "LCARS Cardassia": {
      primaryGray: "#288855", mediumDarkGray: "#4f1a23", lightGray: "#996699", ghostGray: "#cc99cc",
      orangeRed: "#88ffff", lightOrange: "#88ccff", paleOrange: "#99ccff",
      blue: "#88ffff", brightBlue: "#66ccff", darkBlue: "#344470"
    },
    "LCARS Classic": {
      primaryGray: "#ffe399", mediumDarkGray: "#c5b358", lightGray: "#f5deb3", ghostGray: "#ffeecc",
      orangeRed: "#ff2200", lightOrange: "#ff5555", paleOrange: "#ff8866",
      blue: "#5588ff", brightBlue: "#88ccff", darkBlue: "#2255ff"
    },
    "LCARS Default": {
      primaryGray: "#ffbbaa", mediumDarkGray: "#ffaa90", lightGray: "#ddbbff", ghostGray: "#cc88ff",
      orangeRed: "#dd4444", lightOrange: "#ff5555", paleOrange: "#ff8866",
      blue: "#4455ff", brightBlue: "#7788ff", darkBlue: "#1111ee"
    },
    "LCARS Kronos": {
      primaryGray: "#ff2200", mediumDarkGray: "#930a00", lightGray: "#ffaa00", ghostGray: "#ffcc33",
      orangeRed: "#ff7700", lightOrange: "#ff8833", paleOrange: "#ffaa44",
      blue: "#ffaa00", brightBlue: "#ffcc66", darkBlue: "#930a00"
    },
    "LCARS Picard [LCARdS Blue Accent]": {
      primaryGray: "#9ea5ba", mediumDarkGray: "#6d748c", lightGray: "#d2d5df", ghostGray: "#f3f4f7",
      orangeRed: "#37a6d1", lightOrange: "#67caf0", paleOrange: "#93e1ff",
      blue: "#37a6d1", brightBlue: "#67caf0", darkBlue: "#1c3c55"
    },
    "LCARS Picard [LCARdS Red Accent]": {
      primaryGray: "#9ea5ba", mediumDarkGray: "#6d748c", lightGray: "#d2d5df", ghostGray: "#f3f4f7",
      orangeRed: "#ff6753", lightOrange: "#ff8470", paleOrange: "#ff977b",
      blue: "#37a6d1", brightBlue: "#67caf0", darkBlue: "#1c3c55"
    },
    "LCARS Lower Decks I": {
      primaryGray: "#ffaa00", mediumDarkGray: "#91550b", lightGray: "#ffeecc", ghostGray: "#fff5c7",
      orangeRed: "#ff7700", lightOrange: "#ffaa44", paleOrange: "#ffcc66",
      blue: "#ff4400", brightBlue: "#ff8833", darkBlue: "#91550b"
    },
    "LCARS Lower Decks II": {
      primaryGray: "#ffaa00", mediumDarkGray: "#91550b", lightGray: "#ffeecc", ghostGray: "#fff5c7",
      orangeRed: "#ff7700", lightOrange: "#ffaa44", paleOrange: "#ffcc66",
      blue: "#ff4400", brightBlue: "#ff8833", darkBlue: "#91550b"
    },
    "LCARS Modern": {
      primaryGray: "#ddbbff", mediumDarkGray: "#9996BA", lightGray: "#aaaaff", ghostGray: "#ccdeff",
      orangeRed: "#ffaa00", lightOrange: "#ffcc33", paleOrange: "#ffcc66",
      blue: "#aaaaff", brightBlue: "#88ccff", darkBlue: "#4455ff"
    },
    "LCARS Navigation": {
      primaryGray: "#827A53", mediumDarkGray: "#B8A666", lightGray: "#CDB972", ghostGray: "#F7EE51",
      orangeRed: "#F7EE51", lightOrange: "#CDB972", paleOrange: "#ffe399",
      blue: "#6499FF", brightBlue: "#88ccff", darkBlue: "#2255ff"
    },
    "LCARS Nemesis Blue": {
      primaryGray: "#2255ff", mediumDarkGray: "#444a77", lightGray: "#ccaa88", ghostGray: "#ccdeff",
      orangeRed: "#ff7744", lightOrange: "#ff8866", paleOrange: "#ffaa90",
      blue: "#2255ff", brightBlue: "#5588ff", darkBlue: "#1111ee"
    },
    "LCARS Picard I": {
      primaryGray: "#9FA5BD", mediumDarkGray: "#656B83", lightGray: "#d2d5df", ghostGray: "#f3f4f7",
      orangeRed: "#E7432A", lightOrange: "#ff6753", paleOrange: "#ff977b",
      blue: "#37a6d1", brightBlue: "#67caf0", darkBlue: "#30374A"
    },
    "LCARS Picard II": {
      primaryGray: "#6efaf9", mediumDarkGray: "#21bece", lightGray: "#d6f6f1", ghostGray: "#e2c599",
      orangeRed: "#e1915c", lightOrange: "#E5960C", paleOrange: "#ffcc66",
      blue: "#21bece", brightBlue: "#6efaf9", darkBlue: "#012556"
    },
    "LCARS Red Alert": {
      primaryGray: "#cc2233", mediumDarkGray: "#9d361e", lightGray: "#dfdfdf", ghostGray: "#f7f7f7",
      orangeRed: "#ff0000", lightOrange: "#ee0000", paleOrange: "#d66a60",
      blue: "#bf1b1b", brightBlue: "#ff5555", darkBlue: "#360000"
    },
    "LCARS Romulus": {
      primaryGray: "#33cc99", mediumDarkGray: "#288855", lightGray: "#cc88ff", ghostGray: "#ddbbff",
      orangeRed: "#ff7700", lightOrange: "#ff8833", paleOrange: "#ffaa44",
      blue: "#33cc99", brightBlue: "#88de90", darkBlue: "#0f5616"
    },
    "LCARS TNG": {
      primaryGray: "#f5deb3", mediumDarkGray: "#d2b48c", lightGray: "#ffcc33", ghostGray: "#ffeecc",
      orangeRed: "#cc99cc", lightOrange: "#dd88dd", paleOrange: "#ffcc66",
      blue: "#cc99cc", brightBlue: "#ddbbff", darkBlue: "#444a77"
    },
    "LCARS TNGbuttons": {
      primaryGray: "#f5cd9f", mediumDarkGray: "#d2b48c", lightGray: "#ffcc33", ghostGray: "#efc861",
      orangeRed: "#cc99cc", lightOrange: "#dd88dd", paleOrange: "#ffcc66",
      blue: "#cc99cc", brightBlue: "#ddbbff", darkBlue: "#444a77"
    },
    "LCARS Transporter": {
      primaryGray: "#2C374B", mediumDarkGray: "#51596C", lightGray: "#6E748C", ghostGray: "#9ea5ba",
      orangeRed: "#FA6851", lightOrange: "#ff8470", paleOrange: "#ff977b",
      blue: "#2A7092", brightBlue: "#37a6d1", darkBlue: "#1c3c55"
    },
    "LCARS Zeldaar": {
      primaryGray: "#ddbbff", mediumDarkGray: "#774477", lightGray: "#ffcc99", ghostGray: "#ffbbaa",
      orangeRed: "#cc6666", lightOrange: "#ff8866", paleOrange: "#ffaa90",
      blue: "#7788ff", brightBlue: "#aaaaff", darkBlue: "#663366"
    },
    "LCARS Monochrome": {
      primaryGray: "#c6c6c6", mediumDarkGray: "#4a4a4a", lightGray: "#e2e2e2", ghostGray: "#f4f4f4",
      orangeRed: "#d0d0d0", lightOrange: "#eaeaea", paleOrange: "#b8b8b8",
      blue: "#a8a8a8", brightBlue: "#bcbcbc", darkBlue: "#3a3a3a"
    }
  };
  var LCARS_THEME_OPTIONS = Object.keys(LCARS_THEME_PALETTES);

  function applyLcarsTheme(name) {
    try {
      var p = LCARS_THEME_PALETTES[name];
      if (!p) return;
      var r = document.documentElement;
      var map = {
        "--primary-gray": p.primaryGray,
        "--medium-dark-gray": p.mediumDarkGray,
        "--light-gray": p.lightGray,
        "--ghost-gray": p.ghostGray,
        "--orange-red": p.orangeRed,
        "--light-orange-red": p.lightOrange,
        "--pale-orange-red": p.paleOrange,
        "--blue": p.blue,
        "--bright-blue": p.brightBlue,
        "--medium-dark-blue": p.darkBlue,
        "--lcars-primary": p.orangeRed,
        "--lcars-highlight": p.paleOrange,
        "--lcars-accent": p.blue,
        "--lcars-text": p.lightGray,
        "--lcars-text-secondary": p.ghostGray,
        "--theme-primary-color": p.orangeRed,
        "--primary-color": p.orangeRed,
        "--accent": p.orangeRed,
        "--lcars-alert": p.orangeRed,
        "--lcars-alert-soft": p.lightOrange,
        "--lcars-info": p.blue,
        "--lcars-info-bright": p.brightBlue,
        "--lcars-sublabels": p.darkBlue,
        "--lcars-confirm": p.darkBlue,
        "--lcars-system": p.primaryGray,
        "--drawer-background-color": p.primaryGray,
        "--lcars-sidebar-bar": p.primaryGray,
        "--lcars-header-bar": p.lightGray,
        "--seg-a": p.primaryGray,
        "--seg-b": p.ghostGray,
        "--seg-c": p.mediumDarkGray,
        "--seg-d": p.lightGray,
        "--seg-accent": p.orangeRed,
        "--lcars-dash-fill": p.primaryGray
      };
      for (var k in map) {
        if (map.hasOwnProperty(k)) r.style.setProperty(k, map[k]);
      }
      r.setAttribute("data-jf-lcars-theme", name);
      try { localStorage.setItem("jf-lcars-theme", name); } catch (e0) {}
      
      try {
        var fill = p.primaryGray;
        document.documentElement.style.setProperty("--lcars-dash-fill", fill);
        var panel = document.getElementById("jf-lcars-dash-panel");
        if (panel) {
          panel.style.setProperty("background", fill, "important");
          panel.style.setProperty("background-color", fill, "important");
        }
        var ids = ["jf-lcars-elbow-chrome", "jf-lcars-dash-elbow", "jf-lcars-dash-bridge"];
        for (var ii = 0; ii < ids.length; ii++) {
          var node = document.getElementById(ids[ii]);
          if (!node) continue;
          var paints = node.querySelectorAll(".jf-lcars-elbow-arm, .jf-lcars-elbow-curve, .jf-lcars-seg-a");
          for (var pi = 0; pi < paints.length; pi++) {
            paints[pi].style.setProperty("background", fill, "important");
            paints[pi].style.setProperty("background-color", fill, "important");
          }
        }
        var segs = document.querySelectorAll("#jf-lcars-top-runner .jf-lcars-seg-a, .jf-lcars-top-runner .jf-lcars-seg-a");
        for (var si = 0; si < segs.length; si++) {
          segs[si].style.setProperty("background", fill, "important");
          segs[si].style.setProperty("background-color", fill, "important");
        }
        
        var sq = document.getElementById("jf-lcars-home-square");
        if (sq) {
          var sqFill = sq.classList.contains("jf-lcars-home-hot") ? "var(--ghost-gray)" : "var(--orange-red)";
          sq.style.setProperty("background-color", sqFill, "important");
        } else {
          try { ensureHomeSquare(); } catch (eSq) {}
        }
      } catch (e1) {}
    } catch (e) {
      console.warn("[JellyfinLCARS] apply theme", e);
    }
  }
  try { window.__jfApplyLcarsTheme = applyLcarsTheme; } catch (eW) {}

  function lcarsCssVar(name, fallback) {
    try {
      var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      return v || fallback || "";
    } catch (e) {
      return fallback || "";
    }
  }
  function lcarsPrimaryGray() { return lcarsCssVar("--primary-gray", "#6d748c"); }
  function lcarsGhostGray() { return lcarsCssVar("--ghost-gray", "#d2d5df"); }
  function lcarsOrangeRed() { return lcarsCssVar("--orange-red", "#e7442a"); }
  function lcarsStarlight() { return lcarsCssVar("--starlight", "#f3f4f7"); }

  function ensureLcarsThemeSelect() {
    try {
      if (!window.__jfLcarsThemeDelegate) {
        window.__jfLcarsThemeDelegate = true;
        document.addEventListener("change", function jfLcarsThemeDelegate(ev) {
          try {
            var t = ev && ev.target;
            if (!t || !t.getAttribute || t.getAttribute("data-jf-lcars-theme-select") !== "1") return;
            var v = t.value || "";
            if (v && typeof window.__jfApplyLcarsTheme === "function") window.__jfApplyLcarsTheme(v);
          } catch (eD) {}
        }, true);
      }
      var form = document.getElementById("JavaScriptInjectorConfigForm");
      if (!form) return;
      var srcInputs = form.querySelectorAll("input.script-src-input");
      for (var i = 0; i < srcInputs.length; i++) {
        var src = srcInputs[i];
        var container = src.closest(".inputContainer");
        if (!container) continue;
        if (container.nextElementSibling && container.nextElementSibling.classList.contains("jf-lcars-theme-select-wrap")) {
          continue;
        }
        var wrap = document.createElement("div");
        wrap.className = "inputContainer jf-lcars-theme-select-wrap";
        var label = document.createElement("label");
        label.className = "inputLabel inputLabelUnfocused";
        label.setAttribute("for", "jf-lcars-theme-select-" + i);
        label.textContent = "LCARS Theme";
        var sel = document.createElement("select");
        sel.className = "emby-select-withcolor emby-select jf-lcars-theme-select";
        sel.id = "jf-lcars-theme-select-" + i;
        
        var opt0 = document.createElement("option");
        opt0.value = "";
        opt0.textContent = "- Select theme -";
        sel.appendChild(opt0);
        for (var t = 0; t < LCARS_THEME_OPTIONS.length; t++) {
          var o = document.createElement("option");
          o.value = LCARS_THEME_OPTIONS[t];
          o.textContent = LCARS_THEME_OPTIONS[t];
          sel.appendChild(o);
        }
        try {
          var saved = localStorage.getItem("jf-lcars-theme");
          if (saved && LCARS_THEME_PALETTES[saved]) sel.value = saved;
        } catch (eLS) {}
        sel.setAttribute("data-jf-lcars-theme-select", "1");
        var desc = document.createElement("div");
        desc.className = "fieldDescription";
        desc.textContent = "Choose an LCARS color theme (from ha-lcars theme definitions).";
        wrap.appendChild(label);
        wrap.appendChild(sel);
        wrap.appendChild(desc);
        if (container.nextSibling) container.parentNode.insertBefore(wrap, container.nextSibling);
        else container.parentNode.appendChild(wrap);
      }
    } catch (e) {
      console.warn("[JellyfinLCARS] theme select", e);
    }
  }

  function lcarsUserMenuTopPx() {
    try {
      var bottom = 0;
      
      var candidates = [
        document.getElementById("jf-lcars-top-runner"),
        document.querySelector(".jf-lcars-top-runner"),
        document.getElementById("jf-lcars-mobile-top-bar"),
        document.querySelector("#jf-lcars-mobile-top-bar"),
        document.querySelector(".MuiToolbar-root"),
        document.querySelector(".MuiAppBar-root"),
        document.querySelector(".skinHeader")
      ];
      for (var i = 0; i < candidates.length; i++) {
        var el = candidates[i];
        if (!el) continue;
        try {
          var cs = getComputedStyle(el);
          if (cs.display === "none" || cs.visibility === "hidden") continue;
          var r = el.getBoundingClientRect();
          if (r.height > 4 && r.bottom > bottom) bottom = r.bottom;
        } catch (eC) {}
      }
      
      try {
        var rt = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--lcars-lib-row-top"), 10);
        if (rt > bottom) bottom = rt;
      } catch (e1) {}
      try {
        var dt = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--lcars-dash-row-top"), 10);
        if (dt > bottom) bottom = dt;
      } catch (e2) {}
      try {
        var hh = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--lcars-header-height"), 10);
        var bh = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--lcars-bar-h"), 10) || 25;
        if (hh > 0 && (hh + bh) > bottom) bottom = hh + bh;
      } catch (e3) {}
      if (bottom < 48) bottom = 78;
      return Math.round(bottom);
    } catch (e) {
      return 78;
    }
  }

  function placeUserMenuPaper(paper) {
    try {
      if (!paper || !paper.classList) return;
      var list = paper.querySelector('.MuiMenu-list, [role="menu"]');
      if (!list) return;
      var isUser = !!(list.querySelector('a[href*="userprofile"], a[href*="mypreferences"], a[href="#/dashboard"], a[href*="quickconnect"], [data-testid="LogoutIcon"]'));
      if (!isUser) return;
      paper.classList.add("jf-lcars-user-menu");
      var apply = function () {
        try {
          var top = lcarsUserMenuTopPx();
          document.documentElement.style.setProperty("--lcars-user-menu-top", top + "px");
          paper.style.setProperty("top", top + "px", "important");
          paper.style.setProperty("position", "fixed", "important");
          paper.style.setProperty("max-height", "calc(100vh - " + top + "px - 12px)", "important");
          paper.style.setProperty("overflow-y", "auto", "important");
        } catch (eA) {}
      };
      apply();
      
      requestAnimationFrame(apply);
      setTimeout(apply, 30);
      setTimeout(apply, 100);
      setTimeout(apply, 250);
    } catch (e) {}
  }

  function ensureUserMenuPlacement() {
    try {
      document.querySelectorAll(".MuiPopover-paper.MuiMenu-paper, .MuiMenu-paper").forEach(placeUserMenuPaper);
      if (window.__jfLcarsUserMenuObs) return;
      window.__jfLcarsUserMenuObs = new MutationObserver(function (muts) {
        if (window.__jfLcarsUserMenuBusy) return;
        window.__jfLcarsUserMenuBusy = true;
        try {
          for (var i = 0; i < muts.length; i++) {
            var m = muts[i];
            if (!m.addedNodes) continue;
            for (var j = 0; j < m.addedNodes.length; j++) {
              var n = m.addedNodes[j];
              if (!n || n.nodeType !== 1) continue;
              if (n.classList && (n.classList.contains("MuiMenu-paper") || n.classList.contains("MuiPopover-paper"))) {
                placeUserMenuPaper(n);
              } else if (n.querySelector) {
                var p = n.querySelector(".MuiMenu-paper, .MuiPopover-paper.MuiMenu-paper");
                if (p) placeUserMenuPaper(p);
              }
            }
          }
        } finally {
          window.__jfLcarsUserMenuBusy = false;
        }
      });
      window.__jfLcarsUserMenuObs.observe(document.body, {
        childList: true,
        subtree: true
      });
    } catch (e) {}
  }

  function ensureFormDialogFooter() {
    try {
      document.querySelectorAll(".formDialog.opened, .dialog.formDialog.opened, .formDialog").forEach(function (dlg) {
        if (!dlg || !dlg.classList) return;
        var footer = dlg.querySelector(".formDialogFooter");
        if (!footer) return;
        if (footer.parentElement === dlg) return;
        dlg.appendChild(footer);
      });
      if (window.__jfLcarsFormFooterObs) return;
      window.__jfLcarsFormFooterObs = new MutationObserver(function (muts) {
        if (window.__jfLcarsFormFooterBusy) return;
        window.__jfLcarsFormFooterBusy = true;
        try {
          for (var i = 0; i < muts.length; i++) {
            var m = muts[i];
            if (!m.addedNodes) continue;
            for (var j = 0; j < m.addedNodes.length; j++) {
              var n = m.addedNodes[j];
              if (!n || n.nodeType !== 1) continue;
              var dlg = null;
              if (n.classList && n.classList.contains("formDialog")) dlg = n;
              else if (n.querySelector) dlg = n.querySelector(".formDialog");
              if (!dlg) continue;
              var footer = dlg.querySelector(".formDialogFooter");
              if (footer && footer.parentElement !== dlg) dlg.appendChild(footer);
            }
          }
        } finally {
          window.__jfLcarsFormFooterBusy = false;
        }
      });
      window.__jfLcarsFormFooterObs.observe(document.body, { childList: true, subtree: true });
    } catch (e) {}
  }


  function ensureDashNavFill() {
    try {
      var narrow = window.matchMedia && window.matchMedia("(max-width: 899px)").matches;
      document.querySelectorAll(".jf-lcars-dash-nav-fill").forEach(function (n) {
        if (narrow) n.remove();
      });
      if (narrow) return;
      if (!document.querySelector(".dashboardDocument")) {
        document.querySelectorAll(".jf-lcars-dash-nav-fill").forEach(function (n) { n.remove(); });
        return;
      }
      var paper = document.querySelector(".dashboardDocument .MuiDrawer-paper");
      if (!paper) return;
      var lists = paper.querySelectorAll(".MuiList-root");
      var host = lists && lists.length ? lists[lists.length - 1] : paper;
      var fill = host.querySelector(":scope > .jf-lcars-dash-nav-fill") || paper.querySelector(".jf-lcars-dash-nav-fill");
      if (!fill) {
        fill = document.createElement("div");
        fill.className = "jf-lcars-dash-nav-fill";
        fill.setAttribute("aria-hidden", "true");
      }
      host.appendChild(fill);
      try {
        host.style.setProperty("display", "flex", "important");
        host.style.setProperty("flex-direction", "column", "important");
        host.style.setProperty("min-height", "100%", "important");
      } catch (eS) {}
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
      wrapContentPrimary();
            syncChromeForViewport();
      ensureDashElbow();
      scheduleUserActionRail();
      ensureLcarsThemeSelect();
      try {
        var _th = localStorage.getItem("jf-lcars-theme");
        if (_th && LCARS_THEME_PALETTES[_th] && document.documentElement.getAttribute("data-jf-lcars-theme") !== _th) {
          applyLcarsTheme(_th);
        }
      } catch (eTh) {}
      syncVideoMode();
      bindDrawerScroll();
      ensureDashArmHit();
      ensureHomeSquare();
      ensureUserMenuPlacement();
      ensureFormDialogFooter();
      ensureDashNavFill();
      ensureLibArmHit();
      fixMobileDrawerLayout();
      ensureSubmenuBars();
      syncTopBtn();
      pruneEmptyTableColumns();
      ensureNumberSpinners();
      syncLibraryNav();
      alignSecondaryToolbar();
      fixDashboardSideInset();
      
      try {
        var narrowHide = window.matchMedia && window.matchMedia("(max-width: 1099px)").matches;
        if (typeof isLibraryView === "function" && isLibraryView() && !narrowHide) {
          document.querySelectorAll(".dashboardDocument .MuiDrawer-root.MuiDrawer-docked, .MuiDrawer-docked").forEach(function (d) {
            d.style.setProperty("display", "none", "important");
          });
        } else {
          
          document.querySelectorAll(".MuiDrawer-root, .MuiDrawer-docked, .MuiDrawer-paper").forEach(function (d) {
            if (d.style.display === "none") d.style.removeProperty("display");
          });
        }
      } catch (eHide) {}
    } catch (e) {
      console.warn("[JellyfinLCARS]", e);
    }
  }
  window.JellyfinLCARS = {
    version: "2.22.399-dash-fill-desktop",
    init: function () { run(); return this; },
    refresh: run,
    destroy: function () {
      var _rail = document.getElementById("jf-lcars-user-rail");
      if (_rail) _rail.remove();
      [STYLE_ID, FRAME_ID, RUNNER_ID, ELBOW_ID, CUT_ID, DASH_ELBOW_ID, DASH_CUT_ID, DASH_BRIDGE_ID, HEADER_MASK_ID, "jf-lcars-library-nav", "jf-lcars-lib-arm-hit", "jf-lcars-lib-elbow-chrome", "jf-lcars-lib-unified-hit"].forEach(function (id) {
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
  window.addEventListener("resize", function () {
    if (window.__jfLcarsResizeT) clearTimeout(window.__jfLcarsResizeT);
    window.__jfLcarsResizeT = setTimeout(function () {
      syncChromeForViewport();
      measureHeader();
      if (!isNarrowViewport()) {
        measureAdminDrawer();
        wrapContentPrimary();
                ensureFrame();
      }
      syncLibraryNav();
      alignSecondaryToolbar();
      fixDashboardSideInset();
      scheduleUserActionRail();
    }, 120);
  });
  try {
    var lcarsMq899 = window.matchMedia("(max-width: 899px)");
    var mqHandler = function () {
      syncChromeForViewport();
      setTimeout(function () {
        measureHeader();
        if (!isNarrowViewport()) {
          measureAdminDrawer();
          wrapContentPrimary();
                    ensureFrame();
        }
        syncLibraryNav();
        run();
      }, 50);
    };
    if (lcarsMq899.addEventListener) lcarsMq899.addEventListener("change", mqHandler);
    else if (lcarsMq899.addListener) lcarsMq899.addListener(mqHandler);
  } catch (e) {}
  setInterval(syncVideoMode, 500);
  window.addEventListener("scroll", function () {
    
    wrapContentPrimary();
    syncTopBtn();
  }, { passive: true });
  setInterval(function () { bindDrawerScroll(); syncTopBtn(); }, 600);
  setInterval(pruneEmptyTableColumns, 1200);
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
