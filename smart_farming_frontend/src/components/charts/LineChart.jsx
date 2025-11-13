import { LineChart as RLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { isEnabled } from '../../utils/featureFlags';

// PUBLIC_INTERFACE
export default function LineChart({ data, height = 240 }) {
  /** Lightweight LineChart using Recharts. Uses mock data if feature flag 'mockCharts' is enabled and no data provided. */
  const mock = [
    { t: 'Jan', value: 20 },
    { t: 'Feb', value: 30 },
    { t: 'Mar', value: 25 },
    { t: 'Apr', value: 40 },
    { t: 'May', value: 35 },
  ];
  const used = (data && data.length) ? data : (isEnabled('mockCharts') ? mock : []);
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <RLineChart data={used} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="t" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={2} dot={false} />
        </RLineChart>
      </ResponsiveContainer>
    </div>
  );
}
