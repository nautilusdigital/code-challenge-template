import { writeFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { join } from 'node:path';

import { CaseAttachmentUploadInputType, ICaseAttachmentUploadRepository } from '../../Domain/Interface/repository';
import { FileUploadError } from '../../../../../../Common/Application/Errors';

export class FileSystemCaseAttachmentUploadRepository implements ICaseAttachmentUploadRepository {
  async store({ files }: CaseAttachmentUploadInputType): Promise<string[]> {
    const fileNames = files.map(({ extension }) => `${randomUUID()}.${extension}`);
    try {
      await Promise.all(files.map((file, index) => writeFile(join(__dirname, '..', '..', '..', '..', '..', '..', 'uploads', fileNames[index]), file.buffer)));

      return fileNames;
    } catch (error) {
      throw new FileUploadError('Error while uploading files');
    }
  }
}
