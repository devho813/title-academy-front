import React from 'react';
import Register from '../components/signup/Register';
import { withApollo } from '../graphql/apollo/apollo';
import AuthLayout from '../components/common/AuthLayout';

function SignUp() {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
}

export default withApollo()(SignUp);
