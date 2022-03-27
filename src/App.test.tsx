import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { clear } from 'console';

const vo = {
  a:5,
  b: 2
}

const vo2 = {
  a:10,
  b: 14
}

afterEach(clear);

describe('renders learn react link', () => {
  

  test("1", ()=> {
    render(<App {...vo} />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    const b1 = screen.getByTestId('custom-element');
    fireEvent.click(b1);
    expect(b1).toBeInTheDocument();
  });

  test("2", ()=> {
    render(<App {...vo2} />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    const b1 = screen.getByTestId('custom-element');
    fireEvent.click(b1);
    expect(b1).toBeInTheDocument();
  })

});
