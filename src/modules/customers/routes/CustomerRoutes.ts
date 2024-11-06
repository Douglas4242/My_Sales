import { Router } from 'express';
import CustomerControllers from '../controllers/CustomerControllers';
import AuthMiddleware from '@shared/middlewares/authMiddleware';
import {
  createCustomerSchema,
  idParamsValidate,
  updateCustomerSchema,
} from '../schemas/CustomerSchemas';

const customerRouter = Router();
const customerController = new CustomerControllers();

customerRouter.use(AuthMiddleware.execute);

customerRouter.get('/', customerController.index);
customerRouter.get('/:id', idParamsValidate, customerController.show);
customerRouter.post('/', createCustomerSchema, customerController.create);
customerRouter.patch(
  '/id',
  idParamsValidate,
  updateCustomerSchema,
  customerController.update,
);
customerRouter.delete('/:', idParamsValidate, customerController.delete);

export default customerRouter;
