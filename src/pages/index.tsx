import React from 'react';
import { withApollo } from '../graphql/apollo/apollo';
import Board from '../components/board/Board';

function Home() {
  return (
    <>
      <Board />
    </>
  );
}

export default withApollo()(Home);
