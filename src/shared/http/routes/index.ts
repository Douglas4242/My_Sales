import productRouter from '@modules/products/routes/ProductsRoutes';
import usersRouter from '@modules/users/routes/UserRoutes';
import { response, Router } from 'express';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ message: 'Henlo dev! I am Aliveeeee' });
});
routes.use('/products', productRouter);
routes.use('/users', usersRouter);

export default routes;
