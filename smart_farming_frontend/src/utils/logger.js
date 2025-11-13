const LEVELS = ['error', 'warn', 'info', 'debug'];

function shouldLog(level, current) {
  return LEVELS.indexOf(level) <= LEVELS.indexOf(current);
}

// PUBLIC_INTERFACE
export function createLogger(service = 'frontend', level = 'info') {
  /** Create a structured console logger with level control. */
  const safe = (data) => {
    // Prevent accidental logging of tokens or secrets by redacting keys
    if (data && typeof data === 'object') {
      const clone = { ...data };
      ['token', 'password', 'secret', 'authorization'].forEach(k => {
        if (clone[k]) clone[k] = '[REDACTED]';
      });
      return clone;
    }
    return data;
  };

  return {
    // PUBLIC_INTERFACE
    error(message, meta = {}) {
      if (shouldLog('error', level)) console.error(JSON.stringify({ ts: new Date().toISOString(), level: 'error', service, message, meta: safe(meta) }));
    },
    // PUBLIC_INTERFACE
    warn(message, meta = {}) {
      if (shouldLog('warn', level)) console.warn(JSON.stringify({ ts: new Date().toISOString(), level: 'warn', service, message, meta: safe(meta) }));
    },
    // PUBLIC_INTERFACE
    info(message, meta = {}) {
      if (shouldLog('info', level)) console.info(JSON.stringify({ ts: new Date().toISOString(), level: 'info', service, message, meta: safe(meta) }));
    },
    // PUBLIC_INTERFACE
    debug(message, meta = {}) {
      if (shouldLog('debug', level)) console.debug(JSON.stringify({ ts: new Date().toISOString(), level: 'debug', service, message, meta: safe(meta) }));
    },
  };
}
