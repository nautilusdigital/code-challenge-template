import { Router } from 'express';

import { expressAdapter as adapt } from '../../../Common/Main/Adapters';
import { makeReportController } from './Factories/Application/controller';

export const reportRoutes = Router();

reportRoutes.get('/', adapt(makeReportController()));
