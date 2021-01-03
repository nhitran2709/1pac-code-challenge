// Libs
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Constants
import { IMAGE_URL } from 'constants/dataMock';

// Components
import CardImage from 'components/commons/CardImage';

const props = {
  altImage: 'Image nasa',
  imageUrl: IMAGE_URL,
  title: 'Image nasa',
  description: 'Description',
  onHandleClick: jest.fn(),
};

describe('CardImage component', () => {
  const wrapper = shallow(<CardImage {...props} />);

  // Test Snapshots
  it('should render correctly UI', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // Test behaviors
  it('should test behavior when user submit form', () => {
    wrapper.find('a').simulate('click');
    expect(props.onHandleClick).toBeCalled();
  });
});
