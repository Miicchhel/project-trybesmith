import express from 'express';
import ProductController from './controllers/ProductController';
import UserController from './controllers/UserController';
import OrderController from './controllers/OrderController';

const app = express();
const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

app.use(express.json());

app.post('/products', productController.insertProduct);
app.get('/products', productController.getAllProducts);

app.post('/users', userController.insertUser);

app.get('/orders', orderController.getAllOrders);

export default app;
