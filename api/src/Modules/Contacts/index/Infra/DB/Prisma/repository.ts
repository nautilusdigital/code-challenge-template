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

  async index({ userId }: ContactIndexRepositoryInputType): Promise<ContactIndexRepositoryOutputType[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await this.execute<any, any>(this.client.contact.findMany, {
      where: {
        createdBy: userId,
      },
      select: {
        id: true,
        fristName: true,
        lastName: true,
        age: true,
        phone: true,
        city: true,
        email: true,
        category: true,
        regionOther: true,
        region: {
          select: {
            name: true,
            id: true,
          },
        },
      },

    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return result.map((contact: any) => ({
      email: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      age: contact.age,
      phone: contact.phone,
      city: contact.city,
      region: contact.region.name,
      regionOther: contact.regionOther,
      category: contact.category,
    }));
  }
}
