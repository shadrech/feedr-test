import React from 'react';
import useMenuItems from './hook';

const Context = React.createContext()

export const useMenuItemsContext = () => {
  const context = React.useContext(Context)

  if (!context) throw new Error('Cannot use useMenuItemContext when not within a MenuItemContextProvider');

  return context;
}

export function MenuItemsContextProvider(props) {
  const value = useMenuItems()

  return <Context.Provider {...props} value={value} />
}
