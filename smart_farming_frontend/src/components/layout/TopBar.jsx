import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../state/slices/uiSlice';
import { applyTheme } from '../../theme/theme';
import './layout.css';

// PUBLIC_INTERFACE
export default function TopBar() {
  /** Persistent top bar with title and theme switch. */
  const theme = useSelector(s => s.ui.theme);
  const dispatch = useDispatch();

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    dispatch(setTheme(next));
  };

  return (
    <header className="topbar" role="banner" aria-label="Top navigation">
      <h1 className="app-title">Smart Farming AI</h1>
      <button className="theme-btn" onClick={toggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
}
