// Libs
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Components
import Screens from 'screens';

describe('Screens component', () => {
  const wrapper = shallow(<Screens />);

  // Test Snapshots
  it('should render correctly UI', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
