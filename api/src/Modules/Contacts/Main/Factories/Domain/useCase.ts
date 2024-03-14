import { ContactCreateUseCase } from '../../../Create/Domain/Implementations/useCase';
import { makeContactCreatePrismaRepository } from '../Infra/DB/Prisma/repository';

export const makeContactCreateUseCase = () => new ContactCreateUseCase({
  repository: makeContactCreatePrismaRepository(),
});
