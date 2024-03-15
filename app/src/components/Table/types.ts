import { HeaderPropTypes } from './Components/Header/types';

export type TablePropTypes = {
  headers: HeaderPropTypes[]
  data: Record<string, any>[]
  emptyStateMessage: React.ReactNode
}
