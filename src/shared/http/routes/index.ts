import productRouter from '@modules/products/routes/ProductsRoutes';
import avatarRouter from '@modules/users/routes/AvatarRoutes';
import sessionsRouter from '@modules/users/routes/SessionRoutes';
import usersRouter from '@modules/users/routes/UserRoutes';
import { response, Router } from 'express';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ message: 'Henlo dev! I am Aliveeeee' });
});
routes.use('/products', productRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter)
routes.use('/avatar', avatarRouter)

export default routes;
