import { Controller } from '../../../../../Common/Application/Controller/Implementations';
import { IUsersIndexUseCase } from '../Interface';

type UsersIndexControllerConstructorType = {
  useCase: IUsersIndexUseCase;
};

export class UsersIndexController extends Controller {
  private readonly useCase: IUsersIndexUseCase;

  constructor({ useCase }: UsersIndexControllerConstructorType) {
    super();
    this.useCase = useCase;
  }

  async perform(): Promise<unknown> {
    return this.useCase.execute();
  }
}
