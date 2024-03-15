import * as Yup from 'yup';

import { yupValidatorFactory } from '../../../../../../../Common/Application/Validation/Factories';
import { VALIDATION_MESSAGES } from '../../../../../../../Utils';

export const makeCaseCreateYupValidator = () => yupValidatorFactory(Yup.object().shape({
  clientId: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CASE.CREATE.CLIENT_ID.TYPE)
    .required(VALIDATION_MESSAGES.CASE.CREATE.CLIENT_ID.REQUIRED),
  callerId: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CASE.CREATE.CALLER_ID.TYPE)
    .required(VALIDATION_MESSAGES.CASE.CREATE.CALLER_ID.REQUIRED),
  userId: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CASE.CREATE.USER_ID.TYPE)
    .required(VALIDATION_MESSAGES.CASE.CREATE.USER_ID.REQUIRED),
  issueType: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CASE.CREATE.ISSUE_TYPE.TYPE)
    .required(VALIDATION_MESSAGES.CASE.CREATE.ISSUE_TYPE.REQUIRED),
  regionId: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CASE.CREATE.REGION_ID.TYPE)
    .required(VALIDATION_MESSAGES.CASE.CREATE.REGION_ID.REQUIRED),
  fileNames: Yup
    .array()
    .typeError(VALIDATION_MESSAGES.CASE.CREATE.FILE_NAMES.TYPE)
    .required(VALIDATION_MESSAGES.CASE.CREATE.FILE_NAMES.REQUIRED),
  notes: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CASE.CREATE.NOTES.TYPE)
    .required(VALIDATION_MESSAGES.CASE.CREATE.NOTES.REQUIRED),
  reviewDate: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.CASE.CREATE.REVIEW_DATE.TYPE)
    .required(VALIDATION_MESSAGES.CASE.CREATE.REVIEW_DATE.REQUIRED),
}));

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
