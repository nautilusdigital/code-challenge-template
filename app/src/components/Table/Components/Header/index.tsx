import React from 'react';
import { HeaderPropTypes } from './types';

export const Header = ({ id, label }: HeaderPropTypes) => (
  <th
    key={`header-${id}`}
    className='text-xs font-semibold text-grayscale-100 flex items-center justify-start flex-grow'
  >
    {label}
  </th>
);
