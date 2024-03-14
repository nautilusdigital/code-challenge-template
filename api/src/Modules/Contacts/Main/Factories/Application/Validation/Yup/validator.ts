import * as Yup from 'yup';

import { yupValidatorFactory } from '../../../../../../../Common/Application/Validation/Factories';
import { VALIDATION_MESSAGES } from '../../../../../../../Utils';

export const makeContactCreateYupValidator = () => yupValidatorFactory(Yup.object().shape({
  firstName: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CONTACT.CREATE.FIRST_NAME.TYPE)
    .required(VALIDATION_MESSAGES.CONTACT.CREATE.FIRST_NAME.REQUIRED),
  lastName: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CONTACT.CREATE.LAST_NAME.TYPE)
    .required(VALIDATION_MESSAGES.CONTACT.CREATE.LAST_NAME.REQUIRED),
  email: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CONTACT.CREATE.EMAIL.TYPE)
    .email(VALIDATION_MESSAGES.CONTACT.CREATE.EMAIL.VALID)
    .required(VALIDATION_MESSAGES.CONTACT.CREATE.EMAIL.REQUIRED),
  phone: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CONTACT.CREATE.PHONE_NUMBER.TYPE)
    .required(VALIDATION_MESSAGES.CONTACT.CREATE.PHONE_NUMBER.REQUIRED),
  age: Yup
    .number()
    .typeError(VALIDATION_MESSAGES.CONTACT.CREATE.AGE.TYPE)
    .required(VALIDATION_MESSAGES.CONTACT.CREATE.AGE.REQUIRED),
  city: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CONTACT.CREATE.CITY.TYPE)
    .required(VALIDATION_MESSAGES.CONTACT.CREATE.CITY.REQUIRED),
  regionId: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CONTACT.CREATE.REGION_ID.TYPE)
    .required(VALIDATION_MESSAGES.CONTACT.CREATE.REGION_ID.REQUIRED),
  regionOther: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CONTACT.CREATE.REGION_OTHER.TYPE)
    .nullable(),
}));
