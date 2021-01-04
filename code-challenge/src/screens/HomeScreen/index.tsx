// Libs
import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import * as searchingActions from 'actions/searching';

// Components
import Form from 'components/commons/Form';
import CardImage from 'components/commons/CardImage';
import ErrorMessage from 'components/commons/ErrorMessage';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const searchingImage = useSelector((state: any) => state.searchingImage);
  const { searchingImgError, imageData } = searchingImage;

  const [searchValue, setSearchValue] = useState('');

  /**
   * handleChange: Function handle on change of searching input
   * @param e Event
   */
  const handleChange = (e) => {
    const { value } = e.target;

    if (value !== '') {
      setSearchValue(value.trim());
    }
  };

  /**
   * handleSubmit: Function handle submit searching form
   * @param e Event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      dispatch(searchingActions.getImageSearchingRequest(searchValue));
    }
  };

  /**
   * handleClickImage: Function handle click on a image
   */
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
      <section className={!imageData.length ? 'card-group__no-data' : 'card-group'}>
        {searchingImgError
          ? <ErrorMessage message={searchingImgError} />
          : !!imageData.length && imageData.map(({
            nasaId, description, title, imageUrl,
          }) => (
            <CardImage
              key={nasaId}
              altImage={nasaId}
              imageUrl={imageUrl}
              title={title}
              description={description}
              onHandleClick={handleClickImage}
            />
          ))}
        { !imageData.length && !searchingImgError && <p>There is no data </p>}
      </section>
    </div>
  );
};

export default memo(HomeScreen);
