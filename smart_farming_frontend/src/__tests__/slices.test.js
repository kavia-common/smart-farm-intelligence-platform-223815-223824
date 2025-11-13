import devicesReducer, { setDevices } from '../state/slices/devicesSlice';
import cropsReducer, { setCrops } from '../state/slices/cropsSlice';
import analyticsReducer, { setSummary } from '../state/slices/analyticsSlice';
import uiReducer, { setTheme, toggleSidebar } from '../state/slices/uiSlice';

test('devices reducer sets list', () => {
  const state = devicesReducer(undefined, setDevices([{ id: 1 }]));
  expect(state.list.length).toBe(1);
});

test('crops reducer sets items', () => {
  const state = cropsReducer(undefined, setCrops([{ id: 'c1' }]));
  expect(state.items.length).toBe(1);
});

test('analytics reducer sets summary', () => {
  const state = analyticsReducer(undefined, setSummary({ yield: 10 }));
  expect(state.summary.yield).toBe(10);
});

test('ui reducer toggles theme and sidebar', () => {
  let state = uiReducer(undefined, setTheme('dark'));
  expect(state.theme).toBe('dark');
  state = uiReducer(state, toggleSidebar());
  expect(state.sidebarOpen).toBe(false);
});
