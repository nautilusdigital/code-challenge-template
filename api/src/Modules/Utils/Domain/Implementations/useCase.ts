import { IUtilsUseCase, UtilsOutputType } from '../../Application/Interface';
import { IUtilsRepository } from '../Interface';

type UtilsUseCaseConstructorType = {
  repository: IUtilsRepository;
};

export class UtilsUseCase implements IUtilsUseCase {
  private readonly repository: IUtilsRepository;

  constructor({ repository }: UtilsUseCaseConstructorType) {
    this.repository = repository;
  }

  async execute(): Promise<UtilsOutputType> {
    return this.repository.index();
  }
}
