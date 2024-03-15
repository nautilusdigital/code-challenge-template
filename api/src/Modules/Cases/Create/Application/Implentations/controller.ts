import { Controller } from '../../../../../Common/Application/Controller/Implementations';
import { IValidator } from '../../../../../Common/Application/Controller/Interfaces';
import { ICaseCreateUseCase } from '../Interface';

type CaseCreateControllerConstructorType = {
  useCase: ICaseCreateUseCase
  validator: IValidator
}

export class CaseCreateController extends Controller {
  private readonly useCase: ICaseCreateUseCase;

  constructor({ useCase, validator }: CaseCreateControllerConstructorType) {
    super(validator);

    this.useCase = useCase;
  }

  async perform(request: Record<string, unknown>): Promise<unknown> {
    return this.useCase.execute(request as never);
  }
}
