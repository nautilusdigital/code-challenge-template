import { PrismaClient } from '@prisma/client';
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await this.execute<any, any>(this.client.case.create, {
      data: {
        ...rest,
        reviewDate: new Date(data.reviewDate),
        statusId: status.id,
      },
    });

    const files = fileNames.map((fileName) => ({
      caseId: result.id,
      fileName,
    }));

    await this.client.caseAttachment.createMany({
      data: files,
    });

    return { id: result.id };
  }
}
