import { MockProxy, mock } from 'jest-mock-extended';

import { ERROR_MESSAGES } from '../../../../../src/Utils';
import { AuthMiddlewareUseCase } from '../../../../../src/Common/Modules/Auth/Domain/Implementations';
import { NotFoundError, TokenValidationError } from '../../../../../src/Common/Domain/Errors';
import { IAuthMiddlewareRepository, ITokenValidator } from '../../../../../src/Common/Modules/Auth/Domain/Interfaces';

jest.mock('../../../../../src/Common/Domain/Errors/tokenValidationError');

describe('AuthMiddlewareUseCase', () => {
  let authMiddlewareRepository: MockProxy<IAuthMiddlewareRepository>;
  let tokenValidator: MockProxy<ITokenValidator>;

  let sut: AuthMiddlewareUseCase;

  const tokenType = 'Bearer';
  const token = 'any_access_token';
  const inputData = `${tokenType} ${token}`;

  const id = 'any_id';
  const authMiddlewareRepositoryGetUserReturnObject = {
    id,
  };

  const sub = 'any_sub';
  const tokenValidatorReturnObject = {
    sub,
  };

  beforeAll(() => {
    authMiddlewareRepository = mock();
    authMiddlewareRepository.getOneById.mockResolvedValue(authMiddlewareRepositoryGetUserReturnObject);

    tokenValidator = mock();
    tokenValidator.validate.mockResolvedValue(tokenValidatorReturnObject);
  });

  beforeEach(() => {
    sut = new AuthMiddlewareUseCase({ authMiddlewareRepository, tokenValidator });
  });

  it('should call tokenValidator.validate with correct params', async () => {
    await sut.execute(inputData);

    expect(tokenValidator.validate).toHaveBeenCalledWith(token);
    expect(tokenValidator.validate).toHaveBeenCalledTimes(1);
  });

  it('should call authMiddlewareRepository.getOneById with correct params', async () => {
    await sut.execute(inputData);

    expect(authMiddlewareRepository.getOneById).toHaveBeenCalledWith(sub);
    expect(authMiddlewareRepository.getOneById).toHaveBeenCalledTimes(1);
  });

  it('should return correct data', async () => {
    const result = await sut.execute(inputData);

    expect(result).toEqual({ userId: id });
  });

  it('should throw a TokenValidationError if token format is invalid', async () => {
    const result = sut.execute('any_invalid_token_format');

    await expect(result).rejects.toBeInstanceOf(TokenValidationError);
    expect(TokenValidationError).toHaveBeenCalledWith(ERROR_MESSAGES.TOKEN_VALIDATION.INVALID_TOKEN_FORMAT);
    expect(TokenValidationError).toHaveBeenCalledTimes(1);
  });

  it('should throw a TokenValidationError if the token type is not "Bearer"', async () => {
    const result = sut.execute('any_type any_token');

    await expect(result).rejects.toBeInstanceOf(TokenValidationError);
    expect(TokenValidationError).toHaveBeenCalledWith(ERROR_MESSAGES.TOKEN_VALIDATION.INVALID_TOKEN_TYPE);
    expect(TokenValidationError).toHaveBeenCalledTimes(1);
  });

  it('should throw a NotFoundError if authMiddlewareRepository.getOneById returns undefined', async () => {
    authMiddlewareRepository.getOneById.mockResolvedValueOnce(undefined);

    const result = sut.execute(inputData);

    await expect(result).rejects.toBeInstanceOf(NotFoundError);
  });
});
