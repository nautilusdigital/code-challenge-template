import { Middleware } from '../../../../Application/Middleware/Implementations';
import { IValidator } from '../../../../Application/Controller/Interfaces';
import { IAuthMiddlewareUseCase } from '../Interfaces';

type AuthMiddlewareConstructorType = {
  authMiddlewareUseCase: IAuthMiddlewareUseCase;
  validator: IValidator;
}

/**
 * This class represents an authentication middleware.
 * @extends {Middleware}
 */
export class AuthMiddleware extends Middleware {
  private readonly authMiddlewareUseCase: IAuthMiddlewareUseCase;

  /**
   * Creates a new instance of AuthMiddleware.
   * @param {AuthMiddlewareConstructorType} param0 - An object containing the authentication middleware use case and validator.
   */
  constructor({ authMiddlewareUseCase, validator }: AuthMiddlewareConstructorType) {
    super(validator);

    this.authMiddlewareUseCase = authMiddlewareUseCase;
  }

  /**
   * Performs the middleware action, which authenticates the request.
   * @param {Record<string, unknown>} request - The request object.
   * @returns {Promise<unknown>} A promise that resolves when the operation is complete.
   */
  async perform(request: Record<string, unknown>): Promise<unknown> {
    return this.authMiddlewareUseCase.execute(request.authorization as string);
  }
}
