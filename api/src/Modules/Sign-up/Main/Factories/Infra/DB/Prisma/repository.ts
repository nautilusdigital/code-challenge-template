import { PrismaClientSingleton } from '../../../../../../../Common/Infra/DB/Prisma';
import { SignUpPrismaRepository } from '../../../../../Infra/DB/Prisma';

export const makeSignUpPrismaRepository = () => new SignUpPrismaRepository({ client: PrismaClientSingleton.getInstance() });
