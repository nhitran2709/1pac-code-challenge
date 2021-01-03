// Libs
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Components
import HomeScreen from 'screens/HomeScreen';

describe('HomeScreen component', () => {
  const wrapper = shallow(<HomeScreen />);

  // Test Snapshots
  it('should render correctly UI', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
