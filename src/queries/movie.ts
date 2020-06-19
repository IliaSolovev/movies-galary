import { gql } from 'apollo-boost';

export const GET_MOVIE = gql`
    query Movie($id: ID!) {
        movie(id: $id) {
            title
            rating
            poster_path
            tagline
            release_date
            overview
            runtime
            genres
        }
    }
`;
