import { Button, TextButton } from 'awesome-gcl';
import { useSignup } from './logic';
import { BasicSignupInfo, AddressSignup } from '../../components';

export const SignUp = () => {
  const hook = useSignup();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[470px] flex flex-col justify-center items-start">
        <h1 className="font-bold text-[32px] mb-[60px]">{hook.currentStep === 'ADDRESS' ? 'Address Information' : 'Welcome'}</h1>
        {hook.renderError && (
          <div className='border-4 border-solid rounded-lg border-support-alert-50 bg-white-100 text-support-alert-50 p-4 mb-8'>
            Please fill out the miss field before continuing. If you have any questions, please contact the support team.
          </div>
        )}

        {hook.currentStep === 'BASIC' && (
          <BasicSignupInfo
            updateFormHandler={hook.updateFormHandler}
            basicUserInfo={hook.createUserBasicState}
            errors={hook.errors}
          />
        )}

        {hook.currentStep === 'ADDRESS' && (
          <AddressSignup
            updateFormHandler={hook.updateAddressFormHandler}
            addressUserInfo={hook.createUserAddressState}
            errors={hook.errors}
          />
        )}

        <Button
          size='large'
          type='button'
          theme='primary'
          handleClick={hook.signupButtonHandler}
          additionalClasses={{
            button: ['w-full'],
          }}
        >
          {hook.currentStep === 'ADDRESS' ? 'Continue' : 'Create Account'}
        </Button>

        <div className='flex gap-2 mt-6'>
          <p>Already have an account?</p>
          <TextButton
            handleClick={hook.loginNavigateHandler}
            size='large'
            theme='primary'
            type='button'
          >
            log in.
          </TextButton>
        </div>
      </div>
    </div>
  );
};
