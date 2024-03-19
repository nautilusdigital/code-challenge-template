import { PrismaClient } from '@prisma/client';

import { IRefreshAuthRepository, RefreshAuthRepositoryInputType, RefreshAuthRepositoryOutputType } from '../../../Domain/Interfaces';
import { PrismaRepository } from '../../../../../../Common/Infra/DB/Prisma';

type RefreshAuthPrismaRepositoryConstructorType = {
  client: PrismaClient;
}

export class RefreshAuthPrismaRepository extends PrismaRepository implements IRefreshAuthRepository {
  private readonly client: PrismaClient;

  constructor({ client }: RefreshAuthPrismaRepositoryConstructorType) {
    super();

    this.client = client;
  }

  async getOneById({ id }: RefreshAuthRepositoryInputType): Promise<RefreshAuthRepositoryOutputType> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await this.execute<any, any>(this.client.user.findFirst, {
      where: {
        id,
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

    return {
      id: result.id,
      email: result.email,
      password: result.password,
      userType: result.userType.name,
      name: `${result.firstName} ${result.lastName}`,
      createdAt: result.createdAt,
    };
  }
}
