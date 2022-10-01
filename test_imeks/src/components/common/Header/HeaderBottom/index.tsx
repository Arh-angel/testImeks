/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';
import style from './HeaderBottom.module.scss';
import logo from '../../../../assets/images/logo.png';
import SearchInput from '../../Form/Input/SearchInput';
import Bottom from '../../Bottom';

const HeaderBottom = () => {
  const [textForSearchInput, setTextForSearchInput] = useState('');

  const handlerSearchInput = (value:string) => {
    setTextForSearchInput(value);
  };

  return (
    <div className={style.header_bottom}>
      <div className={style.container}>
        <div className={style.wrapper_top}>
          <div className={style.logo}>
            <Link to="/#"><img src={logo} alt="logo" /></Link>
          </div>
          <SearchInput
            id="searchProduct"
            placeholder={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>

          }
            type="text"
            value={textForSearchInput}
            handlerSearchValue={handlerSearchInput} />
          <div className={style.forUser}>
            <Bottom
              clName={null}
              title={null}
              handler={() => null}
              width={null}
              height={null}
              background={null}
              textColor={null}
              fontSize={null}
              fontWeight={null}
              margin={null}
              borderRadius={null}
              icon={<svg width="483" height="430" viewBox="0 0 483 430" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M438.122 38.012C426.23 26.1204 412.112 16.6887 396.574 10.256C381.035 3.82322 364.382 0.515484 347.564 0.521799C330.747 0.528114 314.096 3.84836 298.562 10.2928C283.029 16.7372 268.918 26.1795 257.035 38.08L241.524 53.78L226.142 38.114L226.042 38.014C214.156 26.128 200.045 16.6995 184.516 10.2668C168.986 3.83416 152.341 0.523313 135.532 0.523313C118.723 0.523313 102.078 3.83416 86.5483 10.2668C71.0186 16.6995 56.9079 26.128 45.022 38.014L38.112 44.924C14.1074 68.9286 0.621826 101.486 0.621826 135.433C0.621826 169.381 14.1074 201.938 38.112 225.943L220.485 408.314L241.08 429.892L241.571 429.4L242.104 429.933L261.4 409.574L445.032 225.94C469.001 201.916 482.461 169.366 482.461 135.43C482.461 101.495 469.001 68.9447 445.032 44.921L438.122 38.012ZM422.4 203.313L241.571 384.146L60.738 203.313C42.7347 185.31 32.6205 160.892 32.6205 135.431C32.6205 109.97 42.7347 85.5525 60.738 67.549L67.649 60.639C85.6436 42.6445 110.047 32.531 135.495 32.5215C160.943 32.5119 185.354 42.607 203.362 60.588L241.455 99.375L279.729 60.639C288.643 51.7245 299.226 44.6531 310.874 39.8286C322.521 35.0041 335.005 32.521 347.612 32.521C360.218 32.521 372.702 35.0041 384.349 39.8286C395.997 44.6531 406.58 51.7245 415.494 60.639L422.404 67.548C440.38 85.5663 450.475 109.979 450.475 135.431C450.474 160.883 440.377 185.296 422.4 203.313V203.313Z" fill="#333E48" />
              </svg>} />
            <Bottom
              clName={null}
              title={null}
              handler={() => null}
              width={null}
              height={null}
              background={null}
              textColor={null}
              fontSize={null}
              fontWeight={null}
              margin={null}
              borderRadius={null}
              icon={<svg width="1020" height="994" viewBox="0 0 1020 994" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1013.66 269C1010.73 264.831 1006.83 261.429 1002.31 259.079C997.783 256.73 992.76 255.501 987.662 255.498H308.526L257.118 78.218C236.958 8.41003 189.053 0.874023 169.405 0.874023H32.333C14.764 0.874023 0.556 15.098 0.556 32.65C0.556 50.202 14.78 64.425 32.332 64.425H169.388C173.724 64.425 186.956 64.425 195.981 95.609L372.829 745.545C376.669 759.257 389.165 768.728 403.42 768.728H835.388C848.797 768.728 860.764 760.328 865.293 747.704L1017.55 298.024C1021.05 288.28 1019.6 277.432 1013.66 269H1013.66ZM813.026 705.194H427.539L326.387 319.066H942.483L813.026 705.194ZM750.003 833.13C705.811 833.13 670.003 868.938 670.003 913.13C670.003 957.322 705.811 993.13 750.003 993.13C794.195 993.13 830.003 957.322 830.003 913.13C830.003 868.938 794.195 833.13 750.003 833.13ZM462.003 833.13C417.811 833.13 382.003 868.938 382.003 913.13C382.003 957.322 417.811 993.13 462.003 993.13C506.195 993.13 542.003 957.322 542.003 913.13C542.003 868.938 506.195 833.13 462.003 833.13Z" fill="#333E48" />
              </svg>} />
            <Bottom
              clName={null}
              title={null}
              handler={() => null}
              width={null}
              height={null}
              background={null}
              textColor={null}
              fontSize={null}
              fontWeight={null}
              margin={null}
              borderRadius={null}
              icon={<svg width="754" height="796" viewBox="0 0 754 796" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M723.5 649.6C704.636 604.917 677.261 564.33 642.9 530.1C608.643 495.771 568.063 468.4 523.4 449.5C523 449.3 522.6 449.2 522.2 449C584.5 404 625 330.7 625 248C625 111 514 0 377 0C240 0 129 111 129 248C129 330.7 169.5 404 231.8 449.1C231.4 449.3 231 449.4 230.6 449.6C185.8 468.5 145.6 495.6 111.1 530.2C76.7709 564.457 49.4004 605.037 30.5 649.7C11.9322 693.425 1.91819 740.305 0.999998 787.8C0.973308 788.867 1.16051 789.929 1.55058 790.923C1.94065 791.917 2.5257 792.822 3.27124 793.587C4.01678 794.351 4.90774 794.958 5.89161 795.372C6.87549 795.787 7.93238 796 9 796H69C73.4 796 76.9 792.5 77 788.2C79 711 110 638.7 164.8 583.9C221.5 527.2 296.8 496 377 496C457.2 496 532.5 527.2 589.2 583.9C644 638.7 675 711 677 788.2C677.1 792.6 680.6 796 685 796H745C746.068 796 747.125 795.787 748.108 795.372C749.092 794.958 749.983 794.351 750.729 793.587C751.474 792.822 752.059 791.917 752.449 790.923C752.839 789.929 753.027 788.867 753 787.8C752 740 742.1 693.5 723.5 649.6V649.6ZM377 420C331.1 420 287.9 402.1 255.4 369.6C222.9 337.1 205 293.9 205 248C205 202.1 222.9 158.9 255.4 126.4C287.9 93.9 331.1 76 377 76C422.9 76 466.1 93.9 498.6 126.4C531.1 158.9 549 202.1 549 248C549 293.9 531.1 337.1 498.6 369.6C466.1 402.1 422.9 420 377 420Z" fill="#333E48" />
              </svg>} />
          </div>
        </div>
        <div className={style.wrapper_bottom}>
          <NavLink to="/" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Интернет магазин</NavLink>
          <NavLink to="/products" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Продукция</NavLink>
          <NavLink to="/services" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Услуги</NavLink>
          <NavLink to="/catalogs" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Онлайн-каталоги</NavLink>
          <NavLink to="/information" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Информация</NavLink>
          <NavLink to="/contacts" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Контакты</NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
