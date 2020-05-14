import React, { memo } from 'react';
import styled from 'styled-components';
import Form from './Form';

type Props = {
  email?: string;
};

function ChangePassword({ email = '' }: Props) {
  return (
    <ChangePasswordContainer>
      <h2>Change Password</h2>
      <p>Create a new, strong password that you don`t use fro other websites</p>
      <Form email={email} />
    </ChangePasswordContainer>
  );
}

export default memo(ChangePassword);

const ChangePasswordContainer = styled.section`
  h2 {
    position: relative;
    padding-bottom: 1em;
    font-size: 1.5rem;
    border-bottom: 1px solid #e8e8e8;
  }

  & > p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.9rem;
    margin: 1rem 0;
  }
`;
