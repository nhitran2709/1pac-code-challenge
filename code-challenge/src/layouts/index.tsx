// Libs
import React, { memo } from 'react';
import isEqual from 'react-fast-compare';

// Components
import Footer from 'components/commons/Footer';

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => (
  <>
    {children}
    <Footer />
  </>
);

export default memo(MainLayout, isEqual);
