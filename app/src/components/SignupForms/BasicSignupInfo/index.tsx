import React from 'react';
import { Input } from 'awesome-gcl';
import { SignupBasicPropTypes } from '../../../pages/SignUp/types';

type BasicSignupInfoPropTypes = {
  basicUserInfo: SignupBasicPropTypes
  updateFormHandler: (value: Record<string, any>) => void
  errors: string[]
}

export const BasicSignupInfo = ({
  updateFormHandler, basicUserInfo, errors,
}: BasicSignupInfoPropTypes) => (
  <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-8">
    <Input
      size='large'
      type='text'
      label='First Name'
      value={basicUserInfo.firstName}
      placeholder='First Name'
      onChange={(event) => updateFormHandler({
        firstName: event.target.value,
      })}
      additionalClasses={{
        inputWrapper: ['w-full'],
        input: [errors.includes('firstName') ? 'w-full border-support-alert-50' : 'w-full'],
      }}

    />
    <Input
      size='large'
      type='text'
      label='Last Name'
      value={basicUserInfo.lastName}
      placeholder='Last Name'
      onChange={(event) => updateFormHandler({
        lastName: event.target.value,
      })}

      additionalClasses={{
        inputWrapper: ['w-full'],
        input: [errors.includes('lastName') ? 'w-full border-support-alert-50' : 'w-full'],
      }}
    />

    <Input
      size='large'
      type='email'
      label='Email'
      value={basicUserInfo.email}
      placeholder='Enter your email'
      onChange={(event) => updateFormHandler({
        email: event.target.value,
      })}
      additionalClasses={{
        wrapper: ['col-span-2'],
        inputWrapper: ['w-full'],
        input: [errors.includes('email') ? 'w-full border-support-alert-50' : 'w-full'],
      }}
    />

    <Input
      size='large'
      type='password'
      label='Password'
      value={basicUserInfo.password}
      placeholder='Enter your password'
      onChange={(event) => updateFormHandler({
        password: event.target.value,
      })}
      additionalClasses={{
        wrapper: ['col-span-2'],
        inputWrapper: ['w-full'],
        input: [errors.includes('password') ? 'w-full border-support-alert-50' : 'w-full'],
      }}
    />
  </div>
);
