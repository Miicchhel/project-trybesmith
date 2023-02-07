import express from 'express';
import ProductController from './controllers/ProductController';

const app = express();
const productController = new ProductController();

app.use(express.json());

app.post('/products', (req, res) => { productController.insertProduct(req, res); });

export default app;
