import React from 'react';
import Login from '../components/signin/Login';
import { withApollo } from '../graphql/apollo/apollo';
import AuthLayout from '../components/common/AuthLayout';

function SignIn() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}

export default withApollo()(SignIn);
