import { PrismaClientSingleton } from '../../../../../../../Infra/DB/Prisma';
import { AuthMiddlewareRepository } from '../../../../../Infra/DB/Prisma';

export const makeAuthMiddlewareRepositoryFactory = () => new AuthMiddlewareRepository(PrismaClientSingleton.getInstance());
