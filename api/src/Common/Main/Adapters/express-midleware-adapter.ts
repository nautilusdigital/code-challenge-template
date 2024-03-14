/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { RequestHandler } from 'express';

import { Middleware } from '../../Application/Middleware/Implementations';
import { parseErrorToStatusCode } from '../../../Utils';

type AdapterFunctionType = (middleware: Middleware) => RequestHandler;

/**
 * This function adapts a middleware to be used with Express.js.
 * @type {AdapterFunctionType}
 * @param {Middleware} middleware - The middleware to adapt.
 * @returns {RequestHandler} The adapted middleware.
 */
export const expressMiddlewareAdapter: AdapterFunctionType = (middleware) => async (req, res, next) => {
  const { data, error } = await middleware.execute<never>({ ...req.headers });

  if (error === undefined) {
    if (data !== undefined) {
      const entries = Object.entries(data).filter((entry) => entry[1]);
      req.locals = { ...req.locals, ...Object.fromEntries(entries) };
    }

    next();
  } else {
    res.status(parseErrorToStatusCode(error)).json(error);
  }
};
