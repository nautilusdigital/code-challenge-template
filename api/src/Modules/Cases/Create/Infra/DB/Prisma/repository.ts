import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { PrismaRepository } from '../../../../../../Common/Infra/DB/Prisma';
import {
  CaseCreateRepositoryInputType, CaseCreateRepositoryOutputType, ICaseCreateRepository,
} from '../../../Domain/Interface';

type AuthPrismaRepositoryConstructorType = {
  client: PrismaClient;
}

export class CaseCreatePrismaRepository extends PrismaRepository implements ICaseCreateRepository {
  private readonly client: PrismaClient;

  constructor({ client }: AuthPrismaRepositoryConstructorType) {
    super();

    this.client = client;
  }

  async create(data: CaseCreateRepositoryInputType): Promise<CaseCreateRepositoryOutputType> {
    const { fileNames, ...rest } = data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const status = await this.execute<any, any>(this.client.status.findFirst, {
      where: {
        name: 'Open',
      },
      select: {
        id: true,
      },
    });

    console.log(status);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await this.execute<any, any>(this.client.case.create, {
      data: {
        ...rest,
        reviewDate: new Date(data.reviewDate),
        // closedDate: new Date('2024-01-03'),
        // updatedAt: new Date().toISOString(),
        statusId: status.id,
      },
    });

    const files = fileNames.map((fileName) => ({
      caseId: result.id,
      fileName,
    }));

    this.client.caseAttachment.createMany({
      data: files,
    });

    return { id: result.id };
  }
}
