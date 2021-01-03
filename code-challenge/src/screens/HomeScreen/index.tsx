// Libs
import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Constants
import {
  IMAGE_DESCRIPTION,
  IMAGE_TITLE, IMAGE_URL,
} from 'constants/dataMock';

// Actions
import * as searchingActions from 'actions/searching';

// Components
import Form from 'components/commons/Form';
import CardImage from 'components/commons/CardImage';
import ErrorMessage from 'components/commons/ErrorMessage';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const searchingImage = useSelector((state: any) => state.searchingImage);
  const { isSearchingImgLoading, searchingImgError, imageData } = searchingImage;
  console.log('searchingImage', searchingImage);
  console.log('isSearchingImgLoading', isSearchingImgLoading);
  console.log('imageData', imageData);

  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;

    if (value !== '') {
      setSearchValue(value.trim());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      dispatch(searchingActions.getImageSearchingRequest(searchValue));
    }
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
        {searchingImgError
          ? <ErrorMessage message={searchingImgError} />
          : (
            <CardImage
              altImage="image"
              imageUrl={IMAGE_URL}
              title={IMAGE_TITLE}
              description={IMAGE_DESCRIPTION}
              onHandleClick={handleClickImage}
            />
          )}
      </section>
    </div>
  );
};

export default memo(HomeScreen);
