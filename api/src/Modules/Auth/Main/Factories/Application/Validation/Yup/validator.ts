import * as Yup from 'yup';
import { yupValidatorFactory } from '../../../../../../../Common/Application/Validation/Factories';
import { VALIDATION_MESSAGES } from '../../../../../../../Utils';

export const makeAuthYupValidator = () => yupValidatorFactory(Yup.object().shape({
  email: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.AUTH.EMAIL.TYPE)
    .email(VALIDATION_MESSAGES.AUTH.EMAIL.VALID)
    .required(VALIDATION_MESSAGES.AUTH.EMAIL.REQUIRED),
  password: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.AUTH.PASSWORD.TYPE)
    .required(VALIDATION_MESSAGES.AUTH.PASSWORD.REQUIRED),
}));
