import { Router } from 'express';

import { expressAdapter as adapt } from '../../../Common/Main/Adapters';
import { makeAuthController, makeRefreshAuthController } from './Factories/Application/controller';
import { authMiddleware } from '../../../Common/Modules/Auth/Main/Factories';

export const authRoutes = Router();

authRoutes.post('/refresh', authMiddleware, adapt(makeRefreshAuthController()));
authRoutes.post('/', adapt(makeAuthController()));
