import { AuthContextActionType } from '../reducer';
import { authInitialState } from './const';

export type AuthCacheContextPropTypes = {
  state: typeof authInitialState
  dispatcherHandler: React.Dispatch<AuthContextActionType>
}

export type AuthCacheProviderPropTypes = {
  children: React.ReactNode
}
