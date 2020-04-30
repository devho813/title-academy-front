import { useState, useCallback } from 'react';

function useSignUpInput() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  const onChangeNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  }, []);
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  return {
    email,
    setEmail,
    nickname,
    setNickname,
    password,
    setPassword,
    onChangeEmail,
    onChangeNickname,
    onChangePassword,
  };
}

export default useSignUpInput;
