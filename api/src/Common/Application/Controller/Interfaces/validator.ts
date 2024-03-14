/**
 * Interface for a validator.
 *
 * @interface
 */
export interface IValidator {
  /**
   * Validate the provided data.
   *
   * @param {Record<string, unknown>} data - The data to be validated.
   * @returns {void}
   */
  validate(data: Record<string, unknown>): void
}
