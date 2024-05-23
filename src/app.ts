import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import { ProductRouter } from './app/modules/product/product.route';
import { OrderRouter } from './app/modules/order/order.route';

app.use(express.json());
app.use(cors());


app.use('/api/products', ProductRouter);
app.use('/api/orders', OrderRouter);

app.get('/', (req: Request, res: Response) => {
    res.send("It's working properly");
})

export default app;