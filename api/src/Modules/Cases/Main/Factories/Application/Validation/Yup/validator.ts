import * as Yup from 'yup';

import { yupValidatorFactory } from '../../../../../../../Common/Application/Validation/Factories';
import { VALIDATION_MESSAGES } from '../../../../../../../Utils';

export const makCaseIndexYupValidator = () => yupValidatorFactory(Yup.object().shape({
  firstName: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CASE.INDEX.FIRST_NAME.TYPE),
  lastName: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CASE.INDEX.LAST_NAME.TYPE),
  caseId: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CASE.INDEX.CASE_ID.TYPE),
  phone: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CASE.INDEX.PHONE_NUMBER.TYPE),
}));
