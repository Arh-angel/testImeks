import React from 'react';
import './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import SearchContainer from './containers/SearchContainer';

const App = () => {
  console.log('App');
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<SearchContainer />} />
      </Route>
    </Routes>
  );
};

export default App;
