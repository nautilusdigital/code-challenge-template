import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { number, object, string } from 'yup';
import { cacheInitialState, useReducerCreateContact } from './reducer';
import { PATH } from '../../utils';
import { useFetch } from '../../hooks';

const createContactSchema = object({
  category: string().required('Category is required'),
  firstName: string().required('First Name is required'),
  lastName: string().required('Last Name is required'),
  age: number().required('Age is required'),
  email: string().required('Email is required'),
  phone: string().required('Phone is required'),
  city: string().required('City is required'),
  regionId: string().required('Region is required'),
  otherRegion: string(),
});

export const useCreateContact = () => {
  const navigate = useNavigate();
  const [createContactState, createContactDispatcher] = useReducer(useReducerCreateContact, cacheInitialState);
  const [errorMessage, setErrorMessage] = useState('');

  const createContact = async () => {
    try {
      const contact = await createContactSchema.validate({
        category: createContactState.category.value,
        firstName: createContactState.firstName,
        lastName: createContactState.lastName,
        age: createContactState.age,
        email: createContactState.email,
        phone: createContactState.phone,
        city: createContactState.city,
        regionId: createContactState.region.id,
        otherRegion: createContactState.otherRegion,
      });

      const { status } = await useFetch({
        method: 'POST',
        path: '/contact',
        body: contact,
      });

      if (status === 200) navigate(PATH.get('CONTACT').URL);
      else setErrorMessage('Could not create contact');
    } catch (error) {
      setErrorMessage('All fields are required.');
      console.error('Failed contact creation', error);
    }
  };

  const getRegions = async () => {
    try {
      const { status, data } = await useFetch({
        method: 'GET',
        path: '/utils/select-options',
      });

      if (status === 200) {
        createContactDispatcher({
          type: 'updateRegionOptions',
          data: data.regions.map((region: any) => ({
            id: region.id,
            label: region.value,
            value: region.value,
          })),
        });
      }
    } catch (error) {
      setErrorMessage('Could not get regions. Please try again later.');
      console.error('Failed contact creation', error);
    }
  };

  useEffect(() => {
    getRegions();
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [createContactState]);

  return {
    hookCreateContactState: createContactState,
    hookCreateContactDispatcher: createContactDispatcher,
    hookNavigate: navigate,
    hookCreateContact: createContact,
    hookErrorMessage: errorMessage,
  };
};
