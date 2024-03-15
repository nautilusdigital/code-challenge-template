import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cacheInitialState, useReducerContact } from './reducer';
import { useFetch } from '../../hooks';

export const useContacts = () => {
  const navigate = useNavigate();
  const [contactState, contactDispatcher] = useReducer(useReducerContact, cacheInitialState);
  const [errorMessage, setErrorMessage] = useState('');

  const getContacts = async () => {
    try {
      const { status, data } = await useFetch({
        method: 'GET',
        path: '/contact',
        queryParams: {
          firstName: contactState.firstName,
          lastName: contactState.lastName,
          phone: contactState.phoneNumber,
        },
      });

      if (status === 200) contactDispatcher({ type: 'updateContacts', data });
    } catch (error) {
      setErrorMessage('Could not get contacts. Please try again later.');
      console.error('Failed to get contacts', error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return {
    hookContactState: contactState,
    hookContactDispatcher: contactDispatcher,
    hookNavigate: navigate,
    hookErrorMessage: errorMessage,
  };
};
