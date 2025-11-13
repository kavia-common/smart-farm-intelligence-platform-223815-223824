import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';
import TopBar from './TopBar';
import './layout.css';

// PUBLIC_INTERFACE
export default function MainLayout() {
  /** Main app layout with SideNav and TopBar. */
  return (
    <div className="layout">
      <SideNav />
      <div className="content">
        <TopBar />
        <main className="main" role="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
