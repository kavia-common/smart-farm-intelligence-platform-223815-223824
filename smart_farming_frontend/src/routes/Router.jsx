import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Devices from '../pages/Devices';
import Crops from '../pages/Crops';
import Irrigation from '../pages/Irrigation';
import Alerts from '../pages/Alerts';
import Settings from '../pages/Settings';

// PUBLIC_INTERFACE
export default function AppRouter() {
  /** The main application router using React Router v6. */
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/irrigation" element={<Irrigation />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
