import { UtilsUseCase } from '../../../Domain/Implementations';
import { makeUtilsPrismaRepository } from '../Infra/DB/Prisma/repository';

export const makeUtilsUseCase = () => new UtilsUseCase({
  repository: makeUtilsPrismaRepository(),
});
