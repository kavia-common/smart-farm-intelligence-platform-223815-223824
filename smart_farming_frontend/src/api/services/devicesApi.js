import { getClient } from '../client';

// PUBLIC_INTERFACE
export async function fetchDevices() {
  /** Fetch devices list from backend. */
  const res = await getClient().get('/devices');
  return res.data;
}
