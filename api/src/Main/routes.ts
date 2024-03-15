/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import { contactRoutes } from '../Modules/Contacts/Main/routes';
import { caseRoutes } from '../Modules/Cases/Main/routes';

export const routes = Router();

routes.get('/healthcheck', (_, res) => res.json({ status: 'ok' }));

routes.use('/v1/contact', contactRoutes);
routes.use('/v1/case', caseRoutes);
