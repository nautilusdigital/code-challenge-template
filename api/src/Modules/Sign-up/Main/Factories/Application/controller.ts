import { SignUpController } from '../../../Application/Implementations';
import { makeSignUpUseCase } from '../Domain/use-case';
import { makeSignUpYupValidator } from './Validation/Yup/validator';

export const makeSignUpController = () => new SignUpController({ useCase: makeSignUpUseCase(), validator: makeSignUpYupValidator() });
