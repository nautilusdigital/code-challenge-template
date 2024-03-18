import { BaseError } from 'awesome-rtk';

import { IValidator } from '../../Controller/Interfaces';

type ExecuteRequestType<T = unknown> = {
  error?: BaseError;
  data?: T;
}

/**
 * This abstract class represents a middleware.
 */
export abstract class Middleware {
  private readonly validator?: IValidator;

  /**
   * Creates a new instance of Middleware.
   * @param {IValidator} [validator] - The validator to be used to validate requests.
   */

  constructor(validator?: IValidator) {
    this.validator = validator;
  }

  abstract perform(request: Record<string, unknown>): Promise<unknown>;

  public async execute<T = unknown>(request: Record<string, unknown>): Promise<ExecuteRequestType<T>> {
    try {
      if (this.validator !== undefined) this.validator.validate(request);
      return {
        data: await this.perform(request) as T,
      };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return {
        error,
      };
    }
  }
}
