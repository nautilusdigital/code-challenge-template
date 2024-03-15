import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { cacheInitialState, useReducerCase } from './reducer';
import { useFetch } from '../../hooks';
import { reportCacheInitialState, useReducerReport } from './reportReducer';
import { createCSV, downloadCSV } from '../../utils';

const reportSchema = object({
  startDate: string().required('Start date is required'),
  endDate: string().required('End date is required'),
  regionsId: string().required('Region is required'),
});

export const useCases = () => {
  const navigate = useNavigate();
  const [caseState, caseDispatcher] = useReducer(useReducerCase, cacheInitialState);
  const [reportState, reportDispatcher] = useReducer(useReducerReport, reportCacheInitialState);
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

  const getRegions = async () => {
    try {
      // const { status, data } = await useFetch({
      //   method: 'GET',
      //   path: '/utils/select-options',
      // });

      const { status, data } = await Promise.resolve({
        status: 200,
        data: {
          regions: [
            {
              id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              value: 'British Columbia',
            },
          ],
        },
      });

      if (status === 200) {
        reportDispatcher({
          type: 'updateRegions',
          data: data.regions.map((region) => ({
            id: region.id,
            value: region.value,
          })),
        });
      }
    } catch (error) {
      setErrorMessage('Could not get regions. Please try again later.');
      console.log('Failed contact creation', error);
    }
  };

  const generateReport = async () => {
    try {
      const report = await reportSchema.validate({
        startDate: reportState.startDate,
        endDate: reportState.endDate,
        regionsId: reportState.regionsId.join(';'),
      });

      // const { status, data } = await useFetch({
      //   method: 'GET',
      //   path: '/reports',
      //   queryParams: report
      // })

      const { status, data } = await Promise.resolve({
        status: 200,
        data: [
          {
            region: 'British Columbia',
            open: 10,
            closed: 5,
          },
        ],
      });

      if (status === 200) {
        const csvData = createCSV({ data });
        downloadCSV({ data: csvData, filename: 'report.csv' });
      } else {
        setErrorMessage('Failed to generate report. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('Failed to generate report. Please try again later.');
      console.error('Failed to generate report', error);
    }
  };

  useEffect(() => {
    getCases();
    getRegions();
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [caseState, reportState]);

  return {
    hookNavigate: navigate,
    hookCaseState: caseState,
    hookCaseDispatcher: caseDispatcher,
    hookErrorMessage: errorMessage,
    hookReportState: reportState,
    hookReportDispatcher: reportDispatcher,
    hookGenerateReport: generateReport,
  };
};
