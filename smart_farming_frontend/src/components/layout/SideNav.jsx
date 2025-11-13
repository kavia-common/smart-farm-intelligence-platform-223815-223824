import { NavLink } from 'react-router-dom';
import './layout.css';

// PUBLIC_INTERFACE
export default function SideNav() {
  /** Side navigation for primary sections. */
  return (
    <nav className="sidenav" aria-label="Primary">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/devices">Devices</NavLink>
      <NavLink to="/crops">Crops</NavLink>
      <NavLink to="/irrigation">Irrigation</NavLink>
      <NavLink to="/alerts">Alerts</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
}
