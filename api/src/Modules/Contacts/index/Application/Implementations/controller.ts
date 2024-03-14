import { Controller } from '../../../../../Common/Application/Controller/Implementations';
import { IValidator } from '../../../../../Common/Application/Controller/Interfaces';
import { IContactIndexUseCase } from '../Interface';

type ContactIndexControllerConstructorType = {
  useCase: IContactIndexUseCase;
  validator: IValidator;
};

export class ContactIndexController extends Controller {
  private readonly useCase: IContactIndexUseCase;

  constructor({ useCase, validator }: ContactIndexControllerConstructorType) {
    super(validator);

    this.useCase = useCase;
  }

  async perform(request: Record<string, unknown>): Promise<unknown> {
    return this.useCase.execute(request as never);
  }
}
