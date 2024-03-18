import { PrismaClient } from '@prisma/client';

import { PrismaRepository } from '../../../../../Common/Infra/DB/Prisma';
import { AuthRepositoryInputType, AuthRepositoryOutputType, IAuthRepository } from '../../../Domain/Interfaces';

type AuthPrismaRepositoryConstructorType = {
  client: PrismaClient;
}

export class AuthPrismaRepository extends PrismaRepository implements IAuthRepository {
  private readonly client: PrismaClient;

  constructor({ client }: AuthPrismaRepositoryConstructorType) {
    super();

    this.client = client;
  }

  async authenticate({ email }: AuthRepositoryInputType): Promise<AuthRepositoryOutputType | undefined> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await this.execute<any, any>(this.client.user.findFirst, {
      where: {
        email,
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

    return result === null ? undefined : {
      id: result.id,
      email: result.email,
      password: result.password,
      userType: result.userType.name,
      name: `${result.firstName} ${result.lastName}`,
      createdAt: result.createdAt,
    };
  }
}
