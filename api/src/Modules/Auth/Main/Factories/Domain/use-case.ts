import { AuthUseCase } from '../../../Auth/Domain/Implementations';
import { AuthRefreshUseCase } from '../../../RefreshAuth/Domain/Implementations';
import { makeAuthPrismaRepository, makeRefreshAuthPrismaRepository } from '../Infra/DB/Prisma/repository';

export const makeAuthUseCase = () => new AuthUseCase({ repository: makeAuthPrismaRepository() });

export const makeRefreshAuthUseCase = () => new AuthRefreshUseCase({ repository: makeRefreshAuthPrismaRepository() });
