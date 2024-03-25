import React, {
  createContext,
  useMemo,
  useReducer,
} from 'react';
import { useAuthCacheReducer } from '../reducer';
import { AuthCacheContextPropTypes, AuthCacheProviderPropTypes } from './type';
import { authInitialState } from './const';

export const CacheContext = createContext<Readonly<AuthCacheContextPropTypes>>({} as AuthCacheContextPropTypes);

export const CacheProvider = ({ children }: Readonly<AuthCacheProviderPropTypes>) => {
  const [authCacheState, authCacheDispatcher] = useReducer(useAuthCacheReducer, authInitialState);

  const stateMemoed = useMemo(() => ({
    state: authCacheState,
    dispatcherHandler: authCacheDispatcher,
  }), [authCacheState]);

  return (
    <CacheContext.Provider value={stateMemoed}>
      {children}
    </CacheContext.Provider>
  );
};
