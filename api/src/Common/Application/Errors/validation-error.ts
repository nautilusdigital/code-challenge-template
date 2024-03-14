import { BaseError } from 'awesome-rtk';

import { ERROR_CODES } from '../../../Utils/enums';

type ErrorFields = {
  path: string;
  message: string;
}

/**
 * Custom error class for validation errors that extends the BaseError class.
 *
 * @extends {BaseError}
 */
export class ValidationError extends BaseError {
  /**
   * Array of error fields associated with the validation error.
   *
   * @public
   * @readonly
   * @type {ErrorFields[]}
   */
  public readonly errorFields: ErrorFields[];

  /**
   * Create a new instance of ValidationError.
   *
   * @param {string} message - The error message.
   * @param {ErrorFields[]} [errorFields=[]] - Array of error fields associated with the validation error.
   */
  constructor(message: string, errorFields: ErrorFields[] = []) {
    super(message, ERROR_CODES.VALIDATION);

    this.errorFields = errorFields;
  }
}
