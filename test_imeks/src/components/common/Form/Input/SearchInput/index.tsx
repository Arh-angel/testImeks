import React, { ChangeEvent, ReactElement } from 'react';
import style from './SearchInput.module.scss';

type InputPropsType = {
  id: string;
  placeholder: ReactElement | string;
  type: 'text';
  value: string;
  handlerSearchValue: (value:string) => void;
};

const SearchInput = ({
  id, placeholder, type, value, handlerSearchValue
}: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => handlerSearchValue(event.target.value);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} value={value} onChange={handler} type={type} />
      <span>{placeholder}</span>
    </label>
  );
};

export default SearchInput;
