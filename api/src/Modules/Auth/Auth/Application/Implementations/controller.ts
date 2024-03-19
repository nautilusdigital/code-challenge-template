import { Controller } from '../../../../../Common/Application/Controller/Implementations';
import { IValidator } from '../../../../../Common/Application/Controller/Interfaces';
import { IAuthUseCase } from '../Interfaces';

type AuthControllerConstructorType = {
  useCase: IAuthUseCase,
  validator: IValidator
}

export class AuthController extends Controller {
  private readonly useCase: IAuthUseCase;

  constructor({ useCase, validator }: AuthControllerConstructorType) {
    super(validator);

    this.useCase = useCase;
  }

  async perform(request: Record<string, unknown>): Promise<unknown> {
    return this.useCase.execute(request as never);
  }
}
