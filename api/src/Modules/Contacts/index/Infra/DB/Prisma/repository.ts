import { PrismaClient } from '@prisma/client';
import { PrismaRepository } from '../../../../../../Common/Infra/DB/Prisma';
import { ContactIndexRepositoryInputType, ContactIndexRepositoryOutputType, IContactIndexRepository } from '../../../Domain/Interface';

type AuthPrismaRepositoryConstructorType = {
  client: PrismaClient;
}

export class ContactIndexPrismaRepository extends PrismaRepository implements IContactIndexRepository {
  private readonly client: PrismaClient;

  constructor({ client }: AuthPrismaRepositoryConstructorType) {
    super();

    this.client = client;
  }

  async index({ firstName, lastName, phone }: ContactIndexRepositoryInputType): Promise<ContactIndexRepositoryOutputType[]> {
    let whereQuery = {};
    if (firstName) {
      whereQuery = {
        firstName: {
          contains: firstName,
          mode: 'insensitive',
        },
      };
    }

    if (lastName) {
      whereQuery = {
        lastName: {
          contains: lastName,
          mode: 'insensitive',
        },
      };
    }
    if (phone) {
      whereQuery = {
        phone: {
          contains: phone,
          mode: 'insensitive',
        },
      };
    }

    const selectQuery = {
      id: true,
      firstName: true,
      lastName: true,
      age: true,
      phone: true,
      city: true,
      email: true,
      category: true,
      region: {
        select: {
          name: true,
          id: true,
        },
      },
    };

    const query = Object.keys(whereQuery).length > 0 ? {
      where: whereQuery,
      select: selectQuery,
    } : { select: selectQuery };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await this.execute<any, any>(this.client.contact.findMany, {
      ...query,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return result.map((contact: any) => ({
      id: contact.id,
      email: contact.email,
      firstName: contact.firstName,
      lastName: contact.lastName,
      age: contact.age,
      phone: contact.phone,
      city: contact.city,
      region: contact.region.name,
      category: contact.category,
    }));
  }
}
