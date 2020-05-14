import { AuthCodeQuery, AuthCodeQueryVariables } from './../generated/types';
import { AUTH_CODE_QUERY } from './../graphql/queries/auth';
import { useQuery } from '@apollo/react-hooks';
import { useEffect } from 'react';

export default function useVerify(authCode: string) {
  const { data, error } = useQuery<AuthCodeQuery, AuthCodeQueryVariables>(AUTH_CODE_QUERY, {
    variables: { authCode },
  });
  const email = data?.authCode.email;

  useEffect(() => {
    if (!authCode) {
      alert("doesn't exist authorization code");
      throw new Error("doesn't exist authorization code");
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
