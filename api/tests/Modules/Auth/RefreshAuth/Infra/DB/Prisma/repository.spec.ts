import { RefreshAuthPrismaRepository } from '../../../../../../../src/Modules/Auth/RefreshAuth/Infra/DB/Prisma';
import { MockContext, Context, createMockContext } from '../../../../../../mocks/prismaDependencyInjection';

describe('FreshAuth', () => {
  let sut: RefreshAuthPrismaRepository;

  let mockCtx: MockContext;
  let ctx: Context;

  const inputData = { id: 'any-id' };
  const date = new Date();

  const returnedData = {
    id: 'any_id',
    firstName: 'any-first-name',
    lastName: 'any-last-name',
    email: 'any-email',
    createdAt: date,
    userType: {
      name: 'any-user-time',
    },
  };

  const outputData = {
    id: 'any_id',
    name: 'any-first-name any-last-name',
    email: 'any-email',
    userType: 'any-user-time',
    createdAt: date,
  };

  beforeAll(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockCtx.prisma.user.findFirst.mockResolvedValue(returnedData as any);
  });

  beforeEach(() => {
    sut = new RefreshAuthPrismaRepository({ client: ctx.prisma });
  });

  it('should be an instance of PrismaRepository', () => {
    expect(sut).toBeInstanceOf(RefreshAuthPrismaRepository);
  });

  it('should call execute method with correct parameters', async () => {
    const spy = jest.spyOn(sut, 'execute');

    await sut.getOneById(inputData);

    expect(spy).toHaveBeenCalledWith(mockCtx.prisma.user.findFirst, {
      where: {
        ...inputData,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        createdAt: true,
        userType: {
          select: {
            name: true,
          },
        },
      },
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should return correct data', async () => {
    const resultOne = await sut.getOneById(inputData);
    expect(resultOne).toEqual(outputData);
  });
});
