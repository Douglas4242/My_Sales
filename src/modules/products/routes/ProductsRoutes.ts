import { Router } from 'express';
import ProductsControllers from '../controllers/ProductsControllers';
import {
  createProductSchema,
  idParamsValidation,
  updateProductSchema,
} from '../schemas/ProductsSchema';

const productRouter = Router();
const productsControllers = new ProductsControllers();

productRouter.get('/', productsControllers.index);
productRouter.get('/:id', idParamsValidation, productsControllers.show);
productRouter.post('/', createProductSchema, productsControllers.create);
productRouter.put('/:id', updateProductSchema, productsControllers.update);
productRouter.delete('/:id', idParamsValidation, productsControllers.delete);

export default productRouter;
