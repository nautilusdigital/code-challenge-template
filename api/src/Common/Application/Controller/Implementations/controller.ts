import { BaseError } from 'awesome-rtk';

import { IValidator } from '../Interfaces';

type ExecuteRequestType = {
  error?: BaseError;
  data?: unknown;
}

/**
 * Abstract base controller class.
 *
 * @abstract
 */
export abstract class Controller {
  /**
   * The validator instance used for request validation.
   *
   * @private
   * @readonly
   * @type {IValidator}
   */
  private readonly validator?: IValidator;

  /**
   * Create a new instance of Controller.
   *
   * @param {IValidator} validator - The validator instance.
   */
  constructor(validator?: IValidator) {
    this.validator = validator;
  }

  /**
   * Perform the controller's action.
   *
   * @abstract
   * @param {Record<string, unknown>} request - The request object.
   * @returns {Promise<unknown>} The result of the controller's action.
   */
  abstract perform(request: Record<string, unknown>): Promise<unknown>;

  /**
   * Execute the controller's action by validating the request and performing the action.
   *
   * @public
   * @param {Record<string, unknown>} request - The request object.
   * @returns {Promise<ExecuteRequestType>} The result of the controller's action wrapped in an object.
   */
  public async execute(request: Record<string, unknown>): Promise<ExecuteRequestType> {
    try {
      if (this.validator !== undefined) this.validator.validate(request);
      return {
        data: await this.perform(request),
      };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return {
        error,
      };
    }
  }
}
