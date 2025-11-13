import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAppStore } from '../state/store';
import AppRouter from '../routes/Router';

test('routing renders Home at root', () => {
  render(
    <Provider store={createAppStore()}>
      <MemoryRouter initialEntries={['/']}>
        <AppRouter />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByLabelText(/Home Screen/i)).toBeInTheDocument();
});
