import { Router } from 'express';

import { expressAdapter as adapt } from '../../../Common/Main/Adapters';
import { makeCaseIndexController } from './Factories/Application/controller';

export const caseRoutes = Router();

caseRoutes.get('/', adapt(makeCaseIndexController()));
