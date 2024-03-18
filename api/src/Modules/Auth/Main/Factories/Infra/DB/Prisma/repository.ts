import { PrismaClientSingleton } from '../../../../../../../Common/Infra/DB/Prisma';
import { AuthPrismaRepository } from '../../../../../Infra/DB/Prisma';

export const makeAuthPrismaRepository = () => new AuthPrismaRepository({ client: PrismaClientSingleton.getInstance() });
