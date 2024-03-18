/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';

import { PrismaRepository } from '../../../../../../Common/Infra/DB/Prisma';
import { IGetSelectOptionsRepository, GetSelectOptionsOutputType } from '../../../Domain/Interfaces';

type GetSelectOptionsPrismaRepositoryConstructorType = {
  client: PrismaClient;
};

export class GetSelectOptionsPrismaRepository extends PrismaRepository implements IGetSelectOptionsRepository {
  private readonly client: PrismaClient;

  constructor({ client }: GetSelectOptionsPrismaRepositoryConstructorType) {
    super();

    this.client = client;
  }

  async get(): Promise<GetSelectOptionsOutputType> {
    const exampleUtilsRaw = await this.execute<any, any>(this.client.exmapleSelectUtils.findMany, {});

    const exampleUtils = exampleUtilsRaw.map((item: any) => ({
      id: item.id,
      value: item.name,
    }));

    return {
      exampleUtils,
    };
  }
}
