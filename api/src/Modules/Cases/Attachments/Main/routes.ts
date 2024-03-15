import { Router } from 'express';

import { expressAdapter as adapt } from '../../../../Common/Main/Adapters';
import { makeCaseAttachmentUploadController } from './Factories/Application/controller';
import { multerMiddleware } from '../../../../Common/Application/Middleware/Implementations';

export const attachmentsRoutes = Router();

attachmentsRoutes.post('/', multerMiddleware, adapt(makeCaseAttachmentUploadController()));
