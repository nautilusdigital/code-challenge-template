import { MockProxy, mock } from 'jest-mock-extended';
import jsonwebtoken from 'jsonwebtoken';
import { IRefreshAuthRepository } from '../../../../../src/Modules/Auth/RefreshAuth/Domain/Interfaces';
import { AuthRefreshUseCase } from '../../../../../src/Modules/Auth/RefreshAuth/Domain/Implementations';

jest.mock('../../../../../src/Common/Domain/Errors/bad-request-error');

describe('RefreshAuthUseCase', () => {
  let refreshAuthRepository: MockProxy<IRefreshAuthRepository>;
  let sut: AuthRefreshUseCase;

  const date = new Date();
  const accessToken = 'any-access-token';

  const inputData = {
    id: 'any-id',
  };

  const authenticateReturnObject = {
    id: 'any_id',
    name: 'any-first-name any-last-name',
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
    refreshAuthRepository = mock();
    refreshAuthRepository.getOneById.mockResolvedValue(authenticateReturnObject);

    jest.spyOn(jsonwebtoken, 'sign').mockReturnValue(accessToken as never);
  });

  beforeEach(() => {
    sut = new AuthRefreshUseCase({ repository: refreshAuthRepository });
  });

  it('should call authRepository with correct params', async () => {
    await sut.execute(inputData);

    expect(refreshAuthRepository.getOneById).toHaveBeenCalledWith(inputData);
    expect(refreshAuthRepository.getOneById).toHaveBeenCalledTimes(1);
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
});
