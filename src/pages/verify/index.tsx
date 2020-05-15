import React from 'react';
import { useRouter } from 'next/router';
import useVerify from '../../hooks/useVerify';
import AuthLayout from '../../components/common/AuthLayout';
import ChangePassword from '../../components/verify/ChangePassword';
import { withApollo } from '../../graphql/apollo/apollo';

function Verify() {
  const {
    query: { authCode },
  } = useRouter();
  const { email } = useVerify(authCode as string);

  return (
    <AuthLayout>
      <ChangePassword email={email} />
    </AuthLayout>
  );
}

export default withApollo()(Verify);
