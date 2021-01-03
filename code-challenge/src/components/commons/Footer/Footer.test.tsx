// Libs
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Components
import Footer from 'components/commons/Footer';

describe('Footer component', () => {
  const wrapper = shallow(<Footer />);

  // Test Snapshots
  it('should render correctly UI', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
