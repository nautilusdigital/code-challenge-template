import { InfraError } from 'awesome-rtk';

import { ERROR_CODES } from '../../../Utils/enums';

/**
 * Custom error class for database errors that extends the InfraError class.
 *
 * @extends {InfraError}
 */
export class DatabaseError extends InfraError {
  /**
   * The database engine associated with the error.
   *
   * @public
   * @readonly
   * @type {'prisma'}
   */
  public readonly engine: 'prisma';

  /**
   * The engine-specific error code associated with the error.
   *
   * @public
   * @readonly
   * @type {string}
   */
  public readonly engineCode: string;

  /**
   * Create a new instance of DatabaseError.
   *
   * @param {string} message - The error message.
   * @param {'prisma'} engine - The database engine associated with the error.
   * @param {string} engineCode - The engine-specific error code associated with the error.
   */
  constructor(message: string, engine: 'prisma', engineCode: string) {
    super(message, ERROR_CODES.DATABASE);

    this.engine = engine;
    this.engineCode = engineCode;
  }
}
