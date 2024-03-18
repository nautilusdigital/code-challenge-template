/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';

import { signUpRoutes } from '../Modules/Sign-up/Main/routes';
import { authRoutes } from '../Modules/Auth/Main/routes';
import { authMiddleware } from '../Common/Modules/Auth/Main/Factories';
import { GetSelectOptionsRoutes } from '../Modules/Utils/Select-options/Main/routes';

export const routes = Router();

routes.get('/healthcheck', (_, res) => res.json({ status: 'ok' }));

routes.use('/v1/signup', signUpRoutes);
routes.use('/v1/auth', authRoutes);
routes.use('/v1/utils/select-options', authMiddleware, GetSelectOptionsRoutes);
