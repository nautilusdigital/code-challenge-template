import { useAuthContext } from './useAuthContext';

export const useAuth = () => {
  const { hookAuthContextDispatcher } = useAuthContext();

  const updateAuth = (user: any, tokens: any) => {
    hookAuthContextDispatcher({
      type: 'updateUser',
      data: { ...user },
    });

    hookAuthContextDispatcher({
      type: 'updateToken',
      data: { ...tokens },
    });
  };

  return {
    updateAuth,
  };
};
