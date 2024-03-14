export const cacheInitialState = {
  user: {
    id: '',
    email: '',
    name: '',
  },
};

export type CacheContextActionType = { type: 'updateUser', data: typeof cacheInitialState['user'] }

export const useCacheReducer = (state: any, { type, data }: CacheContextActionType) => {
  switch (type) {
    case 'updateUser':
      return {
        ...state,
        user: { ...data },
      };
    default:
      return { ...state };
  }
};
