import { PrismaClientSingleton } from '../../../../../../../Common/Infra/DB/Prisma';
import { AuthPrismaRepository } from '../../../../../Auth/Infra/DB/Prisma';
import { RefreshAuthPrismaRepository } from '../../../../../RefreshAuth/Infra/DB/Prisma';

export const makeAuthPrismaRepository = () => new AuthPrismaRepository({ client: PrismaClientSingleton.getInstance() });

export const makeRefreshAuthPrismaRepository = () => new RefreshAuthPrismaRepository({ client: PrismaClientSingleton.getInstance() });
