import React from 'react';
import { Button, Input, TextButton } from 'awesome-gcl';
import { AppWrapper, Table } from '../../components';
import { useContacts } from './useLogic';
import { PATH } from '../../utils';

export const Contacts = () => {
  const hook = useContacts();

  return (
    <AppWrapper>
      <header className="w-full flex items-start justify-between mt-10 mb-[60px]">
        <h1 className="text-[32px] font-bold">
          {PATH.get('CONTACT').TITLE}
        </h1>
        <Button
          type='button'
          size='large'
          theme='primary'
          handleClick={() => hook.hookNavigate(PATH.get('CREATE_CONTACT').URL)}
        >
          + New Contact
        </Button>
      </header>
      <div className="w-full flex flex-col items-start justify-start gap-8">
        <div className='flex items-center justify-start gap-4'>
          <Input
            type='text'
            size='large'
            placeholder='Enter First Name'
            value={hook.hookContactState.firstName}
            onChange={(e) => hook.hookContactDispatcher({ type: 'updateFirstName', data: e.target.value })}
            label='First Name'
          />
          <Input
            type='text'
            size='large'
            placeholder='Enter Last Name'
            value={hook.hookContactState.lastName}
            onChange={(e) => hook.hookContactDispatcher({ type: 'updateLastName', data: e.target.value })}
            label='Last Name'
          />
          <Input
            type='tel'
            size='large'
            placeholder='Enter Phone Number'
            value={hook.hookContactState.phoneNumber}
            onChange={(e) => hook.hookContactDispatcher({ type: 'updatePhoneNumber', data: e.target.value })}
            label='Phone Number'
          />
        </div>
        <Table
          headers={[
            { id: 'category', label: 'Category' },
            { id: 'firstName', label: 'First Name' },
            { id: 'lastName', label: 'Last Name' },
            { id: 'age', label: 'Age' },
            { id: 'email', label: 'Email Address' },
            { id: 'phone', label: 'Phone' },
            { id: 'city', label: 'City' },
            { id: 'region', label: 'Region' },
          ]}
          data={hook.hookContactState.contacts}
          emptyStateMessage={(
            <td className='flex flex-col items-center justify-center mt-[140px]'>
              <p className='font-bold'>No contacts yet</p>
              <div>
                <TextButton
                  type='button'
                  size='large'
                  theme='primary'
                  handleClick={() => hook.hookNavigate(PATH.get('CREATE_CONTACT').URL)}
                >
                  Click here
                </TextButton>
                {' '}
                to add your first contact.
              </div>
            </td>
          )}
        />
      </div>
    </AppWrapper>
  );
};
