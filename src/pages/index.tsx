import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { withApollo } from '../graphql/apollo/apollo';

function Home() {
  return (
    <Title>
      <Link href="/signin/">
        <a>로그인 페이지로 고고</a>
      </Link>
    </Title>
  );
}

export default withApollo()(Home);

const Title = styled.h1`
  color: #fabdb9;
  font-size: 50px;
`;
