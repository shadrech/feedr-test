import React from 'react'
import { shallow, configure } from 'enzyme';
import { MenuItemSelected } from './MenuItemSelected';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<MenuItemSelected />', () => {

  it('renders a menu item correctly', () => {
    const item = {
      id: 1,
      name: 'Test item',
      dietaries: ['gf', 'df'],
    }
    const removeFn = jest.fn()
    const component = shallow(<MenuItemSelected menuItem={item} draggableProps={{}} remove={removeFn} />)
    expect(component.html()).toMatchSnapshot()
  })

  it('renders a menu item correctly', () => {
    const item = {
      id: 1,
      name: 'Test item',
      dietaries: ['gf', 'df'],
    }
    const removeFn = jest.fn()
    const component = shallow(<MenuItemSelected menuItem={item} draggableProps={{}} remove={removeFn} />)
    component.find('.remove-item').simulate('click')
    expect(removeFn).toHaveBeenCalledTimes(1)
  })

})
