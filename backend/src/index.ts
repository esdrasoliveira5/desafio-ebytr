import App from './app';
import UserController from './controllers/UserController';
import UserModel from './models/UserModel';
import CustomRouter from './Routes/Routes';
import UserService from './services/UserService';
import { UserData } from './types/UserDataType';
import { User } from './types/UserType';

const server = new App();

const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UserController(userService);
const userRouter = new CustomRouter<User | UserData>();
userRouter.addRoute(userController);
server.addRouter(userRouter.router);

server.startServer();

export default server;