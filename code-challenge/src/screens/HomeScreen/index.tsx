// Libs
import React, { memo, useState } from 'react';

// Components
import Form from 'components/commons/Form';

const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: any) => {
    const { value } = e.target;
    console.log('value', value);
    if (value !== '') {
      setSearchValue(value.trim());
    }
  };

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <Form
      onHandleChange={handleChange}
      value={searchValue}
      onHandleSubmit={handleSubmit}
    />
  );
};

export default memo(HomeScreen);
