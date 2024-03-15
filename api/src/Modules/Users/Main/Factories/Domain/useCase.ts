import { UsersIndexUseCase } from '../../../Index/Domain/Implementations';
import { makeUsersIndexPrismaRepository } from '../Infra/DB/Prisma/repository';

export const makeUsersIndexUseCase = () => new UsersIndexUseCase({
  repository: makeUsersIndexPrismaRepository(),
});
