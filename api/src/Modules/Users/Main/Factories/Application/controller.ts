import { UsersIndexController } from '../../../Index/Application/Implementations';
import { makeUsersIndexUseCase } from '../Domain/useCase';

export const makeUsersIndexController = () => new UsersIndexController({ useCase: makeUsersIndexUseCase() });
