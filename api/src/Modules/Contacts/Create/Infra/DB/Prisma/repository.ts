import { PrismaClient } from '@prisma/client';
import { PrismaRepository } from '../../../../../../Common/Infra/DB/Prisma';
import {
  ContactCreateRepositoryInputType, ContactCreateRepositoryOutputType, IContactCreateRepository,
} from '../../../Domain/Interface';

type AuthPrismaRepositoryConstructorType = {
  client: PrismaClient;
}

export class ContactCreatePrismaRepository extends PrismaRepository implements IContactCreateRepository {
  private readonly client: PrismaClient;

  constructor({ client }: AuthPrismaRepositoryConstructorType) {
    super();

    this.client = client;
  }

  async create(data: ContactCreateRepositoryInputType): Promise<ContactCreateRepositoryOutputType> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await this.execute<any, any>(this.client.contact.create, {
      data,
    });

    return { id: result.id };
  }
}
