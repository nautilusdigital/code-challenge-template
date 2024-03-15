import React from 'react';
import { RowPropTypes } from './types';

export const Row = ({
  headers, row, width, index, totalRows,
}: RowPropTypes) => (
  <tr className={`w-full flex items-center px-4 py-[14px] border border-solid border-grayscale-40 ${index === totalRows - 1 ? 'rounded-b-md' : 'rounded-none'}`}>
      {headers.map((header) => (
        <td
          key={header.id}
          className={'flex items-center justify-start flex-grow text-grayscale-100'}
          style={{ width: `${width}%` }}
        >
          {row[header.id]}
        </td>
      ))}
  </tr>
);
