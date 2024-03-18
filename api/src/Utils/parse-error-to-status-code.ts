import { ValidationError } from '../Common/Application/Errors';
import { AppError, BadRequestError, NotFoundError } from '../Common/Domain/Errors';

/**
 * Parse the error object and return the corresponding status code.
 *
 * @param error - The error object to parse.
 * @returns The status code associated with the error.
 */
export const parseErrorToStatusCode = (error: Error) => {
  if (error instanceof ValidationError) return 400;
  if (error instanceof AppError) {
    if (error instanceof NotFoundError || error instanceof BadRequestError) return 400;
  }

  return 500;
};
