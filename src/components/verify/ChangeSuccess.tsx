import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

function ChangeSuccess() {
  return (
    <ChangeSuccessContainer>
      <h2>Password change successful</h2>
      <p>
        <span>Success!</span> Your password has been modified.
      </p>
      <Link href="/signin">
        <button>Continue</button>
      </Link>
    </ChangeSuccessContainer>
  );
}

export default ChangeSuccess;

const ChangeSuccessContainer = styled.section`
  h2 {
    position: relative;
    padding-bottom: 1em;
    font-size: 1.5rem;
    border-bottom: 1px solid #e8e8e8;
    color: #5ab35a;
  }

  p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.9rem;
    margin: 1rem 0;

    span {
      font-weight: bolder;
    }
  }

  button {
    margin-top: 0.8rem;
    width: 100%;
    font-size: 1rem;
    background-color: #fff;
    background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0.09) 0%, rgba(17, 17, 17, 0.04) 100%);
    border: 1px solid rgba(22, 22, 22, 0.2);
    color: #444;
    padding: 0.5em 0;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      color: black;
      box-shadow: 2px 2px 3px rgba(22, 22, 22, 0.2) inset;
    }
  }
`;
