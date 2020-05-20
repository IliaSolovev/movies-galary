import React from "react";
import s from "./header.module.scss";

const Header:React.FC = (props ) => {
    return(
        <header className={s.header}>
            {props.children}
        </header>
    )
};

export default Header;