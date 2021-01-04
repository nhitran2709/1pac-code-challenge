// Libs
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Components
import Form from 'components/commons/Form';

const props = {
  value: 'search value',
  onHandleChange: jest.fn(),
  onHandleSubmit: jest.fn(),
};

describe('Form component', () => {
  const wrapper = shallow(<Form {...props} />);

  // Test Snapshots
  it('should render correctly UI', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // Test behaviors
  it('should test behavior when user submit form', () => {
    wrapper.find('form').simulate('submit');
    expect(props.onHandleSubmit).toBeCalled();
  });
});
