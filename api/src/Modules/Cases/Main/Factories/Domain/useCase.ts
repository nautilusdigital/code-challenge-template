import { CaseIndexUseCase } from '../../../Index/Domain/Implementations';
import { makeCaseIndexPrismaRepository } from '../Infra/DB/Prisma/repository';

export const makeCaseIndexUseCase = () => new CaseIndexUseCase({
  repository: makeCaseIndexPrismaRepository(),
});
