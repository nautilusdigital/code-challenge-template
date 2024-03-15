import { ICaseCreateRepository } from '../Interface';
import { CaseCreateUseCaseInputType, CaseCreateUseCaseOutputType, ICaseCreateUseCase } from '../../Application/Interface';

type CaseCreateUseCaseConstructorType = {
  repository: ICaseCreateRepository;
}

export class CaseCreateUseCase implements ICaseCreateUseCase {
  private readonly repository: ICaseCreateRepository;

  constructor({ repository }: CaseCreateUseCaseConstructorType) {
    this.repository = repository;
  }

  async execute(data: CaseCreateUseCaseInputType): Promise<CaseCreateUseCaseOutputType> {
    return this.repository.create(data);
  }
}
