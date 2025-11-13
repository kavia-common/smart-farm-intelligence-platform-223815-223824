import axios from 'axios';
import { validatedConfig } from '../utils/env';
import { createLogger } from '../utils/logger';

const config = validatedConfig();
const logger = createLogger('api-client', config.logLevel);

const client = axios.create({
  baseURL: config.apiBase,
  timeout: 15000,
});

// Request interceptor to add defaults
client.interceptors.request.use((req) => {
  // Avoid logging sensitive headers
  logger.debug('HTTP request', { method: req.method, url: req.url });
  return req;
}, (error) => {
  logger.error('HTTP request error', { error: String(error) });
  return Promise.reject(error);
});

// Response interceptor
client.interceptors.response.use((res) => res, (error) => {
  logger.warn('HTTP response error', { status: error?.response?.status, url: error?.config?.url });
  return Promise.reject(error);
});

// PUBLIC_INTERFACE
export function getClient() {
  /** Return the configured Axios client instance. */
  return client;
}
