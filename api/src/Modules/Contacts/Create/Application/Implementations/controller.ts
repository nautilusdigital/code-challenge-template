import { Controller } from '../../../../../Common/Application/Controller/Implementations';
import { IValidator } from '../../../../../Common/Application/Controller/Interfaces';
import { IContactCreateUseCase } from '../Interface';

type ContactCreateControllerConstructorType = {
  useCase: IContactCreateUseCase
  validator: IValidator
}

export class ContactCreateController extends Controller {
  private readonly useCase: IContactCreateUseCase;

  constructor({ useCase, validator }: ContactCreateControllerConstructorType) {
    super(validator);

    this.useCase = useCase;
  }

  async perform(request: Record<string, unknown>): Promise<void> {
    await this.useCase.execute(request as never);
  }
}
