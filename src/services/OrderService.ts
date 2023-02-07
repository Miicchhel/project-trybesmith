import connection from '../models/connection';
import OrderModel from '../models/OrderModels';
import { IOrder } from '../interfaces';

export default class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const allOrders = await this.orderModel.getAll();
    return allOrders;
  }
}