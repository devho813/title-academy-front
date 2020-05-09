import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

function Auth() {
  return (
    <AuthContainer>
      <Link href="/signin">
        <button>REGISTER / LOG IN</button>
      </Link>
      {/* <Logout>Logout</Logout> */}
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

// const Logout = styled.button`
//   font-size: 1rem !important;
//   padding: 0.8em 1.5em !important;
// `;
