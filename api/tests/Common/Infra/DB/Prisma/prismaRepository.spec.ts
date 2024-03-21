import { PrismaRepository } from '../../../../../src/Common/Infra/DB/Prisma';
import { DatabaseError } from '../../../../../src/Common/Infra/Errors';

jest.mock('../../../../../src/Common/Infra/Errors/databaseError');

class PrismaRepositoryStub extends PrismaRepository {}

describe('PrismaRepository', () => {
  let sut: PrismaRepository;
  let mockAction: jest.Mock;

  const actionArgs = { any: 'arg' };
  const data = 'any_result';

  beforeEach(() => {
    mockAction = jest.fn();
    sut = new PrismaRepositoryStub();
  });

  it('should return the same value as execute method returns', async () => {
    mockAction.mockResolvedValueOnce(data);

    const result = await sut.execute(mockAction, actionArgs);

    expect(result).toEqual(data);
    expect(mockAction).toHaveBeenCalledWith(actionArgs);
    expect(mockAction).toHaveBeenCalledTimes(1);
  });

  it('should throw a Database error if client fails', async () => {
    const error = { code: 'any_code', message: 'any_message' };

    mockAction.mockRejectedValueOnce(error);

    const promise = sut.execute(mockAction, actionArgs);

    await expect(promise).rejects.toBeInstanceOf(DatabaseError);
    expect(DatabaseError).toHaveBeenCalledWith(error.message, 'prisma', error.code);
    expect(DatabaseError).toHaveBeenCalledTimes(1);
  });

  it('should throw a Database error if client fails three times with error code P1000', async () => {
    const error = { code: 'P1000', message: 'any_message' };

    mockAction.mockRejectedValue(error);

    const promise = sut.execute(mockAction, actionArgs);

    await expect(promise).rejects.toBeInstanceOf(DatabaseError);
    expect(DatabaseError).toHaveBeenCalledWith(error.message, 'prisma', error.code);
    expect(DatabaseError).toHaveBeenCalledTimes(1);

    expect(mockAction).toHaveBeenNthCalledWith(2, actionArgs);
    expect(mockAction).toHaveBeenNthCalledWith(3, actionArgs);
    expect(mockAction).toHaveBeenLastCalledWith(actionArgs);
    expect(mockAction).toHaveBeenCalledTimes(4);
  });

  it('should resolve the promise if client fails once with error code P1000', async () => {
    const error = { code: 'P1000', message: 'any_message' };

    mockAction
      .mockRejectedValueOnce(error)
      .mockResolvedValueOnce(data);

    const result = await sut.execute(mockAction, actionArgs);

    expect(result).toEqual(data);
    expect(mockAction).toHaveBeenLastCalledWith(actionArgs);
    expect(mockAction).toHaveBeenCalledTimes(2);
  });
});
