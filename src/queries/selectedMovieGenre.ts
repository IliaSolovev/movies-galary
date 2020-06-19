import { gql } from 'apollo-boost';

export const GET_SELECTED_MOVIE_GENRE = gql`
    {
        selectedMovieGenre @client
    }
`;
