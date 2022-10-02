import React from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

import style from './Header.module.scss';

const Header = () => {
  console.log('Header');

  return (
    <div className={style.header}>
      {/* <HeaderTop /> */}
      <HeaderBottom />
    </div>
  );
};

export default Header;
