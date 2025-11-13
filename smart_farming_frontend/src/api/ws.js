import { validatedConfig } from '../utils/env';
import { createLogger } from '../utils/logger';

const cfg = validatedConfig();
const logger = createLogger('ws-client', cfg.logLevel);

// PUBLIC_INTERFACE
export function createWsClient(path = '') {
  /** Create a WebSocket connection to REACT_APP_WS_URL (+ optional path) with basic auto-reconnect. */
  const base = cfg.wsUrl.replace(/\/+$/, '');
  const url = `${base}${path ? `/${path.replace(/^\/+/, '')}` : ''}`;

  let ws;
  let attempts = 0;
  const listeners = { message: [], open: [], close: [], error: [] };

  const connect = () => {
    ws = new WebSocket(url);
    ws.onopen = (e) => {
      attempts = 0;
      listeners.open.forEach(fn => fn(e));
    };
    ws.onmessage = (e) => {
      listeners.message.forEach(fn => fn(e));
    };
    ws.onerror = (e) => {
      listeners.error.forEach(fn => fn(e));
    };
    ws.onclose = () => {
      listeners.close.forEach(fn => fn());
      // Reconnect with capped backoff
      attempts += 1;
      const delay = Math.min(30000, 500 * attempts);
      logger.warn('WebSocket closed. Reconnecting...', { attempts, delay });
      setTimeout(connect, delay);
    };
  };

  connect();

  return {
    // PUBLIC_INTERFACE
    send(data) {
      if (ws && ws.readyState === WebSocket.OPEN) ws.send(data);
    },
    // PUBLIC_INTERFACE
    on(event, handler) {
      if (listeners[event]) listeners[event].push(handler);
    },
    // PUBLIC_INTERFACE
    close() {
      if (ws) ws.close();
    },
  };
}
