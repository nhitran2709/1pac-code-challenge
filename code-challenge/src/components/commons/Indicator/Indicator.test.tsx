// Libs
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Components
import Indicator from 'components/commons/Indicator';

describe('Indicator component', () => {
  const wrapper = shallow(<Indicator />);

  // Test Snapshots
  it('should render correctly UI', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
