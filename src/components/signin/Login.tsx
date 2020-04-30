import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import Link from 'next/link';

function Login() {
  return (
    <LoginContainer>
      <LoginWrapper>
        <MainCharacterContainer>
          <div>
            <img src="/images/test_main_character.jpg" alt="테스트 메인 캐릭터" />
          </div>
        </MainCharacterContainer>
        <h2>
          <span>Sign In</span>
          <Link href="/signup">
            <a>Create Account</a>
          </Link>
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
    margin: 1em 0 1.2em;
    font-size: 1.5rem;

    span {
      display: inline-block;
      font-weight: bold;
    }

    a {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.9rem;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const MainCharacterContainer = styled.header`
  width: 100%;

  div {
    margin: 0 auto;
    width: 50%;
    border-radius: 50%;
    user-select: none;
    overflow: hidden;

    img {
      display: inline-block;
      width: 100%;
      height: auto;
      transition: transform 0.5s;

      :hover {
        transform: scale(1.2) translateY(8%);
      }
    }
  }
`;
