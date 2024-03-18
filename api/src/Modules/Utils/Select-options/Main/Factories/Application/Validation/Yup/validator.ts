import * as Yup from 'yup';

import { yupValidatorFactory } from '../../../../../../../../Common/Application/Validation/Factories';

export const makeGetSelectOptionsYupValidator = () => yupValidatorFactory(Yup.object().shape({}));
