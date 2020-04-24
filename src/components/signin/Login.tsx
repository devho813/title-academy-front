import React from 'react';
import styled from 'styled-components';
import Form from './Form';

function Login() {
  return (
    <LoginContainer>
      <LoginWrapper>
        <MainCharacterContainer>
          <img src="/images/test_main_character.jpg" alt="테스트 메인 캐릭터" />
        </MainCharacterContainer>
        <h2>
          <span>Sign In</span>
          <a>Create Account</a>
        </h2>
        <Form />
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.section`
  width: 100%;
`;

const LoginWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  h2 {
    position: relative;
    margin: 1em 0;
    font-size: 1.5rem;

    span {
      display: inline-block;
      font-weight: bold;
    }

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

const MainCharacterContainer = styled.div`
  width: 100%;
  text-align: center;

  img {
    display: inline-block;
    width: 50%;
    height: auto;
    border-radius: 50%;
    user-select: none;
  }
`;
