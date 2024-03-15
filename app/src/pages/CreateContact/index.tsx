import React from 'react';
import { Button, Input, Select } from 'awesome-gcl';
import { AppWrapper, ErrorMessage } from '../../components';
import { PATH } from '../../utils';
import { useCreateContact } from './useLogic';

export const CreateContact = () => {
  const hook = useCreateContact();
  return (
  <AppWrapper>
    <header className="w-full flex items-start justify-between mt-10 mb-[60px]">
      <h1 className="text-[32px] font-bold">
        {PATH.get('CREATE_CONTACT').TITLE}
      </h1>
    </header>

    {hook.hookErrorMessage && (
      <ErrorMessage message={hook.hookErrorMessage} />
    )}

    <div className='grid grid-cols-3 gap-6'>
      <Select
        size='large'
        label='Category'
        selected={hook.hookCreateContactState.category}
        onChange={(option) => hook.hookCreateContactDispatcher({
          type: 'updateCategory',
          data: {
            label: option.label,
            value: option.value,
          },
        })}
        placeholder='Select Category'
        options={[
          { label: 'Family', value: 'Family' },
          { label: 'Service Provider', value: 'Service Provider' },
          { label: 'Community Agency', value: 'Community Agency' },
          { label: 'Indigenous', value: 'Indigenous' },
          { label: 'Friend', value: 'Friend' },
          { label: 'Other', value: 'Other' },
        ]}
      />
      <Input
        type='text'
        size='large'
        placeholder='Enter First Name'
        value={hook.hookCreateContactState.firstName}
        onChange={(e) => hook.hookCreateContactDispatcher({ type: 'updateFirstName', data: e.target.value })}
        label='Caller First Name'
        additionalClasses={{
          inputWrapper: ['w-full'],
          input: ['w-full'],
        }}
      />
      <Input
        type='text'
        size='large'
        placeholder='Enter Last Name'
        value={hook.hookCreateContactState.lastname}
        onChange={(e) => hook.hookCreateContactDispatcher({ type: 'updateLastName', data: e.target.value })}
        label='Caller Last Name'
        additionalClasses={{
          inputWrapper: ['w-full'],
          input: ['w-full'],
        }}
      />
      <Input
        type='text'
        size='large'
        placeholder='Enter Age'
        value={hook.hookCreateContactState.age}
        onChange={(e) => hook.hookCreateContactDispatcher({ type: 'updateAge', data: e.target.value })}
        label='Caller Age'
        additionalClasses={{
          inputWrapper: ['w-full'],
          input: ['w-full'],
        }}
      />
      <Input
        type='text'
        size='large'
        placeholder='Enter email'
        value={hook.hookCreateContactState.email}
        onChange={(e) => hook.hookCreateContactDispatcher({ type: 'updateEmail', data: e.target.value })}
        label='Caller Email Address'
        additionalClasses={{
          inputWrapper: ['w-full'],
          input: ['w-full'],
        }}
      />
      <Input
        type='text'
        size='large'
        placeholder='(000) 000 0000'
        value={hook.hookCreateContactState.phone}
        onChange={(e) => hook.hookCreateContactDispatcher({ type: 'updatePhone', data: e.target.value })}
        label='Caller Phone'
        additionalClasses={{
          inputWrapper: ['w-full'],
          input: ['w-full'],
        }}
      />
      <Select
        size='large'
        label='Region'
        selected={hook.hookCreateContactState.region}
        onChange={(option) => hook.hookCreateContactDispatcher({
          type: 'updateRegion',
          data: {
            id: option.id,
            label: option.label,
            value: option.value,
          },
        })}
        placeholder='Select Region'
        options={hook.hookCreateContactState.regionOptions}
      />
      {hook.hookCreateContactState.region.label === 'Other' && (
        <Input
          type='text'
          size='large'
          placeholder='Enter region'
          value={hook.hookCreateContactState.regionOther}
          onChange={(e) => hook.hookCreateContactDispatcher({ type: 'updateRegionOther', data: e.target.value })}
          label='Region'
          additionalClasses={{
            inputWrapper: ['w-full'],
            input: ['w-full'],
          }}
        />
      )}
      <Input
        type='text'
        size='large'
        placeholder='Enter city'
        value={hook.hookCreateContactState.city}
        onChange={(e) => hook.hookCreateContactDispatcher({ type: 'updateCity', data: e.target.value })}
        label='City'
        additionalClasses={{
          inputWrapper: ['w-full'],
          input: ['w-full'],
        }}
      />
    </div>

    <div className='w-full mt-24 flex items-center justify-end gap-6'>
      <Button
        type='button'
        size='large'
        theme='tertiary'
        handleClick={() => hook.hookNavigate(PATH.get('CONTACT').URL)}
      >
        Cancel
      </Button>
      <Button
        type='button'
        size='large'
        theme='primary'
        handleClick={hook.hookCreateContact}
      >
        Create Contact
      </Button>
    </div>
  </AppWrapper>
  );
};
