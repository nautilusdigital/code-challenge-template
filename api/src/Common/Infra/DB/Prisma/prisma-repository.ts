/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatabaseError } from '../../Errors';

/**
 * The maximum number of retries to perform on connection ERROR_CODES.
 */
const MAX_RETRIES = 3;
/**
 * The Prisma error code for connection ERROR_CODES.
 */
const CONNECTION_ERROR_CODE = 'P1000';

/**
 * `PrismaRepository` is an abstract class providing functionality
 * to execute Prisma queries with automatic retrying on connection ERROR_CODES.
 */
export abstract class PrismaRepository {
  /**
   * A private property to keep track of the number of query retries
   * @private
   */
  private retryCount = 0;

  /**
   * This method executes a given Prisma action with provided arguments.
   * It also automatically handles connection-related errors, performing retries
   * up to the limit set by `MAX_RETRIES`.''
   *
   * IMPORTANT: This method IS NOT type safe. Be sure to only pass Prisma actions and arguments.
   *
   * @template K - the type of the arguments for the action
   * @template T - the return type of the action
   * @param {function} action - the Prisma action to be performed
   * @param {K} args - the arguments related to the Prisma action to be passed to the action
   * @returns {Promise<T | null>} - returns a promise which resolves with the result of the action,
   * @throws {DatabaseError} - throws a DatabaseError if action fails
   */
  async execute<K = any, T = any>(action: (args: any) => Promise<T>, args: K): Promise<T | null> {
    try {
      const result = await action(args);

      this.resetRetryCount();
      return result;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (this.shouldRetry(error)) {
        this.retryCount += 1;
        return this.execute(action, args);
      }

      throw new DatabaseError(error.message, 'prisma', error.code);
    }
  }

  /**
   * Resets the retry count back to 0.
   *
   * @private
   */
  private resetRetryCount(): void {
    this.retryCount = 0;
  }

  /**
   * Determines whether an error is a connection error and whether we are still under the retry limit.
   *
   * @param {any} error - the error to be checked
   * @returns {boolean} - returns true if the error is a connection error and we're still under the retry limit
   * @private
   */
  private shouldRetry(error: any): boolean {
    return error.code === CONNECTION_ERROR_CODE && this.retryCount < MAX_RETRIES;
  }
}
