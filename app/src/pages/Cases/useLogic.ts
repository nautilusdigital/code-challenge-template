import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cacheInitialState, useReducerCase } from './reducer';
import { useFetch } from '../../hooks';

export const useCases = () => {
  const navigate = useNavigate();
  const [caseState, caseDispatcher] = useReducer(useReducerCase, cacheInitialState);
  const [errorMessage, setErrorMessage] = useState('');

  const getCases = async () => {
    try {
      // const { status, data } = await useFetch({
      //   method: 'GET',
      //   path: '/cases',
      //   queryParams: {
      //     firstName: caseState.firstName,
      //     lastName: caseState.lastName,
      //     phone: caseState.phoneNumber,
      //     caseId: caseState.caseId,
      //   },
      // });

      const { status, data } = await Promise.resolve({
        status: 200,
        data: [
          {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            client: 'John Does',
            issueType: 'youth transitioning',
            notes: 'any note',
            nextReviewDate: '2024-01-01',
            createdBy: 'Hudson Smith',
            status: 'Open',
          },
        ],
      });

      if (status === 200) caseDispatcher({ type: 'updateCases', data });
    } catch (error) {
      setErrorMessage('Could not get cases. Please try again later.');
      console.error('Failed to get cases', error);
    }
  };

  useEffect(() => {
    getCases();
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [caseState]);

  return {
    hookNavigate: navigate,
    hookCaseState: caseState,
    hookCaseDispatcher: caseDispatcher,
    hookErrorMessage: errorMessage,
  };
};
