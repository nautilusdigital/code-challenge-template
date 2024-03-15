import { FileSystemCaseAttachmentUploadRepository } from '../../../../Upload/Infra/file-system';

export const makeFileSystemUploadCaseAttachmentRepository = () => new FileSystemCaseAttachmentUploadRepository();
