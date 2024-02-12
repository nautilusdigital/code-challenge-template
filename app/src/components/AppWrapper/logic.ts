import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { checkForCookie } from '../../utils';
import { ENVIRONMENT } from '../../config/environment';

export const useAppWrapper = () => {
  const navigate = useNavigate();

  const validateUserSession = () => {
    const session = checkForCookie(ENVIRONMENT.APP.SESSION_COOKIE_NAME);

    if (!session.exist) navigate('/login');
  };

  useEffect(() => {
    validateUserSession();
  }, []);

  return {
    validateUserSession,
  };
};
