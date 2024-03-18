import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

import { PrismaRepository } from '../../../../../Infra/DB/Prisma';
import { GetOneByIdOutputType, IAuthMiddlewareRepository } from '../../../Domain/Interfaces';

/**
 * This class represents a repository for authentication middleware.
 * @extends {PrismaRepository}
 * @implements {IAuthMiddlewareRepository}
 */
export class AuthMiddlewareRepository extends PrismaRepository implements IAuthMiddlewareRepository {
  private readonly client: PrismaClient;

  /**
   * Creates a new instance of AuthMiddlewareRepository.
   * @param {PrismaClient} client - The Prisma client to be used to interact with the database.
   */
  constructor(client: PrismaClient) {
    super();

    this.client = client;
  }

  /**
   * Gets a user by their authentication provider ID.
   * @param {string} id - The authentication provider ID of the user to get.
   * @returns {Promise<GetOneByIdOutputType | undefined>} A promise that resolves to the user, or undefined if no user was found.
   */
  async getOneById(id: string): Promise<GetOneByIdOutputType | undefined> {
    return this.execute<Prisma.UserFindFirstArgs<DefaultArgs>>(this.client.user.findFirst, {
      where: {
        id,
      },
      select: {
        id: true,
      },
    });
  }
}
