import { Router } from 'express';

import { expressAdapter as adapt } from '../../../Common/Main/Adapters';
import { makeContactCreateController, makeContactIndexController } from './Factories/Application/controller';

export const contactRoutes = Router();

contactRoutes.post('/', adapt(makeContactCreateController()));
contactRoutes.get('/', adapt(makeContactIndexController()));
