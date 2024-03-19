import { Controller } from '../../../../../Common/Application/Controller/Implementations';
import { IRefreshAuthUseCase } from '../Interfaces';

type AuthControllerConstructorType = {
  useCase: IRefreshAuthUseCase,
}

export class RefreshAuthController extends Controller {
  private readonly useCase: IRefreshAuthUseCase;

  constructor({ useCase }: AuthControllerConstructorType) {
    super();

    this.useCase = useCase;
  }

  async perform(request: Record<string, unknown>): Promise<unknown> {
    return this.useCase.execute(request as never);
  }
}
