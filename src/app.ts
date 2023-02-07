import express from 'express';
import ProductController from './controllers/ProductController';
import UserController from './controllers/UserController';

const app = express();
const productController = new ProductController();
const userController = new UserController();

app.use(express.json());

app.post('/products', productController.insertProduct);
app.get('/products', productController.getAllProducts);

app.post('/users', userController.insertUser);

export default app;
