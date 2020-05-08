import React from 'react';

export const MenuItem = ({ menuItem, dragRef, draggableProps }) => {
  return (
    <li ref={dragRef} {...draggableProps} className="item">
      <h2>{menuItem.name}</h2>
      <p>
        {menuItem.dietaries.map(diet => <span key={diet} className="dietary">{diet}</span>)}
      </p>
    </li>
  )
}
