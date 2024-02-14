import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks';
import { validationBasicInfo } from './validation';
import { useSignupReducer } from './reducer';
import { INIT_USER } from './const';

export const useSignup = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState<string[]>([]);

  const [createUserBasicState, createUserBasicDispatcher] = useReducer(useSignupReducer, INIT_USER);

  const [renderError, setRenderError] = useState<boolean>(false);

  const updateFormHandler = (data: Record<string, any>) => createUserBasicDispatcher({ data });

  const createAccountHandler = async () => {
    try {
      const auth = await useFetch({
        method: 'POST',
        path: '/signup',
        body: {
          ...createUserBasicState,
        },
      });

      if (auth?.status !== 204) {
        setRenderError(true);
      } else {
        navigate('/login', {
          replace: true,
        });
      }
    } catch (e: any) {
      setRenderError(true);
    }
  };

  const validateForm = async (showError = false) => {
    try {
      await validationBasicInfo(createUserBasicState);
    } catch (error: any) {
      if (showError) {
        const errorsMessage: string[] = [];
        error?.inner.forEach((element: any) => {
          errorsMessage.push(element.path);
        });
        setErrors(errorsMessage);
      }
    }
  };

  useEffect(() => {
    validateForm();
  }, [createUserBasicState]);

  return {
    createUserBasicState,
    updateFormHandler,
    renderError,
    createAccountHandler,
    errors,
  };
};
