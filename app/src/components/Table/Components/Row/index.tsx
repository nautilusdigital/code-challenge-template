import React from 'react';
import { RowPropTypes } from './types';

export const Row = ({ headers, row }: RowPropTypes) => (
  <tr className='w-full flex items-center'>
      {headers.map((header) => (
        <td
          key={header.id}
          className='flex items-center justify-start px-4 py-[14px] flex-grow'
        >
          {row[header.id]}
        </td>
      ))}
  </tr>
);
