/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import { contactRoutes } from '../Modules/Contacts/Main/routes';
import { casesRoutes } from '../Modules/Cases/routes';

export const routes = Router();

routes.get('/healthcheck', (_, res) => res.json({ status: 'ok' }));

routes.use('/v1/contact', contactRoutes);
routes.use('/v1/cases', casesRoutes);
