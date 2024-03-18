import { GetSelectOptionsController } from '../../../Application/Implementations';
import { makeGetSelectOptionsUseCase } from '../Domain/use-case';
import { makeGetSelectOptionsYupValidator } from './Validation/Yup/validator';

export const makeGetSelectOptionsController = () => new GetSelectOptionsController({ useCase: makeGetSelectOptionsUseCase(), validator: makeGetSelectOptionsYupValidator() });
