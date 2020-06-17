import { gql } from 'apollo-boost';

export const GET_MOVIES = gql`
    query Movies($filter: String!, $searchType: String!, $searchValue: String!) {
        movies(filter: $filter,searchType: $searchType,searchValue :$searchValue) {
            title
            vote_average
        }
    }
`;
