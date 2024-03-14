import { ContactCreateController } from '../../../Create/Application/Implementations';
import { makeContactCreateUseCase } from '../Domain/useCase';
import { makeContactCreateYupValidator } from './Validation/Yup/validator';

export const makeContactCreateController = () => new ContactCreateController({ useCase: makeContactCreateUseCase(), validator: makeContactCreateYupValidator() });
