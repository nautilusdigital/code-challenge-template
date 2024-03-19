import { MockProxy, mock } from 'jest-mock-extended';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { AuthUseCase } from '../../../../../src/Modules/Auth/Auth/Domain/Implementations';
import { IAuthRepository } from '../../../../../src/Modules/Auth/Auth/Domain/Interfaces';
import { BadRequestError } from '../../../../../src/Common/Domain/Errors';
import { ERROR_CODES, ERROR_MESSAGES } from '../../../../../src/Utils';

jest.mock('../../../../../src/Common/Domain/Errors/bad-request-error');

describe('AuthUseCase', () => {
  let authRepository: MockProxy<IAuthRepository>;
  let sut: AuthUseCase;

  const date = new Date();
  const accessToken = 'any-access-token';

  const inputData = {
    email: 'any_email',
    password: 'any_password',
  };

  const authenticateReturnObject = {
    id: 'any_id',
    name: 'any-first-name any-last-name',
    password: 'any-password',
    email: 'any-email',
    userType: 'any-user-time',
    createdAt: `${date}`,
  };

  const useCaseReturnObject = {
    id: 'any_id',
    name: 'any-first-name any-last-name',
    email: 'any-email',
    userType: 'any-user-time',
    createdAt: `${date}`,
  };

  beforeAll(() => {
    authRepository = mock();
    authRepository.authenticate.mockResolvedValue(authenticateReturnObject);

    jest.spyOn(bcrypt, 'compare').mockResolvedValue(true as never);
    jest.spyOn(jsonwebtoken, 'sign').mockReturnValue(accessToken as never);
  });

  beforeEach(() => {
    sut = new AuthUseCase({ repository: authRepository });
  });

  it('should call authRepository with correct params', async () => {
    await sut.execute(inputData);

    expect(authRepository.authenticate).toHaveBeenCalledWith({ email: inputData.email });
    expect(authRepository.authenticate).toHaveBeenCalledTimes(1);
  });

  it('should return correct data', async () => {
    const result = await sut.execute(inputData);

    expect(result).toEqual({
      user: useCaseReturnObject,
      tokens: {
        accessToken,
      },
    });
  });

  it('should throw a BadRequestError if user is underfined throws an error', async () => {
    authRepository.authenticate.mockResolvedValue(undefined);

    const promise = sut.execute(inputData);

    await expect(promise).rejects.toBeInstanceOf(BadRequestError);
    expect(BadRequestError).toHaveBeenCalledWith(ERROR_MESSAGES.BAD_REQUEST.LOGIN, ERROR_CODES.BAD_REQUEST.LOGIN);
    expect(BadRequestError).toHaveBeenCalledTimes(1);
  });

  it('should throw a BadRequestError if password is wrong', async () => {
    jest.spyOn(bcrypt, 'compare').mockResolvedValue(false as never);

    const promise = sut.execute(inputData);

    await expect(promise).rejects.toBeInstanceOf(BadRequestError);
    expect(BadRequestError).toHaveBeenCalledWith(ERROR_MESSAGES.BAD_REQUEST.LOGIN, ERROR_CODES.BAD_REQUEST.LOGIN);
    expect(BadRequestError).toHaveBeenCalledTimes(1);
  });
});
