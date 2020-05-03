import React from 'react';
import { withApollo } from '../graphql/apollo/apollo';
import withAuth from '../utils/withAuth';
import Header from '../components/gnb/Header';

function Home() {
  return (
    <>
      <Header />
    </>
  );
}

export default withApollo()(withAuth(Home));
