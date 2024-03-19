import { AuthController } from '../../../Auth/Application/Implementations';
import { RefreshAuthController } from '../../../RefreshAuth/Application/Implementations';
import { makeAuthUseCase, makeRefreshAuthUseCase } from '../Domain/use-case';
import { makeAuthYupValidator } from './Validation/Yup/validator';

export const makeAuthController = () => new AuthController({ useCase: makeAuthUseCase(), validator: makeAuthYupValidator() });

export const makeRefreshAuthController = () => new RefreshAuthController({ useCase: makeRefreshAuthUseCase() });
