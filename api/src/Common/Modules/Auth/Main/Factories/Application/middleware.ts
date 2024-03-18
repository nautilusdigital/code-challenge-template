import { AuthMiddleware } from '../../../Application/Implementations/middleware';
import { makeAuthMiddlewareUseCaseFactory } from '../Domain/use-case';
import { makeAuthMiddlewareValidatorFactory } from './Validation/Yup/validator';

export const makeAuthMiddlewareFactory = () => new AuthMiddleware({ authMiddlewareUseCase: makeAuthMiddlewareUseCaseFactory(), validator: makeAuthMiddlewareValidatorFactory() });
