import { CaseAttachmentUploadController } from '../../../Upload/Application/Implementations';
import { makeCaseAttachmentUploadUseCase } from '../Domain/useCase';

export const makeCaseAttachmentUploadController = () => new CaseAttachmentUploadController({ useCase: makeCaseAttachmentUploadUseCase() });
