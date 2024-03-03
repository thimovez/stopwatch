import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Stopwatch from './components/Stopwatch';

test('renders learn react link', () => {
  render(<App />);
});

test('render swopwatch component in the document', () => {
  render(<Stopwatch/>);
});