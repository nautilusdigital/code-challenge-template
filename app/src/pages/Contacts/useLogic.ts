import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { cacheInitialState, useReducerContact } from './reducer';
import { useFetch } from '../../hooks';

export const useContacts = () => {
  const navigate = useNavigate();
  const [contactState, contactDispatcher] = useReducer(useReducerContact, cacheInitialState);

  const getContacts = async () => {
    // const response = await useFetch({
    //   method: 'GET',
    //   path: '/contact',
    // queryParams: {
    //   firstName: contactState.firstName
    //   lastName: contactState.lastName
    //   phone: contactState.phoneNumber
    // }
    // });

    const { status, data } = await Promise.resolve({
      status: 200,
      data: [
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          category: 'Family',
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          email: 'john@doe.com',
          phone: '+17777777777',
          city: 'Vancouver',
          region: 'British Columbia',
        },
      ],
    });

    if (status === 200) contactDispatcher({ type: 'updateContacts', data });
  };

  useEffect(() => {
    getContacts();
  }, []);

  return {
    hookContactState: contactState,
    hookContactDispatcher: contactDispatcher,
    hookNavigate: navigate,
  };
};
