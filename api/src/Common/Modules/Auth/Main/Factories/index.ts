import { expressMiddlewareAdapter } from '../../../../Main/Adapters/express-midleware-adapter';
import { makeAuthMiddlewareFactory } from './Application/middleware';

export const authMiddleware = expressMiddlewareAdapter(makeAuthMiddlewareFactory());
