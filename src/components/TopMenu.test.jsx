import React from 'react'
import { shallow, configure } from 'enzyme';
import * as mi from '../contexts/MenutItems';
import { TopMenu } from './TopMenu';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<TopMenu />', () => {

  it('renders component with correct stats', () => {
    jest.spyOn(mi, 'useContext').mockReturnValue({
      selectedItems: [{
        dietaries: ['gf', 'ab']
      }, {
        dietaries: ['gf', 'dc']
      }]
    })
    const component = shallow(<TopMenu />)
    expect(component.html()).toMatchSnapshot()
  })

})
