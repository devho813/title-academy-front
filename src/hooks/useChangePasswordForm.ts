import { UserInfoModifedMutation, UserInfoModifedMutationVariables } from './../generated/types';
import { USER_INFO_MODIFED_MUTATION } from './../graphql/mutations/auth';
import { useCallback, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

export default function useChangePasswordForm(email?: string) {
  const [changePassword] = useMutation<UserInfoModifedMutation, UserInfoModifedMutationVariables>(
    USER_INFO_MODIFED_MUTATION,
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
        changePassword({ variables: { email, password } });
        // TODO: 패스워드 변경 완료페이지 라우팅 처리
      } else {
        throw new Error("doesn't exist email");
      }
    },
    [password, verifyPassword],
  );

  return { onSubmit, password, onChangePassword, verifyPassword, onChangeVerifyPassword, passwordMatchingError };
}
