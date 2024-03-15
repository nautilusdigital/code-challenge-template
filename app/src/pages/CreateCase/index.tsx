import React from 'react';
import { Button, Select } from 'awesome-gcl';
import { AppWrapper, ErrorMessage } from '../../components';
import { PATH } from '../../utils';
import { useCreateCase } from './useLogic';

export const CreateCase = () => {
  const hook = useCreateCase();

  return (
    <AppWrapper>
      <header className="w-full flex items-start justify-between mt-10 mb-[60px]">
      <h1 className="text-[32px] font-bold">
        {PATH.get('CREATE_CASE').TITLE}
      </h1>
    </header>

    {hook.hookErrorMessage && (
      <ErrorMessage message={hook.hookErrorMessage} />
    )}

    <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
      <Select
          size='medium'
          label='Caller'
          selected={hook.hookCreateCaseState.caller}
          onChange={(option) => hook.hookCreateCaseDispatcher({
            type: 'updateCaller',
            data: {
              id: option.id,
              label: option.label,
              value: option.value,
            },
          })}
          placeholder='Select'
          options={hook.hookCreateCaseState.contactOptions}
      />
      <Select
          size='medium'
          label='Client'
          selected={hook.hookCreateCaseState.client}
          onChange={(option) => hook.hookCreateCaseDispatcher({
            type: 'updateClient',
            data: {
              id: option.id,
              label: option.label,
              value: option.value,
            },
          })}
          placeholder='Select'
          options={hook.hookCreateCaseState.contactOptions}
      />
      <Select
          size='medium'
          label='Issue Type'
          selected={hook.hookCreateCaseState.issueType}
          onChange={(option) => hook.hookCreateCaseDispatcher({
            type: 'updateIssueType',
            data: {
              id: option.id,
              label: option.label,
              value: option.value,
            },
          })}
          placeholder='Select'
          options={[]}
      />
      <Select
          size='medium'
          label='Region'
          selected={hook.hookCreateCaseState.region}
          onChange={(option) => hook.hookCreateCaseDispatcher({
            type: 'updateRegion',
            data: {
              id: option.id,
              label: option.label,
              value: option.value,
            },
          })}
          placeholder='Select'
          options={hook.hookCreateCaseState.regionOptions}
      />
      <div className='col-span-2'>
        <h2 className='font-semibold text-base mb-3'>Attachment(s)</h2>
        <div className='flex items-center justify-start gap-4 mb-2'>
          <label
            htmlFor="attachments"
            className='py-2.5 px-5 border border-solid rounded-md border-grayscale-40 bg-white-100 text-grayscale-100 text-sm font-semibold w-fit mr-4'
          >
            Choose File
          </label>
          {hook.hookCreateCaseState.attachments.map((attachment: any, index: number) => (
            <p
              key={index}
              className='rounded-full bg-grayscale-0 px-3 py-2 text-grayscale-100 text-xs'
            >
              {attachment}
            </p>
          ))}
          <input
            type="file"
            name="attachments"
            id="attachments"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => hook.hookCreateAttachments(event)}
            className='opacity-0 absolute -top-1 hidden'
          />
        </div>
        <Button
          size='medium'
          type='button'
          theme='primary'
          handleClick={hook.hookUploadAttachments}
          additionalClasses={{
            button: ['mb-4'],
          }}
        >
          Upload
        </Button>

        <label
          htmlFor="notes"
          className='font-semibold text-base'
        >
          Notes
        </label>
        <textarea
          id='notes'
          className='w-full h-40 border border-solid border-grayscale-40 rounded-md p-4 mt-2'
          placeholder='Notes'
          value={hook.hookCreateCaseState.notes}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => hook.hookCreateCaseDispatcher({
            type: 'updateNotes',
            data: event.target.value,
          })}
        />
      </div>
      <div>
        <label
          htmlFor="reviewDate"
          className='font-semibold text-base'
        >
          Next Review Date
        </label>
        <input
          id='reviewDate'
          type='date'
          placeholder='Select Date'
          value={hook.hookCreateCaseState.reviewDate}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => hook.hookCreateCaseDispatcher({
            type: 'updateReviewDate',
            data: event.target.value,
          })}
          className='w-full border border-solid border-grayscale-40 rounded-md p-4 mt-2'
        />
      </div>
      <div className='w-full flex items-end justify-end gap-6'>
        <Button
          type='button'
          size='large'
          theme='tertiary'
          handleClick={() => hook.hookNavigate(PATH.get('CASES').URL)}
        >
          Cancel
        </Button>
        <Button
          type='button'
          size='large'
          theme='primary'
          handleClick={hook.hookCreateCase}
        >
          Create Contact
        </Button>
      </div>
    </div>
    </AppWrapper>
  );
};
