import cors from 'cors';
import express from 'express';

class App {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  app: any;
  constructor() {
    this.app = express();
    this.middlewares();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }
}

export default new App().app;
