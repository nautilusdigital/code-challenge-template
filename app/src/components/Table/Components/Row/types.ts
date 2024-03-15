import { TablePropTypes } from '../../types';

export type RowPropTypes = Pick<TablePropTypes, 'headers'> &{
  row: Record<string, any>
  index: number
}
