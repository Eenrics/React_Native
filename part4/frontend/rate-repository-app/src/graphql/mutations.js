import { gql } from "@apollo/client";

export const LOG_IN = gql`
mutation Authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`

export const SIGN_UP = gql`
mutation CreateUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
        id
        username
      }
  }
`

export const CREATE_REVIEW = gql`
mutation ($review: CreateReviewInput) {
  createReview(review: $review) {
    id
    createdAt
    rating
    repositoryId
    text
  }
}
`

export const DELETE_REVIEW = gql`
mutation($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
`