import App from './app';
import TaskController from './controllers/TaskController';
import UserController from './controllers/UserController';
import UserModel from './models/UserModel';
import CustomRouter from './Routes/Routes';
import TaskService from './services/TaskService';
import UserService from './services/UserService';
import { TaskType } from './types/TasksType';
import { UserData } from './types/UserDataType';
import { User } from './types/UserType';

const server = new App();
const userModel = new UserModel();
const userService = new UserService(userModel);
const taskService = new TaskService(userModel);
const userController = new UserController(userService);
const taskController = new TaskController(taskService);
const userRouter = new CustomRouter<User | UserData>();
const taskRouter = new CustomRouter<User | TaskType>();
userRouter.addRoute(userController);
taskRouter.addRoute(taskController);
server.addRouter(userRouter.router);
server.addRouter(taskRouter.router);

server.startServer();

export default server;