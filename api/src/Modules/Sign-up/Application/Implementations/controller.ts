import { Controller } from '../../../../Common/Application/Controller/Implementations';
import { IValidator } from '../../../../Common/Application/Controller/Interfaces';
import { ISignUpUseCase } from '../Interfaces';

type SignUpControllerConstructorType = {
  useCase: ISignUpUseCase
  validator: IValidator
}

export class SignUpController extends Controller {
  private readonly useCase: ISignUpUseCase;

  constructor({ useCase, validator }: SignUpControllerConstructorType) {
    super(validator);

    this.useCase = useCase;
  }

  async perform(request: Record<string, unknown>): Promise<void> {
    await this.useCase.execute(request as never);
  }
}
