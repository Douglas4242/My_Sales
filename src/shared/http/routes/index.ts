import productRouter from '@modules/products/routes/ProductsRoutes';
import usersRouter from '@modules/users/routes/UserRoutes';
import { response, Router } from 'express';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ message: 'Henlo dev! I am Aliveeeee' });
});
routes.use('/users', usersRouter);
routes.use('/products', productRouter);

export default routes;
