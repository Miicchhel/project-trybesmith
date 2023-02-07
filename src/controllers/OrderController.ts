import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  public orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  public getAllOrders = async (_req: Request, res: Response) => {
    const result = await this.orderService.getAllOrders();
    res.status(200).json(result);
  };
}