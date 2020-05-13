import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { GrFacebook, GrGoogle } from 'react-icons/gr';
import useSignUpInput from '../../hooks/useSignUpInput';
import useSignupForm from '../../hooks/useSignupForm';
import { useRouter } from 'next/router';

function Form() {
  const router = useRouter();
  const { addUser, error } = useSignupForm();
  const {
    email,
    setEmail,
    nickname,
    password,
    setPassword,
    onChangeEmail,
    onChangeNickname,
    onChangePassword,
  } = useSignUpInput();

  useEffect(() => {
    if (error) {
      setEmail('');
      setPassword('');
      alert(error.graphQLErrors[0].message);
    }
  }, [error]);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addUser({
        variables: { email, nickname, password },
        update: (_cache, { data }) => {
          if (data) {
            alert(`${data.addUser.nickname}님, 회원가입 완료되었습니다.\n로그인 페이지로 이동합니다.`);
            router.push('/signin');
          }
        },
      });
    },
    [email, nickname, password],
  );

  return (
    <FormContainer onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" autoComplete="off" required={true} value={email} onChange={onChangeEmail} />
      <label htmlFor="nickname">Nickname</label>
      <input
        id="nickname"
        type="text"
        autoComplete="off"
        required={true}
        value={nickname}
        onChange={onChangeNickname}
      />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" required={true} value={password} onChange={onChangePassword} />
      <fieldset>
        <input type="checkbox" id="signupEulaAgreement" required={true} />
        <label htmlFor="signupEulaAgreement">Agree to the End User License Agreement and the Privacy Policy.</label>
      </fieldset>
      <Link href="">
        <Facebook>
          <GrFacebook />
          <OauthLogin>Continue with Facebook</OauthLogin>
        </Facebook>
      </Link>
      <Link href="">
        <Google>
          <GrGoogle />
          <OauthLogin>Continue with Google</OauthLogin>
        </Google>
      </Link>
      <button>Create an Account</button>
    </FormContainer>
  );
}

export default Form;

const FormContainer = styled.form`
  width: 100%;

  label {
    position: relative;
    display: block;
    font-size: 1rem;
    margin: 1.2em 0 0.5em;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 0.7rem;
    padding: 0.5em;
    font-size: rem;
    border: 0.8px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    &:focus {
      border: 0.8px solid #579ecf;
    }
  }

  button {
    margin-top: 0.8rem;
    width: 100%;
    font-size: 1rem;
    background-color: #fff;
    background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0.09) 0%, rgba(17, 17, 17, 0.04) 100%);
    border: 1px solid rgba(22, 22, 22, 0.2);
    color: #444;
    padding: 0.5em 0;
    border-radius: 5px;
    cursor: pointer;
  }

  fieldset {
    margin: 1.5rem 0 1rem 0;
    padding: 1rem;
    background-color: #f2f2f2;
    border-radius: 5px;

    input {
      display: inline-block;
      margin: 0;
      padding: 0;
      width: 10%;
      cursor: pointer;
    }

    label {
      display: inline-block;
      margin: 0;
      padding: 0;
      width: 90%;
      vertical-align: middle;
      font-weight: lighter;
      font-size: 0.9rem;
      line-height: 1.2;
      cursor: pointer;
    }
  }
`;

const Facebook = styled.a`
  display: block;
  margin: 1.5rem 0 0.7rem;
  padding: 0.5rem 0;
  background: #fff;
  color: #505f79;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 0;
  border-radius: 3px;
  border-color: transparent;
  text-align: center;
  cursor: pointer;
`;

const Google = styled.a`
  display: block;
  padding: 0.5em 0;
  background: #fff;
  color: #505f79;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 0;
  border-radius: 3px;
  border-color: transparent;
  text-align: center;
  cursor: pointer;
`;

const OauthLogin = styled.span`
  display: inline-block;
  margin-left: 0.5em;
  vertical-align: text-top;
`;
