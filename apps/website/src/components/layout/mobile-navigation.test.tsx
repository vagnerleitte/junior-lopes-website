import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MobileNavigation } from './mobile-navigation';

describe('MobileNavigation', () => {
  it('consome o clique externo e fecha o menu', () => {
    render(<MobileNavigation />);

    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }));
    expect(
      screen.getByRole('navigation', { name: 'Navegação móvel' }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('mobile-menu-backdrop'));
    expect(
      screen.queryByRole('navigation', { name: 'Navegação móvel' }),
    ).not.toBeInTheDocument();
  });
});
