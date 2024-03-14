import { useCacheContext } from '../../hooks/useCacheContext';

export const useSideMenu = () => {
  const { hookCacheContextState } = useCacheContext();

  return {
    hookCacheContextState,
  };
};
