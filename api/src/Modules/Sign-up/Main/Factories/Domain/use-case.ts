import { SignUpUseCase } from '../../../Domain/Implementations';
import { makeSignUpRepository } from '../Infra/DB/Prisma/repository';

export const makeSignUpUseCase = () => new SignUpUseCase({ repository: makeSignUpRepository() });
