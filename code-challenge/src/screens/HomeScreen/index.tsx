// Libs
import React, { memo, useState } from 'react';

// Constants
import {
  IMAGE_DESCRIPTION,
  IMAGE_TITLE, IMAGE_URL,
} from 'constants/dataMock';

// Components
import Form from 'components/commons/Form';
import CardImage from 'components/commons/CardImage';

const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    console.log('value', value);
    if (value !== '') {
      setSearchValue(value.trim());
    }
  };

  const handleSubmit = () => {
    console.log('submit');
  };

  const handleClickImage = () => {
    console.log('click');
  };

  return (
    <div>
      <section className="search-group">
        <Form
          onHandleChange={handleChange}
          value={searchValue}
          onHandleSubmit={handleSubmit}
        />
      </section>
      <section className="card-group">
        <CardImage
          altImage="image"
          imageUrl={IMAGE_URL}
          title={IMAGE_TITLE}
          description={IMAGE_DESCRIPTION}
          onHandleClick={handleClickImage}
        />
      </section>
    </div>
  );
};

export default memo(HomeScreen);
