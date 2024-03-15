import React from 'react';
import {
  Button, Input, Modal, TextButton, IconButton,
  Checkbox,
} from 'awesome-gcl';
import { AppWrapper, ErrorMessage, Table } from '../../components';
import { ICONS, PATH } from '../../utils';
import { useCases } from './useLogic';

export const Cases = () => {
  const hook = useCases();

  return (
    <AppWrapper>
      <header className="w-full flex items-start justify-between mt-10 mb-[60px]">
        <h1 className="text-[32px] font-bold">
          {PATH.get('CASES').TITLE}
        </h1>
        <div className='flex items-center justify-end gap-6'>
          <Button
            type='button'
            size='large'
            theme='secondary'
            handleClick={() => hook.hookReportDispatcher({
              type: 'updateIsOpen',
              data: true,
            })}
          >
            + Create Report
          </Button>
          <Button
            type='button'
            size='large'
            theme='primary'
            handleClick={() => hook.hookNavigate(PATH.get('CREATE_CASE').URL)}
          >
            + New Case
          </Button>
        </div>
      </header>

      {hook.hookErrorMessage && (
        <ErrorMessage message={hook.hookErrorMessage} />
      )}

      <div className="w-full flex flex-col items-start justify-start gap-8">
        <div className='flex items-center justify-start gap-4'>
          <Input
            type='text'
            size='large'
            placeholder='Enter First Name'
            value={hook.hookCaseState.firstName}
            onChange={(e) => hook.hookCaseDispatcher({ type: 'updateFirstName', data: e.target.value })}
            label='First Name'
          />
          <Input
            type='text'
            size='large'
            placeholder='Enter Last Name'
            value={hook.hookCaseState.lastName}
            onChange={(e) => hook.hookCaseDispatcher({ type: 'updateLastName', data: e.target.value })}
            label='Last Name'
          />
          <Input
            type='tel'
            size='large'
            placeholder='Enter Phone Number'
            value={hook.hookCaseState.phoneNumber}
            onChange={(e) => hook.hookCaseDispatcher({ type: 'updatePhoneNumber', data: e.target.value })}
            label='Phone Number'
          />
          <Input
            type='tel'
            size='large'
            placeholder='Enter case Number'
            value={hook.hookCaseState.caseId}
            onChange={(e) => hook.hookCaseDispatcher({ type: 'updateCaseId', data: e.target.value })}
            label='Case ID'
          />
        </div>
        <Table
          headers={[
            { id: 'id', label: 'Case ID' },
            { id: 'client', label: 'Client' },
            { id: 'issueType', label: 'Issue Types' },
            { id: 'createdBy', label: 'Created By' },
            { id: 'notes', label: 'Notes' },
            { id: 'nextReviewDate', label: 'Next Review Date' },
            { id: 'status', label: 'Status' },
          ]}
          data={hook.hookCaseState.cases}
          emptyStateMessage={(
            <td className='flex flex-col items-center justify-center mt-[140px]'>
              <p className='font-bold'>No results found</p>
              <div className='max-w-[250px] text-center'>
                Refine your filtering criteria or {' '}
                <TextButton
                  type='button'
                  size='large'
                  theme='primary'
                  handleClick={() => hook.hookNavigate(PATH.get('CREATE_CASE').URL)}
                >
                  Click here
                </TextButton>
                {' '}
                to create a new Case.
              </div>
            </td>
          )}
        />
      </div>

      <Modal
        isOpen={hook.hookReportState.isOpen}
        additionalClasses={{
          dialog: ['w-[540px]'],
        }}
      >
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl text-grayscale-100 font-bold'>Create Report</h2>
          <IconButton
            type='button'
            size='large'
            theme='tertiary'
            handleClick={() => hook.hookReportDispatcher({
              type: 'updateIsOpen',
              data: false,
            })}
          >
            <img src={ICONS.get('CLOSE_ICON').SRC} alt={ICONS.get('CLOSE_ICON').ALT} />
          </IconButton>
        </div>
        <label
          htmlFor="dateRange"
          className='font-semibold text-base'
        >
          Select Report Period
        </label>
        <div className='w-full flex items-center justify-between gap-8 mb-4'>
          <input
            id='dateRange'
            type='date'
            placeholder='Select Date'
            value={hook.hookReportState.startDate}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => hook.hookReportDispatcher({
              type: 'updateStartDate',
              data: event.target.value,
            })}
            className='w-full border border-solid border-grayscale-40 rounded-md p-4 mt-2'
          />
          <input
            id='dateRange'
            type='date'
            placeholder='Select Date'
            value={hook.hookReportState.endDate}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => hook.hookReportDispatcher({
              type: 'updateEndDate',
              data: event.target.value,
            })}
            className='w-full border border-solid border-grayscale-40 rounded-md p-4 mt-2'
          />
        </div>
        <label
          htmlFor="dateRange"
          className='font-semibold text-base'
        >
          Select Report Period
        </label>
        <div className='grid grid-cols-2 justify-items-start mt-2 gap-4'>
          {hook.hookReportState.regions.map((region: any) => (
            <Checkbox
              key={region.id}
              label={region.value}
              checked={hook.hookReportState.regionsId?.find((item: any) => item === region.id)}
              size='medium'
              handleClick={() => hook.hookReportDispatcher({
                type: 'updateRegionsId',
                data: region.id,
              })}
            />
          ))}
        </div>
        <div className='flex mt-4 items-center justify-end gap-6'>
          <Button
            type='button'
            size='large'
            theme='tertiary'
            handleClick={() => hook.hookReportDispatcher({
              type: 'updateIsOpen',
              data: false,
            })}
          >
            Cancel
          </Button>
          <Button
            type='button'
            size='large'
            theme='primary'
            handleClick={hook.hookGenerateReport}
          >
            Create Report
          </Button>
        </div>
      </Modal>
    </AppWrapper>
  );
};
