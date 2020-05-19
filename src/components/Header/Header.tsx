import React from "react";
import SearchMovie from "./SearchMovie/SearchMovie";
import s from "./header.module.scss";
const Header = ( ) => {
    return(
        <header className={s.header}>
            <div className={s.header__title}>netflixroulette</div>
            <SearchMovie/>
        </header>
    )
};

export default Header;