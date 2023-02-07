import connection from '../models/connection';
import ProductModel from '../models/ProductModel';
import { IProduct } from '../interfaces';

export default class ProductService {
  public productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public async insertProduct(product:IProduct): Promise<IProduct> {
    const insertedProduct = await this.productModel.insert(product);
    return insertedProduct;
  }
}