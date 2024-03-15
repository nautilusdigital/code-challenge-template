import React from 'react';
import { TablePropTypes } from './types';
import { Header, Row } from './Components';

export const Table = ({ headers, data, emptyStateMessage }: TablePropTypes) => {
  const width = 100 / headers.length;

  return (
  <table
    className='w-full '
  >
    <thead>
      <tr
        className={`flex items-center px-4 py-3 bg-grayscale-0 border border-solid border-grayscale-40 ${data.length > 0 ? 'rounded-t-md' : 'rounded-md'}`}
      >
        {headers.map((header) => (
          <Header
            key={header.id}
            id={header.id}
            label={header.label}
            width={width}
          />
        ))}
      </tr>
    </thead>

    <tbody>
      { data[0].id === '' || data.length === 0 ? (
        <tr className='w-full flex item-center justify-center'>
          {emptyStateMessage}
        </tr>
      ) : (data.map((row, index) => (
        <Row
          key={index}
          index={index}
          headers={headers}
          row={row}
          totalRows={data.length}
          width={width}
        />
      )))}
    </tbody>
  </table>
  );
};
