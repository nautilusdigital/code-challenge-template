import { AppError } from './app-error';

/**
 * `BadRequestError` extends from `AppError` and represents an error specifically for bad requests.
 *
 * @export
 * @class BadRequestError
 * @extends {AppError}
 */
export class BadRequestError extends AppError {
  /**
   * Creates an instance of BadRequestError.
   *
   * @param {string} message - Detailed message related to the error for debugging purposes.
   * @param {string} code - The specific error code that can be used to identify the type of error.
   */
  constructor(message: string, code: string) {
    super(message, code);
  }
}
