import gql from 'graphql-tag';

export const FORGOT_PASSWORD_QUERY = gql`
  query ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const AUTH_CODE_QUERY = gql`
  query AuthCode($authCode: String!) {
    authCode(authCode: $authCode) {
      email
    }
  }
`;
