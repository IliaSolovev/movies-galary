import React from 'react';
import s from './PageNotFound.module.scss';

interface Props {

}

const PageNotFound: React.FC<Props> = (props) => (
  <>
    <div className={s.errorNumber}>404</div>
    <div className={s.errorText}>page not found</div>
  </>
);

export default PageNotFound;
