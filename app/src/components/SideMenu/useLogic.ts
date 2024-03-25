import { useNavigate } from 'react-router-dom';
import { ENVIRONMENT } from '../../config/environment';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCookie } from '../../hooks';

export const useSideMenu = () => {
  const navigate = useNavigate();
  const { hookAuthContextState } = useAuthContext();
  const cookieUtils = useCookie();

  const handleLogout = () => {
    cookieUtils.deleteCookie(ENVIRONMENT.APP.SESSION_COOKIE_NAME);
    navigate('/login');
  };

  return {
    handleLogout,
    hookAuthContextState,
  };
};
