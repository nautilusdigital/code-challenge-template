import { useReducer } from 'react';
import { cacheInitialState, useReducerContact } from './reducer';

export const useContacts = () => {
  const [contactState, contactDispatcher] = useReducer(useReducerContact, cacheInitialState);

  return {
    hookContactState: contactState,
    hookContactDispatcher: contactDispatcher,
  };
};
