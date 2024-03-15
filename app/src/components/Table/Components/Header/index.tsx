import React from 'react';
import { HeaderPropTypes } from './types';

export const Header = ({ id, label, width }: HeaderPropTypes) => (
  <th
    key={`header-${id}`}
    className={'font-semibold text-grayscale-100 flex items-center justify-start flex-grow'}
    style={{ width: `${width}%` }}
  >
    {label}
  </th>
);
