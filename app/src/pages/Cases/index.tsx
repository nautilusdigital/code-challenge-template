import React from 'react';
import { Button, Input, TextButton } from 'awesome-gcl';
import { AppWrapper, ErrorMessage, Table } from '../../components';
import { PATH } from '../../utils';
import { useCases } from './useLogic';

export const Cases = () => {
  const hook = useCases();

  return (
    <AppWrapper>
      <header className="w-full flex items-start justify-between mt-10 mb-[60px]">
        <h1 className="text-[32px] font-bold">
          {PATH.get('CASES').TITLE}
        </h1>
        <Button
          type='button'
          size='large'
          theme='primary'
          handleClick={() => hook.hookNavigate(PATH.get('CREATE_CASE').URL)}
        >
          + New Case
        </Button>
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
    </AppWrapper>
  );
};
