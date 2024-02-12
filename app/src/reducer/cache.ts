export const cacheInitialState = {
  user: {
    id: '',
    email: '',
    name: '',
    userType: '',
    createdAt: '',
  },
  tokens: {
    accessToken: '',
  },
};

export type CacheContextActionType = { type: 'updateUser', data: typeof cacheInitialState['user'] }
| { type: 'updateToken', data: typeof cacheInitialState['tokens'] }

export const useCacheReducer = (state: any, { type, data }: CacheContextActionType) => {
  switch (type) {
    case 'updateUser':
      return {
        ...state,
        user: { ...data },
      };
    case 'updateToken':
      return {
        ...state,
        tokens: { ...data },
      };
    default:
      return { ...state };
  }
};
