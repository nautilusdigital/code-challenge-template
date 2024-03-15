import { PrismaClientSingleton } from '../../../../../../../Common/Infra/DB/Prisma';
import { UsersIndexPrismaRepository } from '../../../../../Index/Infra/DB/Prisma';

export const makeUsersIndexPrismaRepository = () => new UsersIndexPrismaRepository({
  client: PrismaClientSingleton.getInstance(),
});
