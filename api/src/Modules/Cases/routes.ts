import { Router } from 'express';
import { attachmentsRoutes } from './Attachments/Main/routes';

export const casesRoutes = Router();

casesRoutes.use('/attachments', attachmentsRoutes);
