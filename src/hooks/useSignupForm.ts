import { ADD_USER } from './../graphql/mutations/auth';
import { AddUserMutation } from './../generated/types';
import { useMutation } from '@apollo/react-hooks';
import Router from 'next/router';

function useSignupForm() {
  const [addUser, { error }] = useMutation<AddUserMutation>(ADD_USER, {
    update: (_cache, { data }) => {
      if (data) {
        alert(`${data.addUser.nickname}님, 회원가입 완료되었습니다.\n로그인 페이지로 이동합니다.`);
        Router.push('/signin');
      }
    },
  });

  return {
    addUser,
    error,
  };
}

export default useSignupForm;
