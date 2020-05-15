import React, { memo } from 'react';
import styled from 'styled-components';
import useChangePasswordForm from '../../hooks/useChangePasswordForm';

type Props = {
  email?: string;
};

function Form({ email }: Props) {
  const {
    password,
    onChangePassword,
    verifyPassword,
    onChangeVerifyPassword,
    passwordMatchingError,
    onSubmit,
  } = useChangePasswordForm(email);

  return (
    <FormContainer onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" required={true} value={email} disabled />
      <label htmlFor="password">New password</label>
      <input
        id="password"
        type="password"
        autoComplete="off"
        required={true}
        value={password}
        onChange={onChangePassword}
      />
      <label htmlFor="verifyPassword">Verify password</label>
      <input
        id="verifyPassword"
        type="password"
        autoComplete="off"
        required={true}
        value={verifyPassword}
        onChange={onChangeVerifyPassword}
      />
      {passwordMatchingError && <PasswordMatchingError>Password do not match</PasswordMatchingError>}
      <button>Change password</button>
    </FormContainer>
  );
}

export default memo(Form);

const FormContainer = styled.form`
  width: 100%;

  label {
    position: relative;
    display: block;
    font-size: 1rem;
    margin: 1.5em 0 0.8em;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 0.7rem;
    padding: 0.5em;
    font-size: 0.9rem;
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

const PasswordMatchingError = styled.p`
  font-size: 0.8rem;
  color: red;
  margin: 0.5em 0;
`;
