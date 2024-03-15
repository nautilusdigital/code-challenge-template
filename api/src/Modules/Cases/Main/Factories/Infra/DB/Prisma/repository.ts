import { PrismaClientSingleton } from '../../../../../../../Common/Infra/DB/Prisma';
import { CaseIndexPrismaRepository } from '../../../../../Index/Infra/DB/Prisma';

export const makeCaseIndexPrismaRepository = () => new CaseIndexPrismaRepository({
  client: PrismaClientSingleton.getInstance(),
});
