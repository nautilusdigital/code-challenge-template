import { Controller } from '../../../../Common/Application/Controller/Implementations';
import { IUtilsUseCase } from '../Interface';

type UtilsControllerConstructorType = {
  useCase: IUtilsUseCase;
};

export class UtilsController extends Controller {
  private readonly useCase: IUtilsUseCase;

  constructor({ useCase }: UtilsControllerConstructorType) {
    super();

    this.useCase = useCase;
  }

  async perform(): Promise<unknown> {
    return this.useCase.execute();
  }
}
