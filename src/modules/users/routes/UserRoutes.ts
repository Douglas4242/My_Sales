import { Router } from 'express';
import UserControllers from '../controllers/UsersControllers';
import { createUserSchema } from '../schemas/UserSchema';

const usersRouter = Router();
const userController = new UserControllers();

usersRouter.get('/', userController.index);
usersRouter.post('/', createUserSchema, userController.create);

export default usersRouter;
