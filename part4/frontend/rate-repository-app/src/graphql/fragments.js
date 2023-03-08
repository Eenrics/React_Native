import { gql } from "@apollo/client";

export const REPOSITORIES = gql`
fragment Repository on Repository {
    createdAt
            description
            forksCount
            fullName
            id
            language
            name
            ownerAvatarUrl
            ownerName
            stargazersCount
            reviewCount
            ratingAverage
            url
            reviews {
              edges {
                node {
                  id
                  text
                  rating
                  createdAt
                  user {
                    id
                    username
                  }
                }
              }
            }
  }
`