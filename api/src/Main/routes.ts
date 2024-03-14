/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';

import { STRApplicationRoutes } from '../Modules/STR-applications/Main/routes';

export const routes = Router();

routes.get('/healthcheck', (_, res) => res.json({ status: 'ok' }));

routes.use('/v1/str-applications', STRApplicationRoutes);
