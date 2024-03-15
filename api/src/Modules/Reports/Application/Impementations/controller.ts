import { Controller } from '../../../../Common/Application/Controller/Implementations';
import { IValidator } from '../../../../Common/Application/Controller/Interfaces';
import { IReportUseCase } from '../Interface';

type ReportControllerConstructorType = {
  useCase: IReportUseCase;
  validator: IValidator;
};

export class ReportController extends Controller {
  private readonly useCase: IReportUseCase;

  constructor({ useCase, validator }: ReportControllerConstructorType) {
    super(validator);

    this.useCase = useCase;
  }

  async perform(request: Record<string, unknown>): Promise<unknown> {
    return this.useCase.execute(request as never);
  }
}
