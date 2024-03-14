import { PrismaClientSingleton } from '../../../../../../../Common/Infra/DB/Prisma';
import { ContactCreatePrismaRepository } from '../../../../../Create/Infra/DB/Prisma';

export const makeContactCreatePrismaRepository = () => new ContactCreatePrismaRepository({ client: PrismaClientSingleton.getInstance() });
