import { getClient } from '../client';

// PUBLIC_INTERFACE
export async function fetchCrops() {
  /** Fetch crops list from backend. */
  const res = await getClient().get('/crops');
  return res.data;
}
