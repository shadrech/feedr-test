import React from 'react'
import { shallow, configure } from 'enzyme';
import { MenuItem } from './MenuItem';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<MenuItem />', () => {

  it('renders a menu item correctly', () => {
    const item = {
      id: 1,
      name: 'Test item',
      dietaries: ['gf', 'df'],
    }
    const component = shallow(<MenuItem menuItem={item} draggableProps={{}} />)
    expect(component.html()).toMatchSnapshot()
  })

})
