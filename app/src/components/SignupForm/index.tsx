import React from 'react';
import { Input } from 'awesome-gcl';
import { SignupBasicPropTypes } from '../../pages/SignUp/types';
import { SIGN_UP_FORM } from './const';

type SignupFormPropTypes = {
  basicUserInfo: SignupBasicPropTypes
  updateFormHandler: (value: Record<string, any>) => void
  errors: string[]
}

export const SignupForm = ({
  updateFormHandler, basicUserInfo, errors,
}: SignupFormPropTypes) => (
  <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-8">
    <Input
      size='large'
      type='text'
      label={SIGN_UP_FORM.FIRST_NAME.LABEL}
      value={basicUserInfo.firstName}
      placeholder={SIGN_UP_FORM.FIRST_NAME.PLACEHOLDER}
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
      label={SIGN_UP_FORM.LAST_NAME.LABEL}
      value={basicUserInfo.lastName}
      placeholder={SIGN_UP_FORM.LAST_NAME.PLACEHOLDER}
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
      label={SIGN_UP_FORM.EMAIL.LABEL}
      value={basicUserInfo.email}
      placeholder={SIGN_UP_FORM.EMAIL.PLACEHOLDER}
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
      label={SIGN_UP_FORM.PASSWORD.LABEL}
      value={basicUserInfo.password}
      placeholder={SIGN_UP_FORM.PASSWORD.PLACEHOLDER}
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
