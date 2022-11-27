import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ClickTarget, PageWithClickTargets } from './PageWithClickTargets';

const mockClickTargets: ClickTarget[] = [
  { height: 100, width: 100, onClick: jest.fn() },
];

describe('PageWithClickTargets', () => {
  beforeEach(() => jest.resetAllMocks());
  it('click is called', () => {
    render(<PageWithClickTargets clickTargets={mockClickTargets} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockClickTargets[0].onClick).toHaveBeenCalled();
  });
});
