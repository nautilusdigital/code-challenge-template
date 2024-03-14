import { useCacheContext } from '../../hooks/useCacheContext';

export const useContacts = () => {
  const { hookCacheContextState } = useCacheContext();

  return {
    hookCacheContextState,
  };
};
