import React from 'react'
import * as menuItems from '../contexts/MenutItems'

export const TopMenu = () => {
  const { selectedItems } = menuItems.useContext()
  const dietaries = selectedItems.reduce((prev, curr) => {
    curr.dietaries.forEach(diet => {
      prev[diet] = !!prev[diet] ? ++prev[diet] : 1
    })
    return prev;
  }, {})

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{selectedItems.length} items</span>
          </div>
          <div className="col-6 menu-summary-right">
            {dietaries && Object.keys(dietaries).map(diet => (
              <span key={diet}>
                {dietaries[diet]}x <span className="dietary">{diet}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
