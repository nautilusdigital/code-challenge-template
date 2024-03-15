import { IReportUseCase, ReportInputType, ReportOutputType } from '../../Application/Interface';
import { IReportRepository } from '../Interface';

type ReportUseCaseConstructorType = {
  repository: IReportRepository;
};

export class ReportUseCase implements IReportUseCase {
  private readonly repository: IReportRepository;

  constructor({ repository }: ReportUseCaseConstructorType) {
    this.repository = repository;
  }

  async execute(data: ReportInputType): Promise<ReportOutputType[]> {
    return this.repository.index(data);
  }
}
