import React from 'react';
import { TopMenu } from './components/TopMenu';
import { DragNDropWrapper } from './components/DragNDropWrapper';
import { MenuItemsContextProvider } from './contexts/MenutItems';

import './App.css';

export default () => (
  <div className="wrapper">
    <MenuItemsContextProvider>
      <TopMenu />
      <div className="container menu-builder">
        <DragNDropWrapper />
      </div>
    </MenuItemsContextProvider>
  </div>
)
