import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';
import React from 'react';

describe('HelloWorld', () => {
  it('should renders a msg', () => {
    // arrange
    render(<HelloWorld msg='Sucsecfully created '></HelloWorld>);

    // act
    const title = screen.getByTestId('title');

    // assert
    expect(title).toHaveTextContent(/sucsecfully created/i);
  });
});
