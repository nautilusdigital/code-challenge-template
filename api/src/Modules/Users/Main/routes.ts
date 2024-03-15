import { Router } from 'express';

import { expressAdapter as adapt } from '../../../Common/Main/Adapters';
import { makeUsersIndexController } from './Factories/Application/controller';

export const usersRoutes = Router();

usersRoutes.get('/', adapt(makeUsersIndexController()));
