import { HeaderPropTypes } from './Components/Header/types';

export type TablePropTypes = {
  headers: Pick<HeaderPropTypes, 'id' | 'label'>[]
  data: Record<string, any>[]
  emptyStateMessage: React.ReactNode
}
