/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';

import { PrismaRepository } from '../../../../../Common/Infra/DB/Prisma';
import { ISignUpRepository, SignUpOperationType } from '../../../Domain/Interfaces';
import { NotFoundError } from '../../../../../Common/Domain/Errors';
import { ERROR_CODES, ERROR_MESSAGES } from '../../../../../Utils';

type SignUpRepositoryConstructorType = {
  client: PrismaClient;
}

export class SignUpRepository extends PrismaRepository implements ISignUpRepository {
  private readonly client: PrismaClient;

  constructor({ client }: SignUpRepositoryConstructorType) {
    super();

    this.client = client;
  }

  async signUp(data: SignUpOperationType): Promise<void> {
    const userType = await this.execute<any, any>(this.client.userType.findFirst, {
      where: {
        name: data.userType,
      },
    });

    if (!userType) throw new NotFoundError(ERROR_MESSAGES.NOT_FOUND.USER_TYPE, ERROR_CODES.NOT_FOUND.USER_TYPE);

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
