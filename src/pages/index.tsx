import React from 'react';
import { withApollo } from '../graphql/apollo/apollo';
import Header from '../components/gnb/Header';
import Board from '../components/board/Board';

function Home() {
  return (
    <>
      <Header />
      <Board />
    </>
  );
}

export default withApollo()(Home);
