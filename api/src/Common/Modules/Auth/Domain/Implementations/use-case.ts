import { ERROR_CODES, ERROR_MESSAGES } from '../../../../../Utils';
import { NotFoundError, TokenValidationError } from '../../../../Domain/Errors';
import { ITokenValidator, IAuthMiddlewareRepository } from '../Interfaces';
import { AuthMiddlewareUseCaseOutputType, IAuthMiddlewareUseCase } from '../../Application/Interfaces';

type AuthMiddlewareUseCaseConstructorType = {
  authMiddlewareRepository: IAuthMiddlewareRepository;
  tokenValidator: ITokenValidator;
}

type DecodedToken = {
  sub: string;
}

/**
 * This class represents a use case for authentication middleware.
 * @implements {IAuthMiddlewareUseCase}
 */
export class AuthMiddlewareUseCase implements IAuthMiddlewareUseCase {
  private readonly authMiddlewareRepository: IAuthMiddlewareRepository;

  private readonly tokenValidator: ITokenValidator;

  /**
   * Creates a new instance of AuthMiddlewareUseCase.
   * @param {AuthMiddlewareUseCaseConstructorType} param0 - An object containing the authentication middleware repository and token validator.
   */
  constructor({ authMiddlewareRepository, tokenValidator }: AuthMiddlewareUseCaseConstructorType) {
    this.authMiddlewareRepository = authMiddlewareRepository;
    this.tokenValidator = tokenValidator;
  }

  /**
   * Executes the use case, which validates the access token and gets the user.
   * @param {string} accessToken - The access token.
   * @returns {Promise<AuthMiddlewareUseCaseOutputType>} A promise that resolves to the user ID and authentication provider ID.
   * @throws {TokenValidationError} If the access token is not in the correct format or is not a bearer token.
   * @throws {NotFoundError} If the user was not found.
   */
  async execute(accessToken: string): Promise<AuthMiddlewareUseCaseOutputType> {
    const splitToken = accessToken.split(' ');

    if (splitToken.length !== 2) throw new TokenValidationError(ERROR_MESSAGES.TOKEN_VALIDATION.INVALID_TOKEN_FORMAT);

    const [tokenType, token] = splitToken;

    if (tokenType !== 'Bearer') throw new TokenValidationError(ERROR_MESSAGES.TOKEN_VALIDATION.INVALID_TOKEN_TYPE);

    const { sub } = await this.tokenValidator.validate<DecodedToken>(token);
    const result = await this.authMiddlewareRepository.getOneById(sub);

    if (result === undefined) throw new NotFoundError(ERROR_MESSAGES.NOT_FOUND.USER, ERROR_CODES.NOT_FOUND.USER);

    return {
      userId: result.id,
    };
  }
}
