import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

const PageWrapper = () => {
  console.log('PageWrapper');

  return (
    <div>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
