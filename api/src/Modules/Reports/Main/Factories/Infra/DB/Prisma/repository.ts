import { PrismaClientSingleton } from '../../../../../../../Common/Infra/DB/Prisma';
import { ReportPrismaRepository } from '../../../../../Infra/DB/Prisma';

export const makeReportPrismaRepository = () => new ReportPrismaRepository({
  client: PrismaClientSingleton.getInstance(),
});
