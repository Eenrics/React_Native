import { gql } from '@apollo/client';
import { REPOSITORIES } from './fragments';

export const GET_REPOSITORIES = gql`
query {
    repositories {
      edges {
        node {
          ...Repository
        }
      }
    }
  }

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

