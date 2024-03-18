import { Router } from 'express';

import { expressAdapter as adapt } from '../../../../Common/Main/Adapters';
import { makeGetSelectOptionsController } from './Factories/Application/controller';

export const GetSelectOptionsRoutes = Router();

GetSelectOptionsRoutes.get('/', adapt(makeGetSelectOptionsController()));
