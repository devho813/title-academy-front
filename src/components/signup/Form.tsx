import React, { useCallback } from 'react';
import styled from 'styled-components';

function Form() {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('회원가입 버튼 클릭');
  }, []);

  return (
    <FormContainer onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" autoComplete="off" required={true} />
      <label htmlFor="nickname">Nickname</label>
      <input id="nickname" type="text" autoComplete="off" required={true} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" required={true} />
      <fieldset>
        <input type="checkbox" id="signupEulaAgreement" required={true} />
        <label htmlFor="signupEulaAgreement">Agree to the End User License Agreement and the Privacy Policy.</label>
      </fieldset>
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
