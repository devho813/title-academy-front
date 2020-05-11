import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import Link from 'next/link';

function Register() {
  return (
    <>
      <Header>
        <span>Sign Up</span>
        <Link href="/signin">
          <a>or, Login</a>
        </Link>
      </Header>
      <Form />
    </>
  );
}

export default Register;

const Header = styled.h2`
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
`;
