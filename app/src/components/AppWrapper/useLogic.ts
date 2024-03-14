import { useCacheContext, useFetch } from '../../hooks';

export const useAppWrapper = () => {
  const { hookCacheContextDispatcher } = useCacheContext();
};
