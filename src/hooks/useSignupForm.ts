import { ADD_USER_MUTATION } from './../graphql/mutations/auth';
import { AddUserMutation, AddUserMutationVariables } from './../generated/types';
import { useMutation } from '@apollo/react-hooks';

function useSignupForm() {
  const [addUser, { error }] = useMutation<AddUserMutation, AddUserMutationVariables>(ADD_USER_MUTATION);

  return {
    addUser,
    error,
  };
}

export default useSignupForm;
