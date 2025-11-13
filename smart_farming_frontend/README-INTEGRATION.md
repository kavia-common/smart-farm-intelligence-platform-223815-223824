# Smart Farming Frontend Integration Notes

- Routing: React Router v6 in `src/routes/Router.jsx`
- Layout: `src/components/layout/{SideNav,TopBar,MainLayout}.jsx`
- Theming: CSS variables in `src/theme/variables.css` and helper `src/theme/theme.js`
- State: Redux Toolkit in `src/state/`
- API: Axios client in `src/api/client.js` uses REACT_APP_API_BASE
- WS: `src/api/ws.js` uses REACT_APP_WS_URL with reconnect
- Feature Flags: REACT_APP_FEATURE_FLAGS, e.g., `mockCharts=true`
- Figma Assets: Copied to `public/assets/figmaimages/` and referenced from Home page as `/assets/figmaimages/<file>`
- Shared CSS: `assets/common.css` and `assets/home-189-2445.css` are stored under `public/assets/` and imported from `src/assets-common.css` using relative paths (`../public/assets/common.css`) to satisfy CRA build resolution.
- Tests: in `src/__tests__/`

Run locally:
- npm install
- npm start (http://localhost:3000)
- npm test (CI mode)

Environment variables (set in .env or process):
- REACT_APP_API_BASE
- REACT_APP_WS_URL
- REACT_APP_LOG_LEVEL (default: info)
- REACT_APP_FEATURE_FLAGS (comma-separated, e.g. `mockCharts=true`)

Notes:
- Home page uses assets from `/public/assets/figmaimages`; ensure files exist.
- Router mounts in `App.js` and default route renders Home.
