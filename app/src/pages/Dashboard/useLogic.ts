import { useAuthContext } from '../../hooks/useAuthContext';

export const useDashboard = () => {
  const { hookAuthContextState } = useAuthContext();

  return {
    hookAuthContextState,
  };
};
