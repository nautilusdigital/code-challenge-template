import { CaseAttachmentUploadInputType, ICaseAttachmentUploadUseCase } from '../../Application/Interface';
import { ICaseAttachmentUploadRepository } from '../Interface';

type CaseAttachmentUploadUseCaseConstructorType = {
  repository: ICaseAttachmentUploadRepository
}

export class CaseAttachmentUploadUseCase implements ICaseAttachmentUploadUseCase {
  private repository: ICaseAttachmentUploadRepository;

  constructor({ repository }: CaseAttachmentUploadUseCaseConstructorType) {
    this.repository = repository;
  }

  async execute(data: CaseAttachmentUploadInputType): Promise<string[]> {
    return this.repository.store(data);
  }
}
