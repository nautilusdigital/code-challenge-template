/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';
import { PrismaRepository } from '../../../../../Common/Infra/DB/Prisma';
import { IReportRepository, ReportRepositoryInputType, ReportRepositoryOutputType } from '../../../Domain/Interface';

type ReportPrismaRepositoryConstructorType = {
  client: PrismaClient;
}

export class ReportPrismaRepository extends PrismaRepository implements IReportRepository {
  private readonly client: PrismaClient;

  constructor({ client }: ReportPrismaRepositoryConstructorType) {
    super();

    this.client = client;
  }

  private async getCount(startDate: string, endDate: string, region: {id: string, name: string}): Promise<ReportRepositoryOutputType> {
    const [openCount, closeCount] = await Promise.all([
      await this.execute<any, any>(this.client.case.count, {
        where: {
          status: { name: 'Open' },
          regionId: region.id,
          createdAt: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        },
      }),

      await this.execute<any, any>(this.client.case.count, {
        where: {
          status: { name: 'Closed' },
          regionId: region.id,
          createdAt: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        },
      }),
    ]);

    return { region: region.name, closed: closeCount, open: openCount };
  }

  async index({ startDate, endDate, regionsId }: ReportRepositoryInputType): Promise<ReportRepositoryOutputType[]> {
    if (!regionsId) {
      const regions = await this.execute<any, any>(this.client.region.findMany, {});

      return Promise.all(regions.map((region: any) => this.getCount(startDate, endDate, region)));
    }

    const regions = regionsId.split(';');

    const selectedRegions = await this.execute<any, any>(this.client.region.findMany, {
      where: { id: { in: regions } },
    });

    return Promise.all(selectedRegions.map((region: any) => this.getCount(startDate, endDate, region)));
  }
}
