import { render, screen } from '@testing-library/react';
import App from '../Pages/App';
import React from 'react'
import { MemoryRouter } from 'react-router-dom';
import { MoneyPageProvider } from '../Context';
//import { Nav } from '../Componets/Nav';


test('renders component App', () => {
  render(
      <MemoryRouter>
        <MoneyPageProvider>
          <App />
        </MoneyPageProvider>
      </MemoryRouter>
  );
  const linkElement = screen.getByRole('navigation');
  expect(linkElement).toBeInTheDocument();
});
