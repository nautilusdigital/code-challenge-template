/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as Yup from 'yup';

import { IValidator } from '../../Controller/Interfaces';
import { ValidationError } from '../../Errors';

/**
 * Validator class that uses Yup for data validation and implements the IValidator interface.
 *
 * @implements {IValidator}
 */
export class YupValidator implements IValidator {
  /**
   * The Yup schema used for validation.
   *
   * @private
   * @readonly
   * @type {Yup.ObjectSchema<Yup.Maybe<Yup.AnyObject>>}
   */
  private readonly schema: Yup.ObjectSchema<Yup.Maybe<Yup.AnyObject>>;

  /**
   * Create a new instance of YupValidator.
   *
   * @param {Yup.ObjectSchema<Yup.Maybe<Yup.AnyObject>>} schema - The Yup schema used for validation.
   */
  constructor(schema: Yup.ObjectSchema<Yup.Maybe<Yup.AnyObject>>) {
    this.schema = schema;
  }

  /**
   * Validate the provided data using the Yup schema.
   *
   * @public
   * @param {Record<string, unknown>} data - The data to be validated.
   * @returns {void}
   * @throws {ValidationError} If the data fails validation, a ValidationError is thrown.
   */
  public validate(data: Record<string, unknown>): void {
    try {
      this.schema.validateSync(data, { abortEarly: false, strict: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      this.parseError(error);
    }
  }

  /**
   * Parse the Yup validation error and throw a custom ValidationError.
   *
   * @private
   * @param {Yup.ValidationError} error - The Yup validation error.
   * @returns {never} This method always throws a ValidationError.
   */
  private parseError(error: Yup.ValidationError): ValidationError {
    const errorFields = error.inner.map(({ path, message }) => ({
      path: path!,
      message: message!,
    }));

    throw new ValidationError(error.message, errorFields);
  }
}
