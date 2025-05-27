import cors from 'cors';
import express from 'express';
import router from './routes/routes';

class App {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  app: any;
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }
  routes() {
    this.app.use(router);
  }
}

export default new App().app;
