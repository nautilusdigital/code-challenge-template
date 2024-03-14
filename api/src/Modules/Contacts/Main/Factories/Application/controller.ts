import { ContactCreateController } from '../../../Create/Application/Implementations';
import { ContactIndexController } from '../../../index/Application/Implementations';
import { makeContactCreateUseCase, makeContactIndexUseCase } from '../Domain/useCase';
import { makeContactCreateYupValidator, makeContactIndexYupValidator } from './Validation/Yup/validator';

export const makeContactCreateController = () => new ContactCreateController({ useCase: makeContactCreateUseCase(), validator: makeContactCreateYupValidator() });

export const makeContactIndexController = () => new ContactIndexController({ useCase: makeContactIndexUseCase(), validator: makeContactIndexYupValidator() });
