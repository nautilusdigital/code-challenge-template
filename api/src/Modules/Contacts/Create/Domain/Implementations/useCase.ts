import { IContactCreateRepository } from '../Interface';
import { ContactCreateUseCaseInputType, IContactCreateUseCase } from '../../Application/Interface';

type ContactCreateUseCaseConstructorType = {
  repository: IContactCreateRepository;
}

export class ContactCreateUseCase implements IContactCreateUseCase {
  private readonly repository: IContactCreateRepository;

  constructor({ repository }: ContactCreateUseCaseConstructorType) {
    this.repository = repository;
  }

  async execute(data: ContactCreateUseCaseInputType): Promise<void> {
    await this.repository.index(data);
  }
}
