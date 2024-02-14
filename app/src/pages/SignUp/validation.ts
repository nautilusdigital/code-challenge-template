import { object, string } from 'yup';
import { SignupAddressPropTypes, SignupBasicPropTypes } from './types';

const phoneRegExp = /^\+\d{1,2} \(\d{3}\) \d{3}-\d{4}$/;

const postalCodeExp = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;

export const validationBasicInfo = async ({
  email, password, lastName, firstName,
}: SignupBasicPropTypes) => {
  const signupBasicSchema = object({
    firstName: string().required('Please enter your first name'),
    lastName: string().required('Please enter your first name'),
    email: string().email().required('Please enter your email'),
    password: string().required(), // TODO: define password requirements
  });

  return signupBasicSchema.validate({
    email, password, firstName, lastName,
  }, { abortEarly: false });
};
