import { Button, Input, TextButton } from 'awesome-gcl';
import { useLogin } from './useLogic';

export const Login = () => {
  const hook = useLogin();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[470px] flex flex-col justify-center items-start">
        <h1 className="font-bold text-[32px] mb-[60px]">Log in MEow</h1>
        {hook.renderError && (
          <div className='border-4 border-solid rounded-lg border-support-alert-50 bg-white-100 text-support-alert-50 p-4 mb-8'>
            Something went wrong. Please contact the support team
          </div>
        )}
        <Input
          size='large'
          type='email'
          label='Email'
          value={hook.email}
          placeholder='' // TBD
          onChange={(event) => hook.emailHandler(event)}
          additionalClasses={{
            inputWrapper: ['w-full'],
            input: ['w-full'],
          }}
        />
        <Input
          size='large'
          type='password'
          label='Password'
          value={hook.password}
          placeholder='' // TBD
          onChange={(event) => hook.passwordHandler(event)}
          additionalClasses={{
            wrapper: ['my-8'],
            inputWrapper: ['w-full'],
            input: ['w-full'],
          }}
        />
        <Button
          size='large'
          type='button'
          theme='primary'
          handleClick={hook.handleLogin}
          additionalClasses={{
            button: ['w-full'],
          }}
        >
          Log In
        </Button>

        <div className='flex gap-2 mt-6'>
          <p>Need an account? {' '}</p>
          <TextButton
            handleClick={hook.signupNavigateHandler}
            size='large'
            theme='primary'
            type='button'
          >
            Sign up.
          </TextButton>
        </div>
      </div>

    </div>
  );
};
