import { authInitialState } from '../context/const';

export type AuthContextActionType = {
  type: 'updateUser', data: typeof authInitialState['user'] }
| { type: 'updateToken', data: typeof authInitialState['tokens'] }
