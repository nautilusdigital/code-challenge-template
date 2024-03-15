import { RequestHandler } from 'express';

import { Controller } from '../../Application/Controller/Implementations';
import { parseErrorToStatusCode } from '../../../Utils';

type AdapterFunctionType = (controller: Controller) => RequestHandler;

/**
 * Express Adapter Function.
 *
 * @param controller - The controller instance.
 * @returns The request handler function.
 */
export const expressAdapter: AdapterFunctionType = (controller) => async (req, res) => {
  const { data, error } = await controller.execute({
    ...req.body, ...req.params, ...req.query,
  });

  if (error === undefined) {
    if (data === undefined) {
      return res.status(204).send();
    }

    return res.status(200).json(data);
  }

  return res.status(parseErrorToStatusCode(error)).json(error);
};
