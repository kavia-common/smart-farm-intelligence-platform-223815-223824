# Smart Farming Frontend Integration Notes

- Routing: React Router v6 in `src/routes/Router.jsx`
- Layout: `src/components/layout/{SideNav,TopBar,MainLayout}.jsx`
- Theming: CSS variables in `src/theme/variables.css` and helper `src/theme/theme.js`
- State: Redux Toolkit in `src/state/`
- API: Axios client in `src/api/client.js` uses REACT_APP_API_BASE
- WS: `src/api/ws.js` uses REACT_APP_WS_URL with reconnect
- Feature Flags: REACT_APP_FEATURE_FLAGS, e.g., `mockCharts=true`
- Figma Assets: Copied to `public/assets/figmaimages/` and referenced from Home page
- Tests: in `src/__tests__/`

Configure environment variables using `.env` or system env; see `.env.example`.
