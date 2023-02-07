import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll():Promise<IOrder[]> {
    const query = `SELECT o.id, o.user_Id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
                    FROM Trybesmith.orders o INNER JOIN Trybesmith.products p ON p.order_Id = o.id
                    GROUP BY o.id;`;
    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(query);
    return rows;
  }
}