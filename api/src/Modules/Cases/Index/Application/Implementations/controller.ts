import { Controller } from '../../../../../Common/Application/Controller/Implementations';
import { IValidator } from '../../../../../Common/Application/Controller/Interfaces';
import { ICaseIndexUseCase } from '../Interface';

type CaseIndexControllerConstructorType = {
  useCase: ICaseIndexUseCase;
  validator: IValidator;
};

export class CaseIndexController extends Controller {
  private readonly useCase: ICaseIndexUseCase;

  constructor({ useCase, validator }: CaseIndexControllerConstructorType) {
    super(validator);

    this.useCase = useCase;
  }

  async perform(request: Record<string, unknown>): Promise<unknown> {
    return this.useCase.execute(request as never);
  }
}
