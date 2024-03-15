import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { cacheInitialState, useReducerContact } from './reducer';

export const useContacts = () => {
  const navigate = useNavigate();
  const [contactState, contactDispatcher] = useReducer(useReducerContact, cacheInitialState);

  return {
    hookContactState: contactState,
    hookContactDispatcher: contactDispatcher,
    hookNavigate: navigate,
  };
};
