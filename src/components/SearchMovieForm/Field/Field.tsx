import React from "react";
import s from './field.module.scss'
interface Props {
    value: string,
    onChange: (e: React.FormEvent ) => void
}

const Field = (props: Props) => {
    // const {value,onChange} = props;
    return (
        <>
            <input type="text" className={s.input} />
        </>
    )

};

export default Field;