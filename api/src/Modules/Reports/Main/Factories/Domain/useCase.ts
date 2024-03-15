import { ReportUseCase } from '../../../Domain/Impementations';
import { makeReportPrismaRepository } from '../Infra/DB/Prisma/repository';

export const makeReportUseCase = () => new ReportUseCase({
  repository: makeReportPrismaRepository(),
});
