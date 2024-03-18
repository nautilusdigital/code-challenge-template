import { Router } from 'express';

import { expressAdapter as adapt } from '../../../Common/Main/Adapters';
import { makeAuthController } from './Factories/Application/controller';

export const authRoutes = Router();

authRoutes.post('/', adapt(makeAuthController()));
