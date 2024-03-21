import { InfraError } from 'awesome-rtk';
import { ERROR_CODES } from '../../../Utils/enums';

export class TokenValidationError extends InfraError {
  constructor(message: string) {
    super(message, ERROR_CODES.TOKEN_VALIDATION);
  }
}
