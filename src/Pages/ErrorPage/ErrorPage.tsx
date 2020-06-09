import React from 'react';
import style from './errorPage.module.scss';

interface Props {
    statusCode: number,
    errorMessage: string
}

export const ErrorPage: React.FC<Props> = ({ statusCode, errorMessage }) => (
  <div className={style.errorPage}>
    <div className={style.errorPage__statusCode}>{statusCode}</div>
    <div className={style.errorPage__errorMessage}>{errorMessage}</div>
  </div>
);
