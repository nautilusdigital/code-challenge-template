import { BaseError } from 'awesome-rtk';

/**
 * Abstract class representing an application error.
 * @abstract
 * @extends BaseError
 */
export abstract class AppError extends BaseError {
  /**
   * Create a new instance of AppError.
   *
   * @param {string} message - The error message.
   * @param {string} code - The error code.
   */
  constructor(message: string, code: string) {
    super(message, code);
  }
}
