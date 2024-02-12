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

  return await signupBasicSchema.validate({
    email, password, firstName, lastName,
  }, { abortEarly: false });
};

export const validationAddressInfo = async ({
  address, city, phoneNumber, postalCode, province, unitNumber,
}: SignupAddressPropTypes) => {
  const signupAddressSchema = object({
    address: string().required(),
    unitNumber: string(),
    city: string().required(),
    province: object({
      id: string().required(),
      label: string(),
    }),
    postalCode: string().matches(postalCodeExp, 'Postal code is not valid'),
    phoneNumber: string().matches(phoneRegExp, 'Phone number is not valid'),

  });

  return await signupAddressSchema.validate({
    address, city, phoneNumber, postalCode, province, unitNumber,
  }, { abortEarly: false });
};
