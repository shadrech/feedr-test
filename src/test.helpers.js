import React from 'react'
import { render } from '@testing-library/react';
import { mockGetComputedSpacing, mockDndElSpacing, makeDnd, DND_DRAGGABLE_DATA_ATTR, DND_DIRECTION_DOWN, DND_DIRECTION_UP } from 'react-beautiful-dnd-test-utils';

export const renderApp = (App) => {
  const rtlUtils = render(App);

  mockDndElSpacing(rtlUtils);

  const makeGetDragEl = text => () =>
    rtlUtils.getByText(text).closest(DND_DRAGGABLE_DATA_ATTR);

  return { makeGetDragEl, ...rtlUtils };
};
