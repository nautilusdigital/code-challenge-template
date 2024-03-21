import { NotFoundError } from '../../../../../../src/Common/Domain/Errors';
import { PrismaRepository } from '../../../../../../src/Common/Infra/DB/Prisma';
import { SignUpRepository } from '../../../../../../src/Modules/Sign-up/Infra/DB/Prisma';
import { ERROR_CODES, ERROR_MESSAGES } from '../../../../../../src/Utils';
import { MockContext, Context, createMockContext } from '../../../../../mocks/prismaDependencyInjection';

jest.mock('../../../../../../src/Common/Domain/Errors/appError');
jest.mock('../../../../../../src/Common/Domain/Errors/notFoundError');

describe('SignupRepository', () => {
  let sut: SignUpRepository;

  let mockCtx: MockContext;
  let ctx: Context;

  const mockedUserType = { id: 'any_id', name: 'user' };

  const inputData = {
    firstName: 'any_first_name',
    lastName: 'any_last_name',
    email: 'any_email',
    password: 'any_password',
    userType: 'user',
  };

  beforeAll(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;
  });

  beforeEach(() => {
    sut = new SignUpRepository({ client: ctx.prisma });
  });

  it('should be an instance of PrismaRepository', () => {
    expect(sut).toBeInstanceOf(PrismaRepository);
  });

  it('should call execute method with correct parameters', async () => {
    const spy = jest.spyOn(sut, 'execute').mockResolvedValueOnce(mockedUserType);
    await sut.signUp(inputData);

    expect(spy).toHaveBeenCalledWith(mockCtx.prisma.userType.findFirst, {
      where: {
        name: inputData.userType,
      },
    });

    expect(sut.execute).toHaveBeenCalledWith(mockCtx.prisma.user.create, {
      data: {
        lastName: inputData.lastName,
        firstName: inputData.firstName,
        email: inputData.email,
        password: inputData.password,
        userTypeId: mockedUserType.id,
      },
    });

    expect(sut.execute).toHaveBeenCalledTimes(2);
  });

  it('should return undefined if user creation succeeded', async () => {
    jest.spyOn(sut, 'execute').mockResolvedValueOnce(mockedUserType);

    const result = await sut.signUp(inputData);

    expect(result).toBeUndefined();
  });

  it('should return an error, if userType does not exist', async () => {
    jest.spyOn(sut, 'execute').mockRejectedValueOnce(new NotFoundError(ERROR_MESSAGES.NOT_FOUND.USER_TYPE, ERROR_CODES.NOT_FOUND.USER_TYPE));

    await expect(sut.signUp(inputData)).rejects.toBeInstanceOf(NotFoundError);

    expect(NotFoundError).toHaveBeenCalledWith(ERROR_MESSAGES.NOT_FOUND.USER_TYPE, ERROR_CODES.NOT_FOUND.USER_TYPE);
    expect(NotFoundError).toHaveBeenCalledTimes(1);
  });
});
