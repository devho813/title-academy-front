import React from 'react';
import styled from 'styled-components';

type Props = {
  children: JSX.Element;
};

function AuthLayout({ children }: Props) {
  return (
    <AuthLayoutContainer>
      <h1>Title Academy</h1>
      <BoxContainer>{children}</BoxContainer>
    </AuthLayoutContainer>
  );
}

export default AuthLayout;

const AuthLayoutContainer = styled.div`
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
    margin: 1.5em 0;
    font-family: 'Black Han Sans', sans-serif;
  }
`;

const BoxContainer = styled.div`
  width: 480px;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
`;
