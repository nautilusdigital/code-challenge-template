import { IGetSelectOptionsUseCase, GetSelectOptionsOutputType } from '../../Application/Interfaces';
import { IGetSelectOptionsRepository } from '../Interfaces';

type GetSelectOptionsUseCaseConstructorType = {
  repository: IGetSelectOptionsRepository;
};

export class GetSelectOptionsUseCase implements IGetSelectOptionsUseCase {
  private readonly repository: IGetSelectOptionsRepository;

  constructor({ repository }: GetSelectOptionsUseCaseConstructorType) {
    this.repository = repository;
  }

  async execute(): Promise<GetSelectOptionsOutputType> {
    return this.repository.get();
  }
}
