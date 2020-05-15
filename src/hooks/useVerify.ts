import { AuthCodeQuery, AuthCodeQueryVariables } from './../generated/types';
import { AUTH_CODE_QUERY } from './../graphql/queries/auth';
import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect } from 'react';

export default function useVerify(authCode?: string) {
  const [authCodeQuery, { data, error }] = useLazyQuery<AuthCodeQuery, AuthCodeQueryVariables>(AUTH_CODE_QUERY);
  const email = data?.authCode.email;

  useEffect(() => {
    if (authCode) {
      authCodeQuery({ variables: { authCode } });
    } else {
      alert('Authorization code does not exist');
      throw new Error('Authorization code does not exist');
    }
  }, []);

  useEffect(() => {
    if (error) {
      alert(error.graphQLErrors[0].message);
      throw new Error(error.graphQLErrors[0].message);
    }
  }, [error]);

  return { email };
}
