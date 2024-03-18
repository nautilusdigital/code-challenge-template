import { GetSelectOptionsUseCase } from '../../../Domain/Implementations';
import { makeGetSelectOptionsPrismaRepository } from '../Infra/DB/Prisma/repository';

export const makeGetSelectOptionsUseCase = () => new GetSelectOptionsUseCase({ repository: makeGetSelectOptionsPrismaRepository() });
