import { Router } from 'express';

import { expressAdapter as adapt } from '../../../Common/Main/Adapters';
import { makeCaseCreateController } from './Factories/Application/controller';

export const caseRoutes = Router();

caseRoutes.post('/', adapt(makeCaseCreateController()));
