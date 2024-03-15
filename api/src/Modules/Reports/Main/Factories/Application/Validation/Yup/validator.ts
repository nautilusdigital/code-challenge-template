import * as Yup from 'yup';

import { yupValidatorFactory } from '../../../../../../../Common/Application/Validation/Factories';
import { VALIDATION_MESSAGES } from '../../../../../../../Utils';

export const makeReportYupValidator = () => yupValidatorFactory(Yup.object().shape({
  regionsId: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.REPORT.REGION_ID.TYPE),
  startDate: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.REPORT.startDate.TYPE)
    .required(VALIDATION_MESSAGES.REPORT.startDate.REQUIRED),
  endDate: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.REPORT.endDate.TYPE)
    .required(VALIDATION_MESSAGES.REPORT.endDate.REQUIRED),
}));
