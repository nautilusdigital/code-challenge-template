import { InfraError } from 'awesome-rtk';
import { ERROR_CODES } from '../../../Utils/enums';

export class FileUploadError extends InfraError {
  constructor(message: string) {
    super(message, ERROR_CODES.FILE_UPLOAD);
  }
}
