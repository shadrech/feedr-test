import React from 'react';

export const UnselectedMenuItem = ({ menuItem, unselectItem, dragRef, draggableProps, remove }) => {
  return (
    <li ref={dragRef} {...draggableProps} className="item">
      <h2>{menuItem.name}</h2>
      <p>
        {menuItem.dietaries.map(diet => <span key={diet} className="dietary">{diet}</span>)}
      </p>
      <button className="remove-item" onClick={remove}>x</button>
    </li>
  )
}
