import { PrismaClientSingleton } from '../../../../../../../Common/Infra/DB/Prisma';
import { UtilsPrismaRepository } from '../../../../../Infra/DB/Prisma';

export const makeUtilsPrismaRepository = () => new UtilsPrismaRepository({
  client: PrismaClientSingleton.getInstance(),
});
