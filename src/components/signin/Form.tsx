import React, { useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { GrFacebook, GrGoogle } from 'react-icons/gr';
import useSignInInput from '../../hooks/useSignInInput';
import { useEffect } from 'react';
import useSignInForm from '../../hooks/useSignInForm';
import Router from 'next/router';

function Form() {
  const { email, setEmail, password, setPassword, onChangeEmail, onChangePassword } = useSignInInput();
  const { login, error } = useSignInForm();

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
      login({
        variables: { email, password },
        update: (_cache, { data }) => {
          if (data) {
            const {
              user: { nickname },
              accessToken,
              refreshToken,
            } = data.login!;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            alert(`${nickname}님, 로그인 완료되었습니다.\n메인 페이지로 이동합니다.`);
            Router.push('/');
          }
        },
      });
    },
    [email, password],
  );

  return (
    <FormContainer onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" autoComplete="off" required={true} value={email} onChange={onChangeEmail} />
      <label htmlFor="password">
        <span>Password</span>
        <ForgotPassword>Forgot password?</ForgotPassword>
      </label>
      <input id="password" type="password" required={true} value={password} onChange={onChangePassword} />
      <fieldset>
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
      </fieldset>
      <button>Sign In</button>
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
    font-size: 1rem;
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
`;

const ForgotPassword = styled.a`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Facebook = styled.a`
  display: block;
  padding: 0.5rem 0;
  background: #fff;
  color: #505f79;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 0;
  border-radius: 3px;
  border-color: transparent;
  text-align: center;
  margin: 1.5rem 0 0.7rem;
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
