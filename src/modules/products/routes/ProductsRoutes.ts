import { Router } from 'express';
import ProductsControllers from '../controllers/ProductsControllers';

const productRouter = Router();
const productsControllers = new ProductsControllers();

productRouter.get('/', productsControllers.index);
productRouter.get('/:id', productsControllers.show);
productRouter.post('/', productsControllers.create);
productRouter.put('/:id', productsControllers.update);
productRouter.delete('/:id', productsControllers.delete);

export default productRouter;
