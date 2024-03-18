import { SignUpUseCase } from '../../../Domain/Implementations';
import { makeSignUpPrismaRepository } from '../Infra/DB/Prisma/repository';

export const makeSignUpUseCase = () => new SignUpUseCase({ repository: makeSignUpPrismaRepository() });
