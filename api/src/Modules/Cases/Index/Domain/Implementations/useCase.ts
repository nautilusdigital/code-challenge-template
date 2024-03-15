import { CaseIndexInputType, CaseIndexOutputType, ICaseIndexUseCase } from '../../Application/Interface';
import { ICaseIndexRepository } from '../Interface';

type CaseIndexUseCaseConstructorType = {
  repository: ICaseIndexRepository;
};

export class CaseIndexUseCase implements ICaseIndexUseCase {
  private readonly repository: ICaseIndexRepository;

  constructor({ repository }: CaseIndexUseCaseConstructorType) {
    this.repository = repository;
  }

  async execute(data: CaseIndexInputType): Promise<CaseIndexOutputType[]> {
    return this.repository.index(data);
  }
}
