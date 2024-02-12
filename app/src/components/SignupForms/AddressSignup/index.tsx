import React from 'react';
import { Input, Select } from 'awesome-gcl';
import { SignupAddressPropTypes } from '../../../pages/SignUp/types';

type AddressSignupPropTypes = {
  addressUserInfo: SignupAddressPropTypes
  updateFormHandler: (value: Record<string, any>) => void
  errors: string[]
}

export const AddressSignup = ({
  addressUserInfo, updateFormHandler, errors,
}: AddressSignupPropTypes) => (
  <div className="grid grid-cols-4 gap-x-4 gap-y-8 mb-8">
    <Input
      size='large'
      type='text'
      label='Street Name'
      value={addressUserInfo.address}
      onChange={(event) => updateFormHandler({
        address: event.target.value,
      })}
      additionalClasses={{
        wrapper: ['col-span-3'],
        inputWrapper: ['w-full'],
        input: [errors.includes('address') ? 'w-full border-support-alert-50' : 'w-full'],
      }}
    />

    <Input
      size='large'
      type='text'
      label='Unit Number'
      value={addressUserInfo.unitNumber}
      onChange={(event) => updateFormHandler({
        unitNumber: event.target.value,
      })}
      additionalClasses={{
        inputWrapper: ['w-full'],
        input: [errors.includes('unitNumber') ? 'w-full border-support-alert-50' : 'w-full'],
      }}
    />

    <Input
      size='large'
      type='text'
      label='City'
      value={addressUserInfo.city}
      placeholder='Enter your city'
      onChange={(event) => updateFormHandler({
        city: event.target.value,
      })}
      additionalClasses={{
        wrapper: ['col-span-2'],
        inputWrapper: ['w-full'],
        input: [errors.includes('city') ? 'w-full border-support-alert-50' : 'w-full'],
      }}
    />

    <Select
      size="large"
      label="Province"
      placeholder="Select"
      selected={addressUserInfo.province}
      onChange={(event) => updateFormHandler({
        province: event,
      })}
      options={[
        {
          id: 'BC',
          label: 'BC',
        },
      ]}
      additionalClasses={{
        wrapper: ['w-full col-span-2'],
        inputWrapper: [errors.includes('province.id') ? 'border-support-alert-50' : 'border-grayscale-40'],
      }}
    />

    <Input
      size='large'
      type='text'
      label='Postal Code'
      value={addressUserInfo.postalCode}
      placeholder="e.g A1A B2B"
      onChange={(event) => updateFormHandler({
        postalCode: event.target.value,
      })}
      additionalClasses={{
        wrapper: ['col-span-4'],
        inputWrapper: ['w-full'],
        input: [errors.includes('postalCode') ? 'w-full border-support-alert-50' : 'w-full'],
      }}
    />

    <Input
      size='large'
      type='text'
      label='Mobile Phone Number'
      value={addressUserInfo.phoneNumber}
      placeholder="+1 (xxx) xxx-xxxx"
      onChange={(event) => updateFormHandler({
        phoneNumber: event.target.value,
      })}
      additionalClasses={{
        wrapper: ['col-span-4'],
        inputWrapper: ['w-full'],
        input: [errors.includes('phoneNumber') ? 'w-full border-support-alert-50' : 'w-full'],
      }}
    />
  </div>
);
