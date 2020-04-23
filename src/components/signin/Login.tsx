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
        <h2>Sign In</h2>
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
  width: 500px;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  h2 {
    margin: 1em 0;
    font-size: 1.5rem;
    font-weight: bold;
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
  }
`;
