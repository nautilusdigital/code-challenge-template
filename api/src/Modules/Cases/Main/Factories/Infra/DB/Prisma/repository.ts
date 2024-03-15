import { PrismaClientSingleton } from '../../../../../../../Common/Infra/DB/Prisma';
import { CaseCreatePrismaRepository } from '../../../../../Create/Infra/DB/Prisma';

export const makeCaseCreatePrismaRepository = () => new CaseCreatePrismaRepository({
  client: PrismaClientSingleton.getInstance(),
});
