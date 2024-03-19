/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  describe, it, expect, beforeAll, jest,
} from '@jest/globals';
import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { AuthPrismaRepository } from '../../../../../../src/Modules/Auth/Auth/Infra/DB/Prisma';
import { PrismaRepository } from '../../../../../../src/Common/Infra/DB/Prisma';

type Context = {
  prisma: PrismaClient
}

type MockContext = {
  prisma: DeepMockProxy<PrismaClient>
}

const createMockContext = (): MockContext => ({
  prisma: mockDeep<PrismaClient>(),
});

describe('Auth Respository', () => {
  let sut: AuthPrismaRepository;

  let mockCtx: MockContext;
  let ctx: Context;

  const inputData = { email: 'any-email' };
  const date = new Date();

  const returnedData = {
    id: 'any_id',
    firstName: 'any-first-name',
    lastName: 'any-last-name',
    password: 'any-password',
    email: 'any-email',
    createdAt: date,
    userType: {
      name: 'any-user-time',
    },
  };

  const outputData = {
    id: 'any_id',
    name: 'any-first-name any-last-name',
    password: 'any-password',
    email: 'any-email',
    userType: 'any-user-time',
    createdAt: date,
  };

  beforeAll(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;

    mockCtx.prisma.user.findFirst.mockResolvedValue(returnedData as any);
  });

  beforeEach(() => {
    sut = new AuthPrismaRepository({ client: ctx.prisma });
  });

  it('should be an instance of PrismaRepository', () => {
    expect(sut).toBeInstanceOf(PrismaRepository);
  });

  it('should call execute method with correct parameters', async () => {
    const spy = jest.spyOn(sut, 'execute');

    await sut.authenticate(inputData);

    expect(spy).toHaveBeenCalledWith(mockCtx.prisma.user.findFirst, {
      where: {
        ...inputData,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        password: true,
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
    const resultOne = await sut.authenticate(inputData);
    expect(resultOne).toEqual(outputData);

    mockCtx.prisma.user.findFirst.mockResolvedValueOnce(null);
    const resultTwo = await sut.authenticate(outputData);
    expect(resultTwo).toBeUndefined();
  });
});
