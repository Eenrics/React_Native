import { gql } from '@apollo/client';
import { REPOSITORIES } from './fragments';

export const GET_REPOSITORIES = gql`
query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node {
          ...Repository
        }
      }
    }
  }

${REPOSITORIES}
  `

export const GET_REPOSITORY = gql`
query($id: ID!) {
  repository(id: $id) {
    ...Repository
  }}

${REPOSITORIES}
  `

export const ME = gql`
query {
  me {
    id
    username
  }
}
`

export const MY_REVIEWS = gql`
query{
  me {
    reviews {
      edges {
        node {
          createdAt
          id
          rating
          repository {
            ownerName
            createdAt
            fullName
            id
          }
          text
        }
      }
    }
  }
}
`

