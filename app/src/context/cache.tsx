import React, {
  createContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { CacheContextActionType, cacheInitialState, useCacheReducer } from '../reducer';

type CacheContextPropTypes = {
  state: typeof cacheInitialState
  dispatcherHandler: React.Dispatch<CacheContextActionType>
}

type CacheProviderPropTypes = {
  children: React.ReactNode
}

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
