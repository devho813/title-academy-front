import React from 'react';
import styled from 'styled-components';
import Form from './Form';

function Forgot() {
  return (
    <>
      <Header>
        <h2>Recover Password</h2>
        <p>Don{"'"}t worry, happens to the best of us.</p>
      </Header>
      <Form />
    </>
  );
}

export default Forgot;

const Header = styled.header`
  h2 {
    position: relative;
    padding-bottom: 1em;
    font-size: 1.5rem;
    border-bottom: 1px solid #e8e8e8;
  }

  p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.9rem;
    margin: 1rem 0;
  }
`;
