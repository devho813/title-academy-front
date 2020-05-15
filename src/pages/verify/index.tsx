import React from 'react';
import { useRouter } from 'next/router';
import useVerify from '../../hooks/useVerify';
import AuthLayout from '../../components/common/AuthLayout';
import ChangePassword from '../../components/verify/ChangePassword';
import { withApollo } from '../../graphql/apollo/apollo';

function Verify() {
  const {
    asPath,
    query: { authCode },
  } = useRouter();

  const { email } = useVerify(authCode ? (authCode as string) : asPath.split('authCode=')[1]);

  return (
    <AuthLayout>
      <ChangePassword email={email} />
    </AuthLayout>
  );
}

export default withApollo()(Verify);
