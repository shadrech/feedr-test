import React from 'react';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders', () => {
  const div = shallow(<App />);
  expect(div).toMatchSnapshot();
});
