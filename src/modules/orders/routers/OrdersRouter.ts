import { Router } from 'express';
import {
  createOrderValidate,
  idParamsValidate,
} from '../schemas/OrdersSchemas';
import AuthMiddleware from '@shared/middlewares/authMiddleware';
import OrdersControllers from '../controllers/OrdersControllers';

const ordersRouter = Router();
const ordersController = new OrdersControllers();

ordersRouter.use(AuthMiddleware.execute);

ordersRouter.get('/:id', idParamsValidate, ordersController.show);
ordersRouter.post('/', createOrderValidate, ordersController.create);

export default ordersRouter;
