import { LogoutMutation, LoginMutationVariables } from './../generated/types';
import { LOGOUT_MUTATION } from './../graphql/mutations/auth';
import { useMutation } from '@apollo/react-hooks';
import { useState, useMemo, useCallback } from 'react';
import { getToken, removeToken } from '../utils/storage';

export default function useAuth() {
  const [isLogin, setIsLogin] = useState(useMemo(() => getToken(), []) ? true : false);
  const [logout] = useMutation<LogoutMutation, LoginMutationVariables>(LOGOUT_MUTATION);

  const onLogout = useCallback(() => {
    logout();
    removeToken();
    setIsLogin(false);
  }, []);

  return { isLogin, onLogout };
}
