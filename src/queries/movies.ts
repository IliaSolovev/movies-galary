import { gql } from 'apollo-boost';

export const GET_MOVIES = gql`
    query Movies($filter: String!, $searchType: String!, $searchValue: String!) {
        movies(filter: $filter,searchType: $searchType,searchValue :$searchValue) {
            id
            title
            poster_path
            genres
            release_date
        }
    }
`;
