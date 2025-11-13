import { getClient } from '../api/client';

test('api client has baseURL configured', () => {
  const c = getClient();
  expect(c.defaults.baseURL).toBeTruthy();
});
