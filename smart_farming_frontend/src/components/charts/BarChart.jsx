import { BarChart as RBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { isEnabled } from '../../utils/featureFlags';

// PUBLIC_INTERFACE
export default function BarChart({ data, height = 240 }) {
  /** Lightweight BarChart using Recharts. Uses mock data when 'mockCharts' flag is enabled. */
  const mock = [
    { label: 'Zone A', v: 12 },
    { label: 'Zone B', v: 18 },
    { label: 'Zone C', v: 9 },
    { label: 'Zone D', v: 22 },
  ];
  const used = (data && data.length) ? data : (isEnabled('mockCharts') ? mock : []);
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <RBarChart data={used} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="v" fill="#F59E0B" />
        </RBarChart>
      </ResponsiveContainer>
    </div>
  );
}
