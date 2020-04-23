import React from 'react';
import styled from 'styled-components';
import Login from '../components/signin/Login';

function SignIn() {
  return (
    <SignInContainer>
      <h1>제목 학원</h1>
      <Login />
    </SignInContainer>
  );
}

export default SignIn;

const SignInContainer = styled.div`
  width: 100vw;

  &:before {
    content: '';
    background-image: linear-gradient(139deg, #fb8817, #1501e8, #c12127, #ff4b01);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    z-index: 9999;
  }

  h1 {
    width: 100%;
    font-size: 3rem;
    text-align: center;
    margin: 1.6em 0.8em;
    font-family: 'Black Han Sans', sans-serif;
  }
`;
