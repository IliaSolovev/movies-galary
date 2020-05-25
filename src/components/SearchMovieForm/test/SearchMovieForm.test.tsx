import React from "react";
import {mount, shallow} from "enzyme";
import SearchField from "../Field/SearchField";
import SearchButton from "../SearchButton/SearchButton";
import SearchMovieFiltersButton from "../SearchMovieFilters/SearchMovieFiltersButton/SearchMovieFiltersButton";
import SearchMovieFilters from "../SearchMovieFilters/SearchMovieFilters";
const data = {
    id: 337167,
    title: "Fifty Shades Freed",
    tagline: "Don't miss the climax",
    vote_average: 6.1,
    vote_count: 1195,
    release_date: "2018-02-07",
    poster_path: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    budget: 55000000,
    revenue: 136906000,
    genres: [
        "Drama",
        "Romance"
    ],
    runtime: 106
};

it('should render search field', () => {
    const component = shallow(<SearchField value={'asd'} onChange={() => {}}/>);
    expect(component).toMatchSnapshot();
});
it('should render search button',() => {
    const component = shallow(<SearchButton onClick={() => {}}/>);
    expect(component).toMatchSnapshot();
});
it('should render search movie filter button',() => {
    const component = shallow(<SearchMovieFiltersButton onClick={() => {}} isActive={true} text={'asd'}/>);
    expect(component).toMatchSnapshot();
});
it('should render search movie filter ',() => {
    const component = mount(<SearchMovieFilters searchType={'genre'} onSelectType={() => {}}/>);
    expect(component).toMatchSnapshot();
});
