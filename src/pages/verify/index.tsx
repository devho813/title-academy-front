import React from 'react';
import { useRouter } from 'next/router';
import useVerify from '../../hooks/useVerify';
import AuthLayout from '../../components/common/AuthLayout';
import ChangePassword from '../../components/verify/ChangePassword';
import { withApollo } from '../../graphql/apollo/apollo';

function Verify() {
  const { asPath } = useRouter();
  const { email } = useVerify(asPath.split('authCode=')[1]);

  return (
    <AuthLayout>
      <ChangePassword email={email} />
    </AuthLayout>
  );
}

export default withApollo()(Verify);
