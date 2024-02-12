import { useContext } from 'react';
import { CacheContext } from '../context';

export const useCacheContext = () => {
  const { state, dispatcherHandler } = useContext(CacheContext);

  return {
    hookCacheContextState: state,
    hookCacheContextDispatcher: dispatcherHandler,
  };
};
