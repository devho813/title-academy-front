import React from 'react';
import styled from 'styled-components';
import Form from './Form';

function Forgot() {
  return (
    <ForgotContainer>
      <h2>Recover Password</h2>
      <Form />
    </ForgotContainer>
  );
}

export default Forgot;

const ForgotContainer = styled.section`
  h2 {
    position: relative;
    padding-bottom: 1em;
    font-size: 1.5rem;
    border-bottom: 1px solid #e8e8e8;
  }
`;
