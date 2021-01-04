// Libs
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Components
import ErrorMessage from 'components/commons/ErrorMessage';

const props = {
  message: 'Error Content',
};

describe('ErrorMessage component', () => {
  const wrapper = shallow(<ErrorMessage {...props} />);

  // Test Snapshots
  it('should render correctly UI', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
