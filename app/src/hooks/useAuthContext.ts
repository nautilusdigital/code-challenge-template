import { useContext } from 'react';
import { CacheContext } from '../context';

export const useAuthContext = () => {
  const { state, dispatcherHandler } = useContext(CacheContext);

  return {
    hookAuthContextState: state,
    hookAuthContextDispatcher: dispatcherHandler,
  };
};
