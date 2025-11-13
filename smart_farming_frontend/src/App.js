import './App.css';
import './theme/variables.css';
import './theme/colors.css';
import './public-path.css';
import AppRouter from './routes/Router';

/**
 * Root App component responsible for mounting the main Router.
 * Ensures styles and theme variables are loaded up-front.
 */
// PUBLIC_INTERFACE
function App() {
  /** App entry rendering the router and theme styles. */
  return <AppRouter />;
}

export default App;
