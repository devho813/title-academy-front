import { useState, useCallback } from 'react';

function useSignInInputForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  return {
    email,
    setEmail,
    password,
    setPassword,
    onChangeEmail,
    onChangePassword,
  };
}

export default useSignInInputForm;
