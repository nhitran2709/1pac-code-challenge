// Libs
import React, { memo } from 'react';
import isEqual from 'react-fast-compare';

type Props = {
  // eslint-disable-next-line no-unused-vars
  value: string,
  onHandleChange: (e: any) => void,
  onHandleSubmit: () => void,
}

const Form = ({ onHandleChange, value, onHandleSubmit }: Props) => (
  <div className="search">
    <form className="search__form" onSubmit={onHandleSubmit}>
      <input
        id="searchImage"
        className="search__input"
        type="text"
        value={value}
        placeholder="Enter the content to search"
        onChange={onHandleChange}
      />
    </form>
  </div>
);

export default memo(Form, isEqual);
