import { LOGIN_MUTATION } from './../graphql/mutations/auth';
import { LoginMutation, LoginMutationVariables } from './../generated/types';
import { useMutation } from '@apollo/react-hooks';

function useSignInForm() {
  const [login, { error }] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION);

  return {
    login,
    error,
  };
}

export default useSignInForm;
