import React from 'react'
import { mount, configure } from 'enzyme';
import { DragNDropWrapper } from './DragNDropWrapper';
import { ContextProvider } from '../contexts/MenutItems';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let oldWarn = console.warn
let oldErr = console.error

describe('<DragNDropWrapper />', () => {

  beforeAll(() => {
    console.warn = jest.fn()
    console.error = jest.fn()
  })

  afterAll(() => {
    console.warn = oldWarn
    console.error = oldErr
  })

  it('renders correct number of items', () => {
    const component = mount(
      <ContextProvider>
        <DragNDropWrapper />
      </ContextProvider>
    )
    expect(component.find('.unselected').length).toBe(20)
  })

  it('correctly moves an item along columns when onDragEnd is called', () => {
    const component = mount(
      <ContextProvider>
        <DragNDropWrapper />
      </ContextProvider>
    )
    const onDragEndFunc = component.find('DragDropContext').prop('onDragEnd');
    onDragEndFunc({
      source: {
        droppableId: 'unselected',
        index: 0
      },
      destination: {
        droppableId: 'selected',
        index: 0
      }
    });
    component.update()
    expect(component.find('.unselected').length).toBe(19)
    expect(component.find('.selected').length).toBe(1)
    expect(component.find('.selected h2').text()).toBe('Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens')
  })
})
