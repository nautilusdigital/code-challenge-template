import { verify } from 'jsonwebtoken';

import { ITokenValidator } from '../../Modules/Auth/Domain/Interfaces';
import { TokenValidationError } from '../../Domain/Errors';
import { envVariables } from '../../../Config';

/**
 * It's specifically used to validate tokens.
 *
 * @export
 * @class JwtTokenValidator
 * @extends {JwtTokenDecoder}
 * @implements {ITokenValidator}
 */
export class JwtTokenValidator implements ITokenValidator {
  /**
   * Validates a given token.
   *
   * @template T - The expected return type after the token is validated.
   * By default, it is set to unknown. This can be adjusted as needed depending on your application.
   *
   * @param {string} token - The JWT string that needs to be validated.
   * @throws {TokenValidationError | HttpError} When the token fails to validate.
   * @returns {Promise<T>} - The result of the verification process.
   */
  async validate<T = unknown>(token: string): Promise<T> {
    try {
      return verify(token, envVariables.api.appSecret) as T;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new TokenValidationError(error.message);
    }
  }
}
