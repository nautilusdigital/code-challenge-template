import * as Yup from 'yup';

import { yupValidatorFactory } from '../../../../../../../Common/Application/Validation/Factories';
import { VALIDATION_MESSAGES } from '../../../../../../../Utils';

export const makeSignUpYupValidator = () => yupValidatorFactory(Yup.object().shape({
  firstName: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.SIGN_UP.FIRST_NAME.TYPE)
    .required(VALIDATION_MESSAGES.SIGN_UP.FIRST_NAME.REQUIRED),
  lastName: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.SIGN_UP.LAST_NAME.TYPE)
    .required(VALIDATION_MESSAGES.SIGN_UP.LAST_NAME.REQUIRED),
  email: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.SIGN_UP.EMAIL.TYPE)
    .email(VALIDATION_MESSAGES.SIGN_UP.EMAIL.VALID)
    .required(VALIDATION_MESSAGES.SIGN_UP.EMAIL.REQUIRED),
  password: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.SIGN_UP.PASSWORD.TYPE)
    .required(VALIDATION_MESSAGES.SIGN_UP.PASSWORD.REQUIRED),
  userType: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.SIGN_UP.USER_TYPE.TYPE)
    .required(VALIDATION_MESSAGES.SIGN_UP.USER_TYPE.REQUIRED),
}));
