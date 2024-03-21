import { PrismaClientSingleton } from '../../../../../../../Common/Infra/DB/Prisma';
import { SignUpRepository } from '../../../../../Infra/DB/Prisma';

export const makeSignUpRepository = () => new SignUpRepository({ client: PrismaClientSingleton.getInstance() });
