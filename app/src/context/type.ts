import { CacheContextActionType, cacheInitialState } from '../reducer';

export type CacheContextPropTypes = {
  state: typeof cacheInitialState
  dispatcherHandler: React.Dispatch<CacheContextActionType>
}

export type CacheProviderPropTypes = {
  children: React.ReactNode
}
