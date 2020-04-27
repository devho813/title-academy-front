import gql from 'graphql-tag';

export const ADD_USER = gql`
  mutation AddUser($email: String!, $nickname: String!, $password: String!) {
    addUser(email: $email, nickname: $nickname, password: $password) {
      id
    }
  }
`;
