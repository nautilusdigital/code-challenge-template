import { Router } from 'express';

import { expressAdapter as adapt } from '../../../Common/Main/Adapters';
import { makeCaseIndexController } from './Factories/Application/controller';
import { attachmentsRoutes } from '../Attachments/Main/routes';

export const caseRoutes = Router();

caseRoutes.use('/attachments', attachmentsRoutes);
caseRoutes.get('/', adapt(makeCaseIndexController()));
