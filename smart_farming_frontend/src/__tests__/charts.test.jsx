import { render } from '@testing-library/react';
import LineChart from '../components/charts/LineChart';

test('LineChart renders with empty data gracefully', () => {
  const { container } = render(<LineChart data={[]} />);
  expect(container).toBeTruthy();
});
