import { UserInfoModifedMutation, UserInfoModifedMutationVariables } from './../generated/types';
import { USER_INFO_MODIFED_MUTATION } from './../graphql/mutations/auth';
import { useCallback, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

export default function useChangePasswordForm(email?: string) {
  const router = useRouter();
  const [passwordMutation] = useMutation<UserInfoModifedMutation, UserInfoModifedMutationVariables>(
    USER_INFO_MODIFED_MUTATION,
    {
      onCompleted: (data) => {
        if (data) {
          router.push('/verify/success');
        }
      },
    },
  );

  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [passwordMatchingError, setPasswordMatchingError] = useState(false);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onChangeVerifyPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setVerifyPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (password !== verifyPassword) {
        setPasswordMatchingError(true);
        return;
      }

      if (email) {
        passwordMutation({ variables: { email, password } });
      } else {
        throw new Error("doesn't exist email");
      }
    },
    [password, verifyPassword],
  );

  return {
    passwordMutation,
    password,
    onChangePassword,
    verifyPassword,
    onChangeVerifyPassword,
    passwordMatchingError,
    setPasswordMatchingError,
    onSubmit,
  };
}
