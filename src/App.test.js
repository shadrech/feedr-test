import React from 'react';
import '@testing-library/dom';
import { mockGetComputedSpacing } from 'react-beautiful-dnd-test-utils';
import App from './App';
import { renderApp } from './test.helpers';

describe('<App />', () => {

  beforeAll(() => {
    mockGetComputedSpacing()
  })

  it('renders', () => {
    const { asFragment } = renderApp(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
})
