import { CaseCreateUseCase } from '../../../Create/Domain/Implementations/useCase';
import { makeCaseCreatePrismaRepository } from '../Infra/DB/Prisma/repository';

export const makeCaseCreateUseCase = () => new CaseCreateUseCase({
  repository: makeCaseCreatePrismaRepository(),
});
