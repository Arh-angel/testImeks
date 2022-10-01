/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Bottom';
import style from './HeaderTop.module.scss';

const HeaderTop = () => {
  console.log('HeaderTop');

  return (
    <div className={style.header_top}>
      <div className={style.container}>
        <div className={style.contacts}>
          <a href="mailto:info@com-alfa.com">info@com-alfa.com</a>
          <a href="tel:+7(831)262-63-03">+7(831)262-63-03</a>
        </div>
        <div className={style.wrapper}>
          <Link className={style.link} to="/#">база знаний</Link>
          <Link className={style.link} to="/#">новости</Link>
          <Link className={style.link} to="/#">контакты</Link>
          <Link className={[style.link, style.login].join(' ')} to="/#">
            <Button
              clName={style.btn_login}
              title="Войти"
              handler={() => null}
              width={null}
              height={null}
              background={null}
              textColor={null}
              fontSize={null}
              fontWeight={null}
              margin={null}
              borderRadius={null}
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.586 11L7.05 8.464L8.464 7.05L13.414 12L8.464 16.95L7.05 15.536L9.586 13H3V11H9.586ZM11 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H11V19H19V5H11V3Z" fill="#333E48" />
              </svg>} />
          </Link>
          <Link className={[style.link, style.language].join('')} to="/#">RU</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
