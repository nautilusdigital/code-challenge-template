import { Router } from 'express';

import { expressAdapter as adapt } from '../../../Common/Main/Adapters';
import { makeContactCreateController } from './Factories/Application/controller';

export const contactRoutes = Router();

contactRoutes.post('/', adapt(makeContactCreateController()));
