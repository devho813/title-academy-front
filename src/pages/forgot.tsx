import React from 'react';
import AuthLayout from '../components/common/AuthLayout';
import Forgot from '../components/forgot/Forgot';
import { withApollo } from '../graphql/apollo/apollo';

function forgot() {
  return (
    <AuthLayout>
      <Forgot />
    </AuthLayout>
  );
}

export default withApollo()(forgot);
