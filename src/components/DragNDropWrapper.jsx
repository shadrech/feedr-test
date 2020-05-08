import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { MenuItem } from './MenuItem';
import { UnselectedMenuItem } from './UnselectedMenuItem';
import { useMenuItemsContext } from '../contexts/MenutItems';

export const DragNDropWrapper = () => {
  const { unselectedItems, selectedItems, selectItem, unselectItem, removeSelectedItem } = useMenuItemsContext()

  const onDragEnd = result => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (source.droppableId === 'unselected' && destination.droppableId === 'selected') {
      selectItem(source.index, destination.index)
    }

    if (source.droppableId === 'selected' && destination.droppableId === 'unselected') {
      unselectItem(source.index, destination.index)
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="row">
        <div className="col-4">
          <Droppable droppableId="unselected">
            {(provided, snapshot) => (
              <ul className="item-picker" ref={provided.innerRef}>
                {unselectedItems.map((item, index) => (
                  <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                    {(provided, snapshot) => (
                      <MenuItem menuItem={item} dragRef={provided.innerRef} draggableProps={{ ...provided.draggableProps, ...provided.dragHandleProps }} />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
        <div className="col-8">
          <h2>Menu preview</h2>
          <Droppable droppableId="selected">
            {(provided, snapshot) => (
              <ul className="menu-preview" ref={provided.innerRef}>
                {selectedItems.map((item, index) => (
                  <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                    {(provided, snapshot) => (
                      <UnselectedMenuItem menuItem={item} dragRef={provided.innerRef} draggableProps={{ ...provided.draggableProps, ...provided.dragHandleProps }} remove={() => removeSelectedItem(index)} />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  )
}
