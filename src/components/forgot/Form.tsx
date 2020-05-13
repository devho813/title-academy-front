import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

function Form() {
  const [email, setEmail] = useState('');
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  return (
    <FormContainer onSubmit={onSubmit}>
      <label htmlFor="email">Your email</label>
      <input id="email" type="email" required={true} value={email} onChange={onChangeEmail} />
      <button>email me a recovery link</button>
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
    margin: 2em 0 0.8em;
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
