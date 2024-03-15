import { PrismaClientSingleton } from '../../../../../../../Common/Infra/DB/Prisma';
import { CaseIndexPrismaRepository } from '../../../../../Index/Infra/DB/Prisma';
import { CaseCreatePrismaRepository } from '../../../../../Create/Infra/DB/Prisma';

export const makeCaseIndexPrismaRepository = () => new CaseIndexPrismaRepository({
  client: PrismaClientSingleton.getInstance(),
});
export const makeCaseCreatePrismaRepository = () => new CaseCreatePrismaRepository({
  client: PrismaClientSingleton.getInstance(),
});
