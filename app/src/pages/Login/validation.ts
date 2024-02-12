import { object, string } from 'yup';
import { LoginValidationPropTypes } from './types';

export const validationLogin = async ({ email, password }: LoginValidationPropTypes) => {
  const loginSchema = object({
    email: string().email().required(),
    password: string().required(), // TODO: define password requirements
  });

  return await loginSchema.validate({ email, password });
};
