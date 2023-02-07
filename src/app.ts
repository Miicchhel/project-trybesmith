import express from 'express';
import ProductController from './controllers/ProductController';

const app = express();
const productController = new ProductController();

app.use(express.json());

app.post('/products', productController.insertProduct);
app.get('/products', productController.getAllProducts);

export default app;
