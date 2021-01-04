// Libs
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Components
import MainLayout from 'layouts'

describe('MainLayout component', () => {
  const wrapper = shallow(<MainLayout><p>test</p></MainLayout>);

  // Test Snapshots
  it('should render correctly UI', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
