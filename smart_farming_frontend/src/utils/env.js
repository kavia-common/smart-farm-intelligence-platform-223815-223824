 // PUBLIC_INTERFACE
export function getEnv(key, fallback = undefined) {
  /** Get an environment variable from process.env with an optional fallback. */
  const val = process.env[key];
  return typeof val === 'string' && val.length > 0 ? val : fallback;
}

// PUBLIC_INTERFACE
export function parseFeatureFlags() {
  /** Parse comma-separated feature flags from REACT_APP_FEATURE_FLAGS into a map. */
  const raw = getEnv('REACT_APP_FEATURE_FLAGS', '');
  const flags = {};
  raw.split(',').map(s => s.trim()).filter(Boolean).forEach(pair => {
    const [k, v] = pair.includes('=') ? pair.split('=') : [pair, 'true'];
    flags[k] = String(v).toLowerCase() === 'true';
  });
  return flags;
}

// PUBLIC_INTERFACE
export function validatedConfig() {
  /** Validate and returns app config with safe fallbacks. */
  const config = {
    apiBase: getEnv('REACT_APP_API_BASE', getEnv('REACT_APP_BACKEND_URL', 'http://localhost:8000')),
    wsUrl: getEnv('REACT_APP_WS_URL', 'ws://localhost:8000/ws'),
    nodeEnv: getEnv('REACT_APP_NODE_ENV', getEnv('NODE_ENV', 'development')),
    logLevel: getEnv('REACT_APP_LOG_LEVEL', 'info'),
    experiments: getEnv('REACT_APP_EXPERIMENTS_ENABLED', 'false') === 'true',
    featureFlags: parseFeatureFlags(),
  };
  // Non-fatal warnings
  if (!config.apiBase) {
    // eslint-disable-next-line no-console
    console.warn('[env] Missing REACT_APP_API_BASE, using default http://localhost:8000');
    config.apiBase = 'http://localhost:8000';
  }
  return config;
}
