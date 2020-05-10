import { LOGIN_MUTATION } from './../graphql/mutations/auth';
import { LoginMutation, LoginMutationVariables } from './../generated/types';
import { useMutation } from '@apollo/react-hooks';
import { setToken } from '../utils/storage';

function useSignInForm() {
  const [login, { error }] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION, {
    onCompleted: (data) => {
      if (data) {
        const { accessToken, refreshToken } = data.login!;
        setToken(accessToken, refreshToken);
      }
    },
  });

  return {
    login,
    error,
  };
}

export default useSignInForm;
