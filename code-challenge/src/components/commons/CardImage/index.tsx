// Libs
import React, { memo } from 'react';
import isEqual from 'react-fast-compare';

type Props = {
  altImage: string,
  imageUrl: string,
  title: string,
  description: string,
  onHandleClick: () => void;
}

const CardImage = ({
  altImage,
  imageUrl,
  title,
  description,
  onHandleClick,
}: Props) => (
  <div className="card">
    <div className="card__image-wrapper">
      <img
        alt={altImage}
        src={imageUrl}
        className="card__image"
      />
    </div>
    <div className="card__info-wrapper">
      <h2 className="card__title">
        <a href="/" className="link" onClick={onHandleClick}>{title}</a>
      </h2>
      <p className="card__description">{description}</p>
    </div>
  </div>
);

export default memo(CardImage, isEqual);
