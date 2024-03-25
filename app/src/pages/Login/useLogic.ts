import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validationLogin } from './validation';
import { useCookie, useFetch } from '../../hooks';
import { formatYupError } from '../../utils';
import { INIT_LOGIN_ACCOUNT, LOGIN } from './const';
import { useLoginReducer } from './reducer';
import { useAuth } from '../../hooks/useAuth';
import { PATH } from '../../utils/Path';

export const useLogin = () => {
  const navigate = useNavigate();
  const { updateAuth } = useAuth();
  const cookieUtils = useCookie();

  const [loginAccountState, loginAccountDispatcher] = useReducer(useLoginReducer, INIT_LOGIN_ACCOUNT);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormHandler = (data: Record<string, any>) => loginAccountDispatcher({ data });

  const handleLogin = async () => {
    try {
      await validationLogin(loginAccountState);

      const { status, data } = await useFetch({
        method: 'POST',
        path: '/auth',
        body: loginAccountState,
      });

      if (status !== 200) {
        if (status !== 400) setErrors({ ...errors, default: LOGIN.ERRORS.DEFAULT });
        if (status === 400) setErrors({ ...errors, default: LOGIN.ERRORS.USER });
      } else {
        cookieUtils.createCookie(data.tokens.accessToken);

        updateAuth(data.user, data.tokens);

        navigate(PATH.get('DASHBOARD')?.URL || '/');
      }
    } catch (error: any) {
      if (error.inner) {
        const formatedErrors = formatYupError(error.inner);
        setErrors(formatedErrors);
      }
    }
  };

  return {
    loginAccountState,
    loginAccountDispatcher: updateFormHandler,
    handleLogin,

    errors,
  };
};
