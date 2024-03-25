import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ENVIRONMENT } from '../../config/environment';
import { validationLogin } from './validation';
import { useFetch } from '../../hooks';
import { useCacheContext } from '../../hooks/useCacheContext';
import { formatYupError } from '../../utils';
import { INIT_LOGIN_ACCOUNT, LOGIN } from './const';
import { useLoginReducer } from './reducer';

export const useLogin = () => {
  const navigate = useNavigate();
  const { hookCacheContextDispatcher } = useCacheContext();

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
        const date = new Date(new Date(Date.now() + 15 * 60 * 1000));
        document.cookie = `${ENVIRONMENT.APP.SESSION_COOKIE_NAME}=${data.tokens.accessToken}; expires=${date.toUTCString()} path=/; SameSite=none;secure`;

        hookCacheContextDispatcher({
          type: 'updateUser',
          data: { ...data.user },
        });

        hookCacheContextDispatcher({
          type: 'updateToken',
          data: { ...data.tokens },
        });

        navigate('/');
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
