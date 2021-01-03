// Libs
import React, { memo } from 'react';
import isEqual from 'react-fast-compare';

// Components

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => (
  <>
    {children}
  </>
);

export default memo(MainLayout, isEqual);
