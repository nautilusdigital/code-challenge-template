import React, {
  createContext,
  useMemo,
  useReducer,
} from 'react';
import { cacheInitialState, useCacheReducer } from '../reducer';
import { CacheContextPropTypes, CacheProviderPropTypes } from './type';

export const CacheContext = createContext<Readonly<CacheContextPropTypes>>({} as CacheContextPropTypes);

export const CacheProvider = ({ children }: Readonly<CacheProviderPropTypes>) => {
  const [cacheState, cacheDispatcher] = useReducer(useCacheReducer, cacheInitialState);

  const stateMemoed = useMemo(() => ({
    state: cacheState,
    dispatcherHandler: cacheDispatcher,
  }), [cacheState]);

  return (
    <CacheContext.Provider value={stateMemoed}>
      {children}
    </CacheContext.Provider>
  );
};
