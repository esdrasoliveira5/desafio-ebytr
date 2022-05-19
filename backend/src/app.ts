import express, { Router } from 'express';
import Cors from 'cors';
import connectToDatabase from './connection';

require('express-async-errors');

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(Cors());
    this.app.use(express.json());
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase();

    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;