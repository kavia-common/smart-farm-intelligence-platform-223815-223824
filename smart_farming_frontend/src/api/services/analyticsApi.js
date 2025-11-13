import { getClient } from '../client';

// PUBLIC_INTERFACE
export async function fetchAnalytics() {
  /** Fetch analytics summary/timeseries. */
  const res = await getClient().get('/analytics');
  return res.data;
}
