import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './MobileNav.module.scss';

const MobileNav = () => {
  console.log('mobole nav');

  return (
    <div className={style.wrapper_navLink}>
      <NavLink to="/user" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Личный кабинет</NavLink>
      <NavLink to="/basket" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Корзина</NavLink>
      <NavLink to="/favorites" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Избранное</NavLink>
      <NavLink to="/store" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Интернет магазин</NavLink>
      <NavLink to="/products" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Продукция</NavLink>
      <NavLink to="/services" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Услуги</NavLink>
      <NavLink to="/catalogs" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Онлайн-каталоги</NavLink>
      <NavLink to="/information" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Информация</NavLink>
      <NavLink to="/contacts" className={({ isActive }) => `${isActive ? style.active : ''}`} onClick={() => null}>Контакты</NavLink>
    </div>
  );
};

export default MobileNav;
