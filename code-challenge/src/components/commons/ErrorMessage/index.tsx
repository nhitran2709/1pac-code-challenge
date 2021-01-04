// Libs
import React, { memo } from 'react';
import isEqual from 'react-fast-compare';

type Props = {
  message: string,
}
const ErrorMessage = ({ message }: Props) => (
  <p className="error">{message}</p>
);

export default memo(ErrorMessage, isEqual);
