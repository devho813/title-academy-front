import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import Link from 'next/link';

function Register() {
  return (
    <RegisterContainer>
      <RegisterWrapper>
        <h2>
          <span>Sign Up</span>
          <Link href="/signin/">
            <a>or, Login</a>
          </Link>
        </h2>
        <Form />
      </RegisterWrapper>
    </RegisterContainer>
  );
}

export default Register;

const RegisterContainer = styled.section`
  width: 100%;
`;

const RegisterWrapper = styled.div`
  width: 480px;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }

  h2 {
    position: relative;
    padding-bottom: 1em;
    font-size: 1.5rem;
    border-bottom: 1px solid #e8e8e8;

    a {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 0.9rem;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
