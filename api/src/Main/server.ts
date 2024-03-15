import express, {
  Application, json, Request, Response, NextFunction,
} from 'express';
import cors from 'cors';

import { routes } from './routes';

class Server {
  server: Application;

  constructor() {
    this.server = express();
    this.setup();
  }

  setup() {
    this.server.use(json());
    // this.server.use(cors());
    this.server.use(cors());

    // Add HSTS header to every response
    this.server.use((_: Request, res: Response, next: NextFunction) => {
      res.setHeader('Strict-Transport-Security', 'max-age=31536000;');
      next();
    });

    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
}

export default new Server().server;
