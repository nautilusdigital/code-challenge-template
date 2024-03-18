import { AuthController } from '../../../Application/Implementations';
import { makeAuthUseCase } from '../Domain/use-case';
import { makeAuthYupValidator } from './Validation/Yup/validator';

export const makeAuthController = () => new AuthController({ useCase: makeAuthUseCase(), validator: makeAuthYupValidator() });
