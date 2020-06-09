import React, { ChangeEvent } from 'react';

import style from './searchField.module.scss';

interface Props {
    value: string,
    onChange: (value: string) => void
}

export const SearchField:React.FC<Props> = ({ value, onChange }) => (
  <>
    <input
      type="text"
      className={style.searchField}
      value={value}
      onChange={({ currentTarget }:ChangeEvent<HTMLInputElement>) => onChange(currentTarget.value)}
    />
  </>
);
