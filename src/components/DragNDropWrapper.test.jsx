import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import { mockGetComputedSpacing, mockDndElSpacing, makeDnd, DND_DRAGGABLE_DATA_ATTR, DND_DIRECTION_DOWN, DND_DIRECTION_UP } from 'react-beautiful-dnd-test-utils';
import { DragNDropWrapper } from './DragNDropWrapper';
import { MenuItemsContextProvider } from '../contexts/MenutItems';
import { renderApp } from '../test.helpers';

describe('<DragNDropWrapper />', () => {

  beforeEach(() => {
    jest.clearAllMocks()
    mockGetComputedSpacing()
  })

  it('renders correct number of "selected" and "unselected" items', () => {
    const { asFragment } = renderApp(
      <MenuItemsContextProvider>
        <DragNDropWrapper />
      </MenuItemsContextProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

})
