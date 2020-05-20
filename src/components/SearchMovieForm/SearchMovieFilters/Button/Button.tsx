import React from "react";
import s from './button.module.scss';
interface Props {
    text: string,
    isActive: boolean
}

const Button: React.FC<Props> = ({text,isActive,...rest}) => {
    return <button className={`${s.button}  ${isActive? s.button_active: ""}`}>{text}</button>
}

export default Button;