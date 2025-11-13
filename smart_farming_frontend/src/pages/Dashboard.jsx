import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import MapWidget from '../components/charts/MapWidget';

// PUBLIC_INTERFACE
export default function Dashboard() {
  /** Dashboard overview with charts and map widgets. */
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div className="card" style={{ padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Yield Over Time</h2>
        <LineChart />
      </div>
      <div className="card" style={{ padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Moisture by Zone</h2>
        <BarChart />
      </div>
      <MapWidget />
    </div>
  );
}
