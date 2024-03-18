import { Router } from 'express';

import { expressAdapter as adapt } from '../../../Common/Main/Adapters';
import { makeSignUpController } from './Factories/Application/controller';

export const signUpRoutes = Router();

signUpRoutes.post('/', adapt(makeSignUpController()));
