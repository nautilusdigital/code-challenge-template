import { useEffect, useReducer, useState } from 'react';
import { array, object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import { cacheInitialState, useReducerCreateCase } from './reducer';
import { useCacheContext, useFetch } from '../../hooks';

const createCaseSchema = object({
  clientId: string().required('Client is required'),
  callerId: string().required('Caller is required'),
  userId: string().required('User is required'),
  issueTypeId: string().required('Issue Type is required'),
  regionid: string().required('Region is required'),
  fileNames: array().of(string()),
  notes: string().required('Notes are required'),
  nextReviewDate: string(),
});

export const useCreateCase = () => {
  const navigate = useNavigate();
  const [createCaseState, createCaseDispatcher] = useReducer(useReducerCreateCase, cacheInitialState);
  const { hookCacheContextState } = useCacheContext();
  const [errorMessage, setErrorMessage] = useState('');

  const getContacts = async () => {
    try {
      const { status, data } = await useFetch({
        method: 'GET',
        path: '/contact',
      });

      if (status === 200) {
        createCaseDispatcher({
          type: 'updateContactOptions',
          data: data.map((option: any) => ({
            id: option.id,
            name: `${option.firstName} ${option.lastName}`,
            label: `${option.firstName} ${option.lastName}`,
            value: `${option.firstName} ${option.lastName}`,
          })),
        });
      }
    } catch (error) {
      setErrorMessage('Could not get contacts. Please try again later.');
      console.error('Failed to get contacts', error);
    }
  };

  const getRegions = async () => {
    try {
      const { status, data } = await useFetch({
        method: 'GET',
        path: '/utils/select-options',
      });

      if (status === 200) {
        createCaseDispatcher({
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

  const createAttachments = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const { files } = event.target;

      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append('atta{chment', file);
        createCaseDispatcher({
          type: 'updateAttachments',
          data: [
            ...createCaseState.attachments,
            file.name,
          ],
        });
      });
    }
  };

  const uploadAttachments = async () => {
    try {
      const { status } = await useFetch({
        method: 'POST',
        path: '/cases/attachments',
        body: createCaseState.attachments,
      });

      if (status !== 201) setErrorMessage('Could not upload attachments');
    } catch (error) {
      setErrorMessage('Could not upload attachments');
      console.error('Failed to upload attachments', error);
    }
  };

  const createCase = async () => {
    try {
      const caseObject = await createCaseSchema.validate({
        clientId: createCaseState.client.id,
        callerId: createCaseState.caller.id,
        userId: hookCacheContextState.user.id,
        issueType: createCaseState.issueType.value,
        regionid: createCaseState.region.id,
        fileNames: createCaseState.attachments,
        notes: createCaseState.notes,
        nextReviewDate: createCaseState.reviewDate,
      });

      const { status, data } = await useFetch({
        method: 'POST',
        path: '/cases',
        body: caseObject,
      });

      if (status === 200) {
        navigate('/cases');
      } else {
        setErrorMessage('Could not create case. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('Could not create case. All fields are required.');
      console.error('Failed to create case', error);
    }
  };

  useEffect(() => {
    getContacts();
    getRegions();
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [createCaseState]);

  return {
    hookCreateCaseState: createCaseState,
    hookCreateCaseDispatcher: createCaseDispatcher,
    hookErrorMessage: errorMessage,
    hookCreateAttachments: createAttachments,
    hookUploadAttachments: uploadAttachments,
    hookNavigate: navigate,
    hookCreateCase: createCase,
  };
};
