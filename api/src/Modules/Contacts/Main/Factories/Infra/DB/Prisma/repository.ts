import { PrismaClientSingleton } from '../../../../../../../Common/Infra/DB/Prisma';
import { ContactCreatePrismaRepository } from '../../../../../Create/Infra/DB/Prisma';
import { ContactIndexPrismaRepository } from '../../../../../index/Infra/DB/Prisma';

export const makeContactCreatePrismaRepository = () => new ContactCreatePrismaRepository({
  client: PrismaClientSingleton.getInstance(),
});

export const makeContactIndexPrismaRepository = () => new ContactIndexPrismaRepository({
  client: PrismaClientSingleton.getInstance(),
});
