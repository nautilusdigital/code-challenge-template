import { IUsersIndexUseCase, UsersIndexOutputType } from '../../Application/Interface';
import { IUsersIndexRepository } from '../Interface';

type UsersIndexUseCaseConstructorType = {
  repository: IUsersIndexRepository;
};

export class UsersIndexUseCase implements IUsersIndexUseCase {
  private readonly repository: IUsersIndexRepository;

  constructor({ repository }: UsersIndexUseCaseConstructorType) {
    this.repository = repository;
  }

  async execute(): Promise<UsersIndexOutputType[]> {
    return this.repository.index();
  }
}
