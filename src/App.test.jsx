import { fireEvent, render, screen, within } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App.jsx';

test('a visitor can discover the developer, inspect work, and reach freelance contact', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /Amine Zobaa/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Try FSM Navigator' })).toHaveAttribute('href', 'https://fsm-map.vercel.app');
  expect(screen.getByRole('link', { name: 'Try Sector Zero' })).toHaveAttribute('href', 'https://ctf-onboarding-nf87-azure.vercel.app');
  expect(screen.getByRole('link', { name: 'Discuss your project' })).toHaveAttribute('href', 'https://tunisiefreelance.tn/fr/profile/zobaa-a-b65c97');
});

test('every navigation link has one unambiguous section target', () => {
  render(<App />);
  for (const link of within(screen.getByRole('navigation')).getAllByRole('link')) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      expect(document.querySelectorAll(href)).toHaveLength(1);
    }
  }
});

test('choosing a destination immediately closes an open navigation menu', () => {
  const scroll = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  render(<App />);
  const toggle = screen.getByRole('button', { name: 'Toggle navigation' });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Projects', exact: true }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(scroll).toHaveBeenCalled();
  scroll.mockRestore();
});
