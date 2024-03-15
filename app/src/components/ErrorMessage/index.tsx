import React from 'react';
import { ErrorMessagePropTypes } from './types';

export const ErrorMessage = ({ message }: ErrorMessagePropTypes) => (
  <div className="p-4 border-2 border-solid rounded-md border-support-alert-50 text-support-alert-50">
    {message}
  </div>
);
