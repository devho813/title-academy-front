import { LogoutMutation, LoginMutationVariables } from './../generated/types';
import { LOGOUT_MUTATION } from './../graphql/mutations/auth';
import { useMutation } from '@apollo/react-hooks';
import { useState, useMemo, useCallback } from 'react';
import { getToken, removeToken } from '../utils/storage';
import { ApolloError } from 'apollo-client';

export default function useAuth() {
  const [isLogin, setIsLogin] = useState(useMemo(() => getToken(), []) ? true : false);
  const [logout] = useMutation<LogoutMutation, LoginMutationVariables>(LOGOUT_MUTATION, {
    // TODO: 로그아웃 테스트 진행
    onCompleted: () => {
      removeToken();
      setIsLogin(false);
    },
    onError: (error: ApolloError) => {
      throw new Error(error.message);
    },
  });

  const onLogout = useCallback(() => {
    logout();
  }, []);

  return { isLogin, onLogout };
}
