import productRouter from '@modules/products/routes/ProductsRoutes';
import avatarRouter from '@modules/users/routes/AvatarRoutes';
import sessionsRouter from '@modules/users/routes/SessionRoutes';
import usersRouter from '@modules/users/routes/UserRoutes';
import express, { response, Router } from 'express';
import uploadConfig from '@config/upload';
import passwordRouter from '@modules/users/routes/PasswordRoutes';
import profileRouter from '@modules/users/routes/ProfileRouter';
import customerRouter from '@modules/customers/routes/CustomerRoutes';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ message: 'Henlo dev! I am Aliveeeee' });
});
routes.use('/products', productRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter)
routes.use('/avatar', avatarRouter)
routes.use('/files', express.static(uploadConfig.directory))
routes.use('/password', passwordRouter)
routes.use('/update', profileRouter)
routes.use('/customer',customerRouter)

export default routes;
