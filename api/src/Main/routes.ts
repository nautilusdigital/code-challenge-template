import { Router } from 'express';
import { contactRoutes } from '../Modules/Contacts/Main/routes';
import { ReportRoutes } from '../Modules/Reports/Main/routes';

export const routes = Router();

routes.get('/healthcheck', (_, res) => res.json({ status: 'ok' }));

routes.use('/v1/contact', contactRoutes);

routes.use('/v1/reports', ReportRoutes);
