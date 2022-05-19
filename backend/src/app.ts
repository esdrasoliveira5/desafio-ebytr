import express, { Request, Response } from 'express';
import Cors from 'cors';

require('express-async-errors');

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(Cors());
    this.app.use(express.json());
    this.app.get('/', async ( _req: Request, res: Response) => res.status(200).json({message: 'OK'}));
  }

  public startServer(PORT: string | number = 3001): void {
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public getApp() {
    return this.app;
  }
}

export default App;