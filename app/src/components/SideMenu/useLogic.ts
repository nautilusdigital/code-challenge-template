import { useEffect } from 'react';
import { useFetch } from '../../hooks';
import { useCacheContext } from '../../hooks/useCacheContext';

export const useSideMenu = () => {
  const { hookCacheContextState, hookCacheContextDispatcher } = useCacheContext();

  const getUser = async () => {
    const { status, data } = await useFetch({
      method: 'GET',
      path: '/user',
    });

    if (status === 200) {
      hookCacheContextDispatcher({
        type: 'updateUser',
        data: {
          id: data.id,
          email: data.email,
          name: data.name,
        },
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return {
    hookCacheContextState,
  };
};
