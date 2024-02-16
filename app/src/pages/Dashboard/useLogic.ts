import { useCacheContext } from '../../hooks/useCacheContext';

export const useDashboard = () => {
  const { hookCacheContextState } = useCacheContext();

  return {
    hookCacheContextState,
  };
};
