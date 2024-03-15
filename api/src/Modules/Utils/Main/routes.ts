import { Router } from 'express';

import { expressAdapter as adapt } from '../../../Common/Main/Adapters';
import { makeUtilsController } from './Factories/Application/controller';

export const utilsRoutes = Router();

utilsRoutes.get('/select-options', adapt(makeUtilsController()));
