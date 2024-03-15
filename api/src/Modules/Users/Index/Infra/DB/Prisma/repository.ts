import { PrismaClient } from '@prisma/client';
import { PrismaRepository } from '../../../../../../Common/Infra/DB/Prisma';
import { UsersIndexRepositoryOutputType, IUsersIndexRepository } from '../../../Domain/Interface';

type AuthPrismaRepositoryConstructorType = {
  client: PrismaClient;
}

export class UsersIndexPrismaRepository extends PrismaRepository implements IUsersIndexRepository {
  private readonly client: PrismaClient;

  constructor({ client }: AuthPrismaRepositoryConstructorType) {
    super();

    this.client = client;
  }

  async index(): Promise<UsersIndexRepositoryOutputType[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await this.execute<any, any>(this.client.user.findMany, {
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return result[0];
  }
}
