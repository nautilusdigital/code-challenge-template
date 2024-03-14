import React from 'react';
import { TextButton } from 'awesome-gcl';
import { TablePropTypes } from './types';
import { Header, Row } from './Components';

export const Table = ({ headers, data }: TablePropTypes) => (
  <table
    className='w-full'
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
          />
        ))}
      </tr>
    </thead>

    <tbody>
      {data.length > 0 ? data.map((row, index) => (
        <Row
          key={index}
          index={index}
          headers={headers}
          row={row}
        />
      )) : (
        <tr className='w-full flex item-center justify-center'>
          <td className='flex flex-col items-center justify-center mt-[140px]'>
            <p className='flex-grow'>No contacts yet</p>
            <div>
              <TextButton
                type='button'
                size='large'
                theme='primary'
                handleClick={() => console.log('TODO redirect to create contact page')}
              >
                Click here
              </TextButton>
              {' '}
              to add your first contact.
            </div>
          </td>
        </tr>
      )}
    </tbody>
  </table>
);
