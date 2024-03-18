import * as Yup from 'yup';

import { yupValidatorFactory } from '../../../../../../../Application/Validation/Factories';
import { VALIDATION_MESSAGES } from '../../../../../../../../Utils';

export const makeAuthMiddlewareValidatorFactory = () => yupValidatorFactory(Yup.object().shape({
  authorization: Yup
    .string()
    .typeError(VALIDATION_MESSAGES.AUTH.TOKEN.TYPE)
    .required(VALIDATION_MESSAGES.AUTH.TOKEN.REQUIRED),
}));
