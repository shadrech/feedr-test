import React from 'react';
import defaultData from './items';

export default function useMenuItems() {
  const [unselectedItems, setUnselectedItems] = React.useState(defaultData);
  const [selectedItems, setSelectedItems] = React.useState([]);

  const selectItem = (sourceIndex, destIndex) => {
    const unselected = [...unselectedItems];
    const item = unselected.splice(sourceIndex, 1);
    const selected = [...selectedItems.slice(0, destIndex), item[0], ...selectedItems.slice(destIndex)];
    setUnselectedItems(unselected);
    setSelectedItems(selected);
  }

  const unselectItem = (sourceIndex, destIndex) => {
    const selected = [...selectedItems];
    const item = selected.splice(sourceIndex, 1);
    const unselected = [...unselectedItems.slice(0, destIndex), item[0], ...unselectedItems.slice(destIndex)];
    setUnselectedItems(unselected);
    setSelectedItems(selected);
  }

  const removeSelectedItem = index => {
    const selected = [...selectedItems];
    const item = selected.splice(index, 1);
    const unselected = [...unselectedItems, item[0]];
    setUnselectedItems(unselected);
    setSelectedItems(selected);
  }

  return { unselectedItems, selectedItems, selectItem, unselectItem, removeSelectedItem };
}
