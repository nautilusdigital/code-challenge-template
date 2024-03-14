import { IContactIndexUseCase, ContactIndexInputType, ContactIndexOutputType } from '../../Application/Interface';
import { IContactIndexRepository } from '../Interface';

type ContactIndexUseCaseConstructorType = {
  repository: IContactIndexRepository;
};

export class ContactIndexUseCase implements IContactIndexUseCase {
  private readonly repository: IContactIndexRepository;

  constructor({ repository }: ContactIndexUseCaseConstructorType) {
    this.repository = repository;
  }

  async execute(data: ContactIndexInputType): Promise<ContactIndexOutputType[]> {
    return this.repository.index(data);
  }
}
