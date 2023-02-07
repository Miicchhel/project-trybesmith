import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  public productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public insertProduct = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const result = await this.productService.insertProduct({ name, amount });
    res.status(201).json(result);
  };
}