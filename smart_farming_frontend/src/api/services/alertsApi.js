import { getClient } from '../client';

// PUBLIC_INTERFACE
export async function fetchAlerts() {
  /** Fetch alerts list from backend. */
  const res = await getClient().get('/alerts');
  return res.data;
}
