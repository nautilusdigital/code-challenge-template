import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks';
import { validationAddressInfo, validationBasicInfo } from './validation';
import { useSignupReducer } from './reducer';

export const useSignup = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState<'BASIC' | 'ADDRESS'>('BASIC');

  const [errors, setErrors] = useState<string[]>([]);

  const [createUserBasicState, createUserBasicDispatcher] = useReducer(useSignupReducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [createUserAddressState, createUserAddressDispatcher] = useReducer(useSignupReducer, {
    address: '',
    unitNumber: '',
    city: '',
    province: {
      id: '',
      label: '',
    },
    postalCode: '',
    phoneNumber: '',
  });

  const [renderError, setRenderError] = useState<boolean>(false);
  const [blockSubmition, setBlockSubmition] = useState<boolean>(true);

  const updateFormHandler = (data: Record<string, any>) => {
    createUserBasicDispatcher({ data });
  };

  const updateAddressFormHandler = (data: Record<string, any>) => {
    createUserAddressDispatcher({ data });
  };

  const createUserHandler = async () => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const auth = await useFetch({
        method: 'POST',
        path: '/signup',
        body: {
          ...createUserBasicState,
          ...createUserAddressState,
          province: createUserAddressState.province.id,
        },
      });
      console.log(auth);

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
      if (currentStep === 'BASIC') await validationBasicInfo(createUserBasicState);

      if (currentStep === 'ADDRESS') await validationAddressInfo(createUserAddressState);

      setBlockSubmition(false);
    } catch (error: any) {
      setBlockSubmition(true);
      if (showError) {
        const errorsMessage: string[] = [];
        error?.inner.forEach((element: any) => {
          errorsMessage.push(element.path);
        });
        setErrors(errorsMessage);
      }
    }
  };

  const signupButtonHandler = async () => {
    try {
      if (blockSubmition) {
        validateForm(true);
        return;
      }

      if (currentStep === 'BASIC') {
        await validateForm();
        setCurrentStep('ADDRESS');
        setBlockSubmition(true);
        return;
      }
      if (currentStep === 'ADDRESS') {
        createUserHandler();
      }
    } catch (error) {
      setRenderError(true);
    }
  };

  const loginNavigateHandler = () => (navigate('/login', {
    replace: true,
  }));

  useEffect(() => {
    validateForm();
  }, [createUserBasicState, createUserAddressState]);

  return {
    createUserBasicState,
    updateFormHandler,
    createUserAddressState,
    updateAddressFormHandler,
    renderError,
    currentStep,
    loginNavigateHandler,
    signupButtonHandler,
    blockSubmition,
    errors,
  };
};
