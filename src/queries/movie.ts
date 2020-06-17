import { gql } from 'apollo-boost';

export const GET_MOVIE = gql`
    query Movie($id: ID!) {
        movie(id: $id) {
            title
            vote_average
        }
    }
`;
