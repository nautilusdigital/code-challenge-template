import { ContactCreateUseCase } from '../../../Create/Domain/Implementations/useCase';
import { ContactIndexUseCase } from '../../../index/Domain/Implementations';
import { makeContactCreatePrismaRepository, makeContactIndexPrismaRepository } from '../Infra/DB/Prisma/repository';

export const makeContactCreateUseCase = () => new ContactCreateUseCase({
  repository: makeContactCreatePrismaRepository(),
});

export const makeContactIndexUseCase = () => new ContactIndexUseCase({
  repository: makeContactIndexPrismaRepository(),
});
