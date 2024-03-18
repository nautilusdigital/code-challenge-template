/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';

import { PrismaRepository } from '../../../../../Common/Infra/DB/Prisma';
import { ISignUpRepository, SignUpOperationType } from '../../../Domain/Interfaces';
import { NotFoundError } from '../../../../../Common/Domain/Errors';

type SignUpPrismaRepositoryConstructorType = {
  client: PrismaClient;
}

export class SignUpPrismaRepository extends PrismaRepository implements ISignUpRepository {
  private readonly client: PrismaClient;

  constructor({ client }: SignUpPrismaRepositoryConstructorType) {
    super();

    this.client = client;
  }

  async signUp(data: SignUpOperationType): Promise<void> {
    const userType = await this.execute<any, any>(this.client.userType.findFirst, {
      where: {
        name: 'applicant',
      },
    });

    if (!userType) throw new NotFoundError('User type not found', 'E02001');

    await this.execute<any, any>(this.client.user.create, {
      data: {
        lastName: data.lastName,
        firstName: data.firstName,
        email: data.email,
        password: data.password,
        userTypeId: userType.id,
      },
    });
  }
}
