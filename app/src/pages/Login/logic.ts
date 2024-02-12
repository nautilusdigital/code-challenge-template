import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ENVIRONMENT } from '../../config/environment';
import { validationLogin } from './validation';
import { useFetch } from '../../hooks';
import { useCacheContext } from '../../hooks/useCacheContext';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [renderError, setRenderError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { hookCacheContextDispatcher } = useCacheContext();

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      await validationLogin({ email, password });

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const auth = await useFetch({
        method: 'POST',
        path: '/auth',
        body: {
          email,
          password,
        },
      });

      if (auth?.status !== 200) {
        setRenderError(true);
      } else {
        const date = new Date(new Date(Date.now() + 15 * 60 * 1000));
        document.cookie = `${ENVIRONMENT.APP.SESSION_COOKIE_NAME}=${auth.data.tokens.accessToken}; expires=${date.toUTCString()} path=/; SameSite=none;secure`;

        hookCacheContextDispatcher({
          type: 'updateUser',
          data: { ...auth.data.user },
        });

        hookCacheContextDispatcher({
          type: 'updateToken',
          data: { ...auth.data.tokens },
        });

        navigate('/', {
          replace: true,
        });
      }
    } catch (e: any) {
      setRenderError(true);
    }
  };

  const signupNavigateHandler = () => (navigate('/signup', {
    replace: true,
  }));

  useEffect(() => {
    setRenderError(false);
  }, [email, password]);

  return {
    email,
    emailHandler,
    password,
    passwordHandler,
    renderError,
    handleLogin,
    signupNavigateHandler,
  };
};
