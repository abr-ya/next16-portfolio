import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from './hero';

describe('Hero', () => {
  it('renders hero section with correct id', () => {
    const { container } = render(<Hero />);

    const section = container.querySelector('#hero');
    expect(section).toBeInTheDocument();
    expect(section?.tagName).toBe('SECTION');
  });

  it('displays hero text', () => {
    render(<Hero />);

    expect(screen.getByText('Hero')).toBeInTheDocument();
  });

  it('has full screen height', () => {
    const { container } = render(<Hero />);

    const section = container.querySelector('#hero');
    expect(section).toHaveClass('h-screen');
  });
});
