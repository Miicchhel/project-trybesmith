import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async insert(product: IProduct): Promise<IProduct> {
    const columns: string = Object.keys(product)
      .map((item) => `${item}`).join(', ');
  
    const placeholders: string = Object.keys(product)
      .map((_item) => '?').join(', ');
  
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.products(${columns}) VALUES (${placeholders})`,
      [...Object.values(product)],
    );

    const newProduct = { id: insertId, ...product }; 
    return newProduct;
  }

  async getAll():Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.products';
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(query);
    return rows;
  }
}