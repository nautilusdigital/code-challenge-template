import { AuthUseCase } from '../../../Domain/Implementations';
import { makeAuthPrismaRepository } from '../Infra/DB/Prisma/repository';

export const makeAuthUseCase = () => new AuthUseCase({ repository: makeAuthPrismaRepository() });
