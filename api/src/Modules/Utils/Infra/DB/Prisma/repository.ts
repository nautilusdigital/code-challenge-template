/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';
import { PrismaRepository } from '../../../../../Common/Infra/DB/Prisma';
import { IUtilsRepository, UtilsRepositoryOutputType } from '../../../Domain/Interface';

type UtilsPrismaRepositoryConstructorType = {
  client: PrismaClient;
}

export class UtilsPrismaRepository extends PrismaRepository implements IUtilsRepository {
  private readonly client: PrismaClient;

  constructor({ client }: UtilsPrismaRepositoryConstructorType) {
    super();

    this.client = client;
  }

  async index(): Promise<UtilsRepositoryOutputType> {
    const [statusesDB, regionsDB] = await Promise.all([
      await this.execute<any, any>(this.client.status.findMany, {}),
      await this.execute<any, any>(this.client.region.findMany, {}),
    ]);

    const statuses = statusesDB.map((status: {name: string, id: string}) => ({ id: status.id, value: status.name }));
    const regions = regionsDB.map((region: {name: string, id: string}) => ({ id: region.id, value: region.name }));
    return { statuses, regions };
  }
}
