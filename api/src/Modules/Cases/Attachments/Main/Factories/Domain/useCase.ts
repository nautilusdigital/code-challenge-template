import { CaseAttachmentUploadUseCase } from '../../../Upload/Domain/Implementations';
import { makeFileSystemUploadCaseAttachmentRepository } from '../Infra/file-system/repository';

export const makeCaseAttachmentUploadUseCase = () => new CaseAttachmentUploadUseCase({ repository: makeFileSystemUploadCaseAttachmentRepository() });
