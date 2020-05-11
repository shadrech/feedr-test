context('Menu Item Drag n Drop', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('moves an item to the Menu preview when dragged into the preview area', () => {
    cy.get('.unselected').first()
      .trigger('mousedown', { button: 0, force: true })
      .trigger('mousemove', { button: 0, force: true, pageX: 1600, clientX: 1000 })
      .trigger('mousemove', { button: 0, force: true, clientY: 1600, clientX: 1000 })
      .trigger('mouseup', { force: true });
  })

})
