import React, { ChangeEvent } from 'react';
import s from './searchField.module.scss';

interface Props {
    value: string,
    onChange: (value: string) => void
}

const SearchField:React.FC<Props> = ({ value, onChange }) => (
  <>
    <input type="text" className={s.input} value={value} onChange={(e:ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} />
  </>
);

export default SearchField;
