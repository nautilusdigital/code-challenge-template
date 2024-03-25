import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ENVIRONMENT } from '../../config/environment';
import {
  useAuth, useAuthContext, useCookie, useFetch,
} from '../../hooks';
import { PATH } from '../../utils';

export const useAppWrapper = () => {
  const navigate = useNavigate();
  const cookieUtils = useCookie();
  const { updateAuth } = useAuth();

  const { hookAuthContextState } = useAuthContext();

  const freshUser = async (session: string) => {
    const { status, data } = await useFetch({
      method: 'GET',
      path: `/auth/refresh/${session}`,
    });

    if (status === 200) {
      cookieUtils.createCookie(data.tokens.accessToken);

      updateAuth(data.user, data.tokens);
      return;
    }

    navigate(PATH.get('LOGIN')?.URL || '');
  };

  const validateUserSession = () => {
    const session = cookieUtils.getCookie(ENVIRONMENT.APP.SESSION_COOKIE_NAME);
    if (!session.exist) navigate(PATH.get('LOGIN')?.URL || '');

    if (!hookAuthContextState.user.id) freshUser(session.value);
  };

  useEffect(() => {
    validateUserSession();
  }, []);

  return {
    validateUserSession,
  };
};
