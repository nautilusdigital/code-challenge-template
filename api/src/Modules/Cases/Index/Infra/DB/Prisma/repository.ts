/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';
import { PrismaRepository } from '../../../../../../Common/Infra/DB/Prisma';
import { CaseIndexRepositoryInputType, CaseIndexRepositoryOutputType, ICaseIndexRepository } from '../../../Domain/Interface';

type CaseIndexPrismaRepositoryConstructorType = {
  client: PrismaClient;
}

export class CaseIndexPrismaRepository extends PrismaRepository implements ICaseIndexRepository {
  private readonly client: PrismaClient;

  constructor({ client }: CaseIndexPrismaRepositoryConstructorType) {
    super();

    this.client = client;
  }

  async index({
    firstName, lastName, phone, caseId,
  }: CaseIndexRepositoryInputType): Promise<CaseIndexRepositoryOutputType[]> {
    const whereQuery: Record<string, any> = {};
    if (firstName) {
      whereQuery.client = {
        firstName: {
          contains: firstName,
          mode: 'insensitive',
        },
      };
    }

    if (lastName) {
      whereQuery.client = {
        lastName: {
          contains: lastName,
          mode: 'insensitive',
        },
      };
    }

    if (phone) {
      whereQuery.client = {
        phone: {
          contains: phone,
          mode: 'insensitive',
        },
      };
    }

    if (caseId) {
      whereQuery.id = {
        equals: caseId,
      };
    }

    const selectQuery = {
      client: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
      status: {
        select: {
          name: true,
        },
      },
      user: {
        select: {
          name: true,
        },
      },
      caseAttachment: {
        select: {
          fileName: true,
        },
      },
    };

    const query = Object.keys(whereQuery).length > 0 ? {
      where: whereQuery,
      include: selectQuery,
    } : { include: selectQuery };

    const results: any[] = await this.execute<any, any>(this.client.case.findMany, {
      ...query,
    });

    return results.map((contact: any) => ({
      id: contact.id,
      client: `${contact.client.firstName} ${contact.client.lastName}`,
      issueType: contact.issueType,
      notes: contact.notes,
      nextReviewDate: contact.reviewDate,
      attachment: (contact.caseAttachment.map((attachment: any) => attachment.fileName)).join(', '),
      status: contact.status.name,
      createdBy: contact.user.name,
    }));
  }
}
