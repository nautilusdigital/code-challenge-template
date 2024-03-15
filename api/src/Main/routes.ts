import { Router } from 'express';
import { contactRoutes } from '../Modules/Contacts/Main/routes';
import { reportRoutes } from '../Modules/Reports/Main/routes';
import { caseRoutes } from '../Modules/Cases/Main/routes';
import { usersRoutes } from '../Modules/Users/Main/routes';
import { utilsRoutes } from '../Modules/Utils/Main/routes';

export const routes = Router();

routes.get('/healthcheck', (_, res) => res.json({ status: 'ok' }));

routes.use('/v1/contact', contactRoutes);

routes.use('/v1/reports', reportRoutes);
routes.use('/v1/case', caseRoutes);
routes.use('/v1/user', usersRoutes);
routes.use('/v1/utils', utilsRoutes);
