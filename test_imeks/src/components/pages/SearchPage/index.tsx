/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import usePagination from '../../../hooks/usePagination';
import Button from '../../common/Bottom';

import style from './SearchPage.module.scss';

const SearchPage = () => {
  const [foundProducts, setFoundProducts] = useState([]);
  const [firstPagePag, setFirstPagePag] = useState(false);
  const [lastPagePag, setLastPagePag] = useState(false);
  const baseUrl = 'https://rickandmortyapi.com/api/character/?page=1';

  useEffect(() => {
    const apiUrl = baseUrl;
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setFoundProducts(allPersons.results);
    });
  }, [baseUrl]);

  const items = useMemo(() => foundProducts, [foundProducts]);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 8,
    count: items.length,
  });

  useEffect(() => {
    if (page === 1) {
      setFirstPagePag(true);
    } else {
      setFirstPagePag(false);
    }

    if (page === totalPages || items.length === 0) {
      setLastPagePag(true);
    } else {
      setLastPagePag(false);
    }
  }, [page]);

  return (
    <div className={style.container}>
      <div className={style.numberProducts}>
        <p>
          Найдено:
          {' '}
          {items.length}
        </p>
      </div>
      {items.length > 0 ? <div className={style.wrapperList}>
        <ul className={style.productList}>
          {items.reverse().slice(firstContentIndex, lastContentIndex).map((item:any) => (
            <li className={style.productItem} key={item.id}>
              <Link to={`/searchResults/${item.id}`} className={style.productTitle}>{item.name}</Link>
              <img className={style.imgProduct} src={item.image} alt="foto" />
              <p className={style.productDescription}>
                {item.species}
              </p>
              <p className={style.productDate}>{item.created}</p>
            </li>
          ))}
        </ul>
        <div className={style.pagination}>
          <Button
            clName={null}
            title={null}
            handler={prevPage}
            width={null}
            height={null}
            background="transparent"
            textColor={null}
            fontSize={null}
            fontWeight={null}
            margin={null}
            borderRadius={null}
            icon={<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00016 0L7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.000156403 6L6.00016 0Z" fill={firstPagePag ? 'rgba(29, 29, 29, .6)' : '#1D1D1D'} />
                  </svg>} />
          {gaps.before ? <Button
            clName={null}
            title="..."
            handler={() => null}
            width={null}
            height={null}
            background="transparent"
            textColor="#000000"
            fontSize="14px"
            fontWeight={null}
            margin={null}
            borderRadius="3px"
            icon={null} /> : null}
          {/* @ts-ignore */}
          {gaps.paginationGroup.map((el) => <Button
            clName={`${style.page} ${page === el ? style.active : ''}`}
            key={el}
            title={`${el}`}
            handler={() => setPage(el)}
            width={null}
            height={null}
            background="transparent"
            textColor={null}
            fontSize="14px"
            fontWeight={null}
            margin={null}
            borderRadius="3px"
            icon={null} />)}
          {gaps.after ? <Button
            clName={null}
            title="..."
            handler={() => null}
            width={null}
            height={null}
            background="transparent"
            textColor="#000000"
            fontSize="14px"
            fontWeight={null}
            margin={null}
            borderRadius="3px"
            icon={null} /> : null}
          {gaps.after ? <Button
            clName={null}
            title={`${totalPages}`}
            handler={() => setPage(totalPages)}
            width={null}
            height={null}
            background="transparent"
            textColor="#000000"
            fontSize="14px"
            fontWeight={null}
            margin={null}
            borderRadius="3px"
            icon={null} /> : null}
          {/* <p className={style.text}>
            {firstContentIndex + 1}
            <span>&mdash;</span>
            {lastContentIndex}
            <span>&nbsp;из&nbsp;</span>
            {totalPages}
          </p> */}
          <Button
            clName={null}
            title={null}
            handler={nextPage}
            width={null}
            height={null}
            background="transparent"
            textColor={null}
            fontSize={null}
            fontWeight={null}
            margin={null}
            borderRadius={null}
            icon={<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill={lastPagePag ? 'rgba(29, 29, 29, .6)' : '#1D1D1D'} />
                  </svg>} />
        </div>
      </div> : <h2>По данному запросу ничего не найдено(</h2>}
    </div>
  );
};

export default SearchPage;
