import React from 'react';
import { TopMenu } from './components/TopMenu';
import { DragNDropWrapper } from './components/DragNDropWrapper';
import { ContextProvider } from './contexts/MenutItems';

import './App.css';

export default () => (
  <div className="wrapper">
    <ContextProvider>
      <TopMenu />
      <div className="container menu-builder">
        <DragNDropWrapper />
      </div>
    </ContextProvider>
  </div>
)
