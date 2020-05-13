import gql from 'graphql-tag';

export const FORGOT_PASSWORD_QUERY = gql`
  query ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
