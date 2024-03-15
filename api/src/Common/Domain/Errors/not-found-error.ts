import { AppError } from './app-error';

/**
 * Class representing a Not Found error.
 * @extends AppError
 */
export class NotFoundError extends AppError {
  /**
   * Create a NotFoundError instance.
   * @param {string} message - The error message.
   * @param {string} code - The error code.
   */
  constructor(message: string, code: string) {
    super(message, code);
  }
}
