/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';

export const routes = Router();

routes.get('/healthcheck', (_, res) => res.json({ status: 'ok' }));
