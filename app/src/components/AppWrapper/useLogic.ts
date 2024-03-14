import { useCacheContext } from '../../hooks';

export const useAppWrapper = () => {
  const { hookCacheContextDispatcher } = useCacheContext();

  // hookCacheContextDispatcher({
  //   type: 'updateUser',
  //   data: {
  //     id: '123',
  //     email: 'janec@gmail.com',
  //     name: 'Jane Cooper',
  //   },
  // });
};
