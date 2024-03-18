import { PrismaClientSingleton } from '../../../../../../../../Common/Infra/DB/Prisma';
import { GetSelectOptionsPrismaRepository } from '../../../../../Infra/DB/Prisma';

export const makeGetSelectOptionsPrismaRepository = () => new GetSelectOptionsPrismaRepository({ client: PrismaClientSingleton.getInstance() });
