import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async insert(user:IUser): Promise<IUser> {
    const columns: string = Object.keys(user)
      .map((item) => `${item}`).join(', ');

    const placeholders: string = Object.keys(user)
      .map((_item) => '?').join(', ');

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.users(${columns}) VALUES (${placeholders})`,
      [...Object.values(user)],
    );

    const newUSer = { id: insertId, ...user };
    return newUSer;
  }
}