import { makeJwtTokenValidatorFactory } from '../../../../../Main/Factories/Gateways/jwt-token-validator';
import { AuthMiddlewareUseCase } from '../../../Domain/Implementations';
import { makeAuthMiddlewareRepositoryFactory } from '../Infra/DB/Prisma/repository';

export const makeAuthMiddlewareUseCaseFactory = () => new AuthMiddlewareUseCase({ authMiddlewareRepository: makeAuthMiddlewareRepositoryFactory(), tokenValidator: makeJwtTokenValidatorFactory() });
