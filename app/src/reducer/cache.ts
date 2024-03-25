import { AuthContextActionType } from './types';

export const useAuthCacheReducer = (state: any, { type, data }: AuthContextActionType) => {
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
