import { Controller } from '../../../../../Common/Application/Controller/Implementations';
import { IValidator } from '../../../../../Common/Application/Controller/Interfaces';
import { IGetSelectOptionsUseCase } from '../Interfaces';

type GetSelectOptionsConstructorType = {
  useCase: IGetSelectOptionsUseCase;
  validator: IValidator;
};

export class GetSelectOptionsController extends Controller {
  private readonly useCase: IGetSelectOptionsUseCase;

  constructor({ useCase, validator }: GetSelectOptionsConstructorType) {
    super(validator);

    this.useCase = useCase;
  }

  async perform(): Promise<unknown> {
    return this.useCase.execute();
  }
}
