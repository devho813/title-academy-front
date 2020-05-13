import { ForgotPasswordQuery, ForgotPasswordQueryVariables } from './../generated/types';
import { FORGOT_PASSWORD_QUERY } from './../graphql/queries/auth';
import { useLazyQuery } from '@apollo/react-hooks';
import { useCallback, useState, useEffect } from 'react';

function useForgotForm() {
  const [submitEmail, { data, error }] = useLazyQuery<ForgotPasswordQuery, ForgotPasswordQueryVariables>(
    FORGOT_PASSWORD_QUERY,
  );
  const [email, setEmail] = useState('');
  const [successSubmitEmail, setSuccessSubmitEmail] = useState(false);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      submitEmail({
        variables: { email },
      });
    },
    [email],
  );

  useEffect(() => {
    if (data) {
      setSuccessSubmitEmail(true);
    } else if (error) {
      alert(error.graphQLErrors[0].message);
      setEmail('');
    }
  }, [data, error]);

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  return {
    email,
    onSubmit,
    onChangeEmail,
    successSubmitEmail,
  };
}

export default useForgotForm;
