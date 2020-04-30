import gql from 'graphql-tag';

export const ADD_USER_MUTATION = gql`
  mutation AddUser($email: String!, $nickname: String!, $password: String!) {
    addUser(email: $email, nickname: $nickname, password: $password) {
      email
      nickname
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        nickname
      }
      accessToken
    }
  }
`;
