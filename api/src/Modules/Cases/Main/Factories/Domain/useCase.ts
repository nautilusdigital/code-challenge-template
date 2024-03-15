import { CaseCreateUseCase } from '../../../Create/Domain/Implementations/useCase';
import { CaseIndexUseCase } from '../../../Index/Domain/Implementations';
import { makeCaseCreatePrismaRepository, makeCaseIndexPrismaRepository } from '../Infra/DB/Prisma/repository';

export const makeCaseIndexUseCase = () => new CaseIndexUseCase({
  repository: makeCaseIndexPrismaRepository(),
});

export const makeCaseCreateUseCase = () => new CaseCreateUseCase({
  repository: makeCaseCreatePrismaRepository(),
});
