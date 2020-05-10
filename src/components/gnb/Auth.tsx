import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import useAuth from '../../hooks/useAuth';

function Auth() {
  const { isLogin } = useAuth();

  return (
    <AuthContainer>
      {isLogin ? (
        <Logout>Logout</Logout>
      ) : (
        <Link href="/signin">
          <button>REGISTER / LOG IN</button>
        </Link>
      )}
    </AuthContainer>
  );
}

export default Auth;

const AuthContainer = styled.aside`
  display: inline-block;
  height: 100%;

  button {
    position: relative;
    margin-left: 2rem;
    padding: 1.1em 1.5em;
    font-size: 0.8rem;
    border: 1px solid #cccccc;
    cursor: pointer;
  }
`;

const Logout = styled.button`
  font-size: 0.9rem !important;
  padding: 0.9em 1.5em !important;
`;
