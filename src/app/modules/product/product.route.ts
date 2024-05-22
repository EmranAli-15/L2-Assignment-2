import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProducts);

router.get('/:id', ProductControllers.getAProduct)

export const ProductRouter = router;