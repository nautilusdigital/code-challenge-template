import { PrismaClient } from '@prisma/client';
import { DBURIBuilder, DBURIBuilderType } from '../../../../Utils';
import { envVariables } from '../../../../Config';

/**
 * Singleton class for PrismaClient.
 */
export class PrismaClientSingleton {
  /**
   * The instance of the PrismaClient.
   *
   * @private
   * @static
   * @type {PrismaClient | undefined}
   */
  private static instance: PrismaClient | undefined;

  /**
   * Returns the singleton instance of the PrismaClient.
   *
   * @static
   * @returns {PrismaClient} The singleton instance of PrismaClient.
   */
  static getInstance(): PrismaClient {
    if (PrismaClientSingleton.instance === undefined) {
      PrismaClientSingleton.instance = new PrismaClient({
        datasources: {
          db: {
            url: DBURIBuilder({
              engine: envVariables.database.engine as DBURIBuilderType['engine'],
              host: envVariables.database.host,
              port: envVariables.database.port,
              database: envVariables.database.database,
              username: envVariables.database.username,
              password: envVariables.database.password,
              schema: envVariables.database.schema,
            }),
          },
        },
      });
    }

    return PrismaClientSingleton.instance;
  }
}
