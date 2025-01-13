import React from 'react';
import { render, screen } from '@testing-library/react';
import Render from './Render';

describe('Rendering', () => {
  it('should render all the elements correctly', () => {
    render(<Render />);
    expect(screen.getByText('aa')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /React Testing Library/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Click1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Click2' })).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('@React')).toBeInTheDocument();
  });

  it('logs to the console', () => {
    render(<Render />);
    // screen.debug();
    // screen.debug(screen.getAllByRole('heading'))
    expect(screen.getByRole('heading')).toBeTruthy();
  });
});
